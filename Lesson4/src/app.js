import React from 'react';
import ReactDOM from 'react-dom';

import ContainerForBlogElements from '../src/app/components/ContainerForBlogElements';
import WelcomeModal from "../src/app/components/WelcomeModal";
// import WelcomeModal from '../src/app/components/WelcomeModal';
import './app/styles/style.css';

class App extends React.Component {
  render() {

    return (
      <div>
        <ContainerForBlogElements/>   
        <WelcomeModal/>
      </div>);
  }
}


ReactDOM.render(
    <App/>, document.getElementById('root'));