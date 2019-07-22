import React from 'react';
import ReactDOM from 'react-dom';
import { Developer } from './classes/Developer';

let developer = new Developer('Sasha', 'Senior', 'Java Developer');

class App extends React.Component {
    render() {
        return <div>
            <h1>Первое приложение на React</h1>
            <p>Please welcome <b>{developer.getFullName()}</b></p> 
            </div>
    }
}

ReactDOM.render( < App / > , document.querySelector('#root'));