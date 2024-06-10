export function paginate(items:any[], start = 1, end = 10) {
    console.log(items)
    const paginatedItems = items.slice(start, end);
    console.log(paginatedItems)
    return paginatedItems
}