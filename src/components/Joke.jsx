export default function(props){
    return (
        <>
            {props.line && <h3 className="setup">{props.line}</h3>}
            {props.punchline && <p className="punchline">{props.punchline}</p>}
            <hr />
        </>
    )
}