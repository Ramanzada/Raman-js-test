const button = document.createElement("button");
button.innerHTML = "Click me";
button.addEventListener("click", function() {
  const h1 = document.createElement("h1");
  h1.innerHTML = "Javascript test";
  document.body.appendChild(h1);
  document.body.style.backgroundColor = "lightyellow";
  button.disabled = true;
});
document.body.appendChild(button);
