import * as cdk from '@aws-cdk/core';
import { MyCDKAppStack } from './my-cdk-app-stack';

export class MyCDKStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    
    new MyCDKAppStack(this, 'MyCDKAppStack');
  }
}

