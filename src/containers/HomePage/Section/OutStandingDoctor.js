import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './Specialty.scss'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import outstanding from '../../../assets/images/specialty/doctor1.jpg'
import { FormattedMessage } from 'react-intl';
import './OutStandingDoctor.scss'
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





class OutStandingDoctor extends Component {

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
                    <div className='section-outstanding'>
                         <div className='outstanding-container'>
                              <div className='outstanding-header'>
                                   <span><FormattedMessage id="title.Doctor_featured_last_week" /></span>
                                   <button><FormattedMessage id="title.See_more" /></button>
                              </div>
                              <div className='outstanding-body'>
                                   <Slider {...settings}>
                                        <div className='img-customize'>
                                             <img className="outstanding-image" src={outstanding} />
                                             <h3> 1Ths</h3>
                                        </div>

                                        <div className='img-customize'>
                                             <img className="outstanding-image" src={outstanding} />
                                             <h3>1Ths</h3>
                                        </div>
                                        <div className='img-customize'>
                                             <img className="outstanding-image" src={outstanding} />
                                             <h3>1Ths</h3>
                                        </div>
                                        <div className='img-customize'>
                                             <img className="outstanding-image" src={outstanding} />
                                             <h3> 1Ths</h3>
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

export default connect(mapStateToProps, mapDispatchToProps)(OutStandingDoctor);
