import React, { Component } from 'react'

export default class GifSearch extends Component {
  state = {
    query: null
  }
  
  handleInput = (e) => {
    this.setState({
      query: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.fetchGifs(this.state.query)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} >
          <input type="text" value={this.state.query} onChange={this.handleInput} />
        </form>
      </div>
    )
  }
}
