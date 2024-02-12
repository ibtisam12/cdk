import * as cdk from '@aws-cdk/core';
import { HelloWorldLambdaStack } from './hello-world-lambda-stack';

export class MyCDKAppStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    
    new HelloWorldLambdaStack(this, 'HelloWorldLambdaStack');
    // Define other stacks or resources as needed
  }
}

