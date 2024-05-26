'use strict'

class CookieConsent {
    constructor({popup, btnConfirm, btnCancel, activeClass=''} = {}) {
        this.popup = document.querySelector(popup);
        this.btnConfirm = document.querySelector(btnConfirm);
        this.btnCancel = document.querySelector(btnCancel);
        this.activeClass = activeClass;
        this.consentPropertyType = 'site_consent';
    }

    // получение ключа из Cookies
    getItem = (key) => {
        const cookies = document.cookie.split(';')
                                    .map(cookie => cookie.split('='))
                                    .reduce((acc, [key, value]) => ({...acc, [key.trim()]: value}), {});
        return cookies[key];
    };

    // запись ключа и значения в Cookies
    setItem = (key, value) => {
        document.cookie = `${key}=${value}; expires = Sun, 16 Jul 3567 06:23:41 GMT`;
    }

    // проверка наличия записи ключа в Cookies
    hasConsented = () => this.getItem(this.consentPropertyType) === 'true' ? true : false;

    // метод для смены статуса согласия пользователя и загрузки метрик
    changeStatus = (prop) => {
        this.setItem(this.consentPropertyType, prop);
        
        if(this.hasConsented()) {
            myScripts(); // загрузка метрик
        }
    }

    // обработчики на кнопки для смены статуса
    bindTriggers = () => {
        this.btnConfirm.addEventListener('click', () => {
            this.changeStatus(true);
            this.popup.classList.remove(this.activeClass);
        });
        this.btnCancel.addEventListener('click', () => {
            this.changeStatus(false);
            this.popup.classList.remove(this.activeClass);
        })
    }

    // инициализация cookie
    init = () => {
        try {
            if(this.hasConsented()) {
                myScripts();
            } else {
                this.popup.classList.add(this.activeClass);
            }
            this.bindTriggers();
            
        } catch(e) {
            console.error('Переданы не все данные при построении конструктора')
        }
    }

}

new CookieConsent({
    activeClass: 'popup_active',
    popup: '.popup',
    btnConfirm: '[data-confirm]',
    btnCancel: '[data-cancel]',
}).init();

function myScripts() {
    console.log('Loading...scripts, analitics....');
}


