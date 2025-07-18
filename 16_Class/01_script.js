class Human {
 
    // default public
    // properties
    age = 13; // public
    #wt = 80; // private
    ht=100;   // public

    // behaviour
    walking(){
        console.log("I am walking ",this.#wt);
    }

    running(){
        console.log("I am running");
    }

    // to mark as private use #
    #talking(){
        console.log("I am talking");
    }

    // getter
    get getter(){
        return this.#wt;
    }

    // setter
    set setter(val){
        this.#wt=val;
    }

    // constructor
    constructor(newAge,newheight,newWeight){
        this.age=newAge;
        this.ht=newheight;
        this.#wt=newWeight;
    }
}

let obj = new Human(2,3,5);
console.log(obj.age);
console.log(obj.ht);
console.log(obj.getter);

obj.walking();
obj.running();

console.log(obj.getter);


