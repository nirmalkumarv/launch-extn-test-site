import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const SecondPage = () => (
  <Layout>
    <h1>Newsletter Subscription Page</h1>
    <p><a href="#" className="newsLetter">Click to Subscribe our Newsletter</a></p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
