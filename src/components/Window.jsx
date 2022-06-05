import React, {useState,Component} from 'react';

import {Rnd} from 'react-rnd';

class Window extends Component{
    constructor(props){
        super(props);
        this.state={
                x: 150,
                y: 205,
                width: 500,
                height: 190,
        };
        this.button_size={height:"1em",width:"1em"};
        this.maximizeWindow=this.maximizeWindow.bind(this);
        this.mininizeWindow=this.mininizeWindow.bind(this);
    }
    maximizeWindow(event)
    {
        event.preventDefault();
        var def = this.state;
        if(def.width===window.innerWidth && def.height===window.innerHeight){
            this.setState({x: 150,
            y: 205,
            width: 500,
            height: 190
            });
        }
        else
        {
            this.setState({x:0,y:0,height:window.innerHeight,width:window.innerWidth});
        }
    }
    mininizeWindow(event)
    {
        event.preventDefault();
        var def = this.state;
        if(def.width===window.innerWidth && def.height===window.innerHeight){
                this.setState({x: 150,
                y: 205,
                width: 500,
                height: 190
                });
        }
        else
        {
            this.setState({x:0,y:0,height:0,width:0});
        }
    }
    render(){
        return(
            <Rnd
                size={{ width: this.state.width,  height: this.state.height }}
                position = {{x:this.state.x, y:this.state.y}}
                onDragStop={(e, d) => { this.setState({ x: d.x, y: d.y }) }}
                onResize={(e, direction, ref, delta, position) => {
                    this.setState({
                        width: ref.offsetWidth,
                        height: ref.offsetHeight,
                        ...position,
                    });
                }}
                bounds="window" className="container-fluid bg-dark rounded">
                    <div className="border-bottom border-white p-2">
                        <button onClick={(event)=>{event.preventDefault();return this.props.closeWindow(event,this.props.appName)}} className="m-1 d-inline-block bg-danger rounded-circle" style={this.button_size}></button>
                        <button onClick={this.mininizeWindow} className="m-1 d-inline-block bg-warning rounded-circle" style={this.button_size}></button>
                        <button onClick={this.maximizeWindow} className="m-1 d-inline-block bg-success rounded-circle" style={this.button_size}></button>
                    </div>
                    {this.props.component}
            </Rnd>
        );
    }
}
export default Window;