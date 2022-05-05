getProductsData();

function getProductsData() {
    fetch("https://api.ukrainehilfe-unna.de/items/erreichtes")
        .then((res) => res.json())
        .then((data) => renderProducts(data.data));
}

function renderProducts(products) {
    const list = document.querySelector("#products-list");

    for (let i = 0; i < products.length; i++) {
        const container = document.createElement("li");
        container.classList.add("products__container");

        const toggle = document.createElement("input");
        toggle.type = "radio";
        toggle.id = createId(products[i].id);
        toggle.classList.add("product-toggle");
        toggle.name = "product-toggle";

        const description = document.createElement("label");
        description.classList.add("product-description");
        description.setAttribute("for", toggle.id);

        const header = document.createElement("header");

        const date = document.createElement("small");
        date.innerText = renderDate(products[i].datum);

        const title = document.createElement("h3");
        title.innerText = products[i].beschreibung;

        header.append(date, title);
        description.append(header);

        if (products[i].details !== null) {
            const details = document.createElement("p");
            details.classList.add("product-details");
            details.innerHTML = products[i].details;

            description.append(details);
        }

        container.append(toggle, description);
        list.append(container);
    }
}

function createId(num) {
    let id = "";

    for (let i = 0; i < 8; i++) {
        const randomIndex = Math.floor(Math.random() * 27);
        const alphabet = "abcdefghijklmnopqrstuvwxyz";
        id += alphabet[randomIndex];
    }

    return id + num;
}

function renderDate(date) {
    date = date.split("-");
    const day = date[2];
    const month = date[1];
    const year = date[0];

    return `${day}. ${month}. ${year}`;
}

document.body.addEventListener("click", collapseAccordeon);

function collapseAccordeon(e) {
    if (e.target.type === "radio") {
        e.target.classList.add("active");
    } else if (document.querySelector(".active")) {
        const activeBox = document.querySelector(".active");
        activeBox.checked = false;
        activeBox.classList.remove("active");
    }
}
