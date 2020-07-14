import React, { Component, useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import ArrayHistory from './arrayHistory'

import { getHistoryFromApi } from '../../api/ApiHistory'

const History = () => {
    const historyState = useSelector((state) => state.historyState)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getHistoryFromApi());
    }, [dispatch]);


    return (
        <div className="">
            <table class="ui celled table ">
                <thead class="">
                    <tr class="">

                        <th class="header-array">Modérateur</th>
                        <th class="header-array">Date</th>
                        <th class="header-array">OPeration</th>
                        <th class="header-array">Réference</th>
                    </tr>
                </thead>
                <tbody class="">

                    {historyState.map(el => <ArrayHistory dataHistory={el} />).reverse()}


                </tbody>


            </table>
            <center>
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
            </center>
        </div>
    )

}


export default History