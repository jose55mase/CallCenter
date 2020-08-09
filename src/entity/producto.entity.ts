import mongoose, { Schema, model} from 'mongoose';

export interface ProductEntity extends mongoose.Document{
    id: Number,
    date:String,
    nambre:String,
    DNI:String,
    IBAN:String,
    CUPS:String,
    email:String,
    movil:String,
    descripcion:String
    
}
       

const productSchema = new Schema({
    id: Number,
    date:String,
    nambre:String,
    DNI:String,
    IBAN:String,
    CUPS:String,
    email:String,
    movil:String,
    descripcion:String
},{ collection : 'testing' });

export default model<ProductEntity>("testing", productSchema);