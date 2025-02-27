export interface FormatQuantityOptions {
  /**
   * Output vulgar fractions, like "½" instead of "1/2", when appropriate.
   * Overrides the `fractionSlash` option.
   */
  vulgarFractions?: boolean;
  /**
   * Amount by which a number can deviate from the calculated quotient to be
   * considered a match. For example, 0.66 is close enough to 2 ÷ 3 (which
   * is 0.66666... repeating) to be considered equivalent so the function
   * will return "2/3". The smaller this number, the higher the likelihood that
   * the function will return a decimal instead of a fraction or mixed number.
   *
   * @default 0.009
   */
  tolerance?: number;
  /**
   * Output the fraction slash character (⁄) instead of the "solidus"
   * slash (/) for fractions. Results appear like "1⁄2" instead of "1/2".
   * Overridden by the `vulgarFractions` option.
   */
  fractionSlash?: boolean;
}

export type FormatQuantity = (
  qty: string | number,
  options?: boolean | FormatQuantityOptions
) => string | null;

export type VulgarFraction =
  | '¼' // '\u00bc' | 0.25
  | '½' // '\u00bd' | 0.5
  | '¾' // '\u00be' | 0.75
  | '⅐' // '\u2150' | 0.142857...
  | '⅑' // '\u2151' | 0.111...
  | '⅒' // '\u2152' | 0.1
  | '⅓' // '\u2153' | 0.333...
  | '⅔' // '\u2154' | 0.666...
  | '⅕' // '\u2155' | 0.2
  | '⅖' // '\u2156' | 0.4
  | '⅗' // '\u2157' | 0.6
  | '⅘' // '\u2158' | 0.8
  | '⅙' // '\u2159' | 0.166...
  | '⅚' // '\u215a' | 0.833...
  | '⅛' // '\u215b' | 0.125
  | '⅜' // '\u215c' | 0.375
  | '⅝' // '\u215d' | 0.625
  | '⅞' // '\u215e' | 0.875
  | '​1⁄16' // '\u200B 1 \u2044 16' | 0.0625
  | '​3⁄16' // '\u200B 3 \u2044 16' | 0.1875
  | '​5⁄16' // '\u200B 5 \u2044 16' | 0.3125
  | '​7⁄16' // '\u200B 7 \u2044 16' | 0.4375
  | '​9⁄16' // '\u200B 9 \u2044 16' | 0.5625
  | '​11⁄16' // '\u200B 11 \u2044 16' | 0.6875
  | '​13⁄16' // '\u200B 13 \u2044 16' | 0.8125
  | '​15⁄16'; // '\u200B 15 \u2044 16' | 0.9375

export type FormatQuantityTests = [
  string,
  (
    | [Parameters<FormatQuantity>[0], ReturnType<FormatQuantity>]
    | [
        Parameters<FormatQuantity>[0],
        ReturnType<FormatQuantity>,
        Parameters<FormatQuantity>[1]
      ]
  )[]
][];
