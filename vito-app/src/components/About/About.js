import React from 'react'
import data from 'D:/MyrepoClone/MyRepo/vito-app/src/db.json'
import data2 from 'D:/MyrepoClone/MyRepo/vito-app/src/db2.json'
function About() {
  return (
    <div className="container-fluid"  >
    <div id="about" className="row about-section" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
      <div className="col-lg-4 about-card">
        <h3 className="font-weight-light">Who am I ?</h3>
        <span className="line mb-5" />
        <h5 className="mb-3">
          <div>
          {data.map(({title, subTitle}) => (
          <div><h4>{title}</h4>
          <p>{subTitle}</p>
          </div>
          ))}
          </div>
          </h5>
      </div>
      <div className="col-lg-4 about-card">
        <h3 className="font-weight-light">Personal Info</h3>
        <span className="line mb-5" />
        <ul className="mt40 info list-unstyled">
         
          {data2.map(({id,title, subTitle})=>(
            <div>
              <span>{title}</span>
              <h7>{subTitle}</h7>   
            </div>
          ))}

          {data2.map(({title2, subTitle2})=>(
            <div>
            <span>{title2}</span>
            <h7>{subTitle2}</h7>  
            </div>
          ))}

          {data2.map(({title3, subTitle3})=>(
            <div>
            <span>{title3}</span>
           <h7>{subTitle3}</h7>  
            </div>
          ))}

          {data2.map(({title4, subTitle4})=>(
            <div>
            <span>{title4}</span>
            <h7>{subTitle4}</h7>  
            </div>
          ))}
          
          
        </ul>
        <ul className="social-icons pt-3">
          <li className="social-item"><a className="social-link" href="#"><i className="ti-facebook" aria-hidden="true" /></a></li>
          <li className="social-item"><a className="social-link" href="#"><i className="ti-twitter" aria-hidden="true" /></a></li>
          <li className="social-item"><a className="social-link" href="#"><i className="ti-google" aria-hidden="true" /></a></li>
          <li className="social-item"><a className="social-link" href="#"><i className="ti-instagram" aria-hidden="true" /></a></li>
          <li className="social-item"><a className="social-link" href="#"><i className="ti-github" aria-hidden="true" /></a></li>
        </ul>  
      </div>
      <div className="col-lg-4 about-card">
        <h3 className="font-weight-light">My Expertise</h3>
        <span className="line mb-5" />
        <div className="row">
          <div className="col-1 text-danger pt-1"><i className="ti-widget icon-lg" /></div>
          <div className="col-10 ml-auto mr-3">
            <h6>UX Design</h6>
            <p className="subtitle"> exercitat Repellendus,  corrupt.</p>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-1 text-danger pt-1"><i className="ti-paint-bucket icon-lg" /></div>
          <div className="col-10 ml-auto mr-3">
            <h6>Web Development</h6>
            <p className="subtitle">Lorem ipsum dolor sit consectetur.</p>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-1 text-danger pt-1"><i className="ti-stats-up icon-lg" /></div>
          <div className="col-10 ml-auto mr-3">
            <h6>Digital Marketing</h6>
            <p className="subtitle">voluptate commodi illo voluptatib.</p>
            <hr />
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default About