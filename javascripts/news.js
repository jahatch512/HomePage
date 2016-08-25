jQuery.noConflict();
console.log("called the script");
$.ajax({
  url: "https://hacker-news.firebaseio.com/v0/maxitem",
  type: "GET",
  success: function (data) {
    console.log("woohoo we got that shit");
    console.log(data);
  },
  error: function (data) {
    console.log("error in the request");
  }
});
