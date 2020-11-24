// First, run 'npm install pusher'

const Pusher = require("pusher");
const dotenv = require("dotenv");

dotenv.config();

const pusher = new Pusher({
  appId: process.env.APPID,
  key: process.env.KEY,
  secret: process.env.SECRET,
  cluster: process.env.CLUSTER,
  useTLS: true
});

// Trigger a new random event every second. In your application,
// you should trigger the event based on real-world changes!
setInterval(() => {
  pusher.trigger("price-btcusd", "new-price", { 
    value: Math.random() * 5000
  });
}, 1000);