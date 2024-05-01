import { Router } from "express";
import fs from 'fs';

const router = Router();

router.get('/', (req,res) => {
        const data = JSON.parse(fs.readFileSync('./src/products.json','utf-8'));
        console.log(data);
        res.render('home', {data})
})
router.get('/realtimeproducts',(req,res) =>{
    const data = JSON.parse(fs.readFileSync('./src/products.json','utf-8'));
    res.render('realTimeProducts', {data});
    
})
export default router;