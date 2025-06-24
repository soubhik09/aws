import AWS from 'aws-sdk';
import { v4 as uuidv4 } from 'uuid';

const s3 = new AWS.S3({
  region: process.env.AWS_REGION_NAME,
});

export const uploadFile = async (file: Express.Multer.File) => {
  const fileKey = `uploads/${uuidv4()}-${file.originalname}`;

  await s3.putObject({
    Bucket: process.env.AWS_BUCKET!,
    Key: fileKey,
    Body: file.buffer,
    ContentType: file.mimetype,
  }).promise();

  return fileKey;
};

export const getSignedUrl = (key: string) => {
  const signedUrl = s3.getSignedUrl('getObject', {
    Bucket: process.env.AWS_BUCKET!,
    Key: key,
    Expires: 60 * 5,
  });

  return signedUrl;
};
