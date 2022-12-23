const  {
    compose
} =  require("redux");

const makeLouder = string=> string.toUpperCase();
const repeat = string=>string.repeat(3);
const embold =  string=>string.bold()


const  stringComposer =  compose(makeLouder , repeat , 
    embold 
    );

const  str = stringComposer("hello");

console.log(str)


