getDonations();

function getDonations() {
    fetch("https://api.ukrainehilfe-unna.de/items/spenden")
        .then((res) => res.json())
        .then((data) => renderDonations(data.data));
}

function renderDonations(donations) {
    const outputSum = document.querySelector("#current-sum");
    donations = donations.spendenstand;

    outputSum.innerText = donations + " €";
    renderDonationBar(donations);
}

function renderDonationBar(donations) {
    const bar = document.querySelector(".cf-ticker__status-bar");
    const progress = `${Math.round((donations / 60000) * 100)}%`;

    bar.style.setProperty("--ticker-counter", progress);
}
