# API COVID-19 KALIMANTAN TENGAH

API ini awalnya saya buat karena keresahan saya, susahnya mendapatkan data akurat tentang penyebaran COVID-19 di Kalimantan Tengah.
Cara saya mendapatkan sumber data adalah menggunakan chrome network dev tool yang digunakkan pada website https://corona.kalteng.go.id/.
Saya menemukan bahwa data berasal dari https://corona.kalteng.go.id/data_geojson. Namun data ini masih kurang ringkas dimana data langsung
mencampur coordinat dan data penyebaran. Oleh itu saya membuat API yang memodifikasi data sehingga lebih mudah dibaca.

---

## Endpoint:
  * /api/kabupaten
  * /api
>Untuk saat hanya ada beberapa endpoint. Kedepannya akan ada penambahan data dan endpoint.

## Deployment:
>[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/git?s=https%3A%2F%2Fgithub.com%2FReynadi531%2Fapi-covid19-kalteng) atau
>[JSON API](https://api-covid19-kalteng.vercel.app/)

## Problems:
> Kadang bisa error dan masih belum stabil

## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**
