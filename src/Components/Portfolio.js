import React, { Component } from 'react';
import Project from './Project';

class Portfolio extends Component {
  render() {

    if(this.props.data){
      var projects = this.props.data.projects.map(function(projects, i){
        return <Project key={i} data={projects} />
      })
    }
    return (
      <section id="portfolio">

        <div className="row">

          <div className="twelve columns collapsed">

              <h1>Check Out Some of My Works.</h1>

              <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                  {projects}
              </div>
            </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
