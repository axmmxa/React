import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch} from "react-redux"
import { bindActionCreators} from "redux"
import { actionCreators} from"./state/index"


function App() {

  const state = useSelector((state) => state)
  const dispatch = useDispatch()

  const { depositMoney, withdrawMoney } = bindActionCreators(actionCreators, dispatch);

  console.log(AC)


  console.log(state)

  return (
    <div className="App">
      <h1>account</h1>
      <button onClick={() => depositMoney(100)}> Deposit</button>
      <button onclick= {() => withdrawMoney(20)}> Withdraw</button>
    </div>
  );
}

export default App;
