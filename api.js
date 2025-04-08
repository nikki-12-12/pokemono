// Ejemplo de servicio con caché
class PokemonService {
  constructor() {
    this.cache = new Map();
  }

  async getPokemonList(page = 1, limit = 10) {
    const cacheKey = `list-${page}-${limit}`;
    
    if (this.cache.has(cacheKey)) {
      return this.cache.get(cacheKey);
    }

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${(page - 1) * limit}&limit=${limit}`);
    const data = await response.json();
    
    // Almacenar en caché
    this.cache.set(cacheKey, data);
    return data;
  }
}
