import test from 'ava';
import { any, all } from '../lib/index.macro';

test('all all true comparisons', (t) => {
  t.true(all(5, 5, 5) === all(5, 5));
  t.true(all(10, 11, 12) >= all(5, 5, 10));
  t.true(all(1, 2) < all(3, 4));
  t.true(all(2, 10) > all(0, 1));
  t.true(all(10, 1, 5) !== all(11, 13, 0));
});

test('all all false comparisons', (t) => {
  t.false(all(5, 5, 5) === all(1, 5));
  t.false(all(10, 11, 12) > all(5, 5, 10));
  t.false(all(1, 5) <= all(3, 4));
  t.false(all(2, 10) < all(0, 1));
  t.false(all(10, 5) !== all(10, 2));
});

test('all one true comparisons', (t) => {
  t.true(all(5, 5, 5) === 5);
  t.true(all(10, 11, 12) > 9);
  t.true(3 <= all(3, 4));
  t.true(-1 < all(0, 1));
  t.true(all(10, 5) !== 6);
});

test('all one false comparisons', (t) => {
  t.false(all(5, 5, 5) === 7);
  t.false(all(10, 11, 12) > 10);
  t.false(3 <= all(3, 2));
  t.false(10 < all(0, 1));
  t.false(all(10, 5) !== 10);
});

test('any any true comparisons', (t) => {
  t.true(any(5, 4, 3) === any(5, 0));
  t.true(any(10, 1, 2) >= any(5, 5, 10));
  t.true(any(7, 2) < any(3, 1));
  t.true(any(2, 1) > any(10, 1));
  t.true(any(10, 10) !== any(1, 10, 10));
});

test('any any false comparisons', (t) => {
  t.false(any(5, 4, 3) === any(15, 0));
  t.false(any(1, 2, 1) >= any(5, 5, 10));
  t.false(any(7, 3) < any(3, 1));
  t.false(any(2, 1) > any(10, 2));
  t.false(any(10, 10) !== any(10, 10, 10));
});

test('any one false comparisons', (t) => {
  t.false(any(5, 5, 5) === 7);
  t.false(any(10, 1, 8) > 10);
  t.false(3 <= any(1, 2));
  t.false(10 < any(0, 1));
  t.false(any(7, 7) !== 7);
});

test('any one true comparisons', (t) => {
  t.true(any(5, 10, 7) === 7);
  t.true(any(10, 11, 12) > 10);
  t.true(3 <= any(1, 3));
  t.true(10 < any(0, 11));
  t.true(any(10, 5) !== 7);
});
