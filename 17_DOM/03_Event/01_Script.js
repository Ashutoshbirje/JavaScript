// function change(event){
//     console.log(event);
//     let fpara=document.getElementById('fpara');
//     fpara.textContent="hello ashu";
// }
// let fpara=document.getElementById('fpara');
// fpara.addEventListener('click',change)

// change default behaviour
// let ele=document.getElementById('link');
// ele.addEventListener('click',function(event){
//     event.preventDefault();
//     ele.textContent="click done";
// });

let paras=document.querySelectorAll("p");
for(let i=0;i<paras.length;i++){
    let para=paras[i];
    para.addEventListener('click',function(){
        alert("You have clicked on para : "+ (i+1));
    })
} 