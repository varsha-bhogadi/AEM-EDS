export default function decorate(block) {
  block.classList.add('eds-enablement-block');

  const rows = [...block.children];

  rows.forEach((row) => {
    row.classList.add('eds-enablement-row');
  });
}
