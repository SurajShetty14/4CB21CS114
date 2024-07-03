const express=require("express");
const app= express();

const products_routes = require("./routes/products")

const PORT=process.env.port || 3000;
app.get("/",(req,res) =>{
 res.send("Hi, am alive");
});

app.use("/api/products",products_routes)


const start = async () => {
    try {
      const PORT = 3000; // You need to define the PORT
      app.listen(PORT, () => {
        console.log(`${PORT} yes i am connected`);
      });
    } catch (error) {
      console.log(error);
    }
  };
  
  start();