//! 1
let newarr = document.querySelectorAll("h3");
newarr.forEach((item) => {
  item.innerText += "!!!";
});
//! 2
let newarrr = document.querySelectorAll("h3");
newarrr.forEach((item) => {
  item.style.color = "green";
});
//! 3
let ul = document.createElement("ul");
for (let i = 1; i <= 30; i++) {
  let li = document.createElement("li");
  let res = document.createTextNode(i + " - овечка");
  li.append(res);
  ul.append(li);
}
document.body.append(ul);
//! 4
let span = document.getElementsByTagName("span");
for (let i = 0; i < span.length; i++) {
  span[i].classList.add("active");
}
