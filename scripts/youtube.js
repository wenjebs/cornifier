window.onload = function () {
  test = document.querySelectorAll("#video-title");
  test.forEach((title) => (title.textContent = "New Title"));
  console.log(test);
  console.log("hello from wj");
};
