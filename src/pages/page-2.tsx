// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = (props: PageProps) => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2 ({props.path})</p>
    <Link to="/">Go back to the homepage</Link>

    <section id="big">
      <h2>Go big, or go home</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum enim
        sunt delectus, reiciendis omnis laudantium animi, et nulla quidem,
        aliquam aliquid. A consectetur deleniti voluptates eius neque, voluptate
        voluptatibus nostrum!
      </p>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum enim
        sunt delectus, reiciendis omnis laudantium animi, et nulla quidem,
        aliquam aliquid. A consectetur deleniti voluptates eius neque, voluptate
        voluptatibus nostrum!
      </p>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum enim
        sunt delectus, reiciendis omnis laudantium animi, et nulla quidem,
        aliquam aliquid. A consectetur deleniti voluptates eius neque, voluptate
        voluptatibus nostrum!
      </p>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum enim
        sunt delectus, reiciendis omnis laudantium animi, et nulla quidem,
        aliquam aliquid. A consectetur deleniti voluptates eius neque, voluptate
        voluptatibus nostrum!
      </p>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum enim
        sunt delectus, reiciendis omnis laudantium animi, et nulla quidem,
        aliquam aliquid. A consectetur deleniti voluptates eius neque, voluptate
        voluptatibus nostrum!
      </p>
    </section>
  </Layout>
)

export default SecondPage
