import User from "./User"
import { useState } from "react";
//PROPSLARI MAP EDİLEN SINGLE USER A GONDER VE USER DA AL.
const UserComponents=()=>{
  const [users,setUsers]=useState([
  {
    displayName: "Ahmet Yılmaz",
    email: "ahmet.yilmaz@example.com",
    phoneNumber: 5551112233,
    role: "admin",
  },
  {
    displayName: "Ayşe Demir",
    email: "ayse.demir@example.com",
    phoneNumber: 5552223344,
    role: "employee",
  },
  {
    displayName: "Mehmet Kaya",
    email: "mehmet.kaya@example.com",
    phoneNumber: 5553334455,
    role: "employee",
  },
  {
    displayName: "Elif Çetin",
    email: "elif.cetin@example.com",
    phoneNumber: 5554445566,
    role: "admin",
  }
]);
  let content=(
    <div>
           {      
               users?.map((user,index)=>{
                    console.log(user)   
                    return(
                        <div>
                            <User user={users} />
                        </div>
                    )
               })
                
            }
    </div>
  )
  return content;    
}

export default UserComponents
