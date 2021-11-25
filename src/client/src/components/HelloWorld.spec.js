/**
 * @jest-environment jsdom
 */

import { mount } from '@vue/test-utils'
import HelloWorld from './HelloWorld.vue'

describe('HelloWorld', () => {
  const msg = 'Hello Vue 3'
  const wrapper = mount(HelloWorld, { props: { msg } })
  const vm = wrapper.vm

  it('確認 props 有被正確帶入', () => {
    expect(wrapper.find('h1').text()).toEqual(msg)
  })

  it('檢查 count 有沒有被正確增加', () => {
    expect(wrapper.vm.count).toBe(0)
    const button = wrapper.find('button')
    button.trigger('click')
    expect(wrapper.vm.count).toBe(1)
  })
})