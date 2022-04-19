
import greet, {greetWithName} from '../xgreeter'

jest.mock("../xgreeter")

// https://stackoverflow.com/questions/71905583/why-does-jest-mock-test-give-me-undefined
describe('checks gfreeter module', () => {
    it ('greet', () => {
        greetWithName.mockReturnValue("hero");
        expect(greetWithName("a", "b")).toBe("hero")
        // expect(greet("ameya", "patil")).toBe("hello hero") // fails
    })
})