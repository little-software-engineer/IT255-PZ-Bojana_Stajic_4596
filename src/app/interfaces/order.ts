import { Restoran } from "./restoran";
import { User } from "./user";

export interface Order {
    order_id: number;
    user: User;
    restoran: Restoran;



}


