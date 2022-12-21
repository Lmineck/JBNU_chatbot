const { RTMClient } = require('@slack/rtm-api');
const fs = require('fs');

let token;
try {
  token = fs.readFileSync('./token').toString('utf-8');
} catch (err) {
  console.error(err);
}
const rtm = new RTMClient(token);

const greeting = require('./functions/greeting');
const office = require('./functions/office');
const haksa = require('./functions/haksa');
const menu = require('./functions/menu');
const menus = require('./functions/menus');

rtm.start();
let _function = 0; // zero is greeting

rtm.on('message', (message) => {
  const { channel } = message;
  const { text } = message;

  switch (text) {
    case '1':
      _function = haksa(rtm, text, channel, _function);
      break;
    case '2':
      menu(rtm, channel);
      break;
    case '3':
      menus(rtm, channel);
      break;
    case '4':
      _function = office(rtm, text, channel, _function);
      break;
    default :
      switch (_function) {
        case 1 :
          _function = haksa(rtm, text, channel, _function);
          break;
        case 4 :
          _function = office(rtm, text, channel, _function);
          break;
        default :
          greeting(rtm, channel);
          break;
      }
  }
});