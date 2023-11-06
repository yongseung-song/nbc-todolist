# To-do list

## 설명

내일배움캠프 React트랙 두번째 개인과제의 결과물로, React를 이용한 To-do List입니다.

### 컴포넌트 구조

App: 최상위 컴포넌트입니다.
⊢ Layout: 앱의 모든 내용을 담는 컴포넌트입니다.
⊢ TodoList: to-do list에 아이템을 추가하는 컴포넌트와 to-do list의 내용을 담는 컴포넌트를 담는 컴포넌트입니다.
∣ ⊢ Form: to-do list에 아이템을 추가하는 `<form>` 과 `<input>` 태그를 담는 컴포넌트입니다.
∣ ⊢ Task: to-do list의 아이템을 `<li>` 태그 내부에 담는 컴포넌트로, 아이템의 타이틀과 내용을 포함합니다.
∣
⊢ Footer: 앱의 하단에 현재 to-do list의 상태와 최근 작업을 보여주는 message, copyright를 담는 컴포넌트입니다.
⊢ Statistics: to-do list의 진행중 항목, 완료된 항목, 전체 항목의 수를 보여주는 컴포넌트입니다.

## 사용법

### 설치

`git clone https://github.com/yongseung-song/nbc-todolist <복제할 디렉토리>`

`npm install`

`npm start`

### 이용

1. 화면 상단의 입력 부분에 제목과 내용을 입력하고 추가 버튼을 누르거나 엔터를 누릅니다. 이 때 두 입력부분중 하나라도 비어있으면 추가가 되지 않습니다.

2. 아이템을 추가하면 제목, 내용이 적힌 항목이 'WORKING...' 부분에 추가됩니다. 항목에 마우스를 올리면 항목의 하단에 추가된 시간이 보입니다.

3. 'WORKING...' 부분에 추가된 항목에 마우스를 올리면 버튼이 두 개 나타납니다. 초록색은 완료 버튼이고, 빨간 색은 삭제 버튼입니다.

4. 완료 버튼을 누르면 아래의 'DONE!' 부분으로 항목이 이동합니다. 거기서 다시 같은 버튼을 누르면 완료를 취소합니다.

5. 삭제 버튼을 누르면 항목이 삭제됩니다.
