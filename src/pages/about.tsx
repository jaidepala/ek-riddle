import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import { AboutHeader, AboutParagraph } from "../styles/about.styles";

const About = () => {

    return (
        <Layout>
            <SEO title="About" />
            <section>
                <AboutHeader>
                    About <i>Ek Riddle</i>.
                </AboutHeader>
                <AboutParagraph>
                    It all started in 2018, working in a 9-5 job, bored out of my mind, and no work to do (ofcourse my managers didn't know that).  So I started looking things to do, fun sites to visit, and not "those" fun sites, came across a site that has puzzles and riddles lots of them. 
                    <br />
                    Once you start solving one, you want to solve more and more, until it became a group activity, and yes alot of colleagues were involved. But most of them were QnA riddles, meaning it's just text on a site, and you don't really interact with it alot, so I thought why not have some element which someone can and have mind boggling riddles.
                    <br />
                    ...and ek riddle was born, 2 years later. That's alot of time, but hey never too late to being, right?
                </AboutParagraph>
            </section>
        </Layout>
    );
};

export default About;
