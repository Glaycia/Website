var portrait = false;
var orbit = [0.7, 0.2, -20]

var num_dots = 500;
texts = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit ut arcu id convallis. Proin eu sagittis ex. Suspendisse varius quam vitae sollicitudin lobortis. Nullam nibh lectus, finibus vel auctor eget, efficitur nec tellus. Fusce nec imperdiet purus. Phasellus id nisi rutrum, fringilla est ac, dignissim risus. Ut eget dignissim turpis, a porttitor ligula. Nulla mauris eros, volutpat sed pellentesque et, mattis euismod est. Suspendisse potenti. Nam neque libero, lobortis pellentesque maximus at, vestibulum posuere leo. Proin elementum rutrum auctor. Donec scelerisque dolor a nisi blandit fringilla. Pellentesque cursus, lorem et scelerisque feugiat, velit libero egestas dui, eu hendrerit ipsum neque pharetra ante. Nam maximus imperdiet quam vel sollicitudin. Proin non fermentum purus, vel tempor nulla.",
    "Nunc eros purus, vulputate sit amet accumsan et, finibus ac nulla. Mauris non vestibulum dui, eget eleifend risus. Nullam posuere bibendum odio in sagittis. Cras id ante elit. Sed commodo vitae lacus semper imperdiet. Proin facilisis magna ac arcu faucibus maximus. Donec mauris turpis, ultricies at pharetra sit amet, congue et quam. Fusce ac enim a tortor venenatis posuere ut quis odio. Phasellus nunc nisl, porttitor sit amet eleifend tristique, aliquet sit amet risus. In sit amet suscipit enim. Pellentesque nec sagittis arcu.",
    "Praesent interdum felis in feugiat viverra. Morbi at viverra sapien, eget faucibus urna. Morbi eget sapien lacinia, viverra metus ac, feugiat nisi. Vivamus gravida purus in blandit aliquam. Pellentesque ac viverra metus. Fusce turpis nibh, condimentum ut neque in, malesuada maximus orci. Sed a sapien commodo augue fermentum tempus ut sed enim. Praesent nec pharetra mauris. Vivamus fringilla ex id est tristique, vel finibus erat malesuada.",
    "Pellentesque convallis nunc eu eros aliquet laoreet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris nisi purus, luctus vel arcu in, malesuada pharetra leo. Praesent in sagittis mauris. Aenean sed vestibulum elit, a finibus ante. Vivamus suscipit laoreet eros, fermentum malesuada quam ornare non. Aliquam in massa mollis, tristique ligula ac, placerat lorem. Quisque mattis eget nisl vel interdum. Nam et velit semper, tincidunt nibh vitae, convallis neque. Cras fringilla sagittis nunc in pellentesque. Nullam luctus massa at erat eleifend, malesuada mollis dolor pretium. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer consequat mauris mauris, a ultricies metus rhoncus ut. In convallis viverra lectus quis feugiat. Curabitur consequat sem in ipsum porttitor convallis.",
    "Mauris suscipit ligula nec massa faucibus facilisis. Praesent in ante et orci ultricies aliquam. Aenean nulla elit, porta in ante id, euismod semper nibh. Aenean ultrices, sapien vel facilisis auctor, massa lacus efficitur nisl, eget feugiat nunc risus nec quam. Duis ut ipsum non odio vulputate molestie. Aenean nisi magna, porttitor cursus pulvinar nec, sodales volutpat tortor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla rhoncus felis quam, a scelerisque enim ultricies id. Suspendisse eget euismod purus. Proin at velit eget diam tempus congue a placerat ipsum. Etiam at mi interdum, rhoncus odio accumsan, dignissim augue. Nullam ultrices, tortor sed sagittis sollicitudin, dolor sem auctor magna, ut mollis metus quam vel ligula."
];

images = [
    [0, "images/flowers.jpg"],
    [3, "images/pinkflower.jpg"],
    [4, "images/purpleflower.jpg"]
]

//Create Dots
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

    element.style.size = diameter;
    element.style.radius = radius;
    element.style.theta = theta;

    element.style.left = Math.ceil(orbit[0] * window.innerWidth + Math.cos(theta) * radius) + 'px';
    element.style.top = Math.ceil(orbit[1] * window.innerHeight + Math.sin(theta) * radius) + 'px';

    element.className = 'dot';
    document.body.appendChild(element);
}

//Create Texts
for(var i = 0; i < texts.length; i++){
    var element = document.createElement('span');

    element.style.width = 'calc(30vw)';
    element.style.height = 'calc(50vh)';
    element.textContent = texts[i];

    element.style.radius = window.innerWidth * (orbit[0] * 2.0 / 3);
    element.style.theta = 2 * Math.PI * i / (texts.length);

    element.style.left = Math.ceil(orbit[0] * window.innerWidth + Math.cos(theta) * radius) + 'px';
    element.style.top = Math.ceil(orbit[1] * window.innerHeight + Math.sin(theta) * radius) + 'px';

    element.style.queue_id = i;

    element.className = 'text';
    document.body.appendChild(element);
}

//Create Images
for(var i = 0; i < images.length; i++){
    var element = document.createElement('img');

    element.src = images[i][1];
    console.log(element.src);
    element.style.queue_id = images[i][0];

    element.className = 'image';
    document.body.appendChild(element);
}

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

document.body.addEventListener('mousewheel', MouseWheelHandler, false);
document.body.addEventListener('resize', ResizeHandler, false);

function rotateAllDots(wheelDelta){
    lines = wheelDelta/120.0;
    theta_per_line = 0.14;

    var dots = document.querySelectorAll('.dot')
    dots.forEach(function(dot) {
        var radius = dot.style.radius;

        if((text_position > 0 && lines > 0) || (text_position < texts.length && lines < 0)){
            dot.style.theta -= lines * theta_per_line * Math.sqrt(radius)/radius;
        }

        var theta = dot.style.theta;

        dot.style.left = (orbit[0] * window.innerWidth + Math.cos(theta) * radius) + 'px'
        dot.style.top = (orbit[1] * window.innerHeight + Math.sin(theta) * radius) + 'px'
    })
}

function monotonicRescale(x){
    //return (Math.sin(2 * Math.PI * x) + 2 * Math.PI * x)/(2 * Math.PI);
    return 64 * Math.pow(x-0.5, 7) + 0.5;
}
function opacityRescale(x){
    //return Math.pow(1-Math.pow(Math.cos(Math.PI * x), 6), 6);
    return -256 * Math.pow(x-0.5, 8) + 1;
}

var text_position = 0;
function rotateText(wheelDelta){
    lines = wheelDelta/120;

    var texts = document.querySelectorAll('.text');

    text_position -= lines * 0.03;
    text_position = clamp(text_position, 0, texts.length - 0.5);

    texts.forEach(function(element) {
        element.style.opacity = 0;
        //console.log('textposition: ' + text_position)
        //console.log('textpositionfloor: ' + Math.floor(text_position))
        if(element.style.queue_id == Math.floor(text_position)){
            var radius = window.innerWidth * (orbit[0] * 2.0 / 3);

            var state_percent = monotonicRescale(text_position - Math.floor(text_position));
            var theta = Math.PI/2 + Math.PI * state_percent;
            //console.log('theta: ' + theta)
            
            element.style.opacity = opacityRescale(text_position - Math.floor(text_position));

            if(!portrait){
                element.style.width = 'calc(30vw)';

                element.style.left = (orbit[0] * window.innerWidth + Math.cos(theta) * radius) + 'px';
                element.style.top = (orbit[1] * window.innerHeight + Math.sin(theta) * radius) + 'px';
        
                element.style.transform = 'rotate(' + (theta + Math.PI) + 'rad)';
            }else{
                element.style.width = 'calc(60vw)';

                element.style.left = (orbit[0] * window.innerWidth / 3) + 'px';
                element.style.top = (2 * state_percent - 1) * (window.innerHeight) + 40 + 'px';
        
                element.style.transform = 'rotate(' + (0) + 'rad)';
            }
        }
    });
}

function rotateImages(){
    var images = document.querySelectorAll('.image');
    //console.log("rptater" + images.length);
    images.forEach(function(element){
        element.style.opacity = 0;
        if(element.style.queue_id == Math.floor(text_position)){
            if(!portrait){
                element.style.left = (0.65 * window.innerWidth) + 'px';
                element.style.top = (0.5 * window.innerHeight) + 'px';
            }else{
                element.style.left = (0.5 * window.innerWidth) + 'px';
                element.style.top = (0.75 * window.innerHeight) + 'px';
            }
            element.style.opacity = opacityRescale(text_position - Math.floor(text_position));
            var rotation = 90+180 * (monotonicRescale(text_position - Math.floor(text_position)));
            clamp(rotation, 90, 270);
            element.style.transform = "perspective(400px) translate(-50%, -50%) rotateY(" + Math.floor(rotation) + "deg)";
        }
    });
}


var isScrolling = false;
document.body.addEventListener("scrollend", detectScrollEnd, false);

var scrollTimer = null;
var scrollDirection = 0;
var scrollStrength = 0;
function MouseWheelHandler(event){
    isScrolling = true;

    if(event.wheelDelta){
        scrollDirection = Math.sign(event.wheelDelta);
        scrollStrength = Math.abs(event.wheelDelta);
        //console.log(event.wheelDelta);
        //rotateText(event.wheelDelta);
        rotateAllDots(event.wheelDelta);
    }else{
        scrollDirection = Math.sign(-event.deltaY);
        scrollStrength = Math.abs(-event.deltaY);
        //console.log(-event.deltaY);
        //rotateText(-event.deltaY);
        rotateAllDots(-event.deltaY);
    }

    if(scrollTimer !== null) {
        clearTimeout(scrollTimer);        
    }
    scrollTimer = setTimeout(function() {
        isScrolling = false;
    }, dT * 1000);
    
    window.scroll(0, 0);

    document.body.style.overflow = 'auto';
    // document.body.removeEventListener('mousewheel', MouseWheelHandler, false);
}

function detectScrollEnd(){
    console.log("scroll ended")
    isScrolling = false;
}

function ResizeHandler(){
    rotateText(0);
    rotateAllDots(0);
}

rotateText(0);
rotateAllDots(0);
rotateImages();

let movementInterval;
var dT = 0.02

loop();
function loop(){
    movementInterval = setInterval(exectuteLoop, dT * 1000);
}

var travelVelocity = 1.1 / dT;
var travelSpeedup = 2 / dT;
var dotPassiveRotation = -0.25 / dT;
function exectuteLoop(){
    console.log("Scrolling: " + scrollDirection);
    if (window.innerHeight > window.innerWidth){
        portrait = true;
    }else{
        portrait = false;
    }
    
    if(text_position > 0.25 && text_position < texts.length - 0.25){
        var nearestCeiling = Math.ceil(text_position) + 0.5;
        var nearestFloor = Math.ceil(text_position) - 0.5;

        if((Math.abs(text_position-nearestCeiling) < 0.01 || Math.abs(text_position-nearestFloor) < 0.01) && scrollStrength < 13){
            scrollDirection = 0;
        }
    }
    rotateImages();
    rotateText(scrollDirection * (travelVelocity));
    rotateAllDots(dotPassiveRotation);
}