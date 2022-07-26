// Test suit

//import { render } from '@testing-library/react';
import {render,unmountComponentAtNode} from 'react-dom'
import { act } from 'react-dom/test-utils';
import ProjectList from './projectList';
// pre setup of the application
// creating a baseline/ base component / base area on which your test case executes
let container = null;
let projectData = [
    {
        "milestones": [
          {
            "id": 1,
            "title": "period 1",
            "start": "1/1/2022",
            "end": "1/1/2023",
            "status": "Completed",
            "assignedId": 1,
            "projectId": 1
          },
        ],
        "name": "Git Management",
        "dashboardId": 1,
        "id": 2
      }
]
beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
})

// test case 
// you can specify a type of test into this area
it("Check the project Component without list",() => {
    // tends to define the action
    // it starts the process
    act(() =>{
        render(<ProjectList/>,container)
    })
    // result of the action
    expect(container.textContent).toBe("")
})

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container=null;
})