import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';

export class HelloWorldLambdaStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    
    // Define your Lambda function
    const helloWorldLambda = new lambda.Function(this, 'HelloWorldLambda', {
      runtime: lambda.Runtime.NODEJS_14_X,
      handler: 'index.handler',
      code: lambda.Code.fromAsset('lambda') // Assuming your Lambda code is in a folder named 'lambda'
    });
  }
}

