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
        this.maximizeWindow=this.maximizeWindow.bind(this);
        this.mininizeWindow=this.mininizeWindow.bind(this);
    }
    maximizeWindow(event)
    {
        event.preventDefault();
        this.setState({x:0,y:0,height:window.innerHeight,width:window.innerWidth});
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
                bounds="window" className="relative overflow-hidden shadow-xl flex bg-slate-800 dark:bg-slate-900/70 dark:backdrop-blur dark:ring-1 dark:ring-inset dark:ring-white/10">
                    <div className="relative w-full flex flex-col">
                        <div className="flex-none border-b border-slate-500/30">
                            <div className="flex items-center h-8 space-x-1.5 px-3">
                                <button type="button" onClick={(event)=>{event.preventDefault();return this.props.closeWindow(event,this.props.appName)}} className="w-2.5 h-2.5 bg-red-600 rounded-full"></button>
                                <button type="button" onClick={this.mininizeWindow} className="w-2.5 h-2.5 bg-yellow-600 rounded-full"></button>
                                <button type="button" onClick={this.maximizeWindow} className="w-2.5 h-2.5 bg-green-600 rounded-full"></button>
                            </div>
                        </div>
                        <div className="relative min-h-0 flex-auto flex flex-col">
                            {this.props.component}
                        </div>
                    </div>
            </Rnd>
        );
    }
}
export default Window;