/**
 * 
 * @param {object} body json body to submit with graphql request
 * @returns {object}
 */
const adminGraphQL = async (body) => {
  const response = await fetch(
    `https://${process.env.SHOPIFY_STORE}.myshopify.com/admin/api/${process.env.ADMIN_VERSION}/graphql.json`,
    {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Access-Token': process.env.ADMIN_TOKEN
      }
    }
  )

  const result = await response.json()
  if (result.errors) {
    console.error(result.errors)
  }

  return result.data || null
}

module.exports = { adminGraphQL }
