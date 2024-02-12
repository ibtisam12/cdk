import * as s3 from '@aws-cdk/aws-s3';
import * as cloudfront from '@aws-cdk/aws-cloudfront';

const bucket = new s3.Bucket(this, 'StaticSiteBucket');

const distribution = new cloudfront.CloudFrontWebDistribution(this, 'StaticSiteDistribution', {
  originConfigs: [
    {
      s3OriginSource: {
        s3BucketSource: bucket
      },
      behaviors: [{ isDefaultBehavior: true }]
    }
  ]
});

