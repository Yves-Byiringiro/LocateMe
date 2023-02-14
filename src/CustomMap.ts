
// Instructions to very class that wants 
// on how they can be an argument to 'addMarker'
export interface Mappable {
    location: {
        lat: number;
        lng: number;
    };
    markerContent(): string;
}

export class CustomMap {
    private googleMap: google.maps.Map;

    constructor(divMapId: string){
        const mapDiv = document.getElementById(divMapId);

        if (!mapDiv) {
            throw new Error(`Element with ID '${'map'}' not found.`);
        }
        else {
            this.googleMap = new google.maps.Map(mapDiv, {
                zoom:1,
                // zoomControl:false,
                center: {
                    lat:0,
                    lng:0
                }
            });
        }

    }

    addMarker(mappable: Mappable): void{
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng
            }
        });

        marker.addListener('click', ()=> {
            const infoWindow = new google.maps.InfoWindow({
                content: mappable.markerContent()
            });

            infoWindow.open(this.googleMap, marker);
        });
    }
}