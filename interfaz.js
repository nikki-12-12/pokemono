// Ejemplo de componente de tarjeta de Pokémon
function PokemonCard({ pokemon }) {
  return `
    <div class="pokemon-card" data-id="${pokemon.id}">
      <img src="${pokemon.image}" alt="${pokemon.name}">
      <h3>${pokemon.name}</h3>
      <div class="types">
        ${pokemon.types.map(type => `<span class="type-${type}">${type}</span>`).join('')}
      </div>
      <button class="save-btn" data-id="${pokemon.id}">Guardar</button>
    </div>
  `;
}
