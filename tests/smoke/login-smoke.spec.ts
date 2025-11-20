import * as dotenv from 'dotenv';
dotenv.config();

import { test, expect } from '../../helpers/test-fixtures';

test('Login - Smoke', async ({ auth }) => {
  expect(true).toBeTruthy();
});
