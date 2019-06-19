import React from 'react';
import ReactDOM from 'react-dom';

import Blog from '../src/app/components/Blog';
import WelcomeModal from "../src/app/components/WelcomeModal";
// import WelcomeModal from '../src/app/components/WelcomeModal';
import './app/styles/style.css';

class App extends React.Component {
  render() {

    return (
      <div>
        
        <Blog/>   
        <WelcomeModal/>
      </div>);
  }
}


ReactDOM.render(
    <App/>, document.getElementById('root'));