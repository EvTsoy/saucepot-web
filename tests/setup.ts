import '@testing-library/jest-dom/vitest';
import { vi } from 'vitest';
import { createElement } from 'react';

vi.mock('next/image', () => ({
  default: (props: Record<string, unknown>) => {
    const rest = { ...props };
    delete rest.priority;
    delete rest.unoptimized;
    return createElement('img', rest);
  },
}));
import { cleanup } from '@testing-library/react';
import { afterEach } from 'vitest';

afterEach(() => cleanup());
