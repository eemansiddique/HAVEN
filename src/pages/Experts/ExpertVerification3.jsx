import React from 'react'
import { Link } from 'react-router-dom'

const ExpertVerification3 = () => {
  return (
    


    <>
      <section className="form expert_verify " >
        <div className="flex justify-center items-center  expert_verify">
          <div >
            <ol className="items-center w-full space-y-4 sm:flex sm:space-x-36 sm:space-y-0 mt-[-2rem]">
              <li className="flex items-center text-[#26ABA2] dark:text-blue-500 space-x-2.5 ">
                <span className="flex items-center justify-center w-8 h-8 border border-[#26ABA2] rounded-full shrink-0 dark:border-blue-500 ">1</span>
                <span>
                  <h3 className="font-medium leading-tight">User info</h3>
                  <p className="text-sm ">Step details here</p>
                </span>
              </li>
              <li className="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5">
                <span className="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400">2</span>
                <span>
                  <h3 className="font-medium leading-tight">Company info</h3>
                  <p className="text-sm">Step details here</p>
                </span>
              </li>
              <li className="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5">
                <span className="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400">3</span>
                <span>
                  <h3 className="font-medium leading-tight">Payment info</h3>
                  <p className="text-sm">Step details here</p>
                </span>
              </li>
            </ol>
          </div>
          {/* <div className="hidden"></div> */}
          
        </div>
        <div className="pt-10">
        <p className="text-center text-2xl font-semibold">
        <span className="text-[#26ABA2]">Haven</span> Experts Panel
         </p>
         <p className="text-gray-500 text-center pt-2">
        Thank you for considering Haven as your next growth destination.
        </p>
       </div>

       {/* form section */}

       <div className="mx-auto max-w-xl py-5">
            <form noValidate className="space-y-5">
                <div>
                    <label htmlFor="language" className="block mb-1 text-sm font-medium text-gray-700">Languages you are comfortable with while texting the user</label>
                    <div className="flex items-center mb-4">
                        <input type="checkbox" id="english" name="english" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 ng-untouched ng-pristine ng-valid" />
                        <label htmlFor="english" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">English</label>
                    </div>
                    <div className="flex items-center mb-4">
                        <input type="checkbox" id="malayalam" name="malayalam" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 ng-untouched ng-pristine ng-valid" />
                        <label htmlFor="malayalam" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Malayalam</label>
                    </div>
                    <div className="flex items-center mb-4">
                        <input type="checkbox" id="hinglish" name="hinglish" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 ng-untouched ng-pristine ng-valid" />
                        <label htmlFor="hinglish" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Hinglish</label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <input type="checkbox" id="otherLanguageCheckbox" name="otherLanguage" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 ng-untouched ng-pristine ng-valid" />
                        <label htmlFor="otherLanguageCheckbox" className="text-sm font-medium text-gray-900 dark:text-gray-300">Other</label>
                        <input type="text" id="customValue" name="customlanguageValue" className="border border-gray-300 rounded-md px-2 py-1 focus:ring focus:ring-primary-200 focus:border-primary-300 ng-untouched ng-pristine ng-valid" />
                    </div>
                </div>


                {/* Remaining form fields */}

                <div className="mx-auto space-y-3">
            <label className="mb-1 block text-sm font-medium text-gray-700">Areas of Expertise</label>
            <div className="flex items-center mb-4">
                <input id="checkbox1" type="checkbox" name="life" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 ng-untouched ng-pristine ng-valid" />
                <label htmlFor="checkbox1" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Life</label>
            </div>
            <div className="flex items-center mb-4">
                <input id="checkbox2" type="checkbox" name="positivity" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 ng-untouched ng-pristine ng-valid" />
                <label htmlFor="checkbox2" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Positivity</label>
            </div>
            <div className="flex items-center mb-4">
                <input id="checkbox3" type="checkbox" name="relationships" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 ng-untouched ng-pristine ng-valid" />
                <label htmlFor="checkbox3" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Relationships/ Love</label>
            </div>
            <div className="flex items-center mb-4">
                <input id="checkbox4" type="checkbox" name="career" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 ng-untouched ng-pristine ng-valid" />
                <label htmlFor="checkbox4" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Career</label>
            </div>
            <div className="flex items-center mb-4">
                <input id="checkbox5" type="checkbox" name="mindset" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 ng-untouched ng-pristine ng-valid" />
                <label htmlFor="checkbox5" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Mindset</label>
            </div>
            <div className="flex items-center">
                <input id="checkbox6" type="checkbox" name="family" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 ng-untouched ng-pristine ng-valid" />
                <label htmlFor="checkbox6" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Family</label>
            </div>
        </div>


        <div>
            <label htmlFor="experiencetext" className="mb-1 block text-sm font-medium text-gray-700">How much do you currently charge for a 1:1 hourly session?</label>
            <input type="text" id="experiencetext" name="hourlySessionCharge" placeholder="Enter hourly session charge" required="" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 ng-untouched ng-pristine ng-invalid" />
        </div>

        <div>
            <div>
                <label htmlFor="experiencetext" className="mb-1 block text-sm font-medium text-gray-700">Please provide relevant links to your Website, Instagram, Twitter, YouTube, LinkedIn</label>
                <input type="text" id="experiencetext" placeholder="relevant work experience" name="websiteLinks" required="" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 ng-untouched ng-pristine ng-invalid" />
            </div>
            <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">Mention 3 things that you can help users with</label>
                <div className="flex items-center space-x-2">
                    <button type="button" className="action-button">-</button>
                    <input type="text" placeholder="Please keep these 2 words long" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 ng-untouched ng-pristine ng-valid" />
                    <button type="button" className="action-button emoji-button">😀</button>
                    <button type="button" className="action-button plus-button">+</button>
                </div>
                <br />
            </div>
            <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">Mention the ideal clientele who can reach out to you</label>
                <div className="flex items-center mb-4">
                    <input id="clientcheckbox1" type="checkbox" name="students" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 ng-untouched ng-pristine ng-valid" />
                    <label htmlFor="clientcheckbox1" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Students</label>
                </div>
                <div className="flex items-center mb-4">
                    <input id="clientcheckbox1" type="checkbox" name="Young Adults" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 ng-untouched ng-pristine ng-valid" />
                    <label htmlFor="clientcheckbox1" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Young Adults</label>
                </div>
                <div className="flex items-center mb-4">
                    <input id="clientcheckbox1" type="checkbox" name="Working Professionals" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 ng-untouched ng-pristine ng-valid" />
                    <label htmlFor="clientcheckbox1" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Working Professionals</label>
                </div>
                <div className="flex items-center mb-4">
                    <input id="clientcheckbox1" type="checkbox" name="Teenagers" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 ng-untouched ng-pristine ng-valid" />
                    <label htmlFor="clientcheckbox1" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Teenagers</label>
                </div>
                <div className="flex items-center mb-4">
                    <input id="clientcheckbox1" type="checkbox" name="Job Aspirants" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 ng-untouched ng-pristine ng-valid" />
                    <label htmlFor="clientcheckbox1" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Job Aspirants</label>
                </div>
                <div className="flex items-center mb-4">
                    <input id="clientcheckbox1" type="checkbox" name="Married Couples" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 ng-untouched ng-pristine ng-valid" />
                    <label htmlFor="clientcheckbox1" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Married Couples</label>
                </div>
                <div className="flex items-center mb-4">
                    <input id="clientcheckbox1" type="checkbox" name="Parents" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 ng-untouched ng-pristine ng-valid" />
                    <label htmlFor="clientcheckbox1" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Parents</label>
                </div>
                {/* Other checkboxes */}
                <div className="flex items-center space-x-2">
                    <input type="checkbox" id="checkboxExample" name="other" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 ng-untouched ng-pristine ng-valid" />
                    <label htmlFor="checkboxExample" className="text-sm font-medium text-gray-900 dark:text-gray-300">Other</label>
                    <input type="text" id="customValue" name="customclientValue" className="border border-gray-300 rounded-md px-2 py-1 focus:ring focus:ring-primary-200 focus:border-primary-300 ng-untouched ng-pristine ng-valid" />
                </div>
            </div>
        </div>

        <Link to='/experts/success'>
        <button type="submit" className="rounded-lg border border-primary-500 bg-[#26ABA2] px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-primary-700 hover:bg-primary-700 focus:ring focus:ring-primary-200 disabled:cursor-not-allowed disabled:border-primary-300 disabled:bg-primary-300">
            Next
        </button>
        </Link>
            </form>
        </div>
        </section>
    
        
    </>
 
  )
}

export default ExpertVerification3