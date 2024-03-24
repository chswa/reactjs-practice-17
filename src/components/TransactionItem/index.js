// Write your code here

import './index.css'

const TransactionItem = props => {
  const {transactionDetails,deleteTransaction} = props
  const {titleInput, amountInput, typeInput} = transactionDetails

  const onDeleteTransaction=()=>{
    deleteTransaction(id)
  }

  return (
    <li className="each-history">
      <p className="title-history">{titleInput}</p>
      <p className="amount-history">{amountInput}</p>
      <p className="type-history">{typeInput}</p>
      <div className="delete-container">
        <button className="delet-button" type="button" onClick={onDeleteTransaction} dat-testid="delete">
          <img className="delete-img" src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png" alt="delete"/>
        </button>
      </div>  
    </li>
  )
}

export default TransactionItem
