const paginate = function (items, page, itemsPerPage) {

    // Se define la cantidad de items en el arreglo
    const totalItems = items.length;
    // Se define la cantidad de paginas
    const numberOfPages = totalItems / itemsPerPage;
    // Se define el indice desde donde se recorre el arreglo
    const startingIndex = (page - 1) * itemsPerPage;
    // Se define el primer elemento a tener en cuenta en el arreglo
    const from = (startingIndex + 1) === totalItems ? totalItems : (startingIndex + 1);
    // Se define el ultimo elemento a tener en cuenta en el arreglo
    const to = (startingIndex + itemsPerPage) >= totalItems ? totalItems : (startingIndex + itemsPerPage);
    // Se define la lista de elementos a devolver (entre from y to)
    const itemsOnPage = items.slice(from - 1, to);
    // Se define si hay elementos previos a la pagina elegida
    const prev = page > 1;
    // Se define si hay elementos posteriores a la pagina elegida
    const next = page < numberOfPages;

    return { totalItems, itemsOnPage, page, itemsPerPage, from, to, next, prev };


}

module.exports = paginate
