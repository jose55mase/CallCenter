import { Request, Response, response } from 'express';
import bodyParser = require('body-parser');
import productModel from '../models/randoProduct.models';
const path = require('path');
const dir = `${__dirname}./../public/`;
 
class ProductController{
  
  public async getSliderProduct(req: Request, res: Response):Promise<any>{    
    var product =  await productModel.save(req,res)
    console.log(product)
    res.json(product)
    //console.log("Completo")
    
  }

  public async editData(req: Request, res: Response):Promise<any>{    
    var product =  await productModel.edit(req,res)   
    res.json(product) 
    /*
    //res.json(product)
    console.log("Completo")
    */
  }

  public async getList(req: Request, res:Response):Promise<any>{
    //res.sendFile(path.join(__dirname+'./../public/index.html'))
    let product = await productModel.getList(req,res)    
  }
}
export default new ProductController
