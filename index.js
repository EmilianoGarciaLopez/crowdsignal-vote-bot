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
      document.querySelector("#PDI_answerANSWER_CHOICE").click();
      document.querySelector(".pds-vote-button").click();
    });
    await page.close();
  }
}

function sleep(seconds) {
  console.log(`Sleeping for ${seconds} seconds...`);
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < seconds * 1000);
}

while (true) {
  console.log("Voting batch running");
  await runVotes();
  sleep(Math.floor(Math.random() * 20 + 10));
}
