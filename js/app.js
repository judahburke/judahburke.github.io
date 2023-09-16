window.addEventListener('load', () => {
    const el = $('#app');

    // compile handlebar templates
    const errorTemplate = Handlebars.compile($('#error-template').html());
    const welcomeTemplate = Handlebars.compile($('#welcome-template').html());
    const githubTemplate = Handlebars.compile($('#github-template').html());
    const linkedinTemplate = Handlebars.compile($('#linkedin-template').html());
    const cardsTemplate = Handlebars.compile($('#cards-template').html());

    // router declaration
    const router = new Router({
        mode: 'history',
        page404: (path) => {
        const html = errorTemplate({
            color: 'yellow',
            title: 'Error 404 - Page NOT Found!',
            message: `The path '/${path}' does not exist on this site`,
        });
        el.html(html);
        },
    });
  
    router.add('/', () => {
        let html = welcomeTemplate();
        el.html(html);
    });
    
    router.add('/github', () => {
        let html = githubTemplate();
        el.html(html);
    });
    
    router.add('/linkedin', () => {
        let html = linkedinTemplate();
        el.html(html);
    });
    
    router.add('/cards', () => {
        let html = cardsTemplate();
        el.html(html);
    });
    
    // Navigate app to current url
    router.navigateTo(window.location.pathname);
    
    // Highlight Active Menu on Refresh/Page Reload
    const link = $(`a[href$='${window.location.pathname}']`);
    link.addClass('active');
    
    $('a').on('click', (event) => {
        // Block browser page load
        event.preventDefault();
    
        // Highlight Active Menu on Click
        const target = $(event.target);
        $('.item').removeClass('active');
        target.addClass('active');
    
        // Navigate to clicked url
        const href = target.attr('href');
        const path = href.slice(href.lastIndexOf('/'));
        router.navigateTo(path);
    });
})