import React from 'react';
import { useForm } from 'react-hook-form';
const InsertHaematology = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data =>{

       // console.log(data);
        const getUserInfo=localStorage.getItem('mediExpressUser');
        const parsedGetUserInfo=JSON.parse(getUserInfo);
        data.dateInserted=new Date().toString('YYYY-MM-DD');
        const dataArray=[];
        dataArray.push(data);
        const haematologyInfo={...parsedGetUserInfo,dataArray};
        haematologyInfo.TestType="Haematology";
        
        console.log("Going to DB",haematologyInfo);

        const url='http://localhost:8080/postreportnumber';
        fetch(url,{
            method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify(haematologyInfo)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data){
                alert("Inserted Successfully");
            }
        })
    };
    return (
        <div>
            <h5>Haematology Form</h5>
            <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="TotalCount">Total Count</label><br />
            <input type="number" step="any" placeholder="Haemoglobin (g/dl)" {...register("Haemoglobin", {required: true, maxLength: 80})}/> <br />
            <input type="number" step="any" placeholder="ESR(mm in first hour)" {...register("ESR (Western Method)", {required: true, maxLength: 100})} /> <br />
            <input type="number" step="any" placeholder="Red Blood Cell(k/&mu;l)" {...register("Red Blood Cell", {required: true, maxLength: 100})} /> <br />
            <input type="number" step="any" placeholder="Platelets(k/&mu;l)" {...register("Platelets", {required: true, maxLength: 100})} /> <br />
            <input type="number" step="any" placeholder="White Blood Cell(k/&mu;l)" {...register("White Blood Cell", {required: true, maxLength: 100})} /> <br />
            <input type="number" step="any" placeholder="Neutrophil(k/&mu;l)" {...register("NeutrophilT", {required: true, maxLength: 100})} /> <br />
            <input type="number" step="any" placeholder="Lymphocyte(k/&mu;l)" {...register("LymphocyteT", {required: true, maxLength: 100})} /> <br />
            <input type="number" step="any" placeholder="Monocyte(k/&mu;l)" {...register("MonocyteT", {required: true, maxLength: 100})} /> <br />
            <input type="number" step="any" placeholder="Eosinophil(k/&mu;l)" {...register("EosinophilT", {required: true, maxLength: 100})} /> <br />
            <input type="number" step="any" placeholder="Basophil(k/&mu;l)" {...register("BasophilT", {required: true, maxLength: 100})} /> <br /> <br /> <br /> <br />
            <label htmlFor="Differential Count">Differential Count</label><br />
            <input type="number" step="any" placeholder="Neutrophil(%)" {...register("NeutrophilD", {required: true, maxLength: 100})} /> <br />
            <input type="number" step="any" placeholder="Lymphocyte(%)" {...register("LymphocyteD", {required: true, maxLength: 100})} /> <br />
            <input type="number" step="any" placeholder="Monocyte(%)" {...register("MonocyteD", {required: true, maxLength: 100})} /> <br />
            <input type="number" step="any" placeholder="Eosinophil(%)" {...register("EosinophilD", {required: true, maxLength: 100})} /> <br />
            <input type="number" step="any" placeholder="Basophil(%)" {...register("BasophilD", {required: true, maxLength: 100})} /> <br /> <br /> <br /> <br />
            <label htmlFor="Differential Count">Others</label><br />
            <input type="number" step="any" placeholder="P.C.V (HCT)(%)" {...register("PCVHCT", {required: true, maxLength: 100})} /> <br />
            <input type="number" step="any" placeholder="M.C.V(fL)" {...register("MCV", {required: true, maxLength: 100})} /> <br />
            <input type="number" step="any" placeholder="M.C.H(pg)" {...register("MCH", {required: true, maxLength: 100})} /> <br />
            <input type="number" step="any" placeholder="M.C.H.C(g/dL)" {...register("MCHC", {required: true, maxLength: 100})} /> <br />
            <input type="number" step="any" placeholder="M.P.V(fL)" {...register("MPV", {required: true, maxLength: 100})} /> <br />
            <input type="number" step="any" placeholder="P.LCR(%)" {...register("PLCR", {required: true, maxLength: 100})} /> <br />
            <input type="number" step="any" placeholder="P.D.W(%)" {...register("PDW", {required: true, maxLength: 100})} /> <br />
            <input type="number" step="any" placeholder="R.D.W.-C.V(%)" {...register("RDWCV", {required: true, maxLength: 100})} /> <br />
            <input type="number" step="any" placeholder="R.D.W.-S.D(fL)" {...register("RDWSD", {required: true, maxLength: 100})} /> <br />
            <input type="number" step="any" placeholder="P.C.T(%)" {...register("PCT", {required: true, maxLength: 100})} /> <br />
            <br /> <br /> <br /> <br />
            <input type="submit" />
            </form>
        </div>
    );
};

export default InsertHaematology;