(function(x) {
    return (function(y) {
        console.log(x);
    })(2)
 })(1);

function a(x) {
     let b = function(y) {
         console.log(x);
     }
     return b(2);
 }

 a(1);

 //1 