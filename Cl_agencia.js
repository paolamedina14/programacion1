export default class Cl_agencia{
    constructor(){
     this.cntSuscriptores =
     this.cntNoPagaron =
     this.cntPlan1 =
     this.cntPlan2 =
     this.cntPlan3 =
       0;
    }
    procesarSuscriptor(s){
        this.cntSuscriptores++;
          if (s.tipoPlan === "c") this.cntNoPagaron++; 
          if (s.tipoPlan === "A") this.cntPlan1++;
          else if (s.tipoPlan === "B") this.cntPlan2++;
          else this.cntPlan3++;
     }
     planfavorito(){
         if (this.cntPlan1 === this.cntPlan2 && this.cntPlan1 === this.cntPlan3)
             return "Por iguales Plan A, Plan B y Plan C.";
         else if (this.cntPlan1 === this.cntPlan2 && this.cntPlan1 > this.cntPlan3)
             return "Por iguales Plan A y Plan B.";
        else if (this.cntPlan1 === this.cntPlan3 && this.cntPlan1 > this.cntPlan2)
             return "Por iguales Plan A y Plan C.";
        else if (this.cntPlan2 === this.cntPlan3 && this.cntPlan2 > this.cntPlan1)
             return "Por iguales Plan B y Plan C.";
        else if (this.cntPlan1 > this.cntPlan2 && this.cntPlan1 > this.cntPlan3)
             return "Por Plan A.";
        else if (this.cntPlan2 > this.cntPlan1 && this.cntPlan2 > this.cntPlan3)
             return "Por Plan B.";
        else return "Por Plan C.";
      }
      
      porcentajeSuscriptoresNoPagaron(){
        return (this.cntNoPagaron / this.cntSuscriptores) * 100;
          
      }
            
   } 
   