import { ResponsiveContainer } from "recharts"

export const GraphResponsiveContainer = (props) => {
  return (
    <ResponsiveContainer width="75%" height="50%">
      {props.children}
    </ResponsiveContainer>
  )
}
