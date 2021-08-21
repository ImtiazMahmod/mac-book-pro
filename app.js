//momory cost fucntion
function memoryCost(memory){
    const bestPrice = document.getElementById('memory-cost');
    if(memory=='memory-8'){
        bestPrice.innerText = '0';
    }
    else{
        bestPrice.innerText = '130';
    }
}
//memory event handler

document.getElementById('memory-8').addEventListener('click',function(){
    const bestPrice = document.getElementById('best-price');
    bestPrice.innerText = '1299';
    memoryCost('memory-8');
    
})
document.getElementById('memory-16').addEventListener('click',function(){    
    memoryCost('memory-16');    
})

