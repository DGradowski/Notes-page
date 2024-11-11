const texts = [
    `Siedzą razem baba i chłop żeby uchronić się przed mroźnym łotewskim zimnem. Kobita pyta "Kochasz bardziej mnie, czy zimnioka?" "Ciebie". Kobita nie wierzy i pyta dlaczemu. "Bo zimniok to tylko marzenie, a ty jesteś tutaj naprawdę". Ale chłopa nie ma. Jest tylko halucynacja z niedożywienia. I śmierć. Takie jest życie`,
    `Łotewski chłop mówi do syna: "Mam złą i dobrą wiadomość". Syn: "jaka zła?" "Politbiuro przyszło i zabiło matkę". "A jaka dobra?" - "Twoja łza posoli zimnioka". Ale nie ma zimnioka, jest tylko mroźna zima, halucynacja z niedożywienia i śmierć.`,
    `Trzech Łotyszy przechwala się swymi syny: "Mój syn żołdak, może gwałcić tyle kobiet ile chce".
    Drugi " Mój syn rolnik, może jeść tyle zimnioków ile chce"
    Trzeci mówi: "Mój syn trup, dla niego trud skończony".
    Mówią oni "Tyś wygrał z nami".
    Ale wszyscy smutni.`,
    `Trzech Łotyszy przechwala się swymi syny: "Mój syn żołdak, może gwałcić tyle kobiet ile chce".
    Drugi " Mój syn rolnik, może jeść tyle zimnioków ile chce"
    Trzeci mówi: "Mój syn trup, dla niego trud skończony".
    Mówią oni "Tyś wygrał z nami".
    Ale wszyscy smutni.`,
    `Trzech Łotyszy przechwala się swymi syny: "Mój syn żołdak, może gwałcić tyle kobiet ile chce".
    Drugi " Mój syn rolnik, może jeść tyle zimnioków ile chce"
    Trzeci mówi: "Mój syn trup, dla niego trud skończony".
    Mówią oni "Tyś wygrał z nami".
    Ale wszyscy smutni.`,
    `Chłop woła do kobity "Cho no, znalazłem zimnioka!" Kobita wbiega i woła "Zimniok, zimniok, cały jeden!" Na co chłop: "Prima aprilis"`,
    `Rosyjski gangster spotyka Łotewskiego chłopa i powiada: "Rzucę monetą i jak będzie reszka wygrasz zimnioka, jak orzeł, przegrasz zimnioka", na co chłop "Ale ja nie mam zimnioka" - "To oddasz życie". Szczęśliwy dzień dla łotewskiego chłopa! Konkurs, w którym można tylko wygrać.
    Ale mafii nie ma, dawno wytępiona przez Politbiuro, to tylko halucynacje z niedożywienia.`,
    `Dwóch Łotyszy idzie drogą.
    Jeden mówi do drugi: "Jestem głodny"
    Drugi na to: "Dam ci zimnioka za twój płaszcz"
    "Ale ja nie mam płaszczu, nie mogę się zamienić"
    "Ja też nie mam zimnioka"
    Jest tylko smutek i niedożywienie.
    Dobry dowcip. Śmiałem się wiele raz.`,
    `Łotysz, Rosjanin i Estończyk rozmawiajo. Rosjanin mówi "powiem wam dobry dowcip, bardzo śmieszny; dlaczemu kurczak przeszedł przez drogę?"
    Estończyk nie rozumie i zapytuje: "Co to jest kurczak? Jakiś żołnierz?"
    Rosjanin na to: "Nie to taki ptak, którego czasem jemy"
    Estończyk mówi: "Macie ptaki do jedzenia, pewnie ktoś go zjadł zanim przeszedł drogę"
    Rosjanin: "Dobra, spróbuję ponownie; dlaczemu wilk przeszedł przez drogę?"
    Na co Łotysz: "Co to jest droga?"`,
    `Łotysz wchodzi do baru: "Polejcie mi wódki"
    Ale to nie bar, to milicja!
    "Aha, w takim razie moja żona została zgwałcona"
    Obaj mają halucynacje z niedożywienia, to nie policja, to gułag.`,
    `Młody chłopak, pop i oficer Politbiura lecą samolotem. Nagle silnik przestaje działać - są tylko dwa spadochrony.
    Oficer Politbiura mówi "Dajcie mi spadochron, tylko ja ochronię ojczyznę przed imperialistycznymi szpiegami" i wyskakuje.
    Na co pop: "Chłopcze, ja jestem już stary, swoje przeżyłem, weź ten spadochron". Ale chłopak już wyskoczył bez spadochronu, dla niego trud skończony.`,
    `Łotysz chodzi po polu, szuka zimnioka. Nagle słyszy kozę, jest bardzo ucieszon. Łotysz zabije kozę i będzie najedzony przez rok! Łapie kamień i szuka, ale nie ma nigdzie kozy. To tylko odgłos pustego żołądka. Chłop jest smutny, jest mu zimno i ma halucynacje. Umiera.`,
    `"Gdyby stopy miały być napojem były by piwem.
    Kocham piwo... 😳" ~ Dawid Gradowski 2k23r`,
    `"Nie dogadamy się jak lubisz jarmuż" ~ Kaz Bałagane - "All day everyday"`,
    `"Nie każdy musi zostać informatykiem..." ~ Miś Smoliś`,
    `Jak coś robić to porządnie, jak wysyłać stopy to tylko do puckmoment`,
    `"Przeglądasz sobie sztuki, przybliżasz im na stopy" ~ Kaz Bałagane - "Money Mitch"`
]

function changeTextBubblePosition() {
    textBubble = document.querySelector(".talk-bubble");
    textBubble.style.top = "-" + (textBubble.offsetHeight + 30) + "px";
}

function changeTextBubbleHeight() {
    textBubble = document.querySelector(".talk-bubble");
    puckImage = document.querySelector(".puck-img");
    windowHeight = window.innerHeight; 
    console.log(document.querySelector(".talk-bubble"))
    console.log(document.querySelector(".puck-img"))
    console.log(puckImage.offsetHeight + textBubble.offsetHeight + 40)
    console.log(windowHeight)
    textBubble.style.display = "block"
    if (puckImage.offsetHeight + textBubble.offsetHeight + 40 > windowHeight) {
        textBubble.style.display = "none"
    } else {
        textBubble.style.display = "block"
        changeTextBubblePosition();
    }
}

function changeTextBubbleText() {
    textBubbleText = document.querySelector(".talk-bubble p");
    textBubbleText.textContent = texts[Math.floor(Math.random() * texts.length)]
}

document.addEventListener('DOMContentLoaded', function() {
    changeTextBubbleText();
    changeTextBubblePosition();
    changeTextBubbleHeight()
});


addEventListener("resize", event => {
    changeTextBubblePosition();
    changeTextBubbleHeight()
});