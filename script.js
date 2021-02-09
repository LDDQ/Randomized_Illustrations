'use strict'

//declaration and initialization
let heads = [
    "Afro.png", "Airy.png",
    "Caesar.png", "Chongo.png", "Curly.png",
    "Hijab 1.png", "Hijab 2.png", "Long.png", 
    "No Hair.png", "Pony.png", "Rad.png",
    "Short 1.png", "Short 2.png",  "Short Beard.png",
    "Turban 1.png", "Turban 2.png", "Wavy.png"
];
let bodies = [
    "Hoodie.png", "Jacket 1.png", "Jacket 2.png", 
    "Lab Coat.png", "Long Sleeve.png",
    "Pointing Forward.png", "Pointing Up.png", 
    "Pregnant.png", "Trench Coat.png", "Turtle Neck.png"
];
let bottoms = [
    "Baggy Pants.png", "Jogging.png", "Shorts.png", 
    "Skinny Jeans Walk.png", "Skinny Jeans.png",
    "Skirt.png", "Sprint.png", "Sweatpants.png"
];

//random function which returns an integer between 0 and max-1
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

//button
const generate = document.getElementById("generate");
//listener
generate.addEventListener('click', function() {
    //img style elements
    let style_head = document.getElementById("head").style;
    let style_body = document.getElementById("body").style;
    let style_bottom = document.getElementById("bottom").style;

    //generate a random integer between 0 and length-1
    //img element
    let head = heads[getRandomInt(heads.length)];
    let body = bodies[getRandomInt(bodies.length)];
    let bottom = bottoms[getRandomInt(bottoms.length)];
    let img_head = document.getElementsByTagName("img").item(0);
    let img_body = document.getElementsByTagName("img").item(1);
    let img_bottom = document.getElementsByTagName("img").item(2);

    //handle visual head bugs
    if(head == "Airy.png"){
        style_head.left = '-4.5vh';
    }
    else if(head == "Hijab 2.png"){
        style_head.height = "22%";
        style_head.bottom = '-2.5vh';
        style_head.zIndex = '2';
    }
    else {
        //RESET DEFAULT HEAD STYLE
        style_head.height = "20%";
        style_head.left = '0';
        style_head.bottom = '0';
        style_head.zIndex = '1';
    }

    //handle visual body buggs
    if(body == "Pointing Up.png"){
        style_body.top = '-7.5vh';
        style_bottom.top = '-22vh';
    }
    else if(body == "Long Sleeve.png"){
        style_body.left = '-1vh';
        style_bottom.top = '-21vh';
    }
    else if(body == "Lab Coat.png" || body == "Trench Coat.png"){
        style_bottom.right = '-0.5vh';
        style_bottom.top = "-23vh";
    }
    else{
        //RESET DEFAULT BODY&BOTTOM STYLE
        style_body.left = '0';
        style_body.top = '-5vh';
        style_bottom.right = '0';
        style_bottom.top = '-20vh';
    }
    
    //set new image src
    img_head.setAttribute("src", "img/Head/"+ head);
    img_body.setAttribute("src", "img/Body/"+ body);
    img_bottom.setAttribute("src", "img/Bottom/Standing/"+ bottom);
});