/* eslint-disable react/prop-types */

import Card from './Card';
import './Section.css';

const Section = (props) => {
    
    const { category, videos, color, onDelete, onEdit } = props;

    return (
        <section className='section-container'>
            <h2 className='categoria' style={{backgroundColor:color}}>{category}</h2>
            <div className='cards-container'>
                {videos.map((video) => (
                    <Card
                        key={video.id}
                        video={video}
                        onDelete={() => onDelete(video.id)}
                        onEdit={() => onEdit(video)}
                    />
                ))}
            </div>
        </section>
    )
}

export default Section;