import puppeteer from "puppeteer";

const browser = await puppeteer.launch({
  headless: true, // set to false to see browser and test if script works
  args: ["--proxy-server=socks5://127.0.0.1:9050"],
});

async function runVotes() {
  for (let i = 0; i < 25; i++) {
    const page = await browser.newPage();
    await page.goto(`https://poll.fm/POLL_ID/`);
    await page.evaluate(() => {
      const answerSelect = document.querySelector(
        "#PDI_answerANSWER_CHOICE"
      );
      const voteButton = document.querySelector(".pds-vote-button");
      answerSelect.click();
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
  } while (currentDate - date < seconds * 1000);
}

while (true) {
  console.log("Voting batch running");
  await runVotes();
  let sleepNum = Math.floor(Math.random() * 20 + 10);
  console.log("Sleeping for " + sleepNum + " seconds");
  sleep(sleepNum);
}

//2154
