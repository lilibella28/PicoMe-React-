import React from 'react';
import {useState} from 'react';



function UsersCard() {
	const [userData, setUserData] = useState({
		username: 'lili',
		userPicture:
			'https://images.pexels.com/photos/7245308/pexels-photo-7245308.jpeg?auto=compress&cs=tinysrgb&w=168',
		address: 'San Francisco, CA',
		date: '12:00pm, 11/04/1995',
		heading: 'Hey Picos! I need your Help',
		text:
			"Pico community, I'm in the middle of making lasagna but I'm missing one important ingredient - ground beef. If anyone has any spare, I would be immensely grateful for your help.",
	});

	return (
		<div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
			
    <div class="relative  z-10  transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-3xl">
    <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
      <div class="sm:flex sm:items-start">
        <div class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-200 sm:mx-0 sm:h-10 sm:w-10">
          
          <img class="h-8 w-8 text-red-600  rounded-full" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"src={userData.userPicture} alt="User profile" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
          
        </div>
        <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
          <h3 class="text-base font-semibold leading-6 text-gray-900" id="modal-title">{userData.heading}</h3>
          <div class="mt-2">
            <p class="text-sm text-gray-500">{userData.text}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
      <button type="button" class="mt-3 inline-flex w-full justify-center rounded-md bg-orange-600 px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-orange-500 sm:mt-0 sm:w-auto">Accept Request</button>

    </div>
  </div>
 </div>
	);
}


export default UsersCard;
