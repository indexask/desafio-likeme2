const { Router } = require("express"),
    {getAllPosts, createPost, eliminarPost, modificarLike} = require("./consultas")

const router = Router();

router.get("/posts", getAllPosts);
router.post("/posts", createPost);
router.delete("/posts/:id", eliminarPost) 
router.put("/posts/like/:id/:likes", modificarLike )

module.exports = router;