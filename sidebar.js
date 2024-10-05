const openButton = document.getElementById('open-sidebar');
const sidebar = document.getElementById('sidebar');

openButton.addEventListener('click', function() {
  if (sidebar.style.left === '-250px') {
    sidebar.style.left = '0';
  } else {
    sidebar.style.left = '-250px';
  }
});
