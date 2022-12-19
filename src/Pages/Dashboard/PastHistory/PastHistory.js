import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import GalleryComponent from "./GalleryComponent";
const PastHistory = ({ userInfo }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [reportname,setreportname]=useState("");
  const [reportData,setReportData]=useState([]);
  const [loading,setLoading]=useState(false);
  const update=()=>{
    let select=document.getElementById('reportname');
        let option=select.options[select.selectedIndex];		
        let key=option.value;
        setreportname(key);
    
}
  const onSubmit = async (data) => {
    console.log(data.nid);
    console.log(reportname);

    fetch('https://mediexpressserver.onrender.com/showreports',{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify({nid:data.nid,reportname:reportname})
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        setReportData(data);
        setLoading(true);
    })

  };
  return (
    <div className="mt-10 w-1/2 mx-auto text-center">
      <h1>
        See a specific report from the past
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div class="form-control w-1/4 max-w-xs mx-auto">
          <label class="label">
            <span class="label-text">Patient's NID number: </span>
          </label>
          <input
            type="text"
            placeholder="NID Number"
            class="input input-bordered w-full max-w-xs"
            {...register("nid", {
                required:{
                    value:true,
                    message:'NID number is Required'
                },
                minLength: {
                  value: 10,
                  message: 'Must be atleast 10 digits'
                },
                pattern: {
                  value: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
                  message: 'Provide a valid NID number'
                }
              })}
          />
          <label class="label">
          {errors.nid?.type==='required' && <span class="label-text-alt text-red-500">{errors.nid.message}</span>}
  {errors.nid?.type==='minLength' && <span class="label-text-alt text-red-500">{errors.nid.message}</span>}
  {errors.nid?.type==='pattern' && <span class="label-text-alt text-red-500">{errors.nid.message}</span>}
          </label>
        </div>
        <div className='mt-3'>
        <select id="reportname" onChange={update} className='btn w-56'>
        <option value="option">Select Report Name</option>
        <option value="Haematology">Haematology</option>
        <option value="URINE R/E">URINE R/E</option>
        </select>
        </div>
        <input className= 'flex btn w-full max-w-xs mx-auto items-center my-5' type="submit" value='Show'/>
      </form>
      <div className='grid grid-cols-1 gap-5'>
      {
        reportData.map(report=>{
            return <GalleryComponent
            key={report._id}
            report={report}
            ></GalleryComponent>
        })
      }
      </div>
      
    </div>
  );
};

export default PastHistory;
