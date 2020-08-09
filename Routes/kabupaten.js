const router = require('express').Router();
const axios = require('axios');

const bulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
let data = [];
let total = []

router.get('/', async(req, res) => {
    let terkonfirmasi = [];
    let sembuh = [];
    let meninggal = [];
    let odp = [];
    let pdp = [];
    let dirawat = [];
    const response = await axios.get('https://corona.kalteng.go.id/data_geojson');
    for(let i=0; i < response.data.features.length; i++) {
        terkonfirmasi.push(response.data.features[i].properties.positif);
        sembuh.push(response.data.features[i].properties.sembuh);
        meninggal.push(response.data.features[i].properties.meninggal);
        odp.push(response.data.features[i].properties.odp);
        pdp.push(response.data.features[i].properties.pdp);
        dirawat.push(terkonfirmasi[i] - sembuh[i] - meninggal[i]);
    }

    res.json({
        "terkonfirmasi" : terkonfirmasi.reduce((a, b) => a + b, 0),
        "dirawat" : dirawat.reduce((a, b) => a + b, 0),
        "sembuh" : sembuh.reduce((a, b) => a + b, 0),
        "meninggal" : meninggal.reduce((a, b) => a + b, 0),
        "odp" : odp.reduce((a, b) => a + b, 0),
        "pdp" : pdp.reduce((a, b) => a + b, 0),
        "lastUpdate" : new Date()
    })
});

router.get('/kabupaten', async(req, res) => {
    const response = await axios.get('https://corona.kalteng.go.id/data_geojson');
    for (let i = 0; i < response.data.features.length; i++) {
        let nama = response.data.features[i].properties.urai;
        let terkonfirmasi = response.data.features[i].properties.positif;
        let sembuh = response.data.features[i].properties.sembuh;
        let meninggal = response.data.features[i].properties.meninggal;
        let odp = response.data.features[i].properties.odp;
        let pdp = response.data.features[i].properties.pdp;
        let tipe = response.data.features[i].properties.tipe;
        let lastUpdate = response.data.features[i].properties.update;
        let dirawat = terkonfirmasi-sembuh-meninggal;
        let hari_date = lastUpdate.split(' ')[1];
        let bulan_date = bulan.indexOf(lastUpdate.split(' ')[2]);
        let tahun_date = lastUpdate.split(' ')[3];
        let jam_date = lastUpdate.split(' ')[4].split(':')[0];
        let menit_date = lastUpdate.split(' ')[4].split(':')[1];
        let d = new Date(tahun_date, bulan_date, hari_date, jam_date, menit_date);
        data.push({
            "id": i+1,
            "nama": nama,
            "tipe": tipe,
            "odp": odp,
            "pdp": pdp, 
            "tekonfirmasi": terkonfirmasi,
            "dirawat": dirawat,
            "sembuh": sembuh,
            "meninggal": meninggal,
            "update": lastUpdate,
            "lastUpdate": d
        });
    }
    data.length = 14;
    res.json(data);
});

module.exports = router;
