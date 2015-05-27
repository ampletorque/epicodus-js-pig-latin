describe('breakWord', function() {

  it("will break word apart into halves", function() {
    expect(breakWord("pig")).to.eql(["p", "ig"]);
  });
});

describe('reMix', function() {
  it("will switch halves of word and add terminal letters", function() {
    expect(reMix(["p", "ig"])).to.eql("igpay");
  });
});
