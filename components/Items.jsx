import React, {Component} from 'react';
import {
    Grid,
    Row,
    Col,
    Image,
    Thumbnail,
    OverlayTrigger,
    Tooltip
} from 'react-bootstrap';

let tooltipCode = (
    <Tooltip id="tooltip"><strong>Codepen</strong></Tooltip>
),
    tooltipGithub = (
     <Tooltip id="tooltip"><strong>Github</strong></Tooltip>
    ),

 Projects = [
    {   
        tooltip:tooltipCode,
        Title:'Quotes',
        src:'../static/images/Quotes.png',
        text:`This is my first project on Freecodecamp, It's very easy. Showing a new random and sending to Twitter .`,
        Code:'Html5, Css3, Javascript, JQuery.',
        Layout:'Bootstrap',
        i:'fa fa-codepen fa-2x',
        href:'http://s.codepen.io/jkchao/debug/gwJYGR'
    },
    {   
        tooltip:tooltipCode,
        Title:'Wikipedia Viewer',
        src:'../static/images/Wiki.png',
        text:`This is a simple example about Ajax. Throunth the Wikipedia's API ,we can get some information that we want.`,
        Code:'Html5, Css3, Javascript, JQuery.',
        Layout:'Bootstrap',
        i:'fa fa-codepen fa-2x',
        href:'http://s.codepen.io/jkchao/debug/vyGJRo'
    }, 
    {   
        tooltip:tooltipCode,
        Title:'JS Calculater',
        src:'../static/images/Calculater.png',
        text:`This is a calculater with Javascript technology,you can add, subtract, multiply and divide two numbers.`,
        Code:'Html5, Css3, Javascript, JQuery.',
        Layout:'Bootstrap.',
        i:'fa fa-codepen fa-2x',
        href:'http://s.codepen.io/jkchao/debug/oYBJEZ'
    },
    {
        tooltip:tooltipCode,
        Title:'Tic Tac Toe game',
        src:'../static/images/Game.png',
        text:`This is a game called Tic Tac Toe, you can play it with the computer and you will lose inadvertently.`,
        Code:'Html5, Css3, Javascript, JQuery.',
        Layout:'Bootstrap.',
        i:'fa fa-codepen fa-2x',
        href:'http://s.codepen.io/jkchao/debug/GNmBOK'
    }, 
    {
        tooltip:tooltipCode,
        Title:'Markdown',
        src:'../static/images/Markdown.png',
        text:`You can type GitHub-flavored Markdown into a textarea, and you will see the preview `,
        Code:'Html5, Css3, Javascript, JQuery, Sass,React.',
        Layout:'React-Bootstrap, Bootstrap',
        i:'fa fa-codepen fa-2x',
        href:'http://s.codepen.io/jkchao/debug/jVvoZQ'
    },
    {
        tooltip:tooltipCode,
        Title:'Leaderboard',
        src:'../static/images/Leaderboard.png',
        text:`Use the fetch method in React.js, we can get data on Freecodecamp and we can toggle it`,
        Code:'Html5, Css3, Javascript, JQuery, Sass, React, npm, webpack',
        Layout:'React-Bootstrap, Bootstrap,',
        i:'fa fa-codepen fa-2x',
        href:'http://s.codepen.io/jkchao/debug/bBmxGG'
    },
    {
        tooltip:tooltipCode,
        Title:'React-recipe',
        src:'../static/images/Recipe.png',
        text:`This is a recipe, you can add to, delete and revise. The will still be there if you refresh the page.`,
        Code:'Html5, Css3, Javascript, JQuery, Sass, React, npm, webpack',
        Layout:'React-Bootstrap, Bootstrap,',
        i:'fa fa-codepen fa-2x',
        href:'http://s.codepen.io/jkchao/debug/vyvONo'
    },
    {
        tooltip:tooltipGithub,
        Title:'Restaurant',
        src:'../static/images/Restaurant.png',
        text:`This is a project that contain Node.js,,`,
        Code:'Html5, Css3, Javascript, JQuery, Sass, npm, Node.js,Koa',
        Layout:' Bootstrap.',
        i:'fa fa-github fa-2x',
        href:'https://github.com/jkchao/koa'
    },
    {
        tooltip:tooltipGithub,
        Title:'A Portfolio',
        src:'../static/images/Page.png',
        text:`It is the page, a personal portfolio about me, useing React.js, Scss, ES6 and npm;`,
        Code:'Html5, Css3, Javascript, JQuery, Sass, npm, es6, react',
        Layout:'React-Bootstrap, Bootstrap,',
        i:'fa fa-github fa-2x',
        href:'https://github.com/jkchao/koa'
    },                                
]


class Items extends Component {
    render() {
        let Project = Projects.map((data,n) => {
            return (
                <Col md={4} sm={6} xs={12} key={n}>
                    <div className="car">
                        <Thumbnail src={data.src} >
                            <h3 className="text-center">{data.Title}</h3>
                        </Thumbnail>
                        <div className="car-back">
                            <div className="container-fluid">
                                <h3 className="text-center">{data.Title}</h3>
                                <p className="text-justify content">{data.text}</p>
                                <p>
                                    <strong>Code:</strong> {data.Code}
                                    <br/>
                                    <strong>Layout:</strong> {data.Layout}
                                </p>
                                 <OverlayTrigger  placement="top" overlay={data.tooltip}>
                                        <a href={data.href}  target="_blank" bsStyle="default"><i className={data.i}></i></a>
                                </OverlayTrigger>
                            </div>

                        </div>
                    </div>
                </Col>
            )
        })
        return (
            <div id="Items">
               <Grid>
                   <h1 className="Ability-title">Items</h1>
                   <hr />
                    <Row>
                        {Project}
                        <h1 className="text-center">......</h1>
                    </Row> 
               </Grid>
            </div>
        );
    }
}

export default Items;