<img width="50%" src="https://user-images.githubusercontent.com/88527089/208949390-22b33566-2c9e-4170-a522-122c67427a68.png"/>

🛠## Tech Stack🛠

## Developer
이름 | 작업
--- | --- |
**이민혁** | Develop, 외부발표
**정혜원** | Develop, 통합테스팅
**김은비** | Develop, 코드리뷰

## 개발환경
- 개발언어 : JavaScript
- 개발환경 : [Github](https://github.com/), [VScode](https://code.visualstudio.com)
- 가동서버 : [Naver Cloud Platform](https://www.ncloud.com/product/compute/server)

## 개발과정
### 스프린트 회의

### Code Style
- eslint의 `airbnb-base` style 차용.
- husky를 이용해 code style 동일화.

## 프로그램 기능 및 사용법

### 개발자
#### 의존성 설치
- `$ npm install —save js-levenshtein`  ([gustf/js-levenshtein](https://github.com/gustf/js-levenshtein))
- `$ npm install axios`
- `$ npm install cheerio`
#### 개발 순서
- develop branch 에서 자신의 원격 repo로 fork
- 서버에 위에 적힌 의존성 설치
- 필요 기능 개발 후 develop branch에 PR
- 다른 Contributor의 코드 리뷰를 받은 후 merge
- integration test 통과 후 Maintainer의 판단 하에 main branch로 release

### 일반 사용자
#### 1. 학사일정 안내
- user가 '학사일정'을 입력시,
- '안내 받을 날짜를 이야기해주세요' 출력 후 user가 날짜를 입력하면, 'ex) 10/15'
- 그 날짜의 학사일정을 출력 'ex) 10/15 은(는) 개교기념일 입니다'

#### 2. 학과사무실 안내
- user가 '학과사무실', '학과 사무실', '과사' 중 하나를 입력시,
- '학과이름을 입력해주세요' 출력 후 user가 학과를 입력하면, 'ex) Architectural Engineering'
- 그 학과의 학과사무실 위치를 출력 'ex) Architectural Engineering 은(는)College of Engineering Building 1, 132입니다'

#### 3. 오늘의 식단 안내
- user가 '오늘 밥 뭐야'를 입력시 오늘의 진수원식단을 크롤링하여 출력.
- 미리 정의된 기준으로 1~3점중 평점을 매겨서 출력.
- user가 '이번주 뭐나와'를 입력시 이번주의 진수원 식단을 전부 크롤링하여 출력.

#### 4. 인사
- user가 'hi' 입력시 'Hello!', 'Hello, I am chatbot!', '안녕하세요 저는 챗봇입니다!' 중 하나 랜덤으로 출력
