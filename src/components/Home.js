import React from 'react';
import { connect } from 'react-redux';
import { Tabs, Tab } from 'react-bootstrap';

import QuestionCard from './QuestionCard';

function Home(props) {
    return (
        <div>
            <Tabs defaultActiveKey="home" transition={false} className="show-grid" float="center" >
                <Tab eventKey="home" title="Un-Answered">
                    {props.unanswered.map(ques => (
                        <QuestionCard key={ques.id} type='unanswered' question={ques} />
                    ))}
                </Tab>
                <Tab eventKey="profile" title="Answered">
                    {props.answered.map(ques => (
                        <QuestionCard key={ques.id} type='answered' question={ques} />
                    ))}
                </Tab>
            </Tabs>
        </div>
    )
}

function mapStateToProps({ questions, authUser, users }) {
    let currentUserAnswers = Object.keys(users[authUser].answers);

    let quesArr = Object.values(questions);
    let answered = quesArr.filter(q => currentUserAnswers.includes(q.id));
    let unanswered = quesArr.filter(q => !(currentUserAnswers.includes(q.id)));

    return {
        answered,
        unanswered
    }
}

export default connect(mapStateToProps)(Home);