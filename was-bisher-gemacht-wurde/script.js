let tabelle = document.querySelector("#tabelle");

let td = document.createElement("td");

function getData() {
  fetch("http://ferdinand-niemann.eu:49179/items/produkte")
    .then(function (res) {
      return res.json();
    })
    .then(function (dataObject) {
      showData(dataObject);
    });
}

function showData(dataObject) {
  console.log(Object.keys(dataObject.data).length);
  for (let i = 0; i < Object.keys(dataObject.data).length; i++) {
    let itemRow = document.createElement("tr");
    // Beschreibung
    const beschreibung = document.createElement("td");
    const description = dataObject.data[i].beschreibung;
    beschreibung.innerText = description;

    // Preis
    const preis = document.createElement("td");
    const price = dataObject.data[i].preis;
    preis.innerText = price;

    // Anzahl
    const anzahl = document.createElement("td");
    const quantity = dataObject.data[i].anzahl;
    anzahl.innerText = quantity;
    console.log(quantity);

    // Datum
    const datum = document.createElement("td");
    const date = dataObject.data[i].datum;
    datum.innerText = date;

    itemRow.append(beschreibung, preis, anzahl, datum);
    tabelle.appendChild(itemRow);
  }
}

getData();
