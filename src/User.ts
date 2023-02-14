import { Mappable } from "./CustomMap";

export class User implements Mappable{
    name: string;
    location: {
        lat: number;
        lng: number;
    };

    constructor () {
        this.name = 'Yves';
        this.location = {
            lat : parseFloat('-1.935114'),
            lng : parseFloat('30.082111')
        }
    }

    markerContent(): string {
        return `User Name: ${this.name}`
    }
}