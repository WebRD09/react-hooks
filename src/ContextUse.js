import React,{useContext} from 'react'
import Context from "./Contexts/Context"

function ContextUse() {
  const data = useContext(Context)
  return (
    <div>
        <pre>{data.name}</pre>
        <pre>{data.age}</pre>
    </div>
  )
}

export default ContextUse