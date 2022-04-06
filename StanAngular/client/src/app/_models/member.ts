import {Photo} from './photo';
import { Apartment } from "./apartment";
import { Contract } from "./contract";

export interface Member {
    id: number;
    username: string;
    age: number;
    rentedApartments: Contract[]
    ownedApartments: Apartment[]
}
