import { act, render, screen, waitFor } from "@testing-library/react";
import axios from 'axios';
import App from './App';

jest.mock('axios');

describe('<App />', () => {
  it('렌더링', async () => {
    const virtualResponse = {
      data: [
        { id: 1 },
        { id: 2 },  
      ]
    };
    axios.get.mockResolvedValue(virtualResponse);
    render(<App />);
    await waitFor(() => screen.findAllByTestId('list')); // 컴포넌트 내부에서 비동기 처리를 한다면 이를 기다려줘야 한다.
    expect(axios.get).toBeCalled();
  });
});