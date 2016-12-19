import React, {Component} from 'react';
import {
    Grid,
    Row,
    Col,
    Image,
    ProgressBar
} from 'react-bootstrap';

let Icons = ['fa fa-css3','fa fa-html5','fa fa-git','fa fa-github','fa fa-chrome']
let Iconsm = ['js.png','jquery.png','bootstrap.png','react.png','sass.png','webpack.png','Node.png']
class Ability extends Component {

    render() {
        let Ico = Icons.map((data,n) =>{
            return (
                <Col sm={3} xs={4} key={n} className= "text-center icons">
                   <a href="#1" className="icon" onMouseOver={this.over} onMouseOut={this.out}><i  className={data}  aria-hidden="true"></i></a>
                </Col>
            )
        });
        let Iconm = Iconsm.map((data,n) => {
            return (
                <Col sm={3} xs={4} key={n} className= "text-center icons">
                   <a href="#1" className="icon" onMouseOver={this.over} onMouseOut={this.out}><Image src={'../static/images/'+data } ></Image></a>
                </Col>
            )
                            
        })
        return (
            <div id="Ability">            
               <Grid>
                 <h2 className="Ability-title">Ability</h2>
                 <hr />
                 <Row className="Ability-content">       
                    <Col sm={6} xs={12}>
                        <div className="left">
                            <Row>
                                {Ico}
                                {Iconm}
                            </Row>                       
                        </div>
                    </Col> 
                    <Col sm={6} xs={12} className="Ability-right">
                        <div className="Ability-right-content animated bounceIn">
                            <h2 id="title">Css3:</h2>
                            <p id="content">了解 Css3 新增选择器（属性，结构伪类，状态伪类），了解flex,media,transform,animated...</p>
                        </div>
                    </Col>
                 </Row>                   
               </Grid>           
               <Grid>
                    <hr/> 
                    <Row className="Introduce">
                        <Col sm={6} xs={12}>
                            <div>
                                <h3>Someone:</h3>
                                <p className="text-justify">
                                     Hello! My name is Guo Wenchao, you can call me JKchao or Chao.
                                I am a 90s boy, graduated from University of South China.
                                </p>
                                <p className="text-justify">
                                    I firmly believe in life long learning, and sooner or later we will get something that we want  .
                                </p>
                                <p className="text-justify">
                                    At my age, I have so many new ideas, and I will exploring new technologies, going ahead!  
                                </p>
                                <p> </p>
                                <p className="pull-right">end.</p>
                            </div>
                        </Col>
                        <Col sm={6} xs={12}>
                            <h3>Html:</h3>
                            <ProgressBar active bsStyle="info" now={80} label={`80%`}  />
                            <h3>Css3:</h3>
                            <ProgressBar active bsStyle="info" now={80} label={`80%`}  />
                            <h3>Javascript</h3>
                            <ProgressBar active bsStyle="info" now={50} label={`50%`}  />
                            <h3>Full Stack:</h3>
                            <ProgressBar active bsStyle="info" now={30} label={`30%`}  />                        
                        </Col>
                    </Row>

               </Grid>               
            </div>
        );
    }
}

export default Ability;
