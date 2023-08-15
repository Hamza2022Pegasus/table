import { NavLink, Outlet } from 'react-router-dom'



function TableLayout() {
  return (
    <>
    <header> 
      <h1>Reuseable Table</h1>
      <nav>
        <NavLink to="/">Table</NavLink>
        <NavLink to="list">List</NavLink>
      </nav>
    </header>

      <Outlet/>
    </>
  )
}

export default TableLayout
