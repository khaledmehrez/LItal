import React from 'react'

const ArrayHistory = (props) => {
    const { dataHistory } = props
    return (

        <tr>

            <td class="">{dataHistory.moderateur}</td>
            <td class="">{dataHistory.date}</td>
            <td class="">{dataHistory.action}</td>
            <td class="">{dataHistory.reference}</td>
        </tr>

    )

}
export default ArrayHistory