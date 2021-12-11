import puppeteer from "puppeteer";

const browser = await puppeteer.launch({});

async function runVotes() {
  for (let i = 0; i < 15; i++) {
    const page = await browser.newPage();
    await page.goto("https://poll.fm/10988464");
    await page.evaluate(() => {
      let hornsteinSelect = document.querySelector("#PDI_answer50502380");
      let voteButton = document.querySelector(".pds-vote-button");
      hornsteinSelect.click();
      voteButton.click();
    });
    await page.close();
  }
}

function sleep(seconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < (seconds * 1000));
}

while (true) {
    await runVotes();
    sleep(120);
}
