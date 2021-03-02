import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

//funcion para formatear valores
function moneyFormatter(num) {
  let p = num.toFixed(2).split('.');
  return (
    p[0]
      .split('')
      .reverse()
      .reduce(function (acc, num, i, orig) {
        return num === '-' ? acc : num + (i && !(i % 3) ? ',' : '') + acc;
      }, '') +
    '.' +
    p[1]+
    ' $'
  );
}

// function newDate() {
//   let today = new Date();
//     let dd = String(today.getDate()).padStart(2, '0');
//     let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
//     let yyyy = today.getFullYear();
//     today = mm + '/' + dd + '/' + yyyy;
//     return today;
// }

function setDate(date) {
  let dd = date.slice(9,10);
  let mm = date.slice(5,7); 
  let yyyy = date.slice(0,4);  
  let today = dd + '/' + mm + '/' + yyyy;
  return today;
}

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? '-' : '+';

  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
      {transaction.text}  <div>{setDate(transaction.createdAt)}</div>  <span>{sign}{moneyFormatter(transaction.amount)}</span><button onClick={() => deleteTransaction(transaction._id)} className="delete-btn">x</button>
    </li>
  )
}
