import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './HomeHeader.scss'
import { FaBars } from "react-icons/fa";
import { FormattedMessage } from 'react-intl';
import { languages } from '../../utils/constant'
import { changelanguageApp } from '../../store/actions/appActions';
class HomeHeader extends Component {
     constructor(props) {
          super(props)
     }

     changeLanguage = (language) => {
          this.props.changelanguageAppRedux(language)
     }
     render() {
          let language = this.props.language
          return (
               <>
                    <div className='home-header-container'>
                         <div className='home-header-content'>
                              <div className='left-content'>
                                   <FaBars className='header-bars' />
                                   <div className='header-logo'></div>
                              </div>

                              <div className='center-content'>
                                   <div className='child-content'>
                                        <div className='title'><b><FormattedMessage id="homeheader.speciality" /></b></div>
                                        <div className='sub-title'><FormattedMessage id="homeheader.searchDoctor" /></div>
                                   </div>

                                   <div className='child-content'>
                                        <div className='title'><b><FormattedMessage id="homeheader.health-facility" /></b></div>
                                        <div className='sub-title'><FormattedMessage id="homeheader.select-room" /></div>
                                   </div>

                                   <div className='child-content'>
                                        <div className='title'><b><FormattedMessage id="homeheader.doctor" /></b></div>
                                        <div className='sub-title'><FormattedMessage id="homeheader.select-doctor" /></div>
                                   </div>

                                   <div className='child-content'>
                                        <div className='title'><b><FormattedMessage id="homeheader.fee" /></b></div>
                                        <div className='sub-title'><FormattedMessage id="homeheader.check-health" /></div>
                                   </div>
                              </div>

                              <div className='right-content'>
                                   <div className='support'>
                                        <i className='fas fa-question-circle'></i>
                                        <FormattedMessage id="homeheader.support" />
                                        <div className={language === languages.VI ? 'active' : 'language-vi'}><span onClick={() => this.changeLanguage(languages.VI)}>VN</span></div>
                                        <div className={language === languages.EN ? 'active' : 'language-en'}><span onClick={() => this.changeLanguage(languages.EN)}>EN</span></div>
                                   </div>
                              </div>
                         </div>
                    </div>


                    <div className='home-header-banner'>
                         <div className='title1'> <FormattedMessage id="banner.title1" /></div>
                         <div className='title2'> <FormattedMessage id="banner.title2" /></div>
                         <div className='search'>
                              <i className='fas fa-search'></i>
                              <input type='text' placeholder='Tìm kiếm chuyên khoa bác sĩ ...' />
                         </div>
                         <div className='options'>
                              <div className='option-child'>
                                   <div className='icon-child'><i className='fas fa-hospital'></i></div>
                                   <div className='text-child'><FormattedMessage id="banner.child1" /></div>
                              </div>
                              <div className='option-child'>
                                   <div className='icon-child'><i className='fas fa-mobile-alt'></i></div>
                                   <div className='text-child'><FormattedMessage id="banner.child2" /></div>
                              </div>
                              <div className='option-child'>
                                   <div className='icon-child'><i className='fas fa-procedures'></i></div>
                                   <div className='text-child'><FormattedMessage id="banner.child3" /></div>
                              </div>
                              <div className='option-child'>
                                   <div className='icon-child'><i className='fas fa-flask'></i></div>
                                   <div className='text-child'><FormattedMessage id="banner.child4" /></div>
                              </div>

                              <div className='option-child'>
                                   <div className='icon-child'><i className='fas fa-user-md'></i></div>
                                   <div className='text-child'><FormattedMessage id="banner.child5" /></div>
                              </div>

                              <div className='option-child'>
                                   <div className='icon-child'><i className='fas fa-user-nurse'></i></div>
                                   <div className='text-child'><FormattedMessage id="banner.child6" /></div>
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
          changelanguageAppRedux: (languages) => dispatch(changelanguageApp(languages))
     };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
