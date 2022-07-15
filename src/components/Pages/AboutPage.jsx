import React from 'react'
import {Link} from 'react-router-dom'
import Card from '../Shared/Card'

function AboutPage() {
  return (
    <Card>
      <h4>ABOUT</h4>
      <p>This is about page</p>
      <Link to='/'>Back to home Page</Link>
    </Card>
  )
}

export default AboutPage