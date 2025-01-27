// Extract data from Json
fetch('Files/Projects.json')
  .then(response => response.json())
  .then(data => {
    const contenedor_tarjeta = document.getElementById('cont_projects');

    data.projects.forEach(function(datos) {
      const card = document.createElement('div');
      card.classList.add('card');

      // Project Image
      const imagen = document.createElement('img');
      imagen.classList.add('img-project');
      imagen.src = datos.imagen;
      imagen.alt = datos.datos;
      card.appendChild(imagen);

      const bottomSection = document.createElement('div');
      bottomSection.classList.add('bottom-section');

      const titleSpan = document.createElement('span');
      titleSpan.classList.add('title', 'text-game');
      titleSpan.textContent = datos.title_project;
      bottomSection.appendChild(titleSpan);

      const row1Div = document.createElement('div');
      row1Div.classList.add('row', 'row1');

      const item1Div = document.createElement('div');
      item1Div.classList.add('item');
      const yearBigText = document.createElement('span');
      yearBigText.classList.add('big-text');
      yearBigText.textContent = datos.year;
      item1Div.appendChild(yearBigText);
      const yearRegularText = document.createElement('span');
      yearRegularText.classList.add('regular-text');
      yearRegularText.textContent = datos.title_year;
      item1Div.appendChild(yearRegularText);
      row1Div.appendChild(item1Div);

      const item2Div = document.createElement('div');
      item2Div.classList.add('item');
      const statusBigText = document.createElement('span');
      statusBigText.classList.add('big-text');
      statusBigText.textContent = datos.status;
      item2Div.appendChild(statusBigText);
      const statusRegularText = document.createElement('span');
      statusRegularText.classList.add('regular-text');
      statusRegularText.textContent = datos.title_status;
      item2Div.appendChild(statusRegularText);
      row1Div.appendChild(item2Div);

      const redirectionDiv = document.createElement('div');
      redirectionDiv.classList.add('redirection');
      const link = document.createElement('a');
      link.href = datos.link;
      const rightAngleIcon = document.createElement('i');
      rightAngleIcon.classList.add('bi', 'bi-folder-symlink');
      link.appendChild(rightAngleIcon);
      redirectionDiv.appendChild(link);
      row1Div.appendChild(redirectionDiv);

      bottomSection.appendChild(row1Div);
      card.appendChild(bottomSection);

      contenedor_tarjeta.appendChild(card);
    });
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

// Animation Galaga
document.addEventListener('DOMContentLoaded', function() {
  const gameArea = document.querySelector('.game-area');
  const enemies = document.querySelectorAll('.enemy');

  function shootBullet(enemy) {
      const bullet = document.createElement('div');
      bullet.className = 'bullet';
      bullet.style.left = enemy.offsetLeft + (enemy.offsetWidth / 2 - 2.5) + 'px';
      bullet.style.top = enemy.offsetTop + enemy.offsetHeight + 'px';
      gameArea.appendChild(bullet);

      const bulletInterval = setInterval(function() {
          bullet.style.top = bullet.offsetTop + 5 + 'px';
          if (bullet.offsetTop > gameArea.offsetHeight) {
              clearInterval(bulletInterval);
              bullet.remove();
          }
      }, 50);
  }

  function startShooting() {
      enemies.forEach(enemy => {
          setInterval(() => {
              shootBullet(enemy);
          }, 2000);
      });
  }

  startShooting();
});

// Displacement Animation
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible');
    }
  });
}, {
  threshold: 0.25
});

const cards = document.querySelectorAll('.card');
cards.forEach(card => {
  observer.observe(card);
});

const scrollButton = document.getElementById('mover');
scrollButton.addEventListener('click', function() {
  const destino = document.getElementById('projects');
  destino.scrollIntoView({ behavior: 'smooth' });

  window.setTimeout(() => {
    window.scrollBy(0, -20);
  }, 500);
});