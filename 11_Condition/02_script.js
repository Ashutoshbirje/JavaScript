// leap year check
var year=prompt("Enter the year : ");
if(year%4==0){
    if(year%100==0){
        if(year%400==0){
            alert("This year is leap year");
            console.log("This year is leap year");     
        }
        else{
            alert("This year is not a leap year");
            console.log("This year is not a leap year");
        }
    }
    else{
        alert("This year is leap year");
        console.log("This year is leap year");
    }
}
else{
    alert("This year is not a leap year");
    console.log("This year is not a leap year");
}