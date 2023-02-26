export default function NumsTable ({ limit }) {
    const numsArray = Array.from({ length: limit }, (_, i) => i+1)
    
    return (
        <div className="nums-table">
            {numsArray.map(num => <div key={num} style={num%2 ===0 ? {backgroundColor: 'red'} : {}}>{num}</div>)}
        </div>
    )
}