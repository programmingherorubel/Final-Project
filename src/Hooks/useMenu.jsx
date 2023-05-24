import { useEffect, useState } from "react"

const useMenu = ()=>{
    const [menuData,setMenuData] = useState([])
    const [menuDataLoading,setMenuDataLoading] = useState(true)
    useEffect(()=>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            setMenuData(data)
            setMenuDataLoading(false)
        })
    },[])
    return [menuData,menuDataLoading]
}

export default useMenu