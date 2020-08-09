//const pool = require('../database');
//import {Document, model, Model, Schema} from 'mongoose';
//const mongoose = require('mongoose');

import { Request, Response, response } from 'express';
const moment = require('moment')




import ProductMongo, {ProductEntity} from '../entity/producto.entity'


class ProductModel {  
  public async save(req?: any, res?:any){  

    console.log(req.body)
    var product: ProductEntity = new ProductMongo({
      id: Date.now(),
      date:moment().format('hh:mm:ss'),
      nambre:req.body.data.nambre,
      DNI:req.body.data.DNI,
      IBAN:req.body.data.IBAN,
      CUPS:req.body.data.CUPS,
      email:req.body.data.email,
      movil:req.body.data.movil,
      descripcion:req.body.data.descripcion
    });
    await product.save()
    
    
    /*
    */
    /*  
    const productEntity : ProductEntity[] = await ProductMongo.find({parent_path:{ $regex: '.*' + req.categoria_id + '.*' }}).limit(500)
    console.log("Respusta", parseInt(req.categoria_id))
    let data = ({"Resultados":productEntity})
    return ({"data":data})   <% data.id %> ,<% data.date %> ,<% data.nambre %> ,<% data.DNI %> ,<% data.IBAN %> ,<% data.CUPS %> ,<% data.email %> ,<% data.movil %> ,<% data.descripcion %>
    */ 
  }  
  public async getList(req: Request, res:Response){
    ProductMongo.find({}).exec((err,data)=>{
      res.render('../views/index',{data:data})      
    })
  }

  public async edit(req?: any, res?:any){  

    var update = {
      nambre:req.body.data.nambre,
      DNI:req.body.data.DNI,
      IBAN:req.body.data.IBAN,
      CUPS:req.body.data.CUPS,
      email:req.body.data.email,
      movil:req.body.data.movil,
      descripcion:req.body.data.descripcion
    }
    
    ProductMongo.updateOne( {id:req.body.data.id}, {$set: update}, { new: true },function(err,res){
      if (err) throw err;
      console.log("Regiostro actulizado");
      return ({data:"200"})
      
        
    })
      
  }  


}
const productModel = new ProductModel;
export default productModel;
/*
var poolResponse = pool.connect().then(async () => {
  const request = new sql.Request(pool);
  const Resultados = await request.query(product);        
  pool.close();


  let responsePool = MongoClient.connect(url, function(err:any, db:any) {
      var dbo = db.db("kiero");

      var data =  dbo.collection("joxe").find({}, { productoMolde: {} }).toArray(function(err:any, result:any) {
        db.close();
        console.log(result)
        return result;
      });
      return data
    });
    return (responsePool);


*/