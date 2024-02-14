import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import DataTable from 'react-data-table-component'

export default function Table() {
    const [apiData, setApiData] = useState([])
    const [search, setSearch] = useState(false)
    const [searchKey, setSearchKey] = useState('')
    const searchRef = useRef(0)
    const searchMethod = () => {
        setSearchKey(searchRef.current.value)
    }
    useEffect(() => {
        if (!search) {
            axios('https://jsonplaceholder.typicode.com/posts')
                .then((res) => {
                    setApiData(res.data)
                })
        } else {
            setApiData([])
        }
        
        if(searchKey == ''){
            setSearch(false)
        }
        if(searchKey != ''){
            setSearch(true)
        }

    }, [search, searchKey])
    const columns = [
        {
            name: "User ID",
            selector: row => row.userId,
            width: "4%"
        },
        {
            name: "ID",
            selector: row => row.id,
            width: "4%"
        },
        {
            name: "Title",
            selector: row => row.title,
            width: "30%"
        },
        {
            name: "Body",
            selector: row => row.body,
            wrap: true
        }
    ]
    return (
        <div>
            <br />
            {/* <div className="container">
                <form class="form-inline">
                    <input ref={searchRef} class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={searchMethod} />
                </form>
            </div> */}

            <DataTable
                title="Table Data"
                columns={columns}
                data={apiData}
            />
        </div>
    )
}
