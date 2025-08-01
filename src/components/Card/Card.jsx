import './styles.css';

const Card = ({ balance, setBalance }) => {
   return (
      <div className="card">
         <div className="card-block">
            <p>CRYPTO-FINANCE</p>
            <button onClick={setBalance}>Add money</button>
         </div>

         <div className="card-block">
            <p>ANDREY</p>
            <p>{balance} $</p>
         </div>
      </div>
   );
};

export default Card;
