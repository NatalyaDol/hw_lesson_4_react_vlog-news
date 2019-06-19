import React from 'react';

export default class Post extends React.Component {
    constructor(props) {
        console.log("Post");
        
        super(props);
        this.state = {
            items: this.props.items
        };
        //Реакт создай ссылку  к которой я могу обратиться
        this.myRefName = React.createRef();
        this.myRefComment = React.createRef();
        
        this.addNewItems = this.addNewItems.bind(this);
        
    }
    //добавление нового bloga - он же items от родителя Post
    addNewItems () {
        console.log(this.myRefComment.current.value, this.myRefName.current.value);

        // получение введенных данных через метод ref={this.myRefName}
        let userName = this.myRefName.current.value;
        let userComments = this.myRefComment.current.value;
        let date = String(new Date);

        //новый объект на основе введенных данных user
        let newComment = { dataPublication: date, authorPublication: userName, textContainerTitle: userComments, textContainerContent: userComments};

        const items = [...this.state.items, newComment];
        console.log(items);
        
        

        //очистка введенных полей 
        this.myRefName.current.value = '';
        this.myRefComment.current.value = '';

        //перерисовка
        this.setState({ items: items });
        console.log("newsetState");
        
    }
    

    render() {
        console.log("!!!!!!!отрисовка по MAP");
        
        const items = this.state.items.map((item, index) => {
          return <div className="textContainer" key={index}>
                <div className="dataPublication">{item.dataPublication}</div>
                <div className="authorPublication">
                    <span>Автор:</span>
                    <span>{item.authorPublication}</span>
                </div>
                <div className="textContainerTitle">
                    {item.textContainerTitle}
                </div>
                <div className="textContainerContent">
                    {item.textContainerContent}
                </div>
            </div>
        })
    
        return (
            <div>
                {items} 
                <label>
                    <input ref={this.myRefName} type="text" placeholder="Ваше имя"></input>
                    <br></br>
                    <textarea ref={ this.myRefComment } rows="10" cols="45" placeholder="Комментарий"></textarea>
                    <br></br>
                    <button onClick={this.addNewItems}>Добавить Lorem</button>
                </label>
            </div>
        );
    }
}

