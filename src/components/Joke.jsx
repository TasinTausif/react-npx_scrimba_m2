import React from "react"

export default function Joke(props){

    const [isShown, setIsShown]= React.useState(false)

    function toggleShown(){
        setIsShown(prev => !prev)
    }
    function conditionCheck(){
        return isShown ? "Hide" : "Show";
    }
    return (
        <>
            {props.line && <h3 className="setup" >{props.line}</h3>}
            {/* In the line bellow, if && was used and it had 0 in value, it'll display 0 first and then the punchline. So, to avoid that, ternary was used */}
            {isShown ? <p className="punchline">{props.punchline}</p> : null}
            <button onClick={toggleShown}>{conditionCheck()} punchline</button>
            <hr />
        </>
    )
}

// exp1 && exp2, for this, if exp1 is true, then it'll trigger exp1 first and if exp2 is also true, it'll trigger exp2, if false it won't trigger exp2.