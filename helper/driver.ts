import { driverSS } from './calculate.ts'

//#region Exported functions
// Find best driver for shipment
export const findBestDriver = (drivers: Map<string, number>, dest: string) => {
  let max = 0
  let bestDriver = ''

  // Iterate over drivers and find the best one
  for (const [driver, score] of drivers) {
    const newScore = score + driverSS(driver, dest)

    if (newScore > max) {
      max = newScore
      bestDriver = driver
    }
  }

  return bestDriver
}
//#endregion
