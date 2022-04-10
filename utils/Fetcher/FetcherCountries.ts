import axios from 'axios';

const getCountry = (url: string) =>
  axios
    .get(url)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      const err = new Error(error.response.data.message);
      err.name = error.response.status;
      throw err;
    });

// axios.get(url).then((res) => res.data);

//  Error Response Object Values
// axios.get('/foo')
//   .catch(function (error) {
//     if (error.response) {
//       console.log(error.response.data);
//       console.log(error.response.status);
//       console.log(error.response.headers);
//     }
//   });

export { getCountry };
