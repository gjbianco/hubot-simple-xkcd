/*
 * Description:
 *   Find and return an xkcd comic via query.
 *
 * Commands:
 *   !xkcd <query> - returns best matching image for <query>.
 *
 * Author:
 *   gjbianco
 */
const getComic = require('./xkcd').getAnswer;
module.exports = robot => {
  robot.respond(/^!xkcd (.*)$/i, res => {
    const query = escape(res.match[1]);
    getComic(query)
      .then(imgUrl => res.send(imgUrl))
      .catch(err => {
        console.error(`got an error getting answer for "${query}": ${err}`);
        res.send('error occurred trying to answer D:');
      });
  });
};
