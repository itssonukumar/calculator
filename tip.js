const tipcalcy= () =>{
    let amount =document.getElementById("bill amount").value;
    

    let perc= document.getElementById("tip_percent").value;
    
    let tip =amount * (perc/100);
   

    let total = tip +Number(amount);


    document.getElementById("tip_total").value=tip;
    document.getElementById("total billed").value=total;
}