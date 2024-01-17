"use client";

import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import Link from 'next/link'
import { useState } from "react";
import './login.css'
export default function Home() {
  const { push } = useRouter();
  const [userId, setUserId] = useState<string | null>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string>('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const logCompany  = await axios.post("http://localhost:3000/api/login", { emailCompany: email, passwordCompany: password });

      localStorage.setItem('idcompany', logCompany.data.idcompany);
      console.log("data ", logCompany)
      if(logCompany.data.PaymentVerification===false) {
        push("/company/Payment")
      }
      if (logCompany.data.PaymentVerification===true) {
        push("/company/DashBoard")
      }
    } catch (e) {
      const error = e as AxiosError;

      alert(error.message);
    }
  };
  const getCompanyIdFromLocalStorage = () => {
    const storedCompanyId = localStorage.getItem('idcompany');
    if (storedCompanyId) {
      setUserId(storedCompanyId);
    }
  };

  return (
  
<div className='flex justify-center items-center h-screen' style={{ backgroundColor: '#9ca3af' }}>
      <div className='max-w-[1700px] ml-20'>
        <img src="https://inv.assets.ansira.net/ChromeColorMatch/us/TRANSPARENT_cc_2023LRS070007_01_1280_1AA.png" alt="" />
      </div>
      <div className="container" >
        <form onSubmit={handleSubmit} >
        <div className="card mx-auto">
          <a className="login">Log in</a>
          <div className="inputBox">
        <input
          type="text" required={true} 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
         <span className="user">email</span>
         </div>
         <div className="inputBox">
        <input
          type="password"
          
          required={true} 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
           <span>Password</span>
           </div>
           <button className="enter" onClick={()=>getCompanyIdFromLocalStorage()}>Log In</button>
          <div className='flex text-sm mt-3'>
          <h1  className='-mt-6 mb-4  '>Already have account  ?  </h1> <Link className='-mt-6 ' href="/SignupCompany"><span className='underline  cursor-pointer'>  Register Now</span></Link>
          </div>
         
        </div>
        </form>
       </div>
  </div>
   
  );
}
