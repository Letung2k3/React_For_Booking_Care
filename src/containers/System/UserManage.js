import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import {
    getAllUser,
    createNewUserService,
    deleteUserService,
    editUserService
} from '../../services/userService';
import './UserManage.scss'
import { FaCirclePlus } from "react-icons/fa6";
import ModalUsser from './ModalUsser';
import { emitter } from '../../utils/emmiter';
import ModalEditUser from './ModalEditUser';
import { Alert } from 'reactstrap';
class UserManage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            arrUsers: [],
            isOpenModalUser: false,
            isOpenModalEditUser: false,
            userEdit: {}
        }
    }

    async componentDidMount() {
        await this.getAllUserFromReact()
    }

    getAllUserFromReact = async () => {
        let response = await getAllUser('ALL')
        if (response && response.errCode === 0) {
            this.setState({
                arrUsers: response.users
            })
        }
    }

    handleAddNewUser = () => {
        this.setState({
            isOpenModalUser: true
        })
    }

    handleEditUser = (item) => {
        this.setState({
            isOpenModalEditUser: true,
            userEdit: item
        })
    }

    toggleUserModal = () => {
        this.setState({
            isOpenModalUser: !this.state.isOpenModalUser
        })
    }

    toggleUserEditModal = () => {
        this.setState({
            isOpenModalEditUser: !this.state.isOpenModalEditUser
        })
    }
    doEditUser = async (user) => {
        let res = await editUserService(user)
        console.log(res)
        if (res.messenge && res.messenge.errCode === 0) {
            await this.getAllUserFromReact()
            this.setState({
                isOpenModalEditUser: false
            })
        }
        else {
            alert(res.messenge.errMessenge)
        }
    }
    createNewUser = async (data) => {
        try {
            let response = await createNewUserService(data)
            console.log(response)
            if (response.messenger && response.messenger.errCode !== 0) {
                alert(response.messenger.errMessenge)
            }
            else {
                await this.getAllUserFromReact()
                this.setState({
                    isOpenModalUser: false
                })
                emitter.emit("EVENT_CLEAR_MODAL_DATA")
            }
        } catch (error) {
            console.log(error)
        }
    }
    handleDeleteUser = async (user) => {
        let id = user.id;
        if (id) {
            let res = await deleteUserService(id)
            if (res && res.messenger.errCode === 0) {
                await this.getAllUserFromReact()
            } else {
                alert("Please check in item!")
            }
        }
    }
    render() {
        let { arrUsers, isOpenModalUser, isOpenModalEditUser } = this.state
        return (
            <>
                <div className='user-container'>
                    <ModalUsser
                        isOpen={this.state.isOpenModalUser}
                        toggleFromParrent={this.toggleUserModal}
                        createNewUser={this.createNewUser}
                    />

                    {isOpenModalEditUser &&
                        <ModalEditUser
                            isOpen={this.state.isOpenModalEditUser}
                            toggleFromParrent={this.toggleUserEditModal}
                            currentItem={this.state.userEdit}
                            editUser={this.doEditUser}
                        />
                    }
                    <div className="title text-center">
                        Manage users with React
                    </div>
                    <div className='mx-1 container-btn-user'>
                        <button
                            onClick={() => this.handleAddNewUser()}
                            className='btn btn-warning px-3 btn-create-user'
                        >
                            <FaCirclePlus className='icon-plus' />
                            Add new user
                        </button>
                    </div>
                    <table className="table table-bordered mt-3 mx-1">
                        <thead>
                            <tr className='header-table'>
                                <th scope="col-2">#</th>
                                <th scope="col">Full Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Adđress</th>
                                <th scope="col">Phone Number</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {arrUsers && arrUsers.length > 0
                                &&
                                arrUsers.map((item, index) => {
                                    return (
                                        <tr key={item.id}>
                                            <td>{index + 1}</td>
                                            <td>{item.fullName}</td>
                                            <td>{item.email}</td>
                                            <td>{item.address}</td>
                                            <td>{item.phonenumber}</td>
                                            <td>
                                                <button className='edit-btn' onClick={() => this.handleEditUser(item)}><i className='fas fa-pencil-alt'></i></button>
                                                <button className='delete-btn' onClick={() => this.handleDeleteUser(item)}><i className='fas fa-trash'></i></button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </>
        );
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
