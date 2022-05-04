/**** table for bought items *****/

/**** fundraiser ticker data *****/

const fundraiserTicker = document.querySelector(".cf-ticker");

function changeCounterSum(newSum) {
    if (fundraiserTicker !== null) {
        const counterValue = Math.round((newSum / 60000) * 100);
        fundraiserTicker.style.setProperty("--ticker-counter", counterValue + "%");
    }
}

changeCounterSum(27000);
