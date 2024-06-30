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