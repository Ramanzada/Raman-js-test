const movies = [
  "The Shawshank Redemption",
  "The Godfather",
  "The Dark Knight",
  "12 Angry Men",
  "The Lord Of The Rings",
  "Pulp Fiction",
  "The Good, the Bad and the Ugly",
  "Forrest Gump"
];

for (let i = 0; i < movies.length; i++) {
  console.log(movies[i]);
  console.log(`Number of words: ${movies[i].split(" ").length}`);
}
