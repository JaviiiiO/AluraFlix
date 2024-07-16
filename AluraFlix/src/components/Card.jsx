/* eslint-disable react/prop-types */
import './Card.css';

const Card = ({video, onDelete, onEdit}) => {

  const {id, title, thumbnail} = video;

  const handleDelete = () => {
    onDelete(id)
  }
  const handleEdit = () => {
    onEdit(video)
  }

return (
    <div className="card-container">
              <div className="card-title">
            <h3 style={{color:"white"}}>{title}</h3>
        </div>
          <a href='https://google.com' ><img src={thumbnail} /></a>

          <div className="card-options">
            <p onClick={handleDelete}>Borrar</p>
            <p onClick={handleEdit}>Editar</p>
        </div>

    </div>
  );
};

export default Card;