//let keyword
function letKeyword(){
    let a = 10;
    console.log(a);
    //let a;//error let cannot be re-declared
    //console.log(a);
    a = 20;
    console.log(a);//can be re-initialised
    for(let i=0;i<10;i++){}
    //console.log(i);//let is not accesible outside the block
    //let i;//error let cannot be re-declared
    // i =10;
    // console.log(i);
    // let i;//hoisting is not allowed
}
letKeyword();