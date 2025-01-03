import { useEffect, useState } from 'react';
import './index.css';


const Login = ()=>{

  const [allValues,SetValues] = useState({
         username:"",
         password:"",
         errorMsg:""
  }) 

    const onSubmitUSerData = async (e)=>{
        e.preventDefault();
        
       const api="https://apis.ccbp.in/login";
       
       const userDetails ={
        username:allValues.username,
        password:allValues.password
       }

       const options ={
        method:"post",
        body:JSON.stringify(userDetails)
       }

       try{
         const response = await fetch(api,options);
         const data =await response.json();
         
         if (response.ok===true){
          SetValues({...allValues,errorMsg:""});
         }
         else{
          SetValues({...allValues,errorMsg:data.error_msg});
         }

       }catch (error){
          console.log(error); 
        }
       }
    


    return(
       <div className='login-cont'>

           <form onSubmit={onSubmitUSerData} className='border border-primary p-2 rounded '>

                

               <div className="form-group">
                     <label htmlFor="exampleInputEmail1">UserName</label>
                     <input onChange={(e)=>{SetValues({...allValues,username:e.target.value})}} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <small id="emailHelp" className="form-text text-muted text-dark">We'll never share your UserName with anyone else.</small>
                 </div>
                 <br></br>



                <div className="form-group">
                      <label htmlFor="exampleInputPassword1">Password</label>
                      <input onChange={(e)=>{SetValues({...allValues,password:e.target.value})}} type="password" className="form-control" id="exampleInputPassword1"/>
                </div>
        

              

                 <button type="submit" className="btn btn-primary btn-block">Login</button>
                 <br></br>

                 <p className='text-danger'>{allValues.errorMsg}</p>
            </form>


       </div>

    )
}


export default Login; 