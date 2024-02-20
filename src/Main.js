import React from "react";
import Movies from "./Movies";
import { MovieList } from "./Movie";

export function Main() {
  return (
    <div className="logo-index ">
      <div className="mainer">
        <img src="./images/logo.jpg" alt="logo"></img>
      </div>
      <div className="mainSearch">
        <div id="search-bar" class="searchBig">
          <span class="searcherBig">
            <svg class="search-icon">
              <a href="#search-icon"></a>
            </svg>
          </span>
          <input
            id="search"
            name="search"
            class="box2"
            type="text"
            placeholder="Search "
            aria-label="Search"
          ></input>
          <button class="btnSearch">
            <a href="#search-icon">SEARCH</a>
          </button>
        </div>
        <button class="oldbtn">
          <div class="search-icon">
            <a href="#search-icon">Use the old 123Movies? Click here</a>
          </div>
        </button>
      </div>
      <div>
        <div className="container">
          <div className="row">
            <div className="movieList">
              {MovieList.map((movie) => (
                <Movies MovieList={movie} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
