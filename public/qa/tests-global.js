suite("global tests", function () {
    test("page has a valid title", function () {
        let title = document.title;
        assert(title && title.match(/\S/) && title.toUpperCase() != "TODO");
    });
});