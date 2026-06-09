import React, { useState } from 'react'
import Accordion from 'react-bootstrap/Accordion';


export default function About(props) {
    const myStyle = {
  color: props.mode === 'dark' ? 'white' : 'black',
  backgroundColor: props.mode === 'dark' ? '#042743' : 'white',
  '--bs-accordion-bg': props.mode === 'dark' ? '#042743' : 'white',
  '--bs-accordion-btn-color': props.mode === 'dark' ? 'white' : 'black',
  '--bs-accordion-active-bg': props.mode === 'dark' ? '#042743' : 'white',
  '--bs-accordion-active-color': props.mode === 'dark' ? 'white' : 'black',
  '--bs-accordion-btn-bg': props.mode === 'dark' ? '#042743' : 'white',
  ...(props.mode === 'dark' && {
    '--bs-accordion-btn-icon': `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23ffffff'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e")`,
    '--bs-accordion-btn-active-icon': `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23ffffff'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e")`,
  })
}

  return (
    <div className='container' style={myStyle}>
  <h4>About TextUtils</h4>
  <Accordion defaultActiveKey="0">
    <Accordion.Item eventKey="0" style={myStyle}>
      <Accordion.Header>Text Conversion</Accordion.Header>
      <Accordion.Body>
        TextUtils makes text transformation effortless. Whether you need to convert a paragraph to uppercase for emphasis or lowercase for consistency, it happens instantly with a single click. This is especially useful for developers, writers, and students who frequently work with text formatting. No need to manually retype or use complex tools — just paste your text, click a button, and you're done.
      </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="1" style={myStyle}>
      <Accordion.Header>Copy & Clear</Accordion.Header>
      <Accordion.Body>
        Once you've transformed your text, copying it is just one click away. TextUtils uses the browser's Clipboard API to copy your text silently in the background — no selecting, no right-clicking. The clear button lets you wipe the entire text area instantly so you can start fresh without manually selecting and deleting. These small features save a surprising amount of time when you're working with large blocks of text repeatedly.
      </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="2" style={myStyle}>
      <Accordion.Header>Word & Character Count</Accordion.Header>
      <Accordion.Body>
        TextUtils provides a real-time summary of your text as you type. It counts the total number of words, total characters (with and without spaces), and even estimates your reading time based on an average reading speed of 200 words per minute. This is particularly useful for students writing essays with word limits, developers writing documentation, or anyone who needs to keep their content within a specific length.
      </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="3" style={myStyle}>
      <Accordion.Header>Search Within Text</Accordion.Header>
      <Accordion.Body>
        The search feature lets you find any specific word or phrase within your text instantly. This is helpful when working with large paragraphs where manually scanning is tedious. Just type the word you're looking for and TextUtils will highlight or count how many times it appears. It's a lightweight alternative to Ctrl+F specifically designed for the text you're currently working with inside the app.
      </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="4" style={myStyle}>
      <Accordion.Header>Text Preview</Accordion.Header>
      <Accordion.Body>
        The preview section gives you a clean, read-only view of your text after all transformations have been applied. This is useful to review your final output before copying it elsewhere. It helps you catch any unwanted formatting issues or leftover spaces before using the text in emails, documents, or code. The preview updates live as you make changes, so you always see exactly what you'll be copying.
      </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="5" style={myStyle}>
      <Accordion.Header>Dark Mode Support</Accordion.Header>
      <Accordion.Body>
        TextUtils comes with a built-in dark mode toggle for a comfortable experience in low-light environments. Switching between light and dark mode changes the background and text colors across the entire app instantly. Dark mode is not just a visual preference — it reduces eye strain during long working sessions and is especially helpful for developers and writers who spend hours in front of a screen. Your mode preference is applied globally across all pages of the app.
      </Accordion.Body>
    </Accordion.Item>
  </Accordion>
</div>
  )
}

