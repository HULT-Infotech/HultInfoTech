
    const container = document.querySelector('.container');

    container.addEventListener('mousemove', (e) => {
        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left; // X position of the mouse inside the container
        const y = e.clientY - rect.top;  // Y position of the mouse inside the container

        // Calculate the dynamic shadow
        const glowX = (x / rect.width) * 100; // Relative X position as a percentage
        const glowY = (y / rect.height) * 100; // Relative Y position as a percentage

        container.style.boxShadow = `
            ${glowX}px ${glowY}px 30px rgba(240, 75, 55, 0.7), 
            ${glowX / 2}px ${glowY / 2}px 40px rgba(240, 75, 55, 0.6),
            0 0 50px rgba(240, 75, 55, 0.5)
        `;
    });

    container.addEventListener('mouseleave', () => {
        // Reset the shadow when the mouse leaves the container
        container.style.boxShadow = `
            0 10px 30px rgba(240, 75, 55, 0.7), 
            0 6px 20px rgba(240, 75, 55, 0.5)
        `;
    });

