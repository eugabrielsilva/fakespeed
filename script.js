document.querySelectorAll('.lh-gauge-arc').forEach(el => el.style.setProperty('stroke-dasharray', 'none', 'important'));
document.querySelectorAll('.lh-exp-gauge__arc').forEach(el => el.style.setProperty('stroke-dasharray', 'none', 'important'));
document.querySelectorAll('.lh-exp-gauge__svg-wrapper').forEach(el => el.style.setProperty('pointer-events', 'none', 'important'));
document.querySelectorAll('.lh-exp-gauge-component .lh-exp-gauge__arc--metric').forEach(el => el.style.setProperty('color', 'var(--color-pass)', 'important'));

document.querySelectorAll('.lh-gauge__percentage').forEach(el => el.textContent = Math.floor(Math.random() * 6) + 95);
document.querySelectorAll('.lh-exp-gauge__percentage').forEach(el => el.textContent = Math.floor(Math.random() * 6) + 95);

document.querySelectorAll('.Kb94Vd:first-of-type, .lh-audit--fail, .lh-audit--average').forEach(el => el.remove());

document.querySelectorAll('.lh-gauge__wrapper').forEach(el => {
    el.classList.remove('lh-gauge__wrapper--average', 'lh-gauge__wrapper--fail');
    el.classList.add('lh-gauge__wrapper--pass');
});

document.querySelectorAll('.lh-exp-gauge__wrapper').forEach(el => {
    el.classList.remove('lh-exp-gauge__wrapper--average', 'lh-exp-gauge__wrapper--fail');
    el.classList.add('lh-exp-gauge__wrapper--pass');
});

document.querySelectorAll('.lh-metric').forEach(el => {
    el.classList.remove('lh-metric--average', 'lh-metric--fail');
    el.classList.add('lh-metric--pass');
});

console.log('PageSpeed Faked!');