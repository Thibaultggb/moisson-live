export class SunflowerObservation {

    constructor(){

    }

    public specificWeight : number;
    public email : string;
    public phone : number;
    public variety : string;
    public yield : number;
    public humidity : number;
    public nitrogenQuantityUsed : number;
    public nitrogenProductUsed : number;
    public comment : string;
    public cultivationMethod : string;
    public targetPrice : number;
    public place : string;
    public coordinates : {
        latitude : number;
        longitude : number;
    };
    public id : number;
    public createAt : number;
}
