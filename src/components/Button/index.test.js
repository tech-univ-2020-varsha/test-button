import React from 'react';
import {Button} from './index';
import { render, fireEvent } from '@testing-library/react';

describe('the button component', () => {
    it('should render correctly', () => {
        const { asFragment } = render(<Button testID="test-btn">Test text</Button>);

        expect(asFragment()).toMatchSnapshot();
    });

    // it('should render correctly', () => {
    //     const { getByTestId } = render(<Button>Test text</Button>);

    //     expect(asFragment()).toMatchSnapshot();
    // });
})