import React from 'react';

const Porject = (props) => {
  const { data, challenge } = props;
  var projectImage = 'images/portfolio/'+data.image;
  return <div key={data.title} className={challenge ? "columns portfolio-item challenge-column": "columns portfolio-item"}>
      <div className="item-wrap">
      <a target="_blank" href={data.url} title={data.title}>
          <img alt={data.title} src={projectImage} />
          <div className="overlay">
            <div className="portfolio-item-meta">
            <h5>{data.title}</h5>
                <p>{data.category}</p>
            </div>
          </div>
        <div className="link-icon"><i className="fa fa-link"></i></div>
      </a>
    </div>
  </div>
}
export default Porject;