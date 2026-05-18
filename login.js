document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const userInput = document.getElementById('username').value;
    
    // Simulación de extracción de nombre dinámico
    let displayName = userInput.split('@')[0]; 
    // Capitalizar la primera letra para presentación esteta
    displayName = displayName.charAt(0).toUpperCase() + displayName.slice(1);

    // Si se introduce una cuenta de prueba específica, asigna el nombre completo estructurado
    if(userInput.toLowerCase() === 'jorge' || userInput.toLowerCase() === 'jorge@correo.com') {
        displayName = 'Jorge Luis';
    }

    // Almacenar los datos de la sesión del usuario en el navegador
    localStorage.setItem('activeUser', displayName);
    
    // Redirección directa al tablero principal
    window.location.href = 'dashboard.html';
});