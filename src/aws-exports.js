// Geliştirme ortamı için mock Amplify konfigürasyonu
// Bu dosya sadece geliştirme ortamında kullanılır
// Gerçek ortamda AWS Amplify CLI tarafından oluşturulur

const awsmobile = {
  "aws_project_region": "eu-west-1",
  "aws_cognito_identity_pool_id": "mock-identity-pool-id",
  "aws_cognito_region": "eu-west-1",
  "aws_user_pools_id": "mock-user-pool-id",
  "aws_user_pools_web_client_id": "mock-client-id",
  "oauth": {},
  "aws_user_files_s3_bucket": "mock-s3-bucket",
  "aws_user_files_s3_bucket_region": "eu-west-1",
  "aws_cloud_logic_custom": [
    {
      "name": "tickets",
      "endpoint": "https://mock-api-gateway.execute-api.eu-west-1.amazonaws.com/dev",
      "region": "eu-west-1"
    }
  ]
};

export default awsmobile;