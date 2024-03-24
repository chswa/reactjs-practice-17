import {Component} from 'react'
import {v4} from 'uuid'
import TransactionItem from '../TransactionItem'
import MoneyDetails from '../MoneyDetails'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  state = {
    transactionsList: [],
    titleInput: '',
    amountInput: '',
    optionId: transactionTypeOptions[0].optionId,
  }

  deleteTransaction=id=>{
    const {transactionsList}=this.state 
    const updatedTransactionList=transactionsList.filter(eachTransaction=>id!==eachTransaction.id)

    this.setState({transactionsList:updatedTransactionList})
  }
  onChangeTitle = event => {
    this.setState({titleInput: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({amountInput: event.target.value})
  }

  onChangeOption = event => {
    this.setState({optionId: event.target.value})
  }
  addTransaction = event => {
    event.preventDefault()
    const {titleInput, amountInput, optionId} = this.state
    const typeOption = transactionTypeOptions.find(
      eachTransaction => eachTransaction.optionId === optionId,
    )

    const {displayText} = typeOption
    const newTransaction = {
      id: v4(),
      titleInput: titleInput,
      amountInput: parseInt(amountInput),
      typeInput: displayText,
    }

    this.setState = prevState => ({
      transactionsList: [...prevState.transactionsList, newTransaction],
      titleInput: '',
      amountInput: '',
      optionId: transactionTypeOptions[0].optionId,
    })
  }

  getBalance = () => {
    const {transactionsList} = this.state
    let balanceAmount = 0
    let incomeAmount = 0
    let expensesAmount = 0

    transactionsList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachTransaction.amount
      } else {
        expensesAmount += eachTransaction.amount
      }
    })
    balanceAmount = incomeAmount - expensesAmount
    return balanceAmount
  }
  getIncome = () => {
    const {transactionsList} = this.state
    let incomeAmount = 0
    transactionsList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachTransaction.amount
      }
    })
    return incomeAmount
  }
  getExpenses = () => {
    const {transactionsList} = this.state
    let expensesAmount = 0

    transactionsList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[1].displayText) {
        expensesAmount += eachTransaction.amount
      }
    })
    return expensesAmount
  }
  render() {
    const {titleInput, amountInput, optionId, transactionsList} = this.state
    const balanceAmount = this.getBalance()
    const incomeAmount = this.getIncome()
    const expensesAmount = this.getExpenses()

    return (
      <div className="bg-container">
        <div className="money-manager-container">
          <h1 className="money-mangaer-heading">Hi, Richard</h1>
          <p className="money-manager">
            Welcome back to your{' '}
            <span className="span-money-manager">Money Manager</span>
          </p>
        </div>
        <div className="money-details-container">
          <MoneyDetails
            balanceAmount={balanceAmount}
            incomeAmount={incomeAmount}
            expensesAmount={expensesAmount}
          />
        </div>
        <div className="transaction-container">
          <div className="transaction-form-container">
            <form className="form" onSubmit={this.addTransaction}>
              <h1 className="form-heading">Add Transaction</h1>
              <div className="title-input-container">
                <label className="title-label" htmlFor="titleInput">
                  TITLE
                </label>
                <input
                  className="title-input"
                  type="text"
                  placeholder="TITLE"
                  id="titleInput"
                  onChange={this.onChangeTitle}
                  value={titleInput}
                />
              </div>
              <div className="amount-input-container">
                <label className="amount-label" htmlFor="amountInput">
                  AMOUNT
                </label>
                <input
                  className="amount-input"
                  type="text"
                  placeholder="AMOUNT"
                  id="amountInput"
                  onChange={this.onChangeAmount}
                  value={amountInput}
                />
              </div>

              <div className="type-input-container">
                <label className="type-label">TYPE</label>
                <select
                  id="select"
                  className="type-input"
                  onChange={this.onChangeOption}
                  value={optionId}
                >
                  {transactionTypeOptions.map(eachOption => (
                    <option
                      key={eachOption.optionId}
                      value={eachOption.optionId}
                    >
                      {eachOption.displayText}
                    </option>
                  ))}
                </select>
              </div>
              <button type="submit" className="add-btn">
                Add
              </button>
            </form>
          </div>
          <div className="transaction-history-container">
            <h1 className="transaction-heading">History</h1>
            <ul className="history-container">
              <li className="each-history">
                <p className="title-history">Title</p>
                <p className="amount-history">Amount</p>
                <p className="type-history">Type</p>
              </li>
              {transactionsList.map(eachTransaction => (
                <TransactionItem
                  key={eachTransaction.id}
                  transactionDetails={eachTransaction} deleteTransaction={this.deleteTransaction}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
