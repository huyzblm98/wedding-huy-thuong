// Loading Screen
window.addEventListener('load', () => {
    setTimeout(() => {
        const loadingScreen = document.getElementById('loading-screen');
        loadingScreen.classList.add('hidden');
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    }, 2000);
});

// Initialize AOS
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Snowfall Effect
const canvas = document.getElementById('snowfall-canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const snowflakes = [];
const snowflakeCount = 50;

class Snowflake {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 3 + 1;
        this.speedY = Math.random() * 1 + 0.5;
        this.speedX = Math.random() * 0.5 - 0.25;
    }

    update() {
        this.y += this.speedY;
        this.x += this.speedX;

        if (this.y > canvas.height) {
            this.y = 0;
            this.x = Math.random() * canvas.width;
        }
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.fill();
    }
}

for (let i = 0; i < snowflakeCount; i++) {
    snowflakes.push(new Snowflake());
}

function animateSnowfall() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    snowflakes.forEach(snowflake => {
        snowflake.update();
        snowflake.draw();
    });
    requestAnimationFrame(animateSnowfall);
}

animateSnowfall();

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// Menu
const menu = document.getElementById('menu');
const menuToggleBtn = document.getElementById('menu-toggle-btn');
const mobileMenu = document.getElementById('mobile-menu');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        menu.classList.add('scrolled');
    } else {
        menu.classList.remove('scrolled');
    }
});

menuToggleBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });
});

// Hero Slider
let currentSlide = 0;
const sliderContainer = document.getElementById('slider-container');
const slides = document.querySelectorAll('.slider-item');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.getElementById('slider-prev');
const nextBtn = document.getElementById('slider-next');

function updateSlider() {
    sliderContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlider();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlider();
}

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide = index;
        updateSlider();
    });
});

// Auto slide
setInterval(nextSlide, 5000);

// Typing Effect
const typingText = document.getElementById('typing-text');
const text = "WE'RE GETTING MARRIED";
let charIndex = 0;

setTimeout(() => {
    function typeText() {
        if (charIndex < text.length) {
            typingText.textContent += text.charAt(charIndex);
            charIndex++;
            setTimeout(typeText, 100);
        }
    }
    typeText();
}, 4000);

// Typing Effect for Wedding Invite
const weddingInviteText = document.getElementById('wedding-invite-text');
const inviteText = "Chúng tôi trân trọng mời bạn đến chung vui trong ngày cưới của chúng tôi.";
let inviteCharIndex = 0;

setTimeout(() => {
    function typeInviteText() {
        if (inviteCharIndex < inviteText.length) {
            weddingInviteText.textContent += inviteText.charAt(inviteCharIndex);
            inviteCharIndex++;
            setTimeout(typeInviteText, 50);
        }
    }
    typeInviteText();
}, 500);

// Scroll Down Button
const scrollDownBtn = document.getElementById('scroll-down-btn');
scrollDownBtn.addEventListener('click', () => {
    document.getElementById('couple').scrollIntoView({ behavior: 'smooth' });
});

// Our Story Slider
const storyStories = [
    {
        date: { day: '01', month: '06', year: '2020' },
        caption: 'Lần đầu gặp nhau',
        description: 'Chúng tôi gặp nhau lần đầu tiên vào một ngày hè oi ả. Ánh mắt đầu tiên chạm nhau, chúng tôi đã biết đây là duyên phận.',
        image: '/images/stories/1.jpg'
    },
    {
        date: { day: '15', month: '08', year: '2021' },
        caption: 'Hẹn hò lần đầu',
        description: 'Buổi hẹn hò đầu tiên tại một quán cafe nhỏ. Chúng tôi đã trò chuyện suốt nhiều giờ như thể thời gian đã ngừng trôi.',
        image: '/images/stories/2.jpg'
    },
    {
        date: { day: '20', month: '12', year: '2022' },
        caption: 'Lời cầu hôn',
        description: 'Dưới ánh hoàng hôn tuyệt đẹp, anh ấy đã quỳ gối xuống và hỏi: "Em có muốn làm vợ anh không?" Và em đã nói "Có".',
        image: '/images/stories/3.jpg'
    },
    {
        date: { day: '22', month: '12', year: '2024' },
        caption: 'Ngày trọng đại',
        description: 'Ngày cưới của chúng tôi - ngày mà hai trái tim trở thành một. Chúng tôi hạnh phúc được chia sẻ khoảnh khắc này với bạn.',
        image: '/images/stories/4.jpg'
    }
];

let currentStory = 0;
const storyImage = document.getElementById('story-image');
const storyCaption = document.getElementById('story-caption');
const storyDescription = document.getElementById('story-description');
const storyThumbs = document.querySelectorAll('.story-thumb');
const storyPrevBtn = document.getElementById('story-prev');
const storyNextBtn = document.getElementById('story-next');
const storyDay = document.querySelector('.story-day');
const storyMonth = document.querySelector('.story-month');
const storyYear = document.querySelector('.story-year');

function updateStory() {
    const story = storyStories[currentStory];
    storyImage.src = story.image;
    storyCaption.textContent = story.caption;
    storyDescription.textContent = story.description;
    storyDay.textContent = story.date.day;
    storyMonth.textContent = story.date.month;
    storyYear.textContent = story.date.year;
    
    storyThumbs.forEach((thumb, index) => {
        thumb.classList.toggle('active', index === currentStory);
    });
}

storyPrevBtn.addEventListener('click', () => {
    currentStory = (currentStory - 1 + storyStories.length) % storyStories.length;
    updateStory();
});

storyNextBtn.addEventListener('click', () => {
    currentStory = (currentStory + 1) % storyStories.length;
    updateStory();
});

storyThumbs.forEach((thumb, index) => {
    thumb.addEventListener('click', () => {
        currentStory = index;
        updateStory();
    });
});

// Wish Form
const wishForm = document.getElementById('wish-form');
const wishMessage = document.getElementById('wish-message');
const wishList = document.getElementById('wish-list');

// Load wishes (mock data)
const wishes = [
    { name: 'Nguyễn Văn A', wish: 'Chúc hai bạn trăm năm hạnh phúc!' },
    { name: 'Trần Thị B', wish: 'Hạnh phúc mãi mãi nhé!' },
    { name: 'Lê Văn C', wish: 'Chúc mừng hạnh phúc!' }
];

function renderWishes() {
    wishList.innerHTML = '';
    wishes.forEach(wish => {
        const wishItem = document.createElement('div');
        wishItem.className = 'wish-item';
        wishItem.innerHTML = `
            <h3 class="wish-item-name">${wish.name}</h3>
            <p class="wish-item-text">${wish.wish}</p>
        `;
        wishList.appendChild(wishItem);
    });
}

renderWishes();

wishForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(wishForm);
    const name = formData.get('name');
    const emailOrPhone = formData.get('emailOrPhone');
    const wish = formData.get('wish');
    
    try {
        // Mock API call - replace with actual API
        // const response = await fetch('/api/wish/create', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({ name, emailOrPhone, wish })
        // });
        
        // Mock success
        wishes.unshift({ name, wish });
        renderWishes();
        
        wishMessage.textContent = 'Cảm ơn đã gửi lời chúc cho chúng tôi.';
        wishMessage.style.opacity = '1';
        wishForm.reset();
        
        setTimeout(() => {
            wishMessage.style.opacity = '0';
            setTimeout(() => {
                wishMessage.textContent = '';
            }, 300);
        }, 3000);
        
    } catch (error) {
        wishMessage.textContent = 'Awww~. Gửi không thành công mất rồi. Hãy thử lại nhé.';
        wishMessage.style.opacity = '1';
        
        setTimeout(() => {
            wishMessage.style.opacity = '0';
            setTimeout(() => {
                wishMessage.textContent = '';
            }, 300);
        }, 3000);
    }
});

// Scroll to Top Button
const scrollTopBtn = document.getElementById('scroll-top-btn');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Music Toggle
const musicToggleBtn = document.getElementById('music-toggle-btn');
const backgroundMusic = document.getElementById('background-music');
const musicIconPlay = document.getElementById('music-icon-play');
const musicIconPause = document.getElementById('music-icon-pause');
let isPlaying = false;

musicToggleBtn.addEventListener('click', () => {
    if (isPlaying) {
        backgroundMusic.pause();
        musicIconPlay.style.display = 'block';
        musicIconPause.style.display = 'none';
    } else {
        backgroundMusic.play();
        musicIconPlay.style.display = 'none';
        musicIconPause.style.display = 'block';
    }
    isPlaying = !isPlaying;
});

// Smooth scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});