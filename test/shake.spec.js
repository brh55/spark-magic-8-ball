const expect = require('chai').expect;
const rewire = require('rewire');
const example = rewire('../dist/commands/shake');

describe('Shake Test Suite', function SaveTest() {
  it('Should get any of the predefined answer', (done) => {
    const getAnswer = example.__get__('getAnswer');

    expect(getAnswer()).to.be.oneOf([
      'It is certain',
      'It is decidedly so',
      'Without a doubt',
      'Yes, definitely',
      'You may rely on it',
      'As I see it, yes',
      'Most likely',
      'Outlook good',
      'Yes',
      'Signs point to yes',
      'Reply hazy try again',
      'Ask again later',
      'Better not tell you now',
      'Cannot predict now',
      'Concentrate and ask again',
      'Don\'t count on it',
      'My reply is no',
      'My sources say no',
      'Outlook not so good',
      'Very doubtful',
    ]);

    done();
  });
});
