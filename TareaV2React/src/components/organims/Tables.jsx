import { useState } from "react"

import { permissions } from "../Data/Data";
import { roles } from "../Data/Data";
import { addListener } from "@reduxjs/toolkit";

  
  export default function Tables() {
    const [isChecked, setIsChecked] = useState(false);
    const [rolesadd, setRolesAdd] = useState(roles.slice(0,1,3,4));
    const [hover, setHover] = useState(false);

    const [isCheckedAd, setIsCheckedAd] = useState(false);
    const [rolesaddAd, setRolesAddAd] = useState(roles.slice(1,2,4));
    const [hoverAd, setHoverAd] = useState(false);
    const [isCheckedG, setIsCheckedG] = useState(false);
    const [rolesaddG, setRolesAddG] = useState(roles.slice(2,3,2));
    const [hoverG, setHoverG] = useState(false);
    const [isCheckedS, setIsCheckedS] = useState(false);
    const [rolesaddS, setRolesAddS] = useState(roles.slice(3,4,0));
    const [hoverS, setHoverS] = useState(false);

    const [isCheckedE, setIsCheckedE] = useState(false);
    const [rolesaddE, setRolesAddE] = useState(roles.slice(0,4,4,4));
    const [hoverE, setHoverE] = useState(false);
    const [isCheckedEd, setIsCheckedEd] = useState(false);
    const [rolesaddEd, setRolesAddEd] = useState(roles.slice(0,4,4,4));
    const [hoverEd, setHoverEd] = useState(false);
    const [isCheckedEg, setIsCheckedEg] = useState(false);
    const [rolesaddEg, setRolesAddEg] = useState(roles.slice(0,4,4,4));
    const [hoverEg, setHoverEg] = useState(false);

    const [isCheckedi, setIsCheckedi] = useState(false);
    const [rolesaddi, setRolesAddi] = useState(roles.slice(0,4));
    const [hoveri, setHoveri] = useState(false);
    const [isCheckedd, setIsCheckedd] = useState(false);
    const [rolesaddd, setRolesAddd] = useState(roles.slice(0,4));
    const [hoverd, setHoverd] = useState(false);
    const [isCheckedr, setIsCheckedr] = useState(false);
    const [rolesaddr, setRolesAddr] = useState(roles.slice(0,4));
    const [hoverr, setHoverr] = useState(false);
    const [isCheckedb, setIsCheckedb] = useState(false);
    const [rolesaddb, setRolesAddb] = useState(roles.slice(0,4));
    const [hoverb, setHoverb] = useState(false);

    const [click, setClick] = useState(false);
    const [clickA, setClickA] = useState(false);
    const [clickG, setClickG] = useState(false);
    const [clickS, setClickS] = useState(false);

    const handleOverEd =  () => {
      setIsCheckedEd(!isCheckedEd)
      
       }
       
         const handleventEd = () => {
          rolesaddEd.map( rol => {
           if (isCheckedEd == false){
             console.log(isCheckedEd)
             return {
               ...rol,
                insert: rol.modify = "",
                update: rol.modify = "",
                delete: rol.modify = "",
                modify: rol.modify = "",
                }
           }else if(isCheckedEd){
             console.log(isCheckedEd)
             return {
               ...rol,
                insert: rol.modify = "X",
                update: rol.modify = "X",
                delete: rol.modify = "X",
                modify: rol.modify = "X",
         };
       }
     });
     // Vuelve a renderizar con el nuevo _array_
      setRolesAddEd(rolesaddEd);
   }

   const handleOverEg =  () => {
    setIsCheckedEg(!isCheckedEg)
    
     }
     
       const handleventEg = () => {
        rolesaddEg.map( rol => {
         if (isCheckedEg == false){
           console.log(isCheckedEg)
           return {
             ...rol,
              insert: rol.delete = "",
              update: rol.delete = "",
              delete: rol.delete = "",
              modify: rol.delete = "",
              }
         }else if(isCheckedEg){
           console.log(isCheckedEg)
           return {
             ...rol,
              insert: rol.delete = "X",
              update: rol.delete = "X",
              delete: rol.delete = "X",
              modify: rol.delete = "X",
       };
     }
   });
   // Vuelve a renderizar con el nuevo _array_
    setRolesAddEg(rolesaddEg);
 }
  
    
    


    const handleOverE =  () => {
      setIsCheckedE(!isCheckedE)
      
       }
       
         const handleventE = () => {
          rolesaddE.map( rol => {
           if (isCheckedE == false){
             console.log(isCheckedE)
             return {
               ...rol,
                insert: rol.insert = "",
                update: rol.insert = "",
                delete: rol.insert = "",
                modify: rol.insert = "",
                insert: rol.update = "",
                update: rol.update = "",
                delete: rol.update = "",
                modify: rol.update = "",
                }
           }else if(isCheckedE){
             console.log(isCheckedE)
             return {
               ...rol,
                insert: rol.insert = "X",
                update: rol.insert = "X",
                delete: rol.insert = "X",
                modify: rol.insert = "X",
                insert: rol.update = "X",
                update: rol.update = "X",
                delete: rol.update = "X",
                modify: rol.update = "X",
         };
       }
     });
     // Vuelve a renderizar con el nuevo _array_
      setRolesAddE(rolesaddE);
   }


    //Cuando se hace un mouseover sobre el nombre del rol aparecerá en frente del mismo un checkbox que 
  //dará la posibilidad de asignar o quitar todos los permisos al mismo tiempo.
    const handleOverAd =  () => {
    setIsCheckedAd(!isCheckedAd)
    
     }
     
       const handleventAd = () => {
        rolesaddAd.map( rol => {
         if (isCheckedAd == false){
           console.log(isCheckedAd)
           return {
             ...rol,
              insert: rol.insert = "",
              update: rol.update = "",
              delete: rol.delete = "",
              modify: rol.modify = ""
              }
         }else if(isCheckedAd){
           console.log(isCheckedAd)
           return {
             ...rol,
              insert: rol.insert = "X",
              update: rol.update = "X",
              delete: rol.delete = "X",
              modify: rol.modify = "X"
       };
     }
   });
   // Vuelve a renderizar con el nuevo _array_
    setRolesAddAd(rolesaddAd);
 }
     
    const handleOver =  () => {
     setIsChecked(!isChecked)
     
      }
      
        const handlevent = () => {
         rolesadd.map( rol => {
          if (isChecked == false){
            console.log(isChecked)
            return {
              ...rol,
               insert: rol.insert = "",
               update: rol.update = "",
               delete: rol.delete = "",
               modify: rol.modify = ""
               }
          }else if(isChecked){
            console.log(isChecked)
            return {
              ...rol,
               insert: rol.insert = "X",
               update: rol.update = "X",
               delete: rol.delete = "X",
               modify: rol.modify = "X"
        };
      }
    });
    // Vuelve a renderizar con el nuevo _array_
     setRolesAdd(rolesadd);
  }

  const handleOverG =  () => {
    setIsCheckedG(!isCheckedG)
    
     }
     
       const handleventG = () => {
        rolesaddG.map( rol => {
         if (isCheckedG == false){
           console.log(isCheckedG)
           return {
             ...rol,
              insert: rol.insert = "",
              update: rol.update = "",
              delete: rol.delete = "",
              modify: rol.modify = ""
              }
         }else if(isCheckedG){
           console.log(isCheckedG)
           return {
             ...rol,
              insert: rol.insert = "X",
              update: rol.update = "X",
              delete: rol.delete = "X",
              modify: rol.modify = "X"
       };
     }
   });
   // Vuelve a renderizar con el nuevo _array_
    setRolesAddG(rolesaddG);
 }

 const handleOverS =  () => {
  setIsCheckedS(!isCheckedS)
  
   }
   
     const handleventS = () => {
      rolesaddS.map( rol => {
       if (isCheckedS == false){
         console.log(isCheckedS)
         return {
           ...rol,
            insert: rol.insert = "",
            update: rol.update = "",
            delete: rol.delete = "",
            modify: rol.modify = ""
            }
       }else if(isCheckedS){
         console.log(isCheckedS)
         return {
           ...rol,
            insert: rol.insert = "X",
            update: rol.update = "X",
            delete: rol.delete = "X",
            modify: rol.modify = "X"
     };
   }
 });
 // Vuelve a renderizar con el nuevo _array_
  setRolesAddS(rolesaddS);
}

//Cuando se hace mouseover sobre el nombre de un permiso, aparecerá en frente del mismo un checkbox
//que dará la posibilidad de asignar o quitar dicho permiso a todos los roles.

const handleOveri =  () => {
  setIsCheckedi(!isCheckedi)
  
   }
   
     const handleventi = () => {
      rolesaddi.map( rol => {
       if (isCheckedi == false){
         console.log(isCheckedi)
         return {
           ...rol,
            insert: rol.insert = "",
            update: rol.insert = "",
            delete: rol.insert = "",
            modify: rol.insert = ""
            }
       }else if(isCheckedi){
         console.log(isCheckedi)
         return {
           ...rol,
            insert: rol.insert = "X",
            update: rol.insert = "X",
            delete: rol.insert = "X",
            modify: rol.insert = "X"
     };
   }
 });
 // Vuelve a renderizar con el nuevo _array_
  setRolesAddi(rolesaddi);
}

const handleOverr =  () => {
  setIsCheckedr(!isCheckedr)
  
   }
   
     const handleventr = () => {
      rolesaddr.map( rol => {
       if (isCheckedr == false){
         console.log(isCheckedr)
         return {
           ...rol,
            insert: rol.modify = "",
            update: rol.modify = "",
            delete: rol.modify = "",
            modify: rol.modify = "",
            }
       }else if(isCheckedr){
         console.log(isCheckedr)
         return {
           ...rol,
            insert: rol.modify = "X",
            update: rol.modify = "X",
            delete: rol.modify = "X",
            modify: rol.modify = "X",
     };
   }
 });
 // Vuelve a renderizar con el nuevo _array_
  setRolesAddr(rolesaddr);
}

const handleOverb =  () => {
  setIsCheckedb(!isCheckedb)
  
   }
   
     const handleventb = () => {
      rolesaddb.map( rol => {
       if (isCheckedb == false){
         console.log(isCheckedb)
         return {
           ...rol,
            insert: rol.delete = "",
            update: rol.delete = "",
            delete: rol.delete = "",
            modify: rol.delete = "",
            }
       }else if(isCheckedb){
         console.log(isCheckedb)
         return {
           ...rol,
            insert: rol.delete = "X",
            update: rol.delete = "X",
            delete: rol.delete = "X",
            modify: rol.delete = "X",
     };
   }
 });
 // Vuelve a renderizar con el nuevo _array_
  setRolesAddb(rolesaddb);
}

const handleOverd =  () => {
  setIsCheckedd(!isCheckedd)
  
   }
   
     const handleventd = () => {
      rolesaddd.map( rol => {
       if (isCheckedd == false){
         console.log(isCheckedd)
         return {
           ...rol,
            insert: rol.update = "",
            update: rol.update = "",
            delete: rol.update = "",
            modify: rol.update = "",
            }
       }else if(isCheckedd){
         console.log(isCheckedd)
         return {
           ...rol,
            insert: rol.update = "X",
            update: rol.update = "X",
            delete: rol.update = "X",
            modify: rol.update = "X",
     };
   }
 });
 // Vuelve a renderizar con el nuevo _array_
  setRolesAddd(rolesaddd);
}

//Cuando se hace un mouseover sobre el nombre del rol aparecerá en el extremo derecho de la celda un 
//latón o ícono de eliminación que permitirá borrar el rol.



    return (
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-base font-semibold leading-6 text-gray-900">Info de contacto</h1>
            <p className="mt-2 text-sm text-gray-700">
            Cell: 58386901
            </p>
            <p className="mt-2 text-sm text-gray-700">
            Email:jlopezhdez94@gmail.com
            </p>
            <p className="mt-2 text-sm text-gray-700">
            Telegram:@wordpressjet
            </p>
           
          </div>
          <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
            <button
              type="button"
              className="block rounded-md bg-indigo-600 px-8 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Save
            </button>
          </div>
        </div>
        <div className="mt-8 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                    <tr className="divide-x divide-gray-200">
                         <td scope="col" className="whitespace-nowrap p-4 text-s text-center font-medium text-slate-950">
                           Roles</td>
                      <td scope="col" className="whitespace-nowrap p-4 text-sm text-gray-500 text-center">
                       <span className="mb-5 text-slate-950 whitespace-nowrap p-4 text-s text-center font-medium"> 
                       
                      <div className="text-xl p-2" onPointerEnter={() => setHoverE(true)}
                      onPointerLeave={() => setHoverE(false)}>
                       {hoverE == false ? 
                       <p>
                        {permissions[0].entity}
                        </p> 
                        :
                        <div className="">
                        <input
                         id="id"
                         name="entity"
                         type="checkbox"
                         checked={isCheckedE}
                         onClick={handleventE}
                         onChange={ handleOverE}
                         className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                        </div>
                        }
                         </div>
                        <div className="text-sm mt-4 text-slate-700" onPointerEnter={() => setHoveri(true)}
                      onPointerLeave={() => setHoveri(false)}>
                       {hoveri == false ? 
                       <p>
                        {permissions[0].perm_in}
                       </p> 
                        :
                        <input
                         id="idi"
                         name="insert"
                         type="checkbox"
                         checked={isCheckedi}
                         onClick={handleventi}
                         onChange={ handleOveri}
                         className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                        
                        }
                        </div>  

                        </span>  
                        </td>
                      <td className="whitespace-nowrap p-4 text-sm text-gray-500 text-center">
                      <span className="mb-5 text-slate-950 whitespace-nowrap p-4 text-s text-center font-medium ">
                         <div className="text-xl p-2" onPointerEnter={() => setHoverE(true)}
                         onPointerLeave={() => setHoverE(false)}>
                         {hoverE == false ? 
                       <p>
                        {permissions[0].entity}
                        </p> 
                        :
                        <div className="">
                        <input
                         id="id1"
                         name="entitys"
                         type="checkbox"
                         checked={isCheckedE}
                         onClick={handleventE}
                         onChange={ handleOverE}
                         className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                        </div>
                        }
                        </div> 
                          
                      <div className="text-sm mt-4 text-slate-700" onPointerEnter={() => setHoverd(true)}
                      onPointerLeave={() => setHoverd(false)}>
                       {hoverd == false ? 
                       <p>
                        {permissions[0].perm_de}
                       </p> 
                        :
                        <input
                         id="idi"
                         name="insert"
                         type="checkbox"
                         checked={isCheckedd}
                         onClick={handleventd}
                         onChange={ handleOverd}
                         className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                        }
                        </div> 


                      </span>
                      </td>
                      <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0 text-center">
                      <span className="mb-5 text-slate-950 whitespace-nowrap p-4 text-s text-center font-medium">
                      <div className="text-xl p-2" onPointerEnter={() => setHoverEd(true)}
                         onPointerLeave={() => setHoverEd(false)}>
                         {hoverEd == false ? 
                       <p>
                        {permissions[0].entityDB}
                        </p> 
                        :
                        <div className="">
                        <input
                         id="id1"
                         name="entitys"
                         type="checkbox"
                         checked={isCheckedEd}
                         onClick={handleventEd}
                         onChange={ handleOverEd}
                         className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                        </div>
                        }
                        </div>  
                        
                        <div className="text-sm mt-4 text-slate-700" onPointerEnter={() => setHoverr(true)}
                      onPointerLeave={() => setHoverr(false)}>
                       {hoverr == false ? 
                       <p>
                        {permissions[0].perm_up}
                       </p> 
                        :
                        <input
                         id="idi"
                         name="insert"
                         type="checkbox"
                         checked={isCheckedr}
                         onClick={handleventr}
                         onChange={ handleOverr}
                         className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                        }
                        </div>  
                      </span> 
                       </td>
                      <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0 text-center">
                      <span className="mb-5 text-slate-950 whitespace-nowrap p-4 text-s text-center font-medium">
                      
                      <div className="text-xl p-2" onPointerEnter={() => setHoverEg(true)}
                         onPointerLeave={() => setHoverEg(false)}>
                         {hoverEg == false ? 
                       <p>
                        {permissions[0].entityG}
                        </p> 
                        :
                        <div className="">
                        <input
                         id="id1"
                         name="entitysg"
                         type="checkbox"
                         checked={isCheckedEg}
                         onClick={handleventEg}
                         onChange={ handleOverEg}
                         className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                        </div>
                        }
                        </div> 
                       
                      <div className="text-sm mt-4 text-slate-700" onPointerEnter={() => setHoverb(true)}
                      onPointerLeave={() => setHoverb(false)}>
                       {hoverb == false ? 
                       <p>
                        {permissions[0].perm_mo}
                       </p> 
                        :
                        <input
                         id="idi"
                         name="insert"
                         type="checkbox"
                         checked={isCheckedb}
                         onClick={handleventb}
                         onChange={ handleOverb}
                         className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                        }
                        </div>  
                        
                        </span>
                        </td>
                    </tr>    
                </thead>
                
                <tbody className="divide-y divide-gray-200 bg-white">
                {click == false
                        ?  
                <tr className="divide-x divide-gray-200">
                <td scope="col" className="bg-gray-100 whitespace-nowrap p-4 text-sm text-gray-500 text-center cursor-pointer" onPointerEnter={() => setHover(true)}
                       onPointerLeave={() => setHover(false)}>
                    {hover == false ? 
                       <p>
                        {roles[0].role}
                        </p> 
                        :
                        <div className="flex justify-center items-center space-x-5">
                        <input
                         id="id"
                         name="admin"
                         type="checkbox"
                         checked={isChecked}
                         onClick={handlevent}
                         onChange={ handleOver}
                         className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" onClick={() => setClick(true)}>
                        <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z" clipRule="evenodd" />
                        </svg>
                        </div>
                        }
                     
                    </td>
                   
                    <td scope="col" className="bg-gray-100 whitespace-nowrap p-4 text-sm text-gray-500 text-center">
                    {roles[0].insert}
                    </td>

                    <td scope="col" className="bg-gray-100 whitespace-nowrap p-4 text-sm text-gray-500 text-center">
                    {roles[0].update}
                    </td>
                    <td scope="col" className="bg-gray-100 whitespace-nowrap p-4 text-sm text-gray-500 text-center">
                    {roles[0].modify}
                    </td>
                    <td scope="col" className="bg-gray-100 whitespace-nowrap p-4 text-sm text-gray-500 text-center">
                    {roles[0].delete}
                    </td>
                 </tr>
                      :
                      ""
                       }
                
                {clickA == false
                        ? 
                 <tr className="divide-x divide-gray-200">
                 <td scope="col" className=" whitespace-nowrap p-4 text-sm text-gray-500 text-center cursor-pointer" onPointerEnter={() => setHoverAd(true)}
                       onPointerLeave={() => setHoverAd(false)}>
                    {hoverAd == false ? 
                       <p>
                        {roles[1].role}
                        </p> 
                        :
                        <div className="flex justify-center items-center space-x-5">
                        <input
                         id="id1"
                         name="admin1"
                         type="checkbox"
                         checked={isCheckedAd}
                         onClick={handleventAd}
                         onChange={ handleOverAd}
                         className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" onClick={() => setClickA(true)}>
                        <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z" clipRule="evenodd" />
                        </svg>
                        </div>
                        }
                    </td>
                    <td scope="col" className="whitespace-nowrap p-4 text-sm text-gray-500 text-center">
                    {roles[1].insert}
                    </td>
                    <td scope="col" className="whitespace-nowrap p-4 text-sm text-gray-500 text-center">
                    {roles[1].update}
                    </td>
                    <td scope="col" className="whitespace-nowrap p-4 text-sm text-gray-500 text-center">
                    {roles[1].modify}
                    </td>
                    <td scope="col" className="whitespace-nowrap p-4 text-sm text-gray-500 text-center">
                    {roles[1].delete}
                    </td>
                    </tr>
                        : 
                        ""
                        }

                        
                        {clickG == false
                        ? 
                        <tr className="divide-x divide-gray-200">
                 <td scope="col" className="bg-gray-100 whitespace-nowrap p-4 text-sm text-gray-500 text-center cursor-pointer" onPointerEnter={() => setHoverG(true)}
                       onPointerLeave={() => setHoverG(false)}>
                    {hoverG == false ? 
                       <p>
                        {roles[2].role}
                        </p> 
                        :
                        <div className="flex justify-center items-center space-x-5">
                        <input
                         id="id"
                         name="admin"
                         type="checkbox"
                         checked={isCheckedG}
                         onClick={handleventG}
                         onChange={ handleOverG}
                         className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" onClick={() => setClickG(true)}>
                        <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z" clipRule="evenodd" />
                        </svg>
                        </div>
                        }
                     
                    </td>
                    <td scope="col" className="bg-gray-100 whitespace-nowrap p-4 text-sm text-gray-500 text-center">
                    {roles[2].insert}
                    </td>
                    <td scope="col" className="bg-gray-100 whitespace-nowrap p-4 text-sm text-gray-500 text-center">
                    {roles[2].update}
                    </td>
                    <td scope="col" className="bg-gray-100 whitespace-nowrap p-4 text-sm text-gray-500 text-center">
                    {roles[2].modify}
                    </td>
                    <td scope="col" className="bg-gray-100 whitespace-nowrap p-4 text-sm text-gray-500 text-center">
                    {roles[2].delete}
                    </td>
                    </tr>
                        : 
                        ""
                        } 
                 
                 {clickS == false
                        ? 
                    <tr className="divide-x divide-gray-200">
                    <td scope="col" className="whitespace-nowrap p-4 text-sm text-gray-500 text-center cursor-pointer" onPointerEnter={() => setHoverS(true)}
                       onPointerLeave={() => setHoverS(false)}>
                    {hoverS == false ? 
                       <p>
                        {roles[3].role}
                        </p> 
                        :
                        <div className="flex justify-center items-center space-x-5">
                        <input
                         id="id"
                         name="admin"
                         type="checkbox"
                         checked={isCheckedS}
                         onClick={handleventS}
                         onChange={ handleOverS}
                         className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" onClick={() => setClickS(true)}>
                        <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z" clipRule="evenodd" />
                        </svg>
                        </div>
                        }
                    </td>

                    
                    <td scope="col" className="whitespace-nowrap p-4 text-sm text-gray-500 text-center">
                    {roles[3].insert}
                    </td>
                    <td scope="col" className="whitespace-nowrap p-4 text-sm text-gray-500 text-center">
                    {roles[3].update}
                    </td>
                    <td scope="col" className="whitespace-nowrap p-4 text-sm text-gray-500 text-center">
                    {roles[3].modify}
                    </td>
                    <td scope="col" className="whitespace-nowrap p-4 text-sm text-gray-500 text-center">
                    {roles[3].delete}
                    </td>
                      </tr>
                        : 
                        ""
                 }
                    
                    
                 
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }
  