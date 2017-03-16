
var sal = prompt("saldo");
saldo = parseInt(sal);

function calcular(saldo) {
  var sal = prompt("saldo");
  saldo = parseInt(sal);
   //var saldo = $("#sal").val();
  var irpf = (saldo * 15) / 100;
  console.log(irpf);
  switch (true) {
    case ((irpf > 0) && (irpf<=12450)):
      console.log("La retención es: 19%");
      break;
    case ((irpf >=12451) && (irpf <= 20200)):
      console.log("La retención es: 24%");  
      break;
  
    default:
      break;
  }
  // console.log(saldo);
}






/*function calculIrpf(){
  var irpf = (parseInt(saldo) * 15) / 100;
  return calcular(irpf);
  
}
*/