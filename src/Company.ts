import { Mappable } from "./CustomMap";


export class Company implements Mappable{
    companyName: string;
    catchPhrase: string;
    location: {
        lat: number,
        lng: number
    };

    constructor() {
        this.companyName = 'SixTabs';
        this.catchPhrase = 'Software Development';
        this.location = {
            lat: parseFloat('40.748440'),
            lng: parseFloat('-73.984559')
        }
    }

    markerContent(): string {
        return `
            <div>
                <h3>Company Name: ${this.companyName} </h3>
                <p>${this.catchPhrase}</p>
            </div>
        `
    }



}