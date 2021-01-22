export default function Button ({texto, product, onclickfunction}) {
    return <button product={product} onClick={onclickfunction}>{texto}</button>
}