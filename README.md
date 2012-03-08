## What's wrong?

Listening to tcp sockets by domain names when using `daemon` module

## How to check it?

```
git clone git@github.com:bobrik/node-daemon-bug.git
cd node-daemon-bug
npm install daemon


node index.js run # this will run app without daemon and it's ok. ^C after checking telnet localhost:57000
node index.js # this will not bind socket at localhost:57000, but if you change localhost to 127.0.0.1 it's ok
```

so here we are.