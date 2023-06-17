import "./style.css"

interface IAnotationProps {
    description: string
}

export const Anotation = ({description}: IAnotationProps) => {

    return (
        <div className="annotation-container">
            {`<--`} {description} {`-->`}
        </div>
    )
}