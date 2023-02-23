export default function Greetings (props) {
    let greeting;
    switch(props.lang){
        case 'en':
            greeting = 'Hello';
            break;
        case 'fr':
            greeting = 'Bonjour';
            break;
        case 'de':
            greeting = 'Guten Tag';
            break;
        case 'pt':
            greeting = 'Oi';
            break;
        default:
            greeting = 'Hello';
    }

    return <div className="card">
        <p>{greeting} {props.children}</p>
    </div>
}