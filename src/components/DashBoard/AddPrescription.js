import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
const AddPrescription = () => {
    const [imageURL,setImageURL]=useState(null);
    const [isImageUploaded,setIsImageUploaded]=useState(false);
    const getUserInfo=localStorage.getItem('mediExpressUser');
    const parsedGetUserInfo=JSON.parse(getUserInfo);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
            const allInfo={...parsedGetUserInfo,...data};
            allInfo.imageURL=imageURL;
            const url='http://localhost:8080/postprescription';
            fetch(url,{
              method:'POST',
              headers:{
                'Content-Type':'application/json'
              },
              body: JSON.stringify(allInfo)
              })
              .then(res=>res.json())
              .then(data=>{
                if(data){
                  alert("Prescription stored successfully.");
                }
              })
          };
    const handleImageUpload=(event)=>{
        console.log(event.target.files[0]);
        const imageData=new FormData();
        imageData.set('key','719b813f1fc7180188ff5aea2438160c');
        imageData.append('image',event.target.files[0]);
        axios.post('https://api.imgbb.com/1/upload', imageData)
          .then(function (response) {
            setImageURL(response.data.data.display_url);
            setIsImageUploaded(true);
          })
          .catch(function (error) {
            console.log(error);
          });
        
    }
    return (
        <div>
        <h5>Dear {parsedGetUserInfo.Name}, Upload your prescription here.</h5> <br /><br />
            
            <form onSubmit={handleSubmit(onSubmit)}>
                <select {...register("ReportType", { required: true })}>
                <option value="Haematology">Haematology</option>
                <option value="Urine R/E">Urine R/E</option>
                </select><br/> <br /> <br />
                <input style={{"marginLeft":"11%"}} type="file" name="TestImage" onChange={handleImageUpload}/><br/><br/>
               {
                 isImageUploaded? (<input type="submit" value="Submit"/>):(<input type="submit" value="Submit" disabled/>)
               } 
            </form> 
        </div>
    );
};

export default AddPrescription;