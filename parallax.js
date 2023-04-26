var orbit = [0.7, 0.2, -20]

var num_dots = 500;

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

for(var i = 0; i < num_dots; i++){
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
document.body.addEventListener('resize', ResizeHandler, false);

function rotateAllDots(wheelDelta){
    lines = wheelDelta/120;
    theta_per_line = 0.18;

    var dots = document.querySelectorAll('.dot')
    dots.forEach(function(dot) {
        var radius = dot.style.radius;

        dot.style.theta += lines * theta_per_line * Math.sqrt(radius)/radius;

        var theta = dot.style.theta;

        dot.style.left = (orbit[0] * window.innerWidth + Math.cos(theta) * radius) + 'px'
        dot.style.top = (orbit[1] * window.innerHeight + Math.sin(theta) * radius) + 'px'
    })
}

function rotateText(wheelDelta){
    lines = wheelDelta/120;
    theta_per_line = 0.58;

    var texts = document.querySelectorAll('.text')
    texts.forEach(function(element) {
        element.style.radius = window.innerWidth * (orbit[0] * 2.0 / 3);
        var radius = element.style.radius;

        element.style.theta += lines * theta_per_line * Math.sqrt(radius)/radius;

        var theta = element.style.theta;

        element.style.left = (orbit[0] * window.innerWidth + Math.cos(theta) * radius) + 'px'
        element.style.top = (orbit[1] * window.innerHeight + Math.sin(theta) * radius) + 'px'

        element.style.transform = 'rotate(' + (element.style.theta + Math.PI) + 'rad)'

        element.style.opacity = 0;
        while(element.style.theta > 2 * Math.PI){
            element.style.theta -= 2 * Math.PI;
        }
        while(element.style.theta < 0){
            element.style.theta += 2 * Math.PI;
        }
        if(Math.abs(element.style.theta - Math.PI) < Math.PI / texts.length){
            var remap = texts.length / Math.PI * (element.style.theta - Math.PI);
            element.style.opacity = Math.exp(remap * remap / (remap * remap - 1))
        }
    })
}
function MouseWheelHandler(event){
    console.log('Scrollin with the mouse.');

    if(event.wheelDelta){
        console.log(event.wheelDelta);
        rotateText(event.wheelDelta);
        rotateAllDots(event.wheelDelta);
    }else{
        console.log(-event.deltaY);
        rotateText(-event.deltaY);
        rotateAllDots(-event.deltaY);
    }
    
    window.scroll(0, 0);

    document.body.style.overflow = 'auto';
    // document.body.removeEventListener('mousewheel', MouseWheelHandler, false);
}

function ResizeHandler(){
    rotateText(0);
    rotateAllDots(0);
}

texts = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit ut arcu id convallis. Proin eu sagittis ex. Suspendisse varius quam vitae sollicitudin lobortis. Nullam nibh lectus, finibus vel auctor eget, efficitur nec tellus. Fusce nec imperdiet purus. Phasellus id nisi rutrum, fringilla est ac, dignissim risus. Ut eget dignissim turpis, a porttitor ligula. Nulla mauris eros, volutpat sed pellentesque et, mattis euismod est. Suspendisse potenti. Nam neque libero, lobortis pellentesque maximus at, vestibulum posuere leo. Proin elementum rutrum auctor. Donec scelerisque dolor a nisi blandit fringilla. Pellentesque cursus, lorem et scelerisque feugiat, velit libero egestas dui, eu hendrerit ipsum neque pharetra ante. Nam maximus imperdiet quam vel sollicitudin. Proin non fermentum purus, vel tempor nulla.",
    "Nunc eros purus, vulputate sit amet accumsan et, finibus ac nulla. Mauris non vestibulum dui, eget eleifend risus. Nullam posuere bibendum odio in sagittis. Cras id ante elit. Sed commodo vitae lacus semper imperdiet. Proin facilisis magna ac arcu faucibus maximus. Donec mauris turpis, ultricies at pharetra sit amet, congue et quam. Fusce ac enim a tortor venenatis posuere ut quis odio. Phasellus nunc nisl, porttitor sit amet eleifend tristique, aliquet sit amet risus. In sit amet suscipit enim. Pellentesque nec sagittis arcu.",
    "Praesent interdum felis in feugiat viverra. Morbi at viverra sapien, eget faucibus urna. Morbi eget sapien lacinia, viverra metus ac, feugiat nisi. Vivamus gravida purus in blandit aliquam. Pellentesque ac viverra metus. Fusce turpis nibh, condimentum ut neque in, malesuada maximus orci. Sed a sapien commodo augue fermentum tempus ut sed enim. Praesent nec pharetra mauris. Vivamus fringilla ex id est tristique, vel finibus erat malesuada.",
    "Pellentesque convallis nunc eu eros aliquet laoreet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris nisi purus, luctus vel arcu in, malesuada pharetra leo. Praesent in sagittis mauris. Aenean sed vestibulum elit, a finibus ante. Vivamus suscipit laoreet eros, fermentum malesuada quam ornare non. Aliquam in massa mollis, tristique ligula ac, placerat lorem. Quisque mattis eget nisl vel interdum. Nam et velit semper, tincidunt nibh vitae, convallis neque. Cras fringilla sagittis nunc in pellentesque. Nullam luctus massa at erat eleifend, malesuada mollis dolor pretium. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer consequat mauris mauris, a ultricies metus rhoncus ut. In convallis viverra lectus quis feugiat. Curabitur consequat sem in ipsum porttitor convallis.",
    "Mauris suscipit ligula nec massa faucibus facilisis. Praesent in ante et orci ultricies aliquam. Aenean nulla elit, porta in ante id, euismod semper nibh. Aenean ultrices, sapien vel facilisis auctor, massa lacus efficitur nisl, eget feugiat nunc risus nec quam. Duis ut ipsum non odio vulputate molestie. Aenean nisi magna, porttitor cursus pulvinar nec, sodales volutpat tortor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla rhoncus felis quam, a scelerisque enim ultricies id. Suspendisse eget euismod purus. Proin at velit eget diam tempus congue a placerat ipsum. Etiam at mi interdum, rhoncus odio accumsan, dignissim augue. Nullam ultrices, tortor sed sagittis sollicitudin, dolor sem auctor magna, ut mollis metus quam vel ligula."
];
for(var i = 0; i < texts.length; i++){
    var element = document.createElement('span');

    element.style.width = 'calc(25vw)';
    element.style.height = 'calc(50vh)';
    element.textContent = texts[i];

    element.style.radius = window.innerWidth * (orbit[0] * 2.0 / 3);
    element.style.theta = 2 * Math.PI * i / (texts.length);

    element.style.left = Math.ceil(orbit[0] * window.innerWidth + Math.cos(theta) * radius) + 'px';
    element.style.top = Math.ceil(orbit[1] * window.innerHeight + Math.sin(theta) * radius) + 'px';

    element.className = 'text';
    document.body.appendChild(element);
}

rotateText(0);
rotateAllDots(0);