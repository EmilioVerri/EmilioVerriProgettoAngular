import { ShopStep } from './shop-step.interface';

export interface Shop {
    id: number;
    title: string;
    description: string;
    steps: ShopStep[];
    users: string[];
}