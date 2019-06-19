import React from 'react';


class WelcomeModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: false
        }
        console.log("WelcomeModal start 1 "); 
    }

    render() {
        console.log("WelcomeModal render () 2  ");
        return (
          <div>
             это WelcomeModal
          </div>);
    }
    //Метод монтирования (react встроенный)  componentDidMount() вызывается сразу 
    //после монтирования (то есть, вставки компонента в DOM). 
    //В этом методе должны происходить действия, которые требуют наличия DOM-узлов. Это хорошее место для создания сетевых запросов.
    //выполняет побочные задачи(ajax запросы например)
    componentDidMount () {
        console.log("componentDidMount() 3");
    }
}

export default WelcomeModal;