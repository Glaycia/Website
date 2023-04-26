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

    var diameter = Math.floor(Math.random() * 3 + 2);
    element.style.width = diameter + 'px';
    element.style.height = diameter + 'px';

    var brightness = 80 + (diameter-2) * 40 + 20 * Math.random();
    element.style.backgroundColor = 'rgb(' + brightness + ' , ' + brightness + ',' + brightness + ')';

    var radius = Math.abs(Math.ceil(gaussianRandom(0, 0.8) * window.innerWidth));
    while(radius < diameter * 2){
        radius = Math.abs(Math.ceil(gaussianRandom(0, 0.8) * window.innerWidth));
    }
    var theta = Math.random() * 2 * Math.PI;

    element.style.radius = radius;
    element.style.theta = theta;

    element.style.left = Math.ceil(orbit[0] * window.innerWidth + Math.cos(theta) * radius) + 'px';
    element.style.top = Math.ceil(orbit[1] * window.innerHeight + Math.sin(theta) * radius) + 'px';

    element.className = 'dot';
    document.body.appendChild(element);
}

document.body.addEventListener('mousewheel', MouseWheelHandler, false);

function rotateAllDots(wheelDelta){
    lines = wheelDelta/120;
    theta_per_line = 0.08;

    var dots = document.querySelectorAll('.dot')
    dots.forEach(function(dot) {
        var radius = dot.style.radius;

        dot.style.theta += lines * theta_per_line * Math.sqrt(radius)/radius;

        var theta = dot.style.theta;

        dot.style.left = (orbit[0] * window.innerWidth + Math.cos(theta) * radius) + 'px'
        dot.style.top = (orbit[1] * window.innerHeight + Math.sin(theta) * radius) + 'px'
    })


}
function MouseWheelHandler(event){
    console.log('Scrollin with the mouse.');

    if(event.wheelDelta){
        console.log(event.wheelDelta);
        rotateAllDots(event.wheelDelta);
    }else{
        console.log(-event.deltaY);
        rotateAllDots(-event.deltaY)
    }
    
    window.scroll(0, 0);

    document.body.style.overflow = 'auto';
    // document.body.removeEventListener('mousewheel', MouseWheelHandler, false);
}