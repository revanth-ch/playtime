let yesbutton = document.getElementById('yesbutton');
let nobutton = document.getElementById('nobutton');
let size = 30;

nobutton.addEventListener('click', function(){
    size+=10;
    yesbutton.style.fontSize = size+'px';
});

yesbutton.addEventListener('click', function(){
    alert('awww, I knew you are the best')
});

