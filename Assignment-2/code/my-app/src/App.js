//import logo from './logo.svg';
import './App.css';



function App(props) {
 const {employee}=props;
    
return(
  <div className="container">
  <img src={employee.profileImg} alt='cannot display profile image'/>
  <div className='info'>
  
  <h1>{employee.name}</h1>
  <h5>Location</h5>
  <p><strong>{employee.location}</strong></p>
  <h5>Blood Group</h5>
  <p><strong>{employee.bloodGroup}</strong></p>
  <h5>Age</h5>
  <p><strong>{employee.age}</strong></p>
  </div>
</div>
)
}



export default App;
