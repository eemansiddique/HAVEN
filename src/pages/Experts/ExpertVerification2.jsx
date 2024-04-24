import React from 'react';
import { Link } from 'react-router-dom';

const ExpertVerification = () => {
    return (
        <>
            <section className="form expert_verify">
                <div className="flex justify-center items-center expert_verify">
                    <div>
                        <ol className="items-center w-full space-y-4 sm:flex sm:space-x-36 sm:space-y-0 mt-[-2rem]">
                            <li className="flex items-center text-[#26ABA2] dark:text-blue-500 space-x-2.5 ">
                                <span className="flex items-center justify-center w-8 h-8 border border-[#26ABA2] rounded-full shrink-0 dark:border-blue-500">1</span>
                                <span>
                                    <h3 className="font-medium leading-tight">User info</h3>
                                    <p className="text-sm">Step details here</p>
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
                            <label htmlFor="education" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Educational Qualification</label>
                            <select id="education" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option >Choose</option>
                                <option value="Graduate">Graduate</option>
                                <option value="Post Graduate">Post Graduate</option>
                                <option value="PHD">PHD</option>
                                <option value="Diploma">Diploma</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="example2" className="mb-1 block text-sm font-medium text-gray-700 ">Educational Institute</label>
                            <input type="text" id="example2" placeholder="full name" className="pl-3 block w-full border rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500" />
                        </div>
                        <div className="space-y-3">
                            <label className="mb-1 block text-sm font-medium text-gray-700">Specialization (how do you help people)</label>
                            {/* Radio buttons */}
                            <div className="flex items-center space-x-2">
                                <input type="radio" id="therapist" name="specialization" value="Therapist" className="h-4 w-4 rounded-full border-gray-300 text-primary-600 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 focus:ring-offset-0 disabled:cursor-not-allowed disabled:text-gray-400" />
                                <label htmlFor="therapist" className="text-sm font-medium text-gray-700">Therapist/Counselling Psychologist</label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <input type="radio" id="lifeCoach" name="specialization" value="Life Coach" className="h-4 w-4 rounded-full border-gray-300 text-primary-600 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 focus:ring-offset-0 disabled:cursor-not-allowed disabled:text-gray-400" />
                                <label htmlFor="lifeCoach" className="text-sm font-medium text-gray-700">Life Coach</label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <input type="radio" id="PositivityCoach" name="specialization" value="Positivity Coach" className="h-4 w-4 rounded-full border-gray-300 text-primary-600 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 focus:ring-offset-0 disabled:cursor-not-allowed disabled:text-gray-400" />
                                <label htmlFor="PositivityCoach" className="text-sm font-medium text-gray-700">Positivity Coach</label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <input type="radio" id="MindsetCoach" name="specialization" value="Mindset Coach" className="h-4 w-4 rounded-full border-gray-300 text-primary-600 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 focus:ring-offset-0 disabled:cursor-not-allowed disabled:text-gray-400" />
                                <label htmlFor="MindsetCoach" className="text-sm font-medium text-gray-700">Mindset Coach</label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <input type="radio" id="CareerCoach" name="specialization" value="Career Coach" className="h-4 w-4 rounded-full border-gray-300 text-primary-600 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 focus:ring-offset-0 disabled:cursor-not-allowed disabled:text-gray-400" />
                                <label htmlFor="CareerCoach" className="text-sm font-medium text-gray-700">Career Coach</label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <input type="radio" id="RelationshipCoach" name="specialization" value="Relationship Coach" className="h-4 w-4 rounded-full border-gray-300 text-primary-600 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 focus:ring-offset-0 disabled:cursor-not-allowed disabled:text-gray-400" />
                                <label htmlFor="RelationshipCoach" className="text-sm font-medium text-gray-700">Relationship Coach</label>
                            </div>
                            <div className="flex items-center space-x-2">
            <input
                type="radio"
                id="radioexample8"
                name="specialization"
                formcontrolname="specialization"
                value="Other"
                className="h-4 w-4 rounded-full border-gray-300 text-primary-600 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 focus:ring-offset-0 disabled:cursor-not-allowed disabled:text-gray-400 ng-dirty ng-valid ng-touched"
            />
            <label htmlFor="radioexample8" className="text-sm font-medium text-gray-700">
                Other
            </label>
            <input
                type="text"
                id="otherValue"
                name="otherValue"
                formcontrolname="otherValue"
                className="border border-gray-300 rounded-md px-2 py-1 focus:ring focus:ring-primary-200 focus:border-primary-300 ng-pristine ng-invalid ng-touched"
            />
        </div>
                            {/* Add more radio buttons as needed */}
                        </div>
                        <div>
                            <label htmlFor="experiencetext" className="mb-1 block text-sm font-medium text-gray-700 r">How many years of relevant work experience do you have?</label>
                            <input type="text" id="experiencetext" placeholder="relevant work experience" className="pl-3 border block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500" />
                        </div>
                        <div>
                            <label htmlFor="example4" className="mb-1 block text-sm font-medium text-gray-700">Certification/Degree</label>
                            <input type="file" id="example4" placeholder="full name" className="block w-full rounded-md" />
                        </div>
                        <Link to='/experts/regForm3/id'>
                        <button type="submit" className="rounded-lg border border-primary-500 bg-[#26ABA2] px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-primary-700 hover:bg-primary-700 focus:ring focus:ring-primary-200 disabled:cursor-not-allowed disabled:border-primary-300 disabled:bg-primary-300">Next</button>
                        </Link>
                    </form>
                </div>
            </section>
        </>
    );
}

export default ExpertVerification;
