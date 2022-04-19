
function greet(fname, lname) {
    return "hello " + greetWithName(fname, lname)
}

export function greetWithName(fname, lname) {
    return fname + " : " + lname
}
 
export default greet