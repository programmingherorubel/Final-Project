import { useQuery } from "@tanstack/react-query"
import { useContext } from "react"
import { AuthContext } from "../Providers/AuthProvider"
const useCart = ()=>{
    const {user} = useContext(AuthContext)
    const {refetch,data:cart=[],loading,error} = useQuery({queryKey: ['carts',user?.email],queryFn: async ()=>{
        const response = await fetch(`http://localhost:9000/carts?email=${user.email}`)
        return response.json()
    }})
    return [cart,refetch,loading,error]
}

export default useCart