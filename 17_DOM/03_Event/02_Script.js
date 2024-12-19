// Note: event listner function must be same in add and remove

// right way
function call(){
    console.log("I have click on document");
}
 
document.addEventListener('click',call());

document.removeEventListener('click',call());

// worng way
document.addEventListener('click',function call(){
    console.log("I have click on document");
}); 

document.removeEventListener('click',function call(){
    console.log("I have click on document");
});

// event object
const content=document.querySelector("#wrapper");
content.addEventListener('click',function(event){
    console.log(event);
})

// Default Action
a.addEventListener('click',function(event){
event.preventDefault();});
