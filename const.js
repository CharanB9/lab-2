//const keyword
function constKeyword(){
    const a = "Hello World!";
    console.log(a);
    // a = "Heroo";//error const variables cannot be reassigned
    // console.log(a);
    const obj = {
        name : "Charan",
        age : 20,
        potential : "no potential"
    }
    // obj = {
    //     name : "Anirudh",
    //     age : 20,
    //     potential : "GOAT"
    // }error const variables cannot be reassigned
    //object properites can be changes
    obj.name = "Anirudh";
    obj.age = 20;
    obj.potential = "GOAT";
    console.log(obj);
    // carname = "BMW";
    // const carname;//Hoisting is not allowed
}
constKeyword()