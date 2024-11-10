document.getElementById('registrationForm').addEventListener('submit', function (e) {
    e.preventDefault();  // Запобігаємо стандартній поведінці форми

    // Отримуємо значення з полів
    const username = document.getElementById('username').value;
    
    
const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
  
const confirmPassword = document.getElementById('confirmPassword').value;
    const errorMessage = document.getElementById('errorMessage');

    // Очищуємо повідомлення про помилки
    errorMessage.textContent = '';

    // Валідація
    if (!username || !email || !password || !confirmPassword) {
        errorMessage.textContent = 'Всі поля повинні бути заповнені!';
        return;
    }

    if (!validateEmail(email)) {
        errorMessage.textContent = 'Введіть коректний email!';
        return;
    }

    if (password !== confirmPassword) {
        errorMessage.textContent = 'Паролі не співпадають!';
        
  
return;
    }

    if (password.length < 6) {
        errorMessage.
        errorMessage.
textContent = 'Пароль повинен містити не менше 6 символів!';
        
        ret
return;
    }

    // Якщо всі перевірки пройдено, виконуємо реєстрацію
    alert('Реєстрація пройшла успішно!');
    // Тут можна додати код для надсилання даних на сервер
});

// Функція для перевірки формату email

functi

f
function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
}
