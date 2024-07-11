export default class Cl_suscriptor{
    constructor(cedula,tipoPlan){
        this.cedula = cedula;
        this.tipoPlan = tipoPlan;
    }
    precioPago(){
        switch (this.tipoPlan){
            case "A":
              return 3.3;
            case "B":
              return 5.5;
            case "C":
              return 10;
        }
    }
}