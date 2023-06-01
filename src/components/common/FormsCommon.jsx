export const cepJustNumbers = (data = "") => {
  const cepNumbers = data.replace(/\D/g, "")
  return cepNumbers
}
