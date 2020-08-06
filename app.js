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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening at PORT ${PORT}`));
