import React from 'react';

import BtnDelete from './BtnDelete';
class BlogElement extends React.Component {
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
                <BtnDelete/>
            </div>
        })
    
        return (
            <div>
                {items} 
            </div>
        );
    }
}

export default BlogElement;