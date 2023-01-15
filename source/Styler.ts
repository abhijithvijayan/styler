import {isEmpty, isString} from '@abhijithvijayan/ts-utils';

// generic types
export type NullOr<T> = null | T;
export type UndefinedOr<T> = undefined | T;
export type Nullable<T> = NullOr<UndefinedOr<T>>;

export type StylesObject = Record<string, string>;
export type Input = Nullable<boolean | string>;
export type InputType = Input | Array<InputType>;

export class Styler {
  private readonly _theme: StylesObject;

  private readonly _styles: StylesObject;

  constructor(styles: StylesObject, theme?: StylesObject) {
    this._styles = styles ?? {};
    this._theme = theme ?? {};
  }

  private _eliminateInvalids(list: Array<InputType>): string[] {
    return list.filter((c) => isString(c)) as string[];
  }

  get(className: InputType, others?: InputType): string {
    let unresolved: string[] = [];
    if (!isEmpty(className)) {
      if (isString(className)) {
        // if unresolved is of type `<class1> <class2> <class3>`, split and resolve individually
        unresolved = className.split(' ');
      } else if (Array.isArray(className)) {
        // if unresolved is of type `[<class1>, <class2>, <class3>]`
        unresolved = this._eliminateInvalids(className);
      }
    }

    const classNames = unresolved.reduce<string[]>((prev, curr) => {
      if (!isEmpty(curr)) {
        // get the resolved class name from styles object
        const base = this._styles[curr];
        // get the resolved class name from themes object
        const override = this._theme[curr];

        // form the joined class: '<base class> <resolved class>'
        prev.push(
          `${!isEmpty(base) ? base : ''} ${!isEmpty(override) ? override : ''}`
        );
      }

      return prev;
    }, []);

    let resolved: string[] = [];
    if (!isEmpty(others)) {
      if (isString(others)) {
        // if others is of type `<class1> <class2> <class3>`
        resolved = others.split(' ');
      } else if (Array.isArray(others)) {
        // if others is of type `[<class1>, <class2>, <class3>]`
        resolved = this._eliminateInvalids(others);
      }
    }

    return [...classNames, ...resolved]
      .reduce<string>((prev, curr) => {
        // when there is no associated resolved class from themes object,
        // the curr string could be like '<base class> ' // note the space after
        const resolvedClassName = curr.trim();

        return !isEmpty(resolvedClassName)
          ? `${prev} ${resolvedClassName}`
          : prev;
      }, '')
      .trim();
  }
}
