// let removedElement;
// // const flippedCard = document.getElementById("flippedCard");
// // const cardTitle = document.getElementById("cardTitle");
// // const cardContent = document.getElementById("cardContent");
// // const flippedCardContent = document.getElementById("flexCardFlipped");

// removedElement = flippedCard;
// flippedCard.parentNode.removeChild(flippedCard);
// flippedCard.classList.remove("hide");

// let showing = false

// const Hobbies = document.getElementById("Hobbies");
// const Song = document.getElementById("Song");
// const Movie = document.getElementById("Movie");
// const Game = document.getElementById("Game");
// const Coding = document.getElementById("Coding");
// const Pineapple = document.getElementById("Pineapple");
// const Travel = document.getElementById("Travel");
// const Challenge = document.getElementById("Challenge");
// const Hobbies2 = document.getElementById("Hobbies2");
// const Unique = document.getElementById("Unique");
// const AI = document.getElementById("AI");
// const Sanity = document.getElementById("Sanity");
// const Fact = document.getElementById("Fact");
// const Anime = document.getElementById("Anime");
// const Exercise = document.getElementById("Exercise");
// const Dream = document.getElementById("Dream");

// Hobbies.onclick = function () { showCard("Photography & Videography", "Whenever I have some free time I am usually out taking photos or staying up late editing. I started taking photos in 2019 by stealing my brother’s camera and using it without his permission. He got angry at me and did not let me borrow it again, so I started working as a waiter and with my first wage I went to purchase a 4000D camera. Now I take photos and create videos professionally as a side job. I aim to improve this skill over a long period time hopefully making me into a great storyteller. If you are interested the best place to find me is <a class='blue' href='/aboutMe.html' target='_blank'>Facebook</a> or <a class=’red’ href='/aboutMe.html' target='_blank'>Instagram</a>. ", "a"); Hobbies.classList.add("shown"); }
// Song.onclick = function () { showCard("Favourite Song", "I listed to too much music and my favourite song rotates constantly. Here is a list of my favourite songs with no particular order <ul> <li>Viva La Vida - Coldplay: This song holds an absurd amount of nostalgic memories and whenever I hear it reminds me of the good old days when everything was simpler. </li>  <li> Alone Sometimes - The Mowgli’s: Single handedly the song I listened to the most during my studies at the University of Malta (well at least according to Spotify Wrapped). </li> <li> Yofukashi no Uta - Creepy Nuts: My current favourite song, got me addicted to J-Pop. A song who’s lyrics describe the experience of living the night. This song also inspired on my favourite anime’s Call of the Night. </li> </ul>", "a"); Song.classList.add("shown"); }
// Movie.onclick = function () { showCard("Bubble", "Just go watch it. It's worth it, trust me. <br><br> P.S Best Series: Arcane", "a"); Movie.classList.add("shown"); }
// Game.onclick = function () { showCard("TFT", "a", "a"); Game.classList.add("shown"); }
// Coding.onclick = function () { showCard("Coding Journey", "a", "a"); Coding.classList.add("shown"); }
// Pineapple.onclick = function () { showCard("Mayhaps", "a", "a"); Pineapple.classList.add("shown"); }
// Travel.onclick = function () { showCard("Traveller", "a", "a"); Travel.classList.add("shown"); }
// Challenge.onclick = function () { showCard("Learning Japenese", "a", "a"); Challenge.classList.add("shown"); }
// Hobbies2.onclick = function () { showCard("Cooking", "a", "a"); Hobbies2.classList.add("shown"); }
// Unique.onclick = function () { showCard("Casting LOL", "a", "a"); Unique.classList.add("shown"); }
// AI.onclick = function () { showCard("AI... AI... AI...", "a", "a"); AI.classList.add("shown"); }
// Sanity.onclick = function () { showCard("Music 24/7", "a", "a"); Sanity.classList.add("shown"); }
// Fact.onclick = function () { showCard("Solo", "a", "a"); Fact.classList.add("shown"); }
// Anime.onclick = function () { showCard("Insomniac after school", "a", "a"); Anime.classList.add("shown"); }
// Exercise.onclick = function () { showCard("Running", "a", "a"); Exercise.classList.add("shown"); }
// Dream.onclick = function () { showCard("Moving to Japan", "a", "a"); Dream.classList.add("shown"); }

// document.addEventListener('click', (event) => {
//     // Check if the click target is outside the element
//     const isInside = event.target == flippedCardContent;
//     console.log(!isInside, showing)
//     if (!isInside && showing == true) {
//         removedElement.parentNode.removeChild(removedElement);
//         console.log("trigger")
//         showing = false;
//     }
// });

// New Logic for the page

//All of the Id's that are related with that string question
const Hobbies = document.getElementById("Hobbies");
const Song = document.getElementById("Song");
const Personality = document.getElementById("Personality");
const Game = document.getElementById("Game");
const Coding = document.getElementById("Coding");
const Pineapple = document.getElementById("Pineapple");
const Travel = document.getElementById("Travel");
const Challenge = document.getElementById("Challenge");
const Hobbies2 = document.getElementById("Hobbies2");
const Unique = document.getElementById("Unique");
const AI = document.getElementById("AI");
const Sanity = document.getElementById("Sanity");
const Fact = document.getElementById("Fact");
const Anime = document.getElementById("Anime");
const Exercise = document.getElementById("Exercise");
const Dream = document.getElementById("Dream");

//All of the string content
const q1 = [1, "Photography & Videography", "Whenever I have some free time I am usually out taking photos or staying up late editing. I started taking photos in 2019 by stealing my brother’s camera and using it without his permission. He got angry at me and did not let me borrow it again, so I started working as a waiter and with my first wage I went to purchase a 4000D camera. Now I take photos and create videos professionally as a side job. I aim to improve this skill over a long period time hopefully making me into a great storyteller. If you are interested the best place to find me is <a class='blue' href='/aboutMe.html' target='_blank'>Facebook</a> or <a class=’red’ href='/aboutMe.html' target='_blank'>Instagram</a>. ", Hobbies];
const q2 = [2, "Favourite Song", "I listed to too much music and my favourite song rotates constantly. Here is a list of my favourite songs with no particular order <ul> <li>Viva La Vida - Coldplay: This song holds an absurd amount of nostalgic memories and whenever I hear it reminds me of the good old days when everything was simpler. </li>  <li> Alone Sometimes - The Mowgli’s: Single handedly the song I listened to the most during my studies at the University of Malta (well at least according to Spotify Wrapped). </li> <li> Yofukashi no Uta - Creepy Nuts: My current favourite song, got me addicted to J-Pop. A song who’s lyrics describe the experience of living the night. This song also inspired on my favourite anime’s Call of the Night. </li> </ul>", Song];
const q3 = [3, "Character", "I am extremely ambitious, at my core I believe that the sky’s the limit, with enough dedication the average person is capable of unbelievable things.", Personality];
const q4 = [4, "Pokémon, gotta catch em all'", "I am a die-hard Pokémon fan (well at least till the Nintendo 3DS series).  These are the lyrics to my child, with a wave of nostalgia of playing Pokémon TSG at school, with my brother and all my friends. Oh, sweet childhood!", Game];
const q5 = [5, "On a whim", "I almost never went into coding. When choosing my subjects for high school, I had initially decided to study Italian and English at A-Level to pursue a career as a translator. However, just one day before the high school application deadline, I looked through the university prospectus to see if there was anything more interesting. That’s when I discovered the AI course and changed my mind. I even wrote my first if condition during my Computing A-Level!", Coding];
const q6 = [6, "Mayhaps", "Pineapple on pizza—few topics ignite debates as fiercely as this culinary choice. To some, the tangy sweetness of pineapple paired with savory cheese and salty ham is a revelation, a balance of flavors that tickles the taste buds. To others, it is an abomination, a crime against the sanctity of Italian cuisine. But why does this combination divide us so? The answer lies not just in our palates but in our willingness to embrace the unexpected. After all, isn’t the blending of opposites—sweet and savory—a metaphor for life’s contradictions? <br><br> And this brings us to a deeper question: what does pineapple on pizza tell us about the universe itself? Imagine the pizza as existence, each topping representing a different facet of life. The crust is our foundation, the cheese our unity, and the sauce our passion. Pineapple, then, is the chaos—the unpredictable force that challenges convention and invites growth. Without chaos, life becomes monotonous, just as a pizza without pineapple may lack that spark of intrigue.Consider this: the universe thrives on balance. Stars are born from the collapse of chaos into order, much like how the sweet tang of pineapple tempers the saltiness of ham. Could this simple pizza topping embody the very duality of existence? <br><br> Perhaps the pineapple on pizza debate isn’t about taste at all but a reflection of humanity’s eternal quest for meaning—a quest that reminds us that life, like pizza, is what we make of it.", Pineapple];
const q7 = [7, "Luke the Explorer","I travel quite a lot, it my way of relaxing and disconnecting completely from the fast lifestyle of today. My bucket list destinations are Japan and somewhere north enough to see the northern lights.", Travel];
const q8 = [8, "Nihongo","I have challenged myself to learn my fourth language. Recently, I embarked on the difficult journey of learning the Japanese language. It is my dream to one day move to Japan and live there for a period of time. Learning a language keeps a part of my day both challenging and rewarding, no matter what. This will be a year-long journey to master the language.", Challenge]; 
const q9 = [9, "Travel & Adventure","I love to travel and seek adventure. Deep down, I’m a thrill-seeker at heart. Life can get boring, so you’ve got to spice it up a bit. After all, you only have a limited amount of time to live your best life.", Hobbies2];
const q10 = [10,"The Ultimate Yapper","I occasionally cast for the game League of Legends. In 2024, I casted all of Eversio's games in the first full Maltese international roster’s competition in the UKEL Division 2 league. I also had the opportunity to cast for Playcon in 2024, which was such a wonderful experience to cast on the big stage. The adrenaline, the thrill, the excitement. It was a once-in-a-lifetime opportunity.", Unique];
const q11 = [11,"But Why","I chose AI because it seemed like the most interesting and promising subject in the University of Malta's prospectus. Additionally, a quick Google search revealed the job security and competitive pay associated with careers in the field.", AI];
const q12 = [12,"Music 24/7","I listen to music almost all the time. It’s a huge part of my life, and if I ever had to give it up, I think I would go insane.", Sanity];
const q13 = [13,"Beans","I don’t like beans… that’s it, no beans please!!!", Fact];
const q14 = [14,"Yes. I like Anime.","I do fall into the stereotype that many software developers share. Anime initially started as a way for me to connect with my friends at university, but it eventually evolved into something I genuinely enjoy watching in my downtime. It has taught me about Japanese culture and the beauty of the country. Please don’t judge! :D", Anime];
const q15 = [15,"Run Forest! Run!","In my opinion, the most important thing for a healthy lifestyle is to stay physically active. The benefits are well-documented, so you don’t need another random person on the internet telling you what to do. That said, I enjoy running in the morning or evening, especially when the sun is rising or setting. Stay active out there, random stranger on the internet! o/", Exercise];
const q16 = [16,"Life in Japan","My dream is to be a freelancer in Japan. Although that dream feels a bit far away right now, with steady progress and determination, I know I can get closer and closer until I reach it.", Dream];

// Varaibles needed for the logic

const allCards = [q1,q2,q3,q4,q5,q6,q7,q8,q9,q10,q11,q12,q13,q14,q15,q16]; // Constant holds all the strings
let notShownCards = [q1,q2,q3,q4,q5,q6,q7,q8,q9,q10,q11,q12,q13,q14,q15,q16]; // Changing array holds not shown yet ones

// Get elemetents of box where the text is going to be displayed
const randomBoxTitle = document.getElementById("randomFactTitle");
const randomBoxDescription = document.getElementById("randomFacts");

//All on click functions that would be associated

Hobbies.onclick = function () { showCard(q1[0],q1[1],q1[2],q1[3])}
Song.onclick = function () { showCard(q2[0],q2[1],q2[2],q2[3])}
Personality.onclick = function () { showCard(q3[0],q3[1],q3[2],q3[3])}
Game.onclick = function () { showCard(q4[0], q4[1], q4[2],q4[3])}
Coding.onclick = function () { showCard(q5[0], q5[1], q5[2],q5[3])}
Pineapple.onclick = function () { showCard(q6[0], q6[1], q6[2], q6[3])}
Travel.onclick = function () { showCard(q7[0], q7[1], q7[2], q7[3])}
Challenge.onclick = function () { showCard(q8[0], q8[1], q8[2], q8[3])}
Hobbies2.onclick = function () { showCard(q9[0], q9[1], q9[2], q9[3])}
Unique.onclick = function () { showCard(q10[0], q10[1], q10[2], q10[3])}
AI.onclick = function () { showCard(q11[0], q11[1], q11[2], q11[3])}
Sanity.onclick = function () { showCard(q12[0], q12[1], q12[2], q12[3])}
Fact.onclick = function () { showCard(q13[0], q13[1], q13[2], q13[3])}
Anime.onclick = function () { showCard(q14[0], q14[1], q14[2], q14[2])}
Exercise.onclick = function () { showCard(q15[0], q15[1], q15[2], q15[2])}
Dream.onclick = function () { showCard(q16[0], q16[1], q16[2], q16[2])}

//Onclick function
function showCard(questionNum, title, description, cardObject) {
    randomBoxTitle.innerText = title;
    randomBoxDescription.innerHTML = description;

    updateVisual(cardObject);

    //Update Array logic
    const index = notShownCards.findIndex(innerArray => innerArray[0] === questionNum);
    updateNotShown(index)
}

 //Do a check to see if all the items have been selected
function checkShownAll(){
    if (notShownCards.length == 0){
        notShownCards = [...allCards] //Deep cody of array
    }
}

function updateNotShown(index){
    if (index > -1){
        notShownCards.splice(index, 1);
        checkShownAll();
    }else{
        console.error("Index not found");
    }
}

function updateVisual(cardObject){
    //Change the color of the card
    if (cardObject.classList.contains("shown") == false){
        cardObject.classList.add("shown")
    }
}

// Random Fact Selector
function generateRandomFact() {
    index = Math.floor((Math.random() * notShownCards.length));
    selectedCard = notShownCards[index];

    updateVisual(selectedCard[3])

    randomBoxTitle.innerText = selectedCard[1]
    randomBoxDescription.innerHTML = selectedCard[2]
    
    updateNotShown(index)
}