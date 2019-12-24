import React, { Component } from 'react'

class Card extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col s12 m4 l8">
                        <div className="card horizontal">
                        <img src={require("/Users/apple/Desktop/WinterProjects/React/twitter-card/src/sach_dp.jpg")} 
                                className="profile" alt="profile" height="70" width="70" />
                            <div className="card-stacked">
                                <div className="card-content">
                                    <p className="content" style={{color : 'gray'}}><b style={{color : 'black'}}>Sachin Tendulkar </b><img className="verified" 
                                    src={require("/Users/apple/Desktop/WinterProjects/React/twitter-card/src/bluetick.png")} alt="verified" 
                                    align="top" height="12" width="12" /> @sachin_rt . Dec 11</p><br />
                                    <p className="tweet" align="left">I wish to clarify that my son Arjun & daughter Sara are not on Twitter.
                                    The account @jr_tendulkar is wrongfully impersonating Arjun and posting malicious tweets 
                                    against personalities & institutions. Requesting @TwitterIndia to act on this as soon as 
                                    possible.</p>
                                    <div className="icons">
                                        <span style={{color : 'gray'}}><i className="tiny material-icons" style={{color : 'gray'}}>chat_bubble_outline</i>90</span>
                                        <span style={{color : 'gray'}}><i className="tiny material-icons" style={{color : 'gray'}}>cached</i>12</span>
                                        <span style={{color : 'gray'}}><i className="tiny material-icons" style={{color : 'gray'}}>favorite_border</i>1011</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card
