import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

class AddBarang extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formPost: {
        id: 1,
        kode_barang: '',
        nama_barang: '',
        jumlah_barang: 1,
        gambar: '',
        harga_barang: 1
      }
    };
  }

  handleFormChange = e => {
    let formPostNew = { ...this.state.formPost };
    let timeStamp = new Date().getTime();
    if (!this.state.isUpdate) {
      formPostNew['id'] = timeStamp;
    }

    formPostNew[e.target.name] = e.target.value;
    //   console.log('post new', e.target.name);

    this.setState({
      formPost: formPostNew
    });
  };

  postDatatoApi = () => {
    let { formPost } = this.state;
    axios
      .post(`http://localhost:3004/barangs`, formPost)
      .then(res => {
        //   this.getPost();
        this.setState({
          formPost: {
            kode_barang: '',
            nama_barang: '',
            jumlah_barang: 1,
            gambar: '',
            harga_barang: 1
          }
        });
        this.props.history.push('/', formPost);
        //   setTimeout(() => {
        //   }, 300);
        console.log(res);
      })
      .catch(error => {
        console.log(error);
      });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.postDatatoApi();
    //  if (this.state.isUpdate) {
    //    this.putDataToApi();
    //  } else {
    //  }
    //  console.log(this.state.formPost);
  };

  handleCancel = () => {
    this.props.history.push('/');
  };

  render() {
    return (
      <div className='container'>
        <div className='col-lg-6 mx-auto'>
          <form onSubmit={this.handleSubmit}>
            <div className='form-group'>
              <label htmlFor='exampleFormControlInput1'>Kode barang</label>
              <input
                type='text'
                className='form-control'
                id='exampleFormControlInput1'
                placeholder='Kode Barang'
                onChange={this.handleFormChange}
                name='kode_barang'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='exampleFormControlInput1'>Nama barang</label>
              <input
                type='text'
                className='form-control'
                id='exampleFormControlInput1'
                placeholder='nama barang'
                onChange={this.handleFormChange}
                name='nama_barang'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='exampleFormControlInput1'>Jumlah barang</label>
              <input
                type='text'
                className='form-control'
                id='exampleFormControlInput1'
                placeholder='jumlah barang'
                onChange={this.handleFormChange}
                name='jumlah_barang'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='exampleFormControlInput1'>Gambar barang</label>
              <input
                type='text'
                className='form-control'
                id='exampleFormControlInput1'
                placeholder='gambar barang'
                onChange={this.handleFormChange}
                name='gambar'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='exampleFormControlInput1'>Harga barang</label>
              <input
                type='text'
                className='form-control'
                id='exampleFormControlInput1'
                placeholder='harga barang'
                onChange={this.handleFormChange}
                name='harga_barang'
              />
            </div>
            <div className='form-group'>
              <button className='btn btn-success mr-2'>submit</button>
              <button
                className='btn btn-danger mr-2'
                onClick={this.handleCancel}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(AddBarang);
