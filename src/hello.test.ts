import { hello } from './hello'
import { it, expect, vi } from 'vitest'

it ('should print Hello, World!', () => {
  console.log = vi.fn();
  hello();
  expect(console.log).toHaveBeenCalledWith("Hello, World!");
});
