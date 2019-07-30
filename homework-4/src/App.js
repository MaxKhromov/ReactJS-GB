import React from 'react';
import ReactDOM from 'react-dom';

import Blog from './app/components/Blog';
import Post from './app/components/Post';
import WelcomeModal from './app/components/WelcomeModal';


class App extends React.Component {
    render() {
        return <div>
            <h1>Первое приложение на React</h1>
            <p>Please welcome <b>{developer.getFullName()}</b></p> 
            </div>
    }
}

ReactDOM.render( < App / > , document.querySelector('#root'));