# CSS Complete Notes

# CSS Priority

```text
Inline Style > ID > Class > Element
```

---

# CSS Selectors

CSS Selectors are patterns used to select and target HTML elements so that styles can be applied to them.

---

## 1. Universal Selector

Selects all elements on the page.

```css
* {
  margin: 0;
  padding: 0;
}
```

---

## 2. Basic Selectors

### Element Selector

Selects all elements of a specific type.

```css
p {
  color: blue;
}
```

---

### Class Selector

Selects elements with a specific class.

```css
.my-class {
  font-size: 16px;
}
```

---

### ID Selector

Selects a single element with a specific ID.

```css
#my-id {
  background-color: yellow;
}
```

---

## 3. Grouping Selectors

Apply same styles to multiple selectors.

```css
h1, h2, h3 {
  font-family: Arial;
}
```

---

## 4. Attribute Selectors

Select elements based on attributes.

```css
input[type="text"] {
  border: 1px solid black;
}
```

---

## 5. Combinator Selectors

### Descendant Selector

```css
div p {
  color: green;
}
```

---

### Child Selector

```css
ul > li {
  list-style-type: square;
}
```

---

### Adjacent Sibling Selector

```css
h2 + p {
  margin-top: 0;
}
```

---

### General Sibling Selector

```css
h2 ~ p {
  color: gray;
}
```

---

## 6. Pseudo-class Selectors

```css
a:hover {
  color: red;
}
```

---

## 7. Pseudo-element Selectors

```css
p::first-letter {
  font-size: 200%;
}
```

---

# 🧠 Advanced Selectors

## :not()

```css
p:not(.special) {
  color: gray;
}
```

---

## :nth-child()

```css
li:nth-child(odd) {
  background: lightgray;
}
```

---

## :is()

```css
:is(h1, h2, h3) {
  color: red;
}
```

---

# 🎯 Why We Use Selectors

- Target elements precisely
- Control styling logic
- Improve maintainability
- Build scalable design systems

---

# CSS Box Model

The CSS Box Model describes how every HTML element is represented as a rectangular box.

```text
Content → Padding → Border → Margin
```

---

## 1. Content

The area where text and images appear.

```css
div {
  width: 200px;
  height: 100px;
}
```

---

## 2. Padding

Space between content and border.

```css
div {
  padding: 20px;
}
```

---

## 3. Border

Line surrounding content and padding.

```css
div {
  border: 2px solid black;
}
```

---

## 4. Margin

Space outside the element.

```css
div {
  margin: 10px;
}
```

---

# Overflow Property

```css
div {
  overflow: hidden;
}
```

Other values:
- visible
- scroll
- auto

---

# 🎯 Why We Use Box Model

- Control spacing
- Control layout
- Make responsive UI
- Prevent overlap
- Create design systems

---

# CSS Display Property

Determines how elements appear on the webpage.

---

## display: block

```css
display: block;
```

Examples:
- `<div>`
- `<p>`
- `<h1>`

---

## display: inline

```css
display: inline;
```

Examples:
- `<span>`
- `<a>`
- `<strong>`

---

## display: inline-block

```css
display: inline-block;
```

Examples:
- `<img>`
- `<button>`

---

## display: none

```css
display: none;
```

Element is removed from layout.

---

## display: flex

```css
display: flex;
```

Creates Flexbox layout.

---

## display: grid

```css
display: grid;
grid-template-columns: 1fr 1fr;
```

Creates Grid layout.

---

# Display Property Comparison

| Property | New Line? | Width/Height Works? | Takes Full Width? |
|----------|------------|---------------------|-------------------|
| block | Yes | Yes | Yes |
| inline | No | No | No |
| inline-block | No | Yes | No |
| none | Removed | — | — |

---

# CSS Position Property

Used to define element positioning.

---

## Types of Position

- static
- relative
- absolute
- fixed
- sticky

---

## static

Default positioning.

```css
position: static;
```

---

## relative

Position relative to itself.

```css
div {
  position: relative;
  top: 10px;
}
```

---

## absolute

Position relative to nearest positioned parent.

```css
div {
  position: absolute;
  top: 20px;
  left: 30px;
}
```

---

## fixed

Position relative to viewport.

```css
div {
  position: fixed;
  top: 0;
  left: 0;
}
```

---

## sticky

Switches between relative and fixed.

```css
div {
  position: sticky;
  top: 0;
}
```

---

# Position Comparison Table

| Position | Normal Flow? | Relative To |
|----------|---------------|--------------|
| static | Yes | Document |
| relative | Yes | Itself |
| absolute | No | Nearest positioned parent |
| fixed | No | Viewport |
| sticky | Mixed | Scroll container |

---

# CSS FlexBox

FlexBox is a layout model for arranging items flexibly.

---

# Flex Container Properties

## display: flex

```css
.container {
  display: flex;
}
```

---

## flex-direction

```css
.container {
  flex-direction: row;
}
```

Values:
- row
- column

---

## justify-content

```css
.container {
  justify-content: center;
}
```

Values:
- flex-start
- flex-end
- center
- space-between
- space-around
- space-evenly

---

## align-items

```css
.container {
  align-items: center;
}
```

Values:
- stretch
- center
- flex-start
- flex-end
- baseline

---

# Flex Item Properties

## flex-grow

```css
.item {
  flex-grow: 1;
}
```

---

## flex-shrink

```css
.item {
  flex-shrink: 1;
}
```

---

## flex-basis

```css
.item {
  flex-basis: 200px;
}
```

---

## flex (Shorthand)

```css
.item {
  flex: 1;
}
```

Equivalent to:

```css
flex-grow: 1;
flex-shrink: 1;
flex-basis: 0;
```

---

# 📊 Important Flex Concepts

## Main Axis vs Cross Axis

### flex-direction: row

- Main axis → horizontal
- Cross axis → vertical

### flex-direction: column

- Main axis → vertical
- Cross axis → horizontal

---

## align-content

Works only when wrapping.

Controls spacing between rows.

---

## order Property

```css
.item {
  order: 2;
}
```

Changes visual order.

---

## gap Property

```css
.container {
  gap: 20px;
}
```

Better than margins for spacing.

---

# ⚖️ FlexBox vs Grid

| FlexBox | Grid |
|---------|------|
| 1D layout | 2D layout |
| Row OR column | Rows AND columns |
| Best for components | Best for page layouts |
