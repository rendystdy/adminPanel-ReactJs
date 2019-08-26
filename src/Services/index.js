import axios from 'axios';

//base url
const base_url = 'http://localhost:3004';
// online url
const online_url = 'https://jsonplaceholder.typicode.com';

// fungsi get 1. membuat promise 2. setelah itu panggil fungsi axios get
const Get = (path, root) => {
  const promise = new Promise((resolve, reject) => {
    axios.get(`${root ? online_url : base_url}/${path}`).then(
      result => {
        resolve(result.data);
      },
      err => {
        reject(err);
      }
    );
  });

  return promise;
};

// membuat fungsi yang dimana didalam nya memanggil fungsi get, setelah itu dikirim path unik ke dalam paramater
// fungsi get agar fungsi get tahu url mana yang akan di panggil
const GetNewsBlog = () => Get('posts?_sort=id&_order=desc', false);

const GetBarangs = () => Get('barangs');

const GetUsers = () => Get('users', true);

// membuat variabel yang akan menampung sekupumlan fungsi menjadi object, agar mudah di panggil dicomponent lain
const API = {
  GetNewsBlog,
  GetUsers,
  GetBarangs
};

export default API;
