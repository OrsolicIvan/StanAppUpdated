import { Adress } from "./adress";
import { Contract } from "./contract";
import { Photo } from "./photo";

export interface Apartment{
    id: number;
    apartmentDescription: string;
    numberOfRooms: number;
    monthlyPrice: number;
    ownerId: number;
    adress : Adress[]
   
    photos : Photo[]
}