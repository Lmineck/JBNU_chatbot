# <img width="50%" src="https://user-images.githubusercontent.com/88527089/208949390-22b33566-2c9e-4170-a522-122c67427a68.png"/>  
전북대학교 학생들의 편의를 위한 slack 챗봇입니다

## 🛠 Tech Stacks 🛠
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/> <img src="https://img.shields.io/badge/slack-4A154B?style=for-the-badge&logo=slack&logoColor=white"/> <img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=node.js&logoColor=white"/> <img src="https://img.shields.io/badge/json-000000?style=for-the-badge&logo=json&logoColor=white"/> <img src="https://img.shields.io/badge/visual studio code-007ACC?style=for-the-badge&logo=visual studio code&logoColor=white"/> <img src="https://img.shields.io/badge/linux-FCC624?style=for-the-badge&logo=linux&logoColor=black"/>

## 👨‍💼 Developer 👨‍💼
NAME | WORK
--- | --- |
**이민혁** | develop, presentation
**정혜원** | develop, intergration testing
**김은비** | develop, code review

## 💻 Introduce Program 💻

### ✔ Preview

> #### ◼ 인사
>> 챗봇에게 대화를 시도하면 인사와 기능을 간략하게 소개합니다  
>> ![greeting](https://user-images.githubusercontent.com/88527089/209150012-50f798d3-0d02-4190-85d2-a93f4f286231.PNG)
> #### ◼ 학사일정
>> 정규화된 형식에 맞게 날짜를 입력하면 해당 날짜에 맞는 학사일정을 안내합니다  
>> ![haksa](https://user-images.githubusercontent.com/88527089/209150180-8b0d0fa9-5c6a-49fe-b726-abe4266ffb6c.PNG)  
> #### ◼ 오늘 학식
>> 당일 전북대학교 진수원의 중식 메뉴를 안내합니다  
>> ![menu](https://user-images.githubusercontent.com/88527089/209150373-d31f5213-3b92-411f-92f7-a8027d0536ff.PNG)
> #### ◼ 이번주 학식
>> 주간 전북대학교 진수원의 중식 메뉴를 안내합니다  
>> ![menus](https://user-images.githubusercontent.com/88527089/209150384-a6802e9f-e289-4ec1-b98d-53502d25b600.PNG)
> #### ◼ 학과 사무실 안내
>> 학과명을 입력하면 해당 학과 사무실의 위치를 안내합니다  
>> ![office](https://user-images.githubusercontent.com/88527089/209150522-a4084878-c557-4202-9ad0-e819290f8f75.PNG)  
>> 오타와 대소문자 처리를 지원합니다  
>> ![offices](https://user-images.githubusercontent.com/88527089/209150623-f96e40ca-37e7-42ee-90d8-1b033c1a8efb.PNG)

### ✔ Files

> #### ◼ index.js
>> main 코드입니다  
>> 개발한 기능들을 이 코드에 import하여 관리, 실행합니다
> #### ◼ greeting.js
>> 첫 인사를 안내하는 코드입니다  
>> 사용자가 필요로 하는 기능을 입력할 수 있도록 안내 메세지를 출력합니다
> #### ◼ haksa.js
>> 학사 일정을 안내하는 코드입니다  
>> 학사 일정을 안내받기 위한 사용자의 첫 입력 시, 날짜를 요구하는 메세지를 출력합니다  
>> 사용자가 날짜를 입력한 두번째 입력 시, 해당 날짜를 haksaP.json에 매칭하여 학사 일정을 출력합니다
> #### ◼ menu.js  
>> 당일 전북대학교 진수원 중식 메뉴를 안내하는 코드입니다  
>> 진수원 홈페이지의 주간 식단을 스크랩 해온 뒤, 출력합니다
> #### ◼ menus.js  
>> 주간 전북대학교 진수원 중식 메뉴를 안내하는 코드입니다  
>> 진수원 홈페이지의 주간 식단을 스크랩 해온 뒤, 출력합니다
> #### ◼ office.js
>> 학과 사무실 위치를 안내하는 코드입니다  
>> 학과 사무실 위치를 안내받기 위한 사용자의 첫 입력 시, 학과 이름을 요구하는 메세지를 출력합니다  
>> 사용자가 학과 이름을 입력한 두번째 입력 시, 해당 이름을 officeP.json에 매칭하여 학사 일정을 출력합니다  
>> 대소문자의 처리와, Levenshtein Distance 알고리즘을 이용한 오타 처리가 구현되어 있습니다

### ✔ Usage

> ◼ Install Node in your server  
> ◼ Install npm module in your server  
> ◼ Write 'slack-bot token' on 'token' file  
> ◼ Run your server with command ("node index.js")  

## ⚙ Test Environment ⚙

#### OS : Windows, MacOS
#### IDE : Visual Studio Code
#### Language : JavaScript
#### CheckTool : ESLint, Husky, Mocha
#### Collaboration Tools : Git , GitHub, Slack


## 📃 Lisence 📃

~~~
Copyright (c) 2022 Minhyeok Lee

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
~~~
