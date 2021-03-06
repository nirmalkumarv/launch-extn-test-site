import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = () => (
  <Layout>
    <h1>Adobe Launch Extension</h1>
    <p>Demo Page for SCI Toolkit </p>
   
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
    
    </div>

    <button className="registration:start" data-type="registration:start" > Registration Started Demo</button>
    <button   className="registration:complete" data-type="registration:complete" >Registration Completed</button>
    <button  className="login:start" data-type="login:start" >Login Started</button>
    <button  className="login:complete" data-type="login:complete" >Login Completed</button>

   <br/><br/>

<p>
    
    
    <a href="/page-1" className="links">Product Store Page </a>  | <a className="links" href="/page-2">NewsLetter  Page </a>
    </p>


  </Layout>
)

export default IndexPage
