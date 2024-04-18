import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import AddTransaction from '@/components/AddTransaction.vue'

describe('AddTransaction elements', () => {
  const AddTransactionWrapper = mount(AddTransaction)

  it('should render correctly', () => {
    expect(AddTransactionWrapper.exists()).toBe(true);
  })

  it('should have a button to submit a new transaction data', () => {
    const button = AddTransactionWrapper.find('button')
    expect(button.exists()).toBe(true)
    expect(button.text()).toBe('Add transaction')
  })

  it('should have a transaction name field', () => {
    expect(AddTransactionWrapper.find('input').exists()).toBe(true)
    expect(AddTransactionWrapper.find('[data-test="transaction-name"]').text()).toBe('Text')
  })

  it('should have a transaction amount field', () => {
    expect(AddTransactionWrapper.findAll('input')[1].exists()).toBe(true)
    expect(AddTransactionWrapper.find('[data-test="transaction-amount"]').text()).toBe(
      'Amount (negative - expense, positive - income)'
    )
  })

  it('should add a new transaction', async () => {
    const textInput = AddTransactionWrapper.get('#text')
    const amountInput = AddTransactionWrapper.get('#amount')

    await textInput.setValue('Milk')
    await amountInput.setValue('400')

    const button = AddTransactionWrapper.find('button')

    await button.trigger('submit.prevent')
    expect(AddTransactionWrapper.emitted()).toHaveProperty('transactionSubmitted', [
      [{ text: 'Milk', amount: 400 }]
    ])
  })
})
