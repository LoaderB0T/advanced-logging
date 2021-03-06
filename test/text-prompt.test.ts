import { Terminal } from 'node-terminal-emulator';
import { AwesomeLogger } from '../src/index';
import { Stdout } from '../src/render/stdout';
import { TestInit } from './reset';

describe('Text Prompt', () => {
  let t: Terminal;

  beforeEach(() => {
    t = TestInit.getTerminal();
  });

  afterEach(() => {
    t.restoreStdout(Stdout.getInstance());
  });

  test('ask for text', done => {
    const c = AwesomeLogger.prompt('text', { text: 'enter text' });
    expect(t.text).toStrictEqual(['', 'enter text', 'type your answer here...']);
    c.result.then(r => {
      expect(r).toBe('my answer!');
      expect(t.text).toStrictEqual(['', ' - Input: my answer!']);
      done();
    });
    t.sendText('my answer!');
    expect(c.getCurrentAnswer()).toBe('my answer!');
    t.sendKey('enter');
  });

  test('Text prompt with optional hints', done => {
    const c = AwesomeLogger.prompt('text', { text: 'enter text', hints: ['abcdefg', 'abc123', 'abc111'] });
    expect(t.text).toStrictEqual(['', 'enter text', 'abcdefg']);
    c.result.then(r => {
      expect(r).toBe('abc11');
      expect(t.text).toStrictEqual(['', ' - Input: abc11']);
      done();
    });
    t.sendText('abc');
    expect(c.getCurrentAnswer()).toBe('abc');
    expect(t.text).toStrictEqual(['', 'enter text', 'abcdefg']);
    t.sendText('1');
    expect(c.getCurrentAnswer()).toBe('abc1');
    expect(t.text).toStrictEqual(['', 'enter text', 'abc123']);
    t.sendText('1');
    expect(c.getCurrentAnswer()).toBe('abc11');
    expect(t.text).toStrictEqual(['', 'enter text', 'abc111']);
    t.sendKey('enter');
  });

  test('Text prompt with required hints', done => {
    const c = AwesomeLogger.prompt('text', { text: 'enter text', hints: ['abcdefg', 'abc123', 'abc111'], allowOnlyHints: true });
    expect(t.text).toStrictEqual(['', 'enter text', 'abcdefg']);
    c.result.then(r => {
      expect(r).toBe('abcdefg');
      expect(t.text).toStrictEqual(['', ' - Input: abcdefg']);
      done();
    });
    t.sendText('a');
    expect(c.getCurrentAnswer()).toBe(undefined);
    expect(t.text).toStrictEqual(['', 'enter text', 'abcdefg']);
    t.sendKey('enter'); // does nothing, because text doesn't match any hints yet
    expect(t.text).toStrictEqual(['', 'enter text', 'abcdefg (invalid)']);
    t.sendKey('tab');
    expect(c.getCurrentAnswer()).toBe('abcdefg');
    t.sendText('+');
    expect(c.getCurrentAnswer()).toBe(undefined);
    expect(t.text).toStrictEqual(['', 'enter text', 'abcdefg+']);
    t.sendKey('enter'); // does nothing, because text doesn't match any hints yet
    expect(t.text).toStrictEqual(['', 'enter text', 'abcdefg+  (invalid)']); // two spaces because of cursor placeholder
    t.sendKey('backspace');
    expect(c.getCurrentAnswer()).toBe('abcdefg');
    expect(t.text).toStrictEqual(['', 'enter text', 'abcdefg']);
    t.sendKey('enter');
  });

  test('Text prompt test arrow keys and tab', done => {
    const c = AwesomeLogger.prompt('text', { text: 'enter text', hints: ['example'] });
    expect(t.text).toStrictEqual(['', 'enter text', 'example']);
    c.result.then(r => {
      expect(r).toBe('example');
      expect(t.text).toStrictEqual(['', ' - Input: example']);
      done();
    });
    t.sendText('a');
    expect(c.getCurrentAnswer()).toBe('a');
    expect(t.text).toStrictEqual(['', 'enter text', 'a']);
    t.sendKey('tab');
    expect(c.getCurrentAnswer()).toBe('a');
    expect(t.text).toStrictEqual(['', 'enter text', 'a']);
    t.sendText('exam');
    t.sendKey('tab');
    expect(c.getCurrentAnswer()).toBe('aexam');
    expect(t.text).toStrictEqual(['', 'enter text', 'aexam']);
    t.sendKey('left');
    t.sendKey('left');
    t.sendKey('left');
    t.sendKey('left');
    t.sendKey('backspace');
    expect(c.getCurrentAnswer()).toBe('exam');
    expect(t.text).toStrictEqual(['', 'enter text', 'example']);
    t.sendKey('tab');
    expect(c.getCurrentAnswer()).toBe('example');
    expect(t.text).toStrictEqual(['', 'enter text', 'example']);
    t.sendKey('tab');
    expect(c.getCurrentAnswer()).toBe('example');
    expect(t.text).toStrictEqual(['', 'enter text', 'example']);
    t.sendKey('backspace');
    expect(c.getCurrentAnswer()).toBe('exampl');
    expect(t.text).toStrictEqual(['', 'enter text', 'example']);
    t.sendKey('tab');
    expect(c.getCurrentAnswer()).toBe('example');
    expect(t.text).toStrictEqual(['', 'enter text', 'example']);
    t.sendKey('enter');
  });
});
