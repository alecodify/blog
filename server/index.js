import express from "express"
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World! this is backend of Blog website.'))
app.listen(port, () => console.log(`Server is listening on port http://localhost:${port}`))