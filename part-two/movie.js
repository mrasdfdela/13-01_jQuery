let movieNameInput = $("#input-movie-nm");
let movieRatingInput = $("#input-movie-rtg");
let submitBtn = $("#btn-submit-movie");
let movieList = $('ul')

function addMovie(){
  const btnDiv = $('<button>').text('delete');
  const movieName = movieNameInput.val();
  const movieRating = movieRatingInput.val();

  const newMovie = $("<li>").append(
    `${movieName}: ${movieRating} `,
    btnDiv
  );

  $('ul').append(newMovie)
}

submitBtn.on("click", function (e) {
  e.preventDefault();
  if (movieNameInput.val().length >= 2) {
    addMovie();
    movieNameInput.attr("value", "");
    movieRatingInput.attr("value", "");
  } else {
    alert('invalid movie name!')
  }
});

movieList.on('click', 'button', function(e) {
  $(this).parent().remove();
})