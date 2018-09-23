const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const bodyParser = require('body-parser')
const USERNAME = 'TodoServerServiceAccount'
const PASSWORD = 'Todo@ApplicationTest123'
const sql = require('mssql')

app.use(bodyParser.json())

app.get('/', (req, res) => {
    const getInfo = async () => {
        try {
            await sql.connect('mssql://username:password@localhost/database')
            const result = await sql.query`select * from mytable where id = ${value}`
            console.dir(result)
        } catch (err) {
            // ... error checks
        }
    }
    res.send(JSON.stringify(getInfo))
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`))