import { Box } from "@mui/material";
import { GridColDef, GridValueGetterParams, DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { dataInerface } from "./types";

export default function DataGridTable({}) {
  interface getUser {
    lodiing: boolean;
    user: dataInerface[];
  }

  const [getdata, setgetdata] = useState<getUser>({
    lodiing: false,
    user: [] as dataInerface[],
  });
 
  

  const getPost = async () => {
    const { data } = await axios.get(
      " https://jsonplaceholder.typicode.com/posts"
    );

    setgetdata({ ...getdata, user: data });

    console.log(getdata);
  };
  useEffect(() => {
    getPost();
  }, []);

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "userId", headerName: "UserId", width: 90 },
    { field: "body", headerName: "Body", width: 90 },
    { field: "title", headerName: "Title", width: 90 }
   
  ];

 
  

  const rows = getdata.user?.map(item => ({
    id:item.id,
    userId:item.userId,
    body:item.body,
    title:item.title
  }))

  return (
    <>
      <Box sx={{ height: 400, width: "100%",  }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
        />
      </Box>

      
    </>
  );
}
