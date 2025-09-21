// var share = document.querySelector('.image').addEventListener('click', function(){
//     // 'this' refers to the element that was clicked
//     share.style.backgroundColor = 'red';
// });

var btn = document.querySelector(".image");

const widBtn = function () {
  var checkingVisibility = document.querySelector(".share-content");

  if (checkingVisibility.style.visibility === "visible") {
    checkingVisibility.style.visibility = "hidden";
  } else {
    checkingVisibility.style.visibility = "visible";
  }
};

const repBtn = function () {
  var checkingVisibility = document.querySelector(".content");

  if (checkingVisibility.style.visibility === "hidden") {
    checkingVisibility.style.visibility = "visible";
  } else {
    checkingVisibility.style.visibility = "hidden";
  }
};

btn.addEventListener("click", widBtn);

var btn2 = document.querySelector(".foot-image");

btn2.addEventListener("click", repBtn);

