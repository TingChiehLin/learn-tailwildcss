import Logo from "../logo.svg";
import { RiMenu3Line } from "react-icons/ri";

const NavigationBar = () => {
    return (
        <div className="w-full h-24 bg-purple-500 flex justify-between items-center">
            <div className="pl-4">
                <img
                    className="w-16 md:w-32 h-32"
                    src={Logo}
                />
            </div>
            <div className="flex justify-center items-center gap-6 md:text-lg">
                <div>Home</div>
                <div>About</div>
                <div>Contact</div> 
            </div>
            <div className="pr-4">
                <div className="hidden md:block">
                    8 800 123 45 67
                </div>
                <div className="md:hidden">
                    <RiMenu3Line size={30}/>
                </div>
            </div>
        </div>
    )
}

export default NavigationBar;