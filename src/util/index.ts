export function paginate(items:any[], start = 1, end = 10) {
    const paginatedItems = items.slice(start, end);
    return paginatedItems
}