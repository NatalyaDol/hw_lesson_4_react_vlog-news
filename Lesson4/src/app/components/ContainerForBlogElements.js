import React from 'react';


import BlogElement from './BlogElement'
class ContainerForBlogElements extends React.Component {
    render() {
        const menuItems = [
          { dataPublication: "00/00/0000", authorPublication: "Danya", textContainerTitle: "Lorem Ipsum - это текст", textContainerContent: "sldjfs;aldjf;alsdjfa;lskjdf;alskdjfas;lkdjf;Часто используемый в печати и вэб-дизайне. Lorem Ipбезымянный печатник создал большую коллекцишно пережил без заметных изменений пять веков,Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликациногие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым слозу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рож;alskjdfas;lkdjfas;lkdjfa;lskdjf;lakjs"},
          { dataPublication: "00/00/0000", authorPublication: "Danya", textContainerTitle: "Lorem Ipsum - это текст", textContainerContent: "sldjfs;aldjf;alsdjfa;lskjdf;alskdjfas;lkdjf;Часто используемый в печати и вэб-дизайне. Lorem Ipбезымянный печатник создал большую коллекцишно пережил без заметных изменений пять веков,Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликациногие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым слозу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рож;alskjdfas;lkdjfas;lkdjfa;lskdjf;lakjs"},
          { dataPublication: "00/00/0000", authorPublication: "Danya", textContainerTitle: "Lorem Ipsum - это текст", textContainerContent: "sldjfs;aldjf;alsdjfa;lskjdf;alskdjfas;lkdjf;Часто используемый в печати и вэб-дизайне. Lorem Ipбезымянный печатник создал большую коллекцишно пережил без заметных изменений пять веков,Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликациногие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым слозу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рож;alskjdfas;lkdjfas;lkdjfa;lskdjf;lakjs"},
        ]
        return (
          <div>
            <BlogElement items={menuItems}/>  
          </div>);
    }
}
export default ContainerForBlogElements;