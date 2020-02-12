import React from 'react';
import {Button} from './index';
import { render, fireEvent } from '@testing-library/react';

describe('the button component', () => {
    it('should render correctly', () => {
        const { asFragment } = render(<Button testID="test-btn">Test text</Button>);

        expect(asFragment()).toMatchSnapshot();
    });

    it('should call the onClick prop when the button is clicked', () => {
        const onClickMock = jest.fn();
        const { getByTestId } = render(<Button testID="test-btn" onClick={onClickMock}>Test text</Button>);

        fireEvent.click(getByTestId("test-btn"));
        expect(onClickMock).toHaveBeenCalledWith();
    });
})