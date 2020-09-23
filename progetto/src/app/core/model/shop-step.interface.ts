/**
 * interfaccia che rappresenta lo step di un Todo
 */
export interface ShopStep { //definisco interfaccia dove salvo lo shop
    /**
     * Definisce l'id dello step
     */
    id: number;
    /**
     * il titolo dello step
     */
    title: string;
    /**
     * indica se lo step è stato eseguito
     */
    done: boolean;
}