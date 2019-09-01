import React from 'react';

const Card = ({title, link, summary, image, date}) => (
  <div className={`card`}>
    <div className={`info`}>
      <img src={image} alt={`title`}/>
      <h3 className={`title`}>{title}</h3>
    </div>
    <div className={`info`}>
      <p className={`summary`}>{summary}</p>
      <span className={`date`}>{date}</span>
    </div>
  </div>
);

export default Card;
