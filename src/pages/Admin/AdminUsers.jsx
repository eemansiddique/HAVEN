

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchUsersList } from '../../../store/listUserSlice'
import {fetchExperts} from '../../../store/listexpertSlice/'
import axios from 'axios'; // Import axios library

const TableComponent = () => {
//   const displayUsers = [
//     // Assume you have data here
//   ];
const dispatch = useDispatch();
  const { loading: userLoading, users: userList, error: userError } = useSelector((state) => state.listUser);
  const { loading: expertLoading, experts: expertList, error: expertError } = useSelector((state) => state.expert);

  useEffect(() => {
    dispatch(fetchUsersList());
    dispatch(fetchExperts());
  }, [dispatch]);

// useEffect(() => {
//   dispatch(fetchUsersList());
// }, [dispatch]);



  const loadView = () => {
    // Implement loadView function
  };

  const isTherapist = (user) => {
    // Implement isTherapist function
  };

  const therapistApproveToggle = (therapistId, isApproved) => {
    // Implement therapistApproveToggle function
  };

  const userBlockToggle = async (userId, isBlocked) => {
    try {
      // Send a request to toggle the block status
      const response = await axios.post(`http://localhost:8000/admin/user/block/${userId}`, { isBlocked: !isBlocked });
      if (response.status === 200) {
        // Update the user's block status in the UI
        const updatedUserList = userList.map(user => {
          if (user.userId === userId) {
            return { ...user, isBlocked: !isBlocked };
          }
          return user;
        });
        // Update the userList state with the updated data
        // Note: This assumes your store updates userList accordingly
        // You might need to dispatch an action to update the store state
        // dispatch(updateUserList(updatedUserList));
      } else {
        // Show an error message if the request fails
        console.error('Failed to toggle user block status');
      }
    } catch (error) {
      // Handle any errors
      console.error('Error toggling user block status:', error);
    }
  };


  const deleteUser = (userId) => {
    // Implement deleteUser function
  };

  return (
    <div className="flex flex-col mt-5 m-5">
      <div className="-m-1.5 overflow-x-auto">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div className="border rounded-lg divide-y divide-gray-200 dark:border-gray-700 dark:divide-gray-700">
            <div className="py-3 px-4">
              <div className="relative max-w-xs">
                <label className="sr-only">Search</label>
                <input onChange={loadView} type="text" name="hs-table-with-pagination-search" id="hs-table-with-pagination-search" className="py-2 px-3 ps-9 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Search for users" />
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
                    <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">UserName</th>
                    <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Email</th>
                    <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Verified?</th>
                    <th scope="col" className="px-6 py-3 text-xs font-medium text-gray-500 uppercase text-end">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {userList.map(user => (
                    <tr key={user.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <img className="h-10 w-10 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYBgkmyXnekpz06gd_1dgDuB_fXCwntWbsUzWWpk7rQd_1wcqFdZyVgv6p-c2_NQtIxPM&usqp=CAU" alt="" />
                          </div>
                          <div className="ml-4 text-sm font-medium text-gray-900">
                            {user.name}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{user.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{user.email}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                        {user.isMailVerified ? (
                          <i className="fa-solid fa-circle-check text-xl text-teal-700"></i>
                        ) : (
                          <i className="fa-solid fa-circle-xmark text-xl text-orange-600"></i>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                        {isTherapist(user) ? (
                          <React.Fragment>
                            {user.isApproved ? (
                              <button onClick={() => therapistApproveToggle(user.therapistId, user.isApproved)} type="button" className="inline-flex items-center gap-x-2 text-lg font-semibold rounded-lg border border-transparent text-green-600 hover:text-green-800 disabled:opacity-50 disabled:pointer-events-none"><i className="fa-solid fa-check text-xl text-green-600 hover:text-green-800"></i></button>
                            ) : (
                              <button onClick={() => therapistApproveToggle(user.therapistId, user.isApproved)} type="button" className="inline-flex items-center gap-x-2 text-lg font-semibold rounded-lg border border-transparent text-orange-500 hover:text-orange-700 disabled:opacity-50 disabled:pointer-events-none"><i className="fa-solid fa-xmark text-xl text-orange-500 hover:text-orange-700"></i></button>
                            )}
                            <button onClick={() => userBlockToggle(user.therapistId, user.isBlocked)} type="button" className="inline-flex items-center mr-5 gap-x-2 text-lg font-semibold rounded-lg border border-transparent text-teal-600 hover:text-teal-800 disabled:opacity-50 disabled:pointer-events-none">{user.isBlocked ? <i className="fa-solid fa-lock"></i> : <i className="fa-solid fa-lock-open"></i>}</button>
                            <button onClick={() => deleteUser(user.therapistId)} type="button" className="inline-flex items-center gap-x-2 text-lg font-semibold rounded-lg border border-transparent text-red-600 hover:text-red-800 disabled:opacity-50 disabled:pointer-events-none"><i className="fa-solid fa-trash"></i></button>
                          </React.Fragment>
                        ) : (
                          <React.Fragment>
                            {user.isBlocked ? (
                              <button onClick={() => userBlockToggle(user.userId, user.isBlocked)} type="button" className="inline-flex items-center mr-5 gap-x-2 text-lg font-semibold rounded-lg border border-transparent text-teal-600 hover:text-teal-800 disabled:opacity-50 disabled:pointer-events-none"><i className="fa-solid fa-lock"></i></button>
                            ) : (
                              <button onClick={() => userBlockToggle(user.userId, user.isBlocked)} type="button" className="inline-flex items-center mr-5 gap-x-2 text-lg font-semibold rounded-lg border border-transparent text-teal-600 hover:text-teal-800 disabled:opacity-50 disabled:pointer-events-none"><i className="fa-solid fa-lock-open"></i></button>
                            )}
                            {/* <button onClick={() => deleteUser(user.userId)} type="button" className="inline-flex items-center gap-x-2 text-lg font-semibold rounded-lg border border-transparent text-red-600 hover:text-red-800 disabled:opacity-50 disabled:pointer-events-none"><i className="fa-solid fa-trash"></i></button> */}
                          </React.Fragment>
                        )}
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

export default TableComponent;
