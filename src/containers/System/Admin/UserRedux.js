import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { getAllCodeService } from '../../../services/userService';
import { languages } from '../../../utils'
import * as actions from '../../../store/actions'
import './UserRedux.scss'
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app
class UserRedux extends Component {
    constructor(props) {
        super(props);
        this.state = {
            genderArr: [],
            positionArr: [],
            roleArr: [],
            previewImgURL: '',
            isOpen: false

        }
    }

    async componentDidMount() {
        this.props.getGenderStart();
        this.props.getPositionStart();
        this.props.getRoleStart();

        // try {
        //     let res = await getAllCodeService('gender')
        //     if (res && res.errCode === 0) {
        //         this.setState({
        //             genderArr: res.data
        //         })
        //         console.log(this.state.genderArr)
        //     }
        // } catch (error) {
        //     console.log(error)
        // }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.genderRedux !== this.props.genderRedux) {
            this.setState({
                genderArr: this.props.genderRedux,


            })
        }

        if (prevProps.roleRedux !== this.props.roleRedux) {
            this.setState({

                roleArr: this.props.roleRedux,


            })
        }

        if (prevProps.positionRedux !== this.props.positionRedux) {
            this.setState({

                positionArr: this.props.positionRedux

            })
        }
    }
    handleOnchangeImage = (event) => {
        let data = event.target.files
        let file = data[0];
        if (file) {
            let objectURL = URL.createObjectURL(file)
            this.setState({
                previewImgURL: objectURL
            })
        }

    }
    openPreviewImage = () => {
        if (!this.state.previewImgURL) return;
        this.setState({
            isOpen: true
        })
    }
    render() {
        let genders = this.state.genderArr;
        let positions = this.state.positionArr;
        let roles = this.state.roleArr;
        let language = this.props.language
        let isGetGender = this.props.isLoadingGender
        console.log(">>>Check ", isGetGender)
        return (
            <div className='user-redux-container'>
                <div className='title'>
                    User Redux

                </div>
                <div className="user-redux-body">
                    <div className="container">
                        <div className='row'>
                            <div className='col-12 my-3'><FormattedMessage id="manage-user.add" /></div>
                            <div className='col-12'>{isGetGender === true ? 'Loading genders' : ''}</div>
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
                                    {positions && positions.length > 0 &&
                                        positions.map((item, index) => {
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
                                <label><FormattedMessage id="manage-user.role" /></label>
                                <select className='form-control'>
                                    {roles && roles.length > 0 &&
                                        roles.map((item, index) => {
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
                                <label><FormattedMessage id="manage-user.image" /></label>
                                <div className='preview-img-container'>
                                    <input
                                        id='previewImg'
                                        type='file'
                                        className='form-control'
                                        hidden
                                        onChange={(event) => this.handleOnchangeImage(event)}
                                    />
                                    <label className='label-upload' htmlFor='previewImg'><FormattedMessage id="manage-user.Upload-Image" /><i className='fas fa-upload'></i></label>
                                    <div className='preview-image'
                                        style={{ background: `url(${this.state.previewImgURL})` }}
                                        onClick={() => this.openPreviewImage()}
                                    >

                                    </div>
                                </div>

                            </div>
                            <div className='col-12 mt-3'>
                                <button className='btn btn-primary'><FormattedMessage id="manage-user.save" /></button>
                            </div>

                        </div>
                    </div>
                </div>
                {this.state.isOpen === true &&
                    <Lightbox
                        mainSrc={this.state.previewImgURL}
                        onCloseRequest={() => this.setState({ isOpen: false })}
                    />
                }
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        genderRedux: state.admin.genders,
        isLoadingGender: state.admin.isLoadingGender,
        roleRedux: state.admin.roles,
        positionRedux: state.admin.positions
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getGenderStart: () => dispatch(actions.fetchGenderStart()),
        getPositionStart: () => dispatch(actions.fetchPositionStart()),
        getRoleStart: () => dispatch(actions.fetchRoleStart())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
