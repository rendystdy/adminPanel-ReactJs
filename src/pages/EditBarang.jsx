import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

class EditBarang extends Component {
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

  componentDidMount() {
    this.getUpdate();
  }

  getUpdate = () => {
    let id = this.props.match.params.id;
    axios
      .get(`http://localhost:3004/barangs/${id}`)
      .then(res => {
        let id = res.data.id;
        let kode_barang = res.data.kode_barang;
        let nama_barang = res.data.nama_barang;
        let jumlah_barang = res.data.jumlah_barang;
        let gambar = res.data.gambar;
        let harga_barang = res.data.harga_barang;
        this.setState({
          formPost: {
            id,
            kode_barang,
            nama_barang,
            jumlah_barang,
            gambar,
            harga_barang
          }
        });
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  putDataToApi = () => {
    let { formPost } = this.state;
    axios
      .put(`http://localhost:3004/barangs/${formPost.id}`, formPost)
      .then(res => {
        this.props.history.push('/');
        console.log(res);
      })
      .catch(error => {
        console.log(error);
      });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.putDataToApi();
  };

  handleCancel = () => {
    this.props.history.push('/');
  };

  handleFormChange = e => {
    let formPostNew = { ...this.state.formPost };
    //  let timeStamp = new Date().getTime();
    //  if (!this.state.isUpdate) {
    // }
    //  formPostNew['id'] = timeStamp;

    formPostNew[e.target.name] = e.target.value;

    this.setState({
      formPost: formPostNew
    });
  };

  render() {
    const { formPost } = this.state;
    // console.log('edit', this.state);
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
                value={formPost.kode_barang}
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
                value={formPost.nama_barang}
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
                value={formPost.jumlah_barang}
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
                value={formPost.gambar}
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
                value={formPost.harga_barang}
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

export default withRouter(EditBarang);
