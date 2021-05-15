import { mount } from '@vue/test-utils'
import Counter from '../src/views/Counter.vue'

test('Counter.vue', async () => {
  const wrapper = mount(Counter)
  expect(wrapper.html()).toContain('Counter Page')
  expect(wrapper.html()).toContain('count is: 0')
  await wrapper.find('button').trigger('click')
})
