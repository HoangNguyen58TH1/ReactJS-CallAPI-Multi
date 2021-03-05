import React, { Component } from 'react';
import axios from 'axios';

export default class ItemTable extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
      isLoading: true
    }
  }

  async componentDidMount() {
    // console.log('---this.props.data', this.props.data);
    axios.get(`https://jsonplaceholder.typicode.com/users?id=${this.props.data}`)
    .then(res => {
      // console.log('---isLoading1', this.state.isLoading);
      this.setState( {
        user: res.data[0],
        isLoading: false
      });
      // console.log('---isLoading2', this.state.isLoading);
      // console.log('---res.data[this.props.data]', res.data[0]);
    })
  }

  renderItem() {
    return (
      <tr>
        <td>{this.props.data}</td>
        <td>{this.state.user.name}</td>
        <td>{this.state.user.email}</td>
        <td>{this.state.user.id}</td>
      </tr>
    )
  }

  render() {
    return (
      <tbody>
        { !this.state.isLoading && this.renderItem() }
      </tbody>
    )
  }
}
