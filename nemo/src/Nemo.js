import React from "react";


const Nemo = (props) => {
    const [count, setCount] = React.useState(3);
    console.log("in nemo");
    console.log(count)

    const addNemo = () => {
        setCount(count+1);
    } 
    const removeNemo = () => {
        setCount(count > 0 ? count-1 : 0)
    }


    const nemo_count = Array.from({length : count}, (a, i)=> (i))
    return (
        <div className='App'>
        {nemo_count.map((num, idx) => {
        return (
        <div 
        key={idx}
        style={{
            backgroundColor : "#eee",
            width : "150px",
            height : "150px",
            margin : "5px"
        }}>
        nemo
        </div>)
        
    })}
        <button onClick={addNemo} style={{margin : "3px 5px" }}>추가하기</button>
        <button onClick={removeNemo} >제거하기</button>
    </div>
    );
}


export default Nemo;