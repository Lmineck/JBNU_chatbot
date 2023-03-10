const levenshtein = require('js-levenshtein');

const officelist = require('./officelist.json');

const officeN = Object.keys(officelist);

const office = function (rtm, text, channel, offices) {
  try {
    let suc = 0;
    let tmp = 0;
    if (offices) {
      for (let i = 0; i < officeN.length; i++) {
        if (officeN[i].toLowerCase().replace(/ /g, '') === text.toLowerCase().replace(/ /g, '')) {
          tmp = i;
          rtm.sendMessage(`π«νκ³Ό μ¬λ¬΄μ€ μλ΄π«\n${text} μ(λ) ${officelist[officeN[i]]}μ μμΉν©λλ€.`, channel);
          suc = 1;
        }
      }
      if (suc !== 1) {
        const distance = [];
        let min = 0;

        for (let i = 0; i < officeN.length; i++) {
          distance[i] = levenshtein(officeN[i].toLowerCase().replace(/ /g, ''), text.toLowerCase().replace(/ /g, ''));
          if (distance[min] > distance[i]) min = i;
        }
        rtm.sendMessage(`π«νκ³Ό μ¬λ¬΄μ€ μλ΄π«\n${officeN[min]} μ(λ) ${officelist[officeN[min]]}μ μμΉν©λλ€.`, channel);
      }
      return 0;
    } else {
      console.log('νκ³Ό μ¬λ¬΄μ€ μλ΄ν©λλ€');
      rtm.sendMessage('π«νκ³Ό μ¬λ¬΄μ€ μλ΄π«\nνκ³Ό μ΄λ¦μ μλ ₯ν΄μ£ΌμΈμ (μ, Architectural Engineering ) :', channel);
      return 4;
    }
  } catch (error) {
    console.log('error!', error.data);
  }
};
module.exports = office;
