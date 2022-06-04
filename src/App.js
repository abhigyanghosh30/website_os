import { Component } from 'react';
import './App.scss';
import Taskbar from './components/Taskbar';
import Window from './components/Window';
import Terminal from './components/Terminal';
class App extends Component {
  constructor(props)
  {
	super(props);
	this.state={
		openApps:[],
		closedApps:["terminal","resume"]
	};
	this.closeWindow=this.closeWindow.bind(this);
	this.openApplication=this.openApplication.bind(this);
  }
  closeWindow(event,appName)
  {
	event.preventDefault();
	this.setState((state,props)=>({
		closedApps: state.closedApps.concat([appName])
	}));
	console.log(this.state);
	this.setState((state,props)=>({
		openApps: state.openApps.filter(function(value,index,arr){return value!==appName})
	}));
  }
  openApplication(event,appName)
  {
	event.preventDefault();
	this.setState((state,props)=>({
		openApps: state.openApps.concat([appName])
	}));
	console.log(this.state);
	this.setState((state,props)=>({
		closedApps: state.closedApps.filter(function(value,index,arr){return value!==appName})
	}));
  }
  render()
  {
	return (
	  <div className="App">
		{this.state.openApps.indexOf("terminal")>-1 && <Window closeWindow={this.closeWindow} openState={this.state.openApps.indexOf("terminal")} component={<Terminal/>} appName="terminal"/>}
		{this.state.openApps.indexOf("resume")>-1 && <Window closeWindow={this.closeWindow} openState={this.state.openApps.indexOf("resume")} component={<Terminal/>} appName="resume"/>}
		<Taskbar openApplication={this.openApplication}/>
	  </div>
	);
  }
}

export default App;
