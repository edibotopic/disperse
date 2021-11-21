# disperse

Procedural food structure generator based on the Dispersed System Formalism

![Microscopic image of an aqueous foam (G/W)](assets/foam.jpg "Micrograph of shaving foam by edibotopic")

This is a simple application for a highly specific use-case: creating random dispersed systems containing multiple phases.

It should work on desktop and mobile, although there is a [slightly annoying bug](#bugs) when scrolling on mobile.

---

## Dispersed System Formalism (DSF)

DSF is a semi-formal language developed for describing multi-phase systems.

Dispersed systems include common everyday things like bread (solid foam: `G/S`) and milk (emulsion: `O/W`).

A more complex example is ice-cream, which is a foam, emulsion and a suspension (in DSF: `(G + O + S)/W`).

Currently, this app allows you to generate binary and ternary systems. So no ice-cream for you (*just yet*).

## Contents

- [syntax](#syntax)
- [purpose](#purpose)
- [applications](#applications)
- [use-case](#use-case)
- [limitations](#limitations)
- [references](#references)
- [bugs](#bugs)
- [to-do](#to-do)

---

## Syntax

The formalism consists of objects (the phases):

> gas (G), oil (O), solid (S) and water (W)

and binary predicates (topological relations):

> dispersed in (/), included within (@), superposed on (σ), bicontinuous with (×) and in addition to (+)

The `+` operator can be understood as a ternary operator - in relational algebra this would be the case `R(xyz)` - as it always relates some `x` and `y` to a `z`.
For example, `(x + y)/z` signifies that the first two phases in the formula are not topologically related
to each other but bear a topological relation to a common `z`, in this case by their both being dispersed in
that phase.

Parentheses are used to disambiguate the resultant formula, such that `(G+O)/W` is not equivalent to `G+(O/W)`.
The web app will simply return `G+O/W` and leave it to the user to define the formula further. Implementing
parentheses in the code would likely be awkward. It would be preferable to use pre- or post-fix notation to
make this implementation more trivial (at least for my abilities) but this would be at the cost of human readability.

When the same object appears in direct relation to itself, such as in `W/W/G`, the formula can generally be reduced (`w/G`) unless
it is understood that each symbolises a different kind of that object. The resolution of such cases is particular to the context
of discovery. For example, for `W` and `S` we could have:

 ```math
 W_1 = salt solution
 W_2 = syrup droplets
 W_n = ...
 S_1 = solid body
 S_2 = solid fragments
 S_n = ...
 ```

![3D visualisation of the topological relations](assets/3d_dsf.png "Each operator expresses a binary topological relation between phases")

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

There is two distinct uses of DSF:

### Analytical

The formalism is a simple and efficient method of describing systems that are difficult to describe in plain language. In this sense DSF is analogous to notation commonly used by scientists for chemical reactions.

### Generative

The formalism is a rare example of a method for procedurally generating food structures. In this sense there is no obvious analogy to DSF in the sciences.

This simple web app focuses on a limited implementation of DSF as a **generative** tool.
It is a starting point for generating *multi-phase structures* (food or otherwise), broadly defined as:

> A system consisting of at least two distinct phases that are related topologically in space

## Use-case

Imagine you are tasked with developing a new food product. You generate a formula as follows:

```math
G/O/W
```

This structure will require the following protocol to manufacture:

1. Prepare a solution of some solute (e.g., sugar, protein)
2. Whip air into oil (e.g., using a high-shear mixer)
3. Emulsify aerated oil into solution prepared in 1. (e.g., again using a mixer)

The inclusion of each phase presents various opportunities:

- Solvents can dissolve different kinds of molecules (vitamins, flavours, aromas)
- Textures can develop through phase dispersion (mouthfeel associated with emulsions)
- Calories can be reduced by creating a volume fraction comprised of air (calorie-reduced candy)

## Limitations

This app is not a full implementation of the ideas presented in the DSF literature. Some authors have suggested how quantitative data can be included in the formulas. However, my view is that the primary novelty of DSF is as a *qualitative tool* that can generate *possible structures*.

This implementation (and any future versions) will focus on these aspects of DSF.

## References

to be completed...

## Bugs

When scrolling on an Android device the background colour (purple tint) momentarily appears over the background image. I haven't tested this on other devices but I believe it is a common issue with background images on mobile browsers. I like my subtly pulsing neon micrograph too much to change it right now.

## To-do

- [x] Publish initial version of app
- [x] Compress media files
- [x] Give example food formulas
- [ ] Give example non-food formulas
- [x] Fix folder structure
- [ ] Refactor function/variable names
- [ ] Add quaternary generator (if only for ice cream)
- [x] Add illustrated examples of predicates
- [ ] Improve mobile UX
- [ ] Complete description of DSF in readme
- [ ] Add infix-postfix converter (disambiguation)
- [ ] Associate formulas w/ recipe and/or emojis
- [ ] Add academic references for DSF
- [ ] Apologise to all programmers for my bad habits

## Contributions

I don't expect this app to have a wide user base. If you have any suggestions or questions you can open an issue.
Hopefully by then I will have sufficient competence using GitHub to respond appropriately.
