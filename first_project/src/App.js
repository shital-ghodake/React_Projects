//import logo from './logo.svg';
 
//import './App.css';
// import FirstComponent from './components/FirstComponent';
// import SecondComponent from './components/SecondComponent';
// import ThirdComponent from './components/ThirdComponent';
// import FourthComponent from './components/FourthComponent';
// import GreetingComponent from './components/GreetingComponent';
// import ProfileCard from './components/ProfileCard';
// import React from 'react';
// import ReactDOM from 'react-dom';
// import FavoriteFood from './components/FavoriateFood';
// import DemoClassComponent from './components/DemoClassComponent';
// import StudentInfo from './components/StudentInfo';
 import Customer from './components/customer';

 




/*function App() {
  return (
    <div>
      <h1>This is my first react application</h1>
      <FirstComponent />
      {/* <SecondComponent />
      <ThirdComponent name="Ajay" age="22" />
      <FourthComponent name="Vijay" age="22" /> 
     </div>
  );
}
export default App;
*/



/*function App() {

  let name="Ajay";
  let age="22";
  return (
    <div>

      <h1>This is my first react application</h1>

      <FourthComponent name={name} age={age} />

    </div>
  )
}
*/

/*function App(){
  return(
    <div>
      <GreetingComponent name="Shital" />
    </div>
  )
}
export default App;
*/
/*function App() {
  return (
    <div>
      <ProfileCard name="Shital" age={28} location="Kolhapur" />
    </div>
  );
}
*/

/*function App() {
  return (
    <div>
      <h1>Welcome to My Food App</h1>
      <FavoriteFood food="Pizza" />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;*/

/*function App(){
  return(
    <div>
      <DemoClassComponent/>
    </div>
  );
}
export default App;*/

/*function App(){
  return(
      <div>
        <StudentInfo studentName ="meena" age="28" location="pune"/>
      </div>
      );
}
export default App;*/

/*import "./App.css";
import Demonavbar from './components/DemonavBar';
function App() {
  return (
    <div>
      <Demonavbar/>
    </div>
  );
}

export default App;*/


/*function App(){
  return(
    <div>
      <Customer  name="Abc" paid={true}/>
    </div>
  )

}
export default App;
import React from 'react';
import Customer from './components/Customer';*/

function App() {
  return (
    <div>
      <Customer name="Abc" age={25} paid={false} />
      <Customer name="xyz" age={30} paid={false} />
    </div>
  );
}

export default App;


