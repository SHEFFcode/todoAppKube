const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const bodyParser = require('body-parser')
const USERNAME = 'TodoServerServiceAccount'
const PASSWORD = 'Todo@ApplicationTest123'
const sql = require('mssql')

app.use(bodyParser.json())

app.get('/:id', (req, res) => {
    const id = req.params.id
    console.log(id)
    res.send(id)
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

app.get('/', (req, res) => {
    const getInfo = async () => {
        try {
            console.log('Awaiting connection')
            const serverString = `mssql://${USERNAME}:${PASSWORD}@brad-todo-test.database.windows.net/contoso-todo?encrypt=true`;
            console.log('connecting...');
            console.log(serverString);
            await sql.connect(serverString);
            console.log('Made the connection')
            const result = await sql.query`select * from dbo.PrimaryTodo`
            console.log('Got the result')
            console.log(result)
            res.send(JSON.stringify(result))
        } catch (err) {
            console.log(err)
            res.send(err)
        }
    }
  }
  getInfo()
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`))