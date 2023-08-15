import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import './styles.css'

// components import
// import Table from './components/Table'
import List from './components/List'
import SortTable from './components/SortTable'

// pages import
import TableLayout from './pages/TableLayout'

const data = [
  {"name":"Hamza","age":26,"gender":"male"},
  {"name":"Ahmad","age":27,"gender":"male"},
  {"name":"Fahad","age":25,"gender":"male"},
]

const tableheads = [
  {label:'Name',renderer:(data)=>data.name,sortValue:(data)=>data.name},
  {label:'Age',renderer:(data)=>data.age,sortValue:(data)=>data.age},
  {label:'Gender',renderer:(data)=>data.gender},
  {label:"Age Sqrt",renderer:(data)=>Math.sqrt(data.age).toFixed(4)}
]

const keyFn=(data)=>{
  return data.name
}
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<TableLayout/>}>
      
      <Route index element={<SortTable data={data} tableheads={tableheads} keyFn={keyFn}/>}></Route>
      <Route path='list' element={<List/>}></Route>
    </Route>
)
);
function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
