import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ViewBalance from '@/components/ViewBalance.vue'

describe('ViewBalance', () => {
  const ViewBalanceWrapper = mount(ViewBalance, { props: { total: 720 } });

  it('should render correctly', () => {
    expect(ViewBalanceWrapper.exists()).toBe(true);
  })

  it('should have title text', () => {
    expect(ViewBalanceWrapper.find('[data-test="balance-title"]').text()).toBe('Your Balance');
  })

  it('should have the balance value', () => {
    expect(ViewBalanceWrapper.find('[data-test="balance-value"]').text()).toContain('720');
  })
})
