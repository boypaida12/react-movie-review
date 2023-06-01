import { Star } from "@mui/icons-material";
import { Box, Rating } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

const labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

function App() {
  const [movieReviews, setmovieReviews] = useState([]);

  const review = async () => {
    try {
      let getRewiew = await axios(
        "https://api.nytimes.com/svc/movies/v2/reviews/picks.json?&order=by-opening-date&api-key=7up1nSTZzelOFwpeBQVfwE5Gu3ZuYeuL"
      );
      console.log(getRewiew.data.results);
      setmovieReviews(getRewiew.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    review();
  }, []);

  const value = 4.5;

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Hey Young Blood!</h1>
      <div className="grid">
        {movieReviews.map((movieReview, index) => (
          <div key={index}>
            <h3>{movieReview.display_title}</h3>
            <hr />
            <p>
              <strong>Headline</strong>: {movieReview.headline}
            </p>
            <p>
              <strong>Critic Pick</strong>: {movieReview.critics_pick}
            </p>
            <p>
              <strong>Byline</strong>: {movieReview.byline}
            </p>
            <Box
              sx={{
                width: 200,
                display: "flex",
              }}
            >
              <Rating
                name="text-feedback"
                value={value}
                precision={0.5}
                emptyIcon={
                  <Star style={{ opacity: 0.55 }} fontSize="inherit" />
                }
              />
              <Box>{labels[value]}</Box>
            </Box>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
