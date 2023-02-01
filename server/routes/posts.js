const express=require('express')
const router=express.Router()
const {Post}=require('../models/posts')



router.get('/',async(req,res)=>{
    const allPosts=await Post.find()
    res.send(allPosts)
})
router.get('/:id',async(req,res)=>{
        try {
          const post = await Post.find({ userId: req.params.id });
          console.log(post)
          res.send(post);
        } catch (err) {
          console.error(err);
          res.status(500).send({ error: 'Failed to retrieve posts' });
        }
});

router.post('/', async (req, res) => {
    try {
      const posts = req.body;
      let savedPosts = await Post.insertMany(posts);
      savedPosts=await savedPosts.save()

      res.send(savedPosts);
    } catch (error) {
      res.status(500).send(error);
    }
  });
    
module.exports=router