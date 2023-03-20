export type Random = (() => number) & { child: () => Random };

// Mulberry32 from https://stackoverflow.com/questions/521295/seeding-the-random-number-generator-in-javascript
export function random(seed_zero_to_one: number): Random {
  let a = Math.floor(seed_zero_to_one * 1000000);

  const state = function (): number {
    var t = (a += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };

  state.child = () => random(state());

  return state;
}
