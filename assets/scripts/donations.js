getDonations();

function getDonations() {
    fetch("https://ukrainehilfe-unna.ferdinand-niemann.eu/items/spenden")
        .then((res) => res.json())
        .then((data) => {
            renderDonations(data.data);
        });
}

function renderDonations(donations) {
    const outputSum = document.querySelector("#current-sum");
    donations = donations[0];

    outputSum.innerText = donations.spendenstand + " €";
}
