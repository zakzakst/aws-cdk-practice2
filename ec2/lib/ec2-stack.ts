import * as cdk from "aws-cdk-lib/core";
import { Construct } from "constructs";
import * as ec2 from "aws-cdk-lib/aws-ec2";

export interface Ec2StackProps extends cdk.StackProps {
  /**
   * Name of an existing EC2 KeyPair to enable SSH access
   * @default 'my-cdk-ec2'
   */
  readonly keyName?: string;
}
export class Ec2Stack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: Ec2StackProps) {
    super(scope, id, props);

    // デフォルトのpropsを設定
    props = {
      ...props,
      keyName: props.keyName ?? "my-cdk-ec2",
    };

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'Ec2Queue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}
