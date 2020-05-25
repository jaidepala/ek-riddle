import React, { Component } from 'react';

/* 
    !   REF for Helmet
    *   
    *   https://codesandbox.io/s/l9qmrwxqzq?file=/src/index.js:60-99
    *   
*/
import { Helmet } from "react-helmet";

import Layout from "../components/layout";
import SEO from "../components/seo";
// import { SevenCandlesWrapper } from './seven.candles.styles';
import { RiddleWrapper, RiddleCandle, RiddleCandleContainer, SevenCandlesGlow, SevenCandlesShadow, SevenCandlesInner, SevenCandlesOuter, RiddleCandleCounter } from "../styles/seven-candles.styles";

import { SevenCandlesInstructions, SevenCandlesInstructionsContent, SevenCandlesInstructionsToggle, SevenCandlesInstructionsLink, SevenCandlesRelightButton, SevenCandlesButton } from "../styles/seven-candles.styles";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import util from "../services/util.service";

const MySwal = withReactContent(Swal);

class SecenCandlesComponent extends Component {

    constructor(props) {
        
        super(props);

        this.state = {
            count: 0,
            list: [
                { candleNo: 1, active: true },
                { candleNo: 2, active: true },
                { candleNo: 3, active: true },
                { candleNo: 4, active: true },
                { candleNo: 5, active: true },
                { candleNo: 6, active: true },
                { candleNo: 7, active: true },
            ]
        };
    };

    toggleLit = (theCandle, isAdjacent) => {
        
        let { list, count } = this.state,
            listIndex = -1;

        theCandle.active = (theCandle.active) ? false : true;

        list.map((theList, theListIndex) => {

            if (theList.candleNo === theCandle.candleNo) {
                theList = theCandle;
                listIndex = theListIndex
            }
        });
        
        this.setState({
            list: list
        });

        if(isAdjacent)
        {
            this.setState({
                count: count + 1
            });
        }

        if (isAdjacent && listIndex > -1) 
        {
            let adjacentCandles = [];

            if (listIndex === 0) {
                adjacentCandles.push(list[list.length - 1], list[listIndex + 1]);
            }
            else if (listIndex === (list.length - 1)) {
                adjacentCandles.push(list[list.length - 2], list[0]);
            }
            else {
                adjacentCandles.push(list[listIndex - 1], list[listIndex + 1]);
            }

            this.toggleAdjacent(adjacentCandles);
        }
    };

    toggleAdjacent(adjacentCandles) {

        adjacentCandles.map(thisCandle => {
            this.toggleLit(thisCandle, false);
        });
    };

    checkIfDone = () => {

        let won = true, 
            { list } = this.state;

        list.map((thisList) => {

            if(thisList.active) 
                won = false;
        });

        return won;
    };

    litEveryone = () => {

        this.setState({
            count: 0
        });

        let { list } = this.state;

        list.map((thisList) => {

            thisList.active = false;

            this.toggleLit(thisList, false);
        });
    };

    render() {

        let { list, count } = this.state,
            riddleCompleted = this.checkIfDone();

        if(riddleCompleted)
        {
            MySwal.fire({
                title: "Congratulations!!",
                text: "You solved in "+ count + " steps.",
                icon: "success",
                showCloseButton: true,
                showCancelButton: true,
                focusConfirm: false,
                confirmButtonText: 'Challenge Friends!',
                confirmButtonAriaLabel: 'Thumbs up, great!',
                cancelButtonText: 'No, Thanks!'
            }).then((result) => {
                if(result.value)
                {
                    util.shareDialog({
                        text: "Hey! I was able to solve the 7 candles riddle in " + count + " steps.\n\nCan you solve it fewer steps?",
                        url: window.document.querySelector('link[rel=canonical]') ? (window.document.querySelector('link[rel=canonical]') && window.document.querySelector('link[rel=canonical]').href) : window.document.location.href,
                        dialog: {
                            score: count
                        }
                    });
                } 
            });
        }

        return (
            <Layout>
                <SEO title="Seven Candles" />
                {/* <Helmet>
                    <script
                        src="libs/confetti.js"
                    />
                </Helmet> */}
                <RiddleWrapper>
                    <RiddleCandleContainer>
                        {
                            list.map(thisList => (
                                <RiddleCandle key={thisList.candleNo} onClick={() => this.toggleLit(thisList, true)} className={(thisList.active ? "candle--is-lit" : "")}>
                                    <SevenCandlesGlow />
                                    <SevenCandlesShadow />
                                    <SevenCandlesOuter />
                                    <SevenCandlesInner />
                                </RiddleCandle>
                            ))
                        }
                    </RiddleCandleContainer>
                    
                    <SevenCandlesRelightButton className="btn" onClick={this.litEveryone}>
                        🔥 Relight  
                    </SevenCandlesRelightButton>

                    <RiddleCandleCounter>
                        No. of steps: { count }
                    </RiddleCandleCounter>
                    <SevenCandlesInstructions>
                        <SevenCandlesInstructionsToggle className="btn" href="#">
                            Instructions
                        </SevenCandlesInstructionsToggle>
                        
                        <SevenCandlesInstructionsContent>
                            This is a javascript implementation of 
                            <SevenCandlesInstructionsLink href="http://www.popularmechanics.com/science/math/a26818/riddle-of-the-week-30-seven-candles/?src=nl&mag=pop&list=nl_pnl_news&date=061017">
                                
                                Popular Mechanics Riddle of the Week #30
                            </SevenCandlesInstructionsLink>.
                        </SevenCandlesInstructionsContent>
                        <SevenCandlesInstructionsContent>
                            You're in a room (belonging to Cthulu 🐙, as it were) with seven candles in a circle, on a table, in the middle of the room. The goal is to blow out all candles in the least number of moves.
                        </SevenCandlesInstructionsContent>
                        <SevenCandlesInstructionsContent>
                            When you blow out one candle in the circle, the two adjacent candles are extinguished as well. If you blow on a candle that has already been extinguished, it will relight. And if there is an extinguished candle next to the one you blow on, it also will relight.
                        </SevenCandlesInstructionsContent>
                        <SevenCandlesInstructionsContent>
                            To put it another way: When you blow on a candle, it—as well as the candles on either side—will change from lit to unlit, or vice versa.
                        </SevenCandlesInstructionsContent>
                    </SevenCandlesInstructions>
                </RiddleWrapper>
            </Layout>
        );
    }
}

export default SecenCandlesComponent;
