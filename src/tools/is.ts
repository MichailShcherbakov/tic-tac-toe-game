export function is<TValue extends object>(
  ...args: [...Array<boolean>, TValue]
) {
  const conditions = args.slice(0, -1) as Array<boolean>;
  const value = args.at(-1) as TValue;

  return conditions.every(Boolean) ? value : undefined;
}
