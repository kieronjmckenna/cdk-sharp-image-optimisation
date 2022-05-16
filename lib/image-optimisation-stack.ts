import { Duration, Stack, StackProps } from 'aws-cdk-lib';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { Bucket, EventType } from 'aws-cdk-lib/aws-s3';
import { LambdaDestination } from 'aws-cdk-lib/aws-s3-notifications';
import { Construct } from 'constructs';
import { CompressionLambdaEnv } from '../interfaces/compression-lambda';

export class ImageOptimisationStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const uploadBucket = new Bucket(this, 'UploadBucket', {});

    const contentBucket = new Bucket(this, 'ContentBucket');

    const compressLambda = new NodejsFunction(this, 'CompressLambda', {
      entry: 'src/image-optimisation/lambda.ts',
      timeout: Duration.minutes(5),
      memorySize: 1024,
      bundling: {
        nodeModules: ['sharp'],
        forceDockerBundling: true,
      },
      environment: {
        CONTENT_BUCKET: contentBucket.bucketName,
      } as CompressionLambdaEnv,
    });

    uploadBucket.grantRead(compressLambda);
    uploadBucket.grantDelete(compressLambda);
    contentBucket.grantWrite(compressLambda);

    uploadBucket.addEventNotification(
      EventType.OBJECT_CREATED,
      new LambdaDestination(compressLambda)
    );
  }
}
