import React from "react";
import background from "./images/WeatherDarkBackGroundRainbow.png";
import SearchResults from "./SearchResults";

export default function SearchModule() {
  return (
    <div
      className="SearchModule container"
      style={{
        backgroundColor: "black",
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        height: "100vh"
      }}
    >
      <form>
        <div className="row p-2 m-3">
          <div className="col-6">
            <div>
              <input
                className="input"
                type="text"
                placeholder="Enter your city"
                autoFocus="on"
                autoComplete="off"
              />
            </div>
          </div>
          <div className="col-3">
            <button type="submit" className="submitButton">
              Submit
            </button>
          </div>
          <div className="col-3 d-flex justify-content-end">
            <a href="/" alt="use your location" className="locationSign">
              <i class="fa-solid fa-location-crosshairs"></i>
            </a>
          </div>
        </div>
      </form>
      <SearchResults />
    </div>
  );
}
