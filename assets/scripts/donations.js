getDonations();

function getDonations() {
    fetch("https://api.ukrainehilfe-unna.de/items/spenden")
        .then((res) => res.json())
        .then((data) => renderDonations(data.data));
}

function renderDonations(donations) {
    const outputSum = document.querySelector("#current-sum");

    outputSum.innerText = donations.spendenstand + " €";
}
