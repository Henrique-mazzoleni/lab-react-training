export default function BoxColor(props) {
    const r = parseInt(props.r)
    const g = parseInt(props.g)
    const b = parseInt(props.b)
    const hexIt = color => color.toString(16).padStart(2, '0').toUpperCase()
    const hex = `#${hexIt(r)}${hexIt(g)}${hexIt(b)}`

    return <div className="card" style={{backgroundColor: hex}}>
        <p>rgb({r},{g},{b})</p>
        <p>{hex}</p>
    </div>
}