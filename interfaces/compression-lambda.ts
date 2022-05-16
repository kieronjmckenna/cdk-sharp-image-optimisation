// src/@types/dom.ts (or any file included in the tsc compilation)
export {};

declare global {
  type ReadableStream = unknown;
}

export interface CompressionLambdaEnv {
  [key: string]: string;
  CONTENT_BUCKET: string;
}
