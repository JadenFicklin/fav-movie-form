import React, { useEffect, useState } from "react";
import axios from "axios";

function Allforms() {
  const [myState] = useState(false);
  const [holdData, setHoldData] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: "http://localhost:5000/api/getforms",
    })
      .then((res) => setHoldData(res.data))
      .catch((err) => console.log(err + "this is the error"));
  }, [myState]);

  return (
    <>
      <div className="all-forms-outer">
        {holdData.map((holdData) => (
          <div className="all-form-outer">
            <br></br>
            <div className="all-movie-name">
              <span className="bold">Movie Name: </span>
              {holdData.movietitle}
            </div>
            <div className="all-users-ratings">
              <span className="bold">Users Rating: </span>{" "}
              {holdData.movierating}
            </div>
            <div className="all-reccomend">
              {holdData.reccomend ? (
                <p>
                  <span className="bold">Recommended:</span> yes
                </p>
              ) : (
                <p>
                  <span className="bold">Recommended:</span> no
                </p>
              )}
            </div>
            <div className="all-genres-outer">
              <div className="all-genres-title">
                <span className="bold">Genres:</span>
              </div>
              <div className="all-genres">
                {holdData.isdrama ? <p>Drama</p> : <p>/</p>}
              </div>
              <div className="all-genres">
                {holdData.iscomedy ? <p>Comedy</p> : <p>/</p>}
              </div>
              <div className="all-genres">
                {holdData.isfantasy ? <p>Fantasy</p> : <p>/</p>}
              </div>
              <div className="all-genres">
                {holdData.ishorror ? <p>horror</p> : <p>/</p>}
              </div>
              <div className="all-genres">
                {holdData.isromance ? <p>romance</p> : <p>/</p>}
              </div>
              <div className="all-genres">
                {holdData.iswestern ? <p>western</p> : <p>/</p>}
              </div>
              <div className="all-genres">
                {holdData.isthriller ? <p>thriller</p> : <p>/</p>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Allforms;
