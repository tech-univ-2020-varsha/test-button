import React from 'react';
import {Button} from './index';
import { render } from '@testing-library/react';

describe('the button component', () => {
    it('should render correctly', () => {
        const { asFragment } = render(<Button />);

        expect(asFragment()).toMatchSnapshot();
    });
})