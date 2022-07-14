/*Add the JavaScript here for the function billingFunction(). 
It is responsible for setting and clearing the fields in Billing Information */

function billingFunction(){
    var shipName = document.getElementById('shippingName');
    var shipZip = document.getElementById('shippingZip');
  
    var billName = document.getElementById('billingName');
    var billZip = document.getElementById('billingZip');
    if(document.getElementById('same').checked){
      billName.value = shipName.value;
      billZip.value = shipZip.value;
    }else{
      billName.value = "";
      billZip.value = "";
    }    
}