import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [movieReviews, setmovieReviews] = useState([]);

  const review = async() => {
    try {
      let getRewiew = await axios("https://api.nytimes.com/svc/movies/v2/reviews/picks.json?&order=by-opening-date&api-key=7up1nSTZzelOFwpeBQVfwE5Gu3ZuYeuL")
      console.log(getRewiew.data.results);
      setmovieReviews(getRewiew.data.results);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    review();
  }, []);

  return (
    <>
      <h1 style={{textAlign: "center"}}>Hey Young Blood!</h1>
      <div className="grid">
        {movieReviews.map((movieReview, index) => (
          <div key={index}>
            <h3>{movieReview.display_title}</h3>
            <hr/>
            <p><strong>Headline</strong>: {movieReview.headline}</p>
            <p><strong>Critic Pick</strong>: {movieReview.critics_pick}</p>
            <p><strong>Byline</strong>: {movieReview.byline}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
