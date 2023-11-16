import theme from "Theme";

const { createGlobalStyle } = require("styled-components");
const GlobalStyle = createGlobalStyle`
@import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.8/dist/web/variable/pretendardvariable-dynamic-subset.css");

*,
body {
  font-family: "Pretendard Variable", system-ui, -apple-system,
    BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
    "Open Sans", "Helvetica Neue", sans-serif;
}

#root {
  display: flex;
  width: 100vw;
  background: ${(props) => props.theme.background} ;
  color: ${(props) => props.theme.color};
  height: 100vh;
  overflow: scroll;
  scrollbar-width: none;
  box-sizing: content-box;
}
#root::-webkit-scrollbar {
  display: none;
}
body.done {
  background-image: url(https://em-content.zobj.net/source/apple/118/white-heavy-check-mark_2705.png),
    linear-gradient(0deg, rgba(34, 117, 195, 1) 0%, rgba(253, 187, 45, 1) 100%);
  background-size: 50px 50px;
}
.layout {
  position: relative;
  min-width: 800px;
  max-width: 1200px;
  width: 1200px;
  height: 700px;
  box-sizing: content-box;
  margin: auto;
  box-sizing: border-box;
  background-color: #5559;
  border-radius: 12px;
  box-shadow: 0px 10px 25px #0008;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
}

.layout__header {
  /* border: 1px solid black; */
  display: flex;
  height: 32px;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  background-color: ${(props) => props.theme.menuColor};
  border-top-right-radius: 12px;
  border-top-left-radius: 12px;
  border-bottom: 1px solid #0003;
  box-shadow: 0px 5px 8px #0003;
  padding: 8px 16px;
  font-family: monospace;
}
.layout__header span {
  display: inline-block;
}
.header__title {
  font-size: 1rem;
  font-weight: 700;
}

.form {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #aaa3;
  height: 60px;
  padding: 0 24px;
  margin-bottom: 12px;
  box-shadow: 0px 5px 8px #0003;
  border-bottom: 1px solid #0003;
}
.form label {
  margin-right: 12px;
  font-size: 1rem;
  font-weight: 700;
}
.form .input__wrapper {
  display: flex;
  flex-shrink: 1;
  justify-content: center;
  align-items: center;
  gap: 58px;
  height: 60px;
}
.form input {
  border-bottom: 1px solid #0005;
  border-top: none;
  border-left: none;
  border-right: none;
  border-radius: none;
  padding: 4px;
  font-size: 1rem;
  background-color: #fff0;
}
.form input:focus {
  outline: none;
}
.form input#content {
  width: 420px;
  min-width: 240px;
}
.form input#title {
  width: 160px;
  min-width: 120px;
}
.button {
  padding: 6px;
  box-sizing: border-box;
  border: none;
  border-radius: 8px;
  background-color: #fffa;
  cursor: pointer;
}
.form__button {
  border-radius: 6px;
  padding: 8px;
  min-width: 80px;
  max-width: 160px;
  font-size: 1rem;
  letter-spacing: 2px;
  font-weight: 700;
  color: white;
  margin-left: 24px;
  background-color: #0005;
}
.form__button:hover {
  background-color: #000a;
}
#todoList {
}

section {
  margin: 28px;
}

.card-container {
  width: 100%;
  overflow: scroll;
  margin: 16px 0;
  scrollbar-width: none;
}
.card-container::-webkit-scrollbar {
  display: none;
}
.card-container__title {
  text-align: start;
  margin: 0 24px;
  font-size: 1.2rem;
  font-weight: 700;
  box-sizing: border-box;
}

.card-carousel {
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  height: 180px;
  margin: 0 0 12px;
  gap: 24px;
}

.card {
  position: relative;
  width: 180px;
  /* height: 180px; */
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  justify-content: space-between;
  align-items: start;
  padding: 0 12px;
  box-sizing: border-box;
  /* border: 1px solid black; */
  border-radius: 8px;
  background-color: ${(props) => props.theme.menuColor};
  box-shadow: 0px 6px 10px #0008;
  transition: 0.5s all ease-out;
}
.card:hover {
  /* background-color: #ffff; */
}

.card h2 {
  margin-top: 24px;
  font-size: 0.8rem;
  color: #888;
  font-weight: 500;
  margin-bottom: 20px;
}
.card p {
  font-weight: 650;
  line-height: 1.5rem;
  word-break: break-all;
  overflow: scroll;
  scrollbar-width: none;
  margin-bottom: 8px;
}
.card p::-webkit-scrollbar {
  display: none;
}
.card span {
  display: block;
  align-self: self-end;
  margin-top: auto;
  margin-bottom: 8px;
  font-size: 0.7rem;
  font-weight: 700;
  color: #aaa;
  visibility: hidden;
}
.card:hover span {
  visibility: visible;
}
.button-container {
  position: absolute;
  top: 8px;
  right: 8px;
  display: flex;
  /* flex-direction: column; */
  gap: 8px;
}
.card__button {
  width: 12px;
  height: 12px;
  font-size: 0;
  opacity: 0%;
  border-radius: 100%;
  box-sizing: border-box;
  /* border: 2px solid #eee; */
  background-color: #fff0;
}
.card:hover .card__button {
  opacity: 100%;
}
.card__button-finish {
  /* border: 2px solid #eeea; */
  box-shadow: 0px 2px 4px #aaaa;
}
.card__button-finish:hover {
  background-color: #00b600;
}
.card__button-erase {
  position: relative;
  width: 12px;
  height: 12px;
  box-shadow: 0px 2px 4px #aaaa;
}

.card__button-erase::before {
  content: "";
  visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 8px;
  height: 8px;
  border-right: 1px solid black;
  transform: translate(-1.2px, -0.6px) rotateZ(45deg);
}
.card__button-erase::after {
  content: "";
  visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 8px;
  height: 8px;
  border-right: 1px solid black;
  transform: translate(4.55px, -0.6px) rotateZ(135deg);
}
.card__button-erase:hover {
  /* background-image: url("https://www.svgrepo.com/show/493964/delete-1.svg");
  background-size: 22px;
  background-position: center -4.5px; */
  background-color: #fa3c3c;
  box-shadow: 0px 2px 4px #aaaa;
}

.card__button-erase:hover::before,
.card__button-erase:hover::after {
  visibility: visible;
}
#footer {
  display: flex;
  height: 32px;
  justify-content: space-between;
  align-items: center;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  background-color: ${(props) => props.theme.menuColor};
  margin-top: 24px;
  font-family: monospace;
}

.stats {
  box-sizing: border-box;
  padding: 0 30px;
  height: 32px;
  position: relative;
  display: flex;
  align-items: center;
  gap: 24px;
  border-right: 1px solid #0005;
}
.stats div {
  display: flex;
  gap: 12px;
}
.stats div dt {
  font-weight: 700;
}
.stats div dd {
}
#message {
  flex-shrink: 1;
  margin-right: auto;
  padding-left: 10px;
  text-align: start;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all;
  overflow: hidden;
}
#copyright {
  padding: 12px 24px;
}

`;

export default GlobalStyle;
