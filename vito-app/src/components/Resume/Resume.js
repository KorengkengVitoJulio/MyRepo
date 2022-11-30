import React from 'react'

function Resume() {
  return (
  <section className="section" id="resume">
  <div className="container" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
      <br/> <br/> <br/>
    <h2 className="mb-5"><span className="text-danger">My</span> Resume</h2>
    <div className="row">

      <div className="col-md-6 col-lg-4">
        <div className="card">
          <div className="card-header">
            <div className="mt-2">
              <h4>Education</h4>
              <span className="line" />  
            </div>
          </div>
          <div className="card-body">
          <h6 className="title text-danger">2015 - 2017</h6>
            <p>Junior High School</p>
            <p className="subtitle">I studied at Advent Tompasobaru Middle School until I graduated in 2017</p>
            <hr />
            <h6 className="title text-danger">2017 - 2020 Present</h6>
            <p>Graduation CoVid Senior High School</p>
            <p className="subtitle">I was in high school at Advent Tompaso Kawangkoan Advanced School and graduated there in 2020</p>
            <hr />
            
            <h6 className="title text-danger">2020</h6>
            <p>Student Klabat University</p>
            <p className="subtitle">I studied at Klabat University taking the faculty of computer science majoring in informatics</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="card">
          <div className="card-header">
            <div className="pull-left">
              <h4 className="mt-2">Skills</h4>
              <span className="line" />  
            </div>
          </div>
          <div className="card-body pb-2">
            <h6>C</h6>
            <div className="progress mb-3">
              <div className="progress-bar bg-danger" role="progressbar" style={{width: '75%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
            </div>
            <h6>C++</h6>
            <div className="progress mb-3">
              <div className="progress-bar bg-danger" role="progressbar" style={{width: '80%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
            </div>
            <h6>C#</h6>
            <div className="progress mb-3">
              <div className="progress-bar bg-danger" role="progressbar" style={{width: '80%'}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
            </div>
            <h6>HTML</h6>
            <div className="progress mb-3">
              <div className="progress-bar bg-danger" role="progressbar" style={{width: '80%'}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
            </div>
            <h6>CSS</h6>
            <div className="progress mb-3">
              <div className="progress-bar bg-danger" role="progressbar" style={{width: '70%'}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
            </div>
            <h6>Phyton</h6>
            <div className="progress mb-3">
              <div className="progress-bar bg-danger" role="progressbar" style={{width: '60%'}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <div className="pull-left">
              <h4 className="mt-2">Languages</h4>
              <span className="line" />  
            </div>
          </div>
          <div className="card-body pb-2">
            <h6>English</h6>
            <div className="progress mb-3">
              <div className="progress-bar bg-danger" role="progressbar" style={{width: '80%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
            </div>
           
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Resume