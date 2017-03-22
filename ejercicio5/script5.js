$(document).ready(function () {
  var sal = prompt("saldo");
  console.log(calcular(sal));
  function calcular(saldo) {

  saldo = parseInt(saldo);
   //var saldo = $("#sal").val();
    // var irpf = (saldo * 15) / 100;
    // console.log(irpf);
    switch (true) {
      case ((saldo > 0) && (saldo<=12450)):
        console.log("La retención es: 19%");
        break;
      case ((saldo >=12451) && (saldo <= 20200)):
        console.log("La retención es: 24%");  
        break;
      case ((saldo >=20201) && (saldo <= 35200)):
        console.log("La retención es: 30%");  
        break;
      case ((saldo >=35201) && (saldo <= 60000)):
        console.log("La retención es: 37%");  
        break;
      default:
         console.log("La retención es: 45%");
    }
    
  }
  
})








/*function calculIrpf(){
  var irpf = (parseInt(saldo) * 15) / 100;
  return calcular(irpf);
  
}
*/