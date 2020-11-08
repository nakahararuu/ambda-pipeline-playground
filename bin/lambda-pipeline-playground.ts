#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { LambdaPipelinePlaygroundStack } from '../lib/lambda-pipeline-playground-stack';

const app = new cdk.App();
new LambdaPipelinePlaygroundStack(app, 'LambdaPipelinePlaygroundStack');
