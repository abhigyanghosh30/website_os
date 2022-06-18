import { Component, useState }  from "react";
import React from "react";
import XTerm from './XTerm.tsx'

class Terminal extends Component{
    constructor(props)
    {
        super(props);
        // this.state={previous:[],command:""};
        this.xtermRef = React.createRef();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount()
    {
        this.xtermRef.current.terminal.writeln('Hello, World!');
    }
    handleSubmit(event)
    {
        event.preventDefault();
        console.log(this.state);
        this.setState((state,props)=>{
            return {previous:state.previous.concat(["[abhigyan.ghosh@researchweb.iiit.ac.in] $"+state.command]).concat(["zsh: command not found: "+state.command])};
        });
        this.setState({command:""});
        console.log(this.state);
    }
    handleChange(event)
    {
        event.preventDefault();
        console.log(event.target.value);
        this.setState({command:event.target.value});
        console.log(this.state.command);
    }
    render(){
        return(
            // <div className="container-fluid overflow-auto">
            //     <div className="row text-white">
            //     {
            //         this.state.previous.map((item,index,array)=>{
            //             return (<span className="text-left">
            //                 {item}
            //                 </span>
            //             );
            //         })
            //     }
            //     <div className="text-left">{"[abhigyan.ghosh@researchweb.iiit.ac.in] $"}
            //         <span className="inline text-left">
            //             <form className="pl-1 inline text-left" onSubmit={this.handleSubmit}>
            //                 <input type="text" onChange={this.handleChange} value={this.state.command} className="bg-dark focus:border-0 focus-visible:outline-none text-slate-200"></input>
            //                 <input type="submit" hidden/>
            //             </form>
            //         </span>
            //     </div>
            //     </div>
            // </div>
            
            <XTerm className="container-fluid" ref={this.xtermRef}/>
        );
    }
}
export default Terminal;