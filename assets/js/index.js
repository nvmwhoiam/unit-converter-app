import { unitRegistry } from './functions.js';

function setClosedToOpen(selector) {
    if (!selector) return;
    selector.setAttribute("data-state", "open");
}

function setClosingToClosed(selector) {
    if (!selector) return;
    selector.setAttribute("data-state", "closing");
    selector.addEventListener("animationend", function () {
        selector.setAttribute("data-state", "closed");
    }, { once: true });
}

const currentUnit = document.querySelector('[data-current_unit]');

const conversionInput = document.querySelector('[name="conversion_number"]');
const unitFrom = document.querySelector('#unit_from');
const unitTo = document.querySelector('#unit_to');
const result = document.querySelector('#result');

function calculateAndDisplayResult() {
    const selectedOptionFrom = unitFrom.options[unitFrom.selectedIndex];
    const selectedOptionTo = unitTo.options[unitTo.selectedIndex];
    const inputValue = parseFloat(conversionInput.value);

    if (!conversionInput.value.trim() || isNaN(inputValue)) {
        result.innerHTML = '0.00';
        return;
    }

    const fromUnit = selectedOptionFrom.value;
    const toUnit = selectedOptionTo.value;

    const convertedValue = currentUnitSelect(inputValue, fromUnit, toUnit);

    result.innerHTML = convertedValue;
}

function currentUnitSelect(inputValue, fromUnit, toUnit) {
    const unitName = currentUnit.getAttribute('data-current_unit');
    const unitConfig = unitRegistry[unitName];

    if (!unitConfig) {
        console.error(`Unknown unit type: ${unitName}`);
        return null;
    }

    if (fromUnit === toUnit) {
        return inputValue;
    }

    if (unitName === 'temperature') {
        return unitConfig.converter[fromUnit][toUnit](inputValue);
    }

    return (inputValue * unitConfig.converter[fromUnit][toUnit]);
}

function populateSelectOptions(element, optionsArray, isTo) {
    element.innerHTML = '';

    optionsArray.forEach((optionData, index) => {
        const option = document.createElement('option');
        option.value = optionData.unit;
        option.textContent = optionData.name;

        if (isTo && index === 1) {
            option.selected = true;
        }

        element.appendChild(option);
    });
}

function initializeUnitConverter() {
    const unitName = currentUnit.getAttribute('data-current_unit');
    const unitConfig = unitRegistry[unitName];

    if (!unitConfig) {
        console.error(`Unknown unit type: ${unitName}`);
        return;
    }

    populateSelectOptions(unitFrom, unitConfig.units);
    populateSelectOptions(unitTo, unitConfig.units, true);
}

document.addEventListener('click', (e) => {
    const swapButton = e.target.closest('[data-button="swap"]');
    if (swapButton) {
        const fromIndex = unitFrom.selectedIndex;
        const toIndex = unitTo.selectedIndex;

        unitFrom.selectedIndex = toIndex;
        unitTo.selectedIndex = fromIndex;

        calculateAndDisplayResult();
    }

    const openCloseNav = e.target.closest('[data-button="nav"]');
    if (openCloseNav) {
        const linksWrapper = document.querySelector('#links_wrapper');
        const isOpen = linksWrapper.getAttribute('data-state') === 'open';
        if (!isOpen) {
            setClosedToOpen(linksWrapper);
        } else {
            setClosingToClosed(linksWrapper);
        }
    }
});

conversionInput.addEventListener('input', calculateAndDisplayResult);
unitFrom.addEventListener('change', calculateAndDisplayResult);
unitTo.addEventListener('change', calculateAndDisplayResult);

initializeUnitConverter();