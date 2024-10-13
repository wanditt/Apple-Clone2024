import React from "react";

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Alert from "./Components/Alert/Alert";
import Firstsection from "./Components/Firstsection/Firstsection";
import Secondsection from "./Components/Secondsection/Secondsection";
import Thirdsection from "./Components/Thirdsection/Thirdsection";
import Fourthsection from "./Components/Fourthsection/Fourthsection";
import Fifthsection from "./Components/Fifthsection/Fifthsection";
import Sixthsection from "./Components/Sixthsection/Sixthsection";
import Youtube from "./Components/Youtube/Youtube";

function App() {
  return (
    <div>
      <Header />
      <Alert />
      <Firstsection />
      <Secondsection />
      <Thirdsection />
      <Fourthsection />
      <Fifthsection />
      <Sixthsection />
      <Youtube />
      <Footer />
    </div>
  );
}

export default App;

// https://www.googleapis.com/youtube/v3/search?key=AIzaSyAq64k9IAmumVFNbvrx15D9lLM-tRozreo&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=10
