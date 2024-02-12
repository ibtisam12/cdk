import * as lambda from '@aws-cdk/aws-lambda';

export const helloWorldLambda = new lambda.Function(this, 'HelloWorldLambda', {
  runtime: lambda.Runtime.NODEJS_14_X,
  handler: 'index.handler',
  code: lambda.Code.fromAsset('lambda')
});

