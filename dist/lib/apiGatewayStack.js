"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apigateway = require("@aws-cdk/aws-apigateway");
const api = new apigateway.RestApi(this, 'HelloWorldAPI');
const helloWorldLambdaIntegration = new apigateway.LambdaIntegration(helloWorldLambda);
api.root.addMethod('GET', helloWorldLambdaIntegration);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpR2F0ZXdheVN0YWNrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vYXBpR2F0ZXdheVN0YWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0RBQXNEO0FBRXRELE1BQU0sR0FBRyxHQUFHLElBQUksVUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsZUFBZSxDQUFDLENBQUM7QUFFMUQsTUFBTSwyQkFBMkIsR0FBRyxJQUFJLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0FBRXZGLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSwyQkFBMkIsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgYXBpZ2F0ZXdheSBmcm9tICdAYXdzLWNkay9hd3MtYXBpZ2F0ZXdheSc7XG5cbmNvbnN0IGFwaSA9IG5ldyBhcGlnYXRld2F5LlJlc3RBcGkodGhpcywgJ0hlbGxvV29ybGRBUEknKTtcblxuY29uc3QgaGVsbG9Xb3JsZExhbWJkYUludGVncmF0aW9uID0gbmV3IGFwaWdhdGV3YXkuTGFtYmRhSW50ZWdyYXRpb24oaGVsbG9Xb3JsZExhbWJkYSk7XG5cbmFwaS5yb290LmFkZE1ldGhvZCgnR0VUJywgaGVsbG9Xb3JsZExhbWJkYUludGVncmF0aW9uKTtcblxuXG4iXX0=