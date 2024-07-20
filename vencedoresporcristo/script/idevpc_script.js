// Este script aguarda o carregamento completo do DOM. Após o carregamento, ele obtém o ano atual
// usando a função getFullYear() do objeto Date. Então, atualiza o conteúdo do elemento com ID 'copyright'
// para incluir o símbolo de direitos autorais, o ano atual e o texto 'Vencedores por Cristo'.
document.addEventListener('DOMContentLoaded', function() {
    var currentYear = new Date().getFullYear();
    document.getElementById('copyright').innerHTML = '&copy; ' + currentYear + ' Vencedores por Cristo';
});