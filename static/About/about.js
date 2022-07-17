// #Onclick
function toggleHide(){
    let btn=document.getElementById('btn');
    let para=document.getElementById('toggle');
    if(para.style.display != 'none'){
        para.style.display = 'none'
    }
    else{
        para.style.display = 'block'
    }
}