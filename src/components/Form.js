import React from "react";

function Form() {
  return (
    <>
      <div className="form-outer">
        <div className="form-inner">
          <h1 className="form-top">Movie Form</h1>
          <form className="form-middle">
            <h3>Whats a movie you like?</h3>
            <input type="text" />
            <h3>How would you rate this movie?</h3>
            <div>
              <input type="range" id="volume" name="volume" min="0" max="10" />
            </div>
            <h3>Would you reccomend this movie to a friend?</h3>
            <input type="radio" id="yes" name="would_recommend" value="yes" />
            <label for="html">Yes</label>
            <input type="radio" id="no" name="would_recommend" value="no" />
            <label for="css">No</label>
            <h3>What genres fit for this movie?</h3>
            <input type="checkbox" id="genre1" name="genre1" value="drama" />
            <label for="genre1">Drama</label>
            <br></br>
            <input type="checkbox" id="genre2" name="genre2" value="comedy" />
            <label for="genre2">Comedy</label>
            <br></br>

            <input type="checkbox" id="genre3" name="genre3" value="action" />
            <label for="genre3">Action</label>
            <br></br>

            <input type="checkbox" id="genre4" name="genre4" value="fantasy" />
            <label for="genre4">Fantasy</label>
            <br></br>

            <input type="checkbox" id="genre5" name="genre5" value="horror" />
            <label for="genre5">Horror</label>
            <br></br>

            <input type="checkbox" id="genre6" name="genre6" value="romance" />
            <label for="genre6">Romance</label>
            <br></br>

            <input type="checkbox" id="genre7" name="genre7" value="western" />
            <label for="genre7">Western</label>
            <br></br>

            <input type="checkbox" id="genre8" name="genre8" value="thriller" />
            <label for="genre8">Thriller</label>
            <br></br>
            <br></br>
            <input type="submit" />
          </form>
        </div>
      </div>
    </>
  );
}

export default Form;
