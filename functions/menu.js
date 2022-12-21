const axios = require('axios');
const cheerio = require('cheerio');

const dt = new Date();

async function webScraping(url, selector) {
  const res = [];
  const html = await axios.get(url);
  const $ = cheerio.load(html.data);

  for (const v of $(selector)) {
    res.push($(v).text().replace('\n', ''));
  }

  return res;
}

const today = dt.getDay() + 2;
const url = 'https://sobi.chonbuk.ac.kr/menu/week_menu.php';
const selector = `div:nth-child(2) > table > tbody > tr:nth-child(1) > td:nth-child(${today}) > ul > li:nth-last-child(-n + 4)`;

const menu = async function (rtm, channel) {
  console.log('오늘 학식을 안내합니다');
  if (today !== 2 && today !== 8) {
    webScraping(url, selector).then((res) => {
      let str = res.join(', ');
      rtm.sendMessage('🍚오늘 학식🍚\n'+str+' 입니다', channel);
    });
  } else {
    rtm.sendMessage('🍚오늘 학식🍚\n주말엔 진수원에서 식사를 제공하지 않습니다', channel);
  }
};

module.exports = menu;