const model=document.querySelector(".share-profile-modal");

const openModel = ()=>{
    console.log("Model is Open");
    model.classList.add("display");
}

const closeModel = ()=>{
    console.log("Model is closed");
    model.classList.remove("display");
}