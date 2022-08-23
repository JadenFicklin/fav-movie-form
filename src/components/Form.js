import React, { useState } from "react";
import axios from "axios";

function Form() {
  const [movieTitle, setMovieTitle] = useState("");
  const [movieRating, setMovieRating] = useState(0);
  const [reccomend, setReccomend] = useState(true);
  const [isDrama, setIsDrama] = useState(false);
  const [isComedy, setIsComedy] = useState(false);
  const [isAction, setIsAction] = useState(false);
  const [isFantasy, setIsFantasy] = useState(false);
  const [isHorror, setIsHorror] = useState(false);
  const [isRomance, setIsRomance] = useState(false);
  const [isWestern, setIsWestern] = useState(false);
  const [isThriller, setIsThriller] = useState(false);

  const submitMovie = (e) => {
    e.preventDefault();

    e.preventDefault();
    axios({
      method: "POST",
      url: "http://localhost:5000/api/movieform",
      data: {
        movieTitle: movieTitle,
        movieRating: movieRating,
        reccomend: reccomend,
        isDrama: isDrama,
        isComedy: isComedy,
        isAction: isAction,
        isFantasy: isFantasy,
        isHorror: isHorror,
        isRomance: isRomance,
        isWestern: isWestern,
        isThriller: isThriller,
      },
    })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err + "this is the error"));
  };

  return (
    <>
      <div className="form-outer">
        <div className="form-inner">
          <h1 className="form-top">Movie Form</h1>
          <form className="form-middle">
            <h3>Whats a movie you like?</h3>
            <input
              type="text"
              value={movieTitle}
              onChange={({ target }) => setMovieTitle(target.value)}
            />
            <h3>How would you rate this movie?</h3>
            <div>
              <input
                type="range"
                id="volume"
                name="volume"
                min="0"
                max="10"
                onChange={({ target }) => setMovieRating(target.value)}
                value={movieRating}
              />
              {movieRating}
            </div>
            <h3>Would you reccomend this movie to a friend?</h3>
            <input
              type="radio"
              id="yes"
              name="would_recommend"
              value="yes"
              checked={reccomend}
              onClick={() => setReccomend(true)}
            />
            <label for="html">Yes</label>
            <input
              type="radio"
              id="no"
              name="would_recommend"
              value="no"
              checked={!reccomend}
              onClick={() => setReccomend(false)}
            />
            <label for="css">No</label>
            <h3>What genres fit for this movie?</h3>
            <input
              type="checkbox"
              id="genre1"
              name="genre1"
              value={isDrama}
              onChange={() => setIsDrama(!isDrama)}
            />
            <label for="genre1">Drama</label>
            <br></br>
            <input
              type="checkbox"
              id="genre2"
              name="genre2"
              value={isComedy}
              onChange={() => setIsComedy(!isComedy)}
            />
            <label for="genre2">Comedy</label>
            <br></br>

            <input
              type="checkbox"
              id="genre3"
              name="genre3"
              value={isAction}
              onChange={() => setIsAction(!isAction)}
            />
            <label for="genre3">Action</label>
            <br></br>

            <input
              type="checkbox"
              id="genre4"
              name="genre4"
              value={isFantasy}
              onChange={() => setIsFantasy(!isFantasy)}
            />
            <label for="genre4">Fantasy</label>
            <br></br>

            <input
              type="checkbox"
              id="genre5"
              name="genre5"
              value={isHorror}
              onChange={() => setIsHorror(!isHorror)}
            />
            <label for="genre5">Horror</label>
            <br></br>

            <input
              type="checkbox"
              id="genre6"
              name="genre6"
              value={isRomance}
              onChange={() => setIsRomance(!isRomance)}
            />
            <label for="genre6">Romance</label>
            <br></br>

            <input
              type="checkbox"
              id="genre7"
              name="genre7"
              value={isWestern}
              onChange={() => setIsWestern(!isWestern)}
            />
            <label for="genre7">Western</label>
            <br></br>

            <input
              type="checkbox"
              id="genre8"
              name="genre8"
              value={isThriller}
              onChange={() => setIsThriller(!isThriller)}
            />
            <label for="genre8">Thriller</label>
            <br></br>
            <br></br>
            <input
              type="submit"
              className="submit"
              onClick={(e) => submitMovie(e)}
            />
          </form>
        </div>
      </div>
    </>
  );
}

export default Form;
