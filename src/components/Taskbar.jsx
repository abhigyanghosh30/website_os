import { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro';

class Taskbar extends Component{
    render(){
        return(
            <nav class="bg-gray-800 fixed bottom-0 w-full">
                <div class="max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div class="relative flex items-center justify-between h-16">
                        <div className="absolute inset-y-0 left-0 flex items-center">
                            <FontAwesomeIcon icon={brands('windows')} size="xl" inverse/>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}
export default Taskbar;