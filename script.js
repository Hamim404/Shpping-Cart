const btnMinus=document.getElementById("btnMinus");
btnMinus.addEventListener("click",function(){
   const mobileNumberMinus=document.getElementById("mobileNumber").value;
   const numberMinus=parseFloat(mobileNumberMinus);
   const totalMinus=numberMinus-1;
   document.getElementById("mobileNumber").value=totalMinus;

   const currentBalance=document.getElementById("currentBalance").innerText;
   const currentBalanceNumber=parseFloat(currentBalance);
   const totalCurrentBalance=currentBalanceNumber-1219;
   document.getElementById("currentBalance").innerText=totalCurrentBalance;


   const Subtotal=document.getElementById("Subtotal").innerText;
   const SubtotalNumber=parseFloat(Subtotal);
   const SubtotalTotal=SubtotalNumber-1219;
   document.getElementById("Subtotal").innerText=SubtotalTotal;

   const total=document.getElementById("total").innerText;
   const totalNumber=parseFloat(total);
   const totalTotal=totalNumber-1219;
   document.getElementById("total").innerText=totalTotal;

})













const btnPlus=document.getElementById("btnPlus");
btnPlus.addEventListener("click",function(){
   const mobileNumberPlus=document.getElementById("mobileNumber").value;
   const numberPlus=parseFloat(mobileNumberPlus);
   const totalPlus=numberPlus+1;
   document.getElementById("mobileNumber").value=totalPlus;


   const currentBalance=document.getElementById("currentBalance").innerText;
   const currentBalanceNumber=parseFloat(currentBalance);
   const totalCurrentBalance=currentBalanceNumber+1219;
   document.getElementById("currentBalance").innerText=totalCurrentBalance;




   const Subtotal=document.getElementById("Subtotal").innerText;
   const SubtotalNumber=parseFloat(Subtotal);
   const SubtotalTotal=SubtotalNumber+1219;
   document.getElementById("Subtotal").innerText=SubtotalTotal;

   
   const total=document.getElementById("total").innerText;
   const totalNumber=parseFloat(total);
   const totalTotal=totalNumber+1219;
   document.getElementById("total").innerText=totalTotal;
})









const btnCoverMinus=document.getElementById("btnCoverMinus");
btnCoverMinus.addEventListener("click",function(){
   const coverNumber=document.getElementById("coverNumber").value;
   const numberCoverMinus=parseFloat(coverNumber);
   const totalCoverMinus=numberCoverMinus-1;
   document.getElementById("coverNumber").value=totalCoverMinus;


   const currentBalance2=document.getElementById("currentBalance2").innerText;
   const currentBalanceNumber=parseFloat(currentBalance2);
   const totalCurrentBalance=currentBalanceNumber-59;
   document.getElementById("currentBalance2").innerText=totalCurrentBalance;

   

   const total=document.getElementById("total").innerText;
   const totalNumber=parseFloat(total);
   const totalTotal=totalNumber-59;
   document.getElementById("total").innerText=totalTotal;



   const Subtotal=document.getElementById("Subtotal").innerText;
   const SubtotalNumber=parseFloat(Subtotal);
   const SubtotalTotal=SubtotalNumber-59;
   document.getElementById("Subtotal").innerText=SubtotalTotal;
})
const btnCoverPlus=document.getElementById("btnCoverPlus");
btnCoverPlus.addEventListener("click",function(){
   const CoverNumberPlus=document.getElementById("coverNumber").value;
   const numberCoverPlus=parseFloat(CoverNumberPlus);
   const totalCoverPlus=numberCoverPlus+1;
   document.getElementById("coverNumber").value=totalCoverPlus;


   const currentBalance2=document.getElementById("currentBalance2").innerText;
   const currentBalanceNumber=parseFloat(currentBalance2);
   const totalCurrentBalance=currentBalanceNumber+59;
   document.getElementById("currentBalance2").innerText=totalCurrentBalance;

   
   const total=document.getElementById("total").innerText;
   const totalNumber=parseFloat(total);
   const totalTotal=totalNumber+59;
   document.getElementById("total").innerText=totalTotal;

   const Subtotal=document.getElementById("Subtotal").innerText;
   const SubtotalNumber=parseFloat(Subtotal);
   const SubtotalTotal=SubtotalNumber+59;
   document.getElementById("Subtotal").innerText=SubtotalTotal;


})