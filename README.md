# MHYS Destek Sistemi

AWS Amplify üzerinde çalışan müşteri destek sistemi uygulaması.

## Özellikler

- AWS Cognito ile kimlik doğrulama ve yetkilendirme
- AWS API Gateway ile RESTful API entegrasyonu
- AWS S3 ile dosya depolama
- AWS Amplify ile kolay dağıtım

## AWS Amplify Yapılandırması

Bu repo, AWS Amplify kullanarak MHYS Destek Sistemi'ni dağıtmak için gerekli konfigürasyon dosyalarını içerir:

- `amplify.yml`: AWS Amplify dağıtım yapılandırması
- `.env.production`: Üretim ortamı için çevre değişkenleri
- `amplify-deploy.sh`: Otomatik versiyon artırma ve dağıtım komut dosyası
- `src/amplify-config/index.ts`: Amplify servis yapılandırması

## Kullanım

### Geliştirme İçin

```bash
# Projeyi klonla
git clone https://github.com/mistikdiyebiri/mhys-app-amplify.git
cd mhys-app-amplify

# Bağımlılıkları yükle
npm install

# Geliştirme sunucusunu başlat
npm start
```

### Dağıtım İçin

```bash
# Dağıtım betiğine çalıştırma izni ver
chmod +x amplify-deploy.sh

# Dağıtım betiğini çalıştır
./amplify-deploy.sh
```

## AWS Amplify Konsol Yapılandırması

1. AWS Amplify konsolunda yeni bir uygulama oluşturun
2. GitHub ile bağlayın ve bu repoyu seçin
3. Varsayılan yapılandırmayı kullanın (amplify.yml dosyasını otomatik olarak algılayacaktır)
4. Dağıtımı başlatın
5. Ortam değişkenlerini AWS Amplify konsolu üzerinden ayarlayın:
   - REACT_APP_AWS_REGION
   - REACT_APP_COGNITO_USER_POOL_ID
   - REACT_APP_COGNITO_USER_POOL_CLIENT_ID
   - REACT_APP_COGNITO_IDENTITY_POOL_ID
   - REACT_APP_API_ENDPOINT
   - REACT_APP_S3_BUCKET

## Lisans

Tüm hakları saklıdır. © 2025