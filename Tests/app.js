    const ultimasNoticias = [
    {
    imagem:"https://via.placeholder.com/200x100",
    titulo:"Notícia sobre Economia",
    resumo:"A economia global enfrenta desafios em meio à pandemia.",
    link:"#"
    },
    {
    imagem:"https://via.placeholder.com/200x100",
    titulo:"Eleições 2023",
    resumo:"Candidatos apresentam propostas para o próximo mandato.",
    link:"#"
    },
    {
    imagem:"https://via.placeholder.com/200x100",
    titulo:"Campeonato Brasileiro",
    resumo:"Confira os resultados da última rodada do campeonato.",
    link:"#"
    }
    ];
    
    // Função para adicionar as notícias na página
    function carregarNoticias() {
    const container = document.getElementById("noticias-container");
    
    ultimasNoticias.forEach(noticia => {
    const article = document.createElement("article");
    article.innerHTML = `
    <img src="${noticia.imagem}" alt="${noticia.titulo}">
    <h3>${noticia.titulo}</h3 >
    <p > ${noticia.resumo}</p >
    <a href ="${noticia.link}" > Leia mais...</a >
    `;
    container.appendChild(article);
    });
    }
    
    // Carrega as notícias quando a página é carregada
    window.onload = carregarNoticias;