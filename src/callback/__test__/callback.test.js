import howsthiscallback from '../callback'

// https://jestjs.io/docs/mock-functions
describe("test jest spy", () => {

    it('experiments with jest.fn', () => {
        const spyfunction = jest.fn()
        howsthiscallback(spyfunction)

        // The function was called exactly once
        expect(spyfunction.mock.calls.length).toBe(1);

        // The first arg of the first call to the function was 'first arg'
        expect(spyfunction.mock.calls[0][0]).toBe(10);
    })
})
