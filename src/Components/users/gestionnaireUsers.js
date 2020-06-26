import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getUserFromApi } from '../../api/ApiUsers';
import ArrayUsers from './arrayUsers'
import Register from './register'
export default function GestionnaireUsers() {

    const usersState = useSelector((state) => state.usersState)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getUserFromApi());
    }, [dispatch]);




    return (
        <div>
            <Register />


            <table class="ui celled table">
                <thead class="">
                    <tr class="">

                        <th class="">Prénom</th>
                        <th class="">Plus détails</th>
                        <th class="">Configuration</th>
                      




                        <th class=""> </th>

                    </tr>
                </thead>
                <tbody class="">

                    {usersState.map(el => <ArrayUsers dataUsers={el} />)}


                </tbody>
                <tfoot class="">
                    <tr class="">
                        <th colspan="4" class="">
                            <div class="ui pagination right floated menu">
                                <a class="icon item"><i aria-hidden="true" class="chevron left icon"></i></a>
                                <a class="item">1</a>
                                <a class="item">2</a>
                                <a class="item">3</a>
                                <a class="item">4</a>


                                <a class="icon item"><i aria-hidden="true" class="chevron right icon"></i></a>
                            </div>
                        </th>
                    </tr>
                </tfoot>

            </table>


        </div>
    )
}
