
document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("lastModified").textContent = document.lastModified;





const products = [
    { id: "fc-1888", name: "Flux Capacitor" },
    { id: "fc-2055", name: "Time Circuit Display" },
    { id: "fm-1121", name: "Mr. Fusion" },
    { id: "sc-2015", name: "Holographic Hoverboard" }
];

const productSelect = document.getElementById("product");

products.forEach(item => {
    const option = document.createElement("option");
    option.value = item.id;
    option.textContent = item.name;
    productSelect.appendChild(option);
});



const productsWithRatings = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];