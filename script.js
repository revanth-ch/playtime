let yesbutton = document.getElementById('yesbutton');
let nobutton = document.getElementById('nobutton');
let size = 30;

nobutton.addEventListener('click', function(){
    size+=10;
    yesbutton.style.fontSize = size+'px';
});

yesbutton.addEventListener('click', function(){
    let image = document.createElement('img');
    image.src = 'thank-you.gif'
    image.style.width = '300px'

    let image_carrier = document.getElementById('image_carrier');
    image_carrier.appendChild(image);
    yesbutton.style.display = 'none';
    nobutton.style.display = 'none';
});

