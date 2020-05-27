import React, { Component } from 'react';
import { Nav, NavDropdown } from 'react-bootstrap'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { setAuthUser } from '../actions/authUser';

class NavBar extends Component {
    logoutUser = () => {
        this.props.dispatch(setAuthUser(null));
    }
    render() {
        const { users, authUser } = this.props;
        const currentUser = users[authUser];

        return (
            <Nav className='navbar-expand-lg navbar-light bg-light'>
                <Nav.Item>
                    <Link className='nav-link' to='/'>Home</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link className='nav-link' to='/add'>Add Question</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link className='nav-link' to='/leaderboard'>Leaderboard</Link>
                </Nav.Item>
                <NavDropdown title={currentUser.name} style={{ marginLeft: 'auto' }}>
                    <NavDropdown.Item onClick={this.logoutUser}>Logout</NavDropdown.Item>
                </NavDropdown>
            </Nav>
        )
    }
}

function mapStateToProps({ users, authUser }) {
    return {
        users,
        authUser
    }
}

export default connect(mapStateToProps)(NavBar);