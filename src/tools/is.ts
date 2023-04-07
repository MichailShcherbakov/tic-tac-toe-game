export function is(...args: [...Array<boolean>, any]) {
  const conditions = args.slice(0, -1) as Array<boolean>;
  const value = args.at(-1);

  return conditions.every(Boolean) ? value : undefined;
}
