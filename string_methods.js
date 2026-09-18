import input from "./input.js";

const txt = "Lorem ipsum dolor sit amet consectetur, adipisicing elit.";

console.log("Az első 5 karakter: " + txt.substring(0, 5));
console.log("3-tól 8-ig: " + txt.substring(3, 8));
console.log("5-től: " + txt.slice(5));
console.log("5.-től 6 hosszan: " + txt.substring(5, 11));
console.log(txt.toUpperCase());

let newtxt = "";

for (let i = 0; i < txt.length; i++) {
  if (i % 2 == 0) {
    newtxt += txt[i].toLowerCase();
  } else {
    newtxt += txt[i].toUpperCase();
  }
}

console.log("Minden második nagybetű: " + newtxt);
console.log(txt.replaceAll("e", "E"));
console.log(txt.split("e"));
