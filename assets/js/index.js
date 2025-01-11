const weightInputs = document.querySelectorAll(".weight-input");
const temperatureInputs = document.querySelectorAll(".temperature-input");
const lengthInputs = document.querySelectorAll(".length-input");
const speedInputs = document.querySelectorAll(".speed-input");
const distanceInputs = document.querySelectorAll(".distance-input");
const timeInputs = document.querySelectorAll(".time-input");
const volumeInputs = document.querySelectorAll(".volume-input");
const areaInputs = document.querySelectorAll(".area-input");
const digitalInputs = document.querySelectorAll(".digital-input");

weightInputs.forEach(input => {
    input.addEventListener("input", function () {
        const inputValue = parseFloat(this.value);
        if (isNaN(inputValue)) {
            weightInputs.forEach(output => output.value = "");
            return;
        }

        const fromUnit = this.dataset.weightunit;

        weightInputs.forEach(output => {
            if (output !== this) {
                const toUnit = output.dataset.weightunit;
                output.value = convertWeight(inputValue, fromUnit, toUnit);
            }
        });
    });
});

function convertWeight(value, fromUnit, toUnit) {
    const units = {
        lb: { kg: 0.453592, oz: 16, g: 453.592, mg: 453592, µg: 453592370, st: 0.0714286, uston: 0.0005, ton: 0.000453592, ct: 2267.96 },
        kg: { lb: 2.20462, oz: 35.274, g: 1000, mg: 1000000, µg: 1000000000, st: 0.157473, uston: 0.00110231, ton: 0.001, ct: 5000 },
        oz: { lb: 0.0625, kg: 0.0283495, g: 28.3495, mg: 28349.5, µg: 28349500, st: 0.00446429, uston: 0.00003125, ton: 0.0000283495, ct: 141.748 },
        g: { lb: 0.00220462, kg: 0.001, oz: 0.035274, mg: 1000, µg: 1000000, st: 0.000157473, uston: 0.00000110231, ton: 0.000001, ct: 5 },
        mg: { lb: 0.00000220462, kg: 0.000001, oz: 0.000035274, g: 0.001, µg: 1000, st: 0.000000157473, uston: 0.00000000110231, ton: 0.000000001, ct: 0.005 },
        µg: { lb: 0.00000000220462, kg: 0.000000001, oz: 0.000000035274, g: 0.000001, mg: 0.001, st: 0.000000000157473, uston: 0.00000000000110231, ton: 0.000000000001, ct: 0.000005 },
        st: { lb: 14, kg: 6.35029, oz: 224, g: 6350.29, mg: 6350290, µg: 6350290000, uston: 0.007, ton: 0.00635029, ct: 31751.5 },
        uston: { lb: 2000, kg: 907.184, oz: 32000, g: 907184, mg: 907184000, µg: 907184000000, st: 142.857, ton: 0.907184, ct: 4535920 },
        ton: { lb: 2204.62, kg: 1000, oz: 35274, g: 1000000, mg: 1000000000, µg: 1000000000000, st: 157.473, uston: 1.10231, ct: 5000000 },
        ct: { lb: 0.000440925, kg: 0.0002, oz: 0.00705479, g: 0.2, mg: 200, µg: 200000, st: 0.0000314946, uston: 0.000000220462, ton: 0.0000002 }
    };

    if (!units[fromUnit] || !units[fromUnit][toUnit]) {
        return 0;
    }

    return (value * units[fromUnit][toUnit]);
}

temperatureInputs.forEach(input => {
    input.addEventListener("input", function () {
        const inputValue = parseFloat(this.value);
        if (isNaN(inputValue)) {
            // If input value is not a valid number, set output values to empty strings
            temperatureInputs.forEach(output => {
                output.value = "";
            });
            return; // Exit the function early
        }

        const fromUnit = this.dataset.temperatureunit;

        temperatureInputs.forEach(output => {
            if (output !== this) {
                const toUnit = output.dataset.temperatureunit;
                output.value = convertTemperature(inputValue, fromUnit, toUnit);
            }
        });
    });
});

function convertTemperature(value, fromUnit, toUnit) {
    // Define conversion formulas
    const conversions = {
        fahrenheit: {
            celsius: (value - 32) * (5 / 9),
            kelvin: (value - 32) * (5 / 9) + 273.15
        },
        celsius: {
            fahrenheit: (value * (9 / 5)) + 32,
            kelvin: value + 273.15
        },
        kelvin: {
            fahrenheit: (value - 273.15) * (9 / 5) + 32,
            celsius: value - 273.15
        }
    };

    // Check if the input units are valid
    if (!conversions.hasOwnProperty(fromUnit) || !conversions[fromUnit].hasOwnProperty(toUnit)) {
        return 0; // Return 0 for invalid conversion
    }

    // Perform the conversion
    return conversions[fromUnit][toUnit]
}

lengthInputs.forEach(input => {
    input.addEventListener("input", function () {
        const inputValue = parseFloat(this.value);
        if (isNaN(inputValue)) {
            // If input value is not a valid number, set output values to empty strings
            lengthInputs.forEach(output => {
                output.value = "";
            });
            return; // Exit the function early
        }

        const fromUnit = this.dataset.lengthunit;

        lengthInputs.forEach(output => {
            if (output !== this) {
                const toUnit = output.dataset.lengthunit;
                output.value = convertLength(inputValue, fromUnit, toUnit);
            }
        });
    });
});

function convertLength(value, fromUnit, toUnit) {
    // Define conversion factors
    const units = {
        m: {
            ft: 3.28084, in: 39.3701, cm: 100, mi: 0.000621371, km: 0.001, yd: 1.09361,
            mm: 1000, µm: 1e6, nm: 1e9, nmi: 0.000539957,
            fur: 0.00497096, au: 6.68459e-12, ly: 1.057e-16, pc: 3.24078e-17,
            Å: 1e10, lea: 0.000207124
        },
        ft: {
            m: 0.3048, in: 12, cm: 30.48, mi: 0.000189394, km: 0.0003048, yd: 0.333333,
            mm: 304.8, µm: 304800, nm: 3.048e8, nmi: 0.000164579,
            fur: 0.00151515, au: 2.03718e-13, ly: 3.22174e-17, pc: 9.8771e-18,
            Å: 3.048e9, lea: 0.0000621371
        },
        in: {
            m: 0.0254, ft: 0.0833333, cm: 2.54, mi: 0.0000157828, km: 0.0000254, yd: 0.0277778,
            mm: 25.4, µm: 25400, nm: 2.54e7, nmi: 1.37149e-8,
            fur: 0.000126263, au: 5.14156e-15, ly: 8.23158e-18, pc: 2.52969e-18,
            Å: 2.54e8, lea: 4.85693e-6
        },
        cm: {
            m: 0.01, ft: 0.0328084, in: 0.393701, mi: 0.0000062137, km: 0.00001, yd: 0.0109361,
            mm: 10, µm: 10000, nm: 1e7, nmi: 5.39957e-6,
            fur: 0.0000497096, au: 6.68459e-14, ly: 1.057e-17, pc: 3.24078e-18,
            Å: 1e8, lea: 2.07124e-6
        },
        mi: {
            m: 1609.34, ft: 5280, in: 63360, cm: 160934, km: 1.60934, yd: 1760,
            mm: 1.609e6, µm: 1.609e9, nm: 1.609e12, nmi: 0.868976,
            fur: 8, au: 1.07578e-8, ly: 1.70108e-13, pc: 5.21553e-14,
            Å: 1.609e13, lea: 0.333333
        },
        km: {
            m: 1000, ft: 3280.84, in: 39370.1, cm: 100000, mi: 0.621371, yd: 1093.61,
            mm: 1e6, µm: 1e9, nm: 1e12, nmi: 0.539957,
            fur: 4.97096, au: 6.68459e-9, ly: 1.057e-13, pc: 3.24078e-14,
            Å: 1e13, lea: 0.207124
        },
        yd: {
            m: 0.9144, ft: 3, in: 36, cm: 91.44, mi: 0.000568182, km: 0.0009144,
            mm: 914.4, µm: 914400, nm: 9.144e8, nmi: 0.000493737,
            fur: 0.00454545, au: 6.11279e-13, ly: 9.81389e-17, pc: 3.0125e-17,
            Å: 9.144e9, lea: 0.000186873
        },
        mm: {
            m: 0.001, ft: 0.00328084, in: 0.0393701, cm: 0.1, mi: 6.2137e-7, km: 1e-6,
            yd: 0.00109361, µm: 1000, nm: 1e6, nmi: 5.39957e-7,
            fur: 4.97096e-6, au: 6.68459e-15, ly: 1.057e-18, pc: 3.24078e-19,
            Å: 1e7, lea: 2.07124e-7
        },
        µm: {
            m: 1e-6, ft: 3.28084e-6, in: 3.93701e-5, cm: 0.0001, mi: 6.2137e-10, km: 1e-9,
            yd: 1.09361e-6, mm: 0.001, nm: 1000, nmi: 5.39957e-10,
            fur: 4.97096e-9, au: 6.68459e-18, ly: 1.057e-21, pc: 3.24078e-22,
            Å: 10000, lea: 2.07124e-10
        },
        nm: {
            m: 1e-9, ft: 3.28084e-9, in: 3.93701e-8, cm: 1e-7, mi: 6.2137e-13, km: 1e-12,
            yd: 1.09361e-9, mm: 1e-6, µm: 0.001, nmi: 5.39957e-13,
            fur: 4.97096e-12, au: 6.68459e-21, ly: 1.057e-24, pc: 3.24078e-25,
            Å: 10, lea: 2.07124e-13
        },
        nmi: {
            m: 1852, ft: 6076.12, in: 72913.4, cm: 185200, mi: 1.15078, km: 1.852,
            yd: 2025.37, mm: 1.852e6, µm: 1.852e9, nm: 1.852e12,
            fur: 9.26098, au: 1.2345e-8, ly: 1.949e-13, pc: 5.979e-14,
            Å: 1.852e13, lea: 0.383012
        },
        fur: {
            m: 201.168, ft: 660, in: 7920, cm: 20116.8, mi: 0.125, km: 0.201168,
            yd: 220, mm: 201168, µm: 2.01168e8, nm: 2.01168e11, nmi: 0.107956,
            au: 1.34165e-10, ly: 2.11958e-15, pc: 6.5044e-16, Å: 2.01168e12, lea: 0.025
        },
        Å: {
            m: 1e-10, ft: 3.28084e-10, in: 3.93701e-9, cm: 1e-8, mi: 6.2137e-14, km: 1e-13,
            yd: 1.09361e-10, mm: 1e-7, µm: 1e-4, nm: 0.1, nmi: 5.39957e-14,
            fur: 4.97096e-13, au: 6.68459e-21, ly: 1.057e-26, pc: 3.24078e-27,
            lea: 2.07124e-14
        },
        lea: {
            m: 4828.03, ft: 15840, in: 190080, cm: 482803, mi: 3, km: 4.82803,
            yd: 5280, mm: 4.828e6, µm: 4.828e9, nm: 4.828e12, nmi: 2.60706,
            fur: 24, au: 3.22734e-8, ly: 5.10168e-13, pc: 1.56359e-13,
            Å: 4.828e13
        }
    };

    // Check if the input units are valid
    if (!units.hasOwnProperty(fromUnit) || !units[fromUnit].hasOwnProperty(toUnit)) {
        return 0; // Return 0 for invalid conversion
    }

    // Perform the conversion
    return (value * units[fromUnit][toUnit]);
}

speedInputs.forEach(input => {
    input.addEventListener("input", function () {
        const inputValue = parseFloat(this.value);
        if (isNaN(inputValue)) {
            // If input value is not a valid number, set output values to empty strings
            speedInputs.forEach(output => {
                output.value = "";
            });
            return; // Exit the function early
        }

        const fromUnit = this.dataset.speedunit;

        speedInputs.forEach(output => {
            if (output !== this) {
                const toUnit = output.dataset.speedunit;
                output.value = convertSpeed(inputValue, fromUnit, toUnit);
            }
        });
    });
});

function convertSpeed(value, fromUnit, toUnit) {
    // Define conversion factors
    const units = {
        mps: { kph: 3.6, mph: 2.23694, fps: 3.28084, kn: 1.94384, mach: 0.00291545, c: 0.00000000333564, ips: 39.3701, cmps: 100, mmps: 1000 },
        kph: { mps: 0.277778, mph: 0.621371, fps: 0.911344, kn: 0.539957, mach: 0.000816273, c: 0.000000000925926, ips: 10.9361, cmps: 27.7778, mmps: 277.778 },
        mph: { mps: 0.44704, kph: 1.60934, fps: 1.46667, kn: 0.868976, mach: 0.00130332, c: 0.00000000149116, ips: 17.6, cmps: 44.704, mmps: 447.04 },
        fps: { mps: 0.3048, kph: 1.09728, mph: 0.681818, kn: 0.592484, mach: 0.000888891, c: 0.00000000299792, ips: 12, cmps: 30.48, mmps: 304.8 },
        kn: { mps: 0.514444, kph: 1.852, mph: 1.15078, fps: 1.68781, mach: 0.0014983, c: 0.000000001716, ips: 20.2537, cmps: 51.4444, mmps: 514.444 },
        mach: { mps: 343, kph: 1234.8, mph: 767.269, fps: 1125.33, kn: 661.547, c: 0.00112697, ips: 13504, cmps: 34300, mmps: 343000 },
        c: { mps: 299792458, kph: 1.079e9, mph: 6.706e8, fps: 9.836e8, kn: 5.828e8, mach: 874030, ips: 1.181e10, cmps: 2.998e10, mmps: 2.998e11 },
        ips: { mps: 0.0254, kph: 0.09144, mph: 0.0568182, fps: 0.0833333, kn: 0.0493737, mach: 0.00000188104, c: 0.0000000254, cmps: 2.54, mmps: 25.4 },
        cmps: { mps: 0.01, kph: 0.036, mph: 0.0223694, fps: 0.0328084, kn: 0.0194384, mach: 0.00000291545, c: 0.00000001, ips: 0.393701, mmps: 10 },
        mmps: { mps: 0.001, kph: 0.0036, mph: 0.00223694, fps: 0.00328084, kn: 0.00194384, mach: 0.000000291545, c: 0.000000001, ips: 0.0393701, cmps: 0.1 }
    };

    // Check if the input units are valid
    if (!units.hasOwnProperty(fromUnit) || !units[fromUnit].hasOwnProperty(toUnit)) {
        return 0; // Return 0 for invalid conversion
    }

    // Perform the conversion
    return (value * units[fromUnit][toUnit]);
}

distanceInputs.forEach(input => {
    input.addEventListener("input", function () {
        const inputValue = parseFloat(this.value);
        if (isNaN(inputValue)) {
            distanceInputs.forEach(output => output.value = "");
            return;
        }

        const fromUnit = this.dataset.distanceunit;

        distanceInputs.forEach(output => {
            if (output !== this) {
                const toUnit = output.dataset.distanceunit;
                output.value = convertDistance(inputValue, fromUnit, toUnit);
            }
        });
    });
});

function convertDistance(value, fromUnit, toUnit) {
    const units = {
        m: { km: 0.001, mi: 0.000621371, yd: 1.09361, ft: 3.28084 },
        m: { km: 0.001, mi: 0.000621371, yd: 1.09361, ft: 3.28084, mm: 1000, cm: 100, in: 39.3701, nm: 1e9, um: 1e6, ly: 1.057e-16, pc: 3.26156e-17, au: 6.68459e-9, rd: 0.19884, fur: 0.00497096, ch: 0.0497096 },
        km: { m: 1000, mi: 0.621371, yd: 1093.61, ft: 3280.84, mm: 1e6, cm: 100000, in: 39370.1, nm: 1e12, um: 1e9, ly: 1.057e-13, pc: 3.26156e-14, au: 6.68459e-6, rd: 198.84, fur: 4.97096, ch: 49.7096 },
        mi: { m: 1609.34, km: 1.60934, yd: 1760, ft: 5280, mm: 1.609e6, cm: 160934, in: 63360, nm: 1.609e12, um: 1.609e9, ly: 1.701e-13, pc: 5.033e-14, au: 1.056e-5, rd: 317.24, fur: 8, ch: 80 },
        yd: { m: 0.9144, km: 0.0009144, mi: 0.000568182, ft: 3, mm: 914.4, cm: 91.44, in: 36, nm: 9.144e8, um: 9.144e5, ly: 9.656e-17, pc: 2.926e-17, au: 5.934e-9, rd: 0.33333, fur: 0.0082316, ch: 0.0833333 },
        ft: { m: 0.3048, km: 0.0003048, mi: 0.000189394, yd: 0.333333, mm: 304.8, cm: 30.48, in: 12, nm: 3.048e8, um: 3.048e5, ly: 3.221e-17, pc: 9.677e-18, au: 1.978e-9, rd: 0.111111, fur: 0.0027432, ch: 0.0277778 },
        mm: { m: 0.001, km: 1e-6, mi: 6.2137e-7, yd: 0.00109361, ft: 0.00328084, cm: 0.1, in: 0.0393701, nm: 1e6, um: 1000, ly: 1.057e-22, pc: 3.26156e-23, au: 6.68459e-16, rd: 1.9884e-5, fur: 4.97096e-8, ch: 4.97096e-7 },
        cm: { m: 0.01, km: 1e-5, mi: 6.2137e-6, yd: 0.0109361, ft: 0.0328084, mm: 10, in: 0.393701, nm: 1e7, um: 10000, ly: 1.057e-21, pc: 3.26156e-22, au: 6.68459e-15, rd: 1.9884e-4, fur: 4.97096e-7, ch: 4.97096e-6 },
        in: { m: 0.0254, km: 2.54e-5, mi: 1.5783e-5, yd: 0.0277778, ft: 0.0833333, mm: 25.4, cm: 2.54, nm: 2.54e7, um: 2.54e4, ly: 2.681e-23, pc: 8.036e-24, au: 1.678e-16, rd: 5.3e-6, fur: 1.325e-7, ch: 1.325e-6 },
        nm: { m: 1e-9, km: 1e-12, mi: 6.2137e-16, yd: 1.09361e-9, ft: 3.28084e-9, mm: 1e-3, cm: 1e-2, in: 3.93701e-8, um: 0.001, ly: 1e-30, pc: 3.26156e-31, au: 6.68459e-24, rd: 2.0568e-13, fur: 5.1419e-16, ch: 5.1419e-15 }
    };

    if (!units[fromUnit] || !units[fromUnit][toUnit]) {
        return 0;
    }

    return (value * units[fromUnit][toUnit]);
}

timeInputs.forEach(input => {
    input.addEventListener("input", function () {
        const inputValue = parseFloat(this.value);
        if (isNaN(inputValue)) {
            timeInputs.forEach(output => output.value = "");
            return;
        }

        const fromUnit = this.dataset.timeunit;

        timeInputs.forEach(output => {
            if (output !== this) {
                const toUnit = output.dataset.timeunit;
                output.value = convertTime(inputValue, fromUnit, toUnit);
            }
        });
    });
});

function convertTime(value, fromUnit, toUnit) {
    const units = {
        sec: { ms: 1000, µs: 1000000, ns: 1000000000, min: 1 / 60, hr: 1 / 3600, day: 1 / 86400, wk: 1 / 604800, mo: 1 / 2620020, yr: 1 / 31557600 },
        ms: { sec: 1 / 1000, µs: 1000, ns: 1000000, min: 1 / 60000, hr: 1 / 3600000, day: 1 / 86400000, wk: 1 / 604800000, mo: 1 / 2620020000, yr: 1 / 31557600000 },
        µs: { sec: 1 / 1000000, ms: 1 / 1000, ns: 1000, min: 1 / 60000000, hr: 1 / 3600000000, day: 1 / 86400000000, wk: 1 / 604800000000, mo: 1 / 2620020000000, yr: 1 / 31557600000000 },
        ns: { sec: 1 / 1000000000, ms: 1 / 1000000, µs: 1 / 1000, min: 1 / 60000000000, hr: 1 / 3600000000000, day: 1 / 86400000000000, wk: 1 / 604800000000000, mo: 1 / 2620020000000000, yr: 1 / 31557600000000000 },
        min: { sec: 60, ms: 60000, µs: 60000000, ns: 60000000000, hr: 1 / 60, day: 1 / 1440, wk: 1 / 10080, mo: 1 / 43833.6, yr: 1 / 525960 },
        hr: { sec: 3600, ms: 3600000, µs: 3600000000, ns: 3600000000000, min: 60, day: 1 / 24, wk: 1 / 168, mo: 1 / 730.56, yr: 1 / 8766 },
        day: { sec: 86400, ms: 86400000, µs: 86400000000, ns: 86400000000000, min: 1440, hr: 24, wk: 1 / 7, mo: 1 / 30.44, yr: 1 / 365.25 },
        wk: { sec: 604800, ms: 604800000, µs: 604800000000, ns: 604800000000000, min: 10080, hr: 168, day: 7, mo: 1 / 4.345, yr: 1 / 52.177 },
        mo: { sec: 2620020, ms: 2620020000, µs: 2620020000000, ns: 2620020000000000, min: 43833.6, hr: 730.56, day: 30.44, wk: 4.345, yr: 1 / 12 },
        yr: { sec: 31557600, ms: 31557600000, µs: 31557600000000, ns: 31557600000000000, min: 525960, hr: 8766, day: 365.25, wk: 52.177, mo: 12 }
    };

    if (!units[fromUnit] || !units[fromUnit][toUnit]) {
        return 0;
    }

    return (value * units[fromUnit][toUnit]);
}

volumeInputs.forEach(input => {
    input.addEventListener("input", function () {
        const inputValue = parseFloat(this.value);
        if (isNaN(inputValue)) {
            volumeInputs.forEach(output => output.value = "");
            return;
        }

        const fromUnit = this.dataset.volumeunit;

        volumeInputs.forEach(output => {
            if (output !== this) {
                const toUnit = output.dataset.volumeunit;
                output.value = convertVolume(inputValue, fromUnit, toUnit);
            }
        });
    });
});

function convertVolume(value, fromUnit, toUnit) {
    const units = {
        lit: {
            ml: 1000, gal: 0.264172, cup: 4.22675, gal_uk: 0.219969, pt: 2.11338,
            pt_uk: 1.7598, qt: 1.05669, qt_uk: 0.879876, fl_oz: 33.814, fl_oz_uk: 35.1951,
            m3: 0.001, cm3: 1000, in3: 61.0237, ft3: 0.0353147, bbl_us: 0.00629
        },
        ml: {
            lit: 0.001, gal: 0.000264172, cup: 0.00422675, gal_uk: 0.000219969, pt: 0.00211338,
            pt_uk: 0.0017598, qt: 0.00105669, qt_uk: 0.000879876, fl_oz: 0.033814, fl_oz_uk: 0.0351951,
            m3: 1e-6, cm3: 1, in3: 0.0610237, ft3: 3.53147e-5, bbl_us: 6.29e-6
        },
        gal: {
            lit: 3.78541, ml: 3785.41, cup: 16, gal_uk: 0.832674, pt: 8,
            pt_uk: 6.87972, qt: 4, qt_uk: 3.43944, fl_oz: 128, fl_oz_uk: 140.007,
            m3: 0.00378541, cm3: 3785.41, in3: 231, ft3: 0.133681, bbl_us: 0.02381
        },
        cup: {
            lit: 0.236588, ml: 236.588, gal: 0.0625, gal_uk: 0.052418, pt: 0.5,
            pt_uk: 0.43996, qt: 0.25, qt_uk: 0.21998, fl_oz: 8, fl_oz_uk: 8.45318,
            m3: 2.36588e-4, cm3: 236.588, in3: 14.4375, ft3: 8.34574e-3, bbl_us: 0.0003973
        },
        gal_uk: {
            lit: 4.54609, ml: 4546.09, gal: 1.20095, cup: 19.215, pt: 9.6072,
            pt_uk: 8, qt: 4.8036, qt_uk: 3.99998, fl_oz: 160, fl_oz_uk: 169.565,
            m3: 0.00454609, cm3: 4546.09, in3: 277.419, ft3: 0.159994, bbl_us: 0.02855
        },
        pt: {
            lit: 0.473176, ml: 473.176, gal: 0.125, gal_uk: 0.104084, cup: 2,
            pt_uk: 0.879877, qt: 0.5, qt_uk: 0.439939, fl_oz: 16, fl_oz_uk: 17.5975,
            m3: 4.73176e-4, cm3: 473.176, in3: 28.875, ft3: 0.0167101, bbl_us: 0.00099392
        },
        qt: {
            lit: 0.946353, ml: 946.353, gal: 0.25, gal_uk: 0.208168, cup: 4,
            pt: 2, pt_uk: 1.75975, qt_uk: 0.879877, fl_oz: 32, fl_oz_uk: 35.1951,
            m3: 9.46353e-4, cm3: 946.353, in3: 57.75, ft3: 0.0334201, bbl_us: 0.00198784
        },
        fl_oz: {
            lit: 0.0295735, ml: 29.5735, gal: 0.0078125, gal_uk: 0.00650527, cup: 0.125,
            pt: 0.0625, pt_uk: 0.0549919, qt: 0.03125, qt_uk: 0.0274959, fl_oz_uk: 1.04084,
            m3: 2.95735e-5, cm3: 29.5735, in3: 1.80469, ft3: 0.00104438, bbl_us: 7.7616e-5
        },
        m3: {
            lit: 1000, ml: 1000000, gal: 264.172, gal_uk: 219.969, cup: 4226.75,
            pt: 2113.38, pt_uk: 1759.75, qt: 1056.69, qt_uk: 879.877, fl_oz: 33814,
            fl_oz_uk: 35195.1, cm3: 1000000, in3: 61023.7, ft3: 35.3147, bbl_us: 6.29
        },
        cm3: {
            lit: 0.001, ml: 1, gal: 0.000264172, gal_uk: 0.000219969, cup: 0.00422675,
            pt: 0.00211338, pt_uk: 0.00175975, qt: 0.00105669, qt_uk: 0.000879877, fl_oz: 0.033814,
            fl_oz_uk: 0.0351951, m3: 1e-6, in3: 0.0610237, ft3: 3.53147e-5, bbl_us: 6.29e-6
        },
        in3: {
            lit: 0.0163871, ml: 16.3871, gal: 0.004329, gal_uk: 0.00360465, cup: 0.0692641,
            pt: 0.034632, pt_uk: 0.0288833, qt: 0.017316, qt_uk: 0.0144417, fl_oz: 0.554113,
            fl_oz_uk: 0.576744, m3: 1.63871e-5, cm3: 16.3871, ft3: 0.000578704, bbl_us: 0.000103071
        },
        ft3: {
            lit: 28.3168, ml: 28316.8, gal: 7.48052, gal_uk: 6.22883, cup: 119.688,
            pt: 59.8442, pt_uk: 49.8307, qt: 29.9221, qt_uk: 24.9154, fl_oz: 957.506,
            fl_oz_uk: 996.078, m3: 0.0283168, cm3: 28316.8, in3: 1728, bbl_us: 0.198129
        },
        bbl_us: {
            lit: 158.987, ml: 158987, gal: 42, gal_uk: 34.9723, cup: 672,
            pt: 336, pt_uk: 280, qt: 168, qt_uk: 140, fl_oz: 5376,
            fl_oz_uk: 5880, m3: 0.158987, cm3: 158987, in3: 9702, ft3: 5.61458
        }
    };

    if (!units[fromUnit] || !units[fromUnit][toUnit]) {
        return 0;
    }

    return (value * units[fromUnit][toUnit]);
}

areaInputs.forEach(input => {
    input.addEventListener("input", function () {
        const inputValue = parseFloat(this.value);
        if (isNaN(inputValue)) {
            areaInputs.forEach(output => output.value = "");
            return;
        }

        const fromUnit = this.dataset.areaunit;

        areaInputs.forEach(output => {
            if (output !== this) {
                const toUnit = output.dataset.areaunit;
                output.value = convertArea(inputValue, fromUnit, toUnit);
            }
        });
    });
});

function convertArea(value, fromUnit, toUnit) {
    const units = {
        sqm: { sqkm: 1e-6, sqft: 10.7639, sqyd: 1.19599, ac: 0.000247105, ha: 0.0001, sqmi: 3.861e-7, sqin: 1550, sqcm: 10000, sqmm: 1000000, barn: 1e28, rd: 4.941e-5, morgen: 1.167, township: 3.861e-5, are: 0.01, da: 0.001 },
        sqkm: { sqm: 1e6, sqft: 107639, sqyd: 119599, ac: 247.105, ha: 100, sqmi: 0.3861, sqin: 15500031, sqcm: 1e8, sqmm: 1e10, barn: 1e34, rd: 49410, morgen: 1167, township: 0.00003861, are: 1000, da: 100 },
        sqft: { sqm: 0.092903, sqkm: 9.2903e-8, sqyd: 0.111111, ac: 2.2957e-5, ha: 9.2903e-6, sqmi: 3.587e-8, sqin: 144, sqcm: 929.03, sqmm: 92903, barn: 1.45e-24, rd: 5.678e-6, morgen: 0.0001167, township: 1.413e-8, are: 0.092903, da: 0.00929 },
        sqyd: { sqm: 0.836127, sqkm: 8.3613e-7, sqft: 9, ac: 0.000206611, ha: 8.3613e-5, sqmi: 3.228e-8, sqin: 1296, sqcm: 836.127, sqmm: 836127, barn: 1.29e-24, rd: 5.678e-6, morgen: 0.0001167, township: 1.413e-8, are: 0.0836127, da: 0.0083613 },
        ac: { sqm: 4046.86, sqkm: 0.00404686, sqft: 43560, sqyd: 4840, ha: 0.404686, sqmi: 0.0015625, sqin: 6272640, sqcm: 404686, sqmm: 404686000, barn: 6.276e-19, rd: 1, morgen: 2.82, township: 0.000024, are: 40.4686, da: 4.04686 },
        ha: { sqm: 10000, sqkm: 0.01, sqft: 107639.104, sqyd: 119599.1, ac: 2.47105, sqmi: 0.003861, sqin: 1550000, sqcm: 1000000, sqmm: 1e9, barn: 1.55e-23, rd: 4.941e-4, morgen: 1.167, township: 3.861e-7, are: 100, da: 10 },
        sqmi: { sqm: 2589988, sqkm: 2.58999, sqft: 27878400, sqyd: 3110400, ac: 640, ha: 259, sqin: 4014489600, sqcm: 2.58999e6, sqmm: 2.58999e9, barn: 4.02e-17, rd: 1.414e-2, morgen: 36, township: 1, are: 25899.88, da: 2599.988 },
        sqin: { sqm: 0.00064516, sqkm: 6.4516e-10, sqft: 0.00694444, sqyd: 0.000771605, ac: 1.5955e-7, ha: 6.4516e-8, sqmi: 2.471e-10, sqcm: 6.4516, sqmm: 645.16, barn: 9.72e-30, rd: 3.68e-8, morgen: 9.72e-7, township: 4.4e-13, are: 6.4516e-5, da: 6.4516e-6 },
        sqcm: { sqm: 0.0001, sqkm: 1e-10, sqft: 0.00107639, sqyd: 0.000119599, ac: 2.4711e-8, ha: 1e-8, sqmi: 3.861e-13, sqin: 0.155, sqmm: 100, barn: 1.55e-32, rd: 5.68e-11, morgen: 1.55e-9, township: 3.86e-16, are: 0.0001, da: 0.00001 },
        sqmm: { sqm: 1e-6, sqkm: 1e-12, sqft: 1.0764e-5, sqyd: 1.19599e-6, ac: 2.4711e-10, ha: 1e-10, sqmi: 3.861e-15, sqin: 0.00155, sqcm: 0.01, barn: 1.55e-34, rd: 5.68e-13, morgen: 1.55e-11, township: 3.86e-18, are: 1e-5, da: 1e-6 },
        barn: { sqm: 1e28, sqkm: 1e34, sqft: 1.45e24, sqyd: 1.29e24, ac: 6.276e18, ha: 1.55e19, sqmi: 4.02e16, sqin: 9.72e30, sqcm: 1.55e32, sqmm: 1.55e34, rd: 2.67e23, morgen: 6.7e18, township: 3.56e13, are: 1.55e24, da: 1.55e23 }
    };

    if (!units[fromUnit] || !units[fromUnit][toUnit]) {
        return 0;
    }

    return (value * units[fromUnit][toUnit]);
}

digitalInputs.forEach(input => {
    input.addEventListener("input", function () {
        const inputValue = parseFloat(this.value);
        if (isNaN(inputValue)) {
            digitalInputs.forEach(output => output.value = "");
            return;
        }

        const fromUnit = this.dataset.digitalunit;

        digitalInputs.forEach(output => {
            if (output !== this) {
                const toUnit = output.dataset.digitalunit;
                output.value = convertDigital(inputValue, fromUnit, toUnit);
            }
        });
    });
});

function convertDigital(value, fromUnit, toUnit) {
    const units = {
        bits: { bytes: 0.125, kb: 1 / 1024, mb: 1 / 1024 ** 2, gb: 1 / 1024 ** 3, tb: 1 / 1024 ** 4, pb: 1 / 1024 ** 5, eb: 1 / 1024 ** 6, zb: 1 / 1024 ** 7, yb: 1 / 1024 ** 8, kilobits: 1 / 1000, megabits: 1 / 1000000, gigabits: 1 / 1000000000, terabits: 1 / 1000000000000, petabits: 1 / 1000000000000000, exabits: 1 / 1000000000000000000, yottabits: 1 / 1000000000000000000000 },
        bytes: { bits: 8, kb: 1 / 1024, mb: 1 / 1024 ** 2, gb: 1 / 1024 ** 3, tb: 1 / 1024 ** 4, pb: 1 / 1024 ** 5, eb: 1 / 1024 ** 6, zb: 1 / 1024 ** 7, yb: 1 / 1024 ** 8, kilobits: 8 / 1024, megabits: 8 / 1024 ** 2, gigabits: 8 / 1024 ** 3, terabits: 8 / 1024 ** 4, petabits: 8 / 1024 ** 5, exabits: 8 / 1024 ** 6, yottabits: 8 / 1024 ** 7 },
        kb: { bits: 1024, bytes: 1024, mb: 1 / 1024, gb: 1 / 1024 ** 2, tb: 1 / 1024 ** 3, pb: 1 / 1024 ** 4, eb: 1 / 1024 ** 5, zb: 1 / 1024 ** 6, yb: 1 / 1024 ** 7, kilobits: 1, megabits: 1 / 1024, gigabits: 1 / 1024 ** 2, terabits: 1 / 1024 ** 3, petabits: 1 / 1024 ** 4, exabits: 1 / 1024 ** 5, yottabits: 1 / 1024 ** 6 },
        mb: { bits: 1024 ** 2, bytes: 1024 ** 2, kb: 1024, gb: 1 / 1024, tb: 1 / 1024 ** 2, pb: 1 / 1024 ** 3, eb: 1 / 1024 ** 4, zb: 1 / 1024 ** 5, yb: 1 / 1024 ** 6, kilobits: 1e3, megabits: 1, gigabits: 1 / 1024, terabits: 1 / 1024 ** 2, petabits: 1 / 1024 ** 3, exabits: 1 / 1024 ** 4, yottabits: 1 / 1024 ** 5 },
        gb: { bits: 1024 ** 3, bytes: 1024 ** 3, kb: 1024 ** 2, mb: 1024, tb: 1 / 1024, pb: 1 / 1024 ** 2, eb: 1 / 1024 ** 3, zb: 1 / 1024 ** 4, yb: 1 / 1024 ** 5, kilobits: 1e6, megabits: 1e3, gigabits: 1, terabits: 1 / 1024, petabits: 1 / 1024 ** 2, exabits: 1 / 1024 ** 3, yottabits: 1 / 1024 ** 4 },
        tb: { bits: 1024 ** 4, bytes: 1024 ** 4, kb: 1024 ** 3, mb: 1024 ** 2, gb: 1024, pb: 1 / 1024, eb: 1 / 1024 ** 2, zb: 1 / 1024 ** 3, yb: 1 / 1024 ** 4, kilobits: 1e9, megabits: 1e6, gigabits: 1e3, terabits: 1, petabits: 1 / 1024, exabits: 1 / 1024 ** 2, yottabits: 1 / 1024 ** 3 },
        pb: { bits: 1024 ** 5, bytes: 1024 ** 5, kb: 1024 ** 4, mb: 1024 ** 3, gb: 1024 ** 2, tb: 1024, eb: 1 / 1024, zb: 1 / 1024 ** 2, yb: 1 / 1024 ** 3, kilobits: 1e12, megabits: 1e9, gigabits: 1e6, terabits: 1e3, petabits: 1, exabits: 1 / 1024, yottabits: 1 / 1024 ** 2 },
        eb: { bits: 1024 ** 6, bytes: 1024 ** 6, kb: 1024 ** 5, mb: 1024 ** 4, gb: 1024 ** 3, tb: 1024 ** 2, pb: 1024, zb: 1 / 1024, yb: 1 / 1024 ** 2, kilobits: 1e15, megabits: 1e12, gigabits: 1e9, terabits: 1e6, petabits: 1e3, exabits: 1, yottabits: 1 / 1024 },
        zb: { bits: 1024 ** 7, bytes: 1024 ** 7, kb: 1024 ** 6, mb: 1024 ** 5, gb: 1024 ** 4, tb: 1024 ** 3, pb: 1024 ** 2, eb: 1024, yb: 1 / 1024, kilobits: 1e18, megabits: 1e15, gigabits: 1e12, terabits: 1e9, petabits: 1e6, exabits: 1e3, yottabits: 1 / 1024 },
        yb: { bits: 1024 ** 8, bytes: 1024 ** 8, kb: 1024 ** 7, mb: 1024 ** 6, gb: 1024 ** 5, tb: 1024 ** 4, pb: 1024 ** 3, eb: 1024 ** 2, zb: 1024, kilobits: 1e21, megabits: 1e18, gigabits: 1e15, terabits: 1e12, petabits: 1e9, exabits: 1e6, yottabits: 1 }
    };

    if (!units[fromUnit] || !units[fromUnit][toUnit]) {
        return 0;
    }

    return (value * units[fromUnit][toUnit]);
}