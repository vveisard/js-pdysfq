import { UsageGroupKey } from '../common.js';

export default {
  [UsageGroupKey.noun_person_name_fictional]: [
    // mario
    {
      text: `Mario`,
      weight: 1,
    },
    {
      text: `Luigi`,
      weight: 1,
    },
    {
      text: `Wario`,
      weight: 1,
    },
    {
      text: `Waluigi`,
      weight: 1,
    },
    {
      text: `Bowser`,
      weight: 1,
    },
    {
      text: `Bowser Jr`,
      weight: 1,
    },
    {
      text: `Peach`,
      weight: 1,
    },
    // zelda
    {
      text: `Link`,
      weight: 1,
    },
    {
      text: `Zelda`,
      weight: 1,
    },
    {
      text: `Ganondorf`,
      weight: 1,
    },
    // Pokemon
    {
      text: `Pikachu`,
      weight: 1,
    },
    {
      text: `Charizard`,
      weight: 1,
    },
  ],
  [UsageGroupKey.prefix_noun]: [
    // Mario
    {
      text: `wa`,
      weight: 1,
    },
  ],
  [UsageGroupKey.adjective_variant_before_noun]: [
    // nintendo
    {
      text: `Mii`,
      weight: 1,
    },
    // kirby
    {
      text: `Meta`,
      weight: 1,
    },
    {
      text: `Bandana`,
      weight: 1,
    },
    // metroid
    {
      text: `Zero Suit`,
      weight: 1,
    },
  ],
  [UsageGroupKey.adjective_variant_after_noun_person]: [
    {
      text: `Kong`,
      weight: 1,
    },
    {
      text: `Climbers`,
      weight: 1,
    },
    {
      text: `Bros`,
      weight: 1,
    },
  ],
  [UsageGroupKey.raceSingular]: [
    {
      text: 'Waddle Dee',
      weight: 1,
    },
    {
      text: 'Waddle Do',
      weight: 1,
    },
    {
      text: 'Waddle Did',
      weight: 0.01,
    },
    {
      text: 'Waddle Does',
      weight: 0.01,
    },
    {
      text: 'Waddle Doing',
      weight: 0.01,
    },
  ],
};
