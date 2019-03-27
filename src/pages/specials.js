import { graphql, Link } from "gatsby"
import React from "react"
import { Layout } from "../layouts"

const specialsPage = ({ data, pageContext }) => {
  const { tags } = pageContext
  const specials = data.allMarkdownRemark.edges
  return (
    <Layout>
      <ul>
        {tags.map((tagName, index) => {
          return (
            <li key={index}>
              <Link to={`/tags/${tagName}`}>{tagName}</Link>
            </li>
          )
        })}
      </ul>
      {specials.map(({ node }) => {
        const { size, serial, style } = node.frontmatter
        return <h1 key={node.id}>{size}</h1>
      })}
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro deleniti
        delectus aliquid aspernatur atque veritatis fuga harum, consequatur qui
        nulla maxime aperiam aliquam eaque dignissimos laborum, iusto est
        molestiae mollitia consectetur? Temporibus a omnis molestias vero
        possimus aspernatur quaerat magnam voluptate magni, ipsam officiis,
        consectetur eaque, aut cupiditate architecto. Quae, perspiciatis
        officiis nostrum exercitationem iste incidunt doloremque amet sed? Ipsa
        architecto consequuntur nesciunt totam omnis officiis quibusdam? Laborum
        culpa sequi voluptates quia dicta neque deserunt animi nemo voluptate
        itaque corrupti sed, doloribus voluptatem repellat maxime nesciunt nobis
        omnis dolore, laudantium provident consequuntur fuga labore numquam.
        Officiis doloremque nihil tenetur eius excepturi repellendus eaque
        tempora, ipsa assumenda perspiciatis magnam laboriosam natus qui libero
        voluptatem a, eligendi nemo expedita suscipit nostrum ducimus vero.
        Mollitia earum pariatur voluptate animi blanditiis cupiditate vero sequi
        expedita, quod impedit aliquid laborum fugit, corrupti doloribus,
        inventore quaerat deserunt sint. Deleniti, non dolorem. Soluta repellat
        quis quisquam eum asperiores magni, iste suscipit delectus nam quae
        possimus quaerat saepe sed et labore modi ea eaque illum a dignissimos?
        Distinctio obcaecati quas quasi cum dolorem soluta! Voluptatum
        explicabo, dolorum soluta deserunt maiores possimus dignissimos debitis
        sequi dolores quod natus, facilis commodi fugit modi reiciendis iure eum
        odio expedita. Nisi voluptatibus, facere architecto assumenda aperiam
        aut velit nam explicabo aliquid quasi sapiente adipisci fugit voluptates
        sed aspernatur debitis exercitationem hic suscipit quis deserunt
        dignissimos. Assumenda at eius voluptas possimus ipsa pariatur
        similique! Neque atque consequuntur cupiditate, est suscipit sint omnis
        sequi consequatur molestias quam aut, rem aliquam repudiandae nesciunt,
        nulla aperiam velit porro? Temporibus nostrum blanditiis libero fugiat
        expedita incidunt, ratione nesciunt, ea, architecto asperiores quas
        possimus maiores illo? Dolore unde non animi? Recusandae labore
        temporibus odio similique minus facere possimus natus hic nesciunt,
        repellendus blanditiis? Optio ullam architecto deserunt, consectetur
        reprehenderit, repellendus ratione at, exercitationem voluptas alias
        nihil corrupti accusantium!
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro deleniti
        delectus aliquid aspernatur atque veritatis fuga harum, consequatur qui
        nulla maxime aperiam aliquam eaque dignissimos laborum, iusto est
        molestiae mollitia consectetur? Temporibus a omnis molestias vero
        possimus aspernatur quaerat magnam voluptate magni, ipsam officiis,
        consectetur eaque, aut cupiditate architecto. Quae, perspiciatis
        officiis nostrum exercitationem iste incidunt doloremque amet sed? Ipsa
        architecto consequuntur nesciunt totam omnis officiis quibusdam? Laborum
        culpa sequi voluptates quia dicta neque deserunt animi nemo voluptate
        itaque corrupti sed, doloribus voluptatem repellat maxime nesciunt nobis
        omnis dolore, laudantium provident consequuntur fuga labore numquam.
        Officiis doloremque nihil tenetur eius excepturi repellendus eaque
        tempora, ipsa assumenda perspiciatis magnam laboriosam natus qui libero
        voluptatem a, eligendi nemo expedita suscipit nostrum ducimus vero.
        Mollitia earum pariatur voluptate animi blanditiis cupiditate vero sequi
        expedita, quod impedit aliquid laborum fugit, corrupti doloribus,
        inventore quaerat deserunt sint. Deleniti, non dolorem. Soluta repellat
        quis quisquam eum asperiores magni, iste suscipit delectus nam quae
        possimus quaerat saepe sed et labore modi ea eaque illum a dignissimos?
        Distinctio obcaecati quas quasi cum dolorem soluta! Voluptatum
        explicabo, dolorum soluta deserunt maiores possimus dignissimos debitis
        sequi dolores quod natus, facilis commodi fugit modi reiciendis iure eum
        odio expedita. Nisi voluptatibus, facere architecto assumenda aperiam
        aut velit nam explicabo aliquid quasi sapiente adipisci fugit voluptates
        sed aspernatur debitis exercitationem hic suscipit quis deserunt
        dignissimos. Assumenda at eius voluptas possimus ipsa pariatur
        similique! Neque atque consequuntur cupiditate, est suscipit sint omnis
        sequi consequatur molestias quam aut, rem aliquam repudiandae nesciunt,
        nulla aperiam velit porro? Temporibus nostrum blanditiis libero fugiat
        expedita incidunt, ratione nesciunt, ea, architecto asperiores quas
        possimus maiores illo? Dolore unde non animi? Recusandae labore
        temporibus odio similique minus facere possimus natus hic nesciunt,
        repellendus blanditiis? Optio ullam architecto deserunt, consectetur
        reprehenderit, repellendus ratione at, exercitationem voluptas alias
        nihil corrupti accusantium!
      </div>
    </Layout>
  )
}

export default specialsPage
export const allSpecialsQuery = graphql`
  query allSpecials {
    allMarkdownRemark(
      sort: { fields: [frontmatter___size], order: ASC }
      filter: { frontmatter: { template: { eq: "product" } } }
      limit: 1000
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            serial
            size
            style
          }
        }
      }
    }
  }
`
