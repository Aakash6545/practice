const express = require('express');
const { products, people } = require('./data.js'); // Importing data from data.js
const app = express();
const PORT = 5000;

app.use(express.static('./public'))
// API endpoint to get products
app.get('/api/products', (req, res) => {
  res.json(products);  // Sends the products as a JSON response
});

// API endpoint to get people
app.get('/api/people', (req, res) => {
  res.json(people);  // Sends the people as a JSON response
});

app.get('/api/product/:Id',(req,res)=>{
  const {Id} = req.params;
  const singleProduct = products.find((product)=>{
    return product.id === Number(Id);
  })
  

  if (!singleProduct) {
    // If the product is not found, return a 404 error
    return res.status(404).json({ error: 'Product not found' });
  }

  console.log(singleProduct)
  res.json(singleProduct)
})

app.get('/api/v1/query',(req,res)=>{
  const {search,limit} = req.query;
  let sortedProducts = [...products];
  if(search){
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search);
    })
    if(sortedProducts.length >0){
      res.status(200).json(sortedProducts)

    }
    else{
      res.send("NO Products Found");
    }
  }
  else{
    res.status(200).json(sortedProducts)
  }
  
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
