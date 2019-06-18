import React from 'react';

class Blog extends React.Component {
    render() {
        const items = this.props.items.map((item, index) => {
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
            <nav className="header">
                <ul className="navigation__menu">
                    {items}
                </ul>
            </nav>
        );
      }
}

export default Blog;