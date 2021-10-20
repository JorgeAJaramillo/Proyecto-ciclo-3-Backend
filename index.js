const express = require('express');
const routes = require('./routes');
const morgan = require('morgan');
const mongoose = require('mongoose');
const dbConfig = require('./config/db');
const cors = require('cors');

//inicializando nuestra aplicación de express
const app = express();

//usando cors para peticiones de origen cruzado para recursos compartidos
app.use(cors());

app.use(express.json())

mongoose.connect(dbConfig.dbStringConnect)
    .then(db => console.log("db connected"))
    .catch(err => console.error(err))

const port = 3001;

app.use(morgan("dev"))

app.get('/', (req, res) => {
    res.json({ status: 200 });
})

app.use('/productos', routes.productosRoutes);
app.use('/ventas', routes.ventasRoutes);
app.use('/usuarios', routes.usuariosRoutes);

app.listen(port, () => {
    console.log(`listening on port http://localhost:${port}`);
});