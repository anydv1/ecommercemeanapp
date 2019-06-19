console.log("hello world!!")
function greet (name,lastname){
    console.log('welcome ' +name  + ' '+lastname)
}
greet('john','snow')
function square (number){
    return number*number;
}

const person={
    name:'pond',
    walk(){
        console.log('pppp',this)
    }
}

person.walk()