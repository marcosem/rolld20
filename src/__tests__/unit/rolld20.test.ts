import {
  flipCoin,
  d2,
  d3,
  d4,
  d6,
  d8,
  d10,
  d12,
  d20,
  d30,
  d60,
  d100,
  d1000,
  janKenPo,
  compareJanKenPo,
} from '../../index';

describe('Rolld20 Tests', () => {
  it('flipCoin should result in heads or tails only', () => {
    const coinResult = flipCoin();

    expect(coinResult).toMatch(/^(heads|tails)$/);
  });

  it('d2 should return values between 1 and 2', () => {
    const d2Result = d2();

    expect(d2Result).toBeGreaterThanOrEqual(1);
    expect(d2Result).toBeLessThanOrEqual(2);
  });

  it('d2 array should return values between 1 and 2', () => {
    const d2Results = d2(3);

    expect(Array.isArray(d2Results)).toBe(true);
    expect(d2Results).toHaveLength(3);

    if (Array.isArray(d2Results)) {
      expect(d2Results[0]).toBeGreaterThanOrEqual(1);
      expect(d2Results[0]).toBeLessThanOrEqual(2);
      expect(d2Results[1]).toBeGreaterThanOrEqual(1);
      expect(d2Results[1]).toBeLessThanOrEqual(2);
      expect(d2Results[2]).toBeGreaterThanOrEqual(1);
      expect(d2Results[2]).toBeLessThanOrEqual(2);
    }
  });

  it('d3 should return values between 1 and 3', () => {
    const d3Result = d3();

    expect(d3Result).toBeGreaterThanOrEqual(1);
    expect(d3Result).toBeLessThanOrEqual(3);
  });

  it('d3 array should return values between 1 and 3', () => {
    const d3Results = d3(3);

    expect(Array.isArray(d3Results)).toBe(true);
    expect(d3Results).toHaveLength(3);

    if (Array.isArray(d3Results)) {
      expect(d3Results[0]).toBeGreaterThanOrEqual(1);
      expect(d3Results[0]).toBeLessThanOrEqual(3);
      expect(d3Results[1]).toBeGreaterThanOrEqual(1);
      expect(d3Results[1]).toBeLessThanOrEqual(3);
      expect(d3Results[2]).toBeGreaterThanOrEqual(1);
      expect(d3Results[2]).toBeLessThanOrEqual(3);
    }
  });

  it('d4 should return values between 1 and 4', () => {
    const d4Result = d4();

    expect(d4Result).toBeGreaterThanOrEqual(1);
    expect(d4Result).toBeLessThanOrEqual(4);
  });

  it('d4 array should return values between 1 and 4', () => {
    const d4Results = d4(3);

    expect(Array.isArray(d4Results)).toBe(true);
    expect(d4Results).toHaveLength(3);

    if (Array.isArray(d4Results)) {
      expect(d4Results[0]).toBeGreaterThanOrEqual(1);
      expect(d4Results[0]).toBeLessThanOrEqual(4);
      expect(d4Results[1]).toBeGreaterThanOrEqual(1);
      expect(d4Results[1]).toBeLessThanOrEqual(4);
      expect(d4Results[2]).toBeGreaterThanOrEqual(1);
      expect(d4Results[2]).toBeLessThanOrEqual(4);
    }
  });

  it('d6 should return values between 1 and 6', () => {
    const d6Result = d6();

    expect(d6Result).toBeGreaterThanOrEqual(1);
    expect(d6Result).toBeLessThanOrEqual(6);
  });

  it('d6 array should return values between 1 and 6', () => {
    const d6Results = d6(3);

    expect(Array.isArray(d6Results)).toBe(true);
    expect(d6Results).toHaveLength(3);

    if (Array.isArray(d6Results)) {
      expect(d6Results[0]).toBeGreaterThanOrEqual(1);
      expect(d6Results[0]).toBeLessThanOrEqual(6);
      expect(d6Results[1]).toBeGreaterThanOrEqual(1);
      expect(d6Results[1]).toBeLessThanOrEqual(6);
      expect(d6Results[2]).toBeGreaterThanOrEqual(1);
      expect(d6Results[2]).toBeLessThanOrEqual(6);
    }
  });

  it('d8 should return values between 1 and 8', () => {
    const d8Result = d8();

    expect(d8Result).toBeGreaterThanOrEqual(1);
    expect(d8Result).toBeLessThanOrEqual(8);
  });

  it('d8 array should return values between 1 and 8', () => {
    const d8Results = d8(3);

    expect(Array.isArray(d8Results)).toBe(true);
    expect(d8Results).toHaveLength(3);

    if (Array.isArray(d8Results)) {
      expect(d8Results[0]).toBeGreaterThanOrEqual(1);
      expect(d8Results[0]).toBeLessThanOrEqual(8);
      expect(d8Results[1]).toBeGreaterThanOrEqual(1);
      expect(d8Results[1]).toBeLessThanOrEqual(8);
      expect(d8Results[2]).toBeGreaterThanOrEqual(1);
      expect(d8Results[2]).toBeLessThanOrEqual(8);
    }
  });

  it('d10 should return values between 1 and 10', () => {
    const d10Result = d10();

    expect(d10Result).toBeGreaterThanOrEqual(1);
    expect(d10Result).toBeLessThanOrEqual(10);
  });

  it('d10 array should return values between 1 and 10', () => {
    const d10Results = d10(3);

    expect(Array.isArray(d10Results)).toBe(true);
    expect(d10Results).toHaveLength(3);

    if (Array.isArray(d10Results)) {
      expect(d10Results[0]).toBeGreaterThanOrEqual(1);
      expect(d10Results[0]).toBeLessThanOrEqual(10);
      expect(d10Results[1]).toBeGreaterThanOrEqual(1);
      expect(d10Results[1]).toBeLessThanOrEqual(10);
      expect(d10Results[2]).toBeGreaterThanOrEqual(1);
      expect(d10Results[2]).toBeLessThanOrEqual(10);
    }
  });

  it('d12 should return values between 1 and 12', () => {
    const d12Result = d12();

    expect(d12Result).toBeGreaterThanOrEqual(1);
    expect(d12Result).toBeLessThanOrEqual(12);
  });

  it('d12 array should return values between 1 and 12', () => {
    const d12Results = d12(3);

    expect(Array.isArray(d12Results)).toBe(true);
    expect(d12Results).toHaveLength(3);

    if (Array.isArray(d12Results)) {
      expect(d12Results[0]).toBeGreaterThanOrEqual(1);
      expect(d12Results[0]).toBeLessThanOrEqual(12);
      expect(d12Results[1]).toBeGreaterThanOrEqual(1);
      expect(d12Results[1]).toBeLessThanOrEqual(12);
      expect(d12Results[2]).toBeGreaterThanOrEqual(1);
      expect(d12Results[2]).toBeLessThanOrEqual(12);
    }
  });

  it('d20 should return values between 1 and 20', () => {
    const d20Result = d20();

    expect(d20Result).toBeGreaterThanOrEqual(1);
    expect(d20Result).toBeLessThanOrEqual(20);
  });

  it('d20 array should return values between 1 and 20', () => {
    const d20Results = d20(3);

    expect(Array.isArray(d20Results)).toBe(true);
    expect(d20Results).toHaveLength(3);

    if (Array.isArray(d20Results)) {
      expect(d20Results[0]).toBeGreaterThanOrEqual(1);
      expect(d20Results[0]).toBeLessThanOrEqual(20);
      expect(d20Results[1]).toBeGreaterThanOrEqual(1);
      expect(d20Results[1]).toBeLessThanOrEqual(20);
      expect(d20Results[2]).toBeGreaterThanOrEqual(1);
      expect(d20Results[2]).toBeLessThanOrEqual(20);
    }
  });

  it('d30 should return values between 1 and 30', () => {
    const d30Result = d30();

    expect(d30Result).toBeGreaterThanOrEqual(1);
    expect(d30Result).toBeLessThanOrEqual(30);
  });

  it('d30 array should return values between 1 and 30', () => {
    const d30Results = d30(3);

    expect(Array.isArray(d30Results)).toBe(true);
    expect(d30Results).toHaveLength(3);

    if (Array.isArray(d30Results)) {
      expect(d30Results[0]).toBeGreaterThanOrEqual(1);
      expect(d30Results[0]).toBeLessThanOrEqual(30);
      expect(d30Results[1]).toBeGreaterThanOrEqual(1);
      expect(d30Results[1]).toBeLessThanOrEqual(30);
      expect(d30Results[2]).toBeGreaterThanOrEqual(1);
      expect(d30Results[2]).toBeLessThanOrEqual(30);
    }
  });

  it('d60 should return values between 1 and 60', () => {
    const d60Result = d60();

    expect(d60Result).toBeGreaterThanOrEqual(1);
    expect(d60Result).toBeLessThanOrEqual(60);
  });

  it('d60 array should return values between 1 and 60', () => {
    const d60Results = d60(3);

    expect(Array.isArray(d60Results)).toBe(true);
    expect(d60Results).toHaveLength(3);

    if (Array.isArray(d60Results)) {
      expect(d60Results[0]).toBeGreaterThanOrEqual(1);
      expect(d60Results[0]).toBeLessThanOrEqual(60);
      expect(d60Results[1]).toBeGreaterThanOrEqual(1);
      expect(d60Results[1]).toBeLessThanOrEqual(60);
      expect(d60Results[2]).toBeGreaterThanOrEqual(1);
      expect(d60Results[2]).toBeLessThanOrEqual(60);
    }
  });

  it('d100 should return values between 1 and 100', () => {
    const d100Result = d100();

    expect(d100Result).toBeGreaterThanOrEqual(1);
    expect(d100Result).toBeLessThanOrEqual(100);
  });

  it('d100 array should return values between 1 and 100', () => {
    const d100Results = d100(3);

    expect(Array.isArray(d100Results)).toBe(true);
    expect(d100Results).toHaveLength(3);

    if (Array.isArray(d100Results)) {
      expect(d100Results[0]).toBeGreaterThanOrEqual(1);
      expect(d100Results[0]).toBeLessThanOrEqual(100);
      expect(d100Results[1]).toBeGreaterThanOrEqual(1);
      expect(d100Results[1]).toBeLessThanOrEqual(100);
      expect(d100Results[2]).toBeGreaterThanOrEqual(1);
      expect(d100Results[2]).toBeLessThanOrEqual(100);
    }
  });

  it('d1000 should return values between 1 and 1000', () => {
    const d1000Result = d1000();

    expect(d1000Result).toBeGreaterThanOrEqual(1);
    expect(d1000Result).toBeLessThanOrEqual(1000);
  });

  it('d1000 array should return values between 1 and 1000', () => {
    const d1000Results = d1000(3);

    expect(Array.isArray(d1000Results)).toBe(true);
    expect(d1000Results).toHaveLength(3);

    if (Array.isArray(d1000Results)) {
      expect(d1000Results[0]).toBeGreaterThanOrEqual(1);
      expect(d1000Results[0]).toBeLessThanOrEqual(1000);
      expect(d1000Results[1]).toBeGreaterThanOrEqual(1);
      expect(d1000Results[1]).toBeLessThanOrEqual(1000);
      expect(d1000Results[2]).toBeGreaterThanOrEqual(1);
      expect(d1000Results[2]).toBeLessThanOrEqual(1000);
    }
  });

  it('Any dice should return -1 when there is error', () => {
    expect(d2(0)).toBe(-1);
  });

  it('janKenPo should return rock, paper, or scissors only', () => {
    const jkp = janKenPo();

    expect(jkp).toMatch(/^(rock|paper|scissors)$/);
  });

  it('janKenPo with bomb should return rock, paper, scissors, or bomb', () => {
    const jkp = janKenPo(true);

    expect(jkp).toMatch(/^(rock|paper|scissors|bomb)$/);
  });

  describe('compareJanKenPo should return the correct winner', () => {
    it('Rock beats scissors', () => {
      expect(compareJanKenPo({ player1: 'rock', player2: 'scissors' })).toBe(
        -1,
      );

      expect(compareJanKenPo({ player1: 'scissors', player2: 'rock' })).toBe(1);
    });

    it('Scissors beats paper and bomb', () => {
      expect(compareJanKenPo({ player1: 'scissors', player2: 'paper' })).toBe(
        -1,
      );
      expect(compareJanKenPo({ player1: 'scissors', player2: 'bomb' })).toBe(
        -1,
      );

      expect(compareJanKenPo({ player1: 'paper', player2: 'scissors' })).toBe(
        1,
      );
      expect(compareJanKenPo({ player1: 'bomb', player2: 'scissors' })).toBe(1);
    });

    it('Paper beats rock', () => {
      expect(compareJanKenPo({ player1: 'paper', player2: 'rock' })).toBe(-1);
      expect(compareJanKenPo({ player1: 'rock', player2: 'paper' })).toBe(1);
    });

    it('Bomb beats rock and paper', () => {
      expect(compareJanKenPo({ player1: 'bomb', player2: 'paper' })).toBe(-1);
      expect(compareJanKenPo({ player1: 'bomb', player2: 'rock' })).toBe(-1);

      expect(compareJanKenPo({ player1: 'paper', player2: 'bomb' })).toBe(1);
      expect(compareJanKenPo({ player1: 'rock', player2: 'bomb' })).toBe(1);
    });

    it('Same Pos should results in a tie', () => {
      expect(compareJanKenPo({ player1: 'rock', player2: 'rock' })).toBe(0);
      expect(compareJanKenPo({ player1: 'paper', player2: 'paper' })).toBe(0);
      expect(
        compareJanKenPo({ player1: 'scissors', player2: 'scissors' }),
      ).toBe(0);
      expect(compareJanKenPo({ player1: 'bomb', player2: 'bomb' })).toBe(0);
    });
  });
});
