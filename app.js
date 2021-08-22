///total price function
function totalPrice(){
    const totalPrice = document.getElementById('total-price');     
    
    const bestPrice= document.getElementById('best-price');
    const bestPriceAmount = parseInt(bestPrice.innerText);

    const memoryCost = document.getElementById('memory-cost');
    const memoryCostAmount = parseInt(memoryCost.innerText);

    const storageCost = document.getElementById('storage-cost');
    const storageCostAmount = parseInt(storageCost.innerText);

    const deliveryCharge = document.getElementById('delivery-charge');
    const deliveryChargeAmount = parseInt(deliveryCharge.innerText);

        
    return totalPrice.innerText = bestPriceAmount + memoryCostAmount + storageCostAmount + deliveryChargeAmount;
   }

//net-total price
function netTotalPrice(){
    const netTotalPrice =  document.getElementById('net-total-price');
     const netTotal = totalPrice();
    
     return netTotalPrice.innerText = netTotal;
 }

 //best price function
function bestPrice(){
    const bestPrice = document.getElementById('best-price');
    return bestPrice.innerText = '1299';
    
}

//momory cost fucntion
function memoryCost(memory){
    const memoryCost = document.getElementById('memory-cost');
    if(memory=='memory-8'){
        memoryCost.innerText = '0';
    }
    else{
        memoryCost.innerText = '180';
    }
    totalPrice();
    netTotalPrice();
}
//memory event handler

document.getElementById('memory-8').addEventListener('click',function(){
     bestPrice();   
    memoryCost('memory-8');
    
})
document.getElementById('memory-16').addEventListener('click',function(){    
    memoryCost('memory-16');    
})

//storage cost fucntion
function storageCost(storage){
    const storageCost = document.getElementById('storage-cost');
    if(storage=='storage-256'){
        storageCost.innerText = '0';
    }
    else if(storage =='storage-512'){
        storageCost.innerText = '100';
    }
    else{
       storageCost.innerText = '180';
    }
    totalPrice();
    netTotalPrice();
}
//storage cost event handler
document.getElementById('storage-256').addEventListener('click',function(){    
    storageCost('storage-256');
})
document.getElementById('storage-512').addEventListener('click',function(){    
   const storageMedium =  storageCost('storage-512');   
})
document.getElementById('storage-1024').addEventListener('click',function(){    
    const storageHigh = storageCost('storage-1024'); 
   
})


//delivery option fucntion
function deliveryOption(delivery){
    const deliverycharge = document.getElementById('delivery-charge');
    if(delivery=='prime'){
        deliverycharge.innerText = '0';
    }
    else{
       deliverycharge.innerText = '20';
       totalPrice('fee');
       
    }
    totalPrice();
    netTotalPrice();
}

//delivery option event handler
document.getElementById('delivery-prime').addEventListener('click',function(){    
    deliveryOption('prime');    

})
document.getElementById('delivery-fee').addEventListener('click',function(){    
     deliveryOption('fee');         
})



//promo code handler

    const couponField = document.getElementById('coupon-field');

    document.getElementById('coupon').addEventListener('click',function(){  
    const couponAdded = netTotalPrice();    
   const  couponAddedPrice =couponAdded - (couponAdded * 0.2) ;

     const netTotal =  document.getElementById('net-total-price');
    netTotal.innerText = couponAddedPrice;

    couponField.value = '';
})

couponField.addEventListener('keyup',function(event){
    if(event.target.value == 'stevekaku'){
        coupon.removeAttribute('disabled');
        if(event.target.value == ''){
            coupon.setAttribute('disabled',true);
        }
       
    }   
    else{
        coupon.setAttribute('disabled',true);
    }
})


    

   

    
