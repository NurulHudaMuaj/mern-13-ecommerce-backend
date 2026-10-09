const  mongoose=require("mongoose");
require("dotenv").config();
const connectDB=async()=>{
     try{
    const connection=await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ldaxwkp.mongodb.net/?appName=Cluster0`);
     
     }
     catch(error){
     }
     
};
// mongodb+srv://<db_username>:<db_password>@cluster0.ldaxwkp.mongodb.net/?appName=Cluster0