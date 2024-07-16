import { useState } from "react";

export const NuevoVideo = ({ onAddVideo }) => {
  const [title, setTitle] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [category, setCategory] = useState("");
  const [color, setColor] = useState("red");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newVideo = {
      id: crypto.randomUUID(),
      title,
      thumbnail,
      category,
      color,
    };
    onAddVideo(newVideo);
    console.log(color)
  };

  return (
    <section>
      <h2>Agrega un nuevo video:</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <br />
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <br />
        <label>
          Thumbnail URL:
          <br />
          <input
            type="text"
            value={thumbnail}
            onChange={(e) => setThumbnail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Category:
          <br />
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </label>
        <br />
        <label>
          <input 
          type="color" 
          value={color}
          onChange={(e) => setColor(e.target.value)} />
        </label>
        <div className="button-container">
          <button type="submit" className="active">
            Agregar
          </button>
        </div>
      </form>
    </section>
  );
};
