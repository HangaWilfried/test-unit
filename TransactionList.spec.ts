import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import TransactionList from '@/components/TransactionList.vue'

describe('TransactionList', () => {
  const transactionList = mount(TransactionList, {
    props: { transactions: [{ id: '1', text: 'Milk', amount: 400 }] }
  })

  it('should render correctly', () => {
    expect(transactionList.exists()).toBe(true);
  })

  const button = transactionList.find('button');

  it('should have the title text', () => {
    expect(transactionList.find('[data-test="transaction-list-title"]').text()).toBe('History');
  })

  const emptyTransactionList = mount(TransactionList, { props: { transactions: [] } })
  it('should not have a button with empty transaction list', () => {
    expect(emptyTransactionList.find('button').exists()).toBe(false)
  })

  it('should have a button with transaction list', () => {
    expect(button.exists()).toBe(true);
    expect(button.text()).toBe('X');
  })

  it('should delete a transaction on the list', async () => {
    await button.trigger('click');
    expect(transactionList.emitted()).toHaveProperty('transactionDeleted', [['1']]);
  })
})
