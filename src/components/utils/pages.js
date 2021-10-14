const getPagesCount = (titalCount, limit) => {
    return Math.ceil(titalCount / limit)
}

export default getPagesCount;