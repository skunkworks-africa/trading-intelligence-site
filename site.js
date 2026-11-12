'use strict';
const stages = [
  { label: 'START WITH THE SOURCE', title: 'A history you can trace.', copy: 'Collect completed candles with a read-only MT5 script. Record the provider, instrument, timeframe and verified broker timezone alongside the original export.', items: ['Completed candles only', 'Explicit timezone and daylight-saving review', 'Original file preserved with a SHA-256 checksum'] },
  { label: 'MAKE THE EVIDENCE REVIEWABLE', title: 'Confidence begins with checks.', copy: 'Inspect timestamps, OHLC price relationships and gaps. Review source rights and dataset provenance before approving real market history for research.', items: ['Consistent prices and increasing timestamps', 'Gaps identified for explicit review', 'Source rights and independent dataset approval'] },
  { label: 'TURN ASSUMPTIONS INTO QUESTIONS', title: 'Test an idea, then challenge it.', copy: 'Use approved data to explore strategy signals and offline simulations. Make costs and risk assumptions explicit, and treat every result as evidence to question.', items: ['Offline, bar-based strategy simulation', 'Explicit trading-cost and risk assumptions', 'Out-of-sample evaluation planned; execution disabled'] }
];
document.querySelectorAll('[data-step]').forEach(button => {
  button.addEventListener('click', () => {
    const stage = stages[Number(button.dataset.step)];
    document.querySelectorAll('[data-step]').forEach(item => {
      const selected = item === button;
      item.classList.toggle('active', selected);
      item.setAttribute('aria-pressed', String(selected));
    });
    document.getElementById('workflow-label').textContent = stage.label;
    document.getElementById('workflow-title').textContent = stage.title;
    document.getElementById('workflow-copy').textContent = stage.copy;
    document.getElementById('workflow-list').replaceChildren(...stage.items.map(text => {
      const li = document.createElement('li');
      li.textContent = text;
      return li;
    }));
  });
});
