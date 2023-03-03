import React from "react";
import books from "../assets/products/books.jpg";
import "./about.css";


export const About= () => {
  return (<div className="about">
  <div
    className="aboutTop"
    style={{ backgroundImage: `url(${books})` }}
  ></div>
  <div className="aboutBottom">
    <h1 class="text-center"> About us</h1>
    <p className="text-center">
    Welcome to our online book store! We are a one-stop destination for all your reading needs. Our collection comprises a wide variety of genres, ranging from classic literature to modern-day bestsellers. Whether you are looking for a gripping mystery novel,
    a heartwarming romance, or a thought-provoking memoir, we have got you covered.
    At our store, we believe that reading is not just a hobby but a way of life. It is a gateway to knowledge, creativity, and imagination.
    That's why we are passionate about curating a diverse selection of books that cater to readers of all ages and interests. We believe that everyone deserves access to great literature, and our mission is to make that a reality.
    In addition to our impressive selection of books, we also offer competitive prices, prompt shipping, and excellent customer service. Our user-friendly website makes it easy for you to browse and order your favorite titles from the comfort of your own home.
    We also offer gift-wrapping services, making us the perfect choice for birthdays, holidays, and special occasions.
    Thank you for visiting our online book store. We hope that you will find the perfect book to lose yourself in, and that it will inspire you to explore new worlds and ideas.
     Happy reading!
    </p>
  </div>
</div>
);
}
