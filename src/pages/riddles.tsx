import React, { Component } from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import RiddleList from "../components/riddle-list";

class Riddles extends Component {

    render() {

        const riddleList = [
            {
                img: 'seven-candles.jpg',
                name: '7 Candles',
                link: '/seven-candles',
                id: 1,
                desc: 'Simply solve this riddle by blowing out 7 candles.'
            },
            // {
            //     img: 'https://i.imgur.com/Z6O3kcC.jpeg',
            //     name: 'Random Riddle',
            //     link: '/contact',
            //     id: 2,
            //     desc: 'afw f weaf we fwea ewf wefwefweonono'
            // },
            // {
            //     img: 'https://i.imgur.com/Krf8Azc.jpeg',
            //     name: 'Avengers Level Threat',
            //     link: '/contact',
            //     id: 2,
            //     desc: 'efewf ewnflewk;owkeaifo wafwae fwefn weio'
            // }
        ];

        return (
            <Layout>
                <SEO title="All Riddles" />
                
                
                <div id="pattern" className="pattern">
                    <ul className="list img-list">
                        {
                            riddleList.map(thisList => (
                                <RiddleList key={thisList.id} riddle={thisList} />
                            ))
                        }
                    </ul>
                </div>
            </Layout>
        );
    };
};

export default Riddles;
