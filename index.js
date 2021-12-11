import puppeteer from "puppeteer";

const browser = await puppeteer.launch({
  headless: true, // set to false to see browser and test if scipt works
  args: ['--proxy-server=socks5://127.0.0.1:9050']
});


async function runVotes() {
  for (let i = 0; i < 18; i++) {
    const page = await browser.newPage();
    await page.goto("https://poll.fm/10988464/");
    await page.evaluate(() => {
      const hornsteinSelect = document.querySelector("#PDI_answer50502380");
      const voteButton = document.querySelector(".pds-vote-button");
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
  } while (currentDate - date < seconds * 1000);
}

while (true) {
  console.log("Voting batch running");
  await runVotes();
  let sleepNum = Math.floor(Math.random() * (Math.ceil(20) - Math.ceil(5)) + Math.ceil(5));
  console.log("Sleeping for " + sleepNum + " seconds");
  sleep(sleepNum);
}
