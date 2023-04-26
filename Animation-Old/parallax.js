var orbit = [0.7, 0.2, -20]

var elements = 500;

function gaussianRandom(mean, stdDev) {
    var rand1 = Math.random();
    var rand2 = Math.random();
    // Use the Box-Muller transform to generate a normally distributed random number
    var normalRandom = Math.sqrt(-2 * Math.log(rand1)) * Math.cos(2 * Math.PI * rand2);
    var randomNumber = normalRandom * stdDev + mean;
    return randomNumber;
}
function clamp(x, min, max){
    return Math.max(min, Math.min(max, x));
}

for(var i = 0; i < elements; i++){
    var element = document.createElement('span');

    var diameter = Math.floor(Math.random() * 3 + 1);
    element.style.width = diameter + 'px';
    element.style.height = diameter + 'px';

    var brightness = (diameter-2) * 30 + 100;
    element.style.backgroundColor = 'rgb(' + brightness + ' , ' + brightness + ',' + brightness + ')';

    var x = Math.floor(gaussianRandom(orbit[0], 0.6) * window.innerWidth);
    //var y = Math.floor(gaussianRandom(orbit[1], 0.3) * window.innerHeight);
    var y = Math.floor(orbit[1] * window.innerHeight);

    element.style.left = x + 'px';
    element.style.top = y + 'px';
    element.style.transformOrigin = (window.innerWidth*orbit[0] - x) + 'px ' + (window.innerHeight*orbit[1] - y) + 'px  ' + orbit[2] + 'px'

    var r = Math.abs(window.innerWidth*orbit[0] - x)
    var anim_length = (30 * r/window.innerWidth + 5);
    element.style.animationDuration = anim_length + 's';
    element.style.animationDelay = -anim_length * Math.random() + 's';

    element.className = 'dot';
    document.body.appendChild(element);
}

document.body.addEventListener('mousewheel', MouseWheelHandler, false);

function MouseWheelHandler(event){
    console.log('Scrollin with the mouse.');

    if(event.wheelDelta){
        console.log(event.wheelDelta > 0);
    }else{
        console.log(event.deltaY < 0);
    }
    
    window.scroll(0, 0);

    document.body.style.overflow = 'auto';
    // document.body.removeEventListener('mousewheel', MouseWheelHandler, false);
}