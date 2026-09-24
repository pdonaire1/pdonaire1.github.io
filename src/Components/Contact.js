import React, { Component } from 'react';
var API_KEY = process.env.REACT_APP_EMAILJS_USER_ID || '';

const emailjs = window.emailjs;
if (emailjs) emailjs.init(API_KEY);
class Contact extends Component {
  constructor(props){
    super(props);
    this.state = { contactMessage: "", contactEmail: "", loading: false };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  async handleSubmit(ev) {
    ev.preventDefault();
    this.setState({loading: false, topMessage: ""});
    const { contactMessage, contactEmail } = this.state;
    if(!contactMessage || !contactEmail){
      this.setState({loading: false, topMessage: "Please Fill the Contact Form"});
      return;
    }
    if (!emailjs) {
      this.setState({loading: false, topMessage: "Email service unavailable, please write to pdonaire1@gmail.com"});
      return;
    }
    emailjs.send(
      'gmail', 'resume_pdonaire1_github_io_contact',
      {body: contactMessage, contact: contactEmail}
      ).then(res => {
        console.log('Email successfully sent!')
        this.setState({ loading: false, topMessage: "Email sent, you also can contact to me by pdonaire1@gmail.com"})
      })
      .catch(err => this.setState({ loading: false, topMessage: "Error sending email, please write to pdonaire1@gmail.com"}))
  }
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({[name]: value, topMessage: ""});
  }
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      //var email = this.props.data.email;
      var message = this.props.data.contactmessage;
    }

    return (
      <section id="contact">

         <div className="row section-head">

            <div className="two columns header-col">

               <h1><span>Get In Touch.</span></h1>

            </div>

            <div className="ten columns">

                  <p className="lead">{message}</p>

            </div>

         </div>

         <div className="row">
            <div className="eight columns">
            {this.state.topMessage && <h2 className="contact-msg">{this.state.topMessage}</h2>}

               <form action="" method="post" id="contactForm" name="contactForm">
					<fieldset>
                  {/*<div>
						   <label htmlFor="contactName">Name <span className="required">*</span></label>
						   <input type="text" defaultValue="" size="35" id="contactName" name="contactName" onChange={this.handleChange}/>
                  </div>*/}

                  <div>
						   <label htmlFor="contactEmail">Email <span className="required">*</span></label>
						   <input type="text" defaultValue="" size="35" id="contactEmail" name="contactEmail" onChange={this.handleChange}/>
                  </div>

                  {/*<div>
						   <label htmlFor="contactSubject">Subject</label>
						   <input type="text" defaultValue="" size="35" id="contactSubject" name="contactSubject" onChange={this.handleChange}/>/>
                  </div>*/}

                  <div>
                     <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                     <textarea cols="50" rows="15" id="contactMessage" name="contactMessage" onChange={this.handleChange}></textarea>
                  </div>

                  <div>
                    <button className="submit" onClick={this.handleSubmit} disabled={this.state.loading}>
                      { !this.state.loading ? "Submit": "Loading..." }
                    </button>
                    <span id="image-loader">
                      <img alt="" src="images/loader.gif" />
                    </span>
                  </div>
					</fieldset>
				   </form>

           <div id="message-warning"> Error boy</div>
				   <div id="message-success">
                  <i className="fa fa-check"></i>Your message was sent, thank you!<br />
				   </div>
           </div>


            <aside className="four columns footer-widgets">
               <div className="widget widget_contact">

					   <h4>Address and Phone</h4>
					   <p className="address">
						   {name}<br />
						   {street} <br />
						   {city}, {state} {zip}<br />
						   <span>{phone}</span>
					   </p>
				   </div>

               {/*<div className="widget widget_tweets">
                  <h4 className="widget-title">Latest Tweets</h4>
                  <ul id="twitter">
                     <li>
                        <span>
                        This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
                        Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum
                        <a href="#">http://t.co/CGIrdxIlI3</a>
                        </span>
                        <b><a href="#">2 Days Ago</a></b>
                     </li>
                     <li>
                        <span>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                        eaque ipsa quae ab illo inventore veritatis et quasi
                        <a href="#">http://t.co/CGIrdxIlI3</a>
                        </span>
                        <b><a href="#">3 Days Ago</a></b>
                     </li>
                  </ul>
               </div>*/}
            </aside>
      </div>
   </section>
    );
  }
}

export default Contact;
