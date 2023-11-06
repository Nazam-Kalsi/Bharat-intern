ScrollReveal({ reset: false, distance: "100px", duration: 1000});
ScrollReveal().reveal(".container", { delay: 30, origin:"bottom"});
ScrollReveal().reveal("#title", { delay: 30, origin:"bottom"});

document.querySelectorAll("section >div")[0].classList.add("flex");
document.querySelectorAll("section >div")[1].classList.add("flex");
document.querySelectorAll("section >div")[2].classList.add("flex");
function f1() {
  let heading = document.getElementById("title");
  let text = heading.innerText.split("");
  heading.innerText = "";

  text.forEach((element) => {
    const span = document.createElement("span");
    span.classList.add("tilt");
    span.innerText = element;
    heading.append(span);
  });
}
f1();

let celcius = document.getElementsByName("celcius")[0];
let fahrenheit = document.getElementsByName("fahrenheit")[0];
let kalvin = document.getElementsByName("kalvin")[0];
celcius.oninput = () => {
  let cv = Number.parseInt(celcius.value);
  let f = cv * (9 / 5) + 32;
  let k = cv + 273.15;
  fahrenheit.value = parseFloat(f.toFixed(2));
  kalvin.value = parseFloat(k.toFixed(2));
};
fahrenheit.oninput = () => {
  let fv = Number.parseInt(fahrenheit.value);
  let c = ((fv - 32) * 5) / 9;
  let k = c + 273.15;
  celcius.value = parseFloat(c.toFixed(2));
  kalvin.value = parseFloat(k.toFixed(2));
};
kalvin.oninput = () => {
  let kv = Number.parseInt(kalvin.value);
  let c = kv - 273.15;
  let f = (kv - 273.15) * (9 / 5) + 32;
  celcius.value = parseFloat(c.toFixed(2));
  fahrenheit.value = parseFloat(f.toFixed(2));
};

let b = document.querySelector(".btn");

b.addEventListener("click", function () {
  celcius.value = "";
  fahrenheit.value = "";
  kalvin.value = "";
});
