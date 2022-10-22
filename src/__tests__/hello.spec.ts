import { salution } from '../hello'

describe("First test", () => {
  it('Should be return "Hello World"', () => {
    const message = salution()

    expect(message).toEqual("Hello World")
  })
})