var text = document.querySelector('.text');
const btn = document.querySelector('.btn-enter');
var span=document.querySelector('.span');

btn.addEventListener('click',()=>{
    var List=document.querySelector('.List');
    var grocer_list = text.value;
    if(grocer_list=='' || grocer_list==null || grocer_list == undefined ){
        alert("Enter Any TO-DO")
    }
    else{
        span.style.display="none"
        let Lis=document.createElement('li');
        Lis.innerText=grocer_list;
        List.appendChild(Lis)
        text.value='';
        text.focus();
    }
    
})

