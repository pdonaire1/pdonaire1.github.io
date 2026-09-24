import React from 'react';
import Challenge from './Challenge';

class Challenges extends React.Component {
  render() {
    if(this.props.data){
      var challenges = this.props.data.map(function(challenge, i){
        return <Challenge key={i} data={challenge}/>
      });
    }

    return (<section id="challenges">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Challenges and Quick Examples</h1>
        </div>
        <div className="twelve columns collapsed">
          <div className="bars">
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              {challenges}
            </div>
          </div>
			  </div>
      </div>
   </section>);
  }
}

export default Challenges;
