import {
  AiFillBug,
  AiFillBell,
  AiFillCar,
  AiFillPrinter,
  AiFillSkin,
  AiFillSave,
  AiFillRocket,
  AiFillHome,
  AiFillDelete,
} from "react-icons/ai"

export const renderCustomAxisTick = ({ x, y, payload }) => {
  const iconParams = { x: x - 8, y: y + 4, size: "1.5em" }

  switch (payload.value) {
    case "Carro":
      return <AiFillCar {...iconParams} />
    case "Sino":
      return <AiFillBell {...iconParams} />
    case "Impresora":
      return <AiFillPrinter {...iconParams} />
    case "Camisa":
      return <AiFillSkin {...iconParams} />
    case "Disquete":
      return <AiFillSave {...iconParams} />
    case "Foguete":
      return <AiFillRocket {...iconParams} />
    case "Casa":
      return <AiFillHome {...iconParams} />
    case "Lixo":
      return <AiFillDelete {...iconParams} />
    default:
      return <AiFillBug {...iconParams} />
  }
}

export const graphData = [
  { name: "Sino", value: 20, color: "#0088FE" },
  { name: "Impresora", value: 10, color: "#00C49F" },
  { name: "Carro", value: 15, color: "#FFBB28" },
  { name: "Camisa", value: 30, color: "#FF8042" },
  { name: "Disquete", value: 40, color: "#0088FE" },
  { name: "Foguete", value: 30, color: "#00C49F" },
  { name: "Casa", value: 30, color: "#FFBB28" },
  { name: "Lixo", value: 30, color: "#FF8042" },
]

export const graphDataNegativo = [
  { name: "Sino", value: 20 },
  { name: "Impresora", value: -10 },
  { name: "Carro", value: 15 },
  { name: "Camisa", value: -30 },
  { name: "Disquete", value: 40 },
  { name: "Foguete", value: -30 },
  { name: "Casa", value: 30 },
  { name: "Lixo", value: 30 },
]
