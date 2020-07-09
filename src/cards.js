import data from "./data.js";

// const carddata = data[2];


const allcarddata = carddata => {


const div = document.createElement("div");
div.setAttribute("class", "card1");

const canvas = document.createElement("canvas");
canvas.setAttribute("id", "timerCanvas");
canvas.setAttribute("width", "50px");
canvas.setAttribute("height", "50px");
canvas.setAttribute("value", carddata.completed);

const script = document.createElement("script");
script.setAttribute("src", "src/index.js");

const time = document.createElement("p");
time.setAttribute("class", "time-box");
time.innerHTML = carddata.timelength;

const thumbnail = document.createElement("img");
thumbnail.setAttribute("class", "thumbnail");
thumbnail.setAttribute("src", carddata.thumbnail);

const profile = document.createElement("img");
profile.setAttribute("class", "card-profile-img");
profile.setAttribute("src", carddata.creatorpicture);

const textbox = document.createElement("div");
textbox.setAttribute("class", "card-text-box");

const title = document.createElement("p");
title.setAttribute("class", "card-title");
title.innerHTML = carddata.title;

const sub1 = document.createElement("p");
sub1.setAttribute("class", "card-subtitle");
sub1.innerHTML = carddata.creatorname;

const sub2 = document.createElement("p");
sub2.setAttribute("class", "card-subtitle");
sub2.innerHTML = carddata.views + " • " + carddata.dateposted;



const scene = document.getElementById("right-part-body")

scene.append(div);
div.append(canvas);
div.append(script);
div.append(time);
div.append(thumbnail);
div.append(profile);
div.append(textbox);
textbox.append(title);
textbox.append(sub1);
textbox.append(sub2);

}


data.forEach(carddata => allcarddata(carddata));
