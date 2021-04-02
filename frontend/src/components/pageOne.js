import React from 'react'
import { Query } from "react-apollo"
import { getBlocksFeed } from '../queries'

const showGreeting = ({ error, loading, data: { blocksFeed } }) => {
  if (loading) return "Loading..."
  if (error) return `Error! ${error.message}`

  return <p>{blocksFeed.blocks.map((i) => <div>i</div>)}</p>
}

const PageOne = () =>
  <Query query={getBlocksFeed}>
    {showGreeting}
  </Query>

export default PageOne
