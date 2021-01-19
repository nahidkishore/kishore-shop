const express=require('express')
const products=require('./data/products')
const app = express()

app.get('/api/products/:id',(req,res) => {
  const product=products.find((p)=>p._id===req.params.id)
  res.json(product)
})
app.get('/api/products',(req,res) => {
  res.json(products)
})
app.get('/',(req, res) => {
  res.send('<h2>server is running bro</h2>')
})
app.listen(5000,console.log('server running on port 5000'))