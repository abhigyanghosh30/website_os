import { Component, Fragment } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Menu, Transition } from '@headlessui/react'
import { brands, solid } from '@fortawesome/fontawesome-svg-core/import.macro';
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
            <nav className="bg-gray-800/50 fixed bottom-0 w-full">
                <div className="px-2">
                    <div className="relative flex items-center justify-between h-16">
                        <Menu as="div" className="flex items-center justify-start">
                            <div>
                                <Menu.Button className="inline-flex justify-center w-full shadow-sm px-4 py-2 font-medium hover:text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                                    <FontAwesomeIcon icon={brands('windows')} size="xl" />
                                </Menu.Button>
                            </div>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items className="origin-top-right absolute bottom-0 mb-12 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
                                    <div className="py-2 px-4">
                                        <Menu.Item>
                                            <button className="group flex w-full items-center rounded-md px-2 py-2 text-sm">
                                                <FontAwesomeIcon icon={solid('terminal')} className="mr-2 h-5 w-5" aria-hidden="true"/>
                                                Terminal
                                            </button>
                                        </Menu.Item>
                                        <Menu.Item>
                                            <button className="group flex w-full items-center rounded-md px-2 py-2 text-sm">
                                                <FontAwesomeIcon icon={solid('file-pdf')} className="mr-2 h-5 w-5" aria-hidden="true"/>
                                                Resume
                                            </button>
                                        </Menu.Item>
                                    </div>
                                </Menu.Items>
                            </Transition>
                        </Menu>
                        <div className="flex justify-center items-center">
                            <button type="button" onClick={(event)=>{event.preventDefault(); return this.props.openApplication(event,"terminal")}} className="px-5 py-5 m-1 h-15 w-15 bg-slate-800" name="terminal">
                                <FontAwesomeIcon icon={solid('terminal')} size="xl" inverse/>
                            </button>
                            <button type="button" onClick={(event)=>{event.preventDefault(); return this.props.openApplication(event,"resume")}} className="px-5 py-5 m-1 h-15 w-15 bg-slate-800" name="resume">
                                <FontAwesomeIcon icon={solid('file-pdf')} size="xl" inverse/>
                            </button>
                        </div>
                        <div className="flex justify-end items-end">
                            <Clock/>
                            
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}
export default Taskbar;