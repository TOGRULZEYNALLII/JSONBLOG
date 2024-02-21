const input = document.getElementById("input");
const button = document.getElementById("button");
const list = document.getElementById("ul");
const model = document.getElementById("model");
const size = document.getElementById("size");
const color = document.getElementById("color");
const file = document.getElementById("file");
const url = {
  URL: "http://localhost:3000/posts",
};

async function fetchdata() {
  const response = await fetch(url.URL);
  const data = await response.json();
  htmlSet(data);
}
fetchdata();
async function handleTodo() {
  const text = input.value.trim();
  const seria = model.value.trim();
  const olcu = size.value.trim();
  const reng = color.value.trim();

  if (text !== "") {
    const response = await fetch(url.URL, {
      method: "POST",
      body: JSON.stringify({
        text,
        seria,
        olcu,
        reng,
      }),
    });

    const data = await response.json();
    htmlSet(data);
    input.value = "";
  }
}
function htmlSet(data) {
  return data.forEach(
    (element) =>
      (list.innerHTML += `
          <li >
            <h2>${element.text}</h2>
            <h2>${element.seria}</h2>
            <h2>${element.olcu}</h2>
            <h2>${element.reng}</h2>
          </li>
      `)
  );
}
button.addEventListener("click", handleTodo);

input.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    handleTodo();
  }
});
