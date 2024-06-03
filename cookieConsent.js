'use strict';

// import your scripts

function cookiesConsent({backgroundColor, height, text, textColor, link, linkColor, btnBorder, btnTextColor, cancel, confirm}, {nameConsent, value, expires}) {
	class CookieConsent {
		constructor(
			{heightblock, background, linkConsentCookies, linkColor, textConsent, textConsentColor, borderBtnColor, 
				btnTextColor, btnConfirmText, btnCancelText, consentPropertyType, valueCookies, expiresCookies}) {
			this.popup = 'popup';
			this.btnConfirm = 'data-confirm';
			this.btnCancel = 'data-cancel';
			this.consentPropertyType = consentPropertyType === '' ? 'site_consent' : consentPropertyType;
			this.valueCookies = valueCookies === '' ? 'true' : valueCookies;
			this.expiresCookies = expiresCookies;
			this.linkConsentCookies = linkConsentCookies === '' ? 'https://2gdpr.com/cookies' : linkConsentCookies;
			this.textConsent = textConsent === '' ? 'Я даю согласие на использование cookies' : textConsent;
			this.linkColor = linkColor === '' ? '#fff' : linkColor;
			this.textConsentColor = textConsentColor === '' ? 'black' : textConsentColor;
			this.heightblock = heightblock === '' ? '80px' : heightblock;
			this.background = background === '' ? 'rgb(255, 183, 0)' : background;
			this.borderBtnColor = borderBtnColor === '' ? 'black' : borderBtnColor;
			this.btnTextColor = btnTextColor === '' ? '#fff' : btnTextColor;
			this.btnConfirmText = btnConfirmText === '' ? 'Accept' : btnConfirmText;
			this.btnCancelText = btnCancelText === '' ? 'Cancel' : btnCancelText;
		}

		// создание блока Cookies
		create = () => {
			const windowCookies = document.createElement('div');
			windowCookies.classList.add(this.popup);
			windowCookies.style.cssText = `
				position: fixed;
				bottom: -100%;
				width: 100%;
				height: ${this.heightblock};
				background-color: ${this.background};
				display: flex;
				justify-content: center;
				align-items: center;
				color: ${this.textConsentColor};
				transition: 0.5s all;
			`;
				
			windowCookies.innerHTML = `
				<div class="wrapperCookie">
					${this.textConsent}
					<button ${this.btnConfirm} class="btn_cookies">${this.btnConfirmText}</button>
					<button ${this.btnCancel} class="btn_cookies">${this.btnCancelText}</button>
					<a class="link_cookies" href="${this.linkConsentCookies}">Подробнее</a>
				</div>
			`;

			document.querySelector('body').append(windowCookies);
		};

		// получение ключа из Cookies
		getItem = (key) => {
			const cookies = document.cookie.split(';')
				.map(cookie => cookie.split('='))
				.reduce((acc, [key, value]) => ({...acc, [key.trim()]: value}), {});
			return cookies[key];
		};

		// запись ключа и значения в Cookies
		setItem = (key, value) => {
			document.cookie = `${key}=${value}; expires = ${this.expiresCookies}`;
		};

		// проверка наличия записи ключа в Cookies
		hasConsented = () => this.getItem(this.consentPropertyType) === `${this.valueCookies}` ? true : false;

		// метод для смены статуса согласия пользователя и загрузки метрик
		changeStatus = (prop) => {
			this.setItem(this.consentPropertyType, prop);
			
			if(this.hasConsented()) {
				myScripts(); // загрузка метрик
			}
		};

		// обработчики на кнопки для смены статуса
		bindTriggers = (popup, btn) => {
			btn.forEach(el => {
				el.addEventListener('click', () => {
					if (el.getAttribute(this.btnConfirm) == '') {
						this.changeStatus(this.valueCookies);
						popup.style.bottom = '-100%';
					}
					if (el.getAttribute(this.btnCancel) == '') {
						this.changeStatus(false);
						popup.style.bottom = '-100%';
					}
				});  
			});
		};

		// инициализация cookie
		init = () => {
			this.create();
			const popup = document.querySelector(`.${this.popup}`),
				  btnCookies = document.querySelectorAll('.btn_cookies'),
				  linkCookies = document.querySelector('.link_cookies');
			
			btnCookies.forEach(btn => {
				btn.style.cssText = `
					width: 150px;
					height: 50px;
					text-align: center;
					color: ${this.btnTextColor};
					margin-left: 30px;
					border: 1px solid ${this.borderBtnColor};
					background-color: transparent;
				`;
			});

			linkCookies.style.cssText = `
				margin-left: 30px;
				width: 150px;
				height: 50px;
				text-align: center;
				color: ${this.linkColor};
				background-color: transparent;
			`;
			
			try {
				if(this.hasConsented()) {
					myScripts();
				} else {
					popup.style.bottom = 0;
				}
				this.bindTriggers(popup, btnCookies);
				
			} catch(e) {
				console.error(e);
			}
		};

	}

	new CookieConsent({
		consentPropertyType: nameConsent,
		valueCookies: value,
		expiresCookies: expires,
		linkConsentCookies: link,
		textConsent: text,
		linkColor: linkColor,
		textConsentColor: textColor,
		heightblock: height,
		background: backgroundColor,
		borderBtnColor: btnBorder,
		btnTextColor: btnTextColor,
		btnConfirmText: confirm, 
		btnCancelText: cancel
	}).init();

	function myScripts() {
		//your scripts
	}
}

export default cookiesConsent;




