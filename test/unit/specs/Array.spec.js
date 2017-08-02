describe('Array', () => {
  var test = []
  beforeEach(() => {
    test.push(1)
  })
  afterEach(() => {
    test = []
  })
  it('应该有一个1', () => {
    expect(test[0]).to.eqls(1)
  })
  it('可以有多个期望值检测', () => {
    expect(test[0]).to.eqls(1)
    expect(true).to.eqls(true)
  })
})