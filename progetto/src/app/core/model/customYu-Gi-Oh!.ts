import { Identifier } from 'typescript';
import { Yugioh } from './Yu-Gi-Oh!';

export interface CustomYugioh {
    yugioh: Yugioh;
    userId:number;
    id: number;
    brand: string;
    price:number;
    color:string;
    img: string;
}