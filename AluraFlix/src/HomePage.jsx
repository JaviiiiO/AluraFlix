/* eslint-disable react/prop-types */


import { useState } from "react";
import "./App.css";
import "./Modal.css";
import Section from "./components/Section";
import Modal from "react-modal";
import { Hero } from "./components/Hero";

Modal.setAppElement("#root");
Modal.defaultStyles.overlay.backgroundColor = "rgba(0,0,0,0.8)";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    width: "60%",
    height: "500px",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: "5px solid #6BD1FF",
    background: "#03122F",
  },
};

function HomePage({videos, setVideos}) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);



  function handleDelete(id) {
    const newVideoData = videos
      .map((categoryData) => ({
        ...categoryData,
        videos: categoryData.videos.filter((video) => video.id !== id),
      }))
      .filter((categoryData) => categoryData.videos.length > 0);
    setVideos(newVideoData);
  }

  function handleEdit(video) {
    console.log("Editing video:", video);
    setCurrentVideo(video);
    setModalIsOpen(true);
  }

  function handleCloseModal() {
    setModalIsOpen(false);
    setCurrentVideo(null);
  }

  function handleSaveChanges() {
    const newVideoData = videos.map((categoryData) => ({
      ...categoryData,
      videos: categoryData.videos.map((video) =>
        video.id === currentVideo.id ? currentVideo : video
      ),
    }));
    console.log("Updated videos data:", newVideoData);
    setVideos(newVideoData);
    handleCloseModal();
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setCurrentVideo((prevVideo) => {
      const updatedVideo = { ...prevVideo, [name]: value };
      console.log("Updated current video:", updatedVideo);
      return updatedVideo;
    });
  }

  return (
    <>
      <Hero />
      {videos.map((categoryData) => (
        <Section
          key={categoryData.category}
          color={categoryData.color}
          category={categoryData.category}
          videos={categoryData.videos}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      ))}
      <Modal
        style={customStyles}
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
      >
        <div className="modal">
          <div className="modal-content">
            <h2>Editar Card:</h2>
            {currentVideo && (
              <form>
                <label>
                  Title:
                  <br></br>
                  <input
                    type="text"
                    name="title"
                    value={currentVideo.title}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  Thumbnail URL:
                  <br></br>
                  <input
                    type="text"
                    name="thumbnail"
                    value={currentVideo.thumbnail}
                    onChange={handleChange}
                  />
                </label>
                <div className="button-container">
                  <button
                    type="button"
                    onClick={handleSaveChanges}
                    className="active"
                  >
                    Guardar
                  </button>
                  <button
                    type="button"
                    onClick={handleCloseModal}
                    className="desactivated"
                  >
                    Cancelar
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </Modal>
    </>
  );
}

export default HomePage;
