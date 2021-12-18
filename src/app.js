/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let first = ["the", "our", "your"];
  let second = ["complex", "essay", "cool"];
  let third = ["code", "algorithm", "task"];
  let fourth = [".com", ".es", ".net"];

  first.forEach(first => {
    second.forEach(second => {
      third.forEach(third => {
        fourth.forEach(fourth => {
          document.querySelector(
            "#item"
          ).innerHTML += `${first}${second}${third}${fourth}<br>`;
        });
      });
    });
  });
};
