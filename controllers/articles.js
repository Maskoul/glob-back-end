
const handleGetArticles = (req, res, db) => {
    db.select('*').from('articles').orderBy('date_created','desc')
        .then(articles => res.json(articles))
}

module.exports = {
    handleGetArticles: handleGetArticles
}