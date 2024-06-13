const dataProjects = [
    {
        title: 'WebTick',
        date: '9 de Outubro de 2021',
        description: `Este é um projeto simples que exibe a hora atual, a data e ajusta o fundo da página com base no horário do dia. Durante as horas da manhã, o fundo representa o amanhecer, enquanto à noite, o fundo muda para representar o anoitecer. :D <br><br>

        O Projeto possui as seguintes funcionalidades: <br><br>
        
        • Exibe a hora, minutos e segundos atualizados em tempo real. <br>
        • Ajusta o fundo da página para representar o amanhecer ou o anoitecer com base na hora atual.`,
        videoSrc: 'https://github.com/GabrielSantos777/WebTick/blob/main/.github/WebTick.png',
        linkedin: 'https://www.linkedin.com/feed/update/urn:li:activity:6858050562471145472/',
        repository: 'https://github.com/GabrielSantos777/WebTick',

    },
    {
        title: 'FinCalc',
        date: '6 de Outubro de 2023',
        description: `Este projeto é uma Calculadora de Juros Compostos construída com HTML, CSS e JavaScript. Ela permite que os usuários calculem o montante final, o valor total investido e o total de juros ao investir uma quantia inicial, adicionando investimentos mensais, e aplicando uma taxa de juros, que pode ser configurada como anual ou mensal. :D <br><br>

        O Projeto possui as seguintes funcionalidades: <br><br>
        
        • Entrada de valores iniciais, taxas de juros, investimento mensal e período de investimento. <br>
        • Opção para escolher entre taxas de juros anuais ou mensais. <br>
        • Opção para escolher entre período de investimento em anos ou meses. <br>
        • Cálculo preciso de juros compostos. <br>
        • Exibição de resultados formatados em moeda BRL (Real Brasileiro). <br>
        • Limpeza fácil dos campos para cálculos subsequentes..`,
        videoSrc: 'https://github.com/GabrielSantos777/WebTick/blob/main/.github/WebTick.png',
        linkedin: 'https://www.linkedin.com/feed/update/urn:li:activity:7166506763628732418/',
        repository: 'https://github.com/GabrielSantos777/FinCalc',

    },
    {
        title: 'SkySync',
        date: '26 de Janeiro de 2024',
        description: `SkySync é uma aplicação web que exibe a condição climática de todas as cidades, estados ou países do mundo. Obtendo tanto os dados da temperatura atual, velocidade do vento,data/hora e o nível de umidade. :D <br><br>

        O Projeto possui as seguintes funcionalidades: <br><br>
        
        • Temperatura atual. <br>
        • Data e Hora atualizados. <br>
        • Velocidade do vento. <br>
        • Nível de umidade. <br>`,
        videoSrc: 'https://github.com/GabrielSantos777/WebTick/blob/main/.github/WebTick.png',
        linkedin: 'https://www.linkedin.com/feed/update/urn:li:activity:7167878390451048448/',
        repository: 'https://github.com/GabrielSantos777/SkySync',

    },
    {
        title: 'KeyForge',
        date: '18 de Janeiro de 2024',
        description: `O KeyForge permite criar senhas aleatórias com diversas opções, incluindo maiúsculas, minúsculas, números e símbolos. Esta ferramenta é útil para gerar senhas seguras para suas contas online. :D <br><br>

        O Projeto possui as seguintes funcionalidades: <br><br>
        
        • Marque/desmarque as caixas de seleção para incluir/excluir tipos de caracteres. <br>
        • Defina o tamanho da senha no campo "Tamanho da senha". <br>`,
        videoSrc: 'https://github.com/GabrielSantos777/WebTick/blob/main/.github/WebTick.png',
        linkedin: 'https://www.linkedin.com/feed/update/urn:li:activity:7167878390451048448/',
        repository: 'https://github.com/GabrielSantos777/KeyForge',

    }
]

// Open Modal

const openModal = () => {
    const closeModal = document.querySelector('.modal .ri-close-line')
    const modal = document.querySelector('.modal')
    const box = document.querySelectorAll('.cards-projects .box')
    const modalTitle = modal.querySelector('.title h2')
    const modalDescription = modal.querySelector('.info p')
    const modalDate = modal.querySelector('span')
    const modalLinkProject = modal.querySelector('.links a.link-project')
    const modalLinkRepository = modal.querySelector('.links a.link-repository')
    const modalLinkLinkedin = modal.querySelector('.links a.link-linkedin')
    const iframe = modal.querySelector('.video iframe')

    box.forEach((item, index) => {

        const addData = () => {

            if (index != 5) {
                modal.classList.remove('hidden');
                document.body.style.overflow = 'hidden';
                document.body.classList.add('transparent')
            }

            modalTitle.innerHTML = dataProjects[index].title
            modalDescription.innerHTML = dataProjects[index].description
            modalDate.innerHTML = dataProjects[index].date
            modalLinkProject.setAttribute('href', dataProjects[index].site) 
            modalLinkRepository.setAttribute('href', dataProjects[index].repository) 
            modalLinkLinkedin.setAttribute('href', dataProjects[index].linkedin) 
            iframe.setAttribute('src', dataProjects[index].videoSrc + '?autoplay=1&amp;loop=0')

        }

        item.addEventListener('click', addData)

    })

    const closingModal = () => {
        modal.classList.add('hidden')
        document.body.style.overflow = 'visible';
        document.body.classList.remove('transparent')
        iframe.setAttribute('src', '')

    }

    closeModal.addEventListener('click', closingModal)

    document.addEventListener ('keydown', (event) => event.key === "Escape" ? closingModal() : '');

}

openModal()