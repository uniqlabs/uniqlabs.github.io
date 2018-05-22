$(document).ready(function () {
    var lang = $('html')[0].lang || 'en';
    window.cookieconsent.initialise({
        'palette': {
            'popup': {
                'background': '#efefef',
                'text': '#404040'
            },
            'button': {
                'background': '#8ec760',
                'text': '#ffffff'
            }
        },
        'content': content[lang],
    })
});

var content = {
    de: {
        message: 'Diese Webseite verwendet Cookies. Wenn Sie die Seite weiter nutzen, gehen wir von Ihrem Einverständnis aus.',
        dismiss: 'Verstanden',
        link: 'Mehr erfahren',
        href: '/de/datenschutz',
    },
    en: {
        message: 'This website uses cookies. If you continue to use the site, we\'ll assume you are OK with that.',
        dismiss: 'Got it',
        link: 'Learn more',
        href: '/en/privacy',
    }
}