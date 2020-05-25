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

const StyledLink = (props) => {

    const { className, children, to } = props;

    return (
        <Link className={className} to={to}>
            {children}
        </Link>
    );
};

export const RiddleListLi = styled.li`
    background: url("https://bradfrost.github.com/this-is-responsive/patterns/images/icon_arrow_right.png") no-repeat 97% 50%;
    border-bottom: 1px solid #ccc;
    display: table;
    border-collapse: collapse;
    width: 100%;

    @media all and (min-width: 45em) {
        float: left;
        width: 50%;
    }

    @media all and (min-width: 75em) {
        width: 33.33333%;
    }
`;

export const RiddleListInner = styled(StyledLink)`
    display: table-row;
    overflow: hidden;
`;

export const RiddleListImgContainer = styled.div`
    display: table-cell;
    vertical-align: middle;
    width: 30%;
    padding-right: 1em;
`;

export const RiddleListImg = styled.img`
    display: block;
    width: 100%;
    height: auto;
`;

export const RiddleListText = styled.div`
    display: block;
    width: 100%;
    height: auto;
`;

export const RiddleListTextHead = styled.h4`
    margin: 0;
    line-height: 1.4;
    padding: 0.2rem;
`;
    
export const RiddleListTextSubHead = styled.p`
    margin: 0;
`;
    
export const RiddleListDate = styled.p`
    margin: 0;
`;
