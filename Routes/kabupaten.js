const router = require('express').Router();
const axios = require('axios');

let data = [];
router.get('/kabupaten', async(req, res) => {
    const response = await axios.get('https://corona.kalteng.go.id/data_geojson');
    for (let i = 0; i < response.data.features.length; i++) {
        let nama = response.data.features[i].properties.urai;
        let terkonfirmasi = response.data.features[i].properties.positif;
        let sembuh = response.data.features[i].properties.sembuh;
        let meninggal = response.data.features[i].properties.meninggal;
        let lastUpdate = response.data.features[i].properties.update;
        let dirawat = terkonfirmasi-sembuh-meninggal;
        data.push({
            "kabupaten": nama,
            "tekonfirmasi": terkonfirmasi,
            "dirawat": dirawat,
            "sembuh": sembuh,
            "meninggal": meninggal,
            "lastUpdate": lastUpdate
        });
    }
    res.json(data);
});

module.exports = router;
