// "use client";
// import Link from "next/link";
// import Image from "next/image";
// import { useEffect, useState } from "react";
// export default function LoginPage() {
//   const [showPassword, setShowPassword] = useState(false);
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const elem = document.getElementById('error');
//     elem.style.display = "none"
  
//     try {
//       const response = await fetch("https://salonapp-f05m.onrender.com/api/v1/user/login/", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });
  
//       const data = await response.json();
      
  
//       if (response.status === 200) {
//         // alert("Login successful");
//         elem.innerText = 'Login successful';
//         elem.style.color = 'green';
//         elem.style.display = "block";
//         setTimeout(() => {
//           window.location.href = "/Dashboard";
//       }, 1000);
//         // Redirect user or store token
//       } else if (response.status === 400) {
//         elem.innerText = 'Please Enter Email and Password';
//         elem.style.color = 'red';
//         elem.style.display = "block";
//       } else if (response.status === 401) {
//         elem.innerText = 'Invalid Credentials';
//         elem.style.color = 'red';
//         elem.style.display = "block";
//       } else if (response.status === 403) {
//         elem.innerText = 'User Unregstered. Please Verify OTP';
//         elem.style.color = 'red';
//         elem.style.display = "block";
//       } else if (response.status === 404) {
//         elem.innerText = 'No User Found With the Associated Email';
//         elem.style.color = 'red';
//         elem.style.display = "block";
//       } else {
//         elem.innerText = 'Server Error. Please Try Again';
//         elem.style.color = 'red';
//         elem.style.display = "block";
//       }
//     } catch (error) {
//         elem.innerText = 'Network Error';
//         elem.style.color = 'red';
//         elem.style.display = "block";
//     }
//   };
  


//   return (
//     <div className="h-screen w-screen flex items-center justify-center bg-white">
//       <div className="flex w-full h-full  ">
//         {/* Left Content */}
//         <div className="w-3/5 flex justify-center   ">
//           <div className="text-center py-8 xl:pr-6 lg:pl-4 2xl:pr-20">
//             <div className="h-16 w-16 rounded-full bg-gray-300 mx-auto" />
//           </div>
//           <div className="w-3/4 2xl:w-4/6 flex flex-col justify-center  xl:mb-40 lg:mb-32 mr-10 2xl:mr-24  ">
//             <h2 className="text-2xl font-bold font-malayalam text-gray-800 mb-6">
//               Welcome back to{" "}
//               <span className="text-[#C39D4C]">Learning App</span>
//             </h2>
//             <h3 className="text-4xl font-malayalam font-extrabold text-[#C39D4C] mb-6">
//               Login
//             </h3>

//             <form onSubmit={handleSubmit} className="space-y-6 mt-3">
//               <div>
//                 <label className="block text-sm font-bold text-gray-700">
//                 </label>
//                 <input
//                   type="email"
//                   placeholder="Enter email address"
//                   className="mt-1 w-full h-12 rounded-3xl  border px-4 py-2 focus:border-yellow-500 focus:ring-yellow-500"
//                   name='email'
//                   value={formData.email}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-bold text-gray-700">
//                   Password
//                 </label>
//                 <div className="relative">
//                   <input
//                     type={showPassword ? "text" : "password"}
//                     placeholder="Password"
//                     className="mt-1 w-full h-12 rounded-3xl  border  px-4 py-2 focus:border-yellow-500 focus:ring-yellow-500"
//                     name='password'
//                     value={formData.password}
//                     onChange={handleChange}
//                   />
//                   <button
//                     type="button"
//                     onClick={() => setShowPassword(!showPassword)}
//                     className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"
//                   >
//                     {showPassword ? "🙈" : "👁️"}
//                   </button>
//                   <label className="block text-sm font-bold text-red-700" id="error" style={{display: "none"}}>
//                   Email address
//                 </label>
//                 </div>
//               </div>
//               <div className="flex items-center justify-between">
//                 <label className="inline-flex items-center text-sm text-gray-600">
//                   <input
//                     type="checkbox"
//                     className="mr-2 rounded border-gray-300"
//                   />
//                   Remember me
//                 </label>
//                 <a href="#" className="text-sm text-yellow-600 hover:underline">
//                   Forgot your password?
//                 </a>
//               </div>
//               {/* <Link href="/Dashboard"> */}
//                 <button
//                   className="w-full h-12 rounded-3xl bg-gradient-to-r from-[#dab866] 
//                 to-[#be9337] py-2 text-white font-medium hover:bg-yellow-600"
//                 type="submit"
//                 >
//                   Sign In
//                 </button>
//               {/* </Link> */}
//             </form>

//             {/* <div className="my-6 flex items-center">
//               <div className="h-px flex-1 bg-gray-300"></div>
//               <span className="px-4 text-gray-600 text-sm">or</span>
//               <div className="h-px flex-1 bg-gray-300"></div>
//             </div> */}

//             {/* <div className="flex flex-col space-y-3">
//               <button className="flex items-center justify-center rounded-md border bg-white py-2 font-medium text-gray-700 hover:bg-gray-50">
//                 <img
//                   src="/google-icon.svg"
//                   alt="Google"
//                   className="h-5 w-5 mr-2"
//                 />
//                 Sign In with Google
//               </button>
//               <button className="flex items-center justify-center rounded-md border bg-white py-2 font-medium text-gray-700 hover:bg-gray-50">
//                 <img
//                   src="/facebook-icon.svg"
//                   alt="Facebook"
//                   className="h-5 w-5 mr-2"
//                 />
//                 Sign In with Facebook
//               </button>
//             </div> */}
//           </div>
//         </div>

//         {/* Right Image */}
//         <div className="w-2/4 2xl:w-4/6  relative   ">
//           <Image
//             src="/cos.png"
//             // width={1200}
//             // height={1200}
//             alt="Loading"
//             layout="fill"
//             objectFit="cover"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function AdminLoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    try {
      const response = await fetch("https://salonapp-f05m.onrender.com/api/v1/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (response.status === 200) {
        setErrorMessage("Login successful");
        localStorage.setItem("token", data.token);
        setTimeout(() => {
          window.location.href = "/Dashboard";
        }, 1000);
      } else {
        setErrorMessage(data.message || "Login failed");
      }
    } catch (error) {
      setErrorMessage("Network Error");
    }
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-white">
      <div className="flex w-full h-full">
        {/* Left Content */}
        <div className="w-3/5 flex justify-center">
          <div className="w-3/4 flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Welcome back to <span className="text-[#C39D4C]">Admin Panel</span>
            </h2>
            <h3 className="text-4xl font-extrabold text-[#C39D4C] mb-6">Admin Login</h3>
            <form onSubmit={handleSubmit} className="space-y-6 mt-3">
              <input
                type="email"
                placeholder="Enter email address"
                className="w-full h-12 rounded-3xl border px-4 py-2 focus:border-yellow-500 focus:ring-yellow-500"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="w-full h-12 rounded-3xl border px-4 py-2 focus:border-yellow-500 focus:ring-yellow-500"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"
                >
                  {showPassword ? "🙈" : "👁️"}
                </button>
              </div>
              {errorMessage && <p className="text-red-600">{errorMessage}</p>}
              <button
                className="w-full h-12 rounded-3xl bg-gradient-to-r from-[#dab866] to-[#be9337] py-2 text-white font-medium"
                type="submit"
              >
                Sign In
              </button>
            </form>
          </div>
        </div>
        {/* Right Image */}
        <div className="w-2/4 relative">
          <Image src="/cos.png" alt="Loading" layout="fill" objectFit="cover" />
        </div>
      </div>
    </div>
  );
}
