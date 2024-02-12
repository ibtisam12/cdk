"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const s3 = require("@aws-cdk/aws-s3");
const cloudfront = require("@aws-cdk/aws-cloudfront");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvdWRGcm9udFN0YWNrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vY2xvdWRGcm9udFN0YWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXNDO0FBQ3RDLHNEQUFzRDtBQUV0RCxNQUFNLE1BQU0sR0FBRyxJQUFJLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLGtCQUFrQixDQUFDLENBQUM7QUFFdkQsTUFBTSxZQUFZLEdBQUcsSUFBSSxVQUFVLENBQUMseUJBQXlCLENBQUMsSUFBSSxFQUFFLHdCQUF3QixFQUFFO0lBQzVGLGFBQWEsRUFBRTtRQUNiO1lBQ0UsY0FBYyxFQUFFO2dCQUNkLGNBQWMsRUFBRSxNQUFNO2FBQ3ZCO1lBQ0QsU0FBUyxFQUFFLENBQUMsRUFBRSxpQkFBaUIsRUFBRSxJQUFJLEVBQUUsQ0FBQztTQUN6QztLQUNGO0NBQ0YsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgczMgZnJvbSAnQGF3cy1jZGsvYXdzLXMzJztcbmltcG9ydCAqIGFzIGNsb3VkZnJvbnQgZnJvbSAnQGF3cy1jZGsvYXdzLWNsb3VkZnJvbnQnO1xuXG5jb25zdCBidWNrZXQgPSBuZXcgczMuQnVja2V0KHRoaXMsICdTdGF0aWNTaXRlQnVja2V0Jyk7XG5cbmNvbnN0IGRpc3RyaWJ1dGlvbiA9IG5ldyBjbG91ZGZyb250LkNsb3VkRnJvbnRXZWJEaXN0cmlidXRpb24odGhpcywgJ1N0YXRpY1NpdGVEaXN0cmlidXRpb24nLCB7XG4gIG9yaWdpbkNvbmZpZ3M6IFtcbiAgICB7XG4gICAgICBzM09yaWdpblNvdXJjZToge1xuICAgICAgICBzM0J1Y2tldFNvdXJjZTogYnVja2V0XG4gICAgICB9LFxuICAgICAgYmVoYXZpb3JzOiBbeyBpc0RlZmF1bHRCZWhhdmlvcjogdHJ1ZSB9XVxuICAgIH1cbiAgXVxufSk7XG5cbiJdfQ==