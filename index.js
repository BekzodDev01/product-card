function plusLess(event, type){
    const input=document.querySelector('input');
    let oldValue=Number(input.value)
    if(type=='less'){
        
        input.value=oldValue-=1;
    }
    else {
        input.value=oldValue+=1;
    }
}
