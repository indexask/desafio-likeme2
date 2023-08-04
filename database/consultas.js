const { Pool } = require("pg");

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'postgres',
    database: 'likeme',
    port: 5432,
    allowExitOnIdle: true
})

const getAllPosts = async(req, res) => {
    try {
        const result = await pool.query("SELECT * FROM posts;")
        res.status(200).json(result.rows);
    }catch(err) {
        console.error(err.message);
        res.json({message: "Hemos tenido problemas con la petición"})
    }
}

const createPost = async(req, res) => {
    try {
        const {titulo, img, descripcion} = req.body;
        const sql = "INSERT INTO posts(titulo, img, descripcion) VALUES($1, $2, $3) RETURNING *";
        const result = await pool.query(sql, [titulo, img, descripcion])
        res.status(200).json({mensaje: `nuevo registro ${result.rows}`});
    }catch(err) {
        console.error(err.message);
        res.json({message: "Hemos tenido problemas con la petición"})
    }
}

const eliminarPost = async(req, res) => {
        try{ 
        const { id } = req.params
        const consulta = "DELETE FROM posts WHERE id = $1"
        const values = [id]
        const result = await pool.query(consulta, values)
        res.status(200).json({mensaje: `nuevo registro ${result.rows}`});
    }catch(err) {
        console.error(err.message);
        res.json({message: "Hemos tenido problemas con la petición"})
    }
}

const modificarLike = async(req, res) => {
    try{ 
        const { id } = req.params
        const { likes } = req.params
        const consulta = "UPDATE posts SET likes = $1 WHERE id = $2"
        const values = [likes, id]
        const result = await pool.query(consulta, values)
        res.status(200).json({mensaje: `nuevo registro ${result.rows}`});
    }catch(err) {
        console.error(err.message);
        res.json({message: "Hemos tenido problemas con la petición"})
    }
}

module.exports = {
    getAllPosts,
    createPost,
    eliminarPost,
    modificarLike
}