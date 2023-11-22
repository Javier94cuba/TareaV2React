function Button({text,img_alt}) {
    return (
      <div className="flex items-center justify-center">
      <button className=" bg-slate-800 text-white shadow-lg shadow-slate-500/50 hover:bg-slate-600  py-3 p-5 mt-10 font-semibold rounded-lg  focus:outline-none focus:ring-2 focus:ring-blue-800 focus:ring-opacity-100 flex">{text}<img className="w-6 ml-2 bg-white rounded-full" src={img_alt}/> </button>
      </div>
    )
  }
  
  export default Button