import Toastify from "toastify-js";

const toaster = msg => {
  return Toastify({
    text: msg,
    duration: 3000,
    destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #eab308, #ca8a04)",
    },
    onClick: function () {}, // Callback after click
  }).showToast();
};

export default toaster;
