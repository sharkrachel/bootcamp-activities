
// ## Info

// ### Image File Extensions

// * jpg
// * gif
// * jpeg
// * png

// ### Video File Extensions

// * mov
// * avi
// * mpeg
// * mp4
// * mpg

// create new arrays
// for loop to itterate through array
// conditional statements. If file ends in "jpg" move to image array

var files = [
    "pavans_first_birthday.mov",
    "owens_asleep_at_the_computer.jpg",
    "michael_fights_a_polar_bear.mp4",
    "nate_road_rage.avi",
    "ruby_skydiving.jpeg",
    "ken_getting_his_black_belt.png",
    "dan_winning_underground_street_race.mov",
    "its_hard_to_come_up_with_file_names.gif",
    "seriously_this_is_taking_too_long.mpg",
    "i_wonder_how_many_of_these_i_should_have.png",
    "probably_a_few_more.avi",
    "nutmeg_is_clawing_my_sneakers_again.mp4",
    "cat_i_will_destroy_you.gif",
    "i_wish_we_had_a_dog.jpeg",
    "stop_looking_at_me_like_that_nutmeg.mpeg",
    "aww_i_cant_hate_you.png",
    "omg_my_sneakers.avi",
    "cat_you_are_the_worst.mp4"
  ];
  
  var image = [];
  var video = []; 
  
  for (var i = 0; i < files.length; i++) {
    if (files[i].substr(files[i].length-4) === ".mov" || files[i].substr(files[i].length-4) === ".avi" || files[i].substr(files[i].length-4) === ".mp4" || files[i].substr(files[i].length-4) === ".mpg" || files[i].substr(files[i].length-4) === "mpeg") {
      tempVideo = files[i];
      video.push(tempVideo);
  
    }
   else {
     tempImage = files[i];
     image.push(tempImage);
   }
  
  }
  console.log(image);
  console.log(video);