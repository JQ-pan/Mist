// This function will take in the game reviews and return an array that looks like [average, color, length]
// Reviews is an array
const reviewUtils = (reviews) => {
    // reviewInfo == []
    const reviewInfo = reviews.map(review => {
        return [review.gameId, review.recommended]
    }).reduce((acc, [key, value]) => {
        if (!acc[key]) {
            acc[key] = [];
        }
        acc[key].push(value);
        return acc;
    }, {})
}

export default reviewUtils;