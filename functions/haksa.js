const haksaP = require('./haksaP.json');

const haksa = function (rtm, text, channel, _function) {
  if (_function == 1) {
    const textCheck = /^(0[1-9]|1[012])\/(0[1-9]|[12][0-9]|3[01])$/;
    if (textCheck.test(text)) {
      if (haksaP[text] !== undefined) {
        rtm.sendMessage(`πνμ¬μΌμ π\n${text} μ(λ) ${haksaP[text]} μλλ€`, channel);
      } else {
        rtm.sendMessage('πνμ¬μΌμ π\nν΄λΉ λ μ§μλ νμ¬μΌμ μ΄ μμ΅λλ€', channel);
      }
    } else {
      rtm.sendMessage('πνμ¬μΌμ π\nμμμ λ μ§νμκ³Ό λμΌνκ² λ μ§λ₯Ό μλ ₯ν΄μ£ΌμΈμ', channel);
    }
    return 0;
  } else {
    console.log('νμ¬μΌμ μ μλ΄ν©λλ€');
    rtm.sendMessage('πνμ¬μΌμ π\nμλ΄ λ°μ λ μ§λ₯Ό μ΄μΌκΈ°ν΄μ£ΌμΈμ (μ, 04/05) :', channel);
    return 1;
  }
};
module.exports = haksa;
