import React, { useRef, useState, useEffect } from "react";

const Accepted = () => {
    const [accepted, setAccepted] = useState("");
  const [error, setError] = useState("");
  const [students, setstudents] = useState([]);
  const [filter,setFilter]= useState([]);
  const [branch, setBranch]=useState('');
  const[temp,setTemp]=useState(false);
  const[dat,setDat]=useState([]);
  const[loading,setLoading]=useState(true);
  //for filtering
  let [bys, setBys] = useState([""]);
  let [isSetBys, setSetBys] = useState(false);
  let [gls,setGls] = useState([]);
  let [isSetGls, setSetGls] = useState(false);
  let [isBoys, setisBoys] = useState(false);
  let [isGirls, setisGirls] = useState(false);


  useEffect(() => {
    // const fetchAccepted = async () => {
    //   const response = await fetch("http://localhost:4000/api/admin/acceptedstuds");
    //   const json = await response.json();

    //   if (response.ok) {
    //     setAccepted(json);
    //     console.log(accepted);
    //   } else {
    //     setError(json.error);
    //     {
    //       alert(json.error);
    //     }
    //   }
      



      
    // };



    
    //   fetchAccepted();
      
    fetch("http://localhost:4000/api/admin/acceptedstuds", {
        method: "GET",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => {
        return res.json();
        
      })
      .then((data) => {
        console.log([...data]);
        setAccepted([...data]);
        setDat([...data])
        console.log("hello")
        console.log(accepted);
        setLoading(false);

        
        let st = [...data];
        console.log(st);
         const st2=[
          ...st.filter((student) => {
            return student.gender == "Male" ;
          }),
        ];
        setSetBys(true);
        console.log(st2);
        console.log(st)
        const st1=[
          ...st.filter((student) => {
            return student.gender == "Female"  ;
          }),
        ];
        console.log(st1);
        setGls (st1);

        setSetGls(true);
        setBys([...st2.sort((a, b) => a.merit - b.merit)]);        setisBoys(true);
        setGls([...st1.sort((a, b) => a.merit - b.merit)]);
        console.log(gls);
        console.log(students);
        console.log(branch);
      });


  }, []);

  console.log(branch)
 
  const filteredDat = branch
  ? gls.filter((item) => item.course == branch)
  : gls;

  const filteredDat1 = branch
  ? bys.filter((item) => item.course == branch)
  : bys;
    return ( <>

{/* { !loading &&<form className="form" id="form1" onSubmit={handleSubmit}> */}
      
      <div className="wrap-input100">
                            <label>Choose branch:</label>
                            <br/>
                            
                            <select
                                  value={branch}
                                  onChange={(e) => setBranch(e.target.value)}
                                    id="branches"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                  >
                                    <option selected="">Choose a branch</option>
                                    <option value="COMPS">Computer</option>
                                    <option value="EXTC">EXTC</option>
                                    <option value="IT">IT</option>
                                    <option value="TEXT">Textile</option>
                                    <option value="MECH">Mechanical</option>
                                    <option value="PROD">Production</option>
                                    <option value="TRONICS">Electronics</option>
                                    <option value="TRICAL">Electrical</option>
                                    <option value="CIVIL">Civil</option>
                
                
                            </select>
                          </div>
                         
                          
                          


                            

                            {/* <button
                            onClick={handleSubmit}
                            type="submit"
                            className="text-black bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                              >
                            Submit
                            </button>
                                            

                          

   </form>} */}
    
    <div class="print__section">
  <div class="container mx-auto px-4">
    <div class="flex flex-col">
      <div class="my-4">
        
      </div>
      <div class="my-4">
        <div class="card bg-white shadow-md">
          <div class="float__start">
            <h1 class="text-2xl font-bold text-gray-700 py-2 px-4">Accepted Boys List</h1>
          </div>
          {/* <hr class="border-gray-300 my-2"> */}
          <div class="float__infoss p-4">
            <div class="App">
              <table class="table-auto w-full">
                <thead>
                  <tr class="bg-gray-100">
                    <th class="px-4 py-2">Name</th>
                    <th class="px-4 py-2">Merit No.</th>
                    <th class="px-4 py-2">Course</th>
                    <th class="px-4 py-2">Category</th>
                    <th class="px-4 py-2">Gender</th>
                  </tr>
                </thead>
                <tbody>
                  {isBoys && filteredDat1.map((acc) => (
                    <tr key={acc._id}>
                      <td class="border px-4 py-2">{acc.name}</td>
                      <td class="border px-4 py-2">{acc.merit}</td>
                      <td class="border px-4 py-2">{acc.course}</td>
                      <td class="border px-4 py-2">{acc.category}</td>  
                      <td class="border px-4 py-2">{acc.gender}</td>  
                    </tr> 
                  ))}
                </tbody>
              </table>
            </div>   
          </div>
        </div>
      </div>
      <div class="my-4">
        <div class="card bg-white shadow-md">
          <div class="float__start">
            <h1 class="text-2xl font-bold text-gray-700 py-2 px-4">Accepted Girls List</h1>
          </div>
          {/* <hr class="border-gray-300 my-2"> */}
          <div class="float__infoss p-4">
            <div class="App">
              <table class="table-auto w-full">
                <thead>
                  <tr class="bg-gray-100">
                    <th class="px-4 py-2">Name</th>
                    <th class="px-4 py-2">Merit No.</th>
                    <th class="px-4 py-2">Course</th>
                    <th class="px-4 py-2">Category</th>
                    <th class="px-4 py-2">Gender</th>
                  </tr>
                </thead>
                <tbody>
                  {setGls && filteredDat.map((acc) => (
                    <tr key={acc._id}>
                       <td class="border px-4 py-2">{acc.name}</td>
                      <td class="border px-4 py-2">{acc.merit}</td>
                      <td class="border px-4 py-2">{acc.course}</td>
                      <td class="border px-4 py-2">{acc.category}</td>  
                      <td class="border px-4 py-2">{acc.gender}</td>  
                      </tr> 
                  ))}
                </tbody>
              </table>
            </div>   
          </div>
        </div>
      </div>
      </div>
      </div>
      </div>

    </>
  );
    
   
}
 
export default Accepted;