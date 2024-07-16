import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./HomePage";
import { useState } from "react";
import { NuevoVideo } from "./NuevoVideo";

function App() {

  const [videos, setVideos] = useState([
      {
        category: "Frontend",
        color: "red",
        videos: [
          {
            id: crypto.randomUUID(),
            title: "7 Consejos para Programadores Front-End",
            thumbnail:
              "https://i.ytimg.com/vi/n189TdfbQIA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC7feY9xpqQwSTBPyFV517Q26nTfQ",
          },
          {
            id: crypto.randomUUID(),
            title: "Ruta frontend",
            thumbnail:
              "https://i.ytimg.com/vi/CvfB4KzP4us/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCg1hMXiFYXAMTAba8SmVZcmjjjeg",
          },
        ],
      },
      {
        category: "Backend",
        color: "blue",
        videos: [
          {
            id: crypto.randomUUID(),
            title: "Node.js Introduction",
            thumbnail:
              "https://i.ytimg.com/vi/ENrzD9HAZK4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC6wW0dz6LE4pfMDOpDDZo8teyRSA",
          },
          {
            id: crypto.randomUUID(),
            title: "Express.js Basics",
            thumbnail:
              "https://i.ytimg.com/vi/0QRFOsrBtXw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCweOg__8I_zKQ7b2yLHkRhB9ntyw",
          },
          {
            id: crypto.randomUUID(),
            title: "MongoDB Basics",
            thumbnail:
              "https://i.ytimg.com/vi/SnqPyqRh4r4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB1KTnJENwTChnBf0X6k8KxY2Ugqg",
          },
        ],
      },
      {
        category: "Database",
        color: "purple",
        videos: [
          {
            id: crypto.randomUUID(),
            title: "SQL Basics",
            thumbnail:
              "https://i.ytimg.com/vi/HXV3zeQKqGY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAxA3x89d1OpZ00kVzPr1NysYSPoA",
          },
          {
            id: crypto.randomUUID(),
            title: "PostgreSQL Basics",
            thumbnail:
              "https://i9.ytimg.com/vi/74IWNUja05w/hq720_custom_2.jpg?sqp=CIiEvLQG-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARgpIEMofzAP&rs=AOn4CLAyNSM1zBd48dhh3znTm-xEN5hJGQ",
          },
        ],
      },
  ]);

  const handleAddVideo = (newVideo) => {
    setVideos((prevVideos) => {
      const updatedVideos = [...prevVideos];
      const categoryIndex = updatedVideos.findIndex(
        (category) => category.category === newVideo.category
      );

      if (categoryIndex !== -1) {
        updatedVideos[categoryIndex].videos.push(newVideo);
      } else {
        updatedVideos.push({
          category: newVideo.category,
          color: newVideo.color, // Puedes ajustar el color según tus necesidades
          videos: [newVideo],
        });
      }

      return updatedVideos;
    });
  };
  return (
    <>
      <Router>
      <Header />
        <Routes>
          <Route path="/" element={<HomePage videos={videos} setVideos={setVideos} />} />
          <Route path="/agregar" 
          element={<NuevoVideo onAddVideo={handleAddVideo} />
          } />
          <Route path="*" element={<h1>Página no encontrada</h1>} />
        </Routes>
      <Footer />
      </Router>
    </>
  );
}

export default App;
