// Функция для получения параметров из URL
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Массив данных для портфолио
const portfolioItems = [
    {
        id: 1,
        customer: 'Семья',
        location: 'Санкт-Петербург',
        stage: 'Реализован',
        year: '2018',
        title: 'Ул. Рубинштейна',
        description: 'Интерьер оформлен в изысканном классическом стиле с элементами дворцовой эстетики. Пространство наполнено светом и воздухом благодаря высоким потолкам, большим окнам и светлой палитре. Особое внимание уделено деталям: лепнина ручной работы, позолоченные элементы, натуральный камень и роскошные текстильные фактуры. Центральное место занимает зона с камином, вокруг которой выстроена композиция интерьера, создающая ощущение торжественного уюта.',
        images: [
            '../img/portfolio/5/1.jpg',
            '../img/portfolio/5/2.jpg',
            '../img/portfolio/5/3.jpg'
        ]
    },
    {
        id: 2,
        customer: 'Женщина в возрасте',
        location: 'Санкт-Петербург',
        stage: 'Реализован',
        year: '2016',
        title: 'Ул. Звёздная',
        description: 'Современный интерьер с утонченными элементами ар-деко. Пространство объединяет гостиную и обеденную зоны, выдержанные в теплой, нейтральной гамме с вкраплениями золотистых акцентов. Светильники с геометрическим рисунком, мебель с округлыми формами и глянцевые поверхности создают элегантную, но при этом уютную атмосферу. Интерьер отлично подчеркивает энергичный, но гармоничный ритм жизни заказчиков.',
        images: [
            '../img/portfolio/6/1.jpg',
            '../img/portfolio/6/2.jpg',
            '../img/portfolio/6/3.jpg'
        ]
    },
    {
        id: 3,
        customer: 'Молодая семья',
        location: 'Санкт-Петербург',
        stage: 'Реализован',
        year: '2020',
        title: 'Ул. Пушкинская',
        description: 'Пространство выполнено в современном стиле с элементами модерна. Высокие потолки, открытая планировка и большие оконные проемы наполняют интерьер светом. В отделке использованы натуральные материалы: дерево, стекло, текстиль. Декор и мебель подобраны с учетом максимальной функциональности, но с сохранением индивидуальности — интерьер стал отражением современного городского ритма, наполненного жизнью и теплом.',
        images: [
            '../img/portfolio/2/1.jpg',
            '../img/portfolio/2/2.jpg',
            '../img/portfolio/2/3.jpg'
        ]
    },
    {
        id: 4,
        customer: 'Предприниматель',
        location: 'Санкт-Петербург',
        stage: 'Реализован',
        year: '2024',
        title: 'Ул. Малая Садовая',
        description: 'Проект выполнен в минималистичной стилистике с акцентом на свободу и порядок. Интерьер оформлен в светлой нейтральной палитре, в которой гармонично сочетаются гладкие поверхности, простые геометрические формы и скрытое освещение. Пространство визуально расширено за счет чистых линий и зеркальных поверхностей. Контрастная мебель, в частности кожаный диван глубокого черного цвета, добавляет характер и строгость.',
        images: [
            '../img/portfolio/3/1.jpg',
            '../img/portfolio/3/2.jpg',
            '../img/portfolio/3/3.jpg'
        ]
    },
    {
        id: 5,
        customer: 'Молодой специалист',
        location: 'Санкт-Петербург',
        stage: 'Реализован',
        year: '2025',
        title: 'Ул. Варшавская',
        description: 'Интерьер выполнен в стиле хай-тек, ориентированном на технологичность и функциональность. Серо-белая гамма, четкая структура пространства, отсутствие лишних деталей. Встроенное освещение, лаконичная мебель, зеркальные и стеклянные элементы делают пространство легким, современным и идеально подходящим для активного образа жизни.',
        images: [
            '../img/portfolio/9/1.jpg',
            '../img/portfolio/9/2.jpg',
            '../img/portfolio/9/3.jpg'
        ]
    },
    {
        id: 6,
        customer: 'Молодая семья',
        location: 'Санкт-Петербург',
        stage: 'Реализован',
        year: '2022',
        title: 'Ул. Благодатная',
        description: 'Проект создан с заботой о комфорте и простоте. Светлые стены, натуральные текстуры, деревянные акценты и мягкий текстиль создают спокойную и располагающую атмосферу. Интерьер минималистичный, но очень тёплый, с интонацией скандинавского уюта. Идеальное пространство для размеренной, осознанной жизни.',
        images: [
            '../img/portfolio/1/1.jpg',
            '../img/portfolio/1/2.jpg',
            '../img/portfolio/1/3.jpg'
        ]
    },
    {
        id: 7,
        customer: 'Коллекционер',
        location: 'Санкт-Петербург',
        stage: 'Реализован',
        year: '2015',
        title: 'Ул. Итальянская',
        description: 'Интерьер наполнен духом старины и ностальгии. Основу стилистики составляют винтажные элементы: антикварная мебель, позолоченные багеты, обои насыщенного цвета, массивные люстры и декоративные текстильные драпировки. Весь интерьер — это индивидуальная история, отражающая любовь заказчика к искусству и культуре ушедших эпох.',
        images: [
            '../img/portfolio/8/1.jpg',
            '../img/portfolio/8/2.jpg',
            '../img/portfolio/8/3.jpg'
        ]
    },
    {
        id: 8,
        customer: 'Молодая женщина',
        location: 'Санкт-Петербург',
        stage: 'Реализован',
        year: '2023',
        title: 'Ул. Гороховая',
        description: 'Небольшое пространство с четким зонированием и высокой эргономикой. Основу интерьера составляют светлые поверхности, монохромная палитра, стекло и металл. Несмотря на строгость форм, пространство воспринимается легко и уютно благодаря качественному освещению и акцентам в декоре. Идеальное решение для городского ритма жизни.',
        images: [
            '../img/portfolio/7/1.jpg',
            '../img/portfolio/7/2.jpg',
            '../img/portfolio/7/3.jpg'
        ]
    }
];

const itemId = parseInt(getQueryParam('id'));
const item = portfolioItems.find(el => el.id === itemId);

if (item) {
    document.querySelector('.portfolio-customer').textContent = item.customer;
    document.querySelector('.portfolio-location').textContent = item.location;
    document.querySelector('.portfolio-stage').textContent = item.stage;
    document.querySelector('.portfolio-year').textContent = item.year;
    document.querySelector('.portfolio-caption-title').textContent = item.title;
    document.querySelector('.portfolio-caption-text').textContent = item.description;

    const slider = document.getElementById('portfolio-slider');

    const lookBox = document.getElementById('look-box');
    lookBox.onclick = () => openModal(0);

    // Показываем только первую картинку на странице
    if (item.images.length > 0) {
        const firstImg = document.createElement('img');
        firstImg.src = item.images[0];
        firstImg.style.cursor = 'pointer';
        firstImg.style.maxWidth = '100%';
        firstImg.style.borderRadius = '70px';
        firstImg.onclick = () => openModal(0);
        slider.appendChild(firstImg);
    }

    // Модальное окно и листание
    let currentIndex = 0;

    function openModal(index) {
        currentIndex = index;
        const modal = document.getElementById('modal');
        const modalImg = document.getElementById('modal-img');
        modal.style.display = 'flex';
        modalImg.src = item.images[currentIndex];
    }

    function closeModal() {
        document.getElementById('modal').style.display = 'none';
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % item.images.length;
        document.getElementById('modal-img').src = item.images[currentIndex];
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + item.images.length) % item.images.length;
        document.getElementById('modal-img').src = item.images[currentIndex];
    }

    // Делаем функции доступными глобально
    window.openModal = openModal;
    window.closeModal = closeModal;
    window.nextImage = nextImage;
    window.prevImage = prevImage;

}




/*
window.onload = function() {
    const container = document.getElementById('portfolio-container');

    portfolioItems.forEach(item => {
        const portfolioItemElement = document.createElement('div');
        portfolioItemElement.classList.add('portfolio-item');

        portfolioItemElement.innerHTML = 
            <div class="portfolio-item-info">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
                <div class="portfolio-info-row">
                    <div class="portfolio-info-short">
                        <div class="portfolio-short-column">
                            <span>Фото 1</span>
                            <img src="${item.images[0]}" alt="${item.title}" class="preview" onclick="openModal(${item.id})">
                        </div>
                    </div>
                </div>
            </div>
        ;

        container.appendChild(portfolioItemElement);
    });
};

let currentIndex = 0;

function openModal(index) {
    currentIndex = index;
    const images = portfolioItems[currentIndex - 1].images; // Используем currentIndex - 1, так как индексы начинаются с 1
    document.getElementById('modal').style.display = 'flex';
    document.getElementById('modal-img').src = images[0]; // Открываем первое изображение
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

function nextImage() {
    const images = portfolioItems[currentIndex - 1].images;
    currentIndex = (currentIndex) % images.length;
    document.getElementById('modal-img').src = images[currentIndex];
}

function prevImage() {
    const images = portfolioItems[currentIndex - 1].images;
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    document.getElementById('modal-img').src = images[currentIndex];
}








const images = ['/img/portfolio/1/1.jpg', 'img/portfolio/1/2.jpg', 'img/portfolio/1/3.jpg'];
let currentIndex = 0;

function openModal(index) {
  currentIndex = index;
  document.getElementById('modal').style.display = 'flex';
  document.getElementById('modal-img').src = images[currentIndex];
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  document.getElementById('modal-img').src = images[currentIndex];
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  document.getElementById('modal-img').src = images[currentIndex];
}
*/