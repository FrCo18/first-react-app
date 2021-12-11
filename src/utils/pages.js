export const getPageCount = (totalPage, limit) => {
    return Math.ceil(totalPage / limit)
}

export const getPagesArray = (totalPages) => {
    let pagesArray = []
    for (let i = 0; i < totalPages; i++) {
        pagesArray.push(i + 1)
    }
    return pagesArray
}