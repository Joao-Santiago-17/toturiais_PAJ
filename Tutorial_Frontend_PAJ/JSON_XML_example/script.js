async function populate() {
    // The URL of the JSON data
    const requestURL =
    "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
   
    // Creating a new Request object with the specified URL
    const request = new Request(requestURL);
   
    // Fetching data from the specified URL using the Fetch API
    const response = await fetch(request);
    // Extracting the text content from the response
    const superHeroesText = await response.text();
   
    // Parsing the JSON text into a JavaScript object
    const superHeroes = JSON.parse(superHeroesText);
    // Calling two functions to populate the header and the list of heroes
    populateHeader(superHeroes);
    populateHeroes(superHeroes);
    populateReference();
    }
   
    function populateHeader(obj) {
        const header = document.querySelector("header");
        const myH1 = document.createElement("h1");
        myH1.textContent = obj.squadName;
        header.appendChild(myH1);
       
        const myPara = document.createElement("p");
        myPara.textContent = `Hometown: ${obj.homeTown} // Formed: ${obj.formed}`;
        header.appendChild(myPara);
        }
       

        function populateHeroes(obj) {
            const section = document.querySelector("section");
            const heroes = obj.members;
           
            for (const hero of heroes) {
                const myArticle = document.createElement("article");
 const myH2 = document.createElement("h2");
 const myPara1 = document.createElement("p");
 const myPara2 = document.createElement("p");
 const myPara3 = document.createElement("p");
 const myList = document.createElement("ul");

 myH2.textContent = hero.name;
 myPara1.textContent = `Secret identity: ${hero.secretIdentity}`;
 myPara2.textContent = `Age: ${hero.age}`;
 myPara3.textContent = "Superpowers:";

 const superPowers = hero.powers;
 for (const power of superPowers) {
 const listItem = document.createElement("li");
 listItem.textContent = power;
 myList.appendChild(listItem);
 }

 myArticle.appendChild(myH2);
 myArticle.appendChild(myPara1);
 myArticle.appendChild(myPara2);
 myArticle.appendChild(myPara3);
 myArticle.appendChild(myList);

 section.appendChild(myArticle);
 }
 }

 function populateReference() {
    // Hardcoded XML-like text representing book information
    text = "<bookstore><book>" +
    "<title>Learn More About JSON</title>" +
    "<author>José D’Abruzzo Pereira</author>" +
    "<year>2024</year>" +
    "</book><book>" +
    "<title>Learn More About XML</title>" +
    "<author>José D’Abruzzo Pereira</author>" +
    "<year>2024</year>" +
    "</book></bookstore>";
   
    // Creating a new DOMParser object
    parser = new DOMParser();
   
    // Parsing the XML-like text into a DOM document
    xmlDoc = parser.parseFromString(text, "text/xml");
   
    // Selecting the <footer> element in the HTML document
    const footer = document.querySelector("footer");
   
    // Populating the <footer> element with book information
    footer.innerHTML = "References: <br>" +
    xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue +
    ", " +
    xmlDoc.getElementsByTagName("author")[0].childNodes[0].nodeValue +
    ", " +
    xmlDoc.getElementsByTagName("year")[0].childNodes[0].nodeValue +
    "<br>" +
    xmlDoc.getElementsByTagName("title")[1].childNodes[0].nodeValue +
    ", " +
    xmlDoc.getElementsByTagName("author")[1].childNodes[0].nodeValue +
    ", " +
    xmlDoc.getElementsByTagName("year")[1].childNodes[0].nodeValue;
   
    // Setting text alignment of the <footer> element to center
    footer.style.textAlign = "center";
    }



 populate();