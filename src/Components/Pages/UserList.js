import React,{useState,useEffect} from 'react';
import { Api } from "../../Api/Api";

const UserList = () => {
  
    const [usersList,setUsersList]=useState([]);

    useEffect(() => {
        fetchUsersList();
    }, []);

    const fetchUsersList=async()=>{
        const response = await Api.get("/user",{});
        setUsersList(response.data.data);   
    }
    return (
    <div class="row no-gutters">
        {
        usersList && usersList.map(user=>{
            return(
            <div key={user.id} class="col-6 col-sm-4 col-md-3 col-lg-2">
            <div class="p-2 text-center">
            <div class="bg-white rounded shadow p-3 h-100">
            <img src={user.picture} class="mb-3 w-100" alt="dummmy user"></img>
            <div class="text-muted small text-truncate">{user.id}</div>
            <div class="h6 mt-2 mb-0 text-truncate">{user.title}&nbsp;{user.firstName}&nbsp;{user.lastName}</div>
            <div class="text-muted text-truncate small">{user.email}</div>
            <hr/>
            </div>
            </div>
            </div>
            )

        })
        }
    </div>
    );
};

export default UserList;
