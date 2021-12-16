import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Haematology from '../../RefValue/Haematology';
const ReportTable = ({myReports, searchData}) => {
    const reportName=searchData.Test;
    const refValue=Haematology[0];
    return (
        
        <div>
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Test Name</TableCell>
              <TableCell align="right">Result</TableCell>
              <TableCell align="right">Reference Value</TableCell>
              <TableCell align="right">Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {myReports.map((report) => (
              <TableRow
                key={report.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {searchData.Test}
                </TableCell>
                <TableCell align="right">{report[reportName]}</TableCell>
                <TableCell align="right">{refValue[reportName]}</TableCell>
                <TableCell align="right">{report.dateInserted}</TableCell>
                
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
        </div>
    );
};

export default ReportTable;