import { Component } from "react";

import { ReactComponent as TerminalIcon } from '../icons/terminal.svg';
import { ReactComponent as ResumeIcon } from '../icons/resume.svg';
import { ReactComponent as AppGridIcon } from '../icons/view_app_grid.svg';
import { ReactComponent as WiFiSymbolic } from '../icons/wifi_symbolic.svg';
import { ReactComponent as ShutDownSymbolic } from '../icons/shutdown_symbolic.svg';

import Clock from "./InlineClock";



class Taskbar extends Component{
    constructor(props)
    {
        super(props);
        this.state={};
    }
    componentDidMount()
    {
        console.log(this.props);
    }
    render(){
        return(
            <nav className="navbar fixed-bottom navbar-expand-lg bg-dark">
                <div className="container-fluid">
                    <button className="navbar-brand">
                        <AppGridIcon height="3rem" width="3rem"/>
                    </button>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav m-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <button type="button" onClick={(event)=>{event.preventDefault(); return this.props.openApplication(event,"terminal")}} height="3rem" width="3rem" name="terminal">
                                    <TerminalIcon/>
                                </button>
                            </li>
                            <li class="nav-item">
                                <button type="button" onClick={(event)=>{event.preventDefault(); return this.props.openApplication(event,"resume")}} height="3rem" width="3rem" name="resume">
                                    <ResumeIcon/>
                                </button>
                            </li>
                        </ul>
                    </div>
                    <ShutDownSymbolic className="h-5 w-5"/>
                    <WiFiSymbolic className="h-5 w-5"/>
                    <Clock className="h-5 w-5"/>
                </div>
            </nav>
        );
    }
}
export default Taskbar;