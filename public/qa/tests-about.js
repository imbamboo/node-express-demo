suite("\"about\" page tests", function () {
    test("page sould contain link to contact page", function () {
        assert($("a[href='/contact']").length);
    });
});