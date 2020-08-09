const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use(helmet());

const kabupatenRoutes = require('./Routes/kabupaten');

app.use('/api', kabupatenRoutes);

app.get('/', (req, res) => {
    res.json({
        "Messages" : "Selamat Datang di API COVID-19 Kalimantan Tengah by Rey 2020",
        "Endpoints": {
           "total" : "https://api-covid19-kalteng.vercel.app/api/",
            "kabupaten" : "https://api-covid19-kalteng.vercel.app/api/kabupaten"
        }
    })
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening at PORT ${PORT}`));
