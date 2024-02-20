import React from "react";

function Movies({ MovieList }) {
  return (
    <div className="product-card">
      <div className="product-card-img">
        <img
          src={MovieList.picture}
          alt={MovieList.title}
          className={`${MovieList.quantity === 0 ? "sold-out" : ""}`}
        />
      </div>
      <div className="product-card-body">
        <h5 className="product-name">
          <strong>{MovieList.title}</strong>
        </h5>
        <p>{`${MovieList.isWatched ? " Watched" : "Watch"}`}</p>
        <p className="product-brand">New Release</p>

        <div>
          <span className="selling-price">Cinema Price: {MovieList.price}</span>
        </div>
        <div className="watch">
          <a href="#" className="btn btn1">
            {`Watch ${MovieList.isWatched ? "Again" : "Now"}`}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Movies;
