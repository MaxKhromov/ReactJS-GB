import React from 'react';

export default class Post extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div>
                <h1>{this.props.postTitle}</h1>
                <p>{this.props.postBody}</p>
            </div>
        )
    }
}
