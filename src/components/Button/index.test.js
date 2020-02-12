import React from 'react';
import {Button} from './index';
import { render, fireEvent } from '@testing-library/react';

describe('the button component', () => {
    it('should render correctly', () => {
        const { asFragment } = render(<Button testID="test-btn" type="rect">Test text</Button>);

        expect(asFragment()).toMatchSnapshot();
    });

    it('should call the onClick prop when the button is clicked', () => {
        const onClickMock = jest.fn();
        const { getByTestId } = render(<Button testID="test-btn" type="rect" onClick={onClickMock}>Test text</Button>);

        fireEvent.click(getByTestId("test-btn"));
        expect(onClickMock).toHaveBeenCalledWith();
    });

    it('should render a rectangle shaped button when type is passed as rect', () => {
        const { asFragment} = render(<Button testID="test-btn" type="rect">Test text</Button>);
        expect(asFragment()).toMatchSnapshot();

    });

    it('should render a circle shaped button when type is passed as round', () => {
        const { asFragment} = render(<Button testID="test-btn" type="round">Test text</Button>);
        expect(asFragment()).toMatchSnapshot();

    });

})