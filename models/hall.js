import mongoose from "mongoose";


const HallSchema = new mongoose.Schema({
    name:{
        type : String,
        required: true 
      
    },
    type:{
        type : String,
        required: true,
        
    },
    country:{
        type : String,
    },
    address:{
        type : String,
        required:true, 
    },
    city:{
        type : String,
       
    },
    distance:{
        type : [String],
        
    },
    tittle:{
        type : String,
        required:true,
    },
    desc:{
        type : String,
       required:true,
    },
    rating:{
        type : Number,
        min: 0,
        max: 5,
    },
    seats:{
        type : [String],
       
    },
    cheapestPrice:{
        type :Number,
        required:true,
       
    },
    featured:{
        type : Boolean,
        default: false,
       
    },
    
},
{
      timestamps: true
});

export default mongoose.model("Hall",HallSchema)