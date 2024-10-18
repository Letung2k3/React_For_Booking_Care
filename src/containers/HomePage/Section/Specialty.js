import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './Specialty.scss'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import specialty from '../../../assets/images/specialty/specialty1.jpg'
import { FormattedMessage } from 'react-intl';
function SampleNextArrow(props) {
     const { className, style, onClick } = props;
     return (
          <div
               className={className}
               style={{ ...style, display: 'block', background: 'red' }}
               onClick={onClick}
          />


     )
}

function SamplePrevArrow(props) {
     const { className, style, onClick } = props;
     return (
          <div
               className={className}
               style={{ ...style, display: 'block', background: 'green' }}
               onClick={onClick}
          />
     )
}





class Specialty extends Component {

     render() {
          let settings = {
               dots: false,
               infinite: true,
               speed: 500,
               slidesToShow: 4,
               slidesToScroll: 1,
               // nextArrow: <SampleNextArrow />,
               // prevArrow: <SamplePrevArrow />
          };

          return (
               <>
                    <div className='section-specialty'>
                         <div className='specailty-container'>
                              <div className='specialty-header'>
                                   <span><FormattedMessage id="title.Popular_specialties" /></span>
                                   <button><FormattedMessage id="title.See_more" /></button>
                              </div>
                              <div className='specialty-body'>
                                   <Slider {...settings}>
                                        <div className='img-customize'>
                                             <img className="specialty-image" src={specialty} />
                                             <h3><FormattedMessage id="slick.medical_facility" /> 1</h3>
                                        </div>
                                        <div className='img-customize'>
                                             <img className="specialty-image" src={specialty} />
                                             <h3><FormattedMessage id="slick.medical_facility" /> 2</h3>
                                        </div>
                                        <div className='img-customize'>
                                             <img className="specialty-image" src={specialty} />
                                             <h3><FormattedMessage id="slick.medical_facility" /> 3</h3>
                                        </div>
                                        <div className='img-customize'>
                                             <img className="specialty-image" src={specialty} />
                                             <h3><FormattedMessage id="slick.medical_facility" /> 4</h3>
                                        </div>
                                        <div className='img-customize'>
                                             <img className="specialty-image" src={specialty} />
                                             <h3><FormattedMessage id="slick.medical_facility" /> 5</h3>
                                        </div>
                                        <div className='img-customize'>
                                             <img className="specialty-image" src={specialty} />
                                             <h3><FormattedMessage id="slick.medical_facility" /> 6</h3>
                                        </div>
                                   </Slider>
                              </div>

                         </div>
                    </div>
               </>
          );
     }

}

const mapStateToProps = state => {
     return {
          isLoggedIn: state.user.isLoggedIn,
          language: state.app.language
     };
};

const mapDispatchToProps = dispatch => {
     return {

     };
};

export default connect(mapStateToProps, mapDispatchToProps)(Specialty);
