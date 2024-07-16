/* eslint-disable react/prop-types */

import './Categoria.css'



export const Categoria = (props) => {


  return (
    <div className="categoria">
      <h1 className='category-title'>{props.categoria}</h1>
    </div>
  );
};
