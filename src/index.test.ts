import { bits, bytes } from '.';

describe(`pretty print bits and bytes`, () => {
  describe(`pretty print bits`, () => {
    it(`convert 1`, () => {
      expect(bits(1)).toBe('1 b');
    });

    it(`convert 0`, () => {
      expect(bits(0)).toBe('0 b');
    });

    it(`convert 3`, () => {
      expect(bits(3)).toBe('3 b');
    });

    it(`convert 11`, () => {
      expect(bits(11)).toBe('11 b');
    });

    it(`convert 123`, () => {
      expect(bits(123)).toBe('123 b');
    });

    it(`convert 999`, () => {
      expect(bits(999)).toBe('999 b');
    });

    it(`convert 1000`, () => {
      expect(bits(1000)).toBe('1 kbit');
    });

    it(`convert 1001`, () => {
      expect(bits(1001)).toBe('1 kbit');
    });

    it(`convert 1020`, () => {
      expect(bits(1020)).toBe('1.02 kbit');
    });

    it(`convert 1030`, () => {
      expect(bits(1030)).toBe('1.03 kbit');
    });

    it(`convert 1200`, () => {
      expect(bits(1200)).toBe('1.2 kbit');
    });

    it(`convert 1230`, () => {
      expect(bits(1230)).toBe('1.23 kbit');
    });

    it(`convert 1234`, () => {
      expect(bits(1234)).toBe('1.23 kbit');
    });

    it(`convert 1999`, () => {
      expect(bits(1999)).toBe('2 kbit');
    });

    it(`convert 11000`, () => {
      expect(bits(11000)).toBe('11 kbit');
    });

    it(`convert 11001`, () => {
      expect(bits(11001)).toBe('11 kbit');
    });

    it(`convert 11020`, () => {
      expect(bits(11020)).toBe('11 kbit');
    });

    it(`convert 11030`, () => {
      expect(bits(11030)).toBe('11 kbit');
    });

    it(`convert 11200`, () => {
      expect(bits(11200)).toBe('11.2 kbit');
    });

    it(`convert 11230`, () => {
      expect(bits(11230)).toBe('11.2 kbit');
    });

    it(`convert 11234`, () => {
      expect(bits(11234)).toBe('11.2 kbit');
    });

    it(`convert 21999`, () => {
      expect(bits(21999)).toBe('22 kbit');
    });

    it(`convert 211000`, () => {
      expect(bits(211000)).toBe('211 kbit');
    });

    it(`convert 211001`, () => {
      expect(bits(211001)).toBe('211 kbit');
    });

    it(`convert 211020`, () => {
      expect(bits(211020)).toBe('211 kbit');
    });

    it(`convert 211030`, () => {
      expect(bits(211030)).toBe('211 kbit');
    });

    it(`convert 211200`, () => {
      expect(bits(211200)).toBe('211 kbit');
    });

    it(`convert 211230`, () => {
      expect(bits(211230)).toBe('211 kbit');
    });

    it(`convert 21234`, () => {
      expect(bits(211234)).toBe('211 kbit');
    });

    it(`convert 321999`, () => {
      expect(bits(321999)).toBe('322 kbit');
    });

    it(`convert 3211000`, () => {
      expect(bits(3211000)).toBe('3.21 Mbit');
    });

    it(`convert 3211001`, () => {
      expect(bits(3211001)).toBe('3.21 Mbit');
    });

    it(`convert 3284751`, () => {
      expect(bits(3284751)).toBe('3.28 Mbit');
    });

    it(`convert 3274638`, () => {
      expect(bits(3274638)).toBe('3.27 Mbit');
    });

    it(`convert 3273647`, () => {
      expect(bits(3273647)).toBe('3.27 Mbit');
    });

    it(`convert 32475638`, () => {
      expect(bits(32475638)).toBe('32.5 Mbit');
    });

    it(`convert 392299374`, () => {
      expect(bits(392299374)).toBe('392 Mbit');
    });

    it(`convert 639422299374`, () => {
      expect(bits(639422299374)).toBe('639 Gbit');
    });

    it(`convert 963249422299374`, () => {
      expect(bits(963249422299374)).toBe('963 Tbit');
    });

    it(`convert 92263249422299374`, () => {
      expect(bits(96223249422299374)).toBe('96.2 Pbit');
    });

    it(`convert 1092263249422299374`, () => {
      expect(bits(1096223249422299374)).toBe('1.1 Ebit');
    });

    it(`convert 9931092263249422299374`, () => {
      expect(bits(9931096223249422299374)).toBe('9.93 Zbit');
    });

    it(`convert 209931092263249422299374`, () => {
      expect(bits(209931096223249422299374)).toBe('210 Zbit');
    });

    it(`convert 10209931092263249422299374`, () => {
      expect(bits(10209931096223249422299374)).toBe('10.2 Ybit');
    });

    it(`convert 110030209931092263249422299374`, () => {
      expect(bits(110030209931092263249422299374)).toBe('110,000 Ybit');
    });
  });

  describe(`pretty print bytes`, () => {
    it(`convert 1`, () => {
      expect(bytes(1)).toBe('1 B');
    });

    it(`convert 0`, () => {
      expect(bytes(0)).toBe('0 B');
    });

    it(`convert 3`, () => {
      expect(bytes(3)).toBe('3 B');
    });

    it(`convert 11`, () => {
      expect(bytes(11)).toBe('11 B');
    });

    it(`convert 123`, () => {
      expect(bytes(123)).toBe('123 B');
    });

    it(`convert 999`, () => {
      expect(bytes(999)).toBe('999 B');
    });

    it(`convert 1000`, () => {
      expect(bytes(1000)).toBe('1 kB');
    });

    it(`convert 1001`, () => {
      expect(bytes(1001)).toBe('1 kB');
    });

    it(`convert 1020`, () => {
      expect(bytes(1020)).toBe('1.02 kB');
    });

    it(`convert 1030`, () => {
      expect(bytes(1030)).toBe('1.03 kB');
    });

    it(`convert 1200`, () => {
      expect(bytes(1200)).toBe('1.2 kB');
    });

    it(`convert 1230`, () => {
      expect(bytes(1230)).toBe('1.23 kB');
    });

    it(`convert 1234`, () => {
      expect(bytes(1234)).toBe('1.23 kB');
    });

    it(`convert 1999`, () => {
      expect(bytes(1999)).toBe('2 kB');
    });

    it(`convert 11000`, () => {
      expect(bytes(11000)).toBe('11 kB');
    });

    it(`convert 11001`, () => {
      expect(bytes(11001)).toBe('11 kB');
    });

    it(`convert 11020`, () => {
      expect(bytes(11020)).toBe('11 kB');
    });

    it(`convert 11030`, () => {
      expect(bytes(11030)).toBe('11 kB');
    });

    it(`convert 11200`, () => {
      expect(bytes(11200)).toBe('11.2 kB');
    });

    it(`convert 11230`, () => {
      expect(bytes(11230)).toBe('11.2 kB');
    });

    it(`convert 11234`, () => {
      expect(bytes(11234)).toBe('11.2 kB');
    });

    it(`convert 21999`, () => {
      expect(bytes(21999)).toBe('22 kB');
    });

    it(`convert 211000`, () => {
      expect(bytes(211000)).toBe('211 kB');
    });

    it(`convert 211001`, () => {
      expect(bytes(211001)).toBe('211 kB');
    });

    it(`convert 211020`, () => {
      expect(bytes(211020)).toBe('211 kB');
    });

    it(`convert 211030`, () => {
      expect(bytes(211030)).toBe('211 kB');
    });

    it(`convert 211200`, () => {
      expect(bytes(211200)).toBe('211 kB');
    });

    it(`convert 211230`, () => {
      expect(bytes(211230)).toBe('211 kB');
    });

    it(`convert 21234`, () => {
      expect(bytes(211234)).toBe('211 kB');
    });

    it(`convert 321999`, () => {
      expect(bytes(321999)).toBe('322 kB');
    });

    it(`convert 3211000`, () => {
      expect(bytes(3211000)).toBe('3.21 MB');
    });

    it(`convert 3211001`, () => {
      expect(bytes(3211001)).toBe('3.21 MB');
    });

    it(`convert 3284751`, () => {
      expect(bytes(3284751)).toBe('3.28 MB');
    });

    it(`convert 3274638`, () => {
      expect(bytes(3274638)).toBe('3.27 MB');
    });

    it(`convert 3273647`, () => {
      expect(bytes(3273647)).toBe('3.27 MB');
    });

    it(`convert 32475638`, () => {
      expect(bytes(32475638)).toBe('32.5 MB');
    });

    it(`convert 392299374`, () => {
      expect(bytes(392299374)).toBe('392 MB');
    });

    it(`convert 639422299374`, () => {
      expect(bytes(639422299374)).toBe('639 GB');
    });

    it(`convert 963249422299374`, () => {
      expect(bytes(963249422299374)).toBe('963 TB');
    });

    it(`convert 92263249422299374`, () => {
      expect(bytes(96223249422299374)).toBe('96.2 PB');
    });

    it(`convert 1092263249422299374`, () => {
      expect(bytes(1096223249422299374)).toBe('1.1 EB');
    });

    it(`convert 9931092263249422299374`, () => {
      expect(bytes(9931096223249422299374)).toBe('9.93 ZB');
    });

    it(`convert 209931092263249422299374`, () => {
      expect(bytes(209931096223249422299374)).toBe('210 ZB');
    });

    it(`convert 10209931092263249422299374`, () => {
      expect(bytes(10209931096223249422299374)).toBe('10.2 YB');
    });

    it(`convert 110030209931092263249422299374`, () => {
      expect(bytes(110030209931092263249422299374)).toBe('110,000 YB');
    });
  });

  // NEGATIVE

  describe(`pretty print negative bits`, () => {
    it(`convert -1`, () => {
      expect(bits(-1)).toBe('-1 b');
    });

    it(`convert -3`, () => {
      expect(bits(-3)).toBe('-3 b');
    });

    it(`convert -11`, () => {
      expect(bits(-11)).toBe('-11 b');
    });

    it(`convert -123`, () => {
      expect(bits(-123)).toBe('-123 b');
    });

    it(`convert -999`, () => {
      expect(bits(-999)).toBe('-999 b');
    });

    it(`convert -1000`, () => {
      expect(bits(-1000)).toBe('-1 kbit');
    });

    it(`convert -1001`, () => {
      expect(bits(-1001)).toBe('-1 kbit');
    });

    it(`convert -1020`, () => {
      expect(bits(-1020)).toBe('-1.02 kbit');
    });

    it(`convert -1030`, () => {
      expect(bits(-1030)).toBe('-1.03 kbit');
    });

    it(`convert -1200`, () => {
      expect(bits(-1200)).toBe('-1.2 kbit');
    });

    it(`convert -1230`, () => {
      expect(bits(-1230)).toBe('-1.23 kbit');
    });

    it(`convert -1234`, () => {
      expect(bits(-1234)).toBe('-1.23 kbit');
    });

    it(`convert -1999`, () => {
      expect(bits(-1999)).toBe('-2 kbit');
    });

    it(`convert -11000`, () => {
      expect(bits(-11000)).toBe('-11 kbit');
    });

    it(`convert -11001`, () => {
      expect(bits(-11001)).toBe('-11 kbit');
    });

    it(`convert -11020`, () => {
      expect(bits(-11020)).toBe('-11 kbit');
    });

    it(`convert -11030`, () => {
      expect(bits(-11030)).toBe('-11 kbit');
    });

    it(`convert -11200`, () => {
      expect(bits(-11200)).toBe('-11.2 kbit');
    });

    it(`convert -11230`, () => {
      expect(bits(-11230)).toBe('-11.2 kbit');
    });

    it(`convert -11234`, () => {
      expect(bits(-11234)).toBe('-11.2 kbit');
    });

    it(`convert -21999`, () => {
      expect(bits(-21999)).toBe('-22 kbit');
    });

    it(`convert -211000`, () => {
      expect(bits(-211000)).toBe('-211 kbit');
    });

    it(`convert -211001`, () => {
      expect(bits(-211001)).toBe('-211 kbit');
    });

    it(`convert -211020`, () => {
      expect(bits(-211020)).toBe('-211 kbit');
    });

    it(`convert -211030`, () => {
      expect(bits(-211030)).toBe('-211 kbit');
    });

    it(`convert -211200`, () => {
      expect(bits(-211200)).toBe('-211 kbit');
    });

    it(`convert -211230`, () => {
      expect(bits(-211230)).toBe('-211 kbit');
    });

    it(`convert -21234`, () => {
      expect(bits(-211234)).toBe('-211 kbit');
    });

    it(`convert -321999`, () => {
      expect(bits(-321999)).toBe('-322 kbit');
    });

    it(`convert -3211000`, () => {
      expect(bits(-3211000)).toBe('-3.21 Mbit');
    });

    it(`convert -3211001`, () => {
      expect(bits(-3211001)).toBe('-3.21 Mbit');
    });

    it(`convert -3284751`, () => {
      expect(bits(-3284751)).toBe('-3.28 Mbit');
    });

    it(`convert -3274638`, () => {
      expect(bits(-3274638)).toBe('-3.27 Mbit');
    });

    it(`convert -3273647`, () => {
      expect(bits(-3273647)).toBe('-3.27 Mbit');
    });

    it(`convert -32475638`, () => {
      expect(bits(-32475638)).toBe('-32.5 Mbit');
    });

    it(`convert -392299374`, () => {
      expect(bits(-392299374)).toBe('-392 Mbit');
    });

    it(`convert -639422299374`, () => {
      expect(bits(-639422299374)).toBe('-639 Gbit');
    });

    it(`convert -963249422299374`, () => {
      expect(bits(-963249422299374)).toBe('-963 Tbit');
    });

    it(`convert -92263249422299374`, () => {
      expect(bits(-96223249422299374)).toBe('-96.2 Pbit');
    });

    it(`convert -1092263249422299374`, () => {
      expect(bits(-1096223249422299374)).toBe('-1.1 Ebit');
    });

    it(`convert -9931092263249422299374`, () => {
      expect(bits(-9931096223249422299374)).toBe('-9.93 Zbit');
    });

    it(`convert -209931092263249422299374`, () => {
      expect(bits(-209931096223249422299374)).toBe('-210 Zbit');
    });

    it(`convert -10209931092263249422299374`, () => {
      expect(bits(-10209931096223249422299374)).toBe('-10.2 Ybit');
    });

    it(`convert -110030209931092263249422299374`, () => {
      expect(bits(-110030209931092263249422299374)).toBe('-110,000 Ybit');
    });
  });

  describe(`pretty print negative bytes`, () => {
    it(`convert -1`, () => {
      expect(bytes(-1)).toBe('-1 B');
    });

    it(`convert -0`, () => {
      expect(bytes(-0)).toBe('0 B');
    });

    it(`convert -3`, () => {
      expect(bytes(-3)).toBe('-3 B');
    });

    it(`convert -11`, () => {
      expect(bytes(-11)).toBe('-11 B');
    });

    it(`convert -123`, () => {
      expect(bytes(-123)).toBe('-123 B');
    });

    it(`convert -999`, () => {
      expect(bytes(-999)).toBe('-999 B');
    });

    it(`convert -1000`, () => {
      expect(bytes(-1000)).toBe('-1 kB');
    });

    it(`convert -1001`, () => {
      expect(bytes(-1001)).toBe('-1 kB');
    });

    it(`convert -1020`, () => {
      expect(bytes(-1020)).toBe('-1.02 kB');
    });

    it(`convert -1030`, () => {
      expect(bytes(-1030)).toBe('-1.03 kB');
    });

    it(`convert -1200`, () => {
      expect(bytes(-1200)).toBe('-1.2 kB');
    });

    it(`convert -1230`, () => {
      expect(bytes(-1230)).toBe('-1.23 kB');
    });

    it(`convert -1234`, () => {
      expect(bytes(-1234)).toBe('-1.23 kB');
    });

    it(`convert -1999`, () => {
      expect(bytes(-1999)).toBe('-2 kB');
    });

    it(`convert -11000`, () => {
      expect(bytes(-11000)).toBe('-11 kB');
    });

    it(`convert -11001`, () => {
      expect(bytes(-11001)).toBe('-11 kB');
    });

    it(`convert -11020`, () => {
      expect(bytes(-11020)).toBe('-11 kB');
    });

    it(`convert -11030`, () => {
      expect(bytes(-11030)).toBe('-11 kB');
    });

    it(`convert -11200`, () => {
      expect(bytes(-11200)).toBe('-11.2 kB');
    });

    it(`convert -11230`, () => {
      expect(bytes(-11230)).toBe('-11.2 kB');
    });

    it(`convert -11234`, () => {
      expect(bytes(-11234)).toBe('-11.2 kB');
    });

    it(`convert -21999`, () => {
      expect(bytes(-21999)).toBe('-22 kB');
    });

    it(`convert -211000`, () => {
      expect(bytes(-211000)).toBe('-211 kB');
    });

    it(`convert -211001`, () => {
      expect(bytes(-211001)).toBe('-211 kB');
    });

    it(`convert -211020`, () => {
      expect(bytes(-211020)).toBe('-211 kB');
    });

    it(`convert -211030`, () => {
      expect(bytes(-211030)).toBe('-211 kB');
    });

    it(`convert -211200`, () => {
      expect(bytes(-211200)).toBe('-211 kB');
    });

    it(`convert -211230`, () => {
      expect(bytes(-211230)).toBe('-211 kB');
    });

    it(`convert -21234`, () => {
      expect(bytes(-211234)).toBe('-211 kB');
    });

    it(`convert -321999`, () => {
      expect(bytes(-321999)).toBe('-322 kB');
    });

    it(`convert -3211000`, () => {
      expect(bytes(-3211000)).toBe('-3.21 MB');
    });

    it(`convert -3211001`, () => {
      expect(bytes(-3211001)).toBe('-3.21 MB');
    });

    it(`convert -3284751`, () => {
      expect(bytes(-3284751)).toBe('-3.28 MB');
    });

    it(`convert -3274638`, () => {
      expect(bytes(-3274638)).toBe('-3.27 MB');
    });

    it(`convert -3273647`, () => {
      expect(bytes(-3273647)).toBe('-3.27 MB');
    });

    it(`convert -32475638`, () => {
      expect(bytes(-32475638)).toBe('-32.5 MB');
    });

    it(`convert -392299374`, () => {
      expect(bytes(-392299374)).toBe('-392 MB');
    });

    it(`convert -639422299374`, () => {
      expect(bytes(-639422299374)).toBe('-639 GB');
    });

    it(`convert -963249422299374`, () => {
      expect(bytes(-963249422299374)).toBe('-963 TB');
    });

    it(`convert -92263249422299374`, () => {
      expect(bytes(-96223249422299374)).toBe('-96.2 PB');
    });

    it(`convert -1092263249422299374`, () => {
      expect(bytes(-1096223249422299374)).toBe('-1.1 EB');
    });

    it(`convert -9931092263249422299374`, () => {
      expect(bytes(-9931096223249422299374)).toBe('-9.93 ZB');
    });

    it(`convert -209931092263249422299374`, () => {
      expect(bytes(-209931096223249422299374)).toBe('-210 ZB');
    });

    it(`convert -10209931092263249422299374`, () => {
      expect(bytes(-10209931096223249422299374)).toBe('-10.2 YB');
    });

    it(`convert -110030209931092263249422299374`, () => {
      expect(bytes(-110030209931092263249422299374)).toBe('-110,000 YB');
    });
  });
});
