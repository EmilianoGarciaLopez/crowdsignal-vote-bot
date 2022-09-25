## Introduction
This is a simple repo that uses the puppeteer plugin to automate votes for vote.fm (aka polldaddy/crowdsignal) polls.

## Run Instructions
Run the following commands to use the bot:

you must have the tor package installed which prevents your ip from being blocked by poll.fm

```bash
brew install tor
mv /opt/homebrew/etc/tor/torrc.sample /opt/homebrew/etc/tor/torrc #this might not be needed
brew services start tor
```

test if tor is working by running the following command:

```bash
curl --socks5 localhost:9050 --socks5-hostname localhost:9050 -s https://check.torproject.org/ | cat | grep -m 1 Congratulations | xargs
```

if it is, then you can clone the repo and run the script using the commands below

```bash
git clone https://github.com/EmilianoGarciaLopez/voteScams.git
cd voteScams
npm install
npm start
```

**Make sure to replace the ANSWER_CHOICE and VOTE_ID strings with the appropriate values** use find and replace to locate them. Edit the index.js script to replace these strings
