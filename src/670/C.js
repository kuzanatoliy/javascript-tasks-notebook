module.exports = {
  getTheBestMovie: (people, movies, subtitles) => {
    const counts = {};
    for (let j = 0; j < people.length; j++) {
      counts[people[j]] = (counts[people[j]] || 0) + 1;
    }
    let better = [0, counts[movies[0]] || 0, counts[subtitles[0]] || 0];
    for (let jj = 1; jj < movies.length; jj++) {
      if (
        counts[movies[jj]] > better[1] ||
        ((counts[movies[jj]] || 0) === better[1] &&
          counts[subtitles[jj]] > better[2])
      ) {
        better = [jj, counts[movies[jj]] || 0, counts[subtitles[jj]] || 0];
      }
    }
    return better[0] + 1;
  },
};
