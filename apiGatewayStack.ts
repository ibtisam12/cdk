import * as apigateway from '@aws-cdk/aws-apigateway';

const api = new apigateway.RestApi(this, 'HelloWorldAPI');

const helloWorldLambdaIntegration = new apigateway.LambdaIntegration(helloWorldLambda);

api.root.addMethod('GET', helloWorldLambdaIntegration);


