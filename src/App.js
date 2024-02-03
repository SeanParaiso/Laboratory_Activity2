import React from "react";
import "./App.css";
import { DetailList } from "./Details";
import { Header } from "./Header";
import { Main } from "./Main";
import { Footer } from "./Footer";

function App() {
  const detail = [
    {
      name: "123Movies - Watch HD Movies Online Free |123movie |123 movies",
      about:
        "123movies links to various movies and series available on web. 123movies is the best site to watch movies for free. 123movies offers best quality movies available on internet. 123movies is index of links of movies available on internet. Really high speed streaming is available on 123movies. The world is no longer a place where only the rich could afford hi-tech gadgets or probably the Internet. With almost every individual owning a smartphone and having access to high speed Internet, life has become a lot easier. Watching movies and being entertained is something that most people take advantage of especially when not many options are left in the present times. One such platform is 123Movies where you get to watch all your favourite movies under a single roof. With region specific content from countries as that of United Kingdom, Italy, Canada, Spain, Germany, France, Australia and Japan, there is a wide array of movies to choose from. All the movies which 123movies links to are already present on internet, 123movies forms as a collective library for movies present on internet. 123movies is one of those few platforms that doesn’t allow you to go anywhere else when in search of good quality online streaming of movies and TV series. With multiple genres as that of:  ",

      about2:
        "Action, Adventure, Animation, Biography, Comedy, Crime, Documentary, Drama, Family, Fantasy, Game show, History, Horror, Musical, Mystery, News, Reality, Romance, Sci-Fi, TV Movie, Thriller, War ",
      about3:
        "When it comes to watching movies online on other platforms, it is generally the trouble of a subscription or probably the tiring task of creating an account that creates a problem. With 123 movies, things are no longer the same. With no subscription and the need for creating an account, you can enjoy watching your favourite movies anytime anywhere. As long as you have a laptop/smartphone and the Internet, there is nothing to think much about. Simply choose the movie you intend to watch and get going. Whether you have friends and family over during get-togethers or probably intend to spend a cosy date night with your partner, 123movies can be a great companion. With movies being a great source of entertainment while reducing boredom for at least three hours at a stretch, there is nothing like it. 123movies only intends to link only legal videos on internet. A bucket of popcorn or your munchies to go along and you are set for a great time ahead.",
    },

    {
      name: "Why Choose 123movies?",
      sub: "123movies is One of a kind",
      about:
        "While you may come across multiple websites that help out with online movie and television series streaming, we stand out. With us, you do not have to get yourself a subscription or probably create an account. Pick a movie of your choice and start watching on 123movies. Great Quality videos of 123movies 123movies believe in helping out with the best quality videos for a great viewing experience. Whether you are enjoying it alone or have friends coming over for a get-together, we ensure that you have a great time watching the movies of your choice with no compromise in quality. 123movies have Movies of All Genres It doesn’t matter what type of movie you enjoy watching, 123movies have it all sorted for you. You do not have to scroll around looking for the movie of your choice. Simply click the section that you prefer and we will help you with the right movie. Movies from around the world in 123movies We believe in helping our viewers with an experience that isn’t region-specific. We help you with movies from around the world just so that you get to bring about a change to what you watch. Even though you may like a certain type of movies, there are times when you will want to bring about a change. 123movies can be accessed Anytime Anywhere When it comes to accessing 123movies website to watch a movie of your choice, we help you with it anywhere and anytime that you feel like. You choose a time and a place and we are right there for you to help out.",
    },
    {
      sub: "Benefits of online movie streaming on 123movie",
      about:
        "Gone are the days when you had to anxiously wait for the DVD of your favourite movie to release or probably having to spend heaps on movie tickets just to watch your favourite actors perform. In the present times, all you have to do is have a computer device and the Internet. You are all set for a great movie watching experience on 123movies. Here are a few merits of online movie streaming on 123movies that you should know of.",
    },
    {
      sub: "You save time By using 123movies",
      about:
        "There are times when online movie websites allow you to download it first and then watch. With 123 Movies, it’s not the same. You do not have to waste time downloading movies as you can watch them seamlessly online. It saves you time as well as doesn’t keep you waiting especially when you are anxious and excited to watch a new movie or TV series.",
    },
    {
      sub: "You save money by using 123movie",
      about:
        "With online movie streaming through 123 Movies, you save a lot of money. While you enjoy watching movies for free, all you spend on is the Internet which is a necessity that cannot be ignored. 123movies links to movies present on the web and forms a collective library which in turn can be utilised by other websites also.",
    },
    {
      sub: "123movies is compatible with all devices and new browsers",
      about:
        "123 Movies is made compatible to be played on all devices like that of computers, laptops, tablets as well as mobile phones. 123movies doesn't link to 4k videos on internet. That is when it becomes convenient for everyone to watch their favourite movies on devices that they are comfortable with. While 123movies may not be compatible with old browser versions, 123movies works really well with chrome and firefox latest versions.",
    },
    {
      sub: "You never run out of entertainment on 123movies",
      about:
        "When it comes to watching a movie and being entertained, we often get bored especially when we have exhausted our collection and lookout for more. With online streaming, you never run out of content as they are known to have a database that will take a lifetime to get exhausted. Nevertheless, 123movies keep on adding updated and new data.",
    },
    {
      sub: "123movies a better bond in a relationship",
      about:
        "Anyone who watches movies with friends and family is known to have a better bonding when compared to the rest. The reason being the fact that they share similar interests and likings while spending a lot of time together. 123movies can bring about a great change to your life especially when you are someone who loves to binge-watch movies or TV series. 123moviesfree.net does not store any data on its own server. It only links to data only available on web.",
    },
    {
      sub: "January Update (2024)",
      about:
        "Servers utilized to proxy already available movies and shows on different platforms on web are getting costly due to rising energy prices in europe. But this won't affect the website performance. The website is running on net zero profit for now. We expect the prices to lower down next year. We continuously work on improving the website code and make user experience better! Stay tuned for more updates.",
    },
  ];

  return (
    <div>
      <Header />
      <Main />
      <DetailList details={detail} />
      <Footer />
    </div>
  );
}

export default App;
