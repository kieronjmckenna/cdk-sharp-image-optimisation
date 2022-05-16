import { S3Handler } from 'aws-lambda';
import { CompressionLambdaEnv } from '../../interfaces/compression-lambda';
import {
  S3Client,
  GetObjectCommand,
  PutObjectCommand,
  DeleteObjectCommand,
} from '@aws-sdk/client-s3';

import sharp from 'sharp';
import { Readable } from 'stream';

const { CONTENT_BUCKET: contentBucket } =
  process.env as unknown as CompressionLambdaEnv;

const client = new S3Client({ region: process.env.AWS_REGION });

const streamToString = (stream: Readable): Promise<Buffer> => {
  return new Promise((resolve, reject) => {
    const chunks: any[] = [];
    stream.on('data', (chunk) => chunks.push(chunk));
    stream.on('error', reject);
    stream.on('end', () => resolve(Buffer.concat(chunks)));
  });
};

export const handler: S3Handler = async (event) => {
  console.log('[handler] Image optimisation lambda starting');
  const uploadBucket = event.Records[0].s3.bucket.name;
  const key = decodeURIComponent(
    event.Records[0].s3.object.key.replace(/\+/g, ' ')
  );

  try {
    const getObj = new GetObjectCommand({
      Bucket: uploadBucket,
      Key: key,
    });

    const data = await client.send(getObj);

    const body = await streamToString(data.Body as Readable);

    const image = await sharp(body).toFormat('webp').webp().toBuffer();

    const name = key.substring(0, key.lastIndexOf('.')) || key;
    const uploadImage = new PutObjectCommand({
      Bucket: contentBucket,
      Key: `${name}.webp`,
      Body: image,
    });

    await client.send(uploadImage);

    const deleteObj = new DeleteObjectCommand({
      Bucket: uploadBucket,
      Key: key,
    });

    await client.send(deleteObj);
  } catch (err) {
    console.log(err);
  }
};
