console.log("Hello world server")
import express from 'express'
const app = express()

app.get('/', (req, res) => {
    console.log('Hello World bilal!', new Date())
    res.send('Hello World bilal!' + new Date())
})

const PORT = process.env.port || 3000
app.listen(PORT, () => {
    console.log(`Example server listening on port ${port}`)
})