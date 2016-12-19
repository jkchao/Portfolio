import React, { Component } from 'react';
import {
    Grid,
    Row,
    Col,
    Image,
} from 'react-bootstrap'

let Intro = `" Coder " : true ," Music " :  true ," Travel " : true , " Reading " : true, " Can " : " 码到黎明，碎到黑夜 " , " Dream " : " 码出一个未来 " ;`;

class About extends Component {
    constructor(props) {
        super(props);
        
    }
    render() {
        let  n=-1,
        timer = setInterval(()=>{
            n++;
            let m = $('.About-content').html();
            if(Intro.charAt(n)==','){
                m += `${Intro.charAt(n)}<br/>`
            }else{
                m += Intro.charAt(n)
            }         
            $('.About-content').html(m)
            if(n>Intro.length){
                clearInterval(timer)
            }         
        },60);   
        return (
            <div id="About" className="animated fadeIn">
                <Grid>
                    <Row>
                        <Col sm={6} xs={12}>
                            <div className="text-center left">
                                <Image src="../static/images/my.jpg" responsive></Image>
                                <p>Guo wenchao <i className="fa fa-mars"></i></p>
                                <p>Web Engineer</p>
                                <p>jkchaom@gmail.com</p> 
                            </div>                          
                        </Col>
                        <Col sm={6} xs={12} className="righter">                          
                            <div className="right">
                                <div className="brance"><i>{'{'}</i></div>
                                <p className="About-content"></p>
                                <div className="brance"><i>{'}'}</i></div>
                            </div>                         
                        </Col>
                    </Row>
                </Grid>
                <div className="Updown animated infinite slideInDown text-center">
                    <a className="Ability" href="#"><i className="fa fa-chevron-circle-down fa-3x"></i></a>
                </div>
            </div>
        );
    }
}

export default About;