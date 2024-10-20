// Inicialização do Swiper.js para o carrossel
var swiper = new Swiper('.swiper-container', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// Inicialização do AOS.js para animações
AOS.init();

// Consumo da API de serviços
fetch('https://api.example.com/services')
    .then(response => response.json())
    .then(data => {
        let services = '';
        data.forEach(service => {
            services += `
                <div class="col-md-4" data-aos="fade-up">
                    <div class="service-card p-3 bg-white">
                        <h3>${service.name}</h3>
                        <p>${service.description}</p>
                    </div>
                </div>`;
        });
        document.getElementById('services-content').innerHTML = services;
    })
    .catch(error => console.error('Erro ao carregar os serviços:', error));

// Formulário de Contato
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    // Validação simples
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        // Integração com EmailJS
        // Enviar os dados do formulário...
        alert('Mensagem enviada com sucesso!');
    } else {
        alert('Preencha todos os campos obrigatórios!');
    }
});
