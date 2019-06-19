import React from 'react';


class WelcomeModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: false
        }
        console.log("WelcomeModal start 1 "); 
    }

    //закрыть окно modal
    removeModal() {
        console.log("removeModal");        
        this.setState({ display: !this.state.display })
    };
    render() {
        console.log("WelcomeModal render () 2 ");
        let visibleModal;
        if (this.state.display) {
            visibleModal = 
            <section className="modal-window">
                <div className="modal-window__block" id="my_modal">
                <div className="modal-window__block__content">
                    <span className="modal-window__block__content_cross" onClick={this.removeModal.bind(this)}>&times;</span>
                    <p>Приветик</p>
                </div>
                </div>
            </section>;
        }

        return (
            <div>
                { visibleModal };
            </div>
        )
    }
    //Метод монтирования (react встроенный)  componentDidMount() вызывается сразу 
    //после монтирования (то есть, вставки компонента в DOM). 
    //В этом методе должны происходить действия, которые требуют наличия DOM-узлов. Это хорошее место для создания сетевых запросов.
    //выполняет побочные задачи(ajax запросы например)
    componentDidMount () {
        console.log("componentDidMount() 3");
        console.log();
        
        this.setState({ display: !this.state.display })
        
    }
}

export default WelcomeModal;