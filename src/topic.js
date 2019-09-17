import React from 'react';

class Topic extends React.Component {
    render() {
        return (<div className="content">
            Topic ID: {this.props.match.params.topicId}
        </div>);
    }
}

export {Topic};