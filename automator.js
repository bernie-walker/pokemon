const pokemonList = require('./pokemon.json');

const getDiv = function(reference) {
  const pokeName = reference.name;
  const imageSource = reference.art_url;
  const abilities = reference.types
    .map(ab => {
      const name = ab[0].toUpperCase() + ab.slice(1);
      return `<p class="${ab}">${name}</p>`;
    })
    .join('\n');

  const div = `<button class="poke-card">
<h2 class="poke-name">${pokeName}</h2>
<img
  class="poke-image"
  src="${imageSource}"
/>
<div class="poke-abilities">
  ${abilities}
</div>
</button>`;

  return div;
};

console.log(pokemonList.map(getDiv).join('\n\n'));
