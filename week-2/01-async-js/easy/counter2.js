let t = 0;
function counter(){
    setTimeout(function(){
        console.log(t);
        t++; 
        counter();
    }, 1000)
}

counter();