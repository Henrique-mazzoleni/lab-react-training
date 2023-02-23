export default function Rating (props) {
    const rating = Math.round(Number(props.children))
    let stars = '';
    for (let i=1; i<=5; i++) {
        if (rating >= i) stars += '★'
        else stars += '☆'
    }
    return <div className="card">
        <p>{stars}</p>
    </div>
}