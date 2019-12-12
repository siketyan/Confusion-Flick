function pageLoad(name) {
    $('#page-container *').off();
    $('#page-container').load('/pages/'+name+'.html', function() {
        registerEvents();
    });
}
