import "./style.css"

export const Anotation = ({description}) => {
    return (
        <div className="annotation-container">
            {`<--`} {description} {`-->`}
        </div>
    )
}