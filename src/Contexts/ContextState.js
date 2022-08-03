import Context from "./Context";

const ContextState = (props) => {

    const data = {
        "name": "Raj",
        "age": 20
    }

    return (
        <Context.Provider value={data}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextState;