import { SliderPicker } from "react-color"
import { useState } from "react"

export const ColorForm = () => {
  const [data, setData] = useState({ hex: "#fff" })

  return (
    <div className="FormContainer">
      <div className="Form">
        <SliderPicker color={data} onChange={(color) => setData(color)} />
      </div>
      <div
        style={{ width: "50px", height: "50px", backgroundColor: data.hex }}
      />
      {JSON.stringify(data.hex, null, 2)}
    </div>
  )
}
