/* 
    !   REF
    *   
    *   https://codepen.io/soulrider911/pen/dGuEn
*/
// import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

import { RiddleHeader, RiddleHeaderH1, RiddleHeaderNav, RiddleHeaderLink } from "../styles/header.styles";

const Header = ({ siteTitle }) => {

    const isRouteActive = (match, location) => {

        if(!match)
            return false;

        console.log('match.params', match)
    };

    return (
        <RiddleHeader>
            <RiddleHeaderH1>
                { siteTitle }
            </RiddleHeaderH1>
            <RiddleHeaderNav>
                <RiddleHeaderLink to="/" isActive={isRouteActive}>
                    Home
                </RiddleHeaderLink>
                <RiddleHeaderLink to="/about" isActive={isRouteActive}>
                    About
                </RiddleHeaderLink>
                <RiddleHeaderLink to="/riddles" isActive={isRouteActive}>
                    Riddles
                </RiddleHeaderLink>
                <RiddleHeaderLink to="/contact" isActive={isRouteActive}>
                    Contact
                </RiddleHeaderLink>
            </RiddleHeaderNav>
        </RiddleHeader>
    );
};

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
