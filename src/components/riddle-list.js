import React from "react";

import { RiddleListLi, RiddleListInner, RiddleListImgContainer, RiddleListImg, RiddleListText, RiddleListTextHead, RiddleListTextSubHead, RiddleListDate } from "../styles/riddle-list";

const RiddleList = () => {

    return (
        <RiddleListLi>
            <RiddleListInner to="/seven-candles">
                <RiddleListImgContainer>
                    <RiddleListImg src="https://bradfrost.github.com/this-is-responsive/patterns/images/fpo_square.png" alt="Image Alt Text" />
                </RiddleListImgContainer>
                <RiddleListText>
                    <RiddleListTextHead>Title of Content</RiddleListTextHead>
                    <RiddleListTextSubHead>Summary of content</RiddleListTextSubHead>
                    <RiddleListDate>25th May, 2020</RiddleListDate>
                </RiddleListText>
            </RiddleListInner>
        </RiddleListLi>
    );
};

export default RiddleList;
