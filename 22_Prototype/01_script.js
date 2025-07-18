// Array 

const arr = [1,2,3,4,5];

// object 

const obj = {
    color: "Yellow",
    height: "10px",
    width: "10px",
    getdimension: function (){
        console.log(`Dimension : ${this.height} x ${this.width}`)
    }
}

Object.prototype.viecolor = function (){
    console.log(`Color is ${this.color}`)
}

obj.viecolor()
arr.viecolor()