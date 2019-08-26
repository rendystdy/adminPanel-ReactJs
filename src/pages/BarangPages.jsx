import React, { Component } from 'react';
import DataBarang from '../components/DataBarang';
import { Link } from 'react-router-dom';
// import AddBarang from './AddBarang';

class BlogPages extends Component {
  render() {
    return (
      <>
        <h1 className='text-dark'>DATA BARANG</h1>
        {/* <button className='btn btn-success'>ADD</button> */}
        <Link to='/add-barang/' className='btn btn-warning'>
          add
        </Link>
        <hr />
        <DataBarang />
      </>
    );
  }
}

export default BlogPages;
