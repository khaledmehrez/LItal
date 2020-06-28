import React from 'react'

const ArrayHistory = (props) => {
    const { dataHistory } = props
    return (

        <tr>

            <td class="">{`${dataHistory.name}: ${dataHistory.role}`}</td>
            <td class="">{dataHistory.date}</td>
            <td class="">{dataHistory.nameAction}</td>
            <td class="">{dataHistory.nameProduct}</td>
        </tr>

    )

}
export default ArrayHistory