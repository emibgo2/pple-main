import React, { useEffect } from "react"
import { useParams } from "react-router-dom"


function getUserId(initialValue: void, ){
    const user = useParams(); 
    return user.userId;
}

export default getUserId