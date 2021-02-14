const WebSocket = require('ws');
const os = require('os');
const port = process.env.PORT || 8080; // use port 8080 unless otherwise specified


const wss = new WebSocket.Server({ port: port });
console.log("Websockets server listening on port", port);

// lyrics
const lyrics_arr = ["We're no strangers to love",
"You know the rules and so do I",
"A full commitment's what I'm thinking of",
"You wouldn't get this from any other guy",
"I just wanna tell you how I'm feeling",
"Gotta make you understand",
"Never gonna give you up",
"Never gonna let you down",
"Never gonna run around and desert you",
"Never gonna make you cry",
"Never gonna say goodbye",
"Never gonna tell a lie and hurt you",
"We've known each other for so long",
"Your heart's been aching, but you're too shy to say it",
"Inside, we both know what's been going on",
"We know the game, and we're gonna play it",
"And if you ask me how I'm feeling",
"Don't tell me you're too blind to see",
"Never gonna give you up",
"Never gonna let you down",
"Never gonna run around and desert you",
"Never gonna make you cry",
"Never gonna say goodbye",
"Never gonna tell a lie and hurt you",
"Never gonna give you up",
"Never gonna let you down",
"Never gonna run around and desert you",
"Never gonna make you cry",
"Never gonna say goodbye",
"Never gonna tell a lie and hurt you",
"Ooh (Give you up)",
"Ooh-ooh (Give you up)",
"Ooh-ooh",
"Never gonna give, never gonna give (Give you up)",
"Ooh-ooh",
"Never gonna give, never gonna give (Give you up)",
"We've known each other for so long",
"Your heart's been aching, but you're too shy to say it",
"Inside, we both know what's been going on",
"We know the game, and we're gonna play it",
"I just wanna tell you how I'm feeling",
"Gotta make you understand",
"Never gonna give you up",
"Never gonna let you down",
"Never gonna run around and desert you",
"Never gonna make you cry",
"Never gonna say goodbye",
"Never gonna tell a lie and hurt you",
"Never gonna give you up",
"Never gonna let you down",
"Never gonna run around and desert you",
"Never gonna make you cry",
"Never gonna say goodbye",
"Never gonna tell a lie and hurt you",
"Never gonna give you up",
"Never gonna let you down",
"Never gonna run around and desert you",
"Never gonna make you cry",
"Never gonna say goodbye,",
"Never gonna tell a lie and hurt you"];
let lyrics_arr_index = 0; // tracking where we are in the array

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('Received: %s', message);
  });

  ws.send('Connected to server ' + os.hostname());
});

const broadcast = (data, ws) => {
    wss.clients.forEach(client => {
     if (client.readyState === WebSocket.OPEN && client !== ws) {
      //client.send(JSON.stringify(data));
      client.send(data);
     }
    });
   }

// set interval
setInterval( function() {
    let data = lyrics_arr[lyrics_arr_index % (lyrics_arr.length)];
    broadcast(data); // call broadcast
    lyrics_arr_index++; // increment position in lyrics arr
    console.log("Broadcasting message: " + data); },
    1000);