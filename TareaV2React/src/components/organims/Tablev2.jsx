// import { useMemo } from 'react';
// import {
//   MRT_Table, //import alternative sub-component if we do not want toolbars
//   useMaterialReactTable,
// } from 'material-react-table';
// import { data } from '../Data/Data';
// import {
//   Box,
//   MenuItem
// } from '@mui/material';
// export function Tablev2 ()  {
 
//   const columns = useMemo (
//     () => [
//     {
//         accessorKey: 'name',
//         size:50,
//         header: 'Roles',
//     },
//       {
//         accessorKey: 'entity',
//         size:50,
//         header: `${data[0].permissions.entity}`,
//         columns :[
//             {
//                 header: `${data[0].permissions.perm.p1}`,
//                 size: 50,
//                 accessorKey: "permissions.value.v1",
//             },
//             {
//                 header: `${data[0].permissions.perm.p2}`,
//                 size: 50,
//                 accessorKey: "permissions.value.v2",
//                  row: ({ row}) => (
//                     <Box
//                   sx={{
//                     display: 'flex',
//                     alignItems: 'center',
//                    gap: '1rem',
//                  }}
//                 ><span>
//                   {
//                  row.getValue() == "X"
//                   ? data[1].name
//                   : "werwer"
//                   }
//                 </span></Box>),
//             },
//             {
//                 header: `${data[0].permissions.perm.p3}`,
//                 size: 50,
//                 accessorKey: "permissions.value.v3",
//             },
//             {
//                 header: `${data[0].permissions.perm.p4}`,
//                 size: 50,
//                 accessorKey: "permissions.value.v4",
//             },

//       ] 
//       },
//       {
//         accessorKey: 'entity',
//         size:50,
//         header: `${data[1].permissions.entity}`,
//         columns :[
//             {
//                 header: `${data[1].permissions.perm.p1}`,
//                 size: 50,
//                 accessorKey: "permissions.value.s1",
//             },
//             {
//                 header: `${data[1].permissions.perm.p2}`,
//                 size: 50,
//                 accessorKey: "permissions.value.s2",
//             },
//             {
//                 header: `${data[1].permissions.perm.p3}`,
//                 size: 50,
//                 accessorKey: "permissions.value.s3",
//             },
//             {
//                 header: `${data[1].permissions.perm.p4}`,
//                 size:50,
//                 accessorKey: "permissions.value.s4",
//             },

//       ] 
//       },
//       {
//         accessorKey: 'entity',
//         size:50,
//         header:
//         `
//         ${data[2].permissions.entity}
//         `,
//         columns :[
//             {
//                 header: `${data[2].permissions.perm.p1}`,
//                 size: 50,
//                 accessorKey: "permissions.value.g1",
//             },
//             {
//                 header: `${data[2].permissions.perm.p2}`,
//                 size: 50,
//                 accessorKey: "permissions.value.g2",
//             },
//             {
//                 header: `${data[2].permissions.perm.p3}`,
//                 size: 50,
//                 accessorKey: "permissions.value.g3",
//             },
//             {
//                 header: `${data[2].permissions.perm.p4}`,
//                 size: 50,
//                 accessorKey: "permissions.value.g4",
//             },          
//       ] 
//       },
//     ]
//     )
//   const table = useMaterialReactTable({
//     columns,
//     data,
//     enableColumnActions: false,
//     enableColumnFilters: false,
//     enablePagination: false,
//     enableSorting: false,
//     mrtTheme: (theme) => ({
//       baseBackgroundColor: theme.palette.background.default,
//     }),
//     muiTableBodyRowProps: { hover: false },
//     muiTableProps: {
//       sx: {
//         border: '1px solid rgba(81, 81, 81, .5)',
//       },
//     },
//     muiTableHeadCellProps: {
//       sx: {
//         border: '1px solid rgba(81, 81, 81, .5)',
//         fontStyle: 'italic',
//         fontWeight: 'normal',
//       },
//     },
//     muiTableBodyCellProps: {
//       sx: {
//         border: '1px solid rgba(81, 81, 81, .5)',
//       },
//     },
//   });

//   return <MRT_Table table={table} />;
// };

// export default Tablev2