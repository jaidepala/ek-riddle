/* 
    !   REF
    *   
    *   https://codepen.io/bradfrost/pen/evwgx
    *   
    *   
*/
import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import Image from '../components/image';

const StyledLink = (props) => {

    const { className, children, to } = props;

    return (
        <Link className={className} to={to}>
            {children}
        </Link>
    );
};
const StyledImage = (props) => {

    const { className, children } = props;

    return (
        <img className={className}>
            {children}
        </img>
    );
};

export const RiddleListLi = styled.li`
    border-bottom: 1px solid #ccc;
    display: table;
    border-collapse: collapse;
    text-decoration: none;
    width: 100%;
    color: #fff;

    @media all and (min-width: 45em) {
        float: left;
        width: 50%;
    }

    @media all and (min-width: 75em) {
        width: 33.33333%;
    }
`;

export const RiddleListLink = styled(StyledLink)`

    text-decoration: none;

    &:hover, &:visited {
        text-decoration: none;
    }
`;

export const RiddleListInner = styled.div`
    display: table-row;
    overflow: hidden;
`;

export const RiddleListImgContainer = styled.div`
    display: table-cell;
    vertical-align: middle;
    width: 30%;
    padding-right: 1em;
`;

export const RiddleListImg = styled.div`
    display: block;
    width: 100px;
    height: 100px;
    background-position: center center;
    background-repeat: no-repeat;

    & > img  {

        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
    }
`;

export const RiddleListText = styled.div`
    display: block;
    width: 100%;
    height: auto;
`;

export const RiddleListTextHead = styled.h4`
    color: #fff;
    margin: 0;
    line-height: 1.4;
    padding: 0.2rem;
    font-size: x-large;
`;
    
export const RiddleListTextSubHead = styled.p`
    margin: 0;
`;
    
export const RiddleListDate = styled.p`
    margin: 0;
`;
