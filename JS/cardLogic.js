let removedElement;
const flippedCard = document.getElementById("flippedCard");
const cardTitle = document.getElementById("cardTitle");
const cardContent = document.getElementById("cardContent");
const flippedCardContent = document.getElementById("flexCardFlipped");

removedElement = flippedCard;
flippedCard.parentNode.removeChild(flippedCard);
flippedCard.classList.remove("hide");

let showing = false

const Hobbies = document.getElementById("Hobbies");
const Song = document.getElementById("Song");
const Movie = document.getElementById("Movie");
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

Hobbies.onclick = function () { showCard("Photography & Videography", "Whenever I have some free time I am usually out taking photos or staying up late editing. I started taking photos in 2019 by stealing my brother’s camera and using it without his permission. He got angry at me and did not let me borrow it again, so I started working as a waiter and with my first wage I went to purchase a 4000D camera. Now I take photos and create videos professionally as a side job. I aim to improve this skill over a long period time hopefully making me into a great storyteller. If you are interested the best place to find me is <a class='blue' href='/aboutMe.html' target='_blank'>Facebook</a> or <a class=’red’ href='/aboutMe.html' target='_blank'>Instagram</a>. ", "a"); Hobbies.classList.add("shown"); }
Song.onclick = function () { showCard("Favourite Song", "I listed to too much music and my favourite song rotates constantly. Here is a list of my favourite songs with no particular order <ul> <li>Viva La Vida - Coldplay: This song holds an absurd amount of nostalgic memories and whenever I hear it reminds me of the good old days when everything was simpler. </li>  <li> Alone Sometimes - The Mowgli’s: Single handedly the song I listened to the most during my studies at the University of Malta (well at least according to Spotify Wrapped). </li> <li> Yofukashi no Uta - Creepy Nuts: My current favourite song, got me addicted to J-Pop. A song who’s lyrics describe the experience of living the night. This song also inspired on my favourite anime’s Call of the Night. </li> </ul>", "a"); Song.classList.add("shown"); }
Movie.onclick = function () { showCard("Bubble", "Just go watch it. It's worth it, trust me. <br><br> P.S Best Series: Arcane", "a"); Movie.classList.add("shown"); }
Game.onclick = function () { showCard("TFT", "a", "a"); Game.classList.add("shown"); }
Coding.onclick = function () { showCard("Coding Journey", "a", "a"); Coding.classList.add("shown"); }
Pineapple.onclick = function () { showCard("Mayhaps", "a", "a"); Pineapple.classList.add("shown"); }
Travel.onclick = function () { showCard("Traveller", "a", "a"); Travel.classList.add("shown"); }
Challenge.onclick = function () { showCard("Learning Japenese", "a", "a"); Challenge.classList.add("shown"); }
Hobbies2.onclick = function () { showCard("Cooking", "a", "a"); Hobbies2.classList.add("shown"); }
Unique.onclick = function () { showCard("Casting LOL", "a", "a"); Unique.classList.add("shown"); }
AI.onclick = function () { showCard("AI... AI... AI...", "a", "a"); AI.classList.add("shown"); }
Sanity.onclick = function () { showCard("Music 24/7", "a", "a"); Sanity.classList.add("shown"); }
Fact.onclick = function () { showCard("Solo", "a", "a"); Fact.classList.add("shown"); }
Anime.onclick = function () { showCard("Insomniac after school", "a", "a"); Anime.classList.add("shown"); }
Exercise.onclick = function () { showCard("Running", "a", "a"); Exercise.classList.add("shown"); }
Dream.onclick = function () { showCard("Moving to Japan", "a", "a"); Dream.classList.add("shown"); }

document.addEventListener('click', (event) => {
    // Check if the click target is outside the element
    const isInside = event.target == flippedCardContent;
    console.log(!isInside, showing)
    if (!isInside && showing == true) {
        removedElement.parentNode.removeChild(removedElement);
        console.log("trigger")
        showing = false;
    }
});

function showCard(title, content, image) {
    document.body.appendChild(removedElement);
    cardTitle.innerText = title
    cardContent.innerHTML = content
    setTimeout(() => { showing = true }, 30)
}

const fullList = []
let randomList = []

function generateRandomFact() {
    present = false
    randomNum = Math.floor((Math.random() * randomList.length));
    for (i = 0; i < prevFacts.length; i++) {
        if (prevFacts[i] == randomNum) {
            present = true
            generateRandomFact()
            break
        }
    }

    if (!present) {
        prevFacts.shift()
        prevFacts.push(randomNum)
        randomFacts.innerText = randomList[randomNum]
    }
}

