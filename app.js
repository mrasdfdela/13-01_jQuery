// 1
$(document).ready(() => console.log("Let’s get ready to party with jQuery!"));

// 2
$('article img').addClass('image-center');

// 3
$('article p').eq(-1).remove();

// 4
$('h1').css('font-size',()=>{
  const size = Math.floor(Math.random()*101);
  return `${size}px`
});

// 5
newLi = $('<li>').text('What should we name him?');
$('ol').append(newLi)

// 6
asideParagraph = $('<p>').text('Apologies. No need for asides.');
$("aside").html(asideParagraph);

// 7
colorInputs = $('.mb-5 input')
colorInputs.on('keyup', updateBackgroundColor);
colorInputs.on('click', updateBackgroundColor);

function updateBackgroundColor() {
  colorArr = colorInputs.get().map((input)=> input.value);

  rgbColor = `rgb(${colorArr[0]},${colorArr[1]},${colorArr[2]})`;
  $("body").css("background-color", rgbColor);
}

$('img').on('click', function() {
  console.log($(this).remove())
});