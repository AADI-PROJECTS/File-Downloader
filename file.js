const fileinput = document.querySelector("input");
const downbtn = document.querySelector(".button");

downbtn.addEventListener("click", (e) => {
  e.preventDefault();
  downbtn.innerText = "Downloading....";
  fetchfile(fileinput.value);
});

function fetchfile(url) {
  fetch(url)
    .then((res) => res.blob())
    .then((file) => {
      let tempURL = URL.createObjectURL(file);
      let temp = document.createElement("a");
      temp.href = tempURL;
      temp.download = url.replace(/^.*[\\\/]/, "");
      document.body.appendChild(temp);
      temp.click();
      temp.remove();
      URL.revokeObjectURL(tempURL);
      downbtn.innerText = "Download";
      fileinput.value = "";
    })
    .catch(() => {
      downbtn.innerText = "Download";
      fileinput.value = "";
      alert("Failed To Download");
    });
}
function load() {
  let pop = document.getElementsByClassName("alertt");
  if (pop.length > 0) {
    pop[0].classList.add("win"); // Access the first element in the collection
  }
}
function closes() {
  let pop = document.getElementsByClassName("alertt");
  if (pop.length > 0) {
    pop[0].classList.remove("win"); // Access the first element in the collection
  }
}
