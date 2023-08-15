import { Fragment } from "react"
function Table({data, tableheads}) {
    const renderedRow = data.map((object)=>{
        const renderedCells = tableheads.map((value)=>{
            return(<td key={value.label}>{value.renderer(object)}</td>)
        })
        return(<tr key={data.name}>
            {renderedCells}
        </tr>)
    })
    const renderedHeaders = tableheads.map((value)=>{
      if (value.header){
        return <Fragment key={value.label}>{value.header()}</Fragment>;
      }
        return(<th key={value.label}>{value.label}</th>)
    })
  return (
    <div className="table-container">
      <h2>Hello World!</h2>
      <table>
        <thead>
            <tr>
            {renderedHeaders}
            </tr>
        </thead>
        <tbody>
            {renderedRow}
        </tbody>
      </table>
    </div>
  )
}

export default Table; 
