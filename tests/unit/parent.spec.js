import { shallowMount } from '@vue/test-utils'
import NumericalPasswordInput from '../../src/components/NumericalPasswordInput.vue'
import RandomizedNumericInput from '../../src/components/RandomizedNumericInput.vue'
import App from '../../src/App.vue'

window.alert = jest.fn();

describe('NumericalPasswordInput.vue', () => {
  it('Should not allow wrong password', async () => {
    const wrapper = shallowMount(NumericalPasswordInput)

    // should not allow wrong passwords
    await wrapper.setProps({ userPassword: '132423446' })

    for (let i = 0; i<=9; i++) {
        let j = Math.floor(Math.random() * 1);
        wrapper.vm.currentPasswordChange(j)
    }


    // assert the error is rendered
    expect(wrapper.vm.wrongPassword).toBe(true)
    window.alert.mockClear();
  })

  it('Should allow right password', async () => {
    const wrapper = shallowMount(NumericalPasswordInput)

    // should not allow wrong passwords
    await wrapper.setProps({ userPassword: '012345678' })
    wrapper.setData({ currentPassword: '', wrongPassword: false })

    for (let i = 0; i < 9; i++) {
        wrapper.vm.currentPasswordChange(i)
    }


    // assert the error is rendered
    expect(wrapper.vm.wrongPassword).toBe(false)
    window.alert.mockClear();
  })

  it('Should allow right password from main component', async () => {
    const wrapper = shallowMount(NumericalPasswordInput)
    const appWrapper = shallowMount(App)


    // should not allow wrong passwords
    await appWrapper.setData({ userPassword: '012345678' })
    await wrapper.setData({ userPassword: appWrapper.vm.userPassword})


    await wrapper.setData({ currentPassword: '', wrongPassword: false })

    for (let i = 0; i < 9; i++) {
        wrapper.vm.currentPasswordChange(i)
    }
    // assert the error is rendered
    expect(wrapper.vm.wrongPassword).toBe(false)
    window.alert.mockClear();
  })
})
