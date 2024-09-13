function InputText({setText,typeText,title}){
    return(
        <input type={typeText} onChange={(e)=> setText(e.target.value)} placeholder={title} ></input>
    )
}
export {InputText}