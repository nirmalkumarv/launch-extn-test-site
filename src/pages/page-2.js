import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const SecondPage = () => (
  <Layout>
    <h1>Cart Page</h1>
    <p>You don't have any items in your cart</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
