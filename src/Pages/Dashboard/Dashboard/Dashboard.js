import React, { useEffect, useState } from 'react';
import 'flowbite';
import Home from '../Home/Home';
import Profile from '../Profile/Profile';
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import AdminUpdateProfile from '../UpdateProfile/AdminUpdateProfile';
import PatientUpdateProfile from '../UpdateProfile/PatientUpdateProfile';
import DoctorUpdateProfile from '../UpdateProfile/DoctorProfileUpdate';
import ConsultationPatient from '../Consultation/ConsultationPatient';
import ConsultationDoctor from '../Consultation/ConsultationDoctor';
import UploadPrescriptionPatient from '../UploadPrescription/UploadPrescriptionPatient';
import UploadPrescriptionDoctor from '../UploadPrescription/UploadPrescriptionDoctor';
import InboxPatient from '../Inbox/InboxPatient';
import InboxDoctor from '../Inbox/InboxDoctor';
import PastHistory from '../PastHistory/PastHistory';
import PatientConsultationHistory from '../ConsultationHistory/PatientConsultationHistory';
import DoctorConsultationHistory from '../ConsultationHistory/DoctorConsultationHistory';
import Complaint from '../Complaint/Complaint';
import Upgrade from '../Upgrade/Upgrade';
import Documentation from '../Documentation/Documentation';
import Sponsors from '../Sponsors/Sponsors';
import Help from '../Help/Help';
const Dashboard = () => {


   const [user, loading,error]=useAuthState(auth);
   const [home,setHome]=useState(true);
   const [profile,setProfile]=useState(false);
   const [userInfo,setUserInfo]=useState(null);
   const [updateProfile,setUpdateProfile]=useState(false);
   const [consultation,setConsultation]=useState(false);
   const [uploadPrescription,setUploadPrescription]=useState(false);
   const [inbox,setInbox]=useState(false);
   const [history,setHistory]=useState(false);
   const [seeHistory,setSeeHistory]=useState(false);
   const [complaint,setComplaint]=useState(false);
   const [upgrade,setUpgrade]=useState(false);
   const [documentation,setDocumentation]=useState(false);
   const [sponsors,setSponsors]=useState(false);
   const [help,setHelp]=useState(false);



   


   window.onload = function() {
      if(!window.location.hash) {
          window.location = window.location + '#loaded';
          window.location.reload();
      }
  }

   useEffect(()=>{
      fetch('https://mediexpressserver.onrender.com/userinfo',{
      method: 'POST',
      headers:{
        'content-type':'application/json'
      },
      body: JSON.stringify({email:user.email})
    })
    .then(res=>res.json())
    .then(data=>{
      setUserInfo(data);
    })
  },[user.email])
   const handleClick=(value)=>{
   
     if(value===1){
      setHome(true);
      setProfile(false);
      setUpdateProfile(false);
      setConsultation(false);
      setUploadPrescription(false);
      setInbox(false);
      setHistory(false);
      setSeeHistory(false);
      setComplaint(false);
      setUpgrade(false);
      setDocumentation(false);
      setSponsors(false);
      setHelp(false);
     } 
     else if(value===2){
      setProfile(true);
      setHome(false);
      setUpdateProfile(false);
      setConsultation(false);
      setUploadPrescription(false);
      setInbox(false);
      setHistory(false);
      setSeeHistory(false);
      setComplaint(false);
      setUpgrade(false);
      setDocumentation(false);
      setSponsors(false);
      setHelp(false);
     }
     else if(value===3){
      setUpdateProfile(true);
      setProfile(false);
      setHome(false);
      setConsultation(false);
      setUploadPrescription(false);
      setInbox(false);
      setHistory(false);
      setSeeHistory(false);
      setComplaint(false);
      setUpgrade(false);
      setDocumentation(false);
      setSponsors(false);
      setHelp(false);
     }
     else if(value===4){
      setConsultation(true);
      setUpdateProfile(false);
      setProfile(false);
      setHome(false);
      setUploadPrescription(false);
      setInbox(false);
      setHistory(false);
      setSeeHistory(false);
      setComplaint(false);
      setUpgrade(false);
      setDocumentation(false);
      setSponsors(false);
      setHelp(false);
     }
     else if(value===5){
      setInbox(true);
      setUploadPrescription(false);
      setConsultation(false);
      setUpdateProfile(false);
      setProfile(false);
      setHome(false);
      setHistory(false);
      setSeeHistory(false);
      setComplaint(false);
      setUpgrade(false);
      setDocumentation(false);
      setSponsors(false);
      setHelp(false);
     }
     else if(value===6){
      setUploadPrescription(true);
      setConsultation(false);
      setUpdateProfile(false);
      setProfile(false);
      setHome(false);
      setInbox(false);
      setHistory(false);
      setSeeHistory(false);
      setComplaint(false);
      setUpgrade(false);
      setDocumentation(false);
      setSponsors(false);
      setHelp(false);
     }
     else if(value===7){
      setHistory(true);
      setUploadPrescription(false);
      setConsultation(false);
      setUpdateProfile(false);
      setProfile(false);
      setHome(false);
      setInbox(false);
      setSeeHistory(false);
      setComplaint(false);
      setUpgrade(false);
      setDocumentation(false);
      setSponsors(false);
      setHelp(false);
     }
     else if(value===8){
      setSeeHistory(true);
      setHistory(false);
      setUploadPrescription(false);
      setConsultation(false);
      setUpdateProfile(false);
      setProfile(false);
      setHome(false);
      setInbox(false);
      setComplaint(false);
      setUpgrade(false);
      setDocumentation(false);
      setSponsors(false);
      setHelp(false);
     }
     else if(value===9){
      setComplaint(true);
      setSeeHistory(false);
      setHistory(false);
      setUploadPrescription(false);
      setConsultation(false);
      setUpdateProfile(false);
      setProfile(false);
      setHome(false);
      setInbox(false);
      setUpgrade(false);
      setDocumentation(false);
      setSponsors(false);
      setHelp(false);
     }
     else if(value===10){
      setUpgrade(true);
      setComplaint(false);
      setSeeHistory(false);
      setHistory(false);
      setUploadPrescription(false);
      setConsultation(false);
      setUpdateProfile(false);
      setProfile(false);
      setHome(false);
      setInbox(false);
      setDocumentation(false);
      setSponsors(false);
      setHelp(false);
     }
     else if(value===11){
      setDocumentation(true);
      setUpgrade(false);
      setComplaint(false);
      setSeeHistory(false);
      setHistory(false);
      setUploadPrescription(false);
      setConsultation(false);
      setUpdateProfile(false);
      setProfile(false);
      setHome(false);
      setInbox(false);
      setSponsors(false);
      setHelp(false);
     }
     else if(value===12){
      setSponsors(true);
      setDocumentation(false);
      setUpgrade(false);
      setComplaint(false);
      setSeeHistory(false);
      setHistory(false);
      setUploadPrescription(false);
      setConsultation(false);
      setUpdateProfile(false);
      setProfile(false);
      setHome(false);
      setInbox(false);
      setHelp(false);
     }
     else if(value===13){
      setHelp(true);
      setSponsors(false);
      setDocumentation(false);
      setUpgrade(false);
      setComplaint(false);
      setSeeHistory(false);
      setHistory(false);
      setUploadPrescription(false);
      setConsultation(false);
      setUpdateProfile(false);
      setProfile(false);
      setHome(false);
      setInbox(false);
     }
     else{
      setHome(true);
      setProfile(false);
      setUpdateProfile(false);
      setConsultation(false);
      setUploadPrescription(false);
      setInbox(false);
      setHistory(false);
      setSeeHistory(false);
      setComplaint(false);
      setUpgrade(false);
      setDocumentation(false);
      setSponsors(false);
      setHelp(false);
     }
   }
   return (
      <div className='flex flex-cols-2'>

<aside className="lg:w-1/5" aria-label="Sidebar">
<div className="overflow-y-auto py-4 px-3 bg-zinc-300 rounded dark:bg-gray-800">
   <ul className="space-y-2">
      <li
      onClick={()=>{
         handleClick(1);
      }}
      >
         <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            <svg aria-hidden="true" className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
            <span className="ml-3 text-inherit">Dashboard</span>
         </a>
      </li>
      <li>
      <li
      onClick={()=>{
         handleClick(2);
      }}
      >
         <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
            <span className="flex-1 ml-3 whitespace-nowrap  text-inherit">User: <small className='text-primary'>{user.displayName}</small></span>
         </a>
      </li>
      <li
      onClick={()=>{
         handleClick(3);
      }}
      >
         <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
            <span className="flex-1 ml-3 whitespace-nowrap  text-inherit">Update Profile</span>
            
         </a>
         </li>
      </li>
      <li
      onClick={()=>{
         handleClick(4);
      }}
      >
         <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd"></path></svg>
            <span className="flex-1 ml-3 whitespace-nowrap  text-inherit">Consultation</span>
         </a>
      </li>
      <li
      onClick={()=>{
         handleClick(5);
      }}
      >
         <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path><path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path></svg>
            <span className="flex-1 ml-3 whitespace-nowrap  text-inherit">Inbox</span>
            <span className="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">3</span>
         </a>
      </li>
      <li
      onClick={()=>{
         handleClick(6);
      }}
      >
         <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
            <span className="flex-1 ml-3 whitespace-nowrap  text-inherit">Upload Past Report</span>
         </a>
      </li>
      <li
      onClick={()=>{
         handleClick(7);
      }}
      >
         <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clip-rule="evenodd"></path></svg>
            <span className="flex-1 ml-3 whitespace-nowrap  text-inherit">See Medical History</span>
         </a>
      </li>
      <li
      onClick={()=>{
         handleClick(8);
      }}
      >
         <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clip-rule="evenodd"></path></svg>
            <span className="flex-1 ml-3 whitespace-nowrap text-inherit">History</span>
         </a>
      </li>
      <li
      onClick={()=>{
         handleClick(9);
      }}
      >
         <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
            <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path></svg>
            <span className="ml-3 text-inherit">Complaint</span>
         </a>
      </li>
   </ul>
   <ul className="pt-4 mt-4 space-y-2 border-t border-gray-200 dark:border-gray-700">
      <li
      onClick={()=>{
         handleClick(10);
      }}
      >
         <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
            <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:group-hover:text-white dark:text-gray-400" focusable="false" data-prefix="fas" data-icon="gem" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M378.7 32H133.3L256 182.7L378.7 32zM512 192l-107.4-141.3L289.6 192H512zM107.4 50.67L0 192h222.4L107.4 50.67zM244.3 474.9C247.3 478.2 251.6 480 256 480s8.653-1.828 11.67-5.062L510.6 224H1.365L244.3 474.9z"></path></svg>
            <span className="ml-4 text-inherit">Upgrade to Pro</span>
         </a>
      </li>
      <li
      onClick={()=>{
         handleClick(11);
      }}
      >
         <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
            <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"></path></svg>
            <span className="ml-3 text-inherit">Documentation</span>
         </a>
      </li>
      <li
      onClick={()=>{
         handleClick(12);
      }}
      >
         <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
            <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path></svg>
            <span className="ml-3 text-inherit">Sponsors</span>
         </a>
      </li>
      <li
      onClick={()=>{
         handleClick(13);
      }}
      >
         <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
            <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z" clip-rule="evenodd"></path></svg>
            <span className="ml-3 text-inherit">Help</span>
         </a>
      </li>
   </ul>
</div>
</aside>
{
   home && <Home userInfo={userInfo}></Home>
}
{
   profile && <Profile userInfo={userInfo}></Profile>
}
{
   updateProfile && userInfo.role==='Admin' && <AdminUpdateProfile userInfo={userInfo}></AdminUpdateProfile>
}
{
   updateProfile && userInfo.role==='Patient' && <PatientUpdateProfile userInfo={userInfo}></PatientUpdateProfile>
}
{
   updateProfile && userInfo.role==='Doctor' && <DoctorUpdateProfile userInfo={userInfo}></DoctorUpdateProfile>
}
{
   consultation && userInfo.role==='Patient' && <ConsultationPatient userInfo={userInfo}></ConsultationPatient>
}
{
   consultation && userInfo.role==='Doctor' && <ConsultationDoctor userInfo={userInfo}></ConsultationDoctor>
}

{
   uploadPrescription && userInfo.role==='Patient' && <UploadPrescriptionPatient userInfo={userInfo}></UploadPrescriptionPatient>
}
{
   uploadPrescription && userInfo.role==='Doctor' && <UploadPrescriptionDoctor userInfo={userInfo}></UploadPrescriptionDoctor>
}
{
   inbox && userInfo.role==='Patient' && <InboxPatient userInfo={userInfo}></InboxPatient>
}

{
   inbox && userInfo.role==='Doctor' && <InboxDoctor userInfo={userInfo}></InboxDoctor>
}
{
   history && <PastHistory userInfo={userInfo}></PastHistory>
}
{
   seeHistory && userInfo.role==='Patient' && <PatientConsultationHistory userInfo={userInfo}></PatientConsultationHistory>
}
{
   seeHistory && userInfo.role==='Doctor' && <DoctorConsultationHistory userInfo={userInfo}></DoctorConsultationHistory>
}

{
   complaint && <Complaint userInfo={userInfo}></Complaint>
}
{
   upgrade && <Upgrade userInfo={userInfo}></Upgrade>
}
{
   documentation && <Documentation userInfo={userInfo}></Documentation>
}
{
   sponsors && <Sponsors userInfo={userInfo}></Sponsors>
}
{
   help && <Help userInfo={userInfo}></Help>
}
</div>
   );
};

export default Dashboard;