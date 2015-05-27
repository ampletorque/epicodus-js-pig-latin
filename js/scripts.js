var breakWord = function(word) {
  var vowels = ["a", "e", "i", "o", "u", "y"];
  var letters = word.split("");
  var split_point = letters[i-1];
  var partOne = [];
  var partTwo = [];
    for (var i = 0; i <= letters.length; i++) {
      if (vowels.indexOf(letters[i]) > -1) {
        split_point = i;
        break;
      }
    }
    partOne = (letters.slice(0, split_point)).join("");
    partTwo = (letters.slice(split_point)).join("");
    return [partOne, partTwo];
};

var reMix = function(parts) {
  var partOne = parts[0];
  var partTwo = parts[1];
  return partTwo + partOne + "ay";

};

// $(document).ready(function() {
//   $("form#word").submit(function(event) {
//     var word = $("input#word").val();
//     var parts = breakWord(word);
//     var pigWord = reMix(parts);
//
//     $(".pigword").text(pigWord);
//
//     $("#result").show();
//     event.preventDefault();
//   });
// });
