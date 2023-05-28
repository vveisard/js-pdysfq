export const UsageGroupKey = {
  Alpha: 'α',
  //Omega: 'Ω',

  any_noun_person_name: '{noun/person/name/*}',
  noun_person_name_historical: '{noun/person/name/historical}',
  noun_person_name_fictional: '{noun/person/name/fictional}',
  noun_person_name_fictional_duke: '{noun/person/name/fictional/duke}',
  noun_person_name_ladz: '{noun/person/name/ladz}',

  /**
   * eg, "camp"
   */
  noun_place_type: '{noun/place/type}',
  noun_place_state: '{noun/place/state}',
  noun_place_landmark: '{noun/place/landmark}',

  any_noun_thing: '{noun/thing/*}',
  noun_thing_object_food: '{noun/thing/object/food}',
  noun_thing_object_planet: '{noun/thing/object/planet}',
  noun_thing_concept: '{noun/thing/concept}',
  noun_thing_object: '{noun/thing/object}',
  noun_thing_event: '{noun/thing/event}',
  article: '{article?singular}',
  /**
   * eg, "Jr"
   */
  title_after_noun_person_name: '{title: after noun/person/name}',
  /**
   * eg, "Mr"
   */
  title_before_noun_person_name: `{title: before noun/person/name}`,
  /**
   * eg, "wa"
   */
  prefix_noun: '{prefix: noun}',
  /**
   * eg, "opolis"
   */
  suffix_noun: '{suffix: noun}',

  /**
   * eg, "spicy"
   */
  adjective_flavor: '{adjective/flavor}',

  /**
   * eg, "west"
   */
  adjective_position: '{adjective/position}',

  /**
   * eg, "wet"
   */
  adjective_attribute_before_noun: '{adjective/attribute: before noun}',

  /**
   * eg, "evil"
   */
  adjective_alignment_before_noun: '{adjective/alignment: before noun}',

  /**
   * eg, "stick figure"
   */
  adjective_variant_before_noun: '{adjective/variant: before noun}',
  /**
   * eg, "adult"
   */
  adjective_variant_before_noun_person:
    '{adjective/variant: before noun_person}',
  /**
   * eg, "Kong"
   */
  adjective_variant_after_noun_person: '{adjective/variant: after person}',
  /**
   * eg, "Italian".
   */
  adjective_nationality: '{adjective/nationality}',

  /**
   * eg, "his"
   */
  adjective_possessive: '{adjective/possessive}',

  /**
   * eg, "some"
   */
  determiner_amount_indefinite: '{determiner/amount/indefinite}',

  /**
   * eg, "below"
   */
  preposition_spatial: '{preposition/spatial}',

  /**
   * eg, "one". "two"
   */
  cardinalNumber: '{cardinalNumber}',
  /**
   * eg, "two"
   */
  cardinalNumber_plural: '{cardinalNumber?plural}',
  /**
   * eg, "million".
   */
  cardinalNumber_place: '{cardinalNumberPlace}',
  /**
   * More than one.
   * eg, "two", "one million"
   */
  cardinalNumber_many: '{cardinalNumber_many?plural}',

  /**
   * eg, "uno", "dos"
   */
  cardinalNumber_spanish: '{cardinalNumber?spanish}',

  /**
   * eg, "dos"
   */
  cardinalNumber_plural_spanish: '{cardinalNumber/plural?spanish}',

  /**
   * eg, "first", "fourth"
   */
  ordinalNumber: '{ordinalNumber}',

  /**
   * eg, "millionth".
   */
  ordinalNumber_place: '{ordinalNumberPlace}',
  /**
   * eg, "second"
   */
  ordinalNumber_plural: '{ordinalNumber?plural}',
  /**
   * More than one.
   * eg, "second", "one millionth"
   */
  ordinalNumber_many: '{ordinalNumber_many?plural}',

  /**
   * eg, "by the foot"
   */
  clause_after_noun: '{clause: after noun}',
  /**
   * eg, "triforce of"
   */
  clause_before_noun: '{clause: before noun}',
  clause_vs_after_anything: '{clause/vs: after anything}',
  clause_and_after_anything: '{clause/and: after anything}',
  clause_of_after_anything: '{clause/of: after anything}',

  /**
   * eg, "square"
   */
  shape: '{shape}',
  color: '{color}',
  sex: '{sex}',
  gender: '{gender}',
  /**
   * A non-humanoid living being.
   * eg, "alien", "monkey", "bug", "plant".
   */
  creatureSingular: '{creatureSingular}',
  /**
   * A non-humanoid living being.
   * eg, "geese".
   */
  creaturePlural: '{creaturePlural}',
  /**
   * eg, "cowboy"
   */
  occupation: '{occupation}',
  /**
   * Singular form of a race of humanoid.
   * eg, "elf".
   */
  raceSingular: '{raceSingular}',
  /**
   * Plural form of a race of humanoid.
   * eg, "elves".
   */
  racePlural: '{racePlural}',
};
