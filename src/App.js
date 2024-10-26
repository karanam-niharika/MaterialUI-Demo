import logo from './logo.svg';
import './App.css';
import LoginForm from './LoginForm';
import StackBars from './StackBars'
import DataTable from './DataTable';
import Cards from './Cards';
import ModelPage from './ModelPage'
import StepperView from './StepperView'
import CheckBoxCode from './CheckBoxCode'
import RatingCode from './RatingCode';
import SliderCode from './SliderCode';
import ListsCode from './ListsCode';
import AlertCode from './AlertCode';
import ProgressCode from './ProgressCode';
import AccordianCode from './AccordianCode'



function App() {
  return (
  <>
   {/* <h1>Main Component</h1> */}
   <LoginForm/>
   <StackBars/>
   <DataTable/>
   <Cards/>
  <StepperView/>
   <ModelPage/>
   <CheckBoxCode/>
   <RatingCode/>
   <SliderCode/>
   <ListsCode/>
   <AlertCode/> <br></br> <br></br>
   <ProgressCode/>  <br></br> <br></br>
   
   <AccordianCode/>
   
   
  
  </>
   
  );
}

export default App;
