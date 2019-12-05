function registerEvents() {
	$(".page-move").click(function () {
		pageLoad($(this).data('page'));
	})
}
