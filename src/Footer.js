import React from "react";

export function Footer() {
  return (
    <footer>
      <div class="footer-column">
        <div className="colu">
          <div>
            <h3>123movies </h3>
            <ul class="footer-list">
              <li>Movies</li>
              <li>TV-Series</li>
              <li>FAQ's</li>
              <li>DMCA</li>
            </ul>
          </div>
          <div>
            <h3>Genres </h3>
            <ul class="footer-list">
              <li>Comedy</li>
              <li>Thriller</li>
              <li>Drama</li>
              <li>Romance</li>
              <li>Mystery</li>
            </ul>
          </div>
          <div>
            <h3>Country </h3>
            <ul class="footer-list">
              <li>Mexico</li>
              <li>Italy</li>
              <li>Canada</li>
              <li>Denmark</li>
              <li>Iceland</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="footer-column">
        <h3 className="subs">Subscribe</h3>
        <div class="subscribe">
          <p>
            Subscribe to the 123Movies mailing list to receive updates on
            movies, tv-series, and news of top movies.
          </p>
          <input type="email" placeholder="Put your email"></input>
          <button className="sub">Subscribe</button>
        </div>
      </div>

      <div class="footer-column">
        <img src="./images/logo.jpg" alt="123Movies Logo" class="logo"></img>
        <p>
          123Movies - Watch Movies Online For Free and Download the latest
          movies without Registration at 123Moviesfree.net
        </p>
        <p class="disclaimer">
          Disclaimer: This site does not store any files on its server. All
          contents are provided by non-affiliated third parties.
        </p>
      </div>
    </footer>
  );
}
