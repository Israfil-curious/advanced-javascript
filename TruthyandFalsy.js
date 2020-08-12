//falsy value:
// "", NaN, undefined, 0, false, null;

//truthy value:
//" ", {}, [], true;


const name = null;
if (name) {
    console.log("the name is true");
} else {
    console.log("the name is false");
}