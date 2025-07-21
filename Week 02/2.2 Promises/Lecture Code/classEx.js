class Rectangle {
    constructor(width,height,color){
        this.width = width,
        this.height = height,
        this.color = color
        // here this refer to the current context object (here rec)
    }
    area(){
        return this.width * this.height
    }
    paint(){
        console.log(`The rectangle is painted with ${this.color} color`)
    }
}

const rec = new Rectangle(8,7,"blue");
const area = rec.area(); 
console.log('Reactangle area is:',area);
rec.paint();
// Normal way 
// const rectangle = {
//     width : 8,
//     height : 7,
//     color : "blue"
// }

// function areaOfRectangle(rec){
//     return rec.width * rec.height
// }

// const a = areaOfRectangle(rectangle);
// console.log(a);
