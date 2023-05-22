import "./Graph.css"
import { GraphLine } from "../atoms/graph/GraphLine"
import { GraphBar } from "../atoms/graph/GraphBar"
import { GraphBarReferenceLine } from "../atoms/graph/GraphBarReferenceLine"
import { GraphPie } from "../atoms/graph/GraphPie"

export function Graph() {
  return (
    <div className="container">
      <span>Gráfico de setores personalizado:</span>
      <GraphPie />
      <span>Gráfico de linha com legenda:</span>
      <GraphLine />
      <span>Gráfico de barra:</span>
      <GraphBar />
      <span>Gráfico de barra com valor nagativo:</span>
      <GraphBarReferenceLine />
    </div>
  )
}
