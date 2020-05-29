import React from 'react';
import { connect } from 'react-redux';
import BoardProfile from './BoardProfile';

function Leaderboard(props) {
    return (
        <div style={{ margin: 'auto' }}>
            <div className="card-group">
                {props.scored.map((user, index) => <BoardProfile key={index} user={user} />)}
            </div>
        </div>
    )
}

function mapStateToProps({ users }) {
    let scored = Object.values(users).map(user => ({
        name: user.name,
        avatar: user.avatarURL,
        created: user.questions.length,
        answered: Object.values(user.answers).length,
        score: user.questions.length + Object.values(user.answers).length
    })).sort((a, b) => b.score - a.score);

    return {
        scored
    }
}

export default connect(mapStateToProps)(Leaderboard);
