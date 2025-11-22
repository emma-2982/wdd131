
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Accra Ghana Temple",
        location: "Accra Ghana",
        dedicated: "2004, January, 11",
        area: 17500,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-13760-main.jpg"
    },
    {
        templeName: "Lagos Nigeria Temple",
        location: "Lagos Nigeria",
        dedicated: "2025, May, 10",
        area: 19800,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/lagos-nigeria-temple/lagos-nigeria-temple-58577-main.jpg"
    },
    {
        templeName: "Durban South Africa",
        location: "Umhlanaga South Africa",
        dedicated: "2016, April, 8",
        area: 19860,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/durban-south-africa-temple/durban-south-africa-temple-7936-main.jpg"
    }
];
function createTempleCard(temple) {
    const card = document.createElement("figure");
    card.classList.add("temple-card");

    card.innerHTML = `
        <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
        <figcaption>
            <h3>${temple.templeName}</h3>
            <p><strong>Location:</strong> ${temple.location}</p>
            <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
            <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
        </figcaption>
    `;

    return card;
}

function displayTemples(filteredTemples) {
    const container = document.getElementById("temples");
    container.innerHTML = "";
    filteredTemples.forEach(t => container.appendChild(createTempleCard(t)));
}

document.querySelector("nav ul li:nth-child(1) a").addEventListener("click", () => displayTemples(temples));
document.querySelector("nav ul li:nth-child(2) a").addEventListener("click", () =>
    displayTemples(temples.filter(t => new Date(t.dedicated).getFullYear() < 1900))
);
document.querySelector("nav ul li:nth-child(3) a").addEventListener("click", () =>
    displayTemples(temples.filter(t => new Date(t.dedicated).getFullYear() > 2000))
);
document.querySelector("nav ul li:nth-child(4) a").addEventListener("click", () =>
    displayTemples(temples.filter(t => t.area > 90000))
);
document.querySelector("nav ul li:nth-child(5) a").addEventListener("click", () =>
    displayTemples(temples.filter(t => t.area < 10000))
);

displayTemples(temples);
const buttons = document.querySelectorAll("nav button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const filter = button.dataset.filter;

        if (filter === "home") {
            displayTemples(temples);
        } else if (filter === "old") {
            displayTemples(temples.filter(t => new Date(t.dedicated).getFullYear() < 1900));
        } else if (filter === "new") {
            displayTemples(temples.filter(t => new Date(t.dedicated).getFullYear() > 2000));
        } else if (filter === "large") {
            displayTemples(temples.filter(t => t.area > 90000));
        } else if (filter === "small") {
            displayTemples(temples.filter(t => t.area < 10 < 1000));
        }
    });
});
