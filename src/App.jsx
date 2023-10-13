import { useEffect } from "react"

const App = () => {
  console.log('componnet')
  const fetchData = async()=>{

  let response = await fetch("https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001")
  response = await response.json()
  console.log("fetch function");
  console.log(response);
  }

  fetchData()
  //  useEffect(()=>{
  //   fetchData()
  //  }, [])
  return (
    <div>
    {console.log("jsx")}
      app
    </div>
  )
}

export default App
