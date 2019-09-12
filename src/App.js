// dependencies
import React, { useEffect, useState }  from "react";
import axios from "axios";

// styling
import "./App.css";

// components
import Header from "./components/header";
import Media from "./components/media";
import Highdef from "./components/highdef";
import Explanation from "./components/explanation";

function App() {
  // API call

  const [apod, setApod] = useState({});

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=UvZNa3xCgmb5PRWJTtPuG5TGuWYDtPhhl8aej47X`)
      .then(response => {
        const apod = response.data;
        console.log("APOD", apod);
        setApod(apod);
      })
      /* example object
      apod = {
        copyright: "Bray Falls"
        date: "2019-09-11"
        explanation: "What energizes the Heart Nebula? First, the large emission nebula dubbed IC 1805 looks, in whole, like a human heart.  The nebula glows brightly in red light emitted by its most prominent element: hydrogen.  The red glow and the larger shape are all powered by a small group of stars near the nebula's center.  In the center of the Heart Nebula are young stars from the open star cluster Melotte 15 that are eroding away several picturesque dust pillars with their energetic light and winds. The open cluster of stars contains a few bright stars nearly 50 times the mass of our Sun, many dim stars only a fraction of the mass of our Sun, and an absent microquasar that was expelled millions of years ago.  The Heart Nebula is located about 7,500 light years away toward the constellation of Cassiopeia.  Coincidentally, a small meteor was captured in the foreground during imaging  and is visible above the dust pillars.  At the top right is the companion Fishhead Nebula."
        hdurl: "https://apod.nasa.gov/apod/image/1909/HeartNebula_Falls_2378.jpg"
        media_type: "image"
        service_version: "v1"
        title: "IC 1805: The Heart Nebula"
        url: "https://apod.nasa.gov/apod/image/1909/HeartNebula_Falls_960.jpg"
      }
      end example object */

      .catch(error => {
        console.log("The data was not returned", error);
      });
  }, []);
  
  return (
    <div className="App">
      {/* <Header / > */}
      <Header title={ apod.title } date={ apod.date } />
      <div className="media-container"> 
        {/* <Media / > */}
        <Media type={ apod.media_type } url={ apod.url } copyright={ apod.copyright } />
        {/* ? : <Highdef / > */}
        {"hdurl" in apod ? <Highdef hdurl= { apod.hdurl } /> : <></> }
      </div>
      {/* <Explanation / > */}
      <Explanation text={ apod.explanation } />
    </div>
  );
}

export default App;
