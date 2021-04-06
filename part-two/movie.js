let movieNameInput = $("#input-movie-nm");
let movieRatingInput = $("#input-movie-rtg");
let submitBtn = $("#btn-submit-movie");
let movieList = $('ul')

function addMovie(){
  const btnDiv = $('<button>').text('delete');
  movieName = movieNameInput.val();
  movieRating = movieRatingInput.val();
  newMovie = $("<li>").append(
    `${movieName}: ${movieRating} `,
    btnDiv
  );

  $('ul').append(newMovie)
}

submitBtn.on("click", function (e) {
  e.preventDefault();
  addMovie();
  movieNameInput.attr("value", "");
  movieRatingInput.attr("value", "");
});

movieList.on('click', 'button', function(e) {
  $(this).parent().remove();
})