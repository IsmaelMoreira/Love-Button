let button = document.getElementById('no');

button.addEventListener('mouseover', function(){
    let height = window.innerHeight - button.offsetHeight;
    let width = window.innerWidth - button.offsetWidth;
    
    button.style.position = "absolute";
    button.style.top = Math.random() * height + "px";
    button.style.left = Math.random() * width + "px";
});
