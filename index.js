const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const bodyParser = require('body-parser')
const USERNAME = 'TodoServerServiceAccount'
const PASSWORD = 'Todo@ApplicationTest123'
const sql = require('mssql')

app.use(bodyParser.json())

const serverString = `mssql://${USERNAME}:${PASSWORD}@brad-todo-test.database.windows.net/contoso-todo?encrypt=true`
const startSQL = async () => {
    await sql.connect(serverString)
}
startSQL()

app.get('/:id', async (req, res) => {   
    const UUID = req.params.id
    const result = await sql.query`select * from dbo.PrimaryTodo where id=${UUID}`
    res.send(JSON.stringify(result))
})

app.get('/', (req, res) => {
    const getInfo = async () => {
        try {
            const result = await sql.query`select * from dbo.PrimaryTodo`
            res.send(JSON.stringify(result))
        } catch (err) {
            console.log(err)
            res.send(err)
        }
    }
    getInfo()
})

app.put('/:id', (req, res) => {
    const id = req.params.id
})

app.post('/:id', (req, res) => {
    const id = req.params.id
})

app.delete('/:id', (req, res) => {
    const id = req.params.id
})



app.listen(PORT, () => console.log(`Listening on port ${PORT}...`))