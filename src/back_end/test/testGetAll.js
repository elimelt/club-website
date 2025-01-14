import { getLeads } from "../api/leads.js";
import { getAllEvents } from "../api/events.js";
import { getProjects } from "../api/projects.js";
import { assert } from "chai";

describe("Testing Get all Functions.", () => {
    it("Get All Officers", async () => {
        let rsp = await getLeads("Test/Club_Leads");
        let expected = [
            {
                Active: true,
                Class_Standing: "Senior",
                Date_Joined: "6/30/2021",
                Date_Left: "NA",
                Email: "something@gmail.com",
                Image: "NA",
                Name: "Billy",
                Role: "Co-Chair",
                Team: "Project1",
            },
            {
                Active: false,
                Class_Standing: "Junior",
                Date_Joined: "5/2/2020",
                Date_Left: "6/30/2021",
                Email: "another@gmail.com",
                Image: "N/A",
                Name: "Joe",
                Role: "Treasurer",
                Team: "Project2",
            },
        ];
        assert.deepEqual(rsp, expected);
    });

    it("Get All Events", async () => {
        let rsp = await getAllEvents("Test/Events");
        let expected = [
            {
                Attendees: 69,
                Date: "2007-10-20T16:00-07:00",
                Description: "This is a dope event",
                Image: "blob",
                Location: "UW",
                Name: "Event1",
                Sponsor: "Google",
            },
            {
                Attendees: 24,
                Date: "2008-10-20T16:00-07:00",
                Description: "Social event",
                Image: "blob",
                Location: "UW",
                Name: "Event2",
                Sponsor: "Kasey",
            },
            {
                Attendees: 21,
                Date: "2192-10-20T16:00-07:00",
                Description: "This is an event in the future",
                Image: "blob",
                Location: "UW?",
                Name: "EventFuture",
                Sponsor: "Tettie",
            },
        ];
        assert.deepEqual(rsp, expected);
    });

    it("Get All Projects", async () => {
        let rsp = await getProjects("Test/Projects");
        let expected = [
            {
                Category: "Web_Project",
                Completed: false,
                Description: "testdesc",
                End_Date: "",
                Git_Link: "link",
                Image: "Image",
                Members: "Billy",
                Name: "Project1",
                PM: "Billy",
                Start_Date: "2020-8-24T00:00-07:00",
            },
            {
                Category: "Web_project",
                Completed: true,
                Description: "TestDesc",
                End_Date: "2022-5-12T00:00-07:00",
                Git_link: "link",
                Image: "Image",
                Members: "Billy,Joe",
                Name: "Project2",
                PM: "Joe",
                Start_Date: "2021-8-24T00:00-07:00",
            },
        ];
        assert.deepEqual(rsp, expected);
    });
});
