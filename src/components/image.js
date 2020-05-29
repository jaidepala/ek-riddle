import React from "react"
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image"

/*
    !   REF

    * This component is built using `gatsby-image` to automatically serve optimized
    * images with lazy loading and reduced file sizes. The image is loaded using a
    * `useStaticQuery`, which allows us to load the image from directly within this
    * component, rather than having to pass the image data down from pages.
    *
    * For more information, see the docs:
    * - `gatsby-image`: https://gatsby.dev/gatsby-image
    * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
    * 
    *   Reusable Image Component
    *   https://stackoverflow.com/a/56508865
    * 
*/

// Note: You can change "images" to whatever you'd like.

const Image = props => (
    <StaticQuery
        query={graphql`
            query {
                images: allFile {
                    edges {
                        node {
                            relativePath
                            name
                            childImageSharp {
                                fluid(maxWidth: 600) {
                                ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                }
            }
        `}
        render={data => {
            const image = data.images.edges.find(n => {
                return n.node.relativePath.includes(props.src);
            });
            if (!image) {
                return <img alt={props.alt} src={props.src} />;
            }

            return <Img alt={props.alt} fluid={image.node.childImageSharp.fluid} />;
        }}
    />
);

export default Image;
