const express = require("express"),
    cors = require("cors"),
    morgan = require("morgan"),
    indexRoutes = require("./routes");

const app = express();
const PORT = 3000

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.listen(PORT, () => {
    console.log("Servidor corriendo en http://localhost:"+PORT);
})

app.use(indexRoutes);


