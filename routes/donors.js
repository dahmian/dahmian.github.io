module.exports = (req, res) => {
    req.context.page.title = `${req.context.localized.donors.donors} | Electron`
    res.render('donors', req.context)
}
