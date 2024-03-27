import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className="font-mono bg-gray-400 signup_session">
    <div className="container mx-auto">
      <div className="flex justify-center px-6 py-4">
        <div className="w-full xl:w-3/4 lg:w-11/12 flex">
        <div className="w-full bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg h-auto" style={{backgroundImage: "url('https://d12rkrm9wnppc5.cloudfront.net/production/paperclip/pieces/pics/108118/5d65999f1f4da4bce4f2f6092617b3b4/large/green-orange-forms-19.jpg?1692678537')"}}></div>
          <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
            <h3 className="pt-4 text-2xl text-center">Create an Account!</h3>
            <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
              <div className="mb-4 md:flex md:justify-between">
                <div className="mb-4 md:mr-2 md:mb-0">
                  <label htmlFor="firstName" className="block mb-2 text-sm font-bold text-gray-700">
                    First Name
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    placeholder="First Name"
                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="md:ml-2">
                  <label htmlFor="lastName" className="block mb-2 text-sm font-bold text-gray-700">
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    placeholder="Last Name"
                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block mb-2 text-sm font-bold text-gray-700">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Email"
                  className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4 md:flex md:justify-between">
                <div className="mb-4 md:mr-2 md:mb-0">
                  <label htmlFor="password" className="block mb-2 text-sm font-bold text-gray-700">
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    placeholder="******************"
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  />
                  <p className="text-xs italic text-red-500">Please choose a password.</p>
                </div>
                <div className="md:ml-2">
                  <label htmlFor="c_password" className="block mb-2 text-sm font-bold text-gray-700">
                    Confirm Password
                  </label>
                  <input
                    id="c_password"
                    type="password"
                    placeholder="******************"
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  />
                </div>
              </div>
              <div className="mb-6 text-center">
                <button
                  className="w-full px-4 py-2 font-bold text-white bg-[#26ABA2] rounded-full hover:bg-emerald-700 focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Register Account
                </button>
              </div>
              <hr className="mb-6 border-t" />
              <div className="text-center">
                <a className="inline-block text-sm text-[#26ABA2] align-baseline hover:text-emerald-700" href="#">
                  Forgot Password?
                </a>
              </div>
              <div className="text-center">
                <Link to='/login'>
                <a className="inline-block text-sm text-[#26ABA2] align-baseline hover:text-emerald-700" >
                  Already have an account? Login!
                </a>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Signup