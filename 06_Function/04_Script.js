// Object

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

function handleobject(anyobject){
    console.log(`Username is ${anyobject.fName} ${anyobject.lName}`)
}

handleobject(person)
handleobject({fName: 'ashu', lName: 'birje'})


// Array 

const Myarray = [1,2,3];

function handlearray(anyarray){
    anyarray.forEach(element => {
        console.log(element)
    });
}

handlearray(Myarray)
