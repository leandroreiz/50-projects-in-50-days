const range = document.getElementById('range');

range.addEventListener('input', (e) => {
  const value = +e.target.value;
  const label = e.target.nextElementSibling;

  const rangeWidth = getComputedStyle(e.target).getPropertyValue('width');
  const labelWidth = getComputedStyle(label).getPropertyValue('width');

  const nRangeWidth = +rangeWidth.substring(0, rangeWidth.length - 2);
  const nLabelWidth = +labelWidth.substring(0, labelWidth.length - 2);

  const max = +e.target.max;
  const min = +e.target.min;

  const left =
    value * (nRangeWidth / max) -
    nLabelWidth / 2 +
    scale(value, min, max, 10, -10);

  label.style.left = `${left}px`;

  label.innerHTML = value;
});

function scale(num, inMin, inMax, outMin, outMax) {
  return ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
