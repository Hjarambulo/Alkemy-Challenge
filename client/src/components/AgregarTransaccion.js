import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export default function AgregarTransaccion() {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const { addTransaction } =  useContext(GlobalContext);
    const onSubmit = e => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount
        }

        addTransaction(newTransaction);
    }

    return (
        <>
            <h3>Agregar nueva transaccion</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Descripición</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder=" agregar descripción..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount"
                        >Valor <br />
                        (negativo - gasto, positivo - ingreso)</label
                    >             
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)
                    } placeholder="Enter amount..." />
                </div>
                <button className="btn">Agregar</button>
            </form>
        </>
    )
}
