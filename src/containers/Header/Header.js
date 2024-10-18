import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from "../../store/actions";
import Navigator from '../../components/Navigator';
import { adminMenu } from './menuApp';
import './Header.scss';
import { languages } from '../../utils/constant';
import { changelanguageApp } from '../../store/actions';
class Header extends Component {
    handleChangeLanguage = (language) => {
        this.props.changelanguageAppRedux(language)
    }
    render() {
        const { processLogout, language } = this.props;

        return (
            <div className="header-container">
                {/* thanh navigator */}
                <div className="header-tabs-container">
                    <Navigator menus={adminMenu} />
                </div>
                <div className='languages'>
                    <span className={language === languages.VI ? "language-vi active" : "language-vi"}
                        onClick={() => this.handleChangeLanguage(languages.VI)}
                    >
                        VN
                    </span>
                    <span
                        className={language === languages.EN ? "language-en active" : "language-en"}
                        onClick={() => this.handleChangeLanguage(languages.EN)}
                    >
                        EN
                    </span>
                    <div className="btn btn-logout" onClick={processLogout} title='Log out'>
                        <i className="fas fa-sign-out-alt"></i>
                    </div>
                </div>
                {/* nút logout */}
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processLogout: () => dispatch(actions.processLogout()),
        changelanguageAppRedux: (languages) => dispatch(changelanguageApp(languages))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
