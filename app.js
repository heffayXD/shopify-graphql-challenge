const { program } = require('commander')
const { searchProducts } = require('./src/queries')

program
  .option('-name <value>')
  .parse(process.argv)

// Init
const init = async () => {
  const { Name: name = '' } = program.opts()
  const products = await searchProducts(name)

  // Loop through products, sort variants by price, and print text
  products.forEach(product => {
    product.variants.sort(
      (a, b) => a.price - b.price
    ).forEach(variant => {
      console.log(`${product.title} - ${variant.title} - $${variant.price}`)
    })
  })
}

init()
