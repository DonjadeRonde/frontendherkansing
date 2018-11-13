function imageRoulette() {
    var imageName = ['donjainstagram', 'mahFace', 'kleinedonja'];
    // ^ alle afbeeldingen in een array, geen jpg vermelding omdat ik alleen gebruik maak van jpg'jes
    var randImg = imageName[Math.floor(Math.random() * imageName.length)];
    // ^ kiest random afbeelding uit mijn array
    document.getElementById("myImage").src = "../img/" + randImg + ".jpg";
    // ^ gaat in het document opzoek naar link van afbeelding en vervangt het met een ander willekeurige afbeelding uit mijn array.
    // Note to self, de code is niet kapot, het is random dus het kan gebeuren dat het soms lijkt alsof je afbeelding niet reageert 'on click' maar dat komt omdat je 4 keer dezelfde afbeelding achter elkaar kunt krijgen.
}

function likeToggle(id) {
    // ^ "id" is de function paramater wat ik heb vastgesteld in mijn html pagina met het onclick event. Het geeft mijn harticoontje een nummer, of eigenlijk mijn id wat ik eraan heb gegeven. Zo weet de gemaakte functie dat hij bijvoorbeeld het eerste/tweede etc. hartje moet aanspreken. Bij het toevoegen van meer soortgelijke knoppen, en ze allemaal dezelfde naam geven, moet je niet alleen het aantal wijzigen maar zorgen dat je ook de functieparameter overeenkomstig wijzigt.
    document.getElementById("likeHeart" + id).classList.toggle("likeActive");
    // classlist.toggle checkt of de class likeActive bestaat en zorgt dat het icoon gekleurd danwel terug naar basiskleur grijs gaat.
}
// Onderstaande functie heb ik aangepast n.a.v. een voorbeeld op Codepen, bovenstaande elementen heb ik geschreven aan de hand van de voorbeeld codes in de presentaties gebruikt in de Web Front-end lessen
// Wanneer de gebruiker verder dan 400px naar beneden scrollt op mijn pagina, zal er een terug naar start button verschijnen
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        document.getElementById("myButton").style.display = "block";
    }
    else {
        document.getElementById("myButton").style.display = "none";
    }
}
// Bij default toont de pagina geen button, maar (else) zal de button 'omhoog' getoond worden
// Bij klik op button, scroll je weer terug naar de pagina
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}