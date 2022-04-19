
import { render, screen, fireEvent } from '@testing-library/react'
import FollowerList from '../followers'
import axios from 'axios';
import { act } from 'react-test-renderer';

describe("abcd", () => {

    // reference: https://jestjs.io/docs/mock-functions
    // https://stackoverflow.com/questions/56722139/when-testing-code-that-causes-react-state-updates-should-be-wrapped-into-act
    it("shoud test axios", async () => {
        jest.mock('axios')
        const mockResponse = {
            data: {
                results: [
                    {
                        name: {
                            first: "Laith",
                            last: "Harb"
                        },
                        picture: {
                            large: "https://randomuser.me/api/portraits/men/59.jpg"
                        },
                        login: {
                            username: "ThePhonyGOAT"
                        }
                    }
                ]
            }
        }
        
        axios.get.mockResolvedValue(mockResponse)
        await act(() => render(<FollowerList />))
        async () => screen.findByRole("heading");
        screen.debug()
    })

    // reference: https://www.youtube.com/watch?v=TBZy-Rc-xX0&list=PL4cUxeGkcC9gm4_-5UsNmLqMosM-dzuvQ&index=13
    // beforeEach(() => {
    //     // console.log("RUNS BEFORE EACH TEST")
    //     jest.mock("../../__mocks__/axios")
    // })

    // it ("should fetch and render five users", async () => {
    //     render(<FollowerList />)
    //     await screen.findByTestId("heading");
    //     screen.debug()
    // })
})