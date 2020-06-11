const exprss = require('express')
const path = require('path')
const app = exprss()
app.use(exprss.static(path.join(__dirname, 'dist')))
app.listen(3000, () => {
    console.log('Vue spa listening on port 3000.')
})
