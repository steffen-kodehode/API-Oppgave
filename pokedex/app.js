// https://pokeapi.co/api/v2/pokemon/

// fetch("https://pokeapi.co/api/v2/pokemon/")
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//     document.getElementById("main").innerHTML = data.results[0].name;
//   });

const url = "https://pokeapi.co/api/v2/pokemon/1";

//used the fetch integrated function to get the api data
//and added a new div to contain the data
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    document.getElementById("main").innerHTML = `
    <div class="card" id="${data.url}">
    <h3>${data.name}</h3>
    <img src=${data.sprites.front_default} id="pokepic" />
    </div>
    `;
  });

// i have tried to add a way for the card to
// have a click event, to change it to the shiny version,
// but i don't know how to
// replace the image with this one
// data.sprites.front_shiny

document.getElementById("pokepic").addEventListener("click", function () {
  let img = url;
  if (img.src != "data.sprites.front_default") {
    img.src = "data.sprites.front_default";
  } else {
    ("data.sprites.front_shiny");
  }
  return;
});
