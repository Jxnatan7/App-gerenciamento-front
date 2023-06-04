import "./style.css"

export const Annotation = ({description}) => {
    return (
        <div className="annotation-container">
            {`<--`} {description} {`-->`}
        </div>
    )
}