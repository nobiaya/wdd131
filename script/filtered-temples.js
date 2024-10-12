document.getElementById('hamburger').addEventListener('click', function () {
    const nav = document.getElementById('nav');
    nav.classList.toggle('show'); 
    this.classList.toggle('active');
});

document.getElementById('close-btn').addEventListener('click', function () {
    const nav = document.getElementById('nav');
    nav.classList.remove('show');
    document.getElementById('hamburger').classList.remove('active'); 
});


const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Add more temple objects here...
    {
        templeName: "Lisbon Portugal Temple",
        location: "Lisbon City, Lisbon",
        dedicated: "2019, September, 15",
        area: 23730,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lisbon-portugal/400x250/03-045a97e8471a9f581e927698521a1d184f4b3753.jpeg"
    },
    {
        templeName: "São Paulo Brazil Temple",
        location: "São Paulo City, Brazil",
        dedicated: "1978, October, 30",
        area: 59246,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/sao-paulo-brazil/400x250/sao-paulo-brazil-temple-lds-187030-wallpaper.jpg"
    },
    
];

// Call function for all page
createTempleCard(temples);

const templesSmall = temples.filter(temple => temple.area < 10000);
const templesLarge = temples.filter(temple => temple.area > 90000);
const oldTemples = temples.filter(temple => temple.dedicated .split(',')[0] < 1900);
const newTemples = temples.filter(temple => temple.dedicated .split(',')[0] > 2000);

//link to id
const hometempleLink = document.querySelector("#home");
const smalltempleLink = document.querySelector("#small");
const largetempleLink = document.querySelector("#large");
const newtempleLink = document.querySelector("#new");
const oldtempleLink = document.querySelector("#old");

document.addEventListener("click", (event) => {
    // block pag for not reseting
    event.preventDefault();
    // Verify and catch event by id
    const targetId = event.target.id

    switch (targetId) {
        case "small":
            templeType = "Small";
            templesToRender = templesSmall;
            break;
        case "home":
            templeType = "Home";
            templesToRender = temples;
            break;
        case "large":
            templeType = "Large";
            templesToRender = templesLarge;
            break;
        case "new":
            templeType = "New";
            templesToRender = newTemples;
            break;
        case "old":
        templeType = "Old";
        templesToRender = oldTemples;
        break;
        default:
            return;
    }
        document.querySelector("#typeTemple").textContent = templeType;
        createTempleCard(templesToRender);
    });



function createTempleCard(filteredTemples) {
    // cleaning container before puting more elements 
    document.querySelector(".container").innerHTML = "";
    filteredTemples.forEach(temple => {
        /* Created html elements */
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        // Assigning string elements
        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label"> Location: </span> ${temple.location}`;
        dedication.innerHTML = `<span class="label"> Dedicated: </span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label"> Area: </span> ${temple.area}`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        document.querySelector(".container").appendChild(card)
    })

}