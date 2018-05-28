var HelloWorld = require('./hello-world');

describe('Hello World', function () {
  var helloWorld = new HelloWorld();

  it('says hello world', function () {
  	const expected = 'Hello, World!';
    expect(helloWorld.hello()).toEqual(expected);
  });
    
    it('length should be 13', function(){
        const expected=13;
        expect(helloWorld.hello().length).toEqual(expected);
    });
    
});
