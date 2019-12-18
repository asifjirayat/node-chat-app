const expect = require('expect');

var {generateMessage} = require('./message');

describe("generateMessage", () => {
  it('should generate the correct message objects', () => {
    var from = 'Jen';
    var text = 'Some Message';
    var message = generateMessage(from, text);

    expect(typeof message.createdAt).toBe('number');
    expect(message).toMatchObject({from, text});
  })
});
