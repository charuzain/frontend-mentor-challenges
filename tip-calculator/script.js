let billValue;
let noOfPeople;
let tipValue;
let customTip;
let billError;
let peopleError;
let tipError;

const bill = document.querySelector('#bill');
const people = document.querySelector('#people');
const tipOptions = document.querySelectorAll('input[name="tip"]');
const customTipEl = document.querySelector('#customTip');
const resetBtn = document.querySelector('#reset-btn');
const peopleErr = document.querySelector('#people-error');
const billErr = document.querySelector('#bill-error');
const tipErr = document.querySelector('#tip-error');
const tip = document.querySelector('#tip');
const totalBillPerPerson = document.querySelector('#billTotal');
const form = document.querySelector('#form');

const calculatePerPerson = () => {
  const validTip = customTip ?? tipValue;
  if (
    validateBill(billValue) &&
    validateNumOfPerson(noOfPeople) &&
    !isNaN(validTip)
  ) {
    const tipPerPerson = (billValue / noOfPeople) * (validTip / 100);
    const totalBill = billValue / noOfPeople + tipPerPerson;
    tip.textContent = `$${tipPerPerson.toFixed(2)}`;
    totalBillPerPerson.textContent = `$${totalBill.toFixed(2)}`;
    resetBtn.disabled = false;
  } else {
    resetBtn.disabled = true;
  }
};

const validateBill = (billValue) => {
  if (isNaN(billValue)) {
    billError = 'Invalid value';
    return false;
  } else if (billValue < 0) {
    billError = "Value can't be negative";
    return false;
  } else if (billValue === 0) {
    billError = "Value can't be zero";
    return false;
  } else {
    billError = 'Valid';
    return true;
  }
};

const validateNumOfPerson = (value) => {
  if (value === '') {
    return true;
  }
  let parsedNum = parseFloat(value);

  if (isNaN(parsedNum)) {
    peopleError = 'Invalid';
    return false;
  } else if (parsedNum < 0) {
    peopleError = "can't be negative";
    return false;
  } else if (parsedNum === 0) {
    peopleError = "can't be zero";
    return false;
  } else {
    return true;
  }
};

const validateTip = (tip) => {
  if (tip < 0) {
    tipError = 'Cant be negative';
    return false;
  } else if (tip >= 0) {
    return true;
  } else {
    return true;
  }
};

bill.addEventListener('input', () => {
  billValue = parseFloat(bill.value);
  let isBillValid = validateBill(billValue);

  if (isBillValid) {
    billErr.style.display = 'none';
    billErr.innerHTML = '';

    calculatePerPerson();
  } else {
    billErr.style.display = 'block';
    billErr.innerHTML = billError;
    resetBtn.disabled = true;
    tip.textContent = '$0.00';
    totalBillPerPerson.textContent = '$0.00';
  }
});

people.addEventListener('input', () => {
  noOfPeople = parseFloat(people.value);
  let noOfPeopleValid = validateNumOfPerson(people.value);
  if (noOfPeopleValid) {
    peopleErr.style.display = 'none';
    peopleErr.innerHTML = '';
    calculatePerPerson();
  } else {
    peopleErr.style.display = 'block';
    peopleErr.innerHTML = peopleError;
    resetBtn.disabled = true;
    tip.textContent = '$0.00';
    totalBillPerPerson.textContent = '$0.00';
  }
});

tipOptions.forEach((tip) => {
  tip.addEventListener('click', (e) => {
    customTip = null;
    customTipEl.value = '';

    tipValue = parseFloat(e.target.value);
    calculatePerPerson();
  });
});

customTipEl.addEventListener('input', () => {
  tipValue = null;
  tipOptions.forEach((tip) => {
    tip.checked = false;
  });
  customTip = parseFloat(customTipEl.value);
  const isTipValid = validateTip(customTip);

  if (isTipValid) {
    tipErr.style.display = 'none';
    tipErr.innerHTML = '';
    calculatePerPerson();
  } else {
    tipErr.style.display = 'block';
    tipErr.innerHTML = tipError;
    resetBtn.disabled = true;
    tip.textContent = '$0.00';
    totalBillPerPerson.textContent = '$0.00';
  }
});

resetBtn.addEventListener('click', () => {
  console.log('cl');
  form.reset();
  tip.textContent = '$0.00';
  totalBillPerPerson.textContent = '$0.00';
  noOfPeople = 0;
  tipValue = 0;
  customTip = 0;
});
