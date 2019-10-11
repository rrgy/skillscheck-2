module.exports = {
    getInventory: (req, res) => {
        const db = req.app.get('db')
        db.get_inventory().then(inventory => {
            res.status(200).send(inventory)
        })
            .catch(err => console.log(err))
    },
    postProduct: (req, res) => {
        const db = req.app.get('db')
        const { product } = req.body
        db.post_product(product).then(inventory => {
            res.status(200).send(inventory)
        })
    },
    delete: (req, res) => {
        const { index } = req.params
        req.app.get('db').delete_product({ index }).then(inventory => {
            res.sendStatus(200)
        })
    }
}