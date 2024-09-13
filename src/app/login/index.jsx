import { InputText } from "../../assets/components/inputText/inputText"
import { useState } from "react"
export default function Login(){
    document.title = "Login";
    const [getText,setText] = useState("")
    let typeText = "text"
    let title = "Usuario"
    return( <div>Login {getText}
        <InputText {...{setText,typeText,title}}/>
    </div>)
}