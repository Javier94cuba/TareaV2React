// const people = [
//     { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
//     // More people...
//   ]

//   const data = [
//     {
//      id: 1,
//      name:  "Admin" ,
//      permissions : 
//        {
//          entity : "Project",
//          perm: ["insert","delete","update","agrego"],
//          value:{v1: "X",v2: "X",v3: "X",v4: "X",
//          }
//        }
//      },
//    ]
  
//   export default function Tablev3() {
//     return (
//       <div className="bg-gray-900">
//         <div className="mx-auto max-w-7xl">
//           <div className="bg-gray-900 py-10">
//             <div className="px-4 sm:px-6 lg:px-8">
//               <div className="sm:flex sm:items-center">
//                 <div className="sm:flex-auto">
//                   <h1 className="text-base font-semibold leading-6 text-white">Javier Lopéz</h1>
//                   <p className="mt-2 text-sm text-gray-300">
//                    Tarea React V2
//                   </p>
//                 </div>
//                 <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
//                   <button
//                     type="button"
//                     className="block rounded-md bg-indigo-500 px-3 py-2 text-center text-sm font-semibold text-white hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
//                   >
//                     Add user
//                   </button>
//                 </div>
//               </div>
//               <div className="mt-8 flow-root">
//                 <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
//                   <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
//                     <table className="min-w-full divide-y divide-gray-700">
//                       <thead className="flex">
//                       <tr className="whitespace-nowrap py-4 pl-4 pr-3 text-lg font-medium text-white sm:pl-0"> Roles
//                       {data.map((rol) => (
//                           <tr key={rol.id}>
                            
//                             <th className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-0">
//                               {rol.name}
//                             </th>
//                             </tr>))}
//                         </tr>

//                         <td className="table-auto text-xl font-medium text-white"> 
                        
//                         <span>{data[0].permissions.entity}</span>
//                         {data.map((permiso) => (
//                           <th key={permiso.id}>
//                               <td className="text-xl font-medium text-white sm:pl-0 w-20">
//                               {data.map((permisos) => (
//                                <tr className="" key={permisos.permissions.perm.id}>
//                                 <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">        
//                                    {permisos.permissions.perm}
//                                 </td>
//                                </tr> 
//                               )
//                               )}
//                               </td>
//                           </th>))}
//                         </td>
//                       </thead>
//                       <tbody className="">
//                       {data.map((person) => (
//                         <tr key={person.id}>
//                           <th className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-0">Role
//                           <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">Insert</td>
//                           </th>
//                           <td className="text-slate-100 ml-20"> Projecto
//                           <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">Insert </td>
//                           <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">Delete</td>
//                           <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">Update</td>
//                           <td className="whitespace- px-3 py-4 text-sm text-gray-300">Update</td>
//                           </td>
//                         </tr>
//                       ))}
//                       </tbody>
//                     </table>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     )
//   }
  