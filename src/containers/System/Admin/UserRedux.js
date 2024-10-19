import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { getAllCodeService } from '../../../services/userService';
import { languages } from '../../../utils'
class UserRedux extends Component {
    constructor(props) {
        super(props);
        this.state = {
            genderArr: [],

        }
    }

    async componentDidMount() {
        try {
            let res = await getAllCodeService('gender')
            if (res && res.errCode === 0) {
                this.setState({
                    genderArr: res.data
                })
                console.log(this.state.genderArr)
            }
        } catch (error) {
            console.log(error)
        }
    }


    render() {
        let genders = this.state.genderArr;
        let language = this.props.language
        return (
            <div className='user-redux-container'>
                <div className='title'>
                    User Redux
                </div>
                <div className="user-redux-body">
                    <div className="container">
                        <div className='row'>
                            <div className='col-12 my-3'><FormattedMessage id="manage-user.add" /></div>
                            <div className='col-6'>
                                <label>Email</label>
                                <input className='form-control' type='email' />
                            </div>

                            <div className='col-3'>
                                <label><FormattedMessage id="manage-user.password" /></label>
                                <input className='form-control' type='Password' />
                            </div>

                            <div className='col-3'>
                                <label><FormattedMessage id="manage-user.fullname" /></label>
                                <input className='form-control' type='text' />
                            </div>

                            <div className='col-3'>
                                <label><FormattedMessage id="manage-user.phonenumber" /></label>
                                <input className='form-control' type='text' />
                            </div>

                            <div className='col-9'>
                                <label><FormattedMessage id="manage-user.address" /></label>
                                <input className='form-control' type='text' />
                            </div>

                            <div className='col-3'>
                                <label><FormattedMessage id="manage-user.gender" /></label>
                                <select className='form-control'>
                                    {genders && genders.length > 0 &&
                                        genders.map((item, index) => {
                                            return (
                                                <>
                                                    <option key={index}>{language === languages.VI ? item.valueVi : item.valueEn}</option>
                                                </>
                                            )
                                        })
                                    }

                                </select>
                            </div>

                            <div className='col-3'>
                                <label><FormattedMessage id="manage-user.position" /></label>
                                <select className='form-control'>
                                    <option selected>Choose</option>
                                    <option></option>
                                </select>
                            </div>

                            <div className='col-3'>
                                <label><FormattedMessage id="manage-user.role" /></label>
                                <select className='form-control'>
                                    <option selected>Choose</option>
                                    <option></option>
                                </select>
                            </div>

                            <div className='col-3'>
                                <label><FormattedMessage id="manage-user.image" /></label>
                                <input type='text' className='form-control' />
                            </div>
                            <div className='col-12 mt-3'>
                                <button className='btn btn-primary'><FormattedMessage id="manage-user.save" /></button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
