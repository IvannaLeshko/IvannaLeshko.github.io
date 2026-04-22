function send(e) {
  e.preventDefault();
  const ok = document.getElementById('ok');
  ok.style.display = 'block';
  e.target.reset();
  setTimeout(() => ok.style.display = 'none', 5000);
}