function receivesAFunction (cb){
    cb()
}
function returnsANamedFunction() {
    return function namedFn() {
    };
    }
function returnsAnAnonymousFunction(){
    return function(){

    }}
