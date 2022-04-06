const element = document.querySelector('.testing');

fetch('https://pokeapi.co/api/v2/pokemon/1')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json(element).then(data => console.log(data));
  });
