# disperse
Procedural food structure generator based on the Dispersed System Formalism

![Microscopic image of an aqueous foam (G/W)](https://github.com/edibotopic/disperse/assets/foam.jpg)

---

## Dispersed System Formalism (DSF)
DSF is a semi-formal language developed for describing multi-phase systems.

## Contents
- [syntax](#syntax)
- [purpose](#purpose)
- [applications](#applications)
- [use-case](#use-case)
- [limitations](#limitations)
- [to-do](#to-do)

---

## Syntax
The formalism consists of objects (the phases): 

> gas (G), oil (O), solid (S) and water (W)

and binary predicates (topological relations):

> dispersed in (/), included within (@), superposed on (σ), bicontinuous with (×) and in addition to (+)

The `+` operator can be understood as a ternary operator - in relational algebra this would be the case `R(xyz)` - as it always relates some `x` and `y` to a `z`.
For example, `(x + y)/z` signifies that the fitst two phases in the formula are not topologically related
to each other but bear a topological relation to a common `z`, in this case by their both being dispersed in
that phase.

Parentheses are used to disambiguate the resultant formula, such that `(G+O)/W` is not equivalent to `G+(O/W)`.
The web app will simply return `G+O/W` and leave it to the user to define the formula further. Implementing
parentheses in the code would likely be awkward. It would be preferable to use pre- or post-fix notation to
make this implementation more trivial (at least for my abilities) but this would be at the cost of human readability.

![3D visualisation of the topological relations](https://github.com/edibotopic/disperse/assets/3d_dsf.png)

## Purpose
DSF is an expansion of the common practice in physico-chemical sciences of describing an emulsion of oil in water as:

```math
O/W
```

DSF expands the range of phases in the domain of objects such that a suspension of gas bubbles in a solid can be written:

```math
G/S
```

It also expands the set of relations beyond `dispersion (/)` to allow for more complex topological descriptions. For example, if each gas bubble
was itself contained within a shell of some aqueous material we could write:

```math
(G@W)/S
```

## Applications
I consider there to be two distinct uses of DSF:

**Analytical**
The formalism is a simple and efficient method of describing systems that are difficult to describe in plain language.

**Generative**
The formalism is a rare example of a method for procedurally generating food structures.

This simple web app focuses on a limited implementation of the latter.

## Use-case
Imagine you are tasked with developing a new food product. You generate a formula as follows:

```math
G/O/W
```

This structure will require the following protocol to manufacture:

1. Prepare a solution of some solute (e.g., sugar, protein)
2. Whip air into oil (e.g., using a high-shear mixer)
3. Emulsify aerated oil into solution (e.g., again using a mixer)

The inclusion of each phase presents various opportunities:

* Solvents that dissolve different kinds of molecules (vitamins, flavours, aromas)
* Textures developed through phase dispersion (mouthfeel associated with emulsions)
* Calories reduced by a volume fraction comprised of air (calorie-reduced candy)

## Limitations
This app is not a full implementation of the ideas presented in the DSF literature.
THe inclusion of quantiative data in a formula, such as the proportion of each material and/or
the volume fraction occupied by a phase, have been proposed. In my view, the primary novelties
of DSF are:

1. The effective description of multi-phasic structures on the basis of topological relations alone
2. The opportunity to procedurally generate concept food structures

## To-do
- [x] Publish initial version of app
- [ ] Add illustrated examples of predicates
- [ ] Improve mobile UX
- [ ] Complete description of DSF in readme
- [ ] Create a roadmap
- [ ] Give example food and non-food applications
- [ ] Consider alternative syntax (Polish notation to reduce ambiguity)
- [ ] Associate each generated formula with a recipe suggestion
- [ ] Compress media files
- [ ] Apologise to all programmers for my bad habits

## Contributions
I don't expect this app to have a wide user base. If you have any suggestions or questions you can open an issue.
Hopefully by then I will have sufficient competence using Github to respond appropriately.
