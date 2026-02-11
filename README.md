# aws-cdk-practice2

## コマンドメモ

```
cdk init -l typescript

cdk acknowledge 34892

cdk cli-telemetry --disable

AWS_PROFILE=admin cdk migrate --stack-name template --from-path ./template.yaml -l typescript
```

## IaCジェネレータ ダウンロードメモ

- 0205: 1つのEC2インスタンスのIDで検索してヒットしたものからテンプレート作成
- 0205-2: 1つのVPCのIDで検索してヒットしたものからテンプレート作成
  - 0205でVPC連携でエラー出たのでVPCでテンプレート作成してみたが、結局VPCのIDでエラー出た
- 0212: 1つのS3のIDで検索してヒットしたものからテンプレート作成
  - resourceのところでエラーが出た
