let btn=document.querySelector("button");
let inp=document.querySelector("input");

btn.addEventListener("click",()=>{
    
    let num=parseInt(inp.value);
    // console.log(num);
    let fetchAmount=document.querySelector(".update");
    let amount=parseInt(fetchAmount.innerText);
    // console.log(amount);
    if(amount===0){
        alert("Item not available");
    }else if(amount>=num){
        let ans=amount-num;
        // console.log(ans);
        fetchAmount.innerText=ans;
        // console.log(fetchAmount);
    }else{
        alert("not available");
    }
});