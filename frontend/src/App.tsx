import React from 'react';
import './App.css';
import image from './JoelHiltonHeadshot.jpg';
import Navbar from './navbar';
//the app.tsx file serves as the main page of the site
class Welcome extends React.Component {
  render() {
    return <h1 className="text-center">Welcome to Joel Hilton's Website!</h1>;
  }
}
//function to display the image of Joel Hilton
function Image() {
  return (
    <div className="d-flex flex-column align-items-center">
      <figure>
        <img src={image} alt="Joel Hilton" loading="lazy" width="350" />
      </figure>
      <p>
        This website is for all about Joel Hilton's Podcast and his love for
        movies!
      </p>
    </div>
  );
}

function App() {
  return (
    <div>
      <Navbar />
      <Welcome />
      <Image />
    </div>
  );
}
export default App;
