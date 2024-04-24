// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect } from 'react';
// import { fetchUsersList } from '../../../store/listUserSlice'
// import {fetchExperts} from '../../../store/listexpertSlice/'

// const ExpertLists = () => {
   
// //   const displayUsers = [
// //     // Assume you have data here
// //   ];
// // const dispatch = useDispatch();
// //   const { loading: userLoading, users: userList, error: userError } = useSelector((state) => state.listUser);
// //   const { loading: expertLoading, experts: expertList, error: expertError } = useSelector((state) => state.expert);

// //   useEffect(() => {
// //     dispatch(fetchUsersList());
// //     dispatch(fetchExperts());
// //   }, [dispatch]);
// //   useEffect(() => {
// //     console.log("Expert List:", expertList);
// //   }, [expertList]);

// // useEffect(() => {
// //   dispatch(fetchUsersList());
// // }, [dispatch]);
// const dispatch = useDispatch();
// const { loading: expertLoading, experts: expertList, error: expertError } = useSelector((state) => state.expert);

// useEffect(() => {
//     dispatch(fetchExperts());
// }, [dispatch]);

// console.log("Expert List:", expertList);


//   const loadView = () => {
//     // Implement loadView function
//   };

//   const isTherapist = (user) => {
//     // Implement isTherapist function
//   };

//   const therapistApproveToggle = (therapistId, isApproved) => {
//     // Implement therapistApproveToggle function
//   };

//   const userBlockToggle = (userId, isBlocked) => {
//     // Implement userBlockToggle function
//   };

//   const deleteUser = (userId) => {
//     // Implement deleteUser function
//   };

//   return (
//     <div className="flex flex-col mt-5 m-5">
//       <div className="-m-1.5 overflow-x-auto">
//         <div className="p-1.5 min-w-full inline-block align-middle">
//           <div className="border rounded-lg divide-y divide-gray-200 dark:border-gray-700 dark:divide-gray-700">
//             <div className="py-3 px-4">
//               <div className="relative max-w-xs">
//                 <label className="sr-only">Search</label>
//                 <input onChange={loadView} type="text" name="hs-table-with-pagination-search" id="hs-table-with-pagination-search" className="py-2 px-3 ps-9 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Search for users" />
//                 <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-3">
//                   <svg className="h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                     <circle cx="11" cy="11" r="8" />
//                     <path d="m21 21-4.3-4.3" />
//                   </svg>
//                 </div>
//               </div>
//             </div>
//             <div className="overflow-hidden">
//               <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
//                 <thead className="bg-gray-50 dark:bg-gray-700">
//                   <tr>
//                     <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Name</th>
//                     <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">UserName</th>
//                     <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Email</th>
//                     <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Verified?</th>
//                     <th scope="col" className="px-6 py-3 text-xs font-medium text-gray-500 uppercase text-end">Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
//   {expertList && expertList.length > 0 && expertList.map(expert => (
   
//     <tr key={expert.id}>
//       <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
//         <div className="flex items-center">
//           <div className="flex-shrink-0 h-10 w-10">
//             <img className="h-10 w-10 rounded-full" src={expert.profileImage} alt="" />
//           </div>
//           <div className="ml-4 text-sm font-medium text-gray-900">
//             {expert.name}
//           </div>
//         </div>
//       </td>
//       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{expert.name}</td>
//       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{expert.email}</td>
//       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
//         {expert.isMailVerified ? (
//           <i className="fa-solid fa-circle-check text-xl text-teal-700"></i>
//         ) : (
//           <i className="fa-solid fa-circle-xmark text-xl text-orange-600"></i>
//         )}
//       </td>
//       <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
//         {/* Add action buttons */}
//       </td>
//     </tr>
//   ))}
// </tbody> 
//               </table>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ExpertLists;


import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ExpertLists = () => {
    const [expertList, setExpertList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchExpertList = async () => {
            try {
                const response = await axios.get('http://localhost:8000/admin/listExperts');
                setExpertList(response.data.allExperts);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchExpertList();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="flex flex-col mt-5 m-5">
            <div className="-m-1.5 overflow-x-auto">
                <div className="p-1.5 min-w-full inline-block align-middle">
                    <div className="border rounded-lg divide-y divide-gray-200 dark:border-gray-700 dark:divide-gray-700">
                        <div className="py-3 px-4">
                            <div className="relative max-w-xs">
                                <label className="sr-only">Search</label>
                                <input type="text" name="hs-table-with-pagination-search" id="hs-table-with-pagination-search" className="py-2 px-3 ps-9 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Search for experts" />
                                <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-3">
                                    <svg className="h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="11" cy="11" r="8" />
                                        <path d="m21 21-4.3-4.3" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="overflow-hidden">
                            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                <thead className="bg-gray-50 dark:bg-gray-700">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Name</th>
                                        <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Email</th>
                                        <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Contact</th>
                                        <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Verified?</th>
                                     <th scope="col" className="px-6 py-3 text-xs font-medium text-gray-500 uppercase text-end">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                    {expertList.map(expert => (
                                        <tr key={expert._id}>
                                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                                             <div className="flex items-center">
                                               <div className="flex-shrink-0 h-10 w-10">
                                                <img className="h-10 w-10 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYBgkmyXnekpz06gd_1dgDuB_fXCwntWbsUzWWpk7rQd_1wcqFdZyVgv6p-c2_NQtIxPM&usqp=CAU" alt="" />
                                                 </div>
                                                   <div className="ml-4 text-sm font-medium text-gray-900">
                                                     {expert.name}
                                                    </div>
                                                         </div>
                                                      </td>
                                                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{expert.email}</td>
                                                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{expert.contact}</td>
                                                       <td className="px-6 py-4  whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                                                    
                                                         {expert.isMailVerified ? (
                                                           <i className=" fa-solid fa-circle-check text-xl text-teal-700"></i>
                                                             ) : (
                                                           <i className=" fa-solid fa-circle-xmark text-xl text-orange-600"></i>
                                                             )}
                                                             </td>
                                                             <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200 text-right" >
                                                             <div style={{ marginright: "40px" }}>
                                                             {expert.isBlocked ? (
                                                           <button onClick={() => userBlockToggle(expert.expertId, expert.isBlocked)} type="button" className="inline-flex items-center mr-5 gap-x-2 text-lg font-semibold rounded-lg border border-transparent text-teal-600 hover:text-teal-800 disabled:opacity-50 disabled:pointer-events-none" ><i className="fa-solid fa-lock"></i></button>
                                                         ) : (
                                                           <button onClick={() => userBlockToggle(expert.expertId, expert.isBlocked)} type="button" className="inline-flex items-center mr-5 gap-x-2 text-lg font-semibold rounded-lg border border-transparent text-teal-600 hover:text-teal-800 disabled:opacity-50 disabled:pointer-events-none"><i className="fa-solid fa-lock-open"></i></button>
                                                       )}
                                                 </div>
                                                      </td>
                                                    </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExpertLists;
