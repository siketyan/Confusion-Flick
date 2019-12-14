function pageLoad(name, callback = null) {
    $('#page-container *').off();
    $('#page-container').load('/pages/'+name+'.html', function() {
        registerEvents();

        if (callback) {
            callback();
        }
    });
}
