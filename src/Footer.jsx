import React from "react";
import Statistics from "Statistics";

function Footer({ todoList, message }) {
  return (
    <div id="footer">
      <Statistics />
      <p id="message">{message}</p>
      <p id="copyright">© 2023 Yongseung Song</p>
    </div>
  );
}

export default Footer;
