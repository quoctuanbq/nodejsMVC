 const express= require("express")
 const app = express();
 require('dotenv').config();

 const PORT=process.env.PORT || 5000
 app.get('/',(req, res,next) => {
    console.log("hiu");
    res.send(200)

})
 app.use((req, res,next) => {
    const err=new Error();
    err.message="Loi roi ne";
    err.status=500;
    next(err);
})
app.use((err,req, res, next) => {
 res.send(err)
})


 

 app.listen(PORT,()=>{
     console.log(`Server listening at ${PORT}`);
 });