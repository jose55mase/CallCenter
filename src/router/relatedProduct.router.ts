import { Router } from 'express'
import ProductController from '../controller/randonProduct.controller'
import  path from 'path'
 
 
//import {  } from './templates'
 
class UserRoutes{
    router:Router = Router();
 
     constructor(){
          this.config();
     }
     config():void{
          this.router.post('/register/save',ProductController.getSliderProduct)
          this.router.post('/register/edit',ProductController.editData) 
          this.router.get('/joxe',ProductController.getList)                 
     }
}
 
export default new UserRoutes().router;
//export default walkToPay_Routes.router;
