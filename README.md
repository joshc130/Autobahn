# Autobahn

Autobahn is a command-line application for managing and simulating various vehicles including Cars, Trucks, and Motorbikes. With Autobahn, you can create vehicles, perform actions like accelerating, towing (for trucks), performing wheelies (for motorbikes), and much more—all through an interactive CLI.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Vehicle Creation:** Create cars, trucks, and motorbikes with customizable attributes.
- **Interactive CLI:** Use a command-line interface to select or create vehicles and perform various actions.
- **Vehicle Actions:** Start, accelerate, decelerate, stop, turn, reverse, tow (trucks), and perform wheelies (motorbikes).
- **Dynamic VIN Generation:** Each vehicle is assigned a unique VIN generated at runtime.

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or later recommended)
- npm (comes with Node.js)

### Steps

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/yourusername/autobahn.git
   cd autobahn
   
2.Install Dependencies:

bash
Copy
npm install
Build or Prepare the Project:

If your project uses a build step (e.g., TypeScript compilation), run the appropriate command:

bash
Copy
npm run build
Otherwise, ensure that your entry file (typically index.js) is in the project root.

## Usage
To run the Autobahn CLI:

bash
Copy
node index.js
You'll be presented with a menu where you can choose to create a new vehicle or select an existing one. Follow the prompts to enter vehicle details and perform actions. For example, you can:

Create a new car, truck, or motorbike.
Select an existing vehicle and choose actions such as:
Print details
Start vehicle
Accelerate/Decelerate
Turn or Reverse
Tow another vehicle (if it's a truck)
Perform a wheelie (if it's a motorbike)
Select or create another vehicle
Exit

## Contributing
Contributions are welcome! If you’d like to contribute:

Fork the repository.
Create a feature branch: git checkout -b feature/your-feature.
Commit your changes: git commit -m "Add some feature".
Push to the branch: git push origin feature/your-feature.
Open a pull request.
Please read the CONTRIBUTING.md file for detailed guidelines.

## License
This project is licensed under the MIT License. See the LICENSE file for details.





