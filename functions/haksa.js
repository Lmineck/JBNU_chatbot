const haksaP = require('./haksaP.json');

const haksa = function (rtm, text, channel, _function) {
  if (_function == 1) {
    const textCheck = /^(0[1-9]|1[012])\/(0[1-9]|[12][0-9]|3[01])$/;
    if (textCheck.test(text)) {
      if (haksaP[text] !== undefined) {
        rtm.sendMessage(`📅학사일정📅\n${text} 은(는) ${haksaP[text]} 입니다`, channel);
      } else {
        rtm.sendMessage('📅학사일정📅\n해당 날짜에는 학사일정이 없습니다', channel);
      }
    } else {
      rtm.sendMessage('📅학사일정📅\n예시의 날짜형식과 동일하게 날짜를 입력해주세요', channel);
    }
    return 0;
  } else {
    console.log('학사일정을 안내합니다');
    rtm.sendMessage('📅학사일정📅\n안내 받을 날짜를 이야기해주세요 (예, 04/05) :', channel);
    return 1;
  }
};
module.exports = haksa;
