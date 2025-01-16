# Unit Converter App

This Unit Converter App is a small web-based application that allows users to convert values between different units of measurement for weight, temperature, length, and speed. The app is built using JavaScript and utilizes event listeners to update conversion results dynamically as the user inputs values.

## Features

- **Weight Conversion**: Convert between Pounds (lb), Kilograms (kg), Ounces (oz), Grams (g), Milligrams (mg), Micrograms (µg), Stones (st), US Tons (US tons), Metric Tons (t), and Carats (ct).
- **Temperature Conversion**: Convert between Fahrenheit (°F), Celsius (°C), and Kelvin (K).
- **Length Conversion**: Convert between Meters (m), Feet (ft), Inches (in), Centimeters (cm), Miles (mi), Kilometers (km), Yards (yd), Millimeters (mm), Micrometers (µm), Nanometers (nm), Nautical Miles (nmi), Astronomical Units (AU), Light Years (ly), Parsecs (pc), Furlongs (fur), Ångstroms (Å), and Leagues (lea).
- **Speed Conversion**: Convert between Meters per second (m/s), Kilometers per hour (km/h), Miles per hour (mph), Feet per second (ft/s), Knots (kn), Mach (Ma), Speed of Light (c), Inches per second (in/s), Centimeters per second (cm/s), and Millimeters per second (mm/s).
- **Area Conversion:** Convert between Square Meters (m²), Square Kilometers (km²), Square Feet (ft²), Square Yards (yd²), Acres (ac), Hectares (ha), Square Miles (mi²), Square Inches (in²), Square Centimeters (cm²), Square Millimeters (mm²), Barn (b), Roods (rd), Morgen, Township, Are (a), and Decare (da).
- **Digital/Computing Converter:** Convert between Bits (b), Bytes (B), Kilobytes (KB), Megabytes (MB), Gigabytes (GB), Terabytes (TB), Petabytes (PB), Exabytes (EB), Zettabytes (ZB), Yottabytes (YB), Kilobits (Kb), Megabits (Mb), Gigabits (Gb), Terabits (Tb), Petabits (Pb), Exabits (Eb), and Yottabits (Yb).
- **Distance Converter:** Convert between Meters (m), Kilometers (km), Miles (mi), Yards (yd), Feet (ft), Millimeters (mm), Centimeters (cm), Inches (in), Nanometers (nm), Micrometers (µm), Light Years (ly), Parsecs (pc), Astronomical Units (AU), Rods (rd), Furlongs (fur), and Chains (ch).
- **Time Converter:** Convert between different time units including Seconds (sec), Milliseconds (ms), Microseconds (µs), Nanoseconds (ns), Minutes (min), Hours (hr), Days (day), Weeks (wk), Months (mo), and Years (yr).
- **Volume Converter:** Convert between Liters (lt), Milliliters (ml), Gallons (US and UK), Cups (US), Pints (US and UK), Quarts (US and UK), Fluid Ounces (US and UK), Cubic Meters, Cubic Centimeters, Cubic Inches, Cubic Feet, and Barrels (US oil). Each input field is designed to handle specific volume units, and users can input values to convert between them.

## Getting Started

To run the Unit Converter App locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/nvmwhoiam/unit-converter-app.git
   cd unit-converter-app
   ```

2. **Open the index.html file in your web browser**:
   ```bash
   open index.html
   ```
   or simply drag and drop the `index.html` file into your web browser.

## How to Use

1. **Input Fields**: Enter a value in any of the input fields for weight, temperature, length, or speed. The app will automatically calculate and display the converted values in the corresponding fields.

2. **Data Attributes**: Each input field is associated with a specific unit of measurement through the use of `data-*` attributes. These attributes are used by the JavaScript functions to determine the units for conversion.

## Code Overview

### Event Listeners

The app uses `querySelectorAll` to select all input fields for each category (weight, temperature, length, speed, distance, time, volume, area, digital) and adds event listeners to handle input events.

```javascript
const weightInputs = document.querySelectorAll(".weight-input");
const temperatureInputs = document.querySelectorAll(".temperature-input");
const lengthInputs = document.querySelectorAll(".length-input");
const speedInputs = document.querySelectorAll(".speed-input");
const distanceInputs = document.querySelectorAll(".distance-input");
const timeInputs = document.querySelectorAll(".time-input");
const volumeInputs = document.querySelectorAll(".volume-input");
const areaInputs = document.querySelectorAll(".area-input");
const digitalInputs = document.querySelectorAll(".digital-input");
```

## Contact

If you have any questions or need assistance, please do not hesitate to reach out. I apologize if any part of this setup is not clear; this is my first major project, and I am putting in continuous effort to improve it. Feel free to contact me at [info@lynqis.io](mailto:info@lynqis.io) or open an issue on the [GitHub Repository](https://github.com/nvmwhoiam/unit-converter-app)
.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Author

- nvmwhoiam
- GitHub: [GitHub Profile](https://github.com/nvmwhoiam/)
