const lengthConverter = {
    Å: {
        m: 1e-10, ft: 3.28084e-10, in: 3.93701e-9, cm: 1e-8, mi: 6.2137e-14, km: 1e-13,
        yd: 1.09361e-10, mm: 1e-7, µm: 1e-4, nm: 0.1, nmi: 5.39957e-14,
        fur: 4.97096e-13, au: 6.68459e-21, ly: 1.057e-26, pc: 3.24078e-27,
        lea: 2.07124e-14, rd: 1.9884e-11, ch: 4.97096e-12
    },
    nm: {
        m: 1e-9, ft: 3.28084e-9, in: 3.93701e-8, cm: 1e-7, mi: 6.2137e-13, km: 1e-12,
        yd: 1.09361e-9, mm: 1e-6, µm: 0.001, nmi: 5.39957e-13,
        fur: 4.97096e-12, au: 6.68459e-21, ly: 1.057e-24, pc: 3.24078e-25,
        Å: 10, lea: 2.07124e-13, rd: 1.9884e-10, ch: 4.97096e-11
    },
    µm: {
        m: 1e-6, ft: 3.28084e-6, in: 3.93701e-5, cm: 0.0001, mi: 6.2137e-10, km: 1e-9,
        yd: 1.09361e-6, mm: 0.001, nm: 1000, nmi: 5.39957e-10,
        fur: 4.97096e-9, au: 6.68459e-18, ly: 1.057e-21, pc: 3.24078e-22,
        Å: 10000, lea: 2.07124e-10, rd: 1.9884e-7, ch: 4.97096e-8
    },
    mm: {
        m: 0.001, ft: 0.00328084, in: 0.0393701, cm: 0.1, mi: 6.2137e-7, km: 1e-6,
        yd: 0.00109361, µm: 1000, nm: 1e6, nmi: 5.39957e-7,
        fur: 4.97096e-6, au: 6.68459e-15, ly: 1.057e-18, pc: 3.24078e-19,
        Å: 1e7, lea: 2.07124e-7, rd: 0.00019884, ch: 0.0000497096
    },
    cm: {
        m: 0.01, ft: 0.0328084, in: 0.393701, mi: 0.0000062137, km: 0.00001, yd: 0.0109361,
        mm: 10, µm: 10000, nm: 1e7, nmi: 5.39957e-6,
        fur: 0.0000497096, au: 6.68459e-14, ly: 1.057e-17, pc: 3.24078e-18,
        Å: 1e8, lea: 2.07124e-6, rd: 0.0019884, ch: 0.000497096
    },
    in: {
        m: 0.0254, ft: 0.0833333, cm: 2.54, mi: 0.0000157828, km: 0.0000254, yd: 0.0277778,
        mm: 25.4, µm: 25400, nm: 2.54e7, nmi: 1.37149e-8,
        fur: 0.000126263, au: 5.14156e-15, ly: 8.23158e-18, pc: 2.52969e-18,
        Å: 2.54e8, lea: 4.85693e-6, rd: 0.00505051, ch: 0.00126263
    },
    ft: {
        m: 0.3048, in: 12, cm: 30.48, mi: 0.000189394, km: 0.0003048, yd: 0.333333,
        mm: 304.8, µm: 304800, nm: 3.048e8, nmi: 0.000164579,
        fur: 0.00151515, au: 2.03718e-13, ly: 3.22174e-17, pc: 9.8771e-18,
        Å: 3.048e9, lea: 0.0000621371, rd: 0.0606061, ch: 0.0151515
    },
    yd: {
        m: 0.9144, ft: 3, in: 36, cm: 91.44, mi: 0.000568182, km: 0.0009144,
        mm: 914.4, µm: 914400, nm: 9.144e8, nmi: 0.000493737,
        fur: 0.00454545, au: 6.11279e-13, ly: 9.81389e-17, pc: 3.0125e-17,
        Å: 9.144e9, lea: 0.000186873, rd: 0.181818, ch: 0.0454545
    },
    m: {
        ft: 3.28084, in: 39.3701, cm: 100, mi: 0.000621371, km: 0.001, yd: 1.09361,
        mm: 1000, µm: 1e6, nm: 1e9, nmi: 0.000539957,
        fur: 0.00497096, au: 6.68459e-12, ly: 1.057e-16, pc: 3.24078e-17,
        Å: 1e10, lea: 0.000207124, rd: 0.19884, ch: 0.0497096
    },
    rd: {
        m: 5.0292, ft: 16.5, in: 198, cm: 502.92, mi: 0.003125, km: 0.0050292, yd: 5.5,
        mm: 5029.2, µm: 5.0292e6, nm: 5.0292e9, nmi: 0.00271551,
        fur: 0.025, au: 3.36181e-11, ly: 5.31646e-16, pc: 1.63138e-16,
        Å: 5.0292e10, lea: 0.00104167, ch: 0.25
    },
    ch: {
        m: 20.1168, ft: 66, in: 792, cm: 2011.68, mi: 0.0125, km: 0.0201168, yd: 22,
        mm: 20116.8, µm: 2.01168e7, nm: 2.01168e10, nmi: 0.010862,
        fur: 0.1, au: 1.34473e-10, ly: 2.12658e-15, pc: 6.52553e-16,
        Å: 2.01168e11, lea: 0.00416667, rd: 4
    },
    fur: {
        m: 201.168, ft: 660, in: 7920, cm: 20116.8, mi: 0.125, km: 0.201168,
        yd: 220, mm: 201168, µm: 2.01168e8, nm: 2.01168e11, nmi: 0.107956,
        au: 1.34165e-10, ly: 2.11958e-15, pc: 6.5044e-16, Å: 2.01168e12, lea: 0.025,
        rd: 40, ch: 10
    },
    km: {
        m: 1000, ft: 3280.84, in: 39370.1, cm: 100000, mi: 0.621371, yd: 1093.61,
        mm: 1e6, µm: 1e9, nm: 1e12, nmi: 0.539957,
        fur: 4.97096, au: 6.68459e-9, ly: 1.057e-13, pc: 3.24078e-14,
        Å: 1e13, lea: 0.207124, rd: 198.84, ch: 49.7096
    },
    mi: {
        m: 1609.34, ft: 5280, in: 63360, cm: 160934, km: 1.60934, yd: 1760,
        mm: 1.609e6, µm: 1.609e9, nm: 1.609e12, nmi: 0.868976,
        fur: 8, au: 1.07578e-8, ly: 1.70108e-13, pc: 5.21553e-14,
        Å: 1.609e13, lea: 0.333333, rd: 320, ch: 80
    },
    nmi: {
        m: 1852, ft: 6076.12, in: 72913.4, cm: 185200, mi: 1.15078, km: 1.852,
        yd: 2025.37, mm: 1.852e6, µm: 1.852e9, nm: 1.852e12,
        fur: 9.26098, au: 1.2345e-8, ly: 1.949e-13, pc: 5.979e-14,
        Å: 1.852e13, lea: 0.383012, rd: 368.249, ch: 92.0622
    },
    lea: {
        m: 4828.03, ft: 15840, in: 190080, cm: 482803, mi: 3, km: 4.82803,
        yd: 5280, mm: 4.828e6, µm: 4.828e9, nm: 4.828e12, nmi: 2.60706,
        fur: 24, au: 3.22734e-8, ly: 5.10168e-13, pc: 1.56359e-13,
        Å: 4.828e13, rd: 960, ch: 240
    },
    au: {
        m: 1.496e11, ft: 4.908e11, in: 5.889e12, cm: 1.496e13, mi: 9.296e7, km: 1.496e8,
        yd: 1.636e11, mm: 1.496e14, µm: 1.496e17, nm: 1.496e20, nmi: 8.099e7,
        fur: 7.456e8, ly: 1.581e-5, pc: 4.848e-6, Å: 1.496e21, lea: 3.099e7,
        rd: 2.974e10, ch: 7.436e9
    },
    ly: {
        m: 9.461e15, ft: 3.104e16, in: 3.725e17, cm: 9.461e17, mi: 5.879e12, km: 9.461e12,
        yd: 1.035e16, mm: 9.461e18, µm: 9.461e21, nm: 9.461e24, nmi: 5.108e12,
        fur: 4.698e13, au: 63241.1, pc: 0.306601, Å: 9.461e25, lea: 1.959e12,
        rd: 1.881e15, ch: 4.702e14
    },
    pc: {
        m: 3.086e16, ft: 1.012e17, in: 1.214e18, cm: 3.086e18, mi: 1.917e13, km: 3.086e13,
        yd: 3.374e16, mm: 3.086e19, µm: 3.086e22, nm: 3.086e25, nmi: 1.666e13,
        fur: 1.533e14, au: 206264.8, ly: 3.26156, Å: 3.086e26, lea: 6.394e12,
        rd: 6.136e15, ch: 1.534e15
    }
};

const weightConverter = {
    µg: {
        lbs: 0.00000000220462, kg: 0.000000001, oz: 0.000000035274, g: 0.000001, mg: 0.001, st: 0.000000000157473, ust: 0.00000000000110231, t: 0.000000000001, ct: 0.000005
    },
    mg: {
        lbs: 0.00000220462, kg: 0.000001, oz: 0.000035274, g: 0.001, µg: 1000, st: 0.000000157473, ust: 0.00000000110231, t: 0.000000001, ct: 0.005
    },
    ct: {
        lbs: 0.000440925, kg: 0.0002, oz: 0.00705479, g: 0.2, mg: 200, µg: 200000, st: 0.0000314946, ust: 0.000000220462, t: 0.0000002
    },
    g: {
        lbs: 0.00220462, kg: 0.001, oz: 0.035274, mg: 1000, µg: 1000000, st: 0.000157473, ust: 0.00000110231, t: 0.000001, ct: 5
    },
    oz: {
        lbs: 0.0625, kg: 0.0283495, g: 28.3495, mg: 28349.5, µg: 28349500, st: 0.00446429, ust: 0.00003125, t: 0.0000283495, ct: 141.748
    },
    lbs: {
        kg: 0.453592, oz: 16, g: 453.592, mg: 453592, µg: 453592000, st: 0.0714286, ust: 0.0005, t: 0.000453592, ct: 2267.96
    },
    kg: {
        lbs: 2.20462, oz: 35.274, g: 1000, mg: 1000000, µg: 1000000000, st: 0.157473, ust: 0.00110231, t: 0.001, ct: 5000
    },
    st: {
        lbs: 14, kg: 6.35029, oz: 224, g: 6350.29, mg: 6350290, µg: 6350290000, ust: 0.007, t: 0.00635029, ct: 31751.5
    },
    t: {
        lbs: 2204.62, kg: 1000, oz: 35274, g: 1000000, mg: 1000000000, µg: 1000000000000, st: 157.473, ust: 1.10231, ct: 5000000
    },
    ust: {
        lbs: 2000, kg: 907.185, oz: 32000, g: 907185, mg: 907185000, µg: 907185000000, st: 142.857, t: 0.907185, ct: 4535925
    }
};

const temperatureConverter = {
    fahrenheit: {
        celsius: (value) => (value - 32) * (5 / 9),
        kelvin: (value) => (value - 32) * (5 / 9) + 273.15
    },
    celsius: {
        fahrenheit: (value) => (value * (9 / 5)) + 32,
        kelvin: (value) => value + 273.15
    },
    kelvin: {
        fahrenheit: (value) => (value - 273.15) * (9 / 5) + 32,
        celsius: (value) => value - 273.15
    }
};

const speedConverter = {
    mmps: {
        mps: 0.001, kmph: 0.0036, mph: 0.00223694, ftps: 0.00328084, kn: 0.00194384, mach: 0.000000291545, c: 0.000000001, inps: 0.0393701, cmps: 0.1
    },
    cmps: {
        mps: 0.01, kmph: 0.036, mph: 0.0223694, ftps: 0.0328084, kn: 0.0194384, mach: 0.00000291545, c: 0.00000001, inps: 0.393701, mmps: 10
    },
    inps: {
        mps: 0.0254, kmph: 0.09144, mph: 0.0568182, ftps: 0.0833333, kn: 0.0493737, mach: 0.00000188104, c: 0.0000000254, cmps: 2.54, mmps: 25.4
    },
    ftps: {
        mps: 0.3048, kmph: 1.09728, mph: 0.681818, kn: 0.592484, mach: 0.000888891, c: 0.00000000299792, inps: 12, cmps: 30.48, mmps: 304.8
    },
    mps: {
        kmph: 3.6, mph: 2.23694, ftps: 3.28084, kn: 1.94384, mach: 0.00291545, c: 0.00000000333564, inps: 39.3701, cmps: 100, mmps: 1000
    },
    kmph: {
        mps: 0.277778, mph: 0.621371, ftps: 0.911344, kn: 0.539957, mach: 0.000816273, c: 0.000000000925926, inps: 10.9361, cmps: 27.7778, mmps: 277.778
    },
    mph: {
        mps: 0.44704, kmph: 1.60934, ftps: 1.46667, kn: 0.868976, mach: 0.00130332, c: 0.00000000149116, inps: 17.6, cmps: 44.704, mmps: 447.04
    },
    kn: {
        mps: 0.514444, kmph: 1.852, mph: 1.15078, ftps: 1.68781, mach: 0.0014983, c: 0.000000001716, inps: 20.2537, cmps: 51.4444, mmps: 514.444
    },
    mach: {
        mps: 343, kmph: 1234.8, mph: 767.269, ftps: 1125.33, kn: 661.547, c: 0.00112697, inps: 13504, cmps: 34300, mmps: 343000
    },
    c: {
        mps: 299792458, kmph: 1.079e9, mph: 6.706e8, ftps: 9.836e8, kn: 5.828e8, mach: 874030, inps: 1.181e10, cmps: 2.998e10, mmps: 2.998e11
    }
};

const timeConverter = {
    ns: {
        sec: 1 / 1000000000, ms: 1 / 1000000, µs: 1 / 1000, min: 1 / 60000000000, hr: 1 / 3600000000000, day: 1 / 86400000000000, wk: 1 / 604800000000000, mo: 1 / 2620020000000000, yr: 1 / 31557600000000000
    },
    µs: {
        sec: 1 / 1000000, ms: 1 / 1000, ns: 1000, min: 1 / 60000000, hr: 1 / 3600000000, day: 1 / 86400000000, wk: 1 / 604800000000, mo: 1 / 2620020000000, yr: 1 / 31557600000000
    },
    ms: {
        sec: 1 / 1000, µs: 1000, ns: 1000000, min: 1 / 60000, hr: 1 / 3600000, day: 1 / 86400000, wk: 1 / 604800000, mo: 1 / 2620020000, yr: 1 / 31557600000
    },
    sec: {
        ms: 1000, µs: 1000000, ns: 1000000000, min: 1 / 60, hr: 1 / 3600, day: 1 / 86400, wk: 1 / 604800, mo: 1 / 2620020, yr: 1 / 31557600
    },
    min: {
        sec: 60, ms: 60000, µs: 60000000, ns: 60000000000, hr: 1 / 60, day: 1 / 1440, wk: 1 / 10080, mo: 1 / 43833.6, yr: 1 / 525960
    },
    hr: {
        sec: 3600, ms: 3600000, µs: 3600000000, ns: 3600000000000, min: 60, day: 1 / 24, wk: 1 / 168, mo: 1 / 730.56, yr: 1 / 8766
    },
    day: {
        sec: 86400, ms: 86400000, µs: 86400000000, ns: 86400000000000, min: 1440, hr: 24, wk: 1 / 7, mo: 1 / 30.44, yr: 1 / 365.25
    },
    wk: {
        sec: 604800, ms: 604800000, µs: 604800000000, ns: 604800000000000, min: 10080, hr: 168, day: 7, mo: 1 / 4.345, yr: 1 / 52.177
    },
    mo: {
        sec: 2620020, ms: 2620020000, µs: 2620020000000, ns: 2620020000000000, min: 43833.6, hr: 730.56, day: 30.44, wk: 4.345, yr: 1 / 12
    },
    yr: {
        sec: 31557600, ms: 31557600000, µs: 31557600000000, ns: 31557600000000000, min: 525960, hr: 8766, day: 365.25, wk: 52.177, mo: 12
    }
};

const volumeConverter = {
    ml: {
        lt: 0.001, gal: 0.000264172, cup: 0.00422675, gal_uk: 0.000219969,
        pt: 0.00211338, pt_uk: 0.0017598, qt: 0.00105669, qt_uk: 0.000879876,
        fl_oz: 0.033814, fl_oz_uk: 0.0351951, m3: 1e-6, cm3: 1, in3: 0.0610237,
        ft3: 3.53147e-5, bbl_us: 6.29e-6
    },
    cm3: {
        lt: 0.001, ml: 1, gal: 0.000264172, gal_uk: 0.000219969, cup: 0.00422675,
        pt: 0.00211338, pt_uk: 0.00175975, qt: 0.00105669, qt_uk: 0.000879877,
        fl_oz: 0.033814, fl_oz_uk: 0.0351951, m3: 1e-6, in3: 0.0610237,
        ft3: 3.53147e-5, bbl_us: 6.29e-6
    },
    fl_oz: {
        lt: 0.0295735, ml: 29.5735, gal: 0.0078125, gal_uk: 0.00650527,
        cup: 0.125, pt: 0.0625, pt_uk: 0.0549919, qt: 0.03125,
        qt_uk: 0.0274959, fl_oz_uk: 1.04084, m3: 2.95735e-5, cm3: 29.5735,
        in3: 1.80469, ft3: 0.00104438, bbl_us: 7.7616e-5
    },
    fl_oz_uk: {
        lt: 0.0284131, ml: 28.4131, gal: 0.00750594, gal_uk: 0.00625,
        cup: 0.118388, pt: 0.0591939, pt_uk: 0.05, qt: 0.0295969,
        qt_uk: 0.025, fl_oz: 0.96076, m3: 2.84131e-5, cm3: 28.4131,
        in3: 1.73387, ft3: 0.0010034, bbl_us: 7.551e-5
    },
    in3: {
        lt: 0.0163871, ml: 16.3871, gal: 0.004329, gal_uk: 0.00360465,
        cup: 0.0692641, pt: 0.034632, pt_uk: 0.0288833, qt: 0.017316,
        qt_uk: 0.0144417, fl_oz: 0.554113, fl_oz_uk: 0.576744, m3: 1.63871e-5,
        cm3: 16.3871, ft3: 0.000578704, bbl_us: 0.000103071
    },
    cup: {
        lt: 0.236588, ml: 236.588, gal: 0.0625, gal_uk: 0.052418, pt: 0.5,
        pt_uk: 0.43996, qt: 0.25, qt_uk: 0.21998, fl_oz: 8, fl_oz_uk: 8.45318,
        m3: 2.36588e-4, cm3: 236.588, in3: 14.4375, ft3: 8.34574e-3, bbl_us: 0.0003973
    },
    pt: {
        lt: 0.473176, ml: 473.176, gal: 0.125, gal_uk: 0.104084, cup: 2,
        pt_uk: 0.879877, qt: 0.5, qt_uk: 0.439939, fl_oz: 16, fl_oz_uk: 17.5975,
        m3: 4.73176e-4, cm3: 473.176, in3: 28.875, ft3: 0.0167101, bbl_us: 0.00099392
    },
    pt_uk: {
        lt: 0.568261, ml: 568.261, gal: 0.150119, gal_uk: 0.125, cup: 2.27305,
        pt: 1.20095, qt: 0.600475, qt_uk: 0.5, fl_oz: 19.2152, fl_oz_uk: 20,
        m3: 5.68261e-4, cm3: 568.261, in3: 34.6774, ft3: 0.020068, bbl_us: 0.001191
    },
    qt: {
        lt: 0.946353, ml: 946.353, gal: 0.25, gal_uk: 0.208168, cup: 4,
        pt: 2, pt_uk: 1.75975, qt_uk: 0.879877, fl_oz: 32, fl_oz_uk: 35.1951,
        m3: 9.46353e-4, cm3: 946.353, in3: 57.75, ft3: 0.0334201, bbl_us: 0.00198784
    },
    lt: {
        ml: 1000, gal: 0.264172, cup: 4.22675, gal_uk: 0.219969, pt: 2.11338,
        pt_uk: 1.7598, qt: 1.05669, qt_uk: 0.879876, fl_oz: 33.814,
        fl_oz_uk: 35.1951, m3: 0.001, cm3: 1000, in3: 61.0237, ft3: 0.0353147,
        bbl_us: 0.00629
    },
    qt_uk: {
        lt: 1.13652, ml: 1136.52, gal: 0.300237, gal_uk: 0.25, cup: 4.54609,
        pt: 2.4019, pt_uk: 2, qt: 1.20095, fl_oz: 38.4304, fl_oz_uk: 40,
        m3: 0.00113652, cm3: 1136.52, in3: 69.3549, ft3: 0.040136, bbl_us: 0.002382
    },
    gal: {
        lt: 3.78541, ml: 3785.41, cup: 16, gal_uk: 0.832674, pt: 8,
        pt_uk: 6.87972, qt: 4, qt_uk: 3.43944, fl_oz: 128, fl_oz_uk: 140.007,
        m3: 0.00378541, cm3: 3785.41, in3: 231, ft3: 0.133681, bbl_us: 0.02381
    },
    gal_uk: {
        lt: 4.54609, ml: 4546.09, gal: 1.20095, cup: 19.215, pt: 9.6072,
        pt_uk: 8, qt: 4.8036, qt_uk: 3.99998, fl_oz: 160, fl_oz_uk: 169.565,
        m3: 0.00454609, cm3: 4546.09, in3: 277.419, ft3: 0.159994, bbl_us: 0.02855
    },
    ft3: {
        lt: 28.3168, ml: 28316.8, gal: 7.48052, gal_uk: 6.22883, cup: 119.688,
        pt: 59.8442, pt_uk: 49.8307, qt: 29.9221, qt_uk: 24.9154, fl_oz: 957.506,
        fl_oz_uk: 996.078, m3: 0.0283168, cm3: 28316.8, in3: 1728, bbl_us: 0.198129
    },
    bbl_us: {
        lt: 158.987, ml: 158987, gal: 42, gal_uk: 34.9723, cup: 672,
        pt: 336, pt_uk: 280, qt: 168, qt_uk: 140, fl_oz: 5376,
        fl_oz_uk: 5880, m3: 0.158987, cm3: 158987, in3: 9702, ft3: 5.61458
    },
    m3: {
        lt: 1000, ml: 1000000, gal: 264.172, gal_uk: 219.969, cup: 4226.75,
        pt: 2113.38, pt_uk: 1759.75, qt: 1056.69, qt_uk: 879.877, fl_oz: 33814,
        fl_oz_uk: 35195.1, cm3: 1000000, in3: 61023.7, ft3: 35.3147, bbl_us: 6.29
    }
};

const areaConverter = {
    sqmm: {
        sqmm: 1, sqcm: 0.01, sqin: 0.00155, sqft: 1.0764e-5, sqyd: 1.19599e-6, sqm: 1e-6, are: 1e-8, da: 1e-9, rd: 1.9735e-10, ac: 2.4711e-10, ha: 1e-10, morgen: 1.55e-11, sqkm: 1e-12, sqmi: 3.861e-13, township: 1.0725e-17, barn: 1e28
    },
    sqcm: {
        sqmm: 100, sqcm: 1, sqin: 0.155, sqft: 0.00107639, sqyd: 0.000119599, sqm: 0.0001, are: 1e-6, da: 1e-7, rd: 1.9735e-8, ac: 2.4711e-8, ha: 1e-8, morgen: 1.55e-9, sqkm: 1e-10, sqmi: 3.861e-11, township: 1.0725e-15, barn: 1e26
    },
    sqin: {
        sqmm: 645.16, sqcm: 6.4516, sqin: 1, sqft: 0.00694444, sqyd: 0.000771605, sqm: 0.00064516, are: 6.4516e-6, da: 6.4516e-7, rd: 1.273e-7, ac: 1.5942e-7, ha: 6.4516e-8, morgen: 9.996e-9, sqkm: 6.4516e-10, sqmi: 2.491e-10, township: 6.919e-15, barn: 6.4516e24
    },
    sqft: {
        sqmm: 92903, sqcm: 929.03, sqin: 144, sqft: 1, sqyd: 0.111111, sqm: 0.092903, are: 0.00092903, da: 0.000092903, rd: 0.00001837, ac: 2.2957e-5, ha: 9.2903e-6, morgen: 1.439e-6, sqkm: 9.2903e-8, sqmi: 3.587e-8, township: 9.964e-13, barn: 9.2903e23
    },
    sqyd: {
        sqmm: 836127, sqcm: 8361.27, sqin: 1296, sqft: 9, sqyd: 1, sqm: 0.836127, are: 0.00836127, da: 0.000836127, rd: 0.0001653, ac: 0.000206612, ha: 8.3613e-5, morgen: 1.295e-5, sqkm: 8.3613e-7, sqmi: 3.2283e-7, township: 8.967e-12, barn: 8.3613e24
    },
    sqm: {
        sqmm: 1e6, sqcm: 10000, sqin: 1550, sqft: 10.7639, sqyd: 1.19599, sqm: 1, are: 0.01, da: 0.001, rd: 0.00019735, ac: 0.000247105, ha: 0.0001, morgen: 1.55e-5, sqkm: 1e-6, sqmi: 3.861e-7, township: 1.0725e-11, barn: 1e28
    },
    are: {
        sqmm: 1e8, sqcm: 1e6, sqin: 155000, sqft: 1076.39, sqyd: 119.599, sqm: 100, are: 1, da: 0.1, rd: 0.019735, ac: 0.0247105, ha: 0.01, morgen: 0.00155, sqkm: 0.0001, sqmi: 3.861e-5, township: 1.0725e-9, barn: 1e26
    },
    da: {
        sqmm: 1e9, sqcm: 1e7, sqin: 1.55e6, sqft: 10763.9, sqyd: 1195.99, sqm: 1000, are: 10, da: 1, rd: 0.19735, ac: 0.247105, ha: 0.1, morgen: 0.0155, sqkm: 0.001, sqmi: 0.0003861, township: 1.0725e-8, barn: 1e25
    },
    rd: {
        sqmm: 5.067e9, sqcm: 5.067e7, sqin: 7.854e6, sqft: 54450, sqyd: 6050, sqm: 5067, are: 50.67, da: 5.067, rd: 1, ac: 0.25, ha: 0.101171, morgen: 0.0785, sqkm: 0.005067, sqmi: 0.001956, township: 5.434e-8, barn: 5.067e25
    },
    ac: {
        sqmm: 4.04686e9, sqcm: 4.04686e7, sqin: 6.27264e6, sqft: 43560, sqyd: 4840, sqm: 4046.86, are: 40.4686, da: 4.04686, rd: 4, ac: 1, ha: 0.404686, morgen: 0.314, sqkm: 0.00404686, sqmi: 0.0015625, township: 4.3403e-8, barn: 4.04686e25
    },
    ha: {
        sqmm: 1e10, sqcm: 1e8, sqin: 1.55e7, sqft: 107639.1, sqyd: 11959.9, sqm: 10000, are: 100, da: 10, rd: 9.884, ac: 2.47105, ha: 1, morgen: 0.155, sqkm: 0.01, sqmi: 0.003861, township: 1.0725e-7, barn: 1e26
    },
    morgen: {
        sqmm: 6.452e10, sqcm: 6.452e8, sqin: 1e8, sqft: 6.945e5, sqyd: 7.716e4, sqm: 64516, are: 645.16, da: 64.516, rd: 12.74, ac: 3.184, ha: 6.4516, morgen: 1, sqkm: 0.064516, sqmi: 0.02491, township: 6.919e-7, barn: 6.452e26
    },
    sqkm: {
        sqmm: 1e12, sqcm: 1e10, sqin: 1.55e9, sqft: 1.07639e7, sqyd: 1.19599e6, sqm: 1e6, are: 10000, da: 1000, rd: 197.35, ac: 247.105, ha: 100, morgen: 15.5, sqkm: 1, sqmi: 0.3861, township: 1.0725e-5, barn: 1e30
    },
    sqmi: {
        sqmm: 2.58999e12, sqcm: 2.58999e10, sqin: 4.0145e9, sqft: 2.7878e7, sqyd: 3.0976e6, sqm: 2.58999e6, are: 25899.9, da: 2589.99, rd: 511.14, ac: 640, ha: 259, morgen: 40.14, sqkm: 2.58999, sqmi: 1, township: 0.02778, barn: 2.59e28
    },
    township: {
        sqmm: 9.3239e13, sqcm: 9.3239e11, sqin: 1.445e11, sqft: 1.0036e9, sqyd: 1.115e8, sqm: 9.3239e7, are: 932390, da: 93239, rd: 18400, ac: 23040, ha: 9324, morgen: 1445, sqkm: 93.239, sqmi: 36, township: 1, barn: 9.324e29
    },
    barn: {
        sqmm: 1e-28, sqcm: 1e-26, sqin: 1.55e-25, sqft: 1.0764e-27, sqyd: 1.196e-28, sqm: 1e-28, are: 1e-26, da: 1e-27, rd: 1.9735e-29, ac: 2.471e-29, ha: 1e-28, morgen: 1.55e-29, sqkm: 1e-30, sqmi: 3.861e-31, township: 1.0725e-35, barn: 1
    }
};

const digitalConverter = {
    bits: {
        bits: 1, bytes: 0.125, kilobits: 0.001, kb: 1 / 8192, megabits: 1e-6, mb: 1 / 8.389e6, gigabits: 1e-9, gb: 1 / 8.5899e9, terabits: 1e-12, tb: 1 / 8.7961e12, petabits: 1e-15, pb: 1 / 9.0072e15, exabits: 1e-18, eb: 1 / 9.2234e18, zettabits: 1e-21, zb: 1 / 9.4447e21, yottabits: 1e-24, yb: 1 / 9.6714e24
    },
    bytes: {
        bits: 8, bytes: 1, kilobits: 0.008, kb: 1 / 1024, megabits: 8e-6, mb: 1 / 1.049e6, gigabits: 8e-9, gb: 1 / 1.074e9, terabits: 8e-12, tb: 1 / 1.1e12, petabits: 8e-15, pb: 1 / 1.126e15, exabits: 8e-18, eb: 1 / 1.1529e18, zettabits: 8e-21, zb: 1 / 1.1806e21, yottabits: 8e-24, yb: 1 / 1.2089e24
    },
    kilobits: {
        bits: 1000, bytes: 125, kilobits: 1, kb: 0.12207, megabits: 0.001, mb: 0.00012207, gigabits: 1e-6, gb: 1.1642e-7, terabits: 1e-9, tb: 1.1369e-10, petabits: 1e-12, pb: 1.1102e-13, exabits: 1e-15, eb: 1.0842e-16, zettabits: 1e-18, zb: 1.0595e-19, yottabits: 1e-21, yb: 1.0353e-22
    },
    kb: {
        bits: 8192, bytes: 1024, kilobits: 8.192, kb: 1, megabits: 0.008192, mb: 1 / 1024, gigabits: 8.192e-6, gb: 1 / 1.049e6, terabits: 8.192e-9, tb: 1 / 1.074e9, petabits: 8.192e-12, pb: 1 / 1.1e12, exabits: 8.192e-15, eb: 1 / 1.1529e18, zettabits: 8.192e-18, zb: 1 / 1.1806e21, yottabits: 8.192e-21, yb: 1 / 1.2089e24
    },
    megabits: {
        bits: 1e6, bytes: 125000, kilobits: 1000, kb: 122.07, megabits: 1, mb: 0.119209, gigabits: 0.001, gb: 0.000116415, terabits: 1e-6, tb: 1.1369e-7, petabits: 1e-9, pb: 1.1102e-10, exabits: 1e-12, eb: 1.0842e-13, zettabits: 1e-15, zb: 1.0595e-16, yottabits: 1e-18, yb: 1.0353e-19
    },
    mb: {
        bits: 8.389e6, bytes: 1.049e6, kilobits: 8192, kb: 1024, megabits: 8.192, mb: 1, gigabits: 0.008192, gb: 1 / 1024, terabits: 8.192e-6, tb: 1 / 1.049e6, petabits: 8.192e-9, pb: 1 / 1.074e9, exabits: 8.192e-12, eb: 1 / 1.1529e18, zettabits: 8.192e-15, zb: 1 / 1.1806e21, yottabits: 8.192e-18, yb: 1 / 1.2089e24
    },
    gigabits: {
        bits: 1e9, bytes: 1.25e8, kilobits: 1e6, kb: 122070, megabits: 1000, mb: 119.209, gigabits: 1, gb: 0.116415, terabits: 0.001, tb: 0.000113686, petabits: 1e-6, pb: 1.1102e-7, exabits: 1e-9, eb: 1.0842e-10, zettabits: 1e-12, zb: 1.0595e-13, yottabits: 1e-15, yb: 1.0353e-16
    },
    gb: {
        bits: 8.5899e9, bytes: 1.0737e9, kilobits: 8.389e6, kb: 1.049e6, megabits: 8192, mb: 1024, gigabits: 8.192, gb: 1, terabits: 0.008192, tb: 1 / 1024, petabits: 8.192e-6, pb: 1 / 1.049e6, exabits: 8.192e-9, eb: 1 / 1.1529e18, zettabits: 8.192e-12, zb: 1 / 1.1806e21, yottabits: 8.192e-15, yb: 1 / 1.2089e24
    },
    terabits: {
        bits: 1e12, bytes: 1.25e11, kilobits: 1e9, kb: 1.221e8, megabits: 1e6, mb: 119209, gigabits: 1000, gb: 116.415, terabits: 1, tb: 0.113686, petabits: 0.001, pb: 0.000111022, exabits: 1e-6, eb: 1.0842e-7, zettabits: 1e-9, zb: 1.0595e-10, yottabits: 1e-12, yb: 1.0353e-13
    },
    tb: {
        bits: 8.7961e12, bytes: 1.0995e12, kilobits: 8.5899e9, kb: 1.0737e9, megabits: 8.389e6, mb: 1.049e6, gigabits: 8192, gb: 1024, terabits: 8.192, tb: 1, petabits: 0.008192, pb: 1 / 1024, exabits: 8.192e-6, eb: 1 / 1.049e6, zettabits: 8.192e-9, zb: 1 / 1.1529e18, yottabits: 8.192e-12, yb: 1 / 1.1806e21
    },
    petabits: {
        bits: 1e15, bytes: 1.25e14, kilobits: 1e12, kb: 1.221e11, megabits: 1e9, mb: 1.192e8, gigabits: 1e6, gb: 116415, terabits: 1000, tb: 113.686, petabits: 1, pb: 0.111022, exabits: 0.001, eb: 0.00010842, zettabits: 1e-6, zb: 1.0595e-7, yottabits: 1e-9, yb: 1.0353e-10
    },
    pb: {
        bits: 9.0072e15, bytes: 1.1259e15, kilobits: 8.7961e12, kb: 1.0995e12, megabits: 8.5899e9, mb: 1.0737e9, gigabits: 8.389e6, gb: 1.049e6, terabits: 8192, tb: 1024, petabits: 8.192, pb: 1, exabits: 0.008192, eb: 1 / 1024, zettabits: 8.192e-6, zb: 1 / 1.049e6, yottabits: 8.192e-9, yb: 1 / 1.1529e18
    },
    exabits: {
        bits: 1e18, bytes: 1.25e17, kilobits: 1e15, kb: 1.221e14, megabits: 1e12, mb: 1.192e11, gigabits: 1e9, gb: 1.164e8, terabits: 1e6, tb: 113686, petabits: 1000, pb: 111.022, exabits: 1, eb: 0.10842, zettabits: 0.001, zb: 0.00010595, yottabits: 1e-6, yb: 1.0353e-7
    },
    eb: {
        bits: 9.2234e18, bytes: 1.1529e18, kilobits: 9.0072e15, kb: 1.1259e15, megabits: 8.7961e12, mb: 1.0995e12, gigabits: 8.5899e9, gb: 1.0737e9, terabits: 8.389e6, tb: 1.049e6, petabits: 8192, pb: 1024, exabits: 8.192, eb: 1, zettabits: 0.008192, zb: 1 / 1024, yottabits: 8.192e-6, yb: 1 / 1.049e6
    },
    zettabits: {
        bits: 1e21, bytes: 1.25e20, kilobits: 1e18, kb: 1.221e17, megabits: 1e15, mb: 1.192e14, gigabits: 1e12, gb: 1.164e11, terabits: 1e9, tb: 1.137e8, petabits: 1e6, pb: 111022, exabits: 1000, eb: 108.42, zettabits: 1, zb: 0.10595, yottabits: 0.001, yb: 0.00010353
    },
    zb: {
        bits: 9.4447e21, bytes: 1.1806e21, kilobits: 9.2234e18, kb: 1.1529e18, megabits: 9.0072e15, mb: 1.1259e15, gigabits: 8.7961e12, gb: 1.0995e12, terabits: 8.5899e9, tb: 1.0737e9, petabits: 8.389e6, pb: 1.049e6, exabits: 8192, eb: 1024, zettabits: 8.192, zb: 1, yottabits: 0.008192, yb: 1 / 1024
    },
    yottabits: {
        bits: 1e24, bytes: 1.25e23, kilobits: 1e21, kb: 1.221e20, megabits: 1e18, mb: 1.192e17, gigabits: 1e15, gb: 1.164e14, terabits: 1e12, tb: 1.137e11, petabits: 1e9, pb: 1.11e8, exabits: 1e6, eb: 108420, zettabits: 1000, zb: 105.95, yottabits: 1, yb: 0.10353
    },
    yb: {
        bits: 9.6714e24, bytes: 1.2089e24, kilobits: 9.4447e21, kb: 1.1806e21, megabits: 9.2234e18, mb: 1.1529e18, gigabits: 9.0072e15, gb: 1.1259e15, terabits: 8.7961e12, tb: 1.0995e12, petabits: 8.5899e9, pb: 1.0737e9, exabits: 8.389e6, eb: 1.049e6, zettabits: 8192, zb: 1024, yottabits: 8.192, yb: 1
    }
};

const lengthUnits = [
    { unit: "Å", name: "Ångstroms (Å)" },
    { unit: "nm", name: "Nanometers (nm)" },
    { unit: "µm", name: "Micrometers (µm)" },
    { unit: "mm", name: "Millimeters (mm)" },
    { unit: "cm", name: "Centimeters (cm)" },
    { unit: "in", name: "Inches (in)" },
    { unit: "ft", name: "Feet (ft)" },
    { unit: "yd", name: "Yards (yd)" },
    { unit: "m", name: "Meters (m)" },
    { unit: "rd", name: "Rods (rd)" },
    { unit: "ch", name: "Chains (ch)" },
    { unit: "fur", name: "Furlongs (fur)" },
    { unit: "km", name: "Kilometers (km)" },
    { unit: "mi", name: "Miles (mi)" },
    { unit: "nmi", name: "Nautical Miles (nmi)" },
    { unit: "lea", name: "Leagues (lea)" },
    { unit: "au", name: "Astronomical Units (au)" },
    { unit: "ly", name: "Light Years (ly)" },
    { unit: "pc", name: "Parsecs (pc)" }
];

const weightUnits = [
    { unit: "µg", name: "Micrograms (µg)" },
    { unit: "mg", name: "Milligrams (mg)" },
    { unit: "ct", name: "Carats (ct)" },
    { unit: "g", name: "Grams (g)" },
    { unit: "oz", name: "Ounces (oz)" },
    { unit: "lbs", name: "Pounds (lbs)" },
    { unit: "kg", name: "Kilograms (kg)" },
    { unit: "st", name: "Stones (st)" },
    { unit: "t", name: "Metric Tons (t)" },
    { unit: "ust", name: "US Tons (ust)" }
];

const temperatureUnits = [
    { unit: "fahrenheit", name: "Fahrenheit (°F)" },
    { unit: "celsius", name: "Celsius (°C)" },
    { unit: "kelvin", name: "Kelvin (K)" }
];

const speedUnits = [
    { unit: "mmps", name: "Millimeters per second (mm/s)" },
    { unit: "cmps", name: "Centimeters per second (cm/s)" },
    { unit: "inps", name: "Inches per second (in/s)" },
    { unit: "ftps", name: "Feet per second (ft/s)" },
    { unit: "mps", name: "Meters per second (m/s)" },
    { unit: "kmh", name: "Kilometers per hour (km/h)" },
    { unit: "mph", name: "Miles per hour (mph)" },
    { unit: "kn", name: "Knots (kn)" },
    { unit: "mach", name: "Mach (Ma)" },
    { unit: "c", name: "Speed of Light (c)" }
];

const timeUnits = [
    { unit: "ns", name: "Nanoseconds (ns)" },
    { unit: "µs", name: "Microseconds (µs)" },
    { unit: "ms", name: "Milliseconds (ms)" },
    { unit: "sec", name: "Seconds (sec)" },
    { unit: "min", name: "Minutes (min)" },
    { unit: "hr", name: "Hours (hr)" },
    { unit: "day", name: "Days (day)" },
    { unit: "wk", name: "Weeks (wk)" },
    { unit: "mo", name: "Months (mo)" },
    { unit: "yr", name: "Years (yr)" }
];

const volumeUnits = [
    { unit: "ml", name: "Milliliters (ml)" },
    { unit: "cm3", name: "Cubic Centimeters (cm³)" },
    { unit: "fl_oz", name: "Fluid Ounces (US fl oz)" },
    { unit: "fl_oz_uk", name: "Fluid Ounces (UK fl oz)" },
    { unit: "in3", name: "Cubic Inches (in³)" },
    { unit: "cup", name: "Cups (US cups)" },
    { unit: "pt", name: "Pints (US pt)" },
    { unit: "pt_uk", name: "Pints (UK pt)" },
    { unit: "qt", name: "Quarts (US qt)" },
    { unit: "lt", name: "Liters (lt)" },
    { unit: "qt_uk", name: "Quarts (UK qt)" },
    { unit: "gal", name: "Gallons (US gal)" },
    { unit: "gal_uk", name: "Gallons (UK gal)" },
    { unit: "ft3", name: "Cubic Feet (ft³)" },
    { unit: "bbl_us", name: "Barrels (US bbl)" },
    { unit: "m3", name: "Cubic Meters (m³)" }
];

const areaUnits = [
    { unit: "sqmm", name: "Square Millimeters (mm²)" },
    { unit: "sqcm", name: "Square Centimeters (cm²)" },
    { unit: "sqin", name: "Square Inches (in²)" },
    { unit: "sqft", name: "Square Feet (ft²)" },
    { unit: "sqyd", name: "Square Yards (yd²)" },
    { unit: "sqm", name: "Square Meters (m²)" },
    { unit: "are", name: "Are (a)" },
    { unit: "da", name: "Decare (da)" },
    { unit: "rd", name: "Roods (rd)" },
    { unit: "ac", name: "Acres (ac)" },
    { unit: "ha", name: "Hectares (ha)" },
    { unit: "morgen", name: "Morgen" },
    { unit: "sqkm", name: "Square Kilometers (km²)" },
    { unit: "sqmi", name: "Square Miles (mi²)" },
    { unit: "township", name: "Township" },
    { unit: "barn", name: "Barn (b)" }
];

const digitalUnits = [
    { unit: "bits", name: "Bits (b)" },
    { unit: "bytes", name: "Bytes (B)" },
    { unit: "kilobits", name: "Kilobits (Kb)" },
    { unit: "kb", name: "Kilobytes (KB)" },
    { unit: "megabits", name: "Megabits (Mb)" },
    { unit: "mb", name: "Megabytes (MB)" },
    { unit: "gigabits", name: "Gigabits (Gb)" },
    { unit: "gb", name: "Gigabytes (GB)" },
    { unit: "terabits", name: "Terabits (Tb)" },
    { unit: "tb", name: "Terabytes (TB)" },
    { unit: "petabits", name: "Petabits (Pb)" },
    { unit: "pb", name: "Petabytes (PB)" },
    { unit: "exabits", name: "Exabits (Eb)" },
    { unit: "eb", name: "Exabytes (EB)" },
    { unit: "zettabits", name: "Zettabits (Zb)" },
    { unit: "zb", name: "Zettabytes (ZB)" },
    { unit: "yottabits", name: "Yottabits (Yb)" },
    { unit: "yb", name: "Yottabytes (YB)" }
];

export const unitRegistry = {
    length: {
        converter: lengthConverter,
        units: lengthUnits
    },
    speed: {
        converter: speedConverter,
        units: speedUnits
    },
    temperature: {
        converter: temperatureConverter,
        units: temperatureUnits
    },
    weight: {
        converter: weightConverter,
        units: weightUnits
    },
    area: {
        converter: areaConverter,
        units: areaUnits
    },
    time: {
        converter: timeConverter,
        units: timeUnits
    },
    volume: {
        converter: volumeConverter,
        units: volumeUnits
    },
    digital: {
        converter: digitalConverter,
        units: digitalUnits
    }
};