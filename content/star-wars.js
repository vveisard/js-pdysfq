import { UsageGroupKey } from '../common.js';

export default {
  [UsageGroupKey.title_before_noun_person_name]: [
    {
      text: 'Darth',
      weight: 1,
    },
  ],
  [UsageGroupKey.occupation]: [
    {
      text: `jedi`,
      weight: 1,
    },
    {
      text: `sith`,
      weight: 1,
    },
  ],
};
