import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";


import { getUserFromApi } from '../../api/ApiUsers';


const SignIn = () => {

    const [state, setCounters] = useState({ email: '', password: '' })

    const usersState = useSelector((state) => state.usersState)


    const dispatch = useDispatch()

    useEffect(() => { dispatch(getUserFromApi()); }, [dispatch]);


    function authentification() {
        const x = usersState.filter(el => el.email === state.email && el.password == state.password)
        console.log(x[0])
        x.length === 0 ? alert('nexiste pas') : (x[0].email === 'takoua@gmail.com' ? alert('/Admin') : alert('/moderateur'))

    }

    return (
        <center>
            <div className='box-sigg-in'>

                <div>
                    <h3>Sign In</h3>
                    <div className="fo">
                        <input id='emailSave' type="email" pattern=".+@(gmail\.com|yahoo\.fr)" className="form-control" placeholder="Enter email" onChange={(e) => setCounters({ ...state, email: e.target.value })} />

                    </div>
                    <br />
                    <div>
                        <input id='passwordSave' type="password" placeholder="Enter password" onChange={(e) => setCounters({ ...state, password: e.target.value })} />
                    </div>
                    <br />
                    <button className='ui button' onClick={authentification}>Sign in</button>
                </div>
            </div >
        </center>

    )
}




export default SignIn
