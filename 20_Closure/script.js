// netsted funciton
let name = "Ashutosh";
function init(){
    {
        let name = "ashu";
    }
    // let name = "ashutosh";
    function displayName(){
        // let name = "ASHUTOSH";
        console.log(name);
    }
    return displayName;
}
let display=init();

// (name ki memory free hogi) --> display function ke sath required data bound hoga
display();