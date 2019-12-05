function pageLoad(name) {
    $('#page-container').load('/pages/'+name+'.html');
    registerEvents();
}
