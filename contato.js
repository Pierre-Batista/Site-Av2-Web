// Função de Máscara de Telefone
const phoneInput = document.getElementById('telefone');
phoneInput.addEventListener('input', function (e) {
    let x = e.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,4})(\d{0,4})/);
    e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
});

// Botão de "Scroll para o Topo"
const topButton = document.createElement('button');
topButton.innerText = '⬆';
topButton.id = 'topButton';
document.body.appendChild(topButton);

// Exibir o botão ao rolar para baixo
window.onscroll = function() {
    if (window.scrollY > 200) {
        topButton.style.display = 'block';
    } else {
        topButton.style.display = 'none';
    }
};

// Rolar para o topo ao clicar
topButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Modal de Confirmação de Envio do Formulário
function openModal() {
    const modal = document.getElementById('confirmationModal');
    modal.style.display = 'block';
}

// Fechar o modal ao clicar no botão de fechar
document.querySelector('.close-modal').addEventListener('click', function() {
    document.getElementById('confirmationModal').style.display = 'none';
});

// Ação do botão de envio do formulário para exibir o modal
document.querySelector('.submit-btn').addEventListener('click', function(event) {
    event.preventDefault(); // Impede o envio real do formulário para a demonstração
    openModal();
});

// Animação de Rolagem Suave para o Menu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animação de Fade-In para elementos ao rolar a página
window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((element) => {
        const position = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        if (position < screenPosition) {
            element.classList.add('active');
        }
    });
});

// Função de Inicialização do Google Maps (substitua 'SUA_CHAVE' pela sua chave da API do Google Maps)
function initMap() {
    const location = { lat: -22.9068, lng: -43.1729 }; // Coordenadas de exemplo (Rio de Janeiro)
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: location,
    });
    const marker = new google.maps.Marker({
        position: location,
        map: map,
    });
}
