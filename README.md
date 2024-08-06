# Class "cookies"
Cookies for website

EN:

This module is intended to implement cookies on a website.
The module is implemented in a native JavaScript, using the ES6 standard.

USAGE:

1.  Move the file "cookieConsent.js" to your project folder.

2.  Import using command 'import cookieConsent from ...' in your main file 'main.js'.

3.  In the main file call the function cookieConsent({}) inside which, as a parameter, pass an objects with the following properties:

```
cookiesConsent(
  {
    background: 'your background color',        // (default: rgb(255, 183, 0);)
    height: 'your height',                      // (default: 80px)
    text: 'your text agreement',                // (default: Я даю согласие на использование cookies)
    textColor: 'your text color',               // (default: black)
    link: 'your link cookie policy',            // (default: https://2gdpr.com/cookies)
    linkColor: 'your text link color',          // (default: #fff)
    btnBorder: 'your button border color',      // (default: black)
    btnTextColor: 'your button text color',     // (default: #fff)
    cancel: 'your text cancel',                 // (default: Accept)
    confirm: 'your text confirm'                // (default: Cancel)
    nameConsent: 'your name consent cookies',   // (default: site_consent)
    valueCookies: 'your value',                 // (default: true)
    expires: 'your expires date'                // (default: Session) => example: Sun, 16 Jul 3567 06:23:41 GMT
  });

```

4. Write your code in the myScripts() function inside the "cookieConsent.js" file:

```
function myScripts() {
  //your scripts();
}

```

RU: 

Этот модуль предназначен для внедрения файлов cookie на веб-сайте.

Модуль реализован на нативном JavaScript с использованием стандарта ES6.

ИСПОЛЬЗОВАНИЕ:

1. Переместите файл "cookieConsent.js" в папку вашего проекта.

2. Импортируйте с помощью команды "import cookieConsent from ..." в ваш основной файл "main.js".

3. В главном файле вызовите функцию cookieConsent({}), внутри которой в качестве параметра передайте объекты со следующими свойствами:

```
cookiesConsent(
  {
    background: 'your background color',        // (default: rgb(255, 183, 0);)
    height: 'your height',                      // (default: 80px)
    text: 'your text agreement',                // (default: Я даю согласие на использование cookies)
    textColor: 'your text color',               // (default: black)
    link: 'your link cookie policy',            // (default: https://2gdpr.com/cookies)
    linkColor: 'your text link color',          // (default: #fff)
    btnBorder: 'your button border color',      // (default: black)
    btnTextColor: 'your button text color',     // (default: #fff)
    cancel: 'your text cancel',                 // (default: Accept)
    confirm: 'your text confirm'                // (default: Cancel)
    nameConsent: 'your name consent cookies',   // (default: site_consent)
    valueCookies: 'your value',                 // (default: true)
    expires: 'your expires date'                // (default: Session) => example: Sun, 16 Jul 3567 06:23:41 GMT
  });

```

4. Напишите свой код в функции myScripts() внутри файла "cookieConsent.js":

```
function myScripts() {
  //your scripts();
}

```