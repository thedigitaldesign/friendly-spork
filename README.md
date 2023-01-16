# Deno Shipment Routing

This project assigns shipment destinations to drivers in a way that maximizes the total suitability score (SS) over the set of drivers. Each driver can only have one shipment and each shipment can only be offered to one driver.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites
- [Deno](https://deno.land/#installation) v1.29.0 or later
- Make sure you have destinations and drivers files ready

### Running The App
1. Clone the repository
  ```sh
    git clone https://github.com/yourusername/shipment-destination-driver-matching.git
  ```
2. Run the app in your terminal
  ```sh
    deno run --allow-read app.ts
  ```
3. The total Suitability Score and Assignments will be outputted to the console