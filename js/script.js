$(document).ready(function () {
  $(".fixed-action-btn").floatingActionButton();
  $(".carousel").carousel();
  $(".sidenav").sidenav();
  $(".modal").modal();

});


// //   ------SEND EMAIL FUNCTION using EmailJS API -------//
// $("#send-btn").click(function () {
//     let full_name = $("#fname").val() + " " + $("#lname").val();
//     let email = $("#email").val();
//     let enquiry = $("#enquiry").val();
//     if (full_name == "" || email == "" || enquiry == "") {
//       alert("Please complete all required fields");
//       return false;
//     } 
//     else {
//       $("#send-btn").css("pointer-events", "none"); //------Disables User Clicking or hovering
//       emailjs.init("user_JYD5xAbpH0VGyOj4l1Zg7");
//       emailjs
//         .send("gmail", "ravel", {
//           from_name: full_name,
//           rating: rating,
//           enquiry: enquiry,
//           from_email: email,
//         })
// });
