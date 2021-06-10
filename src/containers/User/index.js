 import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../redux/actions/userAction'
import axios from 'axios';
import './style.css';
 
 function User() {
    const Info = useSelector((state) => state.userInfo)
    //const { firstName, lastName, country, image } = user[0];
    const dispatch = useDispatch();

    const fetchRandomData = async () => {
        const response= await axios
        .get('https://randomuser.me/api')
        .catch((err) => {
            console.log("Err ", err)
        });
        setTimeout(function(){ dispatch(setUser(response.data.results[0])) }, 1500);
        
    }
    useEffect(() => {
        fetchRandomData()
    },[])



    if (Info.loaded === false){
        return(
            <div class="ui mt200">
                <div class="ui active dimmer">
                    <div class="ui text loader">Loading</div>
                </div>
                <p></p>
            </div>
        )
      }else{
    return (
        
        <div className="ui cardUser">
        <button onClick={() => window.location.reload()}>Fetch New User</button>
            <div className="image mt200">
                <img src={Info.user.picture.large} alt="" />
            </div>
            <div className="content">
                <div className="header card">
                    <h1>{Info.user.name.first} {Info.user.name.last}</h1>
                    <p>{Info.user.location.city}</p>
                    <p>{Info.user.location.country}</p>
                    <p>{Info.user.location.state}</p>
                </div>
            </div>
        </div>
    );
 }
}
 
 export default User;