// Aguarda o documento carregar
document.addEventListener('DOMContentLoaded', () => {
    
    // Seleciona o formulário de contato
    const contactForm = document.getElementById('contactForm');

    // Adiciona evento de envio ao formulário
    if(contactForm) {
        contactForm.addEventListener('submit', function(event) {
            // Previne o recarregamento da página
            event.preventDefault();
            
            // Simula o envio de uma mensagem
            alert('Obrigado! Sua mensagem sobre o agronegócio sustentável foi enviada com sucesso. Entraremos em contato em breve.');
            
            // Limpa os campos do formulário
            contactForm.reset();
        });
    }

});