// Ejemplo de implementación de paginación
function setupPagination(totalItems, itemsPerPage, currentPage) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  
  return `
    <div class="pagination">
      ${currentPage > 1 ? `<button class="page-btn" data-page="${currentPage - 1}">Anterior</button>` : ''}
      ${Array.from({length: totalPages}, (_, i) => 
        `<button class="page-btn ${i + 1 === currentPage ? 'active' : ''}" data-page="${i + 1}">${i + 1}</button>`
      ).join('')}
      ${currentPage < totalPages ? `<button class="page-btn" data-page="${currentPage + 1}">Siguiente</button>` : ''}
    </div>
  `;
}

// Ejemplo de filtro por tipo
function renderTypeFilters() {
  const types = ['water', 'fire', 'grass', 'electric', 'normal'];
  
  return `
    <div class="type-filters">
      <select id="type-filter">
        <option value="">Todos los tipos</option>
        ${types.map(type => 
          `<option value="${type}">${type.charAt(0).toUpperCase() + type.slice(1)}</option>`
        ).join('')}
      </select>
    </div>
  `;
}
