var portrait = false;
var orbit = [0.6, 0.2, -20]

var slider = document.getElementById("progress");

var num_dots = 500;
texts = [
    "Infallible Resistance",
    "The Vietnamese people are endurers. For thousands of years, the title of \"the invaded\" perhaps even comes with pride; Vietnamese mothers often lay awake under the stars telling tales to their kids of their dynasties warding off attacks from outsiders. At every defense from invasion, stories become a source for national pride and unity.",
    "The invader is given the impression that they are winning, until heroes pull the rug from under their feet. From its founding in 938, Vietnam liberated itself when Ngo Quyen defeated Han forces in a naval battle at the Battle of Bạch Đằng. My mother told me this story years ago as I laid awake with eyes towards a dark sky. It’s a story of ingenuity.",
    "The Han forces brought many ships, dark iron armor plating each monstrous hull. Ngo Quyen didn’t have such enormous vessels; on the day of the battle, he sent out smaller vessels onto the sea with the sun’s rays striking from above. The Han forces smelled blood, and turned their prowling ships to the now retreating Vietnamese corvettes, which were fleeing toward the Bạch Đằng river. As the sun set and the tide lowered, the Chinese ships were trapped: Vietnamese warriors had earlier planted sharp bamboo stakes in the river bed, which now protruded from the running water and pierced the hulls of their invader’s ships. With the Chinese immobilized, the Vietnamese were easily able to overcome their foes. They were free.",
    "This story is not about the folklore of Vietnamese triumph, but is needed to constitute a necessary understanding for why invasions into Vietnam are impossible. The tenacity and unity of the Vietnamese people have meant they are always capable of overcoming a technologically superior enemy. The three times the Mongolians came back with progressively swelling armies in 1257, 1284, and 1287, each time being beaten by the Tran Dynasty’s scorched earth policy which left the Mongolians in famine.",
    "In recent times, the Vietnamese have been colonized by the French. At the battle of Điện Biên Phủ in 1954, they again freed themselves after hauling cannons onto mountains, digging tunnels for guns to target the French position, and laying a four month siege to stop French colonialism. Atop heavy fire, \"incessant rain transformed the camp into a quagmire\" (Chemins de Memoire). The French could not withstand the storm.",
    "This siege was led by the Viet Minh founded by Hồ Chí Minh, who promptly became a war hero known as Uncle Hồ. The Vietnamese nationality became a bond of blood, passed down by the stories of their heroes. Their identity is formed by oral literature. Although the country was divided into communist and anti-communist during the Vietnam War, it was never about polity for the Vietnamese people. It was about repelling the invaders.",
    "Fallible Motivation",
    "It is almost impossible to win a fight for a cause you don’t believe in. The motivating force at the time was the Domino theory, which posited that if one country were to become communist, its neighbors would also succumb in a chain reaction leaving the world plagued with communism. Citing this, Kennedy escalated the Vietnam war by deploying troops, maintaining this misguided pretense. The American public had few qualms with this; the Red Scare embedded a great fear of Communism.",
    "On August 7, 1964, the Gulf of Tonkin Resolution was passed, enabling the United States to militarize South Asia in the name of maintaining international peace. In reality, any evidence of war mongering was twisted and based on unreliable accounts, leading to the passing of the resolution. The sheer scale of feigned ignorance was such that \"almost 90 percent of the SIGINT intercepts that would have provided a conflicting account [of the Gulf of Tonkin Incident] were kept out of the reports sent to the Pentagon and White House.\" (Paterson)",
    "The United States government had passed The Selective Service Act in 1917 for drafting unwilling young men for the Vietnam War. One such veteran, Tim O’Brien, fictionalized his apprehension for going to war in his novel \"The Things They Carried\":  \"I was too good for this war. Too smart, too compassionate, too everything. It couldn’t happen. … If they needed fresh bodies, why not draft some back-to-the-stone-age hawk? Or some dumb jingo in his hard hat and Bomb Hanoi button, or one of LBJ’s pretty daughters\" (O’Brien 42). Harping on anti-communist war hawks, O’Brien protested being sent to a war he didn’t believe in, especially when people whose lives are not on the line pushed the youth into fighting for the misguided anti-communist narrative. However, O’Brien was dragged into the war by his sense of overwhelming shame in dodging the draft. O’Brien’s feelings were not unique; American soldiers were largely disconnected from the political motivations of the war.",
    "The perception of war was heavily romanticized, with the public dismissing any horrors. Although the Vietnam War was a new instance of the sheer violence of war being televised, many soldiers are still forced to write letters underplaying their situation. APO 96225 is a poem by Larry Rottmann telling the story of a soldier who writes home about the pleasant weather. When asked to describe in greater detail, he describes that \"Today I killed a man. / Yesterday, I helped drop napalm / on women and children\" [5]. His family perceives Vietnam as hospitable, but they cannot swallow even a most general description of horrors of war. Treating war as a vacation stay, they ask how Vietnam treats soldiers; in reality the only bath they would partake in is a bloodbath.",
    "As evidenced by their measured attempts to mitigate destruction at times, the military did not truly believe in the war. In response to conscientious objectors, bombings were restricted only to militarily relevant areas. Bombings on large cities were routine—so routine, that they were predictable enough for civilians to flee the ensuing explosions. This helped the American military to reduce allegations of mass genocide. However, the mere idea of humane bombings is absurd; the livelihoods of those lucky enough to survive were destroyed by napalm raining havoc on straw roofs, destroyed by broken bridges and razed crop fields.",
    "Of the many letters soldiers sent home, one honest letter from an American soldier read: \"I finally got to my unit yesterday. Our mission is to find V.C. and kill them. I should be operating like this for the next two months before I get a chance to take a shower and sleep in a bed.\" Soldiers did their job out of fear of what would happen if they didn't. They were not even given hygienic necessities, not treated as humans. One thing they do not even consider is the conditions of their opponents; the Vietnamese live in these poor conditions, and yet American soldiers were astonished by what is a normal experience for the Vietnamese: \"What a life. There are absolutely no comforts in our job. I carry nothing but a razor and a bar of soap for comfort. We wear the only clothes we have and wash them in rivers and streams as we cross them. You were right. I managed to get myself right in the middle of it all\" (Couturié). In the end, they were both simply tasked with killing the other. In the end, their guilt eats away at their consciences.",
    "In any case, the soldiers that committed the murders cannot take all the blame; they followed orders and their instinct to survive, perhaps the only human thing the war did not strip away. War was profitable for the companies that sell weapons and lobby politicians. Lockheed, Boeing, McDonnell Douglass, and Bell Helicopters all obtained financial gain making aircraft during the Vietnam War. The Dow Chemical Company was the worst violator, responsible for the napalm that was more deadly than conventional gasoline attacks and other carcinogens (Hummel). Their victims were asphyxiated in an environment devoid of oxygen, with carbon monoxide left to poison their lungs.",
    "These war profiteers made money off the dead lives of Vietnamese and Americans. They lived by putting food on their table by selling guns and bombs, eating meals of the vegetation afire from napalm, consuming the flesh of young soldiers.",
    "Within The Trees",
    "The most difficult part of the war for the Americans was knowing where your enemy was. With terribly mountainous terrain and luscious flora and foliage, it was difficult to spot enemies. Frequent monsoons made invasions a logistical nightmare, swallowing entire platoons.",
    "The strategies from the Viet Minh during the revolution against the French were embedded into the Viet Cong. Guerrilla warfare was a prominent factor in the American soldiers’ downfall. For one, the environment increased the effectiveness of Vietnamese traps, of which one kind were pitfall traps with sharp bamboo stakes beneath; a pile of banana leaves could turn into earthen jaws, devouring soldiers’ feet and legs (\"Veteran's Story | Falling through a booby trap\"). These traps were not just set by soldiers, but by women and children. Vietnamese culture has a veneration and respect for women that felt violated by invaders.",
    "During French colonialism, Hồ Chí Minh spoke on how imperialism disrespects women: \"Colonization is in itself an act of violence of the stronger against the weaker. This violence becomes still more odious when it is exercised upon women and children. It is bitterly ironic to find that [French] civilization - symbolized in its various forms, viz., liberty, justice, etc., by the gentle image of a woman, and run by a category of men well known to be champions of gallantry - inflicts on its living emblem the most ignoble treatment and afflicts her shamefully in her manners, her modesty, and even her life. Colonial sadism is unbelievably widespread and cruel, but we shall confine ourselves here to recalling a few instances seen and described by witnesses unsuspected of partiality.\" (Turner) Hồ Chí Minh condemns the irony of a civilization, symbolized by the image of a gentle woman and espousing values like liberty and justice, subjecting women—the embodiment of its own symbolism—to ignoble treatment. This juxtaposition underscores the hypocrisy of the colonizers who claim to champion gallantry and civilizational progress while inflicting harm on the very individuals who symbolize their own ideals.",
    "Hồ Chí Minh continues: \"These facts will allow our Western sisters to realize both the nature of the ‘civilizing mission’ of capitalism, and the sufferings of their sisters in the colonies. On the arrival of the soldiers, relates a colonel, the population fled; there only remained two old men and women: one maiden and a mother suckling her baby and holding an eight-year-old girl by the hand. The soldier asked for money, spirits, and opium. As they could not make themselves understood, they became furious and knocked down one of the old men with their rifle butts. Later, two of them, already drunk when they arrived, amused themselves for many hours by roasting the other old man at a wood fire. Meanwhile, the others raped the two women and the girl. The mother was then able to escape with her infant from a hundred yards off, hidden in a bush, she saw her companion tortured. She did not know why the murder was perpetrated, but she saw the young girl lying on her back, bound and gagged, and one of them men, many times, slowly thrust his bayonet into her stomach and, very slowly, draw it out again. Then he cut off the dead girl's finger to take a ring, and her head to steal a necklace.\"",
    "Much of the motivation to fight was because the Vietnamese had felt violated by Western invaders. They felt taken advantage of, and would make themselves the underdog in a fight to protect their women and children. Hồ Chí Minh noted several ironies in the invader’s justifications: capitalism did not bring about great wealth or subjective western moral growth; using a woman to symbolize gentle touch, they instead rape their subjects and torturously took life away from the people. By Hồ Chí Minh telling a detailed story, this becomes personal. The family described could be any Vietnamese family, your family. Once the Vietnamese offered nothing sexually, the invaders took their possessions in cold-hearted capitalist fashion. The invaders impaled the women, impaled the country.",
    "Trees served as a basis for offensives. Covering troop movements from surveillance, they fueled nightmares for American troops who were stuck in a foreign land; trees could quickly become enemies. Americans had even resolved to use chemicals to remove foliage, using Agent Orange to uncover leaves. Agent Orange was a known carcinogen, and as it spread tumors to humans and raped the land. Perhaps greatest of all, trees posthumously served as paper to spread messages. The Vietnamese were a literate people despite their poverty, and Hồ Chí Minh’s revolutionary ideas spread quickly to unite them against the invaders. These ideas were hidden weapons that could turn enemies to allies.",
    "Even if they could see their enemy, Americans could not know whether they were hostile. Looking civilians in the eye, perhaps a woman cooking pots of rice or a child selling lollipops and dried fruit, there was no way to know if they served the Viet Cong. These people tested the humanity of soldiers. \"To make a good soldier, you have to train him that what he is destroying is not worthy of life,\" says Fred Whitehurst, a veteran who fought in the Vietnam War for three years. Americans were forced to kill those they might not even know were enemies. During the long and arduous war, only those with the capacity to kill potentially innocent women and children survived. The child could be harmless, even cheering for you, or could secretly report to the very Viet Cong you were fighting. And each person you killed would haunt your dreams and every waking moment in excruciating detail of memory until you’d remembered it enough times for the details to become blurred. For the soldiers, it was a tragic test: kill, or be killed.",
    "Creating problems for the Americans took a heavy toll for the Vietnamese. The most critical show of conviction from the North Vietnamese were the 1.1 million North Vietnamese army and Viet Cong combatants killed in action. The population of North Vietnam in 1965 was 38.9 million of which 2 million civilians were killed; this war meant decimation. Everybody likely lost a family member or close friend. In contrast, only 58,900 dead Americans are listed on the Vietnam Veterans memorial, and only 250,000 were killed in the South Vietnamese Army (Encyclopedia Britannica).",
    "The Northern victory had the price of total warfare. Since Americans not only fought against soldiers, but women and children, they committed horrible acts such as the My Lai massacre. American soldiers from Charlie Company, a unit of the U.S. Army, brutally killed an estimated 500 unarmed Vietnamese civilians, including women, children, and the elderly, in the village of My Lai in Quang Ngai Province, South Vietnam. The soldiers, irresponsibly led by Lieutenant William Calley, carried out the massacre under the presumption that the villagers were sympathetic to the Viet Cong. The killings involved rape, torture, and the destruction of homes. Although some of the victims may have been Viet Cong sympathizers, there were only two actually confirmed Viet Cong. The psychological trauma of never knowing who and where your enemy is quickly distorted the magnetic field in which the moral compass dwells. Eventually, you would lose their bearing in the war, and wander aimlessly in life.",
    "Every culture has military cadences to deal with the losses and poor conditions of war. The lyrics of one Viet Cong song entitled \"Đồng chí\" translates to: \"My hometown has salty water, sour fields. My village is poor, the soil plowed up is rocky. You and I are strangers. By the heavens we met by chance. Gun by gun, head by head, This cold night we share the same blanket as a pair of soul mates. Comrades! The fields I send my best friend to plow, our empty house shakes in the wind. The well and banyan roots miss the soldiers. You and I endure each chill, Fever, shivering, and sweaty forehead. My shirt is torn at the shoulder, My pants have some patches, Frozen smile, My feet are shoeless, We love each other and hold hands! Tonight the forest holds frosted fog. Stand side by side awaiting the enemy’s arrival, as the moon hangs by the muzzle of my gun.\"",
    "In the song, the soldiers sing about the impoverished states of their village, reminding them of why they fight. The same \"shit fields\" that astonish the American soldiers is also farmland and water that the Vietnamese live with. The soldiers miss the well each village is centered upon and the banyan tree where the little kids would congregate to play. The soldier only meets with his comrade by the war, not of his own volition but feels blessed to be sharing the duty of fighting the invaders with his comrade. Becoming friends with him, they are forced to share blankets as the army is not well equipped. They endure torn shirts and pants and shoeless feet, mosquitos and malaria, and the fog that turns to frost; however, they have the company of their comrades to keep them in good spirits. The song ends with the haunting metaphor of holding the gun vertical, where the crescent of the moon acts as a hook to carry some of the weight. The soldiers appreciate the beauty of the nature that accompanies them: the kind light of the moon, the shrouding leaves of the trees. They fight to protect their land.",
    "The song embodied the solidarity of the Viet Cong, and expresses the appeal of communism. In face of innumerable hardships from disease, poverty, and frost, it encourages their commitment to building a society free from exploitation. The melody and rhythm evoke a sense of determination and perseverance, stirring the hearts of those who hear it. The song's powerful chorus and the passion with which it is sung have the capability to unite and motivate individuals, evoking a shared sense of purpose and pride in the Vietnamese identity. While the South’s propaganda focused on fighting communism, the North rallied people against the invading Americans, which became a much stronger motivation. Communism was a facade to unite the people.",
    "The \"Cong\" in \"Viet Cong\" is derived from the Vietnamese word for addition. To add to each other, to grow in number, to sum to one people. More strictly, it refers to the addition of their property. But they were all in it together. They were poor, their villages destitute, their farms desolate; but more importantly, they were one in spirit. They put aside their personal identities, and went to fight for a better future for their nation. They didn’t want to fight, but did it out of necessity.",
    "The following stories are works of fiction intended to demonstrate the various perspectives of soldiers, exploring their capacity for inhumanity and impersonal violence.",
    "Fuels",
    "There’s this kid, a good kid. Obedient, he works from before the sun rises until the skies are orange. Every day he takes his cart full of candy and snacks into Saigon, selling until he returns home with the empty cart. He’s the kind of kid who isn’t picky about food, the kind of kid who eats every grain of rice fumbling with chopsticks he can barely hold. And one night, the Viet Cong knock on our door as the children are going to sleep. They speak hurriedly, in a hushed quiet voice with no time for small talk. They have a mission for my son.",
    "Over the next two weeks, he sells goods near where the Americans occupy. He talks about making friends with the soldiers. The last day I saw him, I saw a frozen smile as he was undeterred to help free my home from invaders. Instead of selling his usual treats, the cart is filled up with gallons of gasoline. At dawn he arrives, emptying four bottles onto the rooftop of an ammunition depot. I’m told by the Viet Cong soldiers over tea what they witnessed. Wrapped in the cloth blanket he slept with at night, doused in gasoline, they set him afire as he charged into the napalm depot. Stunned, the Americans are unable to fire at him. The explosion is a fury of red and yellow, dazzling across the backdrop of gloomy clouds. It burned bright and short, and the life of the thousand tons of napalm fizzled to an end. He is hailed as a hero by my comrades, but it tastes artificially sweet. Like the candy he sold, insidious.",
    "Fires",
    "Insidious. It gets to you, you know? Vietnam and its people are small, little, but deadly. This one kid sold salted peanuts. Gave me some unshelled peanuts in a little green banana leaf. If you got close enough, you could smell the pandan-like oils. One day it wasn’t peanuts. His innocent smile and diligence touched something deep within me, reminding me of a time when life was simpler. He appeared friendly, striking broken conversations with my fellow soldiers, seemingly innocent in his pursuits to live a humble life.",
    "On that fateful day, as the sun rose, I watched a fireball approach me. Slowly recognizing the outline of his face through the flame, the boy looked like a demon from hell. Unbeknownst at the time, his cart, usually filled with sugary delights, carried something far more sinister—jugs of gasoline that doused the depot. No amount of training could have prepared me for the hellbat; the cloth he bound himself in spread as wings that engulfed the world. The world was frozen as violent explosions painted the sky. My shiftmate laid motionless, eviscerated by the chain of explosions. There was no poetic death. Just gone.",
    "How could someone so kind just vanish? There were no tears. I could completely understand the enemy, why he let himself burn. He was indoctrinated, it wasn’t personal, right? How could I have believed that suicide-bomber, that terrorist? Why did it have to be me to watch my friend die? I wanted to leave. Hate swelled up in my heart, and each kid that came up to sell treats made my blood boil—a seething, consuming hatred that burns fiercely in my veins. These creatures were certainly not worthy of life, only good for taking ammunition.",
    "The following is no longer fiction.",
    "Posterity",
    "My great grandfather concentrated. He studied hard. Under French rule, he rose from his village as one of the very few to graduate college. For reference, you would be qualified to be the village leader if you had passed the equivalent of fifth grade in Vietnam. Graduating university for law, he became a prominent judge for the French regime occupying Vietnam. He moved to the South, despite his family being in the North.",
    "He was known for his honesty and faithfulness. Known for his integrity which was tested by countless bribes, especially as he rose to become the attorney general of South Vietnam. After the fall of Saigon, he remained even with the imminent threat of imprisonment in concentration camps. These were ironically referred to as \"reeducation camps;\" graduating college would make him more educated than a vast majority of people. What \"education\" really referred to was indoctrination. Yet his desires were simple, he wanted to see his brothers and sisters who were still in the North, and his wishes were granted. Having served his duty, he lived in the camps until his death.",
    "Preceding the fall of Saigon on April 30, 1975, the leader of South Vietnam, President Nguyễn Văn Thiệu, fled to France. Five days earlier, he left Vietnam and sought asylum in Taiwan before eventually settling in France. He took fifteen million dollars of gold transporting him away. The flagrant corruption of the South Vietnam government during the war was punctuated by Van Thieu’s thievery, leaving hopeless soldiers to fight for a corrupt cause.",
    "Life in post-war Vietnam was difficult for my family; they only had women in the household to do work. The political consequences of the war left my family discriminated against, out of opportunities. For instance, my mother had been a great swimmer, so one coach asked her to join the team. As soon as the coach heard her father was in a reeducation camp, he told her that she was unable to apply.",
    "After America already displaced countless refugees, the Refugee Act of 1980 was passed by the Carter administration, creating opportunities for immigration. My family was among the first wave in the H-O program to immigrate to America. My mother arrived aged twenty three, studying in college and working multiple jobs to support her family. Her favorite job was babysitting, as she was able to learn English by watching Sesame Street along with the child she took care of. Her family was not afraid to work hard.",
    "After settling down with my father and finding a job she received a book from her father’s cousin, Bác Quang. One night after putting my two brothers to bed, she opened the book. She couldn’t stop reading the book, a diary of love, tears, and blood of a young girl. To her surprise, it did not contain hate for Americans but remarkable love for life. During the war, a young doctor named Đặng Thùy Trâm worked for the Viet Cong in the Quảng Ngãi. Aged twenty-seven, she was killed defending her patients from American soldiers. Her diary was discovered by Fred Whitehurst, who defied orders to burn it to bring it home. After holding onto it for decades, he enlisted the aid of North Vietnamese journalists, and eventually returned the diary to Đặng Thùy Trâm’s family.",
    "The diary described her friendships with the hospitalized Viet Cong soldiers, her surgeries without electricity, her devotion to the Viet Cong, and her near-death experiences. The diary contained advice for herself, talked about her crush and her longing for her family. Even in war, it was a diary of innocence, a diary touching all those that read it. My mother wrote back to Bác Quang, saying \"I have not read a single Vietnamese book in ten years. Busy is just an excuse, I mainly want to let the memories settle in my heart.\" In her pursuit to live in a competitive society, she had become detached from her culture, and more importantly her past. This book united all kinds of people previously in conflict to appreciate life: my mother, a southerner; Bác Quang, a northerner; Whitehurst, an American. Literature reminds future generations of war. Literature of war that brings out the best and worst in humans. For those that experienced war firsthand, war now only lasts in memory; we cannot let time take away the lessons and emotions of war.",
    "Works Cited",
    "Chemins de Memoire. \"Battle of Dien Bien Phu.\" Internet Archives, MINDEF/SGA/DMPA, 2003, https://web.archive.org/web/20160819051922/http://cheminsdememoire.gouv.fr/en/battle-dien-bien-phu. Accessed 3 July 2023. Couturié, Bill, director. Dear America: Letters Home from Vietnam. 1987. Donnell, John C. Viet Cong Recruitment: Why And How Men Join. 1967, https://www.rand.org/content/dam/rand/pubs/research_memoranda/2007/RM5486-1.pdf. \"How many people died in the Vietnam War?\" Encyclopedia Britannica, 14 April 2023, https://www.britannica.com/question/How-many-people-died-in-the-Vietnam-War. Accessed 3 June 2023. Hummel, Anita L. \"What U. S Companies Profited During The Vietnam War?\" A Bus On a Dusty Road, https://abusonadustyroad.com/us-companies-profited-during-vietnam-war/. Accessed 3 June 2023. O'Brien, Tim. The things they carried. Broadway Books, 1998. Paterson, Pat. \"The Truth About Tonkin | Naval History Magazine - February 2008 Volume 22, Number 1.\" U.S. Naval Institute, https://www.usni.org/magazines/naval-history-magazine/2008/february/truth-about-tonkin. Accessed 3 June 2023. Turner, Karen Gottschang. Even the Women Must Fight: Memories of War from North Vietnam. Wiley, 2008. Accessed 3 June 2023. \"Veteran's Story | Falling through a booby trap.\" Mansfield News Journal, 12 September 2017, https://www.mansfieldnewsjournal.com/story/life/people/veterans/2017/09/12/veterans-story-falling-through-booby-trap/646856001/. Accessed 3 June 2023."
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
    [22, "images/TwelveYearOld.png"],
    [25, "images/MyLai.jpeg"],
    [28, "images/Village.jpeg"]
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
    slider.setAttribute("max", texts.length * 1000);

    slider.value = text_position * 1000;

    slider.oninput = function(){
        if(this.value/1000 > 0.5 && this.value/1000 < texts.length - 0.5){
            text_position = Math.floor(this.value/1000) + 0.5;
            scrollDirection = 0;
            scrollStrength = 0;
            rotateText(0);
        }else if(this.value/1000 < 0.5){
            text_position = 0.5;
            rotateText(0);
        }else if(this.value/1000 > texts.length - 0.5){
            text_position = texts.length - 0.5;
            rotateText(0);
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
        rotateText(10 * Math.log(Math.abs(event.wheelDelta)) * Math.sign(event.wheelDelta));
        rotateAllDots(event.wheelDelta);
    }else{
        scrollDirection = Math.sign(-event.deltaY);
        scrollStrength = Math.abs(-event.deltaY);
        //console.log(-event.deltaY);
        rotateText(2 *  -event.deltaY);
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

        if((Math.abs(text_position-nearestCeiling) < 0.02 || Math.abs(text_position-nearestFloor) < 0.02) && scrollStrength < 100){
            scrollDirection = 0;
        }
    }
    updateSlider();
    rotateImages();
    //rotateText(scrollDirection * (travelVelocity));
    rotateAllDots(dotPassiveRotation);
}