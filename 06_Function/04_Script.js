let person = {
    fName : 'ashutosh',
    lName : 'Birje',
    get fullName(){
        // not a function
        return `${person.fName} ${person.lName} `;
    },
    set fullName(value){
        // not a function
        let parts= value.split(' ');
        this.fName=parts(0);
        this.lName=parts(1);
    }
};
 
console.log(person.fullName);