import React from 'react'
import WeatherInfo from './WeatherInfo'
import { render } from '@testing-library/react'

test('Weatherinfo render', async () => {
    const { findByRole } = render(<WeatherInfo temperature={10} />)
    const temp = await findByRole("heading")
    expect(temp).toHaveTextContent('10')
})