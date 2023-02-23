import visaPic from '../assets/images/visa.png';
import MasterLogo from '../assets/images/master-card.jsx';

export default function CreditCard(props) {
  const logo =
    props.type === 'Visa' ? (
      <img src={visaPic} alt="Visa Logo" />
    ) : (
      <MasterLogo />
    );

  const censoredNumber = '**** **** **** ' + props.number.slice(-4);
  const expiration = `${props.expirationMonth}/${props.expirationYear}`;

  return (
    <div
      className="credit-card"
      style={{ color: props.color, backgroundColor: props.bgColor }}
    >
      {logo}
      <p className='card-number'>{censoredNumber}</p>
      <p>
        {expiration} <span>{props.bank}</span>
      </p>
      <p>{props.owner}</p>
    </div>
  );
}
