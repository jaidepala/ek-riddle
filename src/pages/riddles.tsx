import React, { Component } from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import RiddleList from "../components/riddle-list";

class Riddles extends Component {



    render() {

        return (
            <Layout>
                <SEO title="All Riddles" />
                
                
                <div id="pattern" className="pattern">
                    <ul className="list img-list">
                        {
                            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(thisList => (
                                <RiddleList key={thisList} />
                            ))
                        }
                    </ul>
                </div>
            </Layout>
        );
    };
};

export default Riddles;
