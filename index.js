import puppeteer from "puppeteer";

const POLL_ID = 99999999; // CHANGE THIS TO YOUR POLL ID

const browser = await puppeteer.launch({
  headless: false, // set to false to see browser and test if scipt works
  args: ["--proxy-server=socks5://127.0.0.1:9050"],
});

async function runVotes(answerID) {

  for (let i = 0; i < 200; i++) {
    const page = await browser.newPage();
    await page.goto(`https://poll.fm/${POLL_ID}/`);
    await page.evaluate(function () {
      const ANSWER_CHOICE = 9999999; // CHANGE THIS TO YOUR ANSWER CHOICE
      const answerSelect = document.querySelector(`#PDI_answer${ANSWER_CHOICE}`);
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