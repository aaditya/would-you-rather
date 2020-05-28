import React, { useState } from 'react';
import { connect } from 'react-redux';

import { handleSaveQuestion } from '../actions/questions';

function AddQuestion(props) {

    const handleForm = (e) => {
        e.preventDefault();
        const { authUser, handleSaveQuestion, history } = props;
        handleSaveQuestion(optionOne, optionTwo, authUser);
        history.push('/');
    }

    const [optionOne, setOptionOne] = useState(null);
    const [optionTwo, setOptionTwo] = useState(null);

    const setO1Value = (event) => setOptionOne(event.target.value);
    const setO2Value = (event) => setOptionTwo(event.target.value);

    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4">Would You rather . . .</h1>
                <hr />
                <form onSubmit={handleForm}>
                    <div className="form-group">
                        <input name="optionOne" onChange={setO1Value} type="text" className="form-control" placeholder="Option One" />
                        <hr />
                        <input name="optionTwo" onChange={setO2Value} type="text" className="form-control" placeholder="Option Two" />
                        <br />
                        <input type="submit" className="btn btn-primary" value="Add Question" disabled={!optionOne || !optionTwo} />
                    </div>
                </form>
            </div>
        </div>
    )
}

function mapStateToProps({ authUser }) {
    return {
        authUser
    }
}

export default connect(mapStateToProps, { handleSaveQuestion })(AddQuestion);