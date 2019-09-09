import React from 'react';

class Topic extends React.Component {
    render() {
        return (<div>
            Topic ID: {this.props.match.params.topicId}
        </div>);
    }
}

export {Topic};