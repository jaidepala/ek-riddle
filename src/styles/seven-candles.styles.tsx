import styled, { keyframes } from "styled-components";

const FlameOrbitInner = keyframes`
    0% {
        transform: rotate(0deg) translateX(-7px) rotate(0deg);
    }
    100% {
        transform: rotate(360deg) translateX(-7px) rotate(-360deg);
    }
`;

const FlameOrbitOuter = keyframes`
    0% {
        transform: rotate(0deg) translateX(-10px) rotate(0deg);
    }
    100% {
        transform: rotate(360deg) translateX(-10px) rotate(-360deg);
    }
`;

const FlameOrbitShadow = keyframes`
    0% {
        transform: rotate(0deg) translateX(23.3333333333px) rotate(0deg);
    }
    100% {
        transform: rotate(360deg) translateX(23.3333333333px) rotate(-360deg);
    }
`;

const FlameOrbitGlow = keyframes`

    @media only screen and (min-width: 421px) {
        0% {
            width: 280px;
            transform: rotate(0deg) translateX(10px) rotate(0deg);
        }
        100% {
            width: 280px;
            transform: rotate(360deg) translateX(10px) rotate(-360deg);
        }
    }
    @media only screen and (max-width: 420px) {
        0% {
            width: 115px;
            transform: rotate(0deg) translateX(10px) rotate(0deg);
        }
        100% {
            width: 115px;
            transform: rotate(360deg) translateX(10px) rotate(-360deg);
        }
    }
`;

export const RiddleWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 50px;
    background: #2f4f4f;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    overflow: hidden;
    z-index: 1;
`;

export const SevenCandlesGlow = styled.div`

    z-index: 6;
    position: absolute;
    top: -25px;
    left: -25px;
    background: rgba(255, 244, 187, 0.12);
    border-radius: 50%;
    opacity: 0;
    animation: ${FlameOrbitGlow} 16s cubic-bezier(0.36, 0.07, 0.19, 0.97) infinite;
    animation-delay: inherit;
    transition: opacity 2s cubic-bezier(0.36, 0.07, 0.19, 0.97);
`;

export const SevenCandlesShadow = styled.div`

    z-index: 6;
    position: absolute;
    background: rgba(255, 244, 187, 0.12);
    border-radius: 50%;
    opacity: 0;
    animation: ${FlameOrbitShadow} 16s cubic-bezier(0.36, 0.07, 0.19, 0.97)
      infinite;
    animation-delay: inherit;
    transition: opacity 2s cubic-bezier(0.36, 0.07, 0.19, 0.97);

    @media only screen and (min-width: 421px) {
        top: -25px;
        left: -25px;
    }
    @media only screen and (max-width: 420px) {
        top: -15px;
        left: -15px;
    }
`;

export const SevenCandlesInner = styled.div`
    position: absolute;
    top: 10.5px;
    left: 10.5px;
    background: rgba(231, 99, 0, 0.57);
    border-radius: 50%;
    opacity: 0;
    transition: opacity 2s cubic-bezier(0.36, 0.07, 0.19, 0.97);
    animation: ${FlameOrbitInner} 16s cubic-bezier(0.36, 0.07, 0.19, 0.97)
      infinite;
    animation-delay: inherit;
`;

export const SevenCandlesOuter = styled.div`
    width: 63px;
    height: 63px;
    position: absolute;
    top: 3.5px;
    left: 3.5px;
    background: rgba(255, 185, 23, 0.8);
    border-radius: 50%;
    opacity: 0;
    transition: opacity 2s cubic-bezier(0.36, 0.07, 0.19, 0.97);
    animation: ${FlameOrbitOuter} 16s cubic-bezier(0.36, 0.07, 0.19, 0.97) infinite;
    animation-delay: inherit;
`;

export const RiddleCandle = styled.div`
    border-radius: 50%;
    background: #fffaf0;

    &.candle--is-lit ${SevenCandlesGlow} {
        
        width: 115px;
        height: 115px;
        opacity: 1;
    }
    &.candle--is-lit ${SevenCandlesShadow} {
        width: 84px;
        height: 84px;
        opacity: 1;
    }
    &.candle--is-lit ${SevenCandlesInner} {
        width: 49px;
        height: 49px;
        opacity: 1;
    }
    &.candle--is-lit ${SevenCandlesOuter} {
        width: 63px;
        height: 63px;
        opacity: 1;
    }
`;

export const RiddleCandleContainer = styled.div`
    position: relative;
    width: 400px;
    height: 400px;
    padding: 0;
    border-radius: 50%;
    list-style: none;

    & > * {
        display: block;
        position: absolute;
        top: 50%;
        left: 50%;
        width: 70px;
        height: 70px;
        margin: -35px;
    }

    @media only screen and (min-width: 421px) {
        ${RiddleCandle}:nth-of-type(1) {
            transform: rotate(0deg) translate(200px) rotate(0deg);
        }
        ${RiddleCandle}:nth-of-type(2) {
            transform: rotate(51.4285714286deg) translate(200px)
            rotate(-51.4285714286deg);
        }
        ${RiddleCandle}:nth-of-type(3) {
            transform: rotate(102.8571428571deg) translate(200px)
            rotate(-102.8571428571deg);
        }
        ${RiddleCandle}:nth-of-type(4) {
            transform: rotate(154.2857142857deg) translate(200px)
            rotate(-154.2857142857deg);
        }
        ${RiddleCandle}:nth-of-type(5) {
            transform: rotate(205.7142857143deg) translate(200px)
            rotate(-205.7142857143deg);
        }
        ${RiddleCandle}:nth-of-type(6) {
            transform: rotate(257.1428571429deg) translate(200px)
            rotate(-257.1428571429deg);
        }
        ${RiddleCandle}:nth-of-type(7) {
            transform: rotate(308.5714285714deg) translate(200px)
            rotate(-308.5714285714deg);
        }
    }

    @media only screen and (max-width: 420px) {
        ${RiddleCandle}:nth-of-type(1) {
            transform: rotate(0deg) translate(150px) rotate(0deg);  
        }
        ${RiddleCandle}:nth-of-type(2) {
            transform: rotate(51.4285714286deg) translate(150px) rotate(-51.4285714286deg);
        }
        ${RiddleCandle}:nth-of-type(3) {
            transform: rotate(102.8571428571deg) translate(150px) rotate(-102.8571428571deg);
        }
        ${RiddleCandle}:nth-of-type(4) {
            transform: rotate(154.2857142857deg) translate(150px) rotate(-154.2857142857deg);
        }
        ${RiddleCandle}:nth-of-type(5) {
            transform: rotate(205.7142857143deg) translate(150px) rotate(-205.7142857143deg);
        }
        ${RiddleCandle}:nth-of-type(6) {
            transform: rotate(257.1428571429deg) translate(150px) rotate(-257.1428571429deg);
        }
        ${RiddleCandle}:nth-of-type(7) {
            transform: rotate(308.5714285714deg) translate(150px) rotate(-308.5714285714deg);
        }
    }
`;

export const RiddleCandleCounter = styled.div`
    position: absolute;
    top: 100vh;
    color: rgba(255,185,23,0.8);
    font-size: 33px;
    right: 50px;
`;

/* 
    !   REF
    *   
    *   Relight Button
    *   
    *   
*/

export const SevenCandlesButton = styled.div`
    min-height: 44px;
    min-width: 44px;
    padding: auto;
`;

export const SevenCandlesRelightButton = styled.div`

    
    text-decoration: none;
    position: absolute;
    font-family: sans-serif;
    text-transform: uppercase;
    color: rgba(255, 185, 23, 0.8);

    &:hover {
        opacity: 0.5;
    }

    &.btn {
        min-height: 44px;
        min-width: 44px;
        padding: auto;
    }
`;

/* 
    !   REF
    *   
    *   Instructions
    *   
    *   
*/

export const SevenCandlesInstructions = styled.div`
    position: absolute;
    top: calc(100vh + 50px);
    bottom: auto;
    width: 100vw;
    padding: 10px 50px 50px;
    background: rgba(0,0,0,1.4);
    box-sizing: border-box;
    color: #fff;
    text-align: center;
`;

export const SevenCandlesInstructionsShowing = styled.div`
    top: initial;
    bottom: 0;
`;

export const SevenCandlesInstructionsToggle = styled.div`
    text-decoration: none;
    color: inherit;
    font-family: sans-serif;
    font-weight: 100;
    font-size: 1.5em;

    &.btn {
        min-height: 44px;
        min-width: 44px;
        padding: auto;
    }
`;

export const SevenCandlesInstructionsContent = styled.div`
    font-family: sans-serif;
    font-weight: 100;
    font-size: 1.2em;
`;

export const SevenCandlesInstructionsLink = styled.a`

    color: inherit;

    &:visited {
        color: inherit;
    }

    &:hover {
        color: blue;
    }
`;