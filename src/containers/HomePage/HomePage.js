import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import HomeHeader from './HomeHeader';
import Specialty from './Section/Specialty';
import MedicalFacility from './Section/MedicalFacility';
import OutStandingDoctor from './Section/OutStandingDoctor';
import footer from '../../assets/footer.png'
import './Section/HomePage.scss'
class HomePage extends Component {

     render() {

          return (
               <div>
                    <HomeHeader />
                    <Specialty />
                    <MedicalFacility />
                    <OutStandingDoctor />
                    <div className='footer-homePage'>
                         <img src={footer} />
                    </div>
               </div>
          );
     }

}

const mapStateToProps = state => {
     return {
          isLoggedIn: state.user.isLoggedIn
     };
};

const mapDispatchToProps = dispatch => {
     return {
     };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
