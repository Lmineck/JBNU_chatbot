const axios = require('axios');
const cheerio = require('cheerio');

async function webScraping(url, selector) {
  const res = [];
  const html = await axios.get(url);
  const $ = cheerio.load(html.data);

  for (const v of $(selector)) {
    res.push($(v).text().replace('\n', ''));
  }

  return res;
}

const url = 'https://sobi.chonbuk.ac.kr/menu/week_menu.php';
const days = ['월', '화', '수', '목', '금'];

const menus = async function (rtm, channel) {
  console.log('이번주 학식을 안내합니다');
  rtm.sendMessage('🍱이번주 학식🍱\n', channel)
  let selector = `div:nth-child(2) > table > tbody > tr:nth-child(1) > td:nth-child(n + 3) > ul > li:nth-last-child(-n + 4)`;
  webScraping(url, selector).then((res) => {
    for (let i = 0; i < 5; i++) {
      let res2 = res.slice(i * 4, (i + 1) * 4)
      const str = `${days[i]}요일 식단 : ` + res2.join(',');
      rtm.sendMessage(str, channel);
    }
  });
};

module.exports = menus;