import React from 'react'
import Card from '../../shared/Card'
import BudgetOverviewItem from './BudgetOverviewItem'

export default function BudgetOverview({ balance }) {
  return (
    <Card>
      <BudgetOverviewItem balance={balance} />
    </Card>
  )
}
