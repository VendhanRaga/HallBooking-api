import express from "express";
import Hall from "../models/hall.js"
const router = express.Router();
//create
router.post("/",async (req,res)=>{
    const newHall = new Hall(req.body)
    try {
        const savedHall = await newHall.save()
        res.status(200).json(savedHall)
    } catch (error) {
        res.send(500).json(err)
    }
})
//update

router.put("/:id",async (req,res)=>{
    
    try {
        const updatedHall = await Hall.findByIdAndUpdate
        (req.params.id,
            {$set:req.body},
           {new:true} )
        res.status(200).json(updatedHall)
    } catch (error) {
        res.send(500).json(err)
    }
})

//delete

router.delete("/:id",async (req,res)=>{
    
    try {
      await Hall.findByIdAndDelete
        (req.params.id
         )
        res.status(200).json("deleted successfully")
    } catch (error) {
        res.send(500).json(err)
    }
})

export default router 