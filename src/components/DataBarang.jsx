import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import API from '../Services';

class DataBarang extends Component {
  state = {
    users: [],
    post: [],
    barangs: []
  };

  componentDidMount() {
    this.getBarangs();
  }

  getBarangs = () => {
    API.GetBarangs().then(result => {
      this.setState({
        barangs: result
      });
    });
  };

  handleRemove = id => {
    // console.log('remove', id);
    axios
      .delete(`http://localhost:3004/barangs/${id}`)
      .then(res => {
        this.getBarangs();
      })
      .catch(error => {
        console.log(error);
      });
  };

  handleUpdate = id => {
    this.props.history.push(`/edit-barang/${id}`);
  };

  render() {
    const { barangs } = this.state;
    return (
      <Fragment>
        <div className='container'>
          <div className='row'>
            <table className='table table-striped'>
              <thead>
                <tr>
                  <th scope='col'>Kode Barang</th>
                  <th scope='col'>Nama Barang</th>
                  <th scope='col'>Jumlah Barang</th>
                  <th scope='col'>Gambar Barang</th>
                  <th scope='col'>Harga Barang</th>
                  <th scope='col'>Action</th>
                </tr>
              </thead>
              <tbody>
                {barangs.map(item => {
                  return (
                    <tr key={item.id}>
                      <th>{item.kode_barang}</th>
                      <th>{item.nama_barang}</th>
                      <th>{item.jumlah_barang}</th>
                      <th>{item.gambar}</th>
                      <th>{item.harga_barang}</th>
                      <th>
                        <button
                          className='btn btn-success mr-2'
                          onClick={() => this.handleUpdate(item.id)}
                        >
                          edit
                        </button>
                        <button
                          className='btn btn-danger'
                          onClick={() => this.handleRemove(item.id)}
                        >
                          delete
                        </button>
                      </th>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default withRouter(DataBarang);
