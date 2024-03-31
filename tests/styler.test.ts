import {StylesObject, Styler} from '../source/Styler';

const styles: StylesObject = {
  testClass0: 'styler-scoped-base-class-0',
  'test-class-1': 'styler-scoped-base-class-1',
  testClass2: 'styler-scoped-base-class-2',
};

const theme: StylesObject = {
  testClass0: 'styler-theme-override-class-0',
  'test-class-1': 'styler-theme-override-class-1',
  testClass3: 'styler-theme-override-class-3',
};

interface TestOverrideStyler extends Styler {
  // ideally this should be string or array of strings, but adding unknown for handling more tests
  get: (className: unknown, others?: unknown) => string;
}

describe('Tests using only styles object', () => {
  const styler = new Styler(styles) as TestOverrideStyler;

  it('should handle empty input for get() method', () => {
    expect(styler.get('')).toEqual('');
  });

  it('should handle null input for get() method', () => {
    expect(styler.get(null)).toEqual('');
  });

  it('should handle undefined input for get() method', () => {
    expect(styler.get(undefined)).toEqual('');
  });

  it('should handle boolean input for get() method', () => {
    expect(styler.get([true])).toEqual('');
  });

  it('should handle unknown classname for get() method', () => {
    expect(styler.get(styles.missingClassName)).toEqual('');
  });

  it('should handle unknown classname for get() method as a string', () => {
    expect(styler.get('missingClassName')).toEqual('');
  });

  it('should not return scoped classname from get() method for resolved classname', () => {
    // This will pass `styler-scoped-base-class-0`, which is not a valid key in styles object
    expect(styler.get(styles.testClass0)).toEqual('');
  });

  it('should return scoped classname from get() method', () => {
    expect(styler.get('testClass0')).toEqual('styler-scoped-base-class-0');
  });

  it('should return scoped classname from get() method on passing className as array', () => {
    expect(styler.get(['testClass0'])).toEqual('styler-scoped-base-class-0');
  });

  it('should return multiple scoped classnames from get() method', () => {
    expect(styler.get('testClass0 test-class-1 testClass2')).toEqual(
      'styler-scoped-base-class-0 styler-scoped-base-class-1 styler-scoped-base-class-2'
    );
  });

  it('should return multiple scoped classnames from get() method on passing as array', () => {
    expect(styler.get(['testClass0', 'test-class-1', 'testClass2'])).toEqual(
      'styler-scoped-base-class-0 styler-scoped-base-class-1 styler-scoped-base-class-2'
    );
  });

  it('should return multiple scoped classnames from get() method based on conditions', () => {
    const isSomething = false;
    expect(
      styler.get([!isSomething ? 'testClass0' : 'test-class-1', 'testClass2'])
    ).toEqual('styler-scoped-base-class-0 styler-scoped-base-class-2');
  });

  it('should return scoped classname & resolved static classname from get() method on passing resolved as string', () => {
    expect(styler.get('testClass0', 'custom__classname1')).toEqual(
      'styler-scoped-base-class-0 custom__classname1'
    );
  });

  it('should return scoped classname & resolved static classnames from get() method on passing resolved as string', () => {
    expect(
      styler.get('testClass0', 'custom__classname1 custom__classname2')
    ).toEqual(
      'styler-scoped-base-class-0 custom__classname1 custom__classname2'
    );
  });

  it('should return scoped classname & resolved static classnames from get() method on passing resolved as array', () => {
    const isSomething = false;
    expect(
      styler.get(
        [!isSomething ? 'testClass0' : 'test-class-1', 'testClass2'],
        isSomething ? 'custom__classname1' : 'custom__classname2'
      )
    ).toEqual(
      'styler-scoped-base-class-0 styler-scoped-base-class-2 custom__classname2'
    );
  });

  it('should return scoped classname & resolved static classnames from get() method based on conditions', () => {
    expect(
      styler.get('testClass0', ['custom__classname1', 'custom__classname2'])
    ).toEqual(
      'styler-scoped-base-class-0 custom__classname1 custom__classname2'
    );
  });

  it('should handle empty input in both args for get() method', () => {
    expect(styler.get('', '')).toEqual('');
  });

  it('should handle null input in both args for get() method', () => {
    expect(styler.get(null, null)).toEqual('');
  });

  it('should handle undefined input in both args for get() method', () => {
    expect(styler.get(undefined, undefined)).toEqual('');
  });
});

describe('Tests using styles object & themes object', () => {
  const styler = new Styler(styles, theme) as TestOverrideStyler;

  it('should return scoped classname with override classname from get() method', () => {
    expect(styler.get('testClass0')).toEqual(
      'styler-scoped-base-class-0 styler-theme-override-class-0'
    );
  });

  it('should return scoped classname without override classname from get() method', () => {
    expect(styler.get('testClass2')).toEqual('styler-scoped-base-class-2');
  });

  it('should return scoped classname with override classname from get() method on passing className as array', () => {
    expect(styler.get(['testClass0'])).toEqual(
      'styler-scoped-base-class-0 styler-theme-override-class-0'
    );
  });

  it('should return multiple scoped classnames with override classnames from get() method', () => {
    expect(styler.get(['testClass0', 'test-class-1'])).toEqual(
      'styler-scoped-base-class-0 styler-theme-override-class-0 styler-scoped-base-class-1 styler-theme-override-class-1'
    );
  });

  it('should return multiple scoped classnames with override classnames(if available) from get() method', () => {
    expect(styler.get(['testClass0', 'test-class-1', 'testClass2'])).toEqual(
      'styler-scoped-base-class-0 styler-theme-override-class-0 styler-scoped-base-class-1 styler-theme-override-class-1 styler-scoped-base-class-2'
    );
  });

  it('should return multiple scoped classnames with override classnames(if available) from get() method based on conditions', () => {
    const isSomething = true;
    expect(
      styler.get([!isSomething ? 'testClass0' : 'test-class-1', 'testClass2'])
    ).toEqual(
      'styler-scoped-base-class-1 styler-theme-override-class-1 styler-scoped-base-class-2'
    );
  });

  it('should handle missing classname in base styles but present in override styles for get() method', () => {
    expect(styler.get('testClass3')).toEqual('styler-theme-override-class-3');
  });
});
