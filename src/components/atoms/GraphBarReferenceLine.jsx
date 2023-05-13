import {
  Bar,
  BarChart,
  CartesianGrid,
  ReferenceLine,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"
import { graphDataNegativo, renderCustomAxisTick } from "../common/GraphCommon"
import { GraphResponsiveContainer } from "./GraphResponsiveContainer"

export const GraphBarReferenceLine = () => (
  <GraphResponsiveContainer>
    <BarChart
      width={500}
      height={300}
      data={graphDataNegativo}
      margin={{ top: 30, right: 20, bottom: 5, left: 0 }}
    >
      <Bar dataKey="quantidade" barSize={30} fill="#8884d8" />
      <Tooltip />
      <CartesianGrid strokeDasharray="3 3" />
      <ReferenceLine y={0} stroke="#000" />
      <XAxis dataKey="name" tick={renderCustomAxisTick} />
      <YAxis />
    </BarChart>
  </GraphResponsiveContainer>
)
