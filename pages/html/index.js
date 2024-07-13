const html =
  '<!DOCTYPE html>\
<html lang="pt-BR">\
<head>\
    <meta charset="UTF-8">\
    <meta name="viewport" content="width=device-width, initial-scale=1.0">\
    <title>Felipe Alves Bevilacqua</title>\
    <style>\
        body {\
            font-family: Arial, sans-serif;\
            margin: 0;\
            padding: 0;\
            background-color: #f0f8ff;\
            color: #333;\
        }\
        header {\
            background-color: #4682b4;\
            color: white;\
            padding: 20px;\
            text-align: center;\
        }\
        nav {\
            display: flex;\
            justify-content: center;\
            background-color: #87ceeb;\
            padding: 10px;\
        }\
        nav a {\
            margin: 0 15px;\
            color: white;\
            text-decoration: none;\
        }\
        section {\
            padding: 20px;\
        }\
        footer {\
            background-color: #4682b4;\
            color: white;\
            text-align: center;\
            padding: 10px;\
            position: fixed;\
            width: 100%;\
            bottom: 0;\
        }\
        .sobre img {\
            width: 150px;\
            border-radius: 50%;\
        }\
        .container {\
            display: flex;\
            flex-direction: column;\
            align-items: center;\
            max-width: 800px;\
            margin: auto;\
        }\
        .card {\
            background-color: white;\
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\
            margin: 20px 0;\
            padding: 20px;\
            width: 100%;\
        }\
        @media (max-width: 600px) {\
            nav {\
                flex-direction: column;\
            }\
            .sobre {\
                text-align: center;\
            }\
            .sobre img {\
                margin: 0 auto;\
            }\
        }\
    </style>\
</head>\
<body>\
    <header>\
        <h1>Felipe Alves Bevilacqua</h1>\
    </header>\
    <nav>\
        <a href="#sobre">Sobre</a>\
        <a href="#portfolio">Portfólio</a>\
        <a href="#blog">Blog</a>\
        <a href="#contato">Contato</a>\
    </nav>\
    <section id="sobre">\
        <div class="container">\
            <div class="card sobre">\
                <img src="../assets/minha_foto.jpeg" alt="Foto de Felipe Alves Bevilacqua">\
                <h2>Sobre</h2>\
                <p>Sou engenheiro de software com experiência\
                 Full Stack trabalhando com as linguagens Java,\
                  Javascript, Groovy, Typescript, HTML e HQL.\
                   Também utilizo as aplicações e metodologias IntelliJ,\
                    Maven, Springframework, Hibernate, Git, TDD, SOLID, Linux,\
                     PostgreSQL, Kanban, Jenkins, Docker, Angular e AWS. Trabalho\
                      na MAPS SA desde novembro de 2021 no desenvolvimento de\
                       funcionalidades referentes ao software de precificação de\
                        ativos financeiros e deploy de aplicações.</p>\
            </div>\
        </div>\
    </section>\
    <section id="portfolio">\
        <div class="container">\
            <div class="card">\
                <h2>Portfólio</h2>\
                <p>Em Construção.</p>\
            </div>\
        </div>\
    </section>\
    <section id="blog">\
        <div class="container">\
            <div class="card">\
                <h2>Blog</h2>\
                <p>Em Construção.</p>\
            </div>\
        </div>\
    </section>\
    <section id="contato">\
        <div class="container">\
            <div class="card">\
                <h2>Contato</h2>\
                <p>WhatsApp: +55 19 9 8315-8939.</p>\
            </div>\
        </div>\
    </section>\
    <footer>\
        <p>&copy; 2024 Felipe Alves Bevilacqua</p>\
    </footer>\
</body>\
</html>';

exports.html = html;
