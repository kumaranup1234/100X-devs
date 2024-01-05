function counter(){
    let t = 0;
    setInterval(function() {console.log(t); t++}, 1000);
}
counter();