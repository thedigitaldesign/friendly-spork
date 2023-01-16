import { vowels } from '../model/alphabet.ts'

//#region Exported functions
// Calculate driver suitability score (SS)
export const driverSS = (name: string, dest: string) => {
  // Calculate base SS for driver and multiply by 1.5 if name and destination have common factors
  const base = baseDriverSS(name, dest.length % 2 === 0)

  return hasCommonFactor(name, dest) ? base * 1.5 : base
}
//#endregion

//#region Functions
// Calculate the base SS for the driver
const baseDriverSS = (name: string, isEven: boolean) => {
  let count = 0

  // Iterate over driver's name and count vowels
  for (const char of name.toLowerCase()) {
    if (vowels.has(char)) {
      count++
    }
  }

  return isEven ? count * 1.5 : count
}

// Check if driver's name and shipment destination have common factors
const hasCommonFactor = (name: string, dest: string) => {
  const n = name.length
  const d = dest.length

  // Iterate over the smaller of the two numbers and check if it is a factor of both
  for (let i = 2; i <= Math.min(n, d); i++) {
    if (n % i === 0 && d % i === 0) {
      return true
    }
  }

  return false
}
//#endregion
