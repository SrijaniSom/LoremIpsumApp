import React from 'react'
import text from './data'
import './styles.css'
const App = () => {
  const [Data, setData] = React.useState([]);
  const [Count, setCount] = React.useState(0);
  const getInputValue=(event) => {

    const userVal=event.target.value;
    const userValue=parseInt(userVal);
    console.log(userValue);
    if(userValue<0)
    {
      setCount(1);
    }
    else if(userValue>8)
    {
      setCount(8);
    }
    else
    setCount(userValue);
  };
  return (
    <>
      <h2 className="heading"> TIRED OF BORING LOREM IPSUM? </h2>
      <section className="features">
        <div className="sub">
          Paragraphs:
        </div>

        <div className="num">
          <input type="number" className="numinput" onChange={getInputValue}></input>
        </div>

        <button className="btn" onClick={()=>setData(text.slice(0,Count))}>
          GENERATE
        </button>
      </section>
    
    <section className="body">
      {Data.map((currElem,currIndex)=>{
        return(
          <div className="Paras">
          {currElem}
        </div>

               )
         
      })}
    </section>


    
    </>
  )
}

export default App
