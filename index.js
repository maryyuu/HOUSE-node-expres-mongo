import express from 'express';
const app = express();
app.get("/", (req , res)=>{
    res.send("Node js")
})
app.listen(3000, () => {
    console.log('Server listening on port 3000')
});