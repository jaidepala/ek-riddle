/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header";
import Footer from "./footer";
import "./layout.css";

import { RiddleWrapper } from '../styles/layout.styles';

const Layout = ({ children }) => {

    const scrollingFunction = (eve) => {

        /* 
            !   REF
            *   
            *   https://stackoverflow.com/a/48121419
            * 
            if (window.scrollY === 0 && scrolling === true) {
                setScrolling( false );
            }
            else if (window.scrollY !== 0 && scrolling !== true) {
                setScrolling( true );
            }
        */

        if (window.scrollY > 30)
            window.document.body.className = 'sticky-header';
        else
            window.document.body.className = '';
    };

    useEffect(() => {

        window.addEventListener('scroll', scrollingFunction);
    }, []);
    
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    return (
        <>
            <Header siteTitle={data.site.siteMetadata.title} />
            <div>

                <RiddleWrapper>
                    { children }
                </RiddleWrapper>
                
                {/* <footer>
                    © {new Date().getFullYear()}, Built with
                    {` `}
                    <a href="https://www.gatsbyjs.org">
                        Gatsby
                    </a>
                </footer> */}
                <Footer />
            </div>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
