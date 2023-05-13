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
  { name: "Sino", quantidade: 20 },
  { name: "Impresora", quantidade: 10 },
  { name: "Carro", quantidade: 15 },
  { name: "Camisa", quantidade: 30 },
  { name: "Disquete", quantidade: 40 },
  { name: "Foguete", quantidade: 30 },
  { name: "Casa", quantidade: 30 },
  { name: "Lixo", quantidade: 30 },
]

export const graphDataNegativo = [
  { name: "Sino", quantidade: 20 },
  { name: "Impresora", quantidade: -10 },
  { name: "Carro", quantidade: 15 },
  { name: "Camisa", quantidade: -30 },
  { name: "Disquete", quantidade: 40 },
  { name: "Foguete", quantidade: -30 },
  { name: "Casa", quantidade: 30 },
  { name: "Lixo", quantidade: 30 },
]
