document.addEventListener("DOMContentLoaded", () => {
    const petalosContainer = document.querySelector(".petalos");

    const numPetalos = 12; // Número de pétalos
    const radio = 45; // Distancia del centro

    for (let i = 0; i < numPetalos; i++) {
        const petalo = document.createElement("div");
        petalo.classList.add("petalo");

        // Calcular la posición de cada pétalo
        const angle = i * (360 / numPetalos);
        const radianes = angle * (Math.PI / 180);
        const x = radio * Math.cos(radianes);
        const y = radio * Math.sin(radianes);

        petalo.style.left = `${x + 50}px`;
        petalo.style.top = `${y + 50}px`;

        // Definimos la rotación como una variable CSS para la animación
        petalo.style.setProperty("--rotacion", `${angle}deg`);

        petalosContainer.appendChild(petalo);
    }
});
