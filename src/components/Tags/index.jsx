import "./style.css"

export const StyleTag = ({item, color}) => {
 
    return (
        <div className="tag-style"> {`<`} <p style={{color: color}}>{item}</p> {`/>`} </div>
    )
}