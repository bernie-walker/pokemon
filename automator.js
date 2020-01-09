const reference = {
  _id: '557a723880a20c9db3bc31c2',
  pkdx_id: 1,
  national_id: 1,
  name: 'Bulbasaur',
  __v: 3,
  image_url: 'http://pokeapi.co/media/img/1.png',
  description:
    "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.  Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.",
  art_url: 'http://assets22.pokemon.com/assets/cms2/img/pokedex/full/001.png',
  types: ['poison', 'grass'],
  evolutions: [
    {
      level: 16,
      method: 'level_up',
      to: 'Ivysaur',
      _id: '557a723880a20c9db3bc31c3'
    }
  ]
};

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

console.log(div);
