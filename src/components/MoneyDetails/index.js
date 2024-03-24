// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {balanceAmount, incomeAmount, expensesAmount} = props
  return (
    <>
      <div className="list-item-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png "
          alt="balance"
          className="details-img"
        />
        <div className="money-content">
          <p className="text-content">Your Balance</p>
          <p className="rs-content" data-testId="balanceAmount">
            RS {balanceAmount}
          </p>
        </div>
      </div>
      <div className="income-item-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png "
          alt="income"
          className="details-img"
        />
        <div className="income-content">
          <p className="income-text">Your Income</p>
          <p className="rs-income" data-testId="incomeAmount">
            RS {incomeAmount}
          </p>
        </div>
      </div>
      <div className="expenses-item-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png "
          alt="expenses"
          className="details-img"
        />
        <div className="expenses-content">
          <p className="expenses-text">Your Expenses</p>
          <p className="rs-expenses" data-testId="expensesAmount">
            RS {expensesAmount}
          </p>
        </div>
      </div>
    </>
  )
}

export default MoneyDetails
