//
import { deepmerge } from 'deepmerge-ts';
//
import { writeFileSync } from 'fs';
//
import baseContent from './content/base.js';
// import bleachContent from './content/bleach.js';
// import dangaronpaContent from './content/danganronpa.js';
// import dragonballZContent from './content/dragonball-z.js';
import fantasyContent from './content/fantasy.js';
// import kingdomHeartsContent from './content/kingdom-hearts.js';
// import skribblioContent from './content/skribblio.js';
// import ladzContent from './content/ladz.js';
// import metalGearContent from './content/metal-gear.js';
// import middleEarthContent from './content/middle-earth.js';
import nintendoContent from './content/nintendo.js';
// import philosophyContent from './content/philosophy.js';
import starWarsContent from './content/star-wars.js';
//

function getRandomIndexWithWeights(weights) {
  var totalWeight = 0,
    i,
    random;

  for (i = 0; i < weights.length; i++) {
    totalWeight += weights[i];
  }

  random = Math.random() * totalWeight;

  for (i = 0; i < weights.length; i++) {
    if (random < weights[i]) {
      return i;
    }

    random -= weights[i];
  }

  return -1;
}

function containsAt(outer, inner, index) {
  for (let i = 0; i < inner.length; i++) {
    if (outer[index + i] !== inner[i]) {
      return false;
    }
  }

  return true;
}

/**
 * Evaluate the weight of an "edge".
 * @param currentNodeWeight accumulated weight.
 * @param currentNodeOutDegree number of possible expansions of the current expression.
 * @param nextEdgeWeight weight of the expansion.
 * @returns weight of the expansion.
 */
function evaluateEdgeWeight(
  currentNodeWeight,
  currentNodeOutDegree,
  nextEdgeWeight
) {
  switch (typeof nextEdgeWeight) {
    case 'number':
      return currentNodeWeight * nextEdgeWeight;
    case 'string': // division expression
      const edgeWeightDivisionExpressionParts = nextEdgeWeight.split('/');

      const edgeWeightDivisionExpressionNumerator = Number(
        edgeWeightDivisionExpressionParts[0]
      );
      if (Number.isNaN(edgeWeightDivisionExpressionNumerator))
        throw new Error(
          `Invalid argument! Cannot parse numerator '${edgeWeightDivisionExpressionDenominator}'`
        );

      let edgeWeightDivisionExpressionDenominator =
        edgeWeightDivisionExpressionParts[1];
      if (edgeWeightDivisionExpressionDenominator !== 'n')
        throw new Error(
          `Invalid argument! Cannot parse denominator '${edgeWeightDivisionExpressionDenominator}'`
        );

      edgeWeightDivisionExpressionDenominator = currentNodeOutDegree;

      return (
        currentNodeWeight *
        (edgeWeightDivisionExpressionNumerator /
          edgeWeightDivisionExpressionDenominator)
      );
    default:
      throw new Error(`Invalid argument! ${nextEdgeWeight}`);
  }
}

/**
 * Expand an expression using rules.
 *
 * Expression rules uses curly braces. Function rules use parenthesis. List rules use square brackets.
 *
 * A function rule expands using all lists of a corresponding list rule.
 * @remarks
 * Iterates backwards through the expression.
 * @param rules rules to expand the expression.
 * @param currentNodeExpressionIndex index counted from end of {@link currentNodeExpression}.
 * @param currentNodeWeight accumulated weight while expanding.
 * @returns all leaves.
 */
function expand(
  rules,
  currentNodeExpressionIndex,
  currentNodeExpression,
  currentNodeWeight
) {
  while (currentNodeExpressionIndex < currentNodeExpression.length) {
    let iActualCurrentNodeExpressionIndex =
      currentNodeExpression.length - currentNodeExpressionIndex;

    for (const iEdges of Object.entries(rules)) {
      if (
        containsAt(
          currentNodeExpression,
          iEdges[0],
          iActualCurrentNodeExpressionIndex - iEdges[0].length
        )
      ) {
        const leaves = new Array();

        if (typeof iEdges[1] === 'function') {
          // function rule
          const regex = /\(([^\)]+)\)/;
          const args = iEdges[0].match(regex)[1];

          // get the corresponding argument rule
          const argumentRule = rules[`[${args}]`];
          if (argumentRule === undefined)
            throw new Error(
              `Invalid state! No corresponding argument rule '[${args}]' for function rule '(${args})'`
            );

          // use each args in the argument rule to expand the function rule
          for (const jArgs of argumentRule) {
            const jEdges = iEdges[1](...jArgs);
            for (const kEdge of jEdges) {
              const kExpansionLeaves = expand(
                rules,
                currentNodeExpressionIndex,
                kEdge.text,
                evaluateEdgeWeight(
                  currentNodeWeight,
                  argumentRule.length,
                  kEdge.weight
                )
              );

              for (const lExpansionResult of kExpansionLeaves) {
                leaves.push(lExpansionResult);
              }
            }
          }
        } else {
          // text rule
          for (const jEdge of iEdges[1]) {
            // expand node using the edge
            const jCurrentNodeExpanded =
              currentNodeExpression.slice(
                0,
                iActualCurrentNodeExpressionIndex - iEdges[0].length
              ) +
              jEdge.text +
              currentNodeExpression.slice(iActualCurrentNodeExpressionIndex);

            const jExpansionLeaves = expand(
              rules,
              currentNodeExpressionIndex,
              jCurrentNodeExpanded,
              evaluateEdgeWeight(
                currentNodeWeight,
                iEdges[1].length,
                jEdge.weight
              )
            );

            for (const kExpansionLeaf of jExpansionLeaves) {
              leaves.push(kExpansionLeaf);
            }
          }
        }

        // if node can be expanded, this node returns leaves
        return leaves;
      }
    }

    currentNodeExpressionIndex++;
  }

  return [
    {
      text: currentNodeExpression,
      weight: currentNodeWeight,
    },
  ];
}

const rules = deepmerge(
  baseContent,
  //bleachContent,
  //dangaronpaContent,
  //dragonballZContent,
  fantasyContent,
  //kingdomHeartsContent,
  //ladzContent,
  //metalGearContent,
  //middleEarthContent,
  nintendoContent,
  //philosophyContent,
  //skribblioContent,
  starWarsContent
);

const results = expand(rules, 0, 'α', 1);

// writeFileSync(
//   './language.txt',
//   JSON.stringify(results, undefined, 2)
// )

//console.log(results.map(i => JSON.stringify(i)).join(',\n'))

const validResults = results.filter((i) => i.text.length <= 32);
const weights = validResults.map((i) => i.weight);

// TODO break *before* going over the limit

let output = '';
while (output.length < 20000) {
  const randomIndex = getRandomIndexWithWeights(weights);
  output += validResults[randomIndex].text + ',';
}

// writeFileSync(
//   './words.txt',
//   output
// )

console.log(output);
