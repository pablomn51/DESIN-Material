import { Categoria } from "./categoria";

export interface Producto {
    _id?:string;
    name:string;
    img?:string;
    price:number;
    category:Categoria;
    extras?:ProductoExtra[];
}

export interface ProductoExtra{
    label:string;
    blocks?:BloqueProductoExtra[];
}

export interface BloqueProductoExtra{
    name:string;
    img:string;
    options:OpcionProductoExtra[];
}

export interface OpcionProductoExtra{
    name?:string;
    price:number;
    activate:boolean;
}