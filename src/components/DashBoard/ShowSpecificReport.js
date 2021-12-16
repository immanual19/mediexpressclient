import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import ReportTable from './ReportTable';
const ShowSpecificReport = () => {
    const [searchData,setSearchData]=useState({});
    const [myReports,setMyReports]=useState([]);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
      setSearchData(data);
      const url='http://localhost:8080/showspecifictest';
      fetch(url,{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(res=>res.json())
      .then(data=>{
        setMyReports(data[0].dataArray)
        document.getElementById("reportTable").style.display="block";
      })
    };

    return (
        <div>
            <h4>This is for specific report</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} /> <br /> <br />
      <select  {...register("TestType", { required: true })}>
        <option value="Haematology">Haematology</option>
        <option value="Urine R/E">Urine R/E</option>
      </select> <br /> <br />
      <div id="haematologyList">
      <select {...register("Test", { required: true })}>
        <option value="Haemoglobin">Haemoglobin</option>
        <option value="ESR (Western Method)">ESR (Western Method)</option>
        <option value="Red Blood Cell">Red Blood Cells(Total)</option>
        <option value="Platelets">Platelets(Total)</option>
        <option value="White Blood Cell">White Blood Cells(Total)</option>
        <option value="NeutrophilT">Neutrophil(Total)</option>
        <option value="LymphocyteT">Lymphocyte(Total)</option>
        <option value="MonocyteT">Monocyte(Total)</option>
        <option value="EosinophilT">Eosinophil(Total)</option>
        <option value="BasophilT">Basophil(Total)</option>
        <option value="NeutrophilD">Neutrophil(Differential)</option>
        <option value="LymphocyteD">Lymphocyte(Differential)</option>
        <option value="MonocyteD">Monocyte(differential)</option>
        <option value="EosinophilD">Eosinophil(Differential)</option>
        <option value="BasophilD">Basophil(Differential)</option>
        <option value="PCVHCT">P.C.V (HCT)</option>
        <option value="MCV">M.C.V</option>
        <option value="MCH">M.C.H</option>
        <option value="MCHC">M.C.H.C</option>
        <option value="MPV"> M.P.V</option>
        <option value="PLCR"> P-LCR</option>
        <option value="PDW"> PDW</option>
        <option value="RDWCV"> R.D.W.-C.V.</option>
        <option value="RDWSD">R.D.W.-S.D.</option>
        <option value="PCT">PCT</option>
      </select> <br /> <br />
      </div>
      <input type="submit" />
    </form>

      <div id="reportTable" style={{"display":"none"}}>
        <ReportTable myReports={myReports} searchData={searchData}></ReportTable>
      </div>
    
        </div>
    );
};

export default ShowSpecificReport;