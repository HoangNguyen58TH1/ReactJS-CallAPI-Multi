import React, { Component } from 'react';
import ItemTable from './ItemTable'

const arr= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default class Table extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="text-center">Users List</h1>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>1st_count:</th>
              <th>2nd_count:</th>
              <th>3rd_count:</th>
            </tr>
          </thead>
          {
            // arr.map((data, index) => (
            //   <ItemTable data={data} key={index} />
            // ))
          }
        </table>
      </div>
    );
  }
}
