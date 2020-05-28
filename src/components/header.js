/* 
    !   REF
    *   
    *   Styling:
    *   https://codepen.io/soulrider911/pen/dGuEn
    *   
    *   
    *   @React/Router
    *   https://spectrum.chat/gatsby-js/general/get-current-path-in-header-component~05753ea9-29b1-4b51-a3e0-3f9b8d93f178?m=MTU3MDQ2NjI5MzA4Mg==
    *   
    *   
    *   
    *   
*/
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { globalHistory } from "@reach/router";

import { RiddleHeader, RiddleHeaderH1, RiddleHeaderNav, RiddleHeaderLink } from "../styles/header.styles";

const Header = ({ siteTitle, ...otherProps }) => {

    const isRouteActive = (match, location) => {

        if (!match)
            return false;

        console.log('match.params', match)
    };

    const initialState = {
        location: globalHistory.location,
        navigate: globalHistory.navigate,
    };

    const [state, setState] = useState(initialState);

    useEffect(() => {
        const removeListener = globalHistory.listen(params => {
            const { location } = params
            const newState = { ...initialState, location }

            console.log('newState', newState)
            setState(newState)
        })
        return () => {
            removeListener()
        }
    }, []);

    const currentState = state.location.pathname;

    return (
        <RiddleHeader>
            <RiddleHeaderH1>
                {siteTitle}
            </RiddleHeaderH1>
            <RiddleHeaderNav>
                <RiddleHeaderLink to="/" className={(currentState === "/") && 'active'}>
                    Home
                </RiddleHeaderLink>
                <RiddleHeaderLink to="/riddles" className={(currentState === "/riddles") && 'active'}>
                    Riddles
                </RiddleHeaderLink>
                <RiddleHeaderLink to="/about" className={(currentState === "/about") && 'active'}>
                    About
                </RiddleHeaderLink>
                <RiddleHeaderLink to="/contact" className={(currentState === "/contact") && 'active'}>
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

export default Header;
