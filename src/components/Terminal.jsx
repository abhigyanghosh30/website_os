import { Component, useState } from "react";

class Terminal extends Component{
    constructor(props)
    {
        super(props);
        this.state={previous:[],command:""};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleSubmit(event)
    {
        event.preventDefault();
        console.log(this.state);
        this.setState((state,props)=>{
            return {previous:state.previous.concat([state.command])};
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
            <div className="w-full relative flex-auto">
                <div className="container flex min-h-full">
                    <code className="flex-auto relative block pt-4 pb-4 px-4 text-slate-200">
                    {
                        this.state.previous.map((item,index,array)=>{
                            return (<span className="block ml-0 text-left">
                                {"[abhigyan.ghosh@researchweb.iiit.ac.in] $"+item}
                                </span>
                            );
                        })
                    }
                    <p className="text-left">{"[abhigyan.ghosh@researchweb.iiit.ac.in] $"}
                    <span className="inline text-left overflow-hidden">
                        <form className="pl-1 inline text-left overflow-hidden" onSubmit={this.handleSubmit}>
                            <input type="text" onChange={this.handleChange} value={this.state.command} className="bg-slate-800 focus:border-0 focus-visible:outline-none text-slate-200"></input>
                            <input type="submit" hidden/>
                        </form>
                    </span>
                    </p>
                    </code>
                </div>
            </div>
        );
    }
}
export default Terminal;