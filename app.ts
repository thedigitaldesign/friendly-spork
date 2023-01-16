// Helpers
import { driverSS } from './helper/calculate.ts'
import { findBestDriver } from './helper/driver.ts'

const main = async () => {
  // Read data from files
  const destinations = (await Deno.readTextFile('./Data/destinations.txt')).split('\n')
  const drivers = (await Deno.readTextFile('./Data/drivers.txt')).split('\n')

  const driverScores = new Map<string, number>()
  const assignments = new Map<string, string>()

  let totalSS = 0

  // Initialize driver scores
  for (const driver of drivers) {
    driverScores.set(driver, 0)
  }

  // Assign drivers to destinations
  for (const dest of destinations) {
    const driver = findBestDriver(driverScores, dest)

    driverScores.delete(driver)
    assignments.set(dest, driver)

    totalSS += driverSS(driver, dest)
  }

  // Print results
  console.log('Total Suitability Score: ', totalSS)
  console.log('Assignments: ', assignments)
}

main()
