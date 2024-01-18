"use client";
import Link from 'next/link';
import './SignUp.css'
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {

  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<number>(0);
  // const [longitude, setLongtitude] = useState<string>("");
  // const [latitude, setLaltitude] = useState<string>("");

  
  const router = useRouter();
  const notify = () => toast("Your Account Created Succesfuly! please log in");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    if (!fullName || !phoneNumber || !email || !password) {
      setError("All fields are necessary.");
      return;
    }
  
    try {
      // Check if the user already exists
      const resUserExists = await fetch("http://localhost:3000/api/login/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
  
  
      const res = await fetch("http://localhost:3000/api/signup/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName,
          phoneNumber,
          email,
          password,
        }),
      });
  
      const data = await res.json();
  
      if (res.ok) {
        router.push("/UserLogin/Login");
      } else {
        console.log("User registration failed:", data.error );
        setError("User registration failed.");
      }
    } catch (error) {
      console.error("Error during registration:", error);
      setError("Error during registration.");
    }
  };


    return ( 
        <div  className='flex justify-center items-center h-screen' style={{ backgroundColor: '#9ca3af' }}>
          <div className='max-w-[1700px] ml-20'>
           <img src="https://inv.assets.ansira.net/ChromeColorMatch/us/TRANSPARENT_cc_2023LRS070007_01_1280_1AA.png" alt="" />
          </div>
          <div className="container ">
          <form onSubmit={handleSubmit}>
        <div className="card mx-auto">
          <a className="login">sign up</a>
          <div className="inputBox">
            <input type="text" required={true} 
            onChange={(e)=>setFullName(e.target.value)} 
            />
            <span className="user">fullName</span>
          </div>
          <div className="inputBox">
            <input type="text" required={true} 
            onChange={(e)=>setEmail(e.target.value)} 
            />
            <span className="user">email</span>
          </div>
          <div className="inputBox">
            <input type="password" required={true}
            onChange={(e)=>setPassword(e.target.value)}
             />
            <span>Password</span>
          </div>
          <div className="inputBox">
            <input type="text" required={true}
            onChange={(e)=>setPhoneNumber(e.target.value)}
            />
            <span className="user">Number</span>
          </div>

          <button className="enter" onClick={()=>{notify()}}>register</button>
          {error && (
            <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
              {error}
            </div>
          )}
          <div className='flex text-sm '>
          <h1  className=' mb-4'>Already have account  ?</h1><Link className=' ' href={'/UserLogin/Login'}><span className='underline  cursor-pointer'>  Log in</span></Link>
          </div>
        </div>
        </form>
      </div>
      
        </div>
     );
}
 
export default SignUp;