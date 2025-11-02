# Integrasi dengan API
- dokumentasi (swagger) dan api bisa diakses di https://api-dev.pycon.id/docs
- untuk mengakses api public. tinggal klik saja pada swagger
- untuk mengakses api private (gembok) buat akun terlebih dahulu
## Membuat akun
terdapat 2 cara membuat akun
### Melalui swagger
- access api POST /auth/email/signup/ isi username, email dan password (email harus asli)
- cek email. backend akan mengirim email aktivasi email
- backend akan mengirim link aktivasi dengan format {fronten_url}/email-verification/?token={toke} copy token
- access api GET /auth/email/verified/ masukan parameter token dengan token yang dicopy
- pada swagger masukan username dan password untuk login pada swagger
![swagger authorize button](./img/swagger%20authorize%20button.png)
![username password](./img/username%20and%20password.png)
- jika login success maka bisa mengakses api private

### Melalui UI (TODO masih on progress)
- set .env dengan https://api-dev.pycon.id/
- run FE di development
- masuk ke halaman /register lalu buat akun menggunakan email (gunakan email asli)
- cek email lalu klik aktivasi email. aplikasi akan redirect ke localhost
- pada swagger masukan username dan password untuk login pada swagger
![swagger authorize button](./img/swagger%20authorize%20button.png)
![username password](./img/username%20and%20password.png)
- jika login success maka bisa mengakses api private
