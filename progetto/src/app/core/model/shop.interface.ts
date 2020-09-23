import { ShopStep } from './shop-step.interface';

export interface Shop { //interfaccio generale
    id: number;
    title: string;
    description: string;
    steps: ShopStep[];
    users: string[];
}