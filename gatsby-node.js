/*
    *   Implement Gatsby's Node APIs in this file.
    *
    *   See: https://www.gatsbyjs.org/docs/node-apis/
    *   
    *   The node file will execute the instructions before the application will be built.
    *   This utility makes gatsby so powerful. Before building the application we can create
    *   a query which one will fetch the data from any source we want for example we can get data from
    *   external API or from GraphQL query. When we get resources data we can use one function called
    *   createPages to create static pages with data from an external source.
    *   
    *   In our case we will create pages with prefetched data from our
    *   markdown sources and we use to it GraphQL query to create news with special news template.
    *   
    *   We can do some executives, while Gatsby will create pages.
    *   
    *   Therefore, we can do something before building the application.
    *   
    *   Below is the list with available functions you may use in gatsby-node.js
    *   
    *   createPages
    *   createPagesStatefully
    *   createResolvers
    *   createSchemaCustomization
    *   generateSideEffects
    *   onCreateBabelConfig
    *   onCreateDevServer
    *   onCreateNode
    *   onCreatePage
    *   onCreateWebpackConfig
    *   onPostBootstrap
    *   onPostBuild
    *   onPreBootstrap
    *   onPreBuild
    *   onPreExtractQueries
    *   onPreInit
    *   preprocessSource
    *   resolvableExtensions
    *   setFieldsOnGraphQLNodeType
    *   sourceNodes
*/

// You can delete this file if you're not using it
exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
    const pokemons = [
        { name: "Pikachu", type: "electric" },
        { name: "Squirtle", type: "water" },
    ]
    pokemons.forEach(pokemon => {
        const node = {
            name: pokemon.name,
            type: pokemon.type,
            id: createNodeId(`Pokemon-${pokemon.name}`),
            internal: {
                type: "Pokemon",
                contentDigest: createContentDigest(pokemon),
            },
        }
        actions.createNode(node)
    })
}