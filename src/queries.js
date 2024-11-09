const { adminGraphQL } = require('./api')
const { formatProductResponse } = require('./format')

/**
 * Retrieves products with search query
 * @param {string} search string to search title for
 * @returns {object[]}
 */
const searchProducts = async (search = '') => {
  const queryString = search ? `"title:*${search}*"` : '""'
  const query = `{
    products (first: 10, query: ${queryString}) {
      edges {
        node {
          id
          title
          variants (first: 20) {
            edges {
              node {
                title
                price
              }
            }
          }
        }
      }
    }
  }`

  const response = await adminGraphQL({ query })
  const result = response
    ? formatProductResponse(response)
    : []

  return result
}

module.exports = { searchProducts }
