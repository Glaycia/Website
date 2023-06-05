const card_deck = document.querySelectorAll(".card:not(.card-back):not(.card-front)");
const sections = document.getElementsByClassName("section");
const light = document.getElementsByClassName("light");
const card_or_sect = document.querySelectorAll(".card:not(.card-back):not(.card-front),.section");

var sectionalized_deck = new Array();
var starting_card_positions = new Array();
var card_positions = new Array();

var section_positions = new Array();

opener();
sort_cards();
animate_card_throw();

function opener(){
    all_card_stasis(1);
    for(let i = 0; i < card_deck.length; i++){
        var card = card_deck[i];
        card.style.opacity = "1";
        //card.style.border = "3px solid #d1f8fc";

        card.style.left = (window.innerWidth * 0.5)+ "px";
        card.style.top = (window.innerHeight * 0.4 + 2.5 * (card_deck.length - i))+ "px";

        card.style.transform = "translate3d(-50%, -50%, " + 50*i + "px)";
    }

    section_opacity(0);
}
function random_range(lower, upper){
    return Math.random() * (upper - lower) + lower;
}
function clamp(x, lower, upper){
    return Math.min(Math.max(lower, x), upper);
}
function lighting(x){
    //console.log('Lights Changed' + x);
    for(let i = 0; i < light.length; i++){
        element = light[i];
        element.style.opacity = x;
    }
}
function lightMode(zeroifyellow){
    if(zeroifyellow == 0){
        for(let i = 0; i < light.length; i++){
            element = light[i];
            element.style.boxShadow = "0px 0px calc(10vw) calc(10vw) rgba(255, 221, 0, 0.25), inset 0px 0px 0px calc(10vw) rgba(255, 221, 0, 0.25)";
            element.style.height = window.innerWidth * 0.15 + "px";
            element.style.width = window.innerWidth * 0.15 + "px";            
        }
    }else{
        for(let i = 0; i < light.length; i++){
            element = light[i];
            element.style.boxShadow = "0px 0px calc(10vw) calc(80vw) rgba(0, 0, 0, 0.5), inset 0px 0px 0px calc(80vw) rgba(0, 0, 0, 0.5)";
            element.style.height = window.innerWidth * 0.9 + "px";
            element.style.width = window.innerWidth * 0.9 + "px";            
        }
    }
}
function all_card_stasis(x){
    for(let i = 0; i < card_deck.length; i++){
        var card = card_deck[i];
        console.log("Before:" + i + card.style.stasis);

        card.style.stasis = x;

        console.log("Afters:" + i + card.style.stasis);
        console.log("Is it zero?", card.style.stasis == 0);
    }
}
function generate_card_behavior(){

    function glow(e){
        //console.log("Hovering");
        //console.log(e.target);
        if(e.target && e.target.style.stasis == 0){
            //console.log("setting boxshadow");
            e.target.style.boxShadow = "0px 0px 20px rgba(251, 255, 0, 0.6)";

            e.target.firstChild.style.transform = "rotateY(180deg)";
        }
    }
    function unglow(e){
        e.target.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.3)";
        //console.log(e.target);
        //console.log(e.target.firstElementChild);
        e.target.firstElementChild.style.transform = "rotateY(0deg)";
    }

    function moveToCenter(e){
        let animation_duration = 0.5;
        let dT = 0.01;
        var completion = 0;
        movementInterval = setInterval(position_cards, dT * 1000); // 10 milliseconds

        function motion_profile_card(x){
            if(x < 0.5) return 0;
            return Math.pow(2 * x - 1, 0.3);
        }
        function lighting_profile(x){
            if(x > 0.9) return 0;
            return 1/(1+Math.exp(10 * (x - 1/2)));
        }

        function position_cards(){
            position_sections();
            completion += dT / animation_duration;
            completion = clamp(completion, 0, 1);

            e.target.style.zIndex = 100;
        }
    }

    for(let section = 0; section < sectionalized_deck.length; section++){
        for(let card = 0; card < sectionalized_deck[section].length; card++){
            var element = sectionalized_deck[section][card];
            //Hover Effects
            element.addEventListener("mouseover", glow, false);
            element.addEventListener("mouseout", unglow, false);
            //Click animation
        }
    }
}
function generate_card_positions(){
    let title_heights = 0.5;
    let card_width = 0.10;
    let card_height = 0.14;
    let card_radius = Math.hypot(card_width/2, card_height/2);
    let max_rotation = Math.PI/180 * (30);

    let last_cumulative_height = 0.3;
    for(let section = 0; section < sectionalized_deck.length; section++){
        section_positions[section] = last_cumulative_height + 0.5 * title_heights;
        last_cumulative_height += title_heights;

        let card_margin = sectionalized_deck[section].length * card_height;
        card_positions[section] = new Array();
        starting_card_positions[section] = new Array();
        for(let card = 0; card < sectionalized_deck[section].length; card++){
            card_positions[section][card] = new Array();
            starting_card_positions[section][card] = new Array();

            function collides(x, y){
                let collides = false;

                for(let checked_card = 0; checked_card < card_positions[section].length && collides == false; checked_card++){
                    if(Array.isArray(card_positions[section][checked_card])){
                        if(Math.hypot(card_positions[section][checked_card][0] - x, card_positions[section][checked_card][1] - y) < 3 * card_radius){
                            collides = true;
                        }
                    }
                }

                return collides;
            }
            console.log(last_cumulative_height);
            let prospective_x = random_range(card_radius * 2, 1 - card_radius * 2);
            let prospective_y = last_cumulative_height + random_range(0, card_margin - 2 * card_radius);
            while(collides(prospective_x, prospective_y)){
                prospective_x = random_range(card_radius * 2, 1 - card_radius * 2);
                prospective_y = last_cumulative_height + random_range(0, card_margin - 2 * card_radius);
            }
            starting_card_positions[section][card][0] = parseFloat(getComputedStyle(sectionalized_deck[section][card]).left);
            starting_card_positions[section][card][1] = parseFloat(getComputedStyle(sectionalized_deck[section][card]).top);
            starting_card_positions[section][card][2] = getComputedStyle(sectionalized_deck[section][card]).getPropertyValue("--angle");

            card_positions[section][card][0] = prospective_x;
            card_positions[section][card][1] = prospective_y;
            if(Math.random() > 0.5){
                card_positions[section][card][2] = random_range(max_rotation * 0.5, max_rotation);
            }else{
                card_positions[section][card][2] = random_range(-max_rotation * 0.5, -max_rotation);
            }
            

            console.log("fin X: " + card_positions[section][card][0] + ", Y: " + card_positions[section][card][1] + ", Theta: " + card_positions[section][card][2]);
            console.log("ini X: " + starting_card_positions[section][card][0] + ", Y: " + starting_card_positions[section][card][1] + ", Theta: " + starting_card_positions[section][card][2]);
        }

        last_cumulative_height += card_margin;
    }

}

function sort_cards(){
    var current_section = new Array();
    let s = 0;
    for(let i = 0; i < card_or_sect.length; i++){
        element = card_or_sect[i];
        if(element.className == "section"){
            if(s == 0){
                s++;
            }else{
                sectionalized_deck[s - 1] = current_section;
                current_section = [];
                s++;
            }
        }else{
            current_section.push(card_or_sect[i]);
            //console.log("Just added: " + current_section);
        }
    }
    sectionalized_deck[s - 1] = current_section;

    console.log(sectionalized_deck);

    // for(let section = 0; section < sectionalized_deck.length; section++){
    //     for(let card = 0; card < sectionalized_deck[section].length; card++){
    //         console.log(sectionalized_deck[section][card]);
    //         console.log(getComputedStyle(sectionalized_deck[section][card]).top);
    //     }
    // }

    generate_card_positions();
    generate_card_behavior();
}

function section_opacity(x){
    for(let i = 0; i < sections.length; i++){
        var section = sections[i];
        section.style.opacity = x;
    }
}

function animate_card_throw(){
    let animation_duration = 1.5;
    let dT = 0.01;
    var completion = 0;
    movementInterval = setInterval(position_cards, dT * 1000); // 10 milliseconds

    function motion_profile_card(x){
        if(x < 0.5) return 0;
        return Math.pow(2 * x - 1, 0.3);
    }
    function lighting_profile(x){
        if(x > 0.9) return 0;
        return 1/(1+Math.exp(10 * (x - 1/2)));
    }
    function position_sections(){
        for(let i = 0; i < sections.length; i++){
            var section = sections[i];
            section.style.top = window.innerHeight * section_positions[i] + "px";
        }
    }
    function position_cards(){
        position_sections();
        completion += dT / animation_duration;
        completion = clamp(completion, 0, 1);

        //console.log(completion);
        lighting(lighting_profile(completion));
        section_opacity(motion_profile_card(completion));

        for(let section = 0; section < sectionalized_deck.length; section++){
            for(let card = 0; card < sectionalized_deck[section].length; card++){
                let start = starting_card_positions[section][card];
                let end = card_positions[section][card];
                let end_x = end[0] * window.innerWidth;
                let end_y = end[1] * window.innerHeight;

                //console.log(start + "    " + end_x + ", " + end_y);

                let x = motion_profile_card(completion) * (end_x - start[0]) + start[0];
                let y = motion_profile_card(completion) * (end_y - start[1]) + start[1];
                let angle = motion_profile_card(completion) * (end[2] - start[2]) + start[2];

                element_style = sectionalized_deck[section][card].style;
                element_style.left = x+"px";
                element_style.top = y+"px";
                element_style.transform = "translate(-50%, -50%) rotateZ(" + angle*180/Math.PI + "deg)"; 
            }
        }

        if(completion >= 1){
            clearInterval(movementInterval);
            all_card_stasis(0);
        }
    }
}