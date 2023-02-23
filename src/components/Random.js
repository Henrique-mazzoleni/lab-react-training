export default function Random (props) {
    const random = Math.round(Math.random()*(+props.max - props.min)) + Number(props.min)
    return <div className="card">
        <p>Random value between {props.min} and {props.max} =&gt; {random}</p>
    </div>
}