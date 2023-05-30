import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Error from '../Components/Error';
import CommonTitle from '../Share/CommonTitle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const AllUsers = () => {
    const {data,refetch,isError,error,isLoading} = useQuery(['users'],async()=>{
        const res = await fetch(`http://localhost:9000/users`)
        return res.json()
    })
    let content = null 
    console.log(data)

    if(isLoading){
        content = <p><svg class="animate-bounce w-6 h-6"></svg></p>
    }

    if(!isLoading && error){
        content = <Error errorTitle='Somthing Wrong'></Error>
    }

    if(!isLoading && !error && data?.length === 0){
        content = <Error errorTitle='Not Data Found'></Error>
    }

    content = data

    const handelMakeAdmin = webuser =>{
        fetch(`http://localhost:9000/users/admin/${webuser._id}`,{
            method:'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            refetch() 
            console.log(data)
        })
    }

    // const handelDelete = id = {

    // }

    return (
        <>
        <CommonTitle shortTitle='---At a Glance!---' Heading='MANAGE ALL BOOKINGS'></CommonTitle>
        <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                    <tr>
                        <th className='text-center'></th>
                        <th className='text-center'>Name</th>
                        <th className='text-center'>Email</th>
                        <th className='text-center'>Type</th>
                        <th className='text-center'>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                       content?.map((webuser,index) =>  <tr key={index}>
                        <th className='text-center'>{index+1}</th>
                        <td className='text-center'>{webuser.name}</td>
                        <td className='text-center'>{webuser.email}</td>
                        <td onClick={()=>handelMakeAdmin(webuser)} className='text-center'>{webuser.role === 'admin' ? 'admin' : 'webuser'}</td>
                        <td onClick={()=> handelDelete(webuser._id)} className='text-center'><FontAwesomeIcon className='text-red-600' icon={faTrash}/></td>
                    </tr>)
                    }
                </tbody>
                </table>
                </div>
        </>
    );
};

export default AllUsers;