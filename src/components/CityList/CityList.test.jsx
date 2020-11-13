import React from 'react'
import CityList from './CityList'
import {render} from '@testing-library/react'

const cities = [
    {city: "Milano", coutry:"Italy"},
    {city: "Bologna", country: "Italy"},
    {city: "Stuttgard", coutry: "Germany"},
    {city: "Madrid", country: "Spain"}
  ]
  
test("CityList render", async() => {
    
    const { findAllByRole } = render(<CityList cities={cities} />)
    const items = await findAllByRole("listitem")
    expect(items).toHaveLength(7)  
})