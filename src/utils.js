export function createHr() {
  const hr = document.createElement('hr');
  return hr;
}
export const handleKeyPress = (e, person) => {
  if (e.keyCode === 13) {
    addItem(person);
  }
};
