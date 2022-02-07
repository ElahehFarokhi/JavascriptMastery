// let myArray1 = new Array(1,3,5,8)
// let myArray2 = [1,3,5,8]
// console.log(myArray1)
// console.log(myArray1.length)
// console.log(myArray1.pop())

/* clonning an object, first approach(it is obsolete)
const circle = {
radius :1,
draw(){console.log(this.radius)}    
}
const another = {};

for (const key in circle) {
    another[key] = circle[key];
    }
*/

/* clonning an object, second approach
const circle = {
radius :1,
draw(){console.log(this.radius)}    
}
const another = Object.assign({color:'red'},circle);

    console.log(circle);
    console.log(another);

*/

/* clonning an object, third approach (best approach)
const circle = {
radius :1,
draw(){console.log(this.radius)}    
}

const another = {location:1,...circle,color:'red'}

    console.log(circle);
    console.log(another);
*/

/* back tic is similar to @ in c#
const another = ` hi 'eli'
    coding is cool`

console.log(another);
*/
/*
const name = 'eliiiiiiii';
const another = ` hi ${name}
    coding is cool`

console.log(another);
*/

/* date formats
const now = new Date();
const date1 = new Date('May 11 2018 09:25');
const date2 = new Date(2018,11,20);
console.log(now)
console.log(date1)
console.log(date2)
*/

/* arrow functions:

const courses = 
[
    {id:1,value:"a"},
    {id:2,value:"b"},
]

let result = courses.find(c=>c.id===2);
console.log(result)
*/

/* read from array and change the array
const myArr = [1,2,3,4];
console.log(myArr)

let lastElement = myArr.pop();
console.log(myArr)

let firstElement = myArr.shift();
console.log(myArr)

let middleElement = myArr.splice(1,2);

console.log(myArr)
*/

/* iterate through array
const arr1 = [1,2,3,4];
arr1.forEach(function(item){console.log(item)});
arr1.forEach(item => console.log(item));
*/

/* sort reference type array
const arr1 = [
    {id:3,name:"elaheh"},
    {id:5,name:"atefe"},
    {id:2,name:"mohsen"},
    {id:1,name:"malihe"},
    {id:8,name:"majid"},
]

console.log(arr1);

arr1.sort(
    (x,y)=> 
    {
        if(x.name>y.name)
         return -1;
         else if(x.name<y.name)
         return 1;
         else
         return 0;
    })
    //or
    arr1.sort(
        (x,y)=> 
        {
            if(x.id>y.id)
             return -1;
             else if(x.id<y.id)
             return 1;
             else
             return 0;
        })
*/

/* like All in c# linq
const arr = [1,2,3,4,5];
arr.every(x=>x>=0);

console.log(arr.every(x=>x>=0));
*/

/* like Any in c# linq
const arr = [1,2,3,-4,5];
arr.some(x=>x>=0);

console.log(arr.some(x=>x<=0));
*/

/* like Where in c# linq
const arr = [-1,0,1,2,3];
console.log(arr.filter(x=>x>0));

const users = [
    {id:1,name:'elaheh',family:'farokhi',age:32},
    {id:2,name:'mohsen',family:'shaterian',age:35},
    {id:3,name:'ryan',family:'farokhi',age:2},
    {id:4,name:'arsam',family:'khallaghi',age:3}
]

console.log(users.filter(x=>x.age>18));
*/

/* like Select in c# linq
const numbers = [1,2,3,4,5]

console.log(numbers.map(function(value)
                        {
                            return value * 2;
                        }
                       )
)
*/

/* arguments is like parame[] in c#
function sum()
{
    let total = 0;
    for (const value of arguments) {
        total+=value;
    }
    return total;
}
let res = sum(1,2,3,4,5,6,7,8);

console.log(res)
*/

/* accumulate array values 
const arr=[-1,1,2,3];
let sum = 0;

for (const value of arr) {
    sum+=value;
}
let res = arr.reduce((accumulator,currentValue) => accumulator + currentValue, 0);
console.log(res);
*/

/* getter and setter
const person = {
    firstname: "eli",
    lastname : "farokhi",
    get fullName()
    {
        return `firstName:${person.firstname},lastName:${person.lastname}`
    },
    set fullName(value)
    {
        const parsed = value.split(' ');
        this.firstname = parsed[0];
        this.lastname = parsed[1];
    }
}

person.fullName = 'elaheh farokhi'
console.log(person.fullName);
*/

/* rest parameters
function sum(disount , ...args)
{
   console.log(args);
}
let res = sum(1,2,3,4,5,6,7,8);
*/

/* scope of let,const,var in a function
function TestVar()
{
    for (var i=0;i<5;i++)
        console.log(i);
    console.log(i);
}

TestVar();

function TestLet()
{
    for (let i=0;i<5;i++)
        console.log(i);
    console.log(i);
}

TestLet();

function TestConst()
{
    for (const i=0;i<5;i++)
        console.log(i);
    console.log(i);
}

TestConst();
*/

/* bind,call,apply ????
function PlayVideo()
{
    console.log(this);
}

PlayVideo.call({name:"eli"});
PlayVideo.apply({name:"apply"});

let fn = PlayVideo.bind({name:"apply"});
fn();
*/

/* Closure meaning: a function has access to all local properties of its father
function Circle(radius)
{
    this.radius = radius;
    let defaultLocation = {x:0,y:0};
    let computeOptimumLocation = function()
    {
        
    }
    this.draw()
    {
        computeOptimumLocation();
        console.log(`x:${this.radius}y:${this.radius}`);
    }
}
*/

/* each object has a prototype
function Circle(radius)
{
    this.radius = radius;
}

const myCircle1 = new Circle(10);
const myCircle2 = new Circle(20);

console.log(Circle.prototype === Object.getPrototypeOf(myCircle1))
console.log( Object.getPrototypeOf(myCircle1) === Object.getPrototypeOf(myCircle2))
*/

/* override functions
function Circle(radius)
{
    this.radius = radius;
}

Circle.prototype.draw = function()
{
    console.log(`draw ${this.radius}`);
}

Circle.prototype.toString = function()
{
    console.log("overrided toString");
}

const myCircle1 = new Circle(10);
const myCircle2 = new Circle(20);
myCircle1.draw();
myCircle2.draw();
myCircle1.toString();
myCircle2.toString();
*/

/* properties of object
function Circle(radius)
{
    this.radius = radius;
    this.move = function()
    {
        console.log("move");
    }
}

Circle.prototype.draw = function()
{
    console.log("draw");
}

let circle1 = new Circle(1);

for (const key in circle1) {
    console.log(key);
}

let res = circle1.hasOwnProperty('radius');
console.log(res)
*/

/* class in javascript 
function Circle(radius){
    this.radius = radius;

    this.draw = function() {
        console.log('draw');
    }
}

// above code is equivalent with below, the classes are just to simplify prototipical inheritance

class Circle{
    constructor(radius){
        this.radius = radius;
    }

    draw(){
        console.log('draw');
    }
}

const c = new Circle(1);
c.draw();
*/

/* synchronous and asynchronous
function print()
{
    setTimeout(() => {
        console.log("b");
    }, (1000));
    
}

console.log("a");
print();
console.log("c");
*/


