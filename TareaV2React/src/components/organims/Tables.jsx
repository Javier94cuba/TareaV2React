import { useState } from "react"

import { permissions } from "../Data/Data";
import { roles } from "../Data/Data";
  
  
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

    return (
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-base font-semibold leading-6 text-gray-900">Deploy en vercel</h1>
            <p className="mt-2 text-sm text-gray-700">
            https://tarea-v2-react.vercel.app/
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
                      
                       <a className="text-sm -mr-3">{permissions[0].perm_in}</a>  
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
                          
                          <a className="text-sm -mr-3">{permissions[0].perm_de}</a> 
                      </span>
                        </td>
                      <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0 text-center">
                      <span className="mb-5 text-slate-950 whitespace-nowrap p-4 text-s text-center font-medium">
                      <p className="text-xl p-2">{permissions[0].entity}</p> <a className="text-sm -mr-3">{permissions[0].perm_up}</a> </span> 
                       </td>
                      <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0 text-center">
                      <span className="mb-5 text-slate-950 whitespace-nowrap p-4 text-s text-center font-medium">
                      <p className="text-xl p-2">{permissions[0].entity}</p> <a className="text-sm -mr-3">{permissions[0].perm_mo}</a>  </span>
                        </td>
                    </tr>    
                </thead>
                
                <tbody className="divide-y divide-gray-200 bg-white">

                <tr className="divide-x divide-gray-200">
                <td scope="col" className="whitespace-nowrap p-4 text-sm text-gray-500 text-center cursor-pointer" onPointerEnter={() => setHover(true)}
                       onPointerLeave={() => setHover(false)}>
                    {hover == false ? 
                       <p>
                        {roles[0].role}
                        </p> 
                        :
                        <div className="">
                        <input
                         id="id"
                         name="admin"
                         type="checkbox"
                         checked={isChecked}
                         onClick={handlevent}
                         onChange={ handleOver}
                         className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                        </div>
                        }
                     
                    </td>
                   
                    <td scope="col" className="whitespace-nowrap p-4 text-sm text-gray-500 text-center">
                    {roles[0].insert}
                    </td>

                    <td scope="col" className="whitespace-nowrap p-4 text-sm text-gray-500 text-center">
                    {roles[0].update}
                    </td>
                    <td scope="col" className="whitespace-nowrap p-4 text-sm text-gray-500 text-center">
                    {roles[0].modify}
                    </td>
                    <td scope="col" className="whitespace-nowrap p-4 text-sm text-gray-500 text-center">
                    {roles[0].delete}
                    </td>
                 </tr>
                 <tr className="divide-x divide-gray-200">
                    
                 <td scope="col" className="whitespace-nowrap p-4 text-sm text-gray-500 text-center cursor-pointer" onPointerEnter={() => setHoverAd(true)}
                       onPointerLeave={() => setHoverAd(false)}>
                    {hoverAd == false ? 
                       <p>
                        {roles[1].role}
                        </p> 
                        :
                        <div className="">
                        <input
                         id="id1"
                         name="admin1"
                         type="checkbox"
                         checked={isCheckedAd}
                         onClick={handleventAd}
                         onChange={ handleOverAd}
                         className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
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
                 <tr className="divide-x divide-gray-200">
                 <td scope="col" className="whitespace-nowrap p-4 text-sm text-gray-500 text-center cursor-pointer" onPointerEnter={() => setHoverG(true)}
                       onPointerLeave={() => setHoverG(false)}>
                    {hoverG == false ? 
                       <p>
                        {roles[2].role}
                        </p> 
                        :
                        <div className="">
                        <input
                         id="id"
                         name="admin"
                         type="checkbox"
                         checked={isCheckedG}
                         onClick={handleventG}
                         onChange={ handleOverG}
                         className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                        </div>
                        }
                     
                    </td>
                    <td scope="col" className="whitespace-nowrap p-4 text-sm text-gray-500 text-center">
                    {roles[2].insert}
                    </td>
                    <td scope="col" className="whitespace-nowrap p-4 text-sm text-gray-500 text-center">
                    {roles[2].update}
                    </td>
                    <td scope="col" className="whitespace-nowrap p-4 text-sm text-gray-500 text-center">
                    {roles[2].modify}
                    </td>
                    <td scope="col" className="whitespace-nowrap p-4 text-sm text-gray-500 text-center">
                    {roles[2].delete}
                    </td>
                 </tr>
                    <tr className="divide-x divide-gray-200">
                    <td scope="col" className="whitespace-nowrap p-4 text-sm text-gray-500 text-center cursor-pointer" onPointerEnter={() => setHoverS(true)}
                       onPointerLeave={() => setHoverS(false)}>
                    {hoverS == false ? 
                       <p>
                        {roles[3].role}
                        </p> 
                        :
                        
                        <input
                         id="id"
                         name="admin"
                         type="checkbox"
                         checked={isCheckedS}
                         onClick={handleventS}
                         onChange={ handleOverS}
                         className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                        
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
                 
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }
  