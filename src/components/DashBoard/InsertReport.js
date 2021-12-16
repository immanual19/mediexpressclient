import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import InsertHaematology from './InsertHaematology';
import InsertUrineRE from './InsertUrineRE';
const InsertReport = () => {
    const [haematology,setHaematology]=useState(false);
    const [urineRE,setUrineRE]=useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        if(data.ReportType==="Haematology"){
            setHaematology(true);
            setUrineRE(false);
        }
        else if(data.ReportType="Urine R/E"){
            setUrineRE(true);
            setHaematology(false);
        }
    };
    return (
        <div>
            <h3>This is for inserting report</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
            <select {...register("ReportType", { required: true })}>
            <option value="Haematology">Haematology</option>
            <option value="Urine R/E">Urine R/E</option>
            </select> <br /> <br />
            <input type="submit" />
            </form>

            {
                haematology?(<InsertHaematology></InsertHaematology>):(<div></div>)
            }
            {
                urineRE?(<InsertUrineRE></InsertUrineRE>):(<div></div>)
            }
        </div>
    );
};

export default InsertReport;