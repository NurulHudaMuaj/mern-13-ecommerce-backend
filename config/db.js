const  mongoose=require("mongoose");
const connectDB=async()=>{
     try{
    const connection=await mongoose.connect(` mongodb+srv://<db_username>:<db_password>@cluster0.ldaxwkp.mongodb.net/?appName=Cluster0`);
     
     }
     catch(error){
     }
     
};
// mongodb+srv://<db_username>:<db_password>@cluster0.ldaxwkp.mongodb.net/?appName=Cluster0