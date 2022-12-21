const greeting = function (rtm, channel) {
	console.log('인사를 시작합니다.');

	rtm.sendMessage('🔔안녕하세요! 저는 전북대학교 알림 챗봇입니다!🔔\n원하시는 기능의 번호를 입력해주세요\n1. 📅학사일정📅\n2. 🍚오늘 학식🍚\n3. 🍱이번주 학식🍱\n4. 🏫학과 사무실 안내🏫', channel);
};

module.exports = greeting;