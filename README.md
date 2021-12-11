Run the following commands to use the bot:

you must have the tor package installed

```bash
brew install tor
mv /opt/homebrew/etc/tor/torrc.sample /opt/homebrew/etc/tor/torrc
brew services start tor
```

test if tor is working

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

note: this package fails to work after voting 20 times, but an integration with proxies is planned.
