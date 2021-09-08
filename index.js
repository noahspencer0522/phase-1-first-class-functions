function receivesAFunction(cb){
    console.log(cb());
}
function returnsANamedFunction (callback = 'before all'){
    console.log(callback())
}