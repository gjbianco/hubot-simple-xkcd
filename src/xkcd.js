const axios = require('axios');

function findComicId(query) {
  return axios
    .get(`https://relevantxkcd.appspot.com/process?action=xkcd&query=${query}`)
    .then(response => {
      const patternResult = /(\d.*?)\s+(\d*)\s+(\d*).*/.exec(response.data);
      return patternResult[3];
    });
}

function getComic(query) {
  return findComicId(query)
    .then(id => axios.get(`https://xkcd.com/${id}/info.0.json`))
    .then(response => response.data.img);
}

module.exports = { findComicId, getComic };
