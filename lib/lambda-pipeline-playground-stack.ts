import { Stack, StackProps, Construct } from '@aws-cdk/core';
import { NodejsFunction } from '@aws-cdk/aws-lambda-nodejs';
import { LambdaRestApi } from '@aws-cdk/aws-apigateway';

export class LambdaPipelinePlaygroundStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const lambdaFunction = new NodejsFunction(this, 'my-handler');

    new LambdaRestApi(this, 'API', {
      handler: lambdaFunction,
      proxy: true,
    })
  }
}

