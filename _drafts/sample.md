---
layout: post
title: "Testing Markdown in Jekyll"
author: "Benson"
date: 2025-09-01
tags: [jekyll, markdown, test]
description: "A sample post to test out Markdown formatting in a Jekyll blog."
cover_image: /assets/img/logo-social.png
---

# Hello Jekyll 👋

This is a **sample blog post** written in Markdown to test how it looks on your site.

## Text Formatting
- **Bold text**
- *Italic text*
- ~~Strikethrough~~
- `Inline code`

> "A blockquote example to test styling."

## Lists
1. First ordered item  
2. Second item  
   - Nested unordered item
   - Another nested item  
3. Third item  

- [x] Completed task  
- [ ] Pending task  

## Code Block
```javascript
function greet(name) {
  return `Hello, ${name}! 👋`;
}
console.log(greet("World"));
````

## Table

| Feature     | Status | Notes               |
| ----------- | ------ | ------------------- |
| Markdown    | ✅      | Works great         |
| Code blocks | ✅      | Syntax highlighting |
| Images      | ✅      | With captions       |

## Image

![Sample Image](/assets/img/sample.jpeg)  
*This is a sample caption for an image.*

<figure>
  <img src="/assets/img/sample.jpeg" alt="Sample Image">
  <figcaption>This is a sample caption for an image.</figcaption>
</figure>

## Footnotes

Here’s an example with a footnote.[^1]

[^1]: This is the footnote text.

---

That’s it! 🎉 This post demonstrates most of the Markdown elements you’ll want to test in your Jekyll blog.

```

This content will help you verify headings, code blocks, lists, images, tables, footnotes, and callouts are styled correctly in your current CSS setup.  

👉 Do you want me to also generate a **second post with longer article-style text** (like a real blog article on tech or personal story) so you can test multi-paragraph layouts?