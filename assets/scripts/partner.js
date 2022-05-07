getPartnersData();

function getPartnersData() {
    fetch("https://api.ukrainehilfe-unna.de/items/partner")
        .then((res) => res.json())
        .then((data) => renderPartners(data.data));
}

function renderPartners(partners) {
    const partnersWrapper = document.querySelector("#partner-wrapper");
    const imgUrl = "https://api.ukrainehilfe-unna.de/assets/";

    for (let i = 0; i < partners.length; i++) {
        const destination = partners[i].logo;

        const container = document.createElement("div");
        container.classList.add("cf-partner");

        const logo = document.createElement("img");
        logo.src = imgUrl + destination;
        logo.alt = "Logo " + partners[i].name;
        logo.classList.add("cf-partner__logo");

        const name = document.createElement("p");
        name.innerText = partners[i].name;
        name.classList.add("cf-partner__name");

        const link = document.createElement("a");
        link.href = partners[i].website;
        link.target = "_blank";
        link.innerText = "Zur Website";
        link.classList.add("cf-partner__link");

        container.append(logo, name, link);
        partnersWrapper.append(container);
    }
}
