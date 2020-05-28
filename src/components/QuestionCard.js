import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function QuestionCard(props) {
    return (
        <div style={{ marginTop: "20px" }}>
            <div className="card text-center m-auto" style={{ width: "45%" }}>
                <div className="card-header">
                    Asked by {props.users[props.question.author].name} :
                </div>
                <div className="card-body">
                    <h5 className="card-title">Would You Rather</h5>
                    <p className="card-text">{props.question.optionOne.text + " or . . ."}</p>
                    {props.type === 'unanswered'
                        ? <Link className="btn btn-primary" to={`/questions/${props.question.id}`}><i className="fa fa-edit" aria-hidden="true"></i> Answer Poll</Link>
                        : <Link className="btn btn-primary" to={`/questions/${props.question.id}`}><i className="fa fa-list-alt" aria-hidden="true"></i> Show Results</Link>
                    }
                </div>
            </div>
        </div>
    )
}

function mapStateToProps({ users }) {
    return {
        users
    }
}

export default connect(mapStateToProps)(QuestionCard);