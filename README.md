# CWRU Cooding Bootcamp 5. Third-Party APIs: Work Day Scheduler

## PURPOSE: Create simple calendar application that allows the user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

** **

Open [index.html](./index.html) in your browser to view the updated landing page.
   - Source: [Github](https://github.com/awolrob/workday-scheduler)
   - Published Site: [Live URL](https://awolrob.github.io/workday-scheduler/)

** **
## An employee with a busy schedule and wants to add important events to a daily planner so they can manage time effectively

## Acceptance Criteria is as follows:

```
0. Download starter code that uses the [Moment.js](https://momentjs.com/) library to work with date and time
- Action: download and read through started code

1. Open the planner the current day is displayed at the top of the calendar
- Action: Pull and format system date passing it to the ID element at the top of the screen
- Ref: https://momentjs.com/docs/#/parsing/string

2. WHEN I scroll down I am presented with timeblocks for standard business hours
- Action Hardcode or dymanically code hour DIVs
- Ref: https://api.jquery.com

3. WHEN I view the timeblocks for that day each timeblock is color coded to indicate whether it is in the past, present, or future.
- Action: Using the CSS provided, determine hour DIV againt current time and apply the appropriate style
- Ref: https://api.jquery.com

4. WHEN I click into a timeblock I can enter an event
- Action: Update click on element and switch to a textarea element to allow user to enter / change data
- Ref: CWRU Module 5 Taskmaster Pro

5. WHEN I click the save button for that timeblock the text for that event is saved in local storage
- Action: capture the element changed and when the same row's save button is clicked save it to local storage
- Ref: https://useiconic.com/open
- Ref: https://api.jquery.com
- Ref: CWRU Module 5 Taskmaster Pro

6. WHEN I refresh the page  the saved events persist
- Action: save items to local storage.  When page reloads pull saved items from local storage an display in element items
-Ref: CWRU Module 4 Taskinator
-Ref: CWRU Module 4 Activities: 04-Web-APIs\01-Activities\04-localStorage

```

**The application should function as follows:**

![day planner demo](./assets/images/05-third-party-apis-homework-demo.gif)

- - -
` https://github.com/awolrob | 2021-06-19 `
