import React from 'react'
import { useHistory } from "react-router-dom";


function LogIn() {
    let history = useHistory();
    
    return (        
      
        <div className="form">
          <div className="title">LOG IN</div>
          <form>
            <div className="input">
              <label htmlFor="">Name</label>
              <input type="text" />
            </div>

            <div className="input">
              <label htmlFor="">Enter Email Address</label>
              <input type="email" />
            </div>

            <button onClick={() => {history.push('/Home')}}>Login</button>
          </form>
        </div>
      
    );
}

export default LogIn
