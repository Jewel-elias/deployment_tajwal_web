import React from 'react';
import { useEffect, useState } from 'react';
import '../../../bootstrap/css/bootstrap.css'
import '../../style/App.css';
import TodoItems from './TodoItems';
import FilterItems from './FilterItems';
import Axios from 'axios';


function MyItems() {

    const [Data, setData] = useState([]);
    useEffect(() => {
        Axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                console.log("Getting from :::: ", res.data);
                setData(res.data);
            })
            .catch(err => console.log(err));
    }, [])

    const arrlist = Data.map((dataItem, index) => {
        return (
            <tr>
                <td>{dataItem.id}</td>
                <td>{dataItem.title}</td>
                <td>{dataItem.body}</td>
            </tr>
        )
    })

    return (
        <div className='MyItems'>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.7.2/font/bootstrap-icons.min.css" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"></link>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"></link>

            <FilterItems />
            <TodoItems />
        </div>

    )
}
export default MyItems;

