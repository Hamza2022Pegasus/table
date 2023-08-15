import { useState } from 'react';
import Table from './Table'
import { FaSort, FaSortDown, FaSortUp } from 'react-icons/fa'
function getIcons(label, sortBy, sortOrder) {
    if (label !== sortBy) {
        return <div><FaSort /></div>
    }
    if (sortOrder === null) {
        return <div><FaSort /></div>
    } else if (sortOrder === 'asc') {
        return <div><FaSortUp /></div>
    } else if (sortOrder === 'desc') {
        return <div><FaSortDown /></div>
    }
}

function SortTable(props) {
    const { tableheads, data } = props;
    const [sortOrder, setSortorder] = useState(null)
    const [sortBy, setSortBy] = useState(null)

    const handleClick = (label) => {
        if (sortBy && label !== sortBy){
            setSortorder('asc');
            setSortBy(label);
            return
        }

        if (sortOrder === null) {
            setSortorder('asc');
            setSortBy(label);
        } else if (sortOrder === 'asc') {
            setSortorder('desc')
            setSortBy(label);
        } else if (sortOrder === 'desc') {
            setSortorder(null);
            setSortBy(null)
        }
        // console.log(label)
    }

    const updatedTableHeads = tableheads.map((column) => {
        if (!column.sortValue) {
            return column;
        }
        return {
            ...column,
            header: () => <th className='cursor-pointer bg-grey' onClick={() => handleClick(column.label)}><div className='flex'>{getIcons(column.label, sortBy, sortOrder)}{column.label}</div></th>
        }
    })

    let sortedData = data;
    if (sortBy && sortOrder) {
        const { sortValue } = tableheads.find(column => column.label === sortBy)
        sortedData = [...data].sort((a, b) => {
            const valueA = sortValue(a)
            const valueB = sortValue(b)
            const reverseOrder = sortOrder === 'asc' ? 1 : -1

            if (typeof (valueA) === 'string') {
                return valueA.localeCompare(valueB) * reverseOrder;
            } else {
                return (valueA - valueB) * reverseOrder;
            }
        })
    }

    return (<div className='white-text'>
        <Table {...props} data={sortedData} tableheads={updatedTableHeads} />
    </div>
    )
}


export default SortTable
