function Theme({darkmode,setDarkMode}){
    return <button className={darkmode? "darkmode" : ""} onClick={()=>setDarkMode((darkmode)=>!darkmode)}>{darkmode ?"light mode"  :"Dark Mode" }</button>
}

export default Theme;