
const handleNewArticle = (req, res, db, bcrypt) => {

    const {title, subTitle, article, userId, author} = req.body;

    db('articles').insert({
        title: title,
        sub_title: subTitle,
        article: article,
        user_id: userId,
        author: author,
        date_created: new Date()
    })
        .returning('*')
        .then(newArticle => res.json(newArticle[0]))
        .catch(err => {
            console.log(err);
            res.status(400).json("Error, unable to add new article!")
        })

}

module.exports = {
    handleNewArticle : handleNewArticle
}

