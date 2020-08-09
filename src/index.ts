import express, { Application } from 'express';
import ProductRoutes from './router/relatedProduct.router';
import morgan from 'morgan';
import cors from 'cors';
import mongoose from 'mongoose';
require('./database');
const path = require('path');

class Server {

    public app: Application;

    constructor() {
        this.app = express();
        this.config();
        this.router();

    }

    config(): void {
        this.app.use(express.static("public"))
        this.app.set('port', process.env.PORT || 5021)// Puerta para randonen puerto
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.set('view engine','ejs')
        this.app.set('views', path.join(__dirname, 'views'));
        this.app.use(express.urlencoded({ extended: false }));
        
    }

    router(): void {
        this.app.use(ProductRoutes);
    }

    start(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log("Server on port ", this.app.get('port'))
        })
    }
}

const server = new Server()
server.start();