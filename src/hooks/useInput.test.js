import React ,{Component}from 'react'
import {renderHook,act} from '@testing-library/react-hooks';
import axios from 'axios'
import {useInput} from './useInput'
import {EXTERNAL_API} from '../constants'

describe('the useInput hook',()=>{
    let mockAxios="";
  beforeAll(()=>{

  mockAxios =jest.spyOn(axios,'get');
    mockAxios.mockResolvedValue({data:{
        initialText:"varsha"
    }})
  }) 

it('should make an api call to fetch data',async()=>{
    
const {result, waitForNextUpdate} = renderHook(() => useInput(EXTERNAL_API,""));
await waitForNextUpdate();
expect(mockAxios).toHaveBeenCalledWith(EXTERNAL_API);
expect(result.current[0]).toBe('varsha')
});

it('should update the text when setText is been called',async()=>{
    const {result, waitForNextUpdate} = renderHook(() => useInput(EXTERNAL_API,""));
await waitForNextUpdate();
expect(mockAxios).toHaveBeenCalledWith(EXTERNAL_API);
expect(result.current[0]).toBe('varsha');
act(() => {
    result.current[1]('test-value-2');
});
expect(result.current[0]).toBe('test-value-2');
})
})