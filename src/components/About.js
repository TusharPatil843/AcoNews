import React from 'react';

const About = () => {
  return (
    <div className="container mt-5 pt-5">
      <h1 className="text-center mb-4 text-primary" >About AcoNews</h1>
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="card p-4 shadow-lg " style={{ borderRadius: '10px' }}>
            <div className="card-body">
              <h5 className="card-title text-primary" >Welcome to AcoNews!</h5>
              <p className="card-text">
                AcoNews is a leading news agency, proudly presented by Acowale. We strive to deliver the most 
                accurate and timely news from around the world. Our team is dedicated to bringing you the 
                latest headlines, insightful analysis, and comprehensive coverage on a wide range of topics.
              </p>
              <p className="card-text">
                At AcoNews, we believe in the power of information to drive change and foster a more informed 
                society. Our mission is to provide reliable news that keeps you updated and engaged with the 
                world around you.
              </p>
              <p className="card-text">
                Thank you for choosing AcoNews as your trusted source of news. We hope you find our platform 
                valuable and informative.
              </p>
              <p className="card-text">
                <small className="text-muted">For more information, please contact us at info@aconews.com.</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
