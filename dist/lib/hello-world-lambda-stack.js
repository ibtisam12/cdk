"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelloWorldLambdaStack = void 0;
const cdk = require("@aws-cdk/core");
const lambda = require("@aws-cdk/aws-lambda");
class HelloWorldLambdaStack extends cdk.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        // Define your Lambda function
        const helloWorldLambda = new lambda.Function(this, 'HelloWorldLambda', {
            runtime: lambda.Runtime.NODEJS_14_X,
            handler: 'index.handler',
            code: lambda.Code.fromAsset('lambda') // Assuming your Lambda code is in a folder named 'lambda'
        });
    }
}
exports.HelloWorldLambdaStack = HelloWorldLambdaStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVsbG8td29ybGQtbGFtYmRhLXN0YWNrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vaGVsbG8td29ybGQtbGFtYmRhLXN0YWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFDQUFxQztBQUNyQyw4Q0FBOEM7QUFFOUMsTUFBYSxxQkFBc0IsU0FBUSxHQUFHLENBQUMsS0FBSztJQUNsRCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQXNCO1FBQ2xFLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRXhCLDhCQUE4QjtRQUM5QixNQUFNLGdCQUFnQixHQUFHLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsa0JBQWtCLEVBQUU7WUFDckUsT0FBTyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVztZQUNuQyxPQUFPLEVBQUUsZUFBZTtZQUN4QixJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsMERBQTBEO1NBQ2pHLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRjtBQVhELHNEQVdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgY2RrIGZyb20gJ0Bhd3MtY2RrL2NvcmUnO1xuaW1wb3J0ICogYXMgbGFtYmRhIGZyb20gJ0Bhd3MtY2RrL2F3cy1sYW1iZGEnO1xuXG5leHBvcnQgY2xhc3MgSGVsbG9Xb3JsZExhbWJkYVN0YWNrIGV4dGVuZHMgY2RrLlN0YWNrIHtcbiAgY29uc3RydWN0b3Ioc2NvcGU6IGNkay5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzPzogY2RrLlN0YWNrUHJvcHMpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHByb3BzKTtcbiAgICBcbiAgICAvLyBEZWZpbmUgeW91ciBMYW1iZGEgZnVuY3Rpb25cbiAgICBjb25zdCBoZWxsb1dvcmxkTGFtYmRhID0gbmV3IGxhbWJkYS5GdW5jdGlvbih0aGlzLCAnSGVsbG9Xb3JsZExhbWJkYScsIHtcbiAgICAgIHJ1bnRpbWU6IGxhbWJkYS5SdW50aW1lLk5PREVKU18xNF9YLFxuICAgICAgaGFuZGxlcjogJ2luZGV4LmhhbmRsZXInLFxuICAgICAgY29kZTogbGFtYmRhLkNvZGUuZnJvbUFzc2V0KCdsYW1iZGEnKSAvLyBBc3N1bWluZyB5b3VyIExhbWJkYSBjb2RlIGlzIGluIGEgZm9sZGVyIG5hbWVkICdsYW1iZGEnXG4gICAgfSk7XG4gIH1cbn1cblxuIl19