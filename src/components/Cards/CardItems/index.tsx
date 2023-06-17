import "./style.css"

export const CardItem = ({title, value, price}) => {

    const precoNumerico = parseFloat(price)

    const precoFormatado = precoNumerico.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      });

    return (
        <div className="item-container">
            <div className="item-body">
                <div className="item-title">{title}</div> = <div className="item-value">"{value}"</div>
            </div>
            <div className="item-body">
                <div className="item-title">valor</div> = <div className="item-price">{`{`}{precoFormatado}{`}`}</div>
            </div>
        </div>
    )
}