const expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe("generateMessage", () => {
  it('should generate the correct message objects', () => {
    var from = 'Jen';
    var text = 'Some Message';
    var message = generateMessage(from, text);

    expect(typeof message.createdAt).toBe('number');
    expect(message).toMatchObject({from, text});
  })
});

describe('generateLocationMessage', () => {
  it('Should generate current location object', () => {
    var from = 'Jen';
    var latitude = 15;
    var longitude = 19;
    var url = 'https://www.google.com/maps/place?q=15,19';
    var message = generateLocationMessage(from, latitude, longitude);

    expect(typeof message.createdAt).toBe('number');
    expect(message).toMatchObject({from, url});
  });
})
