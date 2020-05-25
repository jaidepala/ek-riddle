import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

const IndexPage = () => {

    return (
        <Layout>
            <SEO title="Home" />
            <h1>Hi people</h1>
            <p>Welcome to your new Gatsby site.</p>
            <p>Now go build something great.</p>
            <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
                <Image />
            </div>
            <Link to="/page-2/">Go to page 2</Link>
            <section id='steezy'>
                <h2> This is some steezy stuff</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum enim sunt delectus, reiciendis omnis laudantium animi, et nulla quidem, aliquam aliquid. A consectetur deleniti voluptates eius neque, voluptate voluptatibus nostrum! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex libero cupiditate deserunt earum, fuga, ab labore esse animi, nihil est tenetur non delectus perferendis. Maxime accusamus ea rem sint at!</p>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum enim sunt delectus, reiciendis omnis laudantium animi, et nulla quidem, aliquam aliquid. A consectetur deleniti voluptates eius neque, voluptate voluptatibus nostrum! Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ut aspernatur omnis neque iusto. Veritatis rem ad atque optio perferendis. Dolorum qui consequatur, repellat soluta impedit porro totam molestiae sit.</p>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum enim sunt delectus, reiciendis omnis laudantium animi, et nulla quidem, aliquam aliquid. A consectetur deleniti voluptates eius neque, voluptate voluptatibus nostrum! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus iusto, omnis quas, rem minus cupiditate, sunt voluptates minima sint nemo ipsa itaque consequatur dolor, quam necessitatibus vitae. Quod, eaque, quam.</p>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum enim sunt delectus, reiciendis omnis laudantium animi, et nulla quidem, aliquam aliquid. A consectetur deleniti voluptates eius neque, voluptate voluptatibus nostrum!</p>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum enim sunt delectus, reiciendis omnis laudantium animi, et nulla quidem, aliquam aliquid. A consectetur deleniti voluptates eius neque, voluptate voluptatibus nostrum!</p>
            </section>

            <section id='real'>
                <h2> Keepin' it real</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum enim sunt delectus, reiciendis omnis laudantium animi, et nulla quidem, aliquam aliquid. A consectetur deleniti voluptates eius neque, voluptate voluptatibus nostrum!</p>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum enim sunt delectus, reiciendis omnis laudantium animi, et nulla quidem, aliquam aliquid. A consectetur deleniti voluptates eius neque, voluptate voluptatibus nostrum!</p>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum enim sunt delectus, reiciendis omnis laudantium animi, et nulla quidem, aliquam aliquid. A consectetur deleniti voluptates eius neque, voluptate voluptatibus nostrum!</p>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum enim sunt delectus, reiciendis omnis laudantium animi, et nulla quidem, aliquam aliquid. A consectetur deleniti voluptates eius neque, voluptate voluptatibus nostrum!</p>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum enim sunt delectus, reiciendis omnis laudantium animi, et nulla quidem, aliquam aliquid. A consectetur deleniti voluptates eius neque, voluptate voluptatibus nostrum!</p>

            </section>

            <section id='big'>
                <h2>Go big, or go home</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum enim sunt delectus, reiciendis omnis laudantium animi, et nulla quidem, aliquam aliquid. A consectetur deleniti voluptates eius neque, voluptate voluptatibus nostrum!</p>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum enim sunt delectus, reiciendis omnis laudantium animi, et nulla quidem, aliquam aliquid. A consectetur deleniti voluptates eius neque, voluptate voluptatibus nostrum!</p>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum enim sunt delectus, reiciendis omnis laudantium animi, et nulla quidem, aliquam aliquid. A consectetur deleniti voluptates eius neque, voluptate voluptatibus nostrum!</p>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum enim sunt delectus, reiciendis omnis laudantium animi, et nulla quidem, aliquam aliquid. A consectetur deleniti voluptates eius neque, voluptate voluptatibus nostrum!</p>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum enim sunt delectus, reiciendis omnis laudantium animi, et nulla quidem, aliquam aliquid. A consectetur deleniti voluptates eius neque, voluptate voluptatibus nostrum!</p>

            </section>
        </Layout>
    );
} 

export default IndexPage
