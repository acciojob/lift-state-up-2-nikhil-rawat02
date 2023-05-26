import React from 'react'

function Child(props) {

  return (
    <div className="child" style={{backgroundColor :"darkorange", margin: "10px"}} >
      <h2>Child Component</h2>

    <input type="text" onChange={ (e) => {props.setInputvlv(e.target.value)}}/>
    </div>
  )
}

export default Child
