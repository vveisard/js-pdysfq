// this file contains the "base" content module
// no controversial
// only basic phrases

import { UsageGroupKey } from '../common.js';

export default {
  [UsageGroupKey.Alpha]: [
    // noun/person/name
    {
      text: `${UsageGroupKey.any_noun_person_name}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.prefix_noun}${UsageGroupKey.any_noun_person_name}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.any_noun_person_name}${UsageGroupKey.suffix_noun}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.title_before_noun_person_name} ${UsageGroupKey.any_noun_person_name}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.any_noun_person_name} ${UsageGroupKey.title_after_noun_person_name}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.any_noun_person_name} ${UsageGroupKey.clause_after_noun}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.adjective_attribute_before_noun} ${UsageGroupKey.any_noun_person_name}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.adjective_alignment_before_noun} ${UsageGroupKey.any_noun_person_name}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.adjective_variant_before_noun} ${UsageGroupKey.any_noun_person_name}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.adjective_variant_before_noun_person} ${UsageGroupKey.any_noun_person_name}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.any_noun_person_name} ${UsageGroupKey.adjective_variant_after_noun_person}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.adjective_nationality} ${UsageGroupKey.any_noun_person_name}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.adjective_flavor} ${UsageGroupKey.any_noun_person_name}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.any_noun_person_name} ${UsageGroupKey.noun_thing_object_food}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.occupation} ${UsageGroupKey.any_noun_person_name}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.raceSingular} ${UsageGroupKey.any_noun_person_name}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.creatureSingular} ${UsageGroupKey.any_noun_person_name}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.shape} ${UsageGroupKey.any_noun_person_name}`,
      weight: 1,
    },
    // noun/person/occupation
    {
      text: `${UsageGroupKey.occupation}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.prefix_noun}${UsageGroupKey.occupation}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.occupation}${UsageGroupKey.suffix_noun}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.title_before_noun_person_name} ${UsageGroupKey.occupation}`, //
      weight: 1,
    },
    // {
    //   text: `${UsageGroupKey.occupation} ${UsageGroupKey.title_after_noun_person_name}`, //
    //   weight: 1
    // },
    {
      text: `${UsageGroupKey.occupation} ${UsageGroupKey.clause_after_noun}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.adjective_flavor} ${UsageGroupKey.occupation}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.adjective_nationality} ${UsageGroupKey.occupation}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.adjective_attribute_before_noun} ${UsageGroupKey.occupation}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.adjective_alignment_before_noun} ${UsageGroupKey.occupation}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.adjective_variant_before_noun} ${UsageGroupKey.occupation}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.adjective_variant_before_noun_person} ${UsageGroupKey.occupation}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.occupation} ${UsageGroupKey.adjective_variant_after_noun_person}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.noun_thing_object_food} ${UsageGroupKey.occupation}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.color} ${UsageGroupKey.occupation}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.shape} ${UsageGroupKey.occupation}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.raceSingular} ${UsageGroupKey.occupation}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.creatureSingular} ${UsageGroupKey.occupation}`,
      weight: 1,
    },
    // noun/person/creature
    {
      text: `${UsageGroupKey.creatureSingular}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.prefix_noun}${UsageGroupKey.creatureSingular}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.creatureSingular}${UsageGroupKey.suffix_noun}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.title_before_noun_person_name} ${UsageGroupKey.creatureSingular}`,
      weight: 1,
    },
    // {
    //   text: `${UsageGroupKey.creatureSingular} ${UsageGroupKey.title_after_noun_person_name}`,
    //   weight: 1
    // },
    {
      text: `${UsageGroupKey.creatureSingular} ${UsageGroupKey.clause_after_noun}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.adjective_attribute_before_noun} ${UsageGroupKey.creatureSingular}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.adjective_alignment_before_noun} ${UsageGroupKey.creatureSingular}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.adjective_variant_before_noun} ${UsageGroupKey.creatureSingular}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.adjective_variant_before_noun_person} ${UsageGroupKey.creatureSingular}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.adjective_flavor} ${UsageGroupKey.creatureSingular}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.adjective_nationality} ${UsageGroupKey.creatureSingular}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.color} ${UsageGroupKey.creatureSingular}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.shape} ${UsageGroupKey.creatureSingular}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.occupation} ${UsageGroupKey.creatureSingular}`,
      weight: 1,
    },
    // noun/person/species
    {
      text: `${UsageGroupKey.raceSingular}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.prefix_noun}${UsageGroupKey.raceSingular}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.raceSingular}${UsageGroupKey.suffix_noun}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.title_before_noun_person_name} ${UsageGroupKey.raceSingular}`,
      weight: 1,
    },
    // {
    //   text: `${UsageGroupKey.raceSingular} ${UsageGroupKey.title_after_noun_person_name}`,
    //   weight: 1
    // },
    {
      text: `${UsageGroupKey.raceSingular} ${UsageGroupKey.clause_after_noun}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.adjective_attribute_before_noun} ${UsageGroupKey.raceSingular}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.adjective_alignment_before_noun} ${UsageGroupKey.raceSingular}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.adjective_variant_before_noun} ${UsageGroupKey.raceSingular}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.adjective_variant_before_noun_person} ${UsageGroupKey.raceSingular}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.adjective_flavor} ${UsageGroupKey.raceSingular}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.adjective_nationality} ${UsageGroupKey.raceSingular}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.raceSingular} ${UsageGroupKey.noun_thing_object_food}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.color} ${UsageGroupKey.raceSingular}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.shape} ${UsageGroupKey.raceSingular}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.occupation} ${UsageGroupKey.raceSingular}`,
      weight: 1,
    },
    // noun/place/type
    {
      text: `${UsageGroupKey.noun_place_type}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.prefix_noun}${UsageGroupKey.noun_place_type}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.noun_place_type}${UsageGroupKey.suffix_noun}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.noun_place_type} ${UsageGroupKey.clause_after_noun}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.adjective_flavor} ${UsageGroupKey.noun_place_type}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.adjective_nationality} ${UsageGroupKey.noun_place_type}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.adjective_attribute_before_noun} ${UsageGroupKey.noun_place_type}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.adjective_alignment_before_noun} ${UsageGroupKey.noun_place_type}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.adjective_variant_before_noun} ${UsageGroupKey.noun_place_type}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.any_noun_thing} ${UsageGroupKey.noun_place_type}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.any_noun_person_name} ${UsageGroupKey.noun_place_type}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.color} ${UsageGroupKey.noun_place_type}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.shape} ${UsageGroupKey.noun_place_type}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.occupation} ${UsageGroupKey.noun_place_type}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.raceSingular} ${UsageGroupKey.noun_place_type}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.creatureSingular} ${UsageGroupKey.noun_place_type}`,
      weight: 1,
    },
    // noun/place/state
    {
      text: `${UsageGroupKey.noun_place_state}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.prefix_noun}${UsageGroupKey.noun_place_state}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.noun_place_state}${UsageGroupKey.suffix_noun}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.clause_before_noun} ${UsageGroupKey.noun_place_state}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.noun_place_state} ${UsageGroupKey.clause_after_noun}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.adjective_flavor} ${UsageGroupKey.noun_place_state}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.adjective_nationality} ${UsageGroupKey.noun_place_state}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.adjective_position} ${UsageGroupKey.noun_place_state}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.adjective_attribute_before_noun} ${UsageGroupKey.noun_place_state}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.adjective_alignment_before_noun} ${UsageGroupKey.noun_place_state}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.adjective_variant_before_noun} ${UsageGroupKey.noun_place_state}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.preposition_spatial} ${UsageGroupKey.noun_place_state}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.ordinalNumber} ${UsageGroupKey.noun_place_state}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.color} ${UsageGroupKey.noun_place_state}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.shape} ${UsageGroupKey.noun_place_state}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.occupation} ${UsageGroupKey.noun_place_state}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.raceSingular} ${UsageGroupKey.noun_place_state}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.creatureSingular} ${UsageGroupKey.noun_place_state}`,
      weight: 1,
    },
    // noun/place/landmark
    {
      text: `${UsageGroupKey.noun_place_landmark}`,
      weight: 1,
    },
    // noun/thing/object
    {
      text: `${UsageGroupKey.noun_thing_object}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.noun_thing_object}${UsageGroupKey.suffix_noun}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.prefix_noun}${UsageGroupKey.noun_thing_object}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.title_before_noun_person_name} ${UsageGroupKey.noun_thing_object}`,
      weight: 1,
    },
    // {
    //   text: `${UsageGroupKey.noun_thing_object} ${UsageGroupKey.title_after_noun_person_name}`,
    //   weight: 1
    // },
    {
      text: `${UsageGroupKey.clause_before_noun} ${UsageGroupKey.noun_thing_object}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.noun_thing_object} ${UsageGroupKey.clause_after_noun}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.adjective_variant_before_noun} ${UsageGroupKey.noun_thing_object}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.adjective_attribute_before_noun} ${UsageGroupKey.noun_thing_object}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.adjective_alignment_before_noun} ${UsageGroupKey.noun_thing_object}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.adjective_nationality} ${UsageGroupKey.noun_thing_object}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.adjective_flavor} ${UsageGroupKey.noun_thing_object}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.color} ${UsageGroupKey.noun_thing_object}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.shape} ${UsageGroupKey.noun_thing_object}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.occupation} ${UsageGroupKey.noun_thing_object}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.raceSingular} ${UsageGroupKey.noun_thing_object}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.creatureSingular} ${UsageGroupKey.noun_thing_object}`,
      weight: 1,
    },
    // noun/thing/concept
    {
      text: `${UsageGroupKey.noun_thing_concept}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.prefix_noun}${UsageGroupKey.noun_thing_concept}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.noun_thing_concept}${UsageGroupKey.suffix_noun}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.title_before_noun_person_name} ${UsageGroupKey.noun_thing_concept}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.clause_before_noun} ${UsageGroupKey.noun_thing_concept}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.noun_thing_concept} ${UsageGroupKey.clause_after_noun}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.title_before_noun_person_name} ${UsageGroupKey.noun_thing_concept}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.adjective_variant_before_noun} ${UsageGroupKey.noun_thing_concept}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.adjective_attribute_before_noun} ${UsageGroupKey.noun_thing_concept}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.adjective_alignment_before_noun} ${UsageGroupKey.noun_thing_concept}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.adjective_nationality} ${UsageGroupKey.noun_thing_concept}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.adjective_flavor} ${UsageGroupKey.noun_thing_concept}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.title_before_noun_person_name} ${UsageGroupKey.noun_thing_concept}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.color} ${UsageGroupKey.noun_thing_concept}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.shape} ${UsageGroupKey.noun_thing_concept}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.occupation} ${UsageGroupKey.noun_thing_concept}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.raceSingular} ${UsageGroupKey.noun_thing_concept}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.creatureSingular} ${UsageGroupKey.noun_thing_concept}`,
      weight: 1,
    },
    // noun/thing/polygon
    {
      text: `${UsageGroupKey.shape}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.prefix_noun}${UsageGroupKey.shape}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.shape}${UsageGroupKey.suffix_noun}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.title_before_noun_person_name} ${UsageGroupKey.shape}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.adjective_flavor} ${UsageGroupKey.shape}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.adjective_nationality} ${UsageGroupKey.shape}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.adjective_attribute_before_noun} ${UsageGroupKey.shape}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.adjective_alignment_before_noun} ${UsageGroupKey.shape}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.adjective_variant_before_noun} ${UsageGroupKey.shape}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.preposition_spatial} ${UsageGroupKey.shape}s`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.color} ${UsageGroupKey.shape}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.occupation} ${UsageGroupKey.shape}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.raceSingular} ${UsageGroupKey.shape}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.creatureSingular} ${UsageGroupKey.shape}`,
      weight: 1,
    },
    // color
    {
      text: `${UsageGroupKey.color}`,
      weight: 1,
    },
    // functions
    {
      text: `(nameFirst, nameLast)`,
      weight: 1,
    },
    {
      text: `(name, trade)`,
      weight: 1,
    },
    {
      text: `(name, speciesSingular)`,
      weight: 1,
    },
  ],
  [UsageGroupKey.determiner]: [
    {
      text: `no`,
      weight: 1,
    },
    {
      text: `those`,
      weight: 1,
    },
    {
      text: `these`,
      weight: 1,
    },
    {
      text: `some`,
      weight: 1,
    },
    {
      text: `few`,
      weight: 1,
    },
    {
      text: `many`,
      weight: 1,
    },
    {
      text: `a couple`,
      weight: 1,
    },
    {
      text: `a lot of`,
      weight: 1,
    },
    {
      text: `a bunch of`,
      weight: 1,
    },
  ],
  [UsageGroupKey.article]: [
    {
      text: `a`,
      weight: 1,
    },
    {
      text: `the`,
      weight: 1,
    },
    {
      text: `el`,
      weight: 1,
    },
    {
      text: `le`,
      weight: 1,
    },
  ],
  [UsageGroupKey.adjective_possessive]: [
    {
      text: `our`,
      weight: 1,
    },
    {
      text: `his`,
      weight: 1,
    },
    {
      text: `her`,
      weight: 1,
    },
    {
      text: `my`,
      weight: 1,
    },
    {
      text: `their`,
      weight: 1,
    },
  ],
  [UsageGroupKey.ordinalNumber_plural]: [
    {
      text: `zeroth`,
      weight: 1,
    },
    {
      text: `second`,
      weight: 1,
    },
    {
      text: `third`,
      weight: 1,
    },
    {
      text: `fourth`,
      weight: 1,
    },
    {
      text: `fifth`,
      weight: 1,
    },
    {
      text: `sixth`,
      weight: 1,
    },
    {
      text: `seventh`,
      weight: 1,
    },
    {
      text: `eight`,
      weight: 1,
    },
    {
      text: `ninth`,
      weight: 1,
    },
    {
      text: `tenth`,
      weight: 1,
    },
    {
      text: `eleventh`,
      weight: 1,
    },
    {
      text: `twelfth`,
      weight: 1,
    },
  ],
  [UsageGroupKey.ordinalNumber_place]: [
    {
      text: `dozenth`,
      weight: 1,
    },
    {
      text: `hundredth`,
      weight: 1,
    },
    {
      text: `thousandth`,
      weight: 1,
    },
    {
      text: `millionth`,
      weight: 1,
    },
    {
      text: `billionth`,
      weight: 1,
    },
    {
      text: `trillionth`,
      weight: 1,
    },
  ],
  [UsageGroupKey.ordinalNumber_many]: [
    {
      text: `${UsageGroupKey.cardinalNumber} ${UsageGroupKey.ordinalNumber_place}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.ordinalNumber_plural}`,
      weight: 1,
    },
  ],
  [UsageGroupKey.ordinalNumber]: [
    {
      text: `first`,
      weight: 1,
    },
    {
      text: `last`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.ordinalNumber_plural}`,
      weight: 1,
    },
  ],
  [UsageGroupKey.cardinalNumber_place]: [
    {
      text: `dozen`,
      weight: 1,
    },
    {
      text: `hundred`,
      weight: 1,
    },
    {
      text: `thousand`,
      weight: 1,
    },
    {
      text: `million`,
      weight: 1,
    },
    {
      text: `billion`,
      weight: 1,
    },
    {
      text: `trillion`,
      weight: 1,
    },
  ],
  [UsageGroupKey.cardinalNumber_plural]: [
    {
      text: `zero`,
      weight: 1,
    },
    {
      text: `infinity`,
      weight: 1,
    },
    {
      text: `two`,
      weight: 1,
    },
    {
      text: `three`,
      weight: 1,
    },
    {
      text: `four`,
      weight: 1,
    },
    {
      text: `five`,
      weight: 1,
    },
    {
      text: `six`,
      weight: 1,
    },
    {
      text: `seven`,
      weight: 1,
    },
    {
      text: `eight`,
      weight: 1,
    },
    {
      text: `nine`,
      weight: 1,
    },
    {
      text: `ten`,
      weight: 1,
    },
  ],
  [UsageGroupKey.cardinalNumber]: [
    {
      text: `one`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.cardinalNumber_plural}`,
      weight: 1,
    },
  ],
  [UsageGroupKey.cardinalNumber_many]: [
    {
      text: `${UsageGroupKey.cardinalNumber} ${UsageGroupKey.cardinalNumber_place}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.cardinalNumber_plural}`,
      weight: 1,
    },
  ],
  [UsageGroupKey.cardinalNumber_plural_spanish]: [
    {
      text: `cero`,
      weight: 1,
    },
    {
      text: `dos`,
      weight: 1,
    },
    {
      text: `tres`,
      weight: 1,
    },
    {
      text: `cuatro`,
      weight: 1,
    },
    {
      text: `cinco`,
      weight: 1,
    },
    {
      text: `seis`,
      weight: 1,
    },
    {
      text: `siete`,
      weight: 1,
    },
    {
      text: `ocho`,
      weight: 1,
    },
    {
      text: `nueve`,
      weight: 1,
    },
    {
      text: `diez`,
      weight: 1,
    },
  ],
  [UsageGroupKey.cardinalNumber_spanish]: [
    {
      text: `uno`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.cardinalNumber_plural_spanish}`,
      weight: 1,
    },
  ],
  [UsageGroupKey.noun_thing_event]: [
    {
      text: `dynasty`,
      weight: 1,
    },
  ],
  [UsageGroupKey.noun_thing_concept]: [
    {
      text: `chaos`,
      weight: 1,
    },
    {
      text: `entropy`,
      weight: 1,
    },
    {
      text: `courage`,
      weight: 1,
    },
    {
      text: `wisdom`,
      weight: 1,
    },
    {
      text: `power`,
      weight: 1,
    },
    {
      text: `theory`,
      weight: 1,
    },
    {
      text: `paradox`,
      weight: 1,
    },
    {
      text: `taxes`,
      weight: 1,
    },
    {
      text: `liberty`,
      weight: 1,
    },
    {
      text: `justice`,
      weight: 1,
    },
    {
      text: `democracy`,
      weight: 1,
    },
    {
      text: `society`,
      weight: 1,
    },
    {
      text: `piety`,
      weight: 1,
    },
    {
      text: `representative government`,
      weight: 1,
    },
    {
      text: `community`,
      weight: 1,
    },
  ],
  [UsageGroupKey.noun_thing_object_food]: [
    {
      text: `cola`,
      weight: 1,
    },
    {
      text: `shake`,
      weight: 1,
    },
    {
      text: `syrup`,
      weight: 1,
    },
    {
      text: `cake`,
      weight: 1,
    },
    {
      text: `pie`,
      weight: 1,
    },
    {
      text: `tea`,
      weight: 1,
    },
    {
      text: `burger`,
      weight: 1,
    },
    {
      text: `taco`,
      weight: 1,
    },
    {
      text: `sandwich`,
      weight: 1,
    },
    {
      text: `jam`,
      weight: 1,
    },
    {
      text: `jelly`,
      weight: 1,
    },
    {
      text: `egg`,
      weight: 1,
    },
    {
      text: `pizza`,
      weight: 1,
    },
    {
      text: `stew`,
      weight: 1,
    },
    {
      text: `cheese`,
      weight: 1,
    },
    {
      text: `smoothie`,
      weight: 1,
    },
    {
      text: `orange`,
      weight: 1,
    },
  ],
  [UsageGroupKey.noun_thing_object_planet]: [
    {
      text: `Mercury`,
      weight: 1,
    },
    {
      text: `Earth`,
      weight: 1,
    },
    {
      text: `Venus`,
      weight: 1,
    },
    {
      text: `Mars`,
      weight: 1,
    },
    {
      text: `Jupiter`,
      weight: 1,
    },
    {
      text: `Saturn`,
      weight: 1,
    },
    {
      text: `Uranus`,
      weight: 1,
    },
    {
      text: `Neptune`,
      weight: 1,
    },
    {
      text: `Pluto`,
      weight: 1,
    },
  ],
  [UsageGroupKey.noun_thing_object]: [
    {
      text: `${UsageGroupKey.noun_thing_object_food}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.noun_thing_object_planet}`,
      weight: 1,
    },
    {
      text: `flag`,
      weight: 1,
    },
    {
      text: `rainbow`,
      weight: 1,
    },
    {
      text: `coal`,
      weight: 1,
    },
    {
      text: `pill`,
      weight: 1,
    },
    {
      text: `bicycle`,
      weight: 1,
    },
    {
      text: `video game`,
      weight: 1,
    },
    {
      text: `fire`,
      weight: 1,
    },
    {
      text: `water`,
      weight: 1,
    },
    {
      text: `ice`,
      weight: 1,
    },
    {
      text: `plague`,
      weight: 1,
    },
    {
      text: `virus`,
      weight: 1,
    },
    {
      text: `sword`,
      weight: 1,
    },
    {
      text: `gun`,
      weight: 1,
    },
    {
      text: `bomb`,
      weight: 1,
    },
    {
      text: `laser`,
      weight: 1,
    },
    {
      text: `missile`,
      weight: 1,
    },
    {
      text: `tank`,
      weight: 1,
    },
    {
      text: `zamboni`,
      weight: 1,
    },
    {
      text: `star`,
      weight: 1,
    },
    {
      text: `hat`,
      weight: 1,
    },
    {
      text: `hole`,
      weight: 1,
    },
    {
      text: `t shirt`,
      weight: 1,
    },
    {
      text: `claws`,
      weight: 1,
    },
    {
      text: `tower`,
      weight: 1,
    },
    {
      text: `cloud`,
      weight: 1,
    },
    {
      text: `crown`,
      weight: 1,
    },
    {
      text: `frown`,
      weight: 1,
    },
    {
      text: `hound`,
      weight: 1,
    },
    {
      text: `stick`,
      weight: 1,
    },
    {
      text: `something`,
      weight: 1,
    },
    {
      text: `anything`,
      weight: 1,
    },
    {
      text: `nothing`,
      weight: 1,
    },
  ],
  [UsageGroupKey.any_noun_thing]: [
    {
      text: `${UsageGroupKey.noun_thing_concept}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.noun_thing_event}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.noun_thing_object}`,
      weight: 1,
    },
  ],
  [UsageGroupKey.color]: [
    {
      text: `red`,
      weight: 1,
    },
    {
      text: `orange`,
      weight: 1,
    },
    {
      text: `yellow`,
      weight: 1,
    },
    {
      text: `green`,
      weight: 1,
    },
    {
      text: `blue`,
      weight: 1,
    },
    {
      text: `purple`,
      weight: 1,
    },
    {
      text: `black`,
      weight: 1,
    },
    {
      text: `white`,
      weight: 1,
    },
    {
      text: `gray`,
      weight: 1,
    },
  ],
  [UsageGroupKey.noun_place_type]: [
    {
      text: `camp`,
      weight: 1,
    },
    {
      text: `zone`,
      weight: 1,
    },
    {
      text: `planet`,
      weight: 1,
    },
    {
      text: `island`,
      weight: 1,
    },
    {
      text: `world`,
      weight: 1,
    },
    {
      text: `university`,
      weight: 1,
    },
    {
      text: `kingdom`,
      weight: 1,
    },
    {
      text: `castle`,
      weight: 1,
    },
    {
      text: `room`,
      weight: 1,
    },
    {
      text: `mountain`,
      weight: 1,
    },
    {
      text: `canyon`,
      weight: 1,
    },
    {
      text: `valley`,
      weight: 1,
    },
    {
      text: `sea`,
      weight: 1,
    },
    {
      text: `lake`,
      weight: 1,
    },
  ],
  [UsageGroupKey.noun_place_state]: [
    {
      text: `Carolina`,
      weight: 1,
    },
    {
      text: `Florida`,
      weight: 1,
    },
    {
      text: `Texas`,
      weight: 1,
    },
    {
      text: `Dakota`,
      weight: 1,
    },
    {
      text: `California`,
      weight: 1,
    },
    {
      text: `Zealand`,
      weight: 1,
    },
    {
      text: `Australia`,
      weight: 1,
    },
    {
      text: `United States`,
      weight: 1,
    },
  ],
  [UsageGroupKey.noun_place_landmark]: [
    {
      text: `Statue of ${UsageGroupKey.noun_thing_concept}`,
      weight: 1,
    },
    {
      text: `Mount ${UsageGroupKey.any_noun_thing}more`,
      weight: 1,
    },
    {
      text: `Mount ${UsageGroupKey.any_noun_person_name}more`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.noun_place_state} Falls`,
      weight: 1,
    },
    {
      text: `Leaning Tower of ${UsageGroupKey.noun_place_state}`,
      weight: 1,
    },
    {
      text: `Great Pyramid of ${UsageGroupKey.noun_place_state}`,
      weight: 1,
    },
    {
      text: `Great Wall of ${UsageGroupKey.noun_place_state}`,
      weight: 1,
    },
    {
      text: `Hanging Gardens of ${UsageGroupKey.noun_place_state}`,
      weight: 1,
    },
    {
      text: `Lighthouse of ${UsageGroupKey.noun_place_state}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.cardinalNumber_plural} Corners`,
      weight: 1,
    },
  ],
  [UsageGroupKey.sex]: [
    {
      text: `man`,
      weight: 1,
    },
    {
      text: `woman`,
      weight: 1,
    },
  ],
  [UsageGroupKey.gender]: [
    {
      text: `boy`,
      weight: 1,
    },
    {
      text: `girl`,
      weight: 1,
    },
  ],
  // TODO franchise content modules
  [UsageGroupKey.noun_person_name_fictional]: [
    {
      text: `Bat${UsageGroupKey.sex}`,
      weight: 1,
    },
    {
      text: `Super${UsageGroupKey.sex}`,
      weight: 1,
    },
    {
      text: `Spider ${UsageGroupKey.sex}`,
      weight: 1,
    },
    {
      text: `Spider ${UsageGroupKey.gender}`,
      weight: 1,
    },
    {
      text: `Mickey Mouse`,
      weight: 1,
    },
    {
      text: `Homer Simpson`,
      weight: 1,
    },
    {
      text: `Harry Potter`,
      weight: 1,
    },
    {
      text: `Santa Claus`,
      weight: 1,
    },
    {
      text: `Waldo`,
      weight: 1,
    },
  ],
  [UsageGroupKey.adjective_flavor]: [
    {
      text: `sweet`,
      weight: 1,
    },
    {
      text: `sour`,
      weight: 1,
    },
    {
      text: `spicy`,
      weight: 1,
    },
    {
      text: `dairy`,
      weight: 1,
    },
    {
      text: `cool ranch`,
      weight: 0.1,
    },
    {
      text: `zesty`,
      weight: 0.1,
    },
    {
      text: `umami`,
      weight: 0.1,
    },
  ],
  [UsageGroupKey.adjective_nationality]: [
    {
      text: `Italian`,
      weight: 1,
    },
    {
      text: `Hungarian`,
      weight: 1,
    },
    {
      text: `American`,
      weight: 1,
    },
    {
      text: `Japanese`,
      weight: 1,
    },
    {
      text: `Chinese`,
      weight: 1,
    },
    {
      text: `Australian`,
      weight: 1,
    },
    {
      text: `British`,
      weight: 1,
    },
    {
      text: `Bulgarian`,
      weight: 1,
    },
    {
      text: `African`,
      weight: 1,
    },
    {
      text: `Egyptian`,
      weight: 1,
    },
    {
      text: `Canadian`,
      weight: 1,
    },
    {
      text: `Mexican`,
      weight: 1,
    },
    {
      text: `French`,
      weight: 1,
    },
    {
      text: `German`,
      weight: 1,
    },
    {
      text: `Danish`,
      weight: 1,
    },
    {
      text: `Martian`,
      weight: 1,
    },
    {
      text: `international`,
      weight: 1,
    },
  ],
  [UsageGroupKey.adjective_alignment_before_noun]: [
    {
      text: `good`,
      weight: 1,
    },
    {
      text: `evil`,
      weight: 1,
    },
  ],
  [UsageGroupKey.adjective_attribute_before_noun]: [
    {
      text: `handsome`,
      weight: 1,
    },
    {
      text: `ugly`,
      weight: 1,
    },
    {
      text: `loud`,
      weight: 1,
    },
    {
      text: `quiet`,
      weight: 1,
    },
    {
      text: `atomic`,
      weight: 1,
    },
    {
      text: `nuclear`,
      weight: 1,
    },
    {
      text: `happy`,
      weight: 1,
    },
    {
      text: `angry`,
      weight: 1,
    },
    {
      text: `sad`,
      weight: 1,
    },
    {
      text: `crazy`,
      weight: 1,
    },
    {
      text: `loco`,
      weight: 1,
    },
    {
      text: `wet`,
      weight: 1,
    },
    {
      text: `dry`,
      weight: 1,
    },
    {
      text: `new`,
      weight: 1,
    },
    {
      text: `old`,
      weight: 1,
    },
    {
      text: `baby`,
      weight: 1,
    },
    {
      text: `young`,
      weight: 1,
    },
    {
      text: `quarter`,
      weight: 1,
    },
    {
      text: `half`,
      weight: 1,
    },
    {
      text: `full`,
      weight: 1,
    },
    {
      text: `semi`,
      weight: 1,
    },
    {
      text: `double`,
      weight: 1,
    },
    {
      text: `solid`,
      weight: 1,
    },
    {
      text: `liquid`,
      weight: 1,
    },
    {
      text: `gas`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.gender}`,
      weight: 1,
    },
    {
      text: `magic`,
      weight: 1,
    },
    {
      text: `frost`,
      weight: 1,
    },
    {
      text: `spark`,
      weight: 1,
    },
    {
      text: `pregnant`,
      weight: 1,
    },
  ],
  [UsageGroupKey.adjective_variant_before_noun]: [
    {
      text: `stick figure`,
      weight: 1,
    },
    {
      text: `toy`,
      weight: 1,
    },
    {
      text: `balloon`,
      weight: 1,
    },
    {
      text: `toon`,
      weight: 1,
    },
    {
      text: `Trojan`,
      weight: 1,
    },
  ],
  [UsageGroupKey.prefix_noun]: [],
  [UsageGroupKey.title_before_noun_person_name]: [
    {
      text: `Mr`,
      weight: 1,
    },
    {
      text: `Ms`,
      weight: 1,
    },
    {
      text: `Mrs`,
      weight: 1,
    },
    {
      text: `Dr`,
      weight: 1,
    },
    {
      text: 'Sr',
      weight: 1,
    },
    {
      text: 'Sra',
      weight: 1,
    },
    {
      text: 'Srta',
      weight: 1,
    },
  ],
  [UsageGroupKey.adjective_variant_after_noun_person]: [],
  [UsageGroupKey.title_after_noun_person_name]: [
    {
      text: `Jr`,
      weight: 1,
    },
    {
      text: `Sr`,
      weight: 1,
    },
    {
      text: `the ${UsageGroupKey.ordinalNumber}`,
      weight: 1,
    },
  ],
  [UsageGroupKey.clause_after_noun]: [
    {
      text: `a la mode`,
      weight: 1,
    },
    {
      text: `in the box`,
      weight: 1,
    },
  ],
  [UsageGroupKey.suffix_noun]: [
    {
      text: `thrower`,
      weight: 1,
    },
    {
      text: `net`,
      weight: 1,
    },
    {
      text: `punk`,
      weight: 1,
    },
  ],
  [UsageGroupKey.occupation]: [
    {
      text: `cowboy`,
      weight: 1,
    },
    {
      text: `bandit`,
      weight: 1,
    },
    {
      text: `chef`,
      weight: 1,
    },
    {
      text: `clown`,
      weight: 1,
    },
    {
      text: `mime`,
      weight: 1,
    },
    {
      text: `sailor`,
      weight: 1,
    },
    {
      text: `magical girl`,
      weight: 1,
    },
    {
      text: `soldier`,
      weight: 1,
    },
    {
      text: `captain`,
      weight: 1,
    },
    {
      text: `corporal`,
      weight: 1,
    },
    {
      text: `lieutenant`,
      weight: 1,
    },
    {
      text: `general`,
      weight: 1,
    },
    {
      text: `admiral`,
      weight: 1,
    },
    {
      text: `private`,
      weight: 1,
    },
    // {
    //   text: `ensign`,
    //   weight: 1,
    // },
    // {
    //   text: `petty officer`,
    //   weight: 1,
    // },
    {
      text: `inspector`,
      weight: 1,
    },
    {
      text: `detective`,
      weight: 1,
    },
    {
      text: `agent`,
      weight: 1,
    },
    {
      text: `secret agent`,
      weight: 1,
    },
    {
      text: `knight`,
      weight: 1,
    },
    {
      text: `ninja`,
      weight: 1,
    },
    {
      text: `samurai`,
      weight: 1,
    },
    // {
    //   text: `shogun`,
    //   weight: 1,
    // },
    {
      text: `president`,
      weight: 1,
    },
    {
      text: `king`,
      weight: 1,
    },
    {
      text: `queen`,
      weight: 1,
    },
    {
      text: `jack`,
      weight: 1,
    },
    {
      text: `joker`,
      weight: 1,
    },
    {
      text: `prince`,
      weight: 1,
    },
    {
      text: `princess`,
      weight: 1,
    },
    {
      text: `duke`,
      weight: 1,
    },
    {
      text: 'officer',
      weight: 1,
    },
    {
      text: 'caveman',
      weight: 1,
    },
    {
      text: 'crier',
      weight: 1,
    },
    {
      text: 'yuppie',
      weight: 1,
    },
    {
      text: `horseman`,
      weight: 1,
    },
    {
      text: `nerd`,
      weight: 1,
    },
  ],
  [UsageGroupKey.creatureSingular]: [
    {
      text: `cat`,
      weight: 1,
    },
    {
      text: `lion`,
      weight: 1,
    },
    {
      text: `tiger`,
      weight: 1,
    },
    {
      text: `liger`,
      weight: 0.1,
    },
    {
      text: `dog`,
      weight: 1,
    },
    {
      text: `wolf`,
      weight: 1,
    },
    {
      text: `horse`,
      weight: 1,
    },
    {
      text: `unicorn`,
      weight: 1,
    },
    {
      text: `zebra`,
      weight: 1,
    },
    {
      text: `zonkey`,
      weight: 0.1,
    },
    {
      text: `donkey`,
      weight: 1,
    },
    {
      text: `mule`,
      weight: 0.1,
    },
    {
      text: `beaver`,
      weight: 1,
    },
    {
      text: `armadillo`,
      weight: 1,
    },
    {
      text: `echidna`,
      weight: 1,
    },
    {
      text: `elephant`,
      weight: 1,
    },
    {
      text: `monkey`,
      weight: 1,
    },
    {
      text: `snake`,
      weight: 1,
    },
    {
      text: `lizard`,
      weight: 1,
    },
    {
      text: `turtle`,
      weight: 1,
    },
    {
      text: `bird`,
      weight: 1,
    },
    {
      text: `eagle`,
      weight: 1,
    },
    {
      text: `chicken`,
      weight: 1,
    },
    {
      text: `duck`,
      weight: 1,
    },
    {
      text: `turkey`,
      weight: 1,
    },
    {
      text: `peacock`,
      weight: 1,
    },
    {
      text: `penguin`,
      weight: 1,
    },
    {
      text: `goose`,
      weight: 1,
    },
    {
      text: `fish`,
      weight: 1,
    },
    {
      text: `octopus`,
      weight: 1,
    },
    {
      text: `bug`,
      weight: 1,
    },
    {
      text: `bee`,
      weight: 1,
    },
    {
      text: `spider`,
      weight: 1,
    },
    {
      text: `locust`,
      weight: 1,
    },
    {
      text: `cricket`,
      weight: 1,
    },
    {
      text: `plant`,
      weight: 1,
    },
    {
      text: `tree`,
      weight: 1,
    },
    {
      text: `fungus`,
      weight: 1,
    },
  ],
  [UsageGroupKey.creaturePlural]: [
    {
      text: `cats`,
      weight: 1,
    },
    {
      text: `lions`,
      weight: 1,
    },
    {
      text: `tigers`,
      weight: 1,
    },
    {
      text: `ligers`,
      weight: 0.1,
    },
    {
      text: `dogs`,
      weight: 1,
    },
    {
      text: `wolves`,
      weight: 1,
    },
    {
      text: `horses`,
      weight: 1,
    },
    {
      text: `unicorns`,
      weight: 0.1,
    },
    {
      text: `zebras`,
      weight: 1,
    },
    {
      text: `zonkeys`,
      weight: 0.1,
    },
    {
      text: `donkeys`,
      weight: 1,
    },
    {
      text: `mules`,
      weight: 0.1,
    },
    {
      text: `beavers`,
      weight: 1,
    },
    {
      text: `armadillos`,
      weight: 1,
    },
    {
      text: `echidnas`,
      weight: 1,
    },
    {
      text: `elephants`,
      weight: 1,
    },
    {
      text: `monkeys`,
      weight: 1,
    },
    {
      text: `snakes`,
      weight: 1,
    },
    {
      text: `lizards`,
      weight: 1,
    },
    {
      text: `turtles`,
      weight: 1,
    },
    {
      text: `birds`,
      weight: 1,
    },
    {
      text: `chickens`,
      weight: 1,
    },
    {
      text: `ducks`,
      weight: 1,
    },
    {
      text: `turkeys`,
      weight: 1,
    },
    {
      text: `peacocks`,
      weight: 1,
    },
    {
      text: `eagles`,
      weight: 1,
    },
    {
      text: `penguins`,
      weight: 1,
    },
    {
      text: `geese`,
      weight: 1,
    },
    {
      text: `fish`,
      weight: 1,
    },
    {
      text: `octopi`,
      weight: 1,
    },
    {
      text: `bugs`,
      weight: 1,
    },
    {
      text: `bees`,
      weight: 1,
    },
    {
      text: `spiders`,
      weight: 1,
    },
    {
      text: `locusts`,
      weight: 1,
    },
    {
      text: `crickets`,
      weight: 1,
    },
    {
      text: `plants`,
      weight: 1,
    },
    {
      text: `trees`,
      weight: 1,
    },
    {
      text: `fungi`,
      weight: 1,
    },
  ],
  [UsageGroupKey.raceSingular]: [
    {
      text: `human`,
      weight: 1,
    },
    {
      text: `zombie`,
      weight: 1,
    },
    {
      text: `skeleton`,
      weight: 1,
    },
    {
      text: `ghost`,
      weight: 1,
    },
    {
      text: `mummy`,
      weight: 1,
    },
    {
      text: `genie`,
      weight: 1,
    },
    {
      text: `robot`,
      weight: 1,
    },
  ],
  [UsageGroupKey.racePlural]: [
    {
      text: `humans`,
      weight: 1,
    },
    {
      text: `zombies`,
      weight: 1,
    },
    {
      text: `skeletons`,
      weight: 1,
    },
    {
      text: `ghosts`,
      weight: 1,
    },
    {
      text: `mummies`,
      weight: 1,
    },
    {
      text: `genie`,
      weight: 1,
    },
    {
      text: `robots`,
      weight: 1,
    },
  ],

  [UsageGroupKey.adjective_position]: [
    {
      text: `left`,
      weight: 1,
    },
    {
      text: `right`,
      weight: 1,
    },
    {
      text: `east`,
      weight: 1,
    },
    {
      text: `west`,
      weight: 1,
    },
    {
      text: `north`,
      weight: 1,
    },
    {
      text: `south`,
      weight: 1,
    },
  ],
  [UsageGroupKey.preposition_spatial]: [
    {
      text: `beneath`,
      weight: 1,
    },
    {
      text: `below`,
      weight: 1,
    },
    {
      text: `among`,
      weight: 1,
    },
    {
      text: `near`,
      weight: 1,
    },
    {
      text: `above`,
      weight: 1,
    },
    {
      text: `in`,
      weight: 1,
    },
    {
      text: `on`,
      weight: 1,
    },
    {
      text: `within`,
      weight: 1,
    },
    // {
    //   text: `before`,
    //   weight: 1
    // },
    // {
    //   text: `after`,
    //   weight: 1
    // },
  ],
  [UsageGroupKey.shape]: [
    {
      text: `point`,
      weight: 0.1,
    },
    {
      text: `line`,
      weight: 0.1,
    },
    {
      text: `triangle`,
      weight: 1,
    },
    {
      text: `rectangle`,
      weight: 1,
    },
    {
      text: `square`,
      weight: 1,
    },
    {
      text: `pentagon`,
      weight: 1,
    },
    {
      text: `hexagon`,
      weight: 1,
    },
    {
      text: `heptagon`,
      weight: 1,
    },
    {
      text: `octagon`,
      weight: 1,
    },
    {
      text: `nonagon`,
      weight: 1,
    },
    {
      text: `circle`,
      weight: 1,
    },
    {
      text: `double helix`,
      weight: 0.9,
    },
  ],
  [UsageGroupKey.noun_person_name_historical]: [
    {
      text: `Trump`,
      weight: 1,
    },
    {
      text: `Obama`,
      weight: 1,
    },
  ],
  [UsageGroupKey.any_noun_person_name]: [
    {
      text: `${UsageGroupKey.noun_person_name_historical}`,
      weight: 1,
    },
    {
      text: `${UsageGroupKey.noun_person_name_fictional}`,
      weight: 1,
    },
  ],
};
