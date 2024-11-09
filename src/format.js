/**
 * Formats a product response from the GraphQL API to be more usable
 * @param {object} response response from Admin GraphQL API
 * @returns {object[]}
 */
const formatProductResponse = (response) => {
  return response.products.edges.reduce((productMemo, { node: productNode }) => {
    const variants = productNode.variants.edges.map(
      ({ node: variantNode }) => variantNode
    )

    productMemo.push({
      ...productNode,
      variants
    })
  
    return productMemo
  }, [])
}

module.exports = { formatProductResponse }
