import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setAuthUser } from '../actions/authUser';

import '../assets/Login.css'

class Login extends Component {
    loginUser = (e) => {
        e.preventDefault();
        this.props.dispatch(setAuthUser(e.target.value));
    }

    render() {
        const users = Object.keys(this.props.users);

        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <div className="card card-signin my-5">
                            <div className="card-body">
                                <h5 className="card-title text-center">Welcome to Would You Rather !</h5>
                                <div className="form-label-group">
                                    <select className='form-control' onChange={this.loginUser}>
                                        <option>Select User</option>
                                        {users.map(user => <option key={user} value={user}>{user}</option>)}
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({ users }) {
    return {
        users
    }
}

export default connect(mapStateToProps)(Login);