import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

export const RiddleHeader = styled.header`
    width: 100%;
    height: 300px;
    background-color: #3498db;
    text-align: center;
    position: relative;
    position: fixed;
    top: 0;
    z-index: 1;
    overflow: hidden;
    -moz-transition: all 0.5s ease;
    -o-transition: all 0.5s ease;
    -webkit-transition: all 0.5s ease;
    transition: all 0.5s ease;
`;

export const RiddleHeaderH1 = styled.h1`
    font-size: 42px;
    color: #fff;
    line-height: 230px;
    text-transform: uppercase;
    font-weight: 100;
    -moz-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;
`;

export const RiddleHeaderNav = styled.nav`
    position: absolute;
    bottom: 0;
    height: 60px;
    line-height: 60px;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.1);
`;

const StyledLink = (props) => {

    const { className, children, to, isActive } = props;

    return (
        // <Link className={ className } to={ to } isActive={ isActive }>
        <Link className={ className } to={ to }>
            { children }
        </Link>
    );
};

export const RiddleHeaderLink = styled(StyledLink)`
    color: #fff;
    display: inline-block;
    padding: 10px 15px;
    line-height: 1;
    text-decoration: none;
    -moz-border-radius: 2px;
    -webkit-border-radius: 2px;
    border-radius: 2px;

    &:hover, &.active {
        -moz-box-shadow: 0 0 0 1px #fff;
        -webkit-box-shadow: 0 0 0 1px #fff;
        box-shadow: 0 0 0 1px #fff;
    }
`;
