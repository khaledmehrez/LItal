import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Button, Header, Image, Modal } from "semantic-ui-react";

import { getUserFromApi,patchUserSession,PutUserSata } from '../../api/ApiUsers';


const SignIn = () => {

    const [state, setCounters] = useState({ email: '', password: '' })

    const usersState = useSelector((state) => state.usersState)


    const dispatch = useDispatch()

    useEffect(() => { dispatch(getUserFromApi()); }, [dispatch]);

    
    function authentification() {
        const x = usersState.filter(el => el.email === state.email && el.password === state.password)
        console.log(x)
         if (x.length!==0 && x[0].email !== 'takoua@gmail.com' && x[0].password !== "0000" ){
            alert('/moderateur')
            dispatch(patchUserSession("moderateur"))
            dispatch(PutUserSata(x[0]))
        }
        else if (x.length!==0 && x[0].email === 'takoua@gmail.com' && x[0].password === "0000" ){
            alert('/Admin')
            dispatch(patchUserSession("admin"))
            dispatch(PutUserSata(x[0]))
        }
        
        else {
            alert('nexiste pas')
            dispatch(patchUserSession("guest"))
        }
        
        

    }

    return (
        
            <div className="ui form">
          <div class="field">
            <label>Email</label>
            <input id='emailSave' placeholder="email" name="mail" pattern=".+@(gmail\.com|yahoo\.fr)" className="form-control" placeholder="Enter email" onChange={(e) => setCounters({ ...state, email: e.target.value })} />
          </div>
          <div class="field">
            <label>Password</label>
            <input id='passwordSave' placeholder="password" name="password" onChange={(e) => setCounters({ ...state, password: e.target.value })}/>
          </div>
          <div class="field">
            <div class="ui checkbox">
              <input type="checkbox" class="hidden" readonly="" tabindex="0" />
              <label>I agree to the Terms and Conditions</label>
            </div>
          </div>
          <button type="button" class="ui button" onClick={authentification}>
            sign in
          </button>
          </div>
        
        // <center>
        //     <div className='box-sigg-in'>

        //         <div>
        //             <h3>Sign In</h3>
        //             <div className="fo">
        //                 <input id='emailSave' type="email" pattern=".+@(gmail\.com|yahoo\.fr)" className="form-control" placeholder="Enter email" onChange={(e) => setCounters({ ...state, email: e.target.value })} />

        //             </div>
        //             <br />
        //             <div>
        //                 <input id='passwordSave' type="password" placeholder="Enter password" onChange={(e) => setCounters({ ...state, password: e.target.value })} />
        //             </div>
        //             <br />
        //             <button onClick={authentification}>Sign in</button>
        //         </div>
        //     </div >
        // </center>

    )
}




export default SignIn
