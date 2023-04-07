export function createBoxShadow(spacing: string, color: string): string {
  return `0 ${spacing} 0 ${color}, 0 ${spacing} 0 ${color}`;
}
