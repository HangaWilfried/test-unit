import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import IncomeExpense from '@/components/IncomeExpense.vue'

describe('IncomeExpense', () => {
  const IncomeExpenseWrapper = mount(IncomeExpense, { props: { income: 100, expense: 200 } });

  it('should render correctly', () => {
    expect(IncomeExpenseWrapper.exists()).toBe(true);
  })

  it('shoul have the income text', () => {
    expect(IncomeExpenseWrapper.find('[data-test="income-text"]').text()).toBe('INCOME');
  })

  it('should have the expense text', () => {
    expect(IncomeExpenseWrapper.find('[data-test="expense-text"]').text()).toBe('EXPENSE');
  })

  it('should have the income value', () => {
    const income = IncomeExpenseWrapper.get('#money-plus');
    expect(income.text()).toContain('100');
  })

  it('should have the expense value', () => {
    const expense = IncomeExpenseWrapper.get('#money-minus');
    expect(expense.text()).toContain('200');
  })
})
