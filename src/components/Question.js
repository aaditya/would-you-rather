import React from 'react';
import { connect } from 'react-redux';

import { handleSaveQuestionAnswer } from '../actions/users';
import NotFound from './NotFound';

function Question(props) {
    const { authUser, question, handleSaveQuestionAnswer } = props;
    const answerQuestion = (answer) => {
        return function () {
            if (!(props.answered)) {
                console.log("Called")
                handleSaveQuestionAnswer(authUser, question.id, answer);
            }
        }
    }
    return (
        <div style={{ marginTop: '15px' }}>
            {props.question !== null ?
                <div className="card m-auto" style={{ width: "25%" }}>
                    <div className="card-header">
                        {props.author.name} asks :
                </div>
                    <img className="card-img-top" src={props.author.avatarURL} alt="Avatar" />
                    <div className="card-body">
                        <h5 className="card-title">Would you Rather ?!</h5>
                    </div>
                    <ul className="list-group list-group-flush" style={{ cursor: "pointer" }}>
                        <li onClick={answerQuestion("optionOne")} className={`list-group-item list-group-item-action d-flex justify-content-between align-items-center ${props.answered === 'optionOne' && 'list-group-item-success'} '}`}>
                            {props.question.optionOne.text}
                            {props.answered && <span className="badge badge-primary badge-pill">{props.question.optionOne.votes.length / props.totalVotes * 100}%</span>}
                        </li>
                        <li onClick={answerQuestion("optionTwo")} className={`list-group-item list-group-item-action d-flex justify-content-between align-items-center ${props.answered === 'optionTwo' && 'list-group-item-success'} '}`}>
                            {props.question.optionTwo.text}
                            {props.answered && <span className="badge badge-primary badge-pill">{props.question.optionTwo.votes.length / props.totalVotes * 100}%</span>}
                        </li>
                    </ul>
                </div> : 
                <NotFound />}

        </div>
    )
}

function mapStateToProps({ questions, authUser, users }, { match }) {
    const question = questions[match.params.question_id];

    if (!question) {
        return {
            question: null
        }
    }

    const author = users[question.author];
    const answered = users[authUser].answers[question.id] || false;

    const totalVotes = question.optionOne.votes.length + question.optionTwo.votes.length;

    return {
        question,
        author,
        authUser,
        answered,
        totalVotes
    }
}

export default connect(mapStateToProps, { handleSaveQuestionAnswer })(Question);