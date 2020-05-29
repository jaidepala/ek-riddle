import React from "react";

import { RiddleListLi, RiddleListInner, RiddleListImgContainer, RiddleListImg, RiddleListText, RiddleListTextHead, RiddleListTextSubHead, RiddleListDate, RiddleListLink } from "../styles/riddle-list.styles";

import Image from '../components/image';

const RiddleList = ({ riddle }) => {

    const { img, name, link, desc } = riddle;

    return (
        <RiddleListLi>
            <RiddleListInner>
                <RiddleListImgContainer>
                    <RiddleListLink to={link}>
                        <RiddleListImg>
                            <Image alt={name} src={img} />
                        </RiddleListImg>
                    </RiddleListLink>
                </RiddleListImgContainer>
                <RiddleListText>
                    <RiddleListLink to={link}>
                        <RiddleListTextHead>{name}</RiddleListTextHead>
                    </RiddleListLink>
                    <RiddleListTextSubHead>{desc}</RiddleListTextSubHead>
                    {/* <RiddleListDate>25th May, 2020</RiddleListDate> */}
                </RiddleListText>
            </RiddleListInner>
        </RiddleListLi>
    );
};

export default RiddleList;
