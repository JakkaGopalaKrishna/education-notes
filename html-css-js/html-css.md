# 📘 HTML – Tag + One Line Explanation

## 🏗 Document Structure
```HTML
<!DOCTYPE html> – Defines HTML5 document type.
<html> – Root element of the webpage.
<head> – Contains metadata and resources.
<title> – Sets browser tab title.
<body> – Contains visible page content.
<meta> – Provides metadata (charset, SEO, etc.).
<link> – Links external resources (CSS).
<script> – Links or writes JavaScript.
```
## 📝 Text Content
```HTML
<h1>–<h6> – Headings from largest to smallest.
<p> – Paragraph of text.
<br> – Line break.
<hr> – Horizontal rule.
<strong> – Important (semantic bold).
<b> – Bold text (non-semantic).
<em> – Emphasized (semantic italic).
<i> – Italic text (non-semantic).
<mark> – Highlights text.
<small> – Smaller text.
<sup> – Superscript text.
<sub> – Subscript text.
<del> – Deleted text.
<ins> – Inserted text.
<blockquote> – Quoted block content.
<pre> – Preformatted text (keeps spaces).
<code> – Displays code.
```
## 🔗 Links & Media
```HTML
<a> – Creates hyperlink.
<img> – Embeds image.
<audio> – Embeds audio.
<video> – Embeds video.
<source> – Media source.
<iframe> – Embeds another webpage.
<canvas> – Drawing area (JS graphics).
<svg> – Vector graphics container.
```

## 📋 Lists
```HTML
<ul> – Unordered list.
<ol> – Ordered list.
<li> – List item.
<dl> – Description list.
<dt> – Term.
<dd> – Description.
```

## 📊 Tables
```HTML
<table> – Creates table.
<tr> – Table row.
<th> – Header cell.
<td> – Data cell.
<thead> – Table header section.
<tbody> – Table body section.
<tfoot> – Table footer.
<caption> – Table title.
```

## 📄 Forms (VERY IMPORTANT)
```HTML
<form> – Form container.
<input> – Input field.
<textarea> – Multi-line input.
<select> – Dropdown list.
<option> – Dropdown option.
<label> – Label for input.
<button> – Clickable button.
<fieldset> – Groups form elements.
<legend> – Title for fieldset.
<datalist> – Predefined options for input.
<output> – Displays calculation result.
```

## 🔥 Common Input Types
```
text – Text input.
password – Password field.
email – Email input with validation.
number – Numeric input.
checkbox – Checkbox input.
radio – Radio button.
file – File upload.
date – Date picker.
submit – Submit button.
reset – Reset form.
```

## 🧱 Semantic HTML5 (SEO + Accessibility Important)
```HTML
<header> – Top section of page.
<nav> – Navigation links.
<main> – Main content.
<section> – Thematic section.
<article> – Independent content.
<aside> – Sidebar content.
<footer> – Bottom section.
<figure> – Self-contained content.
<figcaption> – Caption for figure.
<details> – Expandable content.
<summary> – Summary of details.
```

## 📦 Containers
```HTML
<div> – Block container.
<span> – Inline container.
```

## 🌍 Global Attributes (Used in Almost All Tags)
```HTML
id – Unique identifier.
class – Group identifier.
style – Inline CSS.
title – Tooltip text.
hidden – Hides element.
data-* – Custom data attributes.
draggable – Makes element draggable.
contenteditable – Makes content editable.
```

# 🎨 CSS – One Line Explanation Cheat Sheet

## 📌 CSS Basics
> selector { property: value; }

**Example:**

## p { color: red; }
- 🎨 Text & Font
- color – Text color.
- font-size – Size of text.
- font-family – Font style.
- font-weight – Boldness.
- text-align – Align text.
- text-decoration – Underline/none.
- text-transform – Uppercase/lowercase.
- letter-spacing – Space between letters.
- line-height – Space between lines.

## 📦 Box Model (VERY IMPORTANT)
- margin – Space outside element.
- padding – Space inside element.
- border – Border around element.
- width – Element width.
- height – Element height.
- box-sizing – Controls box model calculation.

## Box Model Order:

> Content → Padding → Border → Margin  
## 🎯 Display & Position
- display – Block/inline/flex/grid/none.
- position – static/relative/absolute/fixed/sticky.
- top/right/bottom/left – Position offset.
- z-index – Stack order.
- overflow – Controls overflow content.

## 📐 FlexBox (INTERVIEW FAVORITE)
- display: flex – Enables flex layout.
- justify-content – Horizontal alignment.
- align-items – Vertical alignment.
- flex-direction – Row/column.
- flex-wrap – Wrap items.
- gap – Space between items.
## 📊 Grid
- display: grid – Enables grid layout.
- grid-template-columns – Column structure.
- grid-template-rows – Row structure.
- gap – Space between grid items.
- place-items – Center content.
## 🎭 Background & Effects
- background-color – Background color.
- background-image – Background image.
- background-size – Cover/contain.
- border-radius – Rounded corners.
- box-shadow – Shadow effect.
- opacity – Transparency.
## 🎬 Transitions & Animation
- transition – Smooth property change.
- transform – Rotate/scale/move.
- animation – Custom animation.
- @keyframes – Defines animation.

## 🧠 Important Differences (AMA Rapid Fire)
### id vs class – id is unique, class is reusable.
### div vs span – div is block, span is inline.
### inline vs block – Block takes full width, inline doesn’t.
### semantic vs non-semantic – Semantic gives meaning.
### strong vs b – strong has meaning, b is visual only.