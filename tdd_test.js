TestMyCode.run("testing hello_world function", function(assert) {
    var result = hello_world();
    // is the result as we expected?
    assert.equals("hello world!", result, "testing hello_world function");
});

TestMyCode.run("testing Lino function", function(assert) {
    var result = Lino();
    // is the result as we expected?
    assert.equals("Lino!", result, "testing Lino function");
});

TestMyCode.run("testing Okuhle function", function(assert) {
    var result = Okuhle();
    // is the result as we expected?
    assert.equals("Okuhle", result, "testing Okuhle function");
});

TestMyCode.run("testing Kamva function", function(assert) {
    var result = Kamva();
    // is the result as we expected?
    assert.equals("Kamva!", result, "testing Kamva function");
});

results();