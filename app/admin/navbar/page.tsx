"use client"
import React from "react" 
import ChatIcon from '@mui/icons-material/Chat';
import "./search.module.css"





const navbar :React.FC =()=>{
    // const [state, setState] = useState(false);
    // const profileRef = useRef<HTMLButtonElement>(null);

  



    // useEffect(() => {
    //     const handleDropDown = (e: MouseEvent) => {
    //         if (profileRef.current && !profileRef.current.contains(e.target as Node)) {
    //             setState(false);
    //         }
    //     };
    //     document.addEventListener('click', handleDropDown);
    //     return () => {
    //         document.removeEventListener('click', handleDropDown);
    //     };
    // }, []);
    
//   const navigation: Menu[] = [
//     {
//        title: "Houssem wrote feedback"
//   },
//   {
//     title:"mouhib sent an email to Company's name"
//   },
//   {
//     title:"marwa updated her account"
//   },
//   {
//     title:"Company's name respond to email's mouhib"
//   }
// ];



    return (
        <div  className="flex-1 bg-gray-100 p-4 ml-[350px]">
     <nav className="flex items-center justify-end bg-white border-gray-200 dark:bg-gray-900 p-4">
      <div className="search-box flex items-center">
 
    <button><ChatIcon className="ml-2 mr-[14px]"   style={{ fontSize: '40px' }}/></button>
    {/* <button ref={profileRef} onClick={() => setState(!state)}> <CircleNotificationsIcon className="ml-2" style={{ fontSize: '50px' }} />
  
    </button>        */}

  </div>
  {/* <ul className={`bg-white top-12 right-0 mt-5 space-y-5 lg:absolute lg:border lg:rounded-md lg:text-sm lg:w-52 lg:shadow-md lg:space-y-0 lg:mt-0 ${state ? '' : 'lg:hidden'}`}>
                {   
                    navigation.map((item, idx) => (
                        <li key={idx}>
                            <a className="block text-black-600 lg:hover:bg-gray-50 lg:p-2.5">
                                {item.title}
                            </a>
                        </li>
                    ))
                }
            </ul> */}
  
</nav> 
        </div>
    )
}
export default navbar ;