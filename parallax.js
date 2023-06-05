var portrait = false;
var orbit = [0.6, 0.2, -20]

var slider = document.getElementById("progress");

var num_dots = 500;
texts = [
    "Infallible Resistance",
    "The Vietnamese people are endurers. For thousands of years, the title of \"the invaded\" perhaps even comes with pride; mothers lay awake under the stars telling tales to their kids of Vietnamese dynasties warding off attacks from outsiders. At every defense from invasion, stories become a source for national pride and unity.",
    "The invader is always given the impression that they are winning, until heroes pull the rug from under their feet. From its inception in 938, Vietnam liberated itself from the Chinese when Ngo Quyen defeated Han forces in a naval battle at the Battle of Bach Dang. It's a story of ingenuity. [1]",
    "My mother told me this story years ago as I laid awake with eyes towards a dark sky. The Han forces brough many ships, with armor plating each monstrous hull. Ngo Quyen didn't have big ships, and on the day of the battle he sent out smaller vessels onto the sea with the sun's heat streaming from directly above. The Han forces smelled blood, turned their prowling ships to the now retreating Vietnamese frigates, which fled toward the Bach Dang river. As the sun set and the tide lowered, the Chinese ships were trapped: Vietnamese warriors planted sharp bamboo stakes in the river bed, now protruding from the running water and piercing the hulls of their invader's ships. With the Chinese immobilized, the Vietnamese were easily able to overcome their foes. They were free.",
    "This is not about the folklore of Vietnamese triumph, but constituting a necessary understanding for why invasions into Vietnam are impossible. The tenacity and unity of the Vietnamese people have meant they are always capable of overcoming a technologically superior enemy. The three times the Mongols came back with a more massive army in 1257, 1284, and 1287, beaten by the Tran Dynasty's scorched earth policy which left them in famine.",
    "In recent times, the Vietnamese have been colonized by the French. At the battle of Dien Bien Phu in 1954, they again freed themselves after hauling cannons onto mountains, digging tunnels for guns to target the French position, laying a four month siege to stop French colonialism. Atop heavy fire, \"incessant rain transformed the camp into a quagmire\" [2]. The French could not withstand the storm.",
    "This siege was led by the Viet Minh founded by Ho Chi Minh, who promptly became a war hero known as Uncle Ho. The Vietnamese nationality became akin to the bond of blood. Although the country was split into communist and anti-communist, it was never about forms of government for the Vietnamese people. It was about repelling the invaders. While the South's propaganda focused on fighting communism, the North rallied people against the invading Americans, which became a much stronger motivation.",
    "Fallible Motivation",
    "It is almost impossible to win a fight for a cause you don't believe in. The soldiers were completely disconnected from political motivations. The motivation at the time was the Domino theory, which stated that if one country were to become communist, its neighbors would also succumb in a chain reaction leaving the world plagued with communism. Citing this, Kennedy escalated the Vietnam war by deploying troops, upkeeping this false narrative. The American public did not have too many qualms with this, as the Red Scare embedded a great fear for Communism.",
    "On August 7, 1964, the Gulf of Tonkin resolution was passed, enabling the United States to militarize South Asia in the name of maintaining international peace. In reality, evidence was twisted, based on false reports, and critical pieces were unreported, leading to the passing of the resolution. To give perspective on the scale of feigned ignorance, \"almost 90 percent of the SIGINT intercepts that would have provided a conflicting account were kept out of the reports sent to the Pentagon and White House.\" [3]",
    "The United States government had passed legislation for drafting young men, used here to get soldiers for the Vietnam War. Tim O'Brien, a Vietnam War veteran fictionalizes his apprehensions for going to war in his novel \"The Things They Carried\":  \"I was too good for this war. Too smart, too compassionate, too everything. It couldn't happen. ... If they needed fresh bodies, why not draft some bac-to-the-stone-age hawk? Or some dumb jingo in his hard hat and Bomb Hanoi button, or one of LBJ's pretty daughters\" (42) [4]. Harping on the people inciting the draft, he protests being sent to a war he doesn't believe in, especially when civilians with no mortal stake in the war push the youth into fighting for the anti-communist narrative. However, he is dragged into the war anyways out of the shame in dodging the draft.",
    "The perception of war is still heavily romanticized, with the public dismissing any horrors. Although the Vietnam War was a new instance of the sheer violence of war being televised, many soldiers are still forced to write letters underplaying their situation. APO 96225 is a poem by Larry Rottmann telling the story of a soldier who writes home about the pleasant weather. When asked to describe in greater detail, he describes that \"Today I killed a man. / Yesterday, I helped drop napalm / on women and children\" [5]. His family perceives Vietnam as hospitable, but they cannot swallow even a most general description of horrors of war. Treating war as a vacation stay, they ask how Vietnam treats soldiers; in reality the only bath they partake in is a bloodbath.",
    "Even during the war, the military did not truly believe in the war. In response to conscientious objectors, bombings would be restricted to only militarily relevant areas. Bombings on large cities were routine, so routine that they were predictable enough for civilians to flee before the damage ensued; and this was most likely in order to reduce allegations of mass genocide. The idea of humane bombings is so absurd; even when they are alive, their livelihoods are destroyed by napalm raining havoc on straw roofs.",
    "One letter from American soldiers reads: \"Chris, I finally got to my unit yesterday. Our mission is to find V.C. and kill them. I should be operating like this for the next two months before I get a chance to take a shower and sleep in a bed. What a life. There are absolutely no comforts in our job. I carry nothing but a razor and a bar of soap for comfort. We wear the only clothes we have and wash them in rivers and streams as we cross them. You were right. I managed to get myself right in the middle of it all\" [6]. Soldiers do their job out of fear of what happens if they don't. They are not even given hygienic necessities, not treated as humans. One thing they do not even consider is the conditions of their opponents; the Vietnamese live in these poor conditions, and yet American soldiers are astonished by what is a normal experience for the Vietnamese. In the end, they are both simply tasked with killing the other. Except the Americans have no justification, other than their orders, so their guilt eats away at their consciences.",
    "In any case, the soldiers that committed the murders cannot take all the blame; they followed orders and their instinct to survive, perhaps the only human thing the war did not strip away. War is profitable for the companies that sell weapons and lobby politicians. Lockheed, Boeing, McDonnell Douglass, and Bell Helicopters all managed financial gain making aircraft during the Vietnam War. The Dow Chemical Company is the worst violator, responsible for the napalm that was more deadly than conventional gasoline attacks and other carcinogens. Their victims are asphyxiated in an environment devoid of oxygen, with carbon monoxide left to poison their lungs. These companies made money off the dead lives of Vietnamese and Americans.",
    "Within The Trees",
    "The most difficult part of the war for the Americans was knowing where your enemy was. With terribly mountainous and lucious flora and foliage, it was difficult to spot enemies. Frequent monsoons made invasion a logistical nightmare, swallowing entire platoons.",
    "The strategies from the Viet Minh during the revolution against the French were embedded into the Viet Cong. Guerrilla warfare was a prominent factor in the American soldiers' downfall. For one, the environment increased the effectiveness of Vietnamese traps, of which one kind were pitfall traps with sharp bamboo stakes beneath. The pile of banana leaves a man could step on could turn into earthen jaws, devouring soldiers' feet and legs. These traps were not just set by soldiers, but by women and children. Vietnamese culture has a veneration for women, a respect that felt violated by invaders.",
    "During French colonialism, Ho Chi Minh spoke on how imperialism disrespects women: \"Colonization is in itself an act of violence of the stronger against the weaker. This violence becomes still more odious when it is exercised upon women and children. It is bitterly ironic to find that [French] civilization - symbolized in its various forms, viz., liberty, justice, etc., by the gentle image of a woman, and run by a category of men well known to be champions of gallantry - inflicts on its living emblem the most ignoble treatment and afflicts her shamefully in her manners, her modesty, and even her life. Colonial sadism is unbelievably widespread and cruel, but we shall confine ourselves here to recalling a few instances seen and described by witnesses unsuspected of partiality.", 
    "These facts will allow our Western sisters to realize both the nature of the \"civilizing mission\" of capitalism, and the sufferings of their sisters in the colonies. On the arrival of the soldiers, relates a colonel, the population fled; there only remained two old men and women: one maiden and a mother suckling her baby and holding an eight-year-old girl by the hand. The soldier asked for money, spirits, and opium. As they could not make themselves understood, they became furious and knocked down one of the old men with their rifle butts. Later, two of them, already drunk when they arrived, amused themselves for many hours by roasting the other old man at a wood fire. Meanwhile, the others raped the two women and the girl. The mother was then able to escape with her infant from a hundred yards off, hidden in a bush, she saw her companion tortured. She did not know why the murder was perpetrated, but she saw the young girl lying on her back, bound and gagged, and one of them men, many times, slowly thrust his bayonet into her stomach and, very slowly, draw it out again. Then he cut off the dead girl's finger to take a ring, and her head to steal a necklace.\"",
    "Much of the motivation to fight was because they had felt violated by Western invaders. They felt taken advantage of, and would make themselves the underdog in a fight to protect their women and children. Ho Chi Minh notes several ironies in the invader's justifications: capitalism did not bring about great wealth or subjective western moral growth; using a woman to symbolize gentle touch, they instead rape their subjects and torturously take life away from the people. After the people offer nothing sexually, they take their possessions in cold-hearted capitalist fashion.",
    "Trees served as a basis for offensives. Covering troop movements from surveillance, they made nightmares for American troops who were stuck in a foreign land where the trees could quickly become enemies. Americans had even resolved to use chemicals to remove foliage, using Agent Orange to uncover leaves. Agent Orange was a known carcinogen, and as they spread tumors to humans, they raped the land. Perhaps greatest of all, trees posthumously served as paper to spread messages. As the Vietnamese were a literate people despite their poverty, these revolutionary ideas spread quickly to unite them against the invaders. These ideas were hidden weapons that could turn enemies to allies.",
    "Even if they could see their enemy, Americans could not know whether they were hostile. Looking civilians in the eye, perhaps a woman cooking pots of rice, a child selling lollipops and roasted peanuts, there was no way to know if they served the Viet Cong. These people tested the humanity of soldiers. \"To make a good soldier, you have to train him that what he is destroying is not worthy of life,\" says Fred Whitehurst, a veteran who fought in the Vietnam War for three years. Americans were forced to kill those they might not even know were enemies. During the long and arduous war, only those with the capacity to kill potentially innocent women and children survived. The child could be harmless, even cheering for you, or could secretly report to the very Viet Cong you were fighting. And each person you killed would haunt your dreams and every waking moment in excruciating detail of memory until you'd remembered it enough times for the details to become blurred. For the soldiers, it was a tragic test: kill, or be killed.",
    "Creating problems for the Americans took a heavy toll for the Vietnamese. The most damning show of conviction from the North Vietnamese were the 1.1 million North Vietnamese army and Viet Cong combatants killed. An additional 2 million civilians were killed, and since the population of North Vietnam in 1965 was 38.9 million, this war meant decimation. Everybody likely lost a family member or close friend. In contrast, only 58,900 Americans are listed on the memorial, and only 250,000 were killed in the South Vietnamese Army.",
    "The price of their victory was the cost of total warfare. Since Americans not only fought against soldiers, but women and children, it allowed them to commit horrible acts such as the My Lai massacre. American soldiers from Charlie Company, a unit of the U.S. Army, brutally killed an estimated 500 unarmed Vietnamese civilians, including women, children, and the elderly, in the village of My Lai in Quang Ngai Province, South Vietnam. The soldiers, irresponsibly led by Lieutenant William Calley, carried out the massacre under the presumption that the villagers were sympathetic to the Viet Cong. The killings involved rape, torture, and the destruction of homes. Although some of the victims may have been Viet Cong sympathizers, there were only two actually confirmed Viet Cong. The psychological trauma of never knowing who and where your enemy is will quickly distort the magnetic field the moral compass lies in. Eventually, you'll lose your bearing in the war, and wander aimlessly in life.",
    "Every culture has military cadences to deal with the losses and poor conditions of war. The lyrics of one Viet Cong song entitled \"Dong Chi\" translates to: \"My hometown has salty water, sour fields. My village is poor, the soil plowed up is rocky. You and I are strangers. By the heavens we met by chance. Gun by gun, head by head, This cold night we share the same blanket as a pair of soul mates. Comrades! The fields I send my best friend to plow, Our empty house shakes in the wind. The well and banyan roots miss the soldiers. You and I endure each chill, Fever, shivering, and sweaty forehead. My shirt is torn at the shoulder, My pants have some patches, Frozen smile, My feet are shoeless, We love each other and hold hands! Tonight the forest holds frosted fog. Stand side by side awaiting the enemy's arrival, as the moon hangs by muzzle of my gun.\"",
    "The soldiers talk about the impoverished states of their village, reminding them of why they fight. The soldiers miss the well each village is centered upon, and the banyan tree where the kids would congregate to play. He only met with his comrade by the war, not of his own volition but feels blessed to be sharing the duty of fighting with his comrade. Becoming friends with him, they are forced to share blankets as the army is not well equipped. They endure torn shirts and pants and shoeless feet, mosquitos and malaria, and the fog that turns to frost; However, they have the company of their comrades to keep them in good spirits. The song ends with the haunting metaphor of holding the gun vertical, where the crescent of the moon acts as a hook to carry some of the weight.",
    "The song summarizes the solidarity of the Viet Cong, and expresses the appeal of communism. In face of innumerable hardships from disease, poverty, and frost, it encourages their commitment to building a society free from exploitation. The melody and rhythm evoke a sense of determination and perseverance, stirring the hearts of those who hear it. The song's powerful chorus and the passion with which it is sung have the capability to unite and motivate individuals, evoking a shared sense of purpose and pride in the Vietnamese identity.",
    "The \"Cong\" in \"Viet Cong\" is derived from the Vietnamese word for addition. To add to each other, to grow in number, to sum to one people. They put aside their personal identities, and went to fight for a better future for their nation. They didn't want to fight, but did it out of necessity.",
    "How To Eat Your Young",
    "The following stories are works of fiction intended to demonstrate the various perspectives of soldiers, exploring their capacity for inhumanity and impersonal violence.",
    "There's this kid, a good kid. Obedient, he works from before the sun rises until the skies are orange. Every day he takes his cart full of candy and snacks into Saigon, selling until he returns home with the empty cart. He's the kind of kid who isn't picky about food, the kind of kid who eats every grain of rice fumbling with chopsticks he can barely hold. And one night, the Viet Cong knock on our door as the children are going to sleep. They speak hurriedly, in a hushed quiet voice with no time for small talk. They have a mission for my son.",
    "Over the next two weeks, he sells goods near where the Americans occupy. He talks about making friends with the soldiers. The last day I saw him, I saw a frozen smile as he was undeterred to help free my home from invaders. Instead of selling his usual treats, the cart is filled up with four gallons of gasoline. At dawn he arrives, emptying four bottles onto the rooftop of an ammunition depot. I'm told by the Viet Cong soldiers over tea what they witnessed. Wrapped in the cloth blanket he slept with at night, doused in gasoline, they set him afire as he charged into the napalm depot. Stunned, the Americans are unable to fire at him. The explosion is a fury of red and yellow, dazzling the backdrop of gloomy clouds. It burned bright and short, and the life of the thousand tons of napalm fizzled to an end. He is hailed as a hero by my comrades, but it tastes artificial. Like the candy he sold, insidious.",
    "Insidious. It gets to you, you know? Vietnam and its people are small, little, but deadly. This one kid sold salted peanuts. Gave me some unshelled peanuts in a little green banana leaf. If you got close enough, you could smell the pandan-like oils.",
    "Concentration",
    "My great grandfather concentrated. He studied hard. Under French rule, he rose from his village as one of the very few to graduate college. For reference, you would be qualified to be the village leader if you had passed the equivalent of fifth grade in Vietnam. Graduating university for law, he became a prominent judge for the French regime occupying Vietnam. He moved to the South, despite his family being in the North.",
    "Áo anh rách vai Quần tôi có vài mảnh vá Miệng cười buốt giá Chân không giày",
    "Quê hương anh nước mặn, đồng chua Làng tôi nghèo đất cày lên sỏi đá Anh với tôi đôi người xa lạ Tự phương trời chẳng hẹn quen nhau. Súng bên súng, đầu sát bên đầu Đêm rét chung chăn thành đôi tri kỷ Đồng chí!"
   ];

images = [
    [3, "images/BattleOfBachDang.jpeg"],
    [4, "images/MongolInvasion.jpeg"],
    [5, "images/DienBienPhu.jpeg"],
    [6, "images/HoChiMinh.jpeg"],
    [8, "images/Kennedy.jpg"],
    [9, "images/GulfOfTonkin.jpeg"],
    [10, "images/TimOBrien.png"],
    [14, "images/AgentOrange.png"],
    [17, "images/PitFallTrap.jpeg"],
    [21, "images/Forest.jpeg"],
    [22, "images/TwelveYearOld.png"]
]

//Create Dots
for(var i = 0; i < num_dots; i++){
    var element = document.createElement('span');

    var diameter = Math.floor(Math.random() * 2 + 1);
    element.style.width = diameter + 'px';
    element.style.height = diameter + 'px';

    var brightness = 80 + (diameter) * 40 + 20 * Math.random();
    element.style.backgroundColor = 'rgb(' + brightness + ' , ' + brightness + ',' + brightness + ')';
    element.style.boxShadow = "0px 0px 1px 1.25px " + 'rgb(' + brightness + ' , ' + brightness + ',' + brightness + ')';

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

    element.style.width = 'calc(25vw)';
    element.style.height = 'calc(50vh)';
    element.textContent = texts[i];

    if(texts[i].length < 25){
        element.style.fontSize = "64px";
    }

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

function updateSlider(){
    slider.setAttribute("min", 0);
    slider.setAttribute("max", texts.length);

    slider.value = text_position;

    slider.oninput = function(){
        if(this.value > 0.5 && this.value < texts.length - 0.5){
            text_position = Math.floor(this.value) + 0.5;
        }
    }
}

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
                element.style.width = 'calc(25vw)';

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

        if((Math.abs(text_position-nearestCeiling) < 0.02 || Math.abs(text_position-nearestFloor) < 0.02) && scrollStrength < 25){
            scrollDirection = 0;
        }
    }
    updateSlider();
    rotateImages();
    rotateText(scrollDirection * (travelVelocity));
    rotateAllDots(dotPassiveRotation);
}