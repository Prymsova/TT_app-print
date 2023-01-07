const issue124 = {
	"expand": "schema,names",
	"startAt": 0,
	"maxResults": 50,
	"total": 62,
	"issues": [
		{
			"expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
			"id": "18315",
			"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/issue/18315",
			"key": "TM-3466",
			"fields": {
				"statuscategorychangedate": "2022-05-17T15:29:39.251+0200",
				"issuetype": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issuetype/10100",
					"id": "10100",
					"description": "Functionality or a feature expressed as a user goal.",
					"iconUrl": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10315?size=medium",
					"name": "Story",
					"subtask": false,
					"avatarId": 10315,
					"hierarchyLevel": 0
				},
				"timespent": null,
				"sprint": {
					"id": 124,
					"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/sprint/124",
					"state": "active",
					"name": "Sprint Tučňák (Jindra)",
					"startDate": "2022-11-30T11:43:11.974Z",
					"endDate": "2022-12-19T13:38:00.000Z",
					"originBoardId": 1,
					"goal": "Dodělat základní Android verzi Camerita (ať synchronizujeme vývoj)"
				},
				"project": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/project/10000",
					"id": "10000",
					"key": "TM",
					"name": "TappyTaps development",
					"projectTypeKey": "software",
					"simplified": false,
					"avatarUrls": {
						"48x48": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324",
						"24x24": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=small",
						"16x16": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=xsmall",
						"32x32": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=medium"
					}
				},
				"fixVersions": [],
				"aggregatetimespent": null,
				"resolution": null,
				"customfield_10113": {
					"hasEpicLinkFieldDependency": false,
					"showField": false,
					"nonEditableReason": {
						"reason": "PLUGIN_LICENSE_ERROR",
						"message": "The Parent Link is only available to Jira Premium users."
					}
				},
				"customfield_10510": null,
				"customfield_10114": null,
				"customfield_10500": null,
				"customfield_10501": null,
				"customfield_10502": [],
				"customfield_10503": null,
				"customfield_10504": null,
				"customfield_10505": null,
				"customfield_10506": null,
				"resolutiondate": null,
				"customfield_10507": null,
				"customfield_10508": null,
				"customfield_10509": null,
				"workratio": -1,
				"watches": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/TM-3466/watchers",
					"watchCount": 1,
					"isWatching": false
				},
				"lastViewed": null,
				"issuerestriction": {
					"issuerestrictions": {},
					"shouldDisplay": false
				},
				"created": "2022-05-17T15:29:38.769+0200",
				"epic": null,
				"customfield_10100": null,
				"priority": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/priority/3",
					"iconUrl": "https://tappytaps2.atlassian.net/images/icons/priorities/medium.svg",
					"name": "Medium",
					"id": "3"
				},
				"customfield_10101": null,
				"customfield_10102": null,
				"customfield_10300": null,
				"labels": [],
				"aggregatetimeoriginalestimate": null,
				"timeestimate": null,
				"versions": [],
				"issuelinks": [],
				"assignee": null,
				"updated": "2022-11-28T13:39:52.109+0100",
				"status": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/status/10000",
					"description": "",
					"iconUrl": "https://tappytaps2.atlassian.net/",
					"name": "To Do",
					"id": "10000",
					"statusCategory": {
						"self": "https://tappytaps2.atlassian.net/rest/api/2/statuscategory/2",
						"id": 2,
						"key": "new",
						"colorName": "blue-gray",
						"name": "To Do"
					}
				},
				"components": [],
				"timeoriginalestimate": null,
				"description": "* zobrazit staničky včetně posledního preview\n* rozlišovat stavy\n** online\n** offline (nedostupná)\n** vypnuta (volitelně?)\n* po kliknutí se připojí standardně na staničku\n* mobilní backend se sezname staniček\n\n\n\nGUI\n\n* empty screena (přidání nové staničky)\n* výběr staniček\n* možnost připojení na kamerku\n\n*Grafika*\n\nFigma iOS\n\n[https://www.figma.com/file/BXeLBJfTR71e9iaW7jw6XW/Camerito-appdesign-iOS?node-id=1330%3A10784|https://www.figma.com/file/BXeLBJfTR71e9iaW7jw6XW/Camerito-appdesign-iOS?node-id=1330%3A10784|smart-link] \n\nFigma Android \n\n[https://www.figma.com/file/exWQaD8OyJhOfrbpNUs1iU/Camerito-appdesign-android?node-id=316%3A17481|https://www.figma.com/file/exWQaD8OyJhOfrbpNUs1iU/Camerito-appdesign-android?node-id=316%3A17481|smart-link] ",
				"timetracking": {},
				"customfield_10005": null,
				"security": null,
				"aggregatetimeestimate": null,
				"attachment": [],
				"flagged": false,
				"summary": "Camerito - přehled staniček (Android)",
				"creator": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/user?accountId=557058%3A4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"accountId": "557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"avatarUrls": {
						"48x48": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/48",
						"24x24": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/24",
						"16x16": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/16",
						"32x32": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/32"
					},
					"displayName": "Jan Sarson",
					"active": true,
					"timeZone": "Europe/Prague",
					"accountType": "atlassian"
				},
				"subtasks": [
					{
						"id": "18374",
						"key": "TM-3525",
						"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/18374",
						"fields": {
							"summary": "Backend",
							"status": {
								"self": "https://tappytaps2.atlassian.net/rest/api/2/status/10001",
								"description": "",
								"iconUrl": "https://tappytaps2.atlassian.net/",
								"name": "Done",
								"id": "10001",
								"statusCategory": {
									"self": "https://tappytaps2.atlassian.net/rest/api/2/statuscategory/3",
									"id": 3,
									"key": "done",
									"colorName": "green",
									"name": "Done"
								}
							},
							"priority": {
								"self": "https://tappytaps2.atlassian.net/rest/api/2/priority/3",
								"iconUrl": "https://tappytaps2.atlassian.net/images/icons/priorities/medium.svg",
								"name": "Medium",
								"id": "3"
							},
							"issuetype": {
								"self": "https://tappytaps2.atlassian.net/rest/api/2/issuetype/10102",
								"id": "10102",
								"description": "A small piece of work that's part of a larger task.",
								"iconUrl": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10316?size=medium",
								"name": "Sub-task",
								"subtask": true,
								"avatarId": 10316,
								"hierarchyLevel": -1
							}
						}
					},
					{
						"id": "18375",
						"key": "TM-3526",
						"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/18375",
						"fields": {
							"summary": "Android",
							"status": {
								"self": "https://tappytaps2.atlassian.net/rest/api/2/status/10002",
								"description": "",
								"iconUrl": "https://tappytaps2.atlassian.net/images/icons/statuses/generic.png",
								"name": "Testing",
								"id": "10002",
								"statusCategory": {
									"self": "https://tappytaps2.atlassian.net/rest/api/2/statuscategory/4",
									"id": 4,
									"key": "indeterminate",
									"colorName": "yellow",
									"name": "In Progress"
								}
							},
							"priority": {
								"self": "https://tappytaps2.atlassian.net/rest/api/2/priority/3",
								"iconUrl": "https://tappytaps2.atlassian.net/images/icons/priorities/medium.svg",
								"name": "Medium",
								"id": "3"
							},
							"issuetype": {
								"self": "https://tappytaps2.atlassian.net/rest/api/2/issuetype/10102",
								"id": "10102",
								"description": "A small piece of work that's part of a larger task.",
								"iconUrl": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10316?size=medium",
								"name": "Sub-task",
								"subtask": true,
								"avatarId": 10316,
								"hierarchyLevel": -1
							}
						}
					},
					{
						"id": "18376",
						"key": "TM-3527",
						"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/18376",
						"fields": {
							"summary": "iOS",
							"status": {
								"self": "https://tappytaps2.atlassian.net/rest/api/2/status/10001",
								"description": "",
								"iconUrl": "https://tappytaps2.atlassian.net/",
								"name": "Done",
								"id": "10001",
								"statusCategory": {
									"self": "https://tappytaps2.atlassian.net/rest/api/2/statuscategory/3",
									"id": 3,
									"key": "done",
									"colorName": "green",
									"name": "Done"
								}
							},
							"priority": {
								"self": "https://tappytaps2.atlassian.net/rest/api/2/priority/3",
								"iconUrl": "https://tappytaps2.atlassian.net/images/icons/priorities/medium.svg",
								"name": "Medium",
								"id": "3"
							},
							"issuetype": {
								"self": "https://tappytaps2.atlassian.net/rest/api/2/issuetype/10102",
								"id": "10102",
								"description": "A small piece of work that's part of a larger task.",
								"iconUrl": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10316?size=medium",
								"name": "Sub-task",
								"subtask": true,
								"avatarId": 10316,
								"hierarchyLevel": -1
							}
						}
					}
				],
				"reporter": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/user?accountId=557058%3A4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"accountId": "557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"avatarUrls": {
						"48x48": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/48",
						"24x24": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/24",
						"16x16": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/16",
						"32x32": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/32"
					},
					"displayName": "Jan Sarson",
					"active": true,
					"timeZone": "Europe/Prague",
					"accountType": "atlassian"
				},
				"aggregateprogress": {
					"progress": 0,
					"total": 0
				},
				"customfield_10001": null,
				"customfield_10200": null,
				"customfield_10201": null,
				"customfield_10400": null,
				"customfield_10511": null,
				"customfield_10115": [
					{
						"id": 120,
						"name": "Sprint Octomilka (Tomáš)",
						"state": "closed",
						"boardId": 1,
						"goal": "Základní verze Watchita a webová verze Barkio/Bibino",
						"startDate": "2022-05-19T14:41:23.702Z",
						"endDate": "2022-06-06T13:36:00.000Z",
						"completeDate": "2022-06-21T08:09:43.026Z"
					},
					{
						"id": 121,
						"name": "Sprint Prase (Honza)",
						"state": "closed",
						"boardId": 1,
						"goal": "Udělat release Android verze se všema opravama a novým backendem. Rozjed Camerito s novým backendem.",
						"startDate": "2022-06-22T11:31:35.477Z",
						"endDate": "2022-07-19T13:24:00.000Z",
						"completeDate": "2022-07-27T09:54:55.364Z"
					},
					{
						"id": 122,
						"name": "Sprint Rákosníček (Jindra)",
						"state": "closed",
						"boardId": 1,
						"goal": "Low light mode & Základní verze Camerito",
						"startDate": "2022-08-01T13:02:50.729Z",
						"endDate": "2022-09-05T12:32:00.000Z",
						"completeDate": "2022-10-20T11:32:45.838Z"
					},
					{
						"id": 123,
						"name": "Sprint Slimák (Lumáš)",
						"state": "closed",
						"boardId": 1,
						"goal": "Dohnat vývoj na Androidu",
						"startDate": "2022-10-23T07:00:48.895Z",
						"endDate": "2022-11-17T08:00:00.000Z",
						"completeDate": "2022-11-28T09:14:40.582Z"
					},
					{
						"id": 124,
						"name": "Sprint Tučňák (Jindra)",
						"state": "active",
						"boardId": 1,
						"goal": "Dodělat základní Android verzi Camerita (ať synchronizujeme vývoj)",
						"startDate": "2022-11-30T11:43:11.974Z",
						"endDate": "2022-12-19T13:38:00.000Z"
					}
				],
				"customfield_10512": null,
				"customfield_10116": "0|i00x4c:",
				"customfield_10117": 0.5,
				"environment": null,
				"customfield_10513": null,
				"duedate": null,
				"closedSprints": [
					{
						"id": 120,
						"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/sprint/120",
						"state": "closed",
						"name": "Sprint Octomilka (Tomáš)",
						"startDate": "2022-05-19T14:41:23.702Z",
						"endDate": "2022-06-06T13:36:00.000Z",
						"completeDate": "2022-06-21T08:09:43.026Z",
						"originBoardId": 1,
						"goal": "Základní verze Watchita a webová verze Barkio/Bibino"
					},
					{
						"id": 121,
						"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/sprint/121",
						"state": "closed",
						"name": "Sprint Prase (Honza)",
						"startDate": "2022-06-22T11:31:35.477Z",
						"endDate": "2022-07-19T13:24:00.000Z",
						"completeDate": "2022-07-27T09:54:55.364Z",
						"originBoardId": 1,
						"goal": "Udělat release Android verze se všema opravama a novým backendem. Rozjed Camerito s novým backendem."
					},
					{
						"id": 122,
						"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/sprint/122",
						"state": "closed",
						"name": "Sprint Rákosníček (Jindra)",
						"startDate": "2022-08-01T13:02:50.729Z",
						"endDate": "2022-09-05T12:32:00.000Z",
						"completeDate": "2022-10-20T11:32:45.838Z",
						"originBoardId": 1,
						"goal": "Low light mode & Základní verze Camerito"
					},
					{
						"id": 123,
						"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/sprint/123",
						"state": "closed",
						"name": "Sprint Slimák (Lumáš)",
						"startDate": "2022-10-23T07:00:48.895Z",
						"endDate": "2022-11-17T08:00:00.000Z",
						"completeDate": "2022-11-28T09:14:40.582Z",
						"originBoardId": 1,
						"goal": "Dohnat vývoj na Androidu"
					}
				],
				"progress": {
					"progress": 0,
					"total": 0
				},
				"comment": {
					"comments": [],
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/18315/comment",
					"maxResults": 0,
					"total": 0,
					"startAt": 0
				},
				"votes": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/TM-3466/votes",
					"votes": 0,
					"hasVoted": false
				},
				"worklog": {
					"startAt": 0,
					"maxResults": 20,
					"total": 0,
					"worklogs": []
				}
			}
		},
		{
			"expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
			"id": "18374",
			"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/issue/18374",
			"key": "TM-3525",
			"fields": {
				"statuscategorychangedate": "2022-11-28T10:12:38.775+0100",
				"issuetype": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issuetype/10102",
					"id": "10102",
					"description": "A small piece of work that's part of a larger task.",
					"iconUrl": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10316?size=medium",
					"name": "Sub-task",
					"subtask": true,
					"avatarId": 10316,
					"hierarchyLevel": -1
				},
				"parent": {
					"id": "18315",
					"key": "TM-3466",
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/18315",
					"fields": {
						"summary": "Camerito - přehled staniček (Android)",
						"status": {
							"self": "https://tappytaps2.atlassian.net/rest/api/2/status/10000",
							"description": "",
							"iconUrl": "https://tappytaps2.atlassian.net/",
							"name": "To Do",
							"id": "10000",
							"statusCategory": {
								"self": "https://tappytaps2.atlassian.net/rest/api/2/statuscategory/2",
								"id": 2,
								"key": "new",
								"colorName": "blue-gray",
								"name": "To Do"
							}
						},
						"priority": {
							"self": "https://tappytaps2.atlassian.net/rest/api/2/priority/3",
							"iconUrl": "https://tappytaps2.atlassian.net/images/icons/priorities/medium.svg",
							"name": "Medium",
							"id": "3"
						},
						"issuetype": {
							"self": "https://tappytaps2.atlassian.net/rest/api/2/issuetype/10100",
							"id": "10100",
							"description": "Functionality or a feature expressed as a user goal.",
							"iconUrl": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10315?size=medium",
							"name": "Story",
							"subtask": false,
							"avatarId": 10315,
							"hierarchyLevel": 0
						}
					}
				},
				"timespent": null,
				"sprint": {
					"id": 124,
					"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/sprint/124",
					"state": "active",
					"name": "Sprint Tučňák (Jindra)",
					"startDate": "2022-11-30T11:43:11.974Z",
					"endDate": "2022-12-19T13:38:00.000Z",
					"originBoardId": 1,
					"goal": "Dodělat základní Android verzi Camerita (ať synchronizujeme vývoj)"
				},
				"project": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/project/10000",
					"id": "10000",
					"key": "TM",
					"name": "TappyTaps development",
					"projectTypeKey": "software",
					"simplified": false,
					"avatarUrls": {
						"48x48": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324",
						"24x24": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=small",
						"16x16": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=xsmall",
						"32x32": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=medium"
					}
				},
				"fixVersions": [],
				"aggregatetimespent": null,
				"resolution": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/resolution/10000",
					"id": "10000",
					"description": "Work has been completed on this issue.",
					"name": "Done"
				},
				"customfield_10113": {
					"hasEpicLinkFieldDependency": false,
					"showField": false,
					"nonEditableReason": {
						"reason": "PLUGIN_LICENSE_ERROR",
						"message": "The Parent Link is only available to Jira Premium users."
					}
				},
				"customfield_10114": null,
				"customfield_10510": null,
				"customfield_10500": null,
				"customfield_10501": null,
				"customfield_10502": [],
				"customfield_10503": null,
				"customfield_10504": null,
				"customfield_10505": null,
				"resolutiondate": "2022-11-28T10:12:38.769+0100",
				"customfield_10506": null,
				"customfield_10507": null,
				"customfield_10508": null,
				"workratio": -1,
				"customfield_10509": null,
				"issuerestriction": {
					"issuerestrictions": {},
					"shouldDisplay": false
				},
				"watches": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/TM-3525/watchers",
					"watchCount": 1,
					"isWatching": false
				},
				"lastViewed": null,
				"created": "2022-06-21T09:53:59.650+0200",
				"epic": null,
				"priority": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/priority/3",
					"iconUrl": "https://tappytaps2.atlassian.net/images/icons/priorities/medium.svg",
					"name": "Medium",
					"id": "3"
				},
				"customfield_10100": null,
				"customfield_10101": "10000_*:*_1_*:*_6054340779_*|*_10002_*:*_1_*:*_7774378373_*|*_10001_*:*_1_*:*_0",
				"customfield_10300": null,
				"customfield_10102": null,
				"labels": [],
				"aggregatetimeoriginalestimate": null,
				"timeestimate": null,
				"versions": [],
				"issuelinks": [],
				"assignee": null,
				"updated": "2022-11-28T10:12:38.774+0100",
				"status": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/status/10001",
					"description": "",
					"iconUrl": "https://tappytaps2.atlassian.net/",
					"name": "Done",
					"id": "10001",
					"statusCategory": {
						"self": "https://tappytaps2.atlassian.net/rest/api/2/statuscategory/3",
						"id": 3,
						"key": "done",
						"colorName": "green",
						"name": "Done"
					}
				},
				"components": [],
				"timeoriginalestimate": null,
				"description": null,
				"timetracking": {},
				"customfield_10005": null,
				"security": null,
				"aggregatetimeestimate": null,
				"attachment": [],
				"flagged": false,
				"summary": "Backend",
				"creator": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/user?accountId=557058%3A4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"accountId": "557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"avatarUrls": {
						"48x48": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/48",
						"24x24": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/24",
						"16x16": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/16",
						"32x32": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/32"
					},
					"displayName": "Jan Sarson",
					"active": true,
					"timeZone": "Europe/Prague",
					"accountType": "atlassian"
				},
				"subtasks": [],
				"reporter": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/user?accountId=557058%3A4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"accountId": "557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"avatarUrls": {
						"48x48": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/48",
						"24x24": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/24",
						"16x16": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/16",
						"32x32": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/32"
					},
					"displayName": "Jan Sarson",
					"active": true,
					"timeZone": "Europe/Prague",
					"accountType": "atlassian"
				},
				"aggregateprogress": {
					"progress": 0,
					"total": 0
				},
				"customfield_10001": null,
				"customfield_10200": null,
				"customfield_10201": null,
				"customfield_10400": null,
				"customfield_10115": [
					{
						"id": 120,
						"name": "Sprint Octomilka (Tomáš)",
						"state": "closed",
						"boardId": 1,
						"goal": "Základní verze Watchita a webová verze Barkio/Bibino",
						"startDate": "2022-05-19T14:41:23.702Z",
						"endDate": "2022-06-06T13:36:00.000Z",
						"completeDate": "2022-06-21T08:09:43.026Z"
					},
					{
						"id": 121,
						"name": "Sprint Prase (Honza)",
						"state": "closed",
						"boardId": 1,
						"goal": "Udělat release Android verze se všema opravama a novým backendem. Rozjed Camerito s novým backendem.",
						"startDate": "2022-06-22T11:31:35.477Z",
						"endDate": "2022-07-19T13:24:00.000Z",
						"completeDate": "2022-07-27T09:54:55.364Z"
					},
					{
						"id": 122,
						"name": "Sprint Rákosníček (Jindra)",
						"state": "closed",
						"boardId": 1,
						"goal": "Low light mode & Základní verze Camerito",
						"startDate": "2022-08-01T13:02:50.729Z",
						"endDate": "2022-09-05T12:32:00.000Z",
						"completeDate": "2022-10-20T11:32:45.838Z"
					},
					{
						"id": 123,
						"name": "Sprint Slimák (Lumáš)",
						"state": "closed",
						"boardId": 1,
						"goal": "Dohnat vývoj na Androidu",
						"startDate": "2022-10-23T07:00:48.895Z",
						"endDate": "2022-11-17T08:00:00.000Z",
						"completeDate": "2022-11-28T09:14:40.582Z"
					},
					{
						"id": 124,
						"name": "Sprint Tučňák (Jindra)",
						"state": "active",
						"boardId": 1,
						"goal": "Dodělat základní Android verzi Camerita (ať synchronizujeme vývoj)",
						"startDate": "2022-11-30T11:43:11.974Z",
						"endDate": "2022-12-19T13:38:00.000Z"
					}
				],
				"customfield_10511": null,
				"customfield_10116": "0|i00x6l:",
				"customfield_10512": null,
				"customfield_10513": null,
				"environment": null,
				"duedate": null,
				"closedSprints": [
					{
						"id": 120,
						"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/sprint/120",
						"state": "closed",
						"name": "Sprint Octomilka (Tomáš)",
						"startDate": "2022-05-19T14:41:23.702Z",
						"endDate": "2022-06-06T13:36:00.000Z",
						"completeDate": "2022-06-21T08:09:43.026Z",
						"originBoardId": 1,
						"goal": "Základní verze Watchita a webová verze Barkio/Bibino"
					},
					{
						"id": 121,
						"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/sprint/121",
						"state": "closed",
						"name": "Sprint Prase (Honza)",
						"startDate": "2022-06-22T11:31:35.477Z",
						"endDate": "2022-07-19T13:24:00.000Z",
						"completeDate": "2022-07-27T09:54:55.364Z",
						"originBoardId": 1,
						"goal": "Udělat release Android verze se všema opravama a novým backendem. Rozjed Camerito s novým backendem."
					},
					{
						"id": 122,
						"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/sprint/122",
						"state": "closed",
						"name": "Sprint Rákosníček (Jindra)",
						"startDate": "2022-08-01T13:02:50.729Z",
						"endDate": "2022-09-05T12:32:00.000Z",
						"completeDate": "2022-10-20T11:32:45.838Z",
						"originBoardId": 1,
						"goal": "Low light mode & Základní verze Camerito"
					},
					{
						"id": 123,
						"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/sprint/123",
						"state": "closed",
						"name": "Sprint Slimák (Lumáš)",
						"startDate": "2022-10-23T07:00:48.895Z",
						"endDate": "2022-11-17T08:00:00.000Z",
						"completeDate": "2022-11-28T09:14:40.582Z",
						"originBoardId": 1,
						"goal": "Dohnat vývoj na Androidu"
					}
				],
				"progress": {
					"progress": 0,
					"total": 0
				},
				"votes": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/TM-3525/votes",
					"votes": 0,
					"hasVoted": false
				},
				"comment": {
					"comments": [],
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/18374/comment",
					"maxResults": 0,
					"total": 0,
					"startAt": 0
				},
				"worklog": {
					"startAt": 0,
					"maxResults": 20,
					"total": 0,
					"worklogs": []
				}
			}
		},
		{
			"expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
			"id": "18375",
			"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/issue/18375",
			"key": "TM-3526",
			"fields": {
				"statuscategorychangedate": "2022-11-28T09:55:32.858+0100",
				"issuetype": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issuetype/10102",
					"id": "10102",
					"description": "A small piece of work that's part of a larger task.",
					"iconUrl": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10316?size=medium",
					"name": "Sub-task",
					"subtask": true,
					"avatarId": 10316,
					"hierarchyLevel": -1
				},
				"parent": {
					"id": "18315",
					"key": "TM-3466",
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/18315",
					"fields": {
						"summary": "Camerito - přehled staniček (Android)",
						"status": {
							"self": "https://tappytaps2.atlassian.net/rest/api/2/status/10000",
							"description": "",
							"iconUrl": "https://tappytaps2.atlassian.net/",
							"name": "To Do",
							"id": "10000",
							"statusCategory": {
								"self": "https://tappytaps2.atlassian.net/rest/api/2/statuscategory/2",
								"id": 2,
								"key": "new",
								"colorName": "blue-gray",
								"name": "To Do"
							}
						},
						"priority": {
							"self": "https://tappytaps2.atlassian.net/rest/api/2/priority/3",
							"iconUrl": "https://tappytaps2.atlassian.net/images/icons/priorities/medium.svg",
							"name": "Medium",
							"id": "3"
						},
						"issuetype": {
							"self": "https://tappytaps2.atlassian.net/rest/api/2/issuetype/10100",
							"id": "10100",
							"description": "Functionality or a feature expressed as a user goal.",
							"iconUrl": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10315?size=medium",
							"name": "Story",
							"subtask": false,
							"avatarId": 10315,
							"hierarchyLevel": 0
						}
					}
				},
				"timespent": null,
				"sprint": {
					"id": 124,
					"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/sprint/124",
					"state": "active",
					"name": "Sprint Tučňák (Jindra)",
					"startDate": "2022-11-30T11:43:11.974Z",
					"endDate": "2022-12-19T13:38:00.000Z",
					"originBoardId": 1,
					"goal": "Dodělat základní Android verzi Camerita (ať synchronizujeme vývoj)"
				},
				"project": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/project/10000",
					"id": "10000",
					"key": "TM",
					"name": "TappyTaps development",
					"projectTypeKey": "software",
					"simplified": false,
					"avatarUrls": {
						"48x48": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324",
						"24x24": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=small",
						"16x16": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=xsmall",
						"32x32": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=medium"
					}
				},
				"fixVersions": [],
				"aggregatetimespent": null,
				"resolution": null,
				"customfield_10113": {
					"hasEpicLinkFieldDependency": false,
					"showField": false,
					"nonEditableReason": {
						"reason": "PLUGIN_LICENSE_ERROR",
						"message": "The Parent Link is only available to Jira Premium users."
					}
				},
				"customfield_10510": null,
				"customfield_10114": null,
				"customfield_10500": null,
				"customfield_10501": null,
				"customfield_10502": [],
				"customfield_10503": null,
				"customfield_10504": null,
				"customfield_10505": null,
				"resolutiondate": null,
				"customfield_10506": null,
				"customfield_10507": null,
				"customfield_10508": null,
				"workratio": -1,
				"customfield_10509": null,
				"lastViewed": null,
				"issuerestriction": {
					"issuerestrictions": {},
					"shouldDisplay": false
				},
				"watches": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/TM-3526/watchers",
					"watchCount": 1,
					"isWatching": false
				},
				"created": "2022-06-21T09:54:01.333+0200",
				"epic": null,
				"customfield_10100": null,
				"priority": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/priority/3",
					"iconUrl": "https://tappytaps2.atlassian.net/images/icons/priorities/medium.svg",
					"name": "Medium",
					"id": "3"
				},
				"customfield_10101": null,
				"customfield_10102": null,
				"customfield_10300": null,
				"labels": [],
				"timeestimate": null,
				"aggregatetimeoriginalestimate": null,
				"versions": [],
				"issuelinks": [],
				"assignee": null,
				"updated": "2023-01-05T16:00:57.506+0100",
				"status": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/status/10002",
					"description": "",
					"iconUrl": "https://tappytaps2.atlassian.net/images/icons/statuses/generic.png",
					"name": "Testing",
					"id": "10002",
					"statusCategory": {
						"self": "https://tappytaps2.atlassian.net/rest/api/2/statuscategory/4",
						"id": 4,
						"key": "indeterminate",
						"colorName": "yellow",
						"name": "In Progress"
					}
				},
				"components": [],
				"timeoriginalestimate": null,
				"description": null,
				"timetracking": {},
				"customfield_10005": null,
				"security": null,
				"aggregatetimeestimate": null,
				"attachment": [],
				"flagged": false,
				"summary": "Android",
				"creator": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/user?accountId=557058%3A4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"accountId": "557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"avatarUrls": {
						"48x48": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/48",
						"24x24": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/24",
						"16x16": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/16",
						"32x32": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/32"
					},
					"displayName": "Jan Sarson",
					"active": true,
					"timeZone": "Europe/Prague",
					"accountType": "atlassian"
				},
				"subtasks": [],
				"reporter": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/user?accountId=557058%3A4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"accountId": "557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"avatarUrls": {
						"48x48": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/48",
						"24x24": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/24",
						"16x16": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/16",
						"32x32": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/32"
					},
					"displayName": "Jan Sarson",
					"active": true,
					"timeZone": "Europe/Prague",
					"accountType": "atlassian"
				},
				"aggregateprogress": {
					"progress": 0,
					"total": 0
				},
				"customfield_10001": null,
				"customfield_10200": null,
				"customfield_10201": null,
				"customfield_10400": null,
				"customfield_10511": null,
				"customfield_10115": [
					{
						"id": 120,
						"name": "Sprint Octomilka (Tomáš)",
						"state": "closed",
						"boardId": 1,
						"goal": "Základní verze Watchita a webová verze Barkio/Bibino",
						"startDate": "2022-05-19T14:41:23.702Z",
						"endDate": "2022-06-06T13:36:00.000Z",
						"completeDate": "2022-06-21T08:09:43.026Z"
					},
					{
						"id": 121,
						"name": "Sprint Prase (Honza)",
						"state": "closed",
						"boardId": 1,
						"goal": "Udělat release Android verze se všema opravama a novým backendem. Rozjed Camerito s novým backendem.",
						"startDate": "2022-06-22T11:31:35.477Z",
						"endDate": "2022-07-19T13:24:00.000Z",
						"completeDate": "2022-07-27T09:54:55.364Z"
					},
					{
						"id": 122,
						"name": "Sprint Rákosníček (Jindra)",
						"state": "closed",
						"boardId": 1,
						"goal": "Low light mode & Základní verze Camerito",
						"startDate": "2022-08-01T13:02:50.729Z",
						"endDate": "2022-09-05T12:32:00.000Z",
						"completeDate": "2022-10-20T11:32:45.838Z"
					},
					{
						"id": 123,
						"name": "Sprint Slimák (Lumáš)",
						"state": "closed",
						"boardId": 1,
						"goal": "Dohnat vývoj na Androidu",
						"startDate": "2022-10-23T07:00:48.895Z",
						"endDate": "2022-11-17T08:00:00.000Z",
						"completeDate": "2022-11-28T09:14:40.582Z"
					},
					{
						"id": 124,
						"name": "Sprint Tučňák (Jindra)",
						"state": "active",
						"boardId": 1,
						"goal": "Dodělat základní Android verzi Camerita (ať synchronizujeme vývoj)",
						"startDate": "2022-11-30T11:43:11.974Z",
						"endDate": "2022-12-19T13:38:00.000Z"
					}
				],
				"customfield_10116": "0|i00x6t:",
				"customfield_10512": null,
				"customfield_10513": null,
				"environment": null,
				"duedate": null,
				"closedSprints": [
					{
						"id": 120,
						"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/sprint/120",
						"state": "closed",
						"name": "Sprint Octomilka (Tomáš)",
						"startDate": "2022-05-19T14:41:23.702Z",
						"endDate": "2022-06-06T13:36:00.000Z",
						"completeDate": "2022-06-21T08:09:43.026Z",
						"originBoardId": 1,
						"goal": "Základní verze Watchita a webová verze Barkio/Bibino"
					},
					{
						"id": 121,
						"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/sprint/121",
						"state": "closed",
						"name": "Sprint Prase (Honza)",
						"startDate": "2022-06-22T11:31:35.477Z",
						"endDate": "2022-07-19T13:24:00.000Z",
						"completeDate": "2022-07-27T09:54:55.364Z",
						"originBoardId": 1,
						"goal": "Udělat release Android verze se všema opravama a novým backendem. Rozjed Camerito s novým backendem."
					},
					{
						"id": 122,
						"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/sprint/122",
						"state": "closed",
						"name": "Sprint Rákosníček (Jindra)",
						"startDate": "2022-08-01T13:02:50.729Z",
						"endDate": "2022-09-05T12:32:00.000Z",
						"completeDate": "2022-10-20T11:32:45.838Z",
						"originBoardId": 1,
						"goal": "Low light mode & Základní verze Camerito"
					},
					{
						"id": 123,
						"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/sprint/123",
						"state": "closed",
						"name": "Sprint Slimák (Lumáš)",
						"startDate": "2022-10-23T07:00:48.895Z",
						"endDate": "2022-11-17T08:00:00.000Z",
						"completeDate": "2022-11-28T09:14:40.582Z",
						"originBoardId": 1,
						"goal": "Dohnat vývoj na Androidu"
					}
				],
				"progress": {
					"progress": 0,
					"total": 0
				},
				"comment": {
					"comments": [],
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/18375/comment",
					"maxResults": 0,
					"total": 0,
					"startAt": 0
				},
				"votes": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/TM-3526/votes",
					"votes": 0,
					"hasVoted": false
				},
				"worklog": {
					"startAt": 0,
					"maxResults": 20,
					"total": 0,
					"worklogs": []
				}
			}
		},
		{
			"expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
			"id": "18376",
			"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/issue/18376",
			"key": "TM-3527",
			"fields": {
				"statuscategorychangedate": "2022-11-28T10:12:40.263+0100",
				"issuetype": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issuetype/10102",
					"id": "10102",
					"description": "A small piece of work that's part of a larger task.",
					"iconUrl": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10316?size=medium",
					"name": "Sub-task",
					"subtask": true,
					"avatarId": 10316,
					"hierarchyLevel": -1
				},
				"parent": {
					"id": "18315",
					"key": "TM-3466",
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/18315",
					"fields": {
						"summary": "Camerito - přehled staniček (Android)",
						"status": {
							"self": "https://tappytaps2.atlassian.net/rest/api/2/status/10000",
							"description": "",
							"iconUrl": "https://tappytaps2.atlassian.net/",
							"name": "To Do",
							"id": "10000",
							"statusCategory": {
								"self": "https://tappytaps2.atlassian.net/rest/api/2/statuscategory/2",
								"id": 2,
								"key": "new",
								"colorName": "blue-gray",
								"name": "To Do"
							}
						},
						"priority": {
							"self": "https://tappytaps2.atlassian.net/rest/api/2/priority/3",
							"iconUrl": "https://tappytaps2.atlassian.net/images/icons/priorities/medium.svg",
							"name": "Medium",
							"id": "3"
						},
						"issuetype": {
							"self": "https://tappytaps2.atlassian.net/rest/api/2/issuetype/10100",
							"id": "10100",
							"description": "Functionality or a feature expressed as a user goal.",
							"iconUrl": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10315?size=medium",
							"name": "Story",
							"subtask": false,
							"avatarId": 10315,
							"hierarchyLevel": 0
						}
					}
				},
				"timespent": null,
				"sprint": {
					"id": 124,
					"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/sprint/124",
					"state": "active",
					"name": "Sprint Tučňák (Jindra)",
					"startDate": "2022-11-30T11:43:11.974Z",
					"endDate": "2022-12-19T13:38:00.000Z",
					"originBoardId": 1,
					"goal": "Dodělat základní Android verzi Camerita (ať synchronizujeme vývoj)"
				},
				"project": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/project/10000",
					"id": "10000",
					"key": "TM",
					"name": "TappyTaps development",
					"projectTypeKey": "software",
					"simplified": false,
					"avatarUrls": {
						"48x48": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324",
						"24x24": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=small",
						"16x16": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=xsmall",
						"32x32": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=medium"
					}
				},
				"fixVersions": [],
				"aggregatetimespent": null,
				"resolution": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/resolution/10000",
					"id": "10000",
					"description": "Work has been completed on this issue.",
					"name": "Done"
				},
				"customfield_10113": {
					"hasEpicLinkFieldDependency": false,
					"showField": false,
					"nonEditableReason": {
						"reason": "PLUGIN_LICENSE_ERROR",
						"message": "The Parent Link is only available to Jira Premium users."
					}
				},
				"customfield_10510": null,
				"customfield_10114": null,
				"customfield_10500": null,
				"customfield_10501": null,
				"customfield_10502": [],
				"customfield_10503": null,
				"customfield_10504": null,
				"customfield_10505": null,
				"resolutiondate": "2022-11-28T10:12:40.259+0100",
				"customfield_10506": null,
				"customfield_10507": null,
				"customfield_10508": null,
				"customfield_10509": null,
				"workratio": -1,
				"lastViewed": null,
				"issuerestriction": {
					"issuerestrictions": {},
					"shouldDisplay": false
				},
				"watches": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/TM-3527/watchers",
					"watchCount": 1,
					"isWatching": false
				},
				"created": "2022-06-21T09:54:02.463+0200",
				"epic": null,
				"customfield_10100": null,
				"priority": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/priority/3",
					"iconUrl": "https://tappytaps2.atlassian.net/images/icons/priorities/medium.svg",
					"name": "Medium",
					"id": "3"
				},
				"customfield_10101": "10000_*:*_1_*:*_6054341033_*|*_10002_*:*_2_*:*_7774376784_*|*_10001_*:*_1_*:*_0",
				"customfield_10300": null,
				"customfield_10102": null,
				"labels": [],
				"aggregatetimeoriginalestimate": null,
				"timeestimate": null,
				"versions": [],
				"issuelinks": [],
				"assignee": null,
				"updated": "2022-11-28T10:12:40.262+0100",
				"status": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/status/10001",
					"description": "",
					"iconUrl": "https://tappytaps2.atlassian.net/",
					"name": "Done",
					"id": "10001",
					"statusCategory": {
						"self": "https://tappytaps2.atlassian.net/rest/api/2/statuscategory/3",
						"id": 3,
						"key": "done",
						"colorName": "green",
						"name": "Done"
					}
				},
				"components": [],
				"timeoriginalestimate": null,
				"description": null,
				"timetracking": {},
				"customfield_10005": null,
				"security": null,
				"attachment": [],
				"aggregatetimeestimate": null,
				"flagged": false,
				"summary": "iOS",
				"creator": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/user?accountId=557058%3A4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"accountId": "557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"avatarUrls": {
						"48x48": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/48",
						"24x24": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/24",
						"16x16": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/16",
						"32x32": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/32"
					},
					"displayName": "Jan Sarson",
					"active": true,
					"timeZone": "Europe/Prague",
					"accountType": "atlassian"
				},
				"subtasks": [],
				"reporter": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/user?accountId=557058%3A4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"accountId": "557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"avatarUrls": {
						"48x48": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/48",
						"24x24": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/24",
						"16x16": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/16",
						"32x32": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/32"
					},
					"displayName": "Jan Sarson",
					"active": true,
					"timeZone": "Europe/Prague",
					"accountType": "atlassian"
				},
				"aggregateprogress": {
					"progress": 0,
					"total": 0
				},
				"customfield_10001": null,
				"customfield_10200": null,
				"customfield_10201": null,
				"customfield_10400": null,
				"customfield_10115": [
					{
						"id": 120,
						"name": "Sprint Octomilka (Tomáš)",
						"state": "closed",
						"boardId": 1,
						"goal": "Základní verze Watchita a webová verze Barkio/Bibino",
						"startDate": "2022-05-19T14:41:23.702Z",
						"endDate": "2022-06-06T13:36:00.000Z",
						"completeDate": "2022-06-21T08:09:43.026Z"
					},
					{
						"id": 121,
						"name": "Sprint Prase (Honza)",
						"state": "closed",
						"boardId": 1,
						"goal": "Udělat release Android verze se všema opravama a novým backendem. Rozjed Camerito s novým backendem.",
						"startDate": "2022-06-22T11:31:35.477Z",
						"endDate": "2022-07-19T13:24:00.000Z",
						"completeDate": "2022-07-27T09:54:55.364Z"
					},
					{
						"id": 122,
						"name": "Sprint Rákosníček (Jindra)",
						"state": "closed",
						"boardId": 1,
						"goal": "Low light mode & Základní verze Camerito",
						"startDate": "2022-08-01T13:02:50.729Z",
						"endDate": "2022-09-05T12:32:00.000Z",
						"completeDate": "2022-10-20T11:32:45.838Z"
					},
					{
						"id": 123,
						"name": "Sprint Slimák (Lumáš)",
						"state": "closed",
						"boardId": 1,
						"goal": "Dohnat vývoj na Androidu",
						"startDate": "2022-10-23T07:00:48.895Z",
						"endDate": "2022-11-17T08:00:00.000Z",
						"completeDate": "2022-11-28T09:14:40.582Z"
					},
					{
						"id": 124,
						"name": "Sprint Tučňák (Jindra)",
						"state": "active",
						"boardId": 1,
						"goal": "Dodělat základní Android verzi Camerita (ať synchronizujeme vývoj)",
						"startDate": "2022-11-30T11:43:11.974Z",
						"endDate": "2022-12-19T13:38:00.000Z"
					}
				],
				"customfield_10511": null,
				"customfield_10512": null,
				"customfield_10116": "0|i00x71:",
				"customfield_10513": null,
				"environment": null,
				"duedate": null,
				"closedSprints": [
					{
						"id": 120,
						"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/sprint/120",
						"state": "closed",
						"name": "Sprint Octomilka (Tomáš)",
						"startDate": "2022-05-19T14:41:23.702Z",
						"endDate": "2022-06-06T13:36:00.000Z",
						"completeDate": "2022-06-21T08:09:43.026Z",
						"originBoardId": 1,
						"goal": "Základní verze Watchita a webová verze Barkio/Bibino"
					},
					{
						"id": 121,
						"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/sprint/121",
						"state": "closed",
						"name": "Sprint Prase (Honza)",
						"startDate": "2022-06-22T11:31:35.477Z",
						"endDate": "2022-07-19T13:24:00.000Z",
						"completeDate": "2022-07-27T09:54:55.364Z",
						"originBoardId": 1,
						"goal": "Udělat release Android verze se všema opravama a novým backendem. Rozjed Camerito s novým backendem."
					},
					{
						"id": 122,
						"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/sprint/122",
						"state": "closed",
						"name": "Sprint Rákosníček (Jindra)",
						"startDate": "2022-08-01T13:02:50.729Z",
						"endDate": "2022-09-05T12:32:00.000Z",
						"completeDate": "2022-10-20T11:32:45.838Z",
						"originBoardId": 1,
						"goal": "Low light mode & Základní verze Camerito"
					},
					{
						"id": 123,
						"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/sprint/123",
						"state": "closed",
						"name": "Sprint Slimák (Lumáš)",
						"startDate": "2022-10-23T07:00:48.895Z",
						"endDate": "2022-11-17T08:00:00.000Z",
						"completeDate": "2022-11-28T09:14:40.582Z",
						"originBoardId": 1,
						"goal": "Dohnat vývoj na Androidu"
					}
				],
				"progress": {
					"progress": 0,
					"total": 0
				},
				"votes": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/TM-3527/votes",
					"votes": 0,
					"hasVoted": false
				},
				"comment": {
					"comments": [],
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/18376/comment",
					"maxResults": 0,
					"total": 0,
					"startAt": 0
				},
				"worklog": {
					"startAt": 0,
					"maxResults": 20,
					"total": 0,
					"worklogs": []
				}
			}
		},
		{
			"expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
			"id": "18259",
			"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/issue/18259",
			"key": "TM-3410",
			"fields": {
				"statuscategorychangedate": "2022-04-19T11:06:38.535+0200",
				"issuetype": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issuetype/10100",
					"id": "10100",
					"description": "Functionality or a feature expressed as a user goal.",
					"iconUrl": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10315?size=medium",
					"name": "Story",
					"subtask": false,
					"avatarId": 10315,
					"hierarchyLevel": 0
				},
				"timespent": null,
				"sprint": {
					"id": 124,
					"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/sprint/124",
					"state": "active",
					"name": "Sprint Tučňák (Jindra)",
					"startDate": "2022-11-30T11:43:11.974Z",
					"endDate": "2022-12-19T13:38:00.000Z",
					"originBoardId": 1,
					"goal": "Dodělat základní Android verzi Camerita (ať synchronizujeme vývoj)"
				},
				"project": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/project/10000",
					"id": "10000",
					"key": "TM",
					"name": "TappyTaps development",
					"projectTypeKey": "software",
					"simplified": false,
					"avatarUrls": {
						"48x48": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324",
						"24x24": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=small",
						"16x16": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=xsmall",
						"32x32": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=medium"
					}
				},
				"fixVersions": [],
				"aggregatetimespent": null,
				"resolution": null,
				"customfield_10113": {
					"hasEpicLinkFieldDependency": false,
					"showField": false,
					"nonEditableReason": {
						"reason": "PLUGIN_LICENSE_ERROR",
						"message": "The Parent Link is only available to Jira Premium users."
					}
				},
				"customfield_10114": null,
				"customfield_10510": null,
				"customfield_10500": null,
				"customfield_10501": null,
				"customfield_10502": [],
				"customfield_10503": null,
				"customfield_10504": null,
				"customfield_10505": null,
				"resolutiondate": null,
				"customfield_10506": null,
				"customfield_10507": null,
				"customfield_10508": null,
				"customfield_10509": null,
				"workratio": -1,
				"lastViewed": null,
				"watches": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/TM-3410/watchers",
					"watchCount": 1,
					"isWatching": false
				},
				"issuerestriction": {
					"issuerestrictions": {},
					"shouldDisplay": false
				},
				"created": "2022-04-19T11:06:38.152+0200",
				"epic": null,
				"priority": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/priority/3",
					"iconUrl": "https://tappytaps2.atlassian.net/images/icons/priorities/medium.svg",
					"name": "Medium",
					"id": "3"
				},
				"customfield_10100": null,
				"customfield_10101": null,
				"customfield_10102": null,
				"customfield_10300": null,
				"labels": [],
				"aggregatetimeoriginalestimate": null,
				"timeestimate": null,
				"versions": [],
				"issuelinks": [
					{
						"id": "16434",
						"self": "https://tappytaps2.atlassian.net/rest/api/2/issueLink/16434",
						"type": {
							"id": "10001",
							"name": "Cloners",
							"inward": "is cloned by",
							"outward": "clones",
							"self": "https://tappytaps2.atlassian.net/rest/api/2/issueLinkType/10001"
						},
						"inwardIssue": {
							"id": "18342",
							"key": "TM-3493",
							"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/18342",
							"fields": {
								"summary": "Camerito - Server backend ukládání preview",
								"status": {
									"self": "https://tappytaps2.atlassian.net/rest/api/2/status/10001",
									"description": "",
									"iconUrl": "https://tappytaps2.atlassian.net/",
									"name": "Done",
									"id": "10001",
									"statusCategory": {
										"self": "https://tappytaps2.atlassian.net/rest/api/2/statuscategory/3",
										"id": 3,
										"key": "done",
										"colorName": "green",
										"name": "Done"
									}
								},
								"priority": {
									"self": "https://tappytaps2.atlassian.net/rest/api/2/priority/3",
									"iconUrl": "https://tappytaps2.atlassian.net/images/icons/priorities/medium.svg",
									"name": "Medium",
									"id": "3"
								},
								"issuetype": {
									"self": "https://tappytaps2.atlassian.net/rest/api/2/issuetype/10100",
									"id": "10100",
									"description": "Functionality or a feature expressed as a user goal.",
									"iconUrl": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10315?size=medium",
									"name": "Story",
									"subtask": false,
									"avatarId": 10315,
									"hierarchyLevel": 0
								}
							}
						}
					}
				],
				"assignee": null,
				"updated": "2022-11-28T13:14:18.617+0100",
				"status": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/status/10000",
					"description": "",
					"iconUrl": "https://tappytaps2.atlassian.net/",
					"name": "To Do",
					"id": "10000",
					"statusCategory": {
						"self": "https://tappytaps2.atlassian.net/rest/api/2/statuscategory/2",
						"id": 2,
						"key": "new",
						"colorName": "blue-gray",
						"name": "To Do"
					}
				},
				"components": [],
				"timeoriginalestimate": null,
				"description": "*Camera station*\n\n* vytvořit GUI\n** preview kamerky\n** plovoucí menu\n** permission, základní info, …\n** indikátory motion a hluku (animované)\n** implementace otočení kamerky - jen přední, zadní\n* mobilní backend\n\n*Grafika*\n\nFigma iOS\n\n[https://www.figma.com/file/BXeLBJfTR71e9iaW7jw6XW/Camerito-appdesign-iOS?node-id=2108%3A32874|https://www.figma.com/file/BXeLBJfTR71e9iaW7jw6XW/Camerito-appdesign-iOS?node-id=2108%3A32874|smart-link] ",
				"timetracking": {},
				"customfield_10005": null,
				"security": null,
				"aggregatetimeestimate": null,
				"attachment": [],
				"flagged": false,
				"summary": "Camerito - základní camera station (Android)",
				"creator": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/user?accountId=557058%3A4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"accountId": "557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"avatarUrls": {
						"48x48": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/48",
						"24x24": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/24",
						"16x16": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/16",
						"32x32": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/32"
					},
					"displayName": "Jan Sarson",
					"active": true,
					"timeZone": "Europe/Prague",
					"accountType": "atlassian"
				},
				"subtasks": [
					{
						"id": "18343",
						"key": "TM-3494",
						"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/18343",
						"fields": {
							"summary": "iOS",
							"status": {
								"self": "https://tappytaps2.atlassian.net/rest/api/2/status/3",
								"description": "This issue is being actively worked on at the moment by the assignee.",
								"iconUrl": "https://tappytaps2.atlassian.net/images/icons/statuses/inprogress.png",
								"name": "In Progress",
								"id": "3",
								"statusCategory": {
									"self": "https://tappytaps2.atlassian.net/rest/api/2/statuscategory/4",
									"id": 4,
									"key": "indeterminate",
									"colorName": "yellow",
									"name": "In Progress"
								}
							},
							"priority": {
								"self": "https://tappytaps2.atlassian.net/rest/api/2/priority/3",
								"iconUrl": "https://tappytaps2.atlassian.net/images/icons/priorities/medium.svg",
								"name": "Medium",
								"id": "3"
							},
							"issuetype": {
								"self": "https://tappytaps2.atlassian.net/rest/api/2/issuetype/10102",
								"id": "10102",
								"description": "A small piece of work that's part of a larger task.",
								"iconUrl": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10316?size=medium",
								"name": "Sub-task",
								"subtask": true,
								"avatarId": 10316,
								"hierarchyLevel": -1
							}
						}
					},
					{
						"id": "18344",
						"key": "TM-3495",
						"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/18344",
						"fields": {
							"summary": "Android",
							"status": {
								"self": "https://tappytaps2.atlassian.net/rest/api/2/status/10002",
								"description": "",
								"iconUrl": "https://tappytaps2.atlassian.net/images/icons/statuses/generic.png",
								"name": "Testing",
								"id": "10002",
								"statusCategory": {
									"self": "https://tappytaps2.atlassian.net/rest/api/2/statuscategory/4",
									"id": 4,
									"key": "indeterminate",
									"colorName": "yellow",
									"name": "In Progress"
								}
							},
							"priority": {
								"self": "https://tappytaps2.atlassian.net/rest/api/2/priority/3",
								"iconUrl": "https://tappytaps2.atlassian.net/images/icons/priorities/medium.svg",
								"name": "Medium",
								"id": "3"
							},
							"issuetype": {
								"self": "https://tappytaps2.atlassian.net/rest/api/2/issuetype/10102",
								"id": "10102",
								"description": "A small piece of work that's part of a larger task.",
								"iconUrl": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10316?size=medium",
								"name": "Sub-task",
								"subtask": true,
								"avatarId": 10316,
								"hierarchyLevel": -1
							}
						}
					},
					{
						"id": "18345",
						"key": "TM-3496",
						"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/18345",
						"fields": {
							"summary": "Mobilní backend",
							"status": {
								"self": "https://tappytaps2.atlassian.net/rest/api/2/status/3",
								"description": "This issue is being actively worked on at the moment by the assignee.",
								"iconUrl": "https://tappytaps2.atlassian.net/images/icons/statuses/inprogress.png",
								"name": "In Progress",
								"id": "3",
								"statusCategory": {
									"self": "https://tappytaps2.atlassian.net/rest/api/2/statuscategory/4",
									"id": 4,
									"key": "indeterminate",
									"colorName": "yellow",
									"name": "In Progress"
								}
							},
							"priority": {
								"self": "https://tappytaps2.atlassian.net/rest/api/2/priority/3",
								"iconUrl": "https://tappytaps2.atlassian.net/images/icons/priorities/medium.svg",
								"name": "Medium",
								"id": "3"
							},
							"issuetype": {
								"self": "https://tappytaps2.atlassian.net/rest/api/2/issuetype/10102",
								"id": "10102",
								"description": "A small piece of work that's part of a larger task.",
								"iconUrl": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10316?size=medium",
								"name": "Sub-task",
								"subtask": true,
								"avatarId": 10316,
								"hierarchyLevel": -1
							}
						}
					}
				],
				"reporter": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/user?accountId=557058%3A4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"accountId": "557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"avatarUrls": {
						"48x48": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/48",
						"24x24": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/24",
						"16x16": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/16",
						"32x32": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/32"
					},
					"displayName": "Jan Sarson",
					"active": true,
					"timeZone": "Europe/Prague",
					"accountType": "atlassian"
				},
				"aggregateprogress": {
					"progress": 0,
					"total": 0
				},
				"customfield_10001": null,
				"customfield_10200": null,
				"customfield_10201": null,
				"customfield_10400": null,
				"customfield_10115": [
					{
						"id": 120,
						"name": "Sprint Octomilka (Tomáš)",
						"state": "closed",
						"boardId": 1,
						"goal": "Základní verze Watchita a webová verze Barkio/Bibino",
						"startDate": "2022-05-19T14:41:23.702Z",
						"endDate": "2022-06-06T13:36:00.000Z",
						"completeDate": "2022-06-21T08:09:43.026Z"
					},
					{
						"id": 121,
						"name": "Sprint Prase (Honza)",
						"state": "closed",
						"boardId": 1,
						"goal": "Udělat release Android verze se všema opravama a novým backendem. Rozjed Camerito s novým backendem.",
						"startDate": "2022-06-22T11:31:35.477Z",
						"endDate": "2022-07-19T13:24:00.000Z",
						"completeDate": "2022-07-27T09:54:55.364Z"
					},
					{
						"id": 122,
						"name": "Sprint Rákosníček (Jindra)",
						"state": "closed",
						"boardId": 1,
						"goal": "Low light mode & Základní verze Camerito",
						"startDate": "2022-08-01T13:02:50.729Z",
						"endDate": "2022-09-05T12:32:00.000Z",
						"completeDate": "2022-10-20T11:32:45.838Z"
					},
					{
						"id": 123,
						"name": "Sprint Slimák (Lumáš)",
						"state": "closed",
						"boardId": 1,
						"goal": "Dohnat vývoj na Androidu",
						"startDate": "2022-10-23T07:00:48.895Z",
						"endDate": "2022-11-17T08:00:00.000Z",
						"completeDate": "2022-11-28T09:14:40.582Z"
					},
					{
						"id": 124,
						"name": "Sprint Tučňák (Jindra)",
						"state": "active",
						"boardId": 1,
						"goal": "Dodělat základní Android verzi Camerita (ať synchronizujeme vývoj)",
						"startDate": "2022-11-30T11:43:11.974Z",
						"endDate": "2022-12-19T13:38:00.000Z"
					}
				],
				"customfield_10511": null,
				"customfield_10116": "0|i00x4x:",
				"customfield_10512": null,
				"customfield_10117": 5.0,
				"customfield_10513": null,
				"environment": null,
				"duedate": null,
				"closedSprints": [
					{
						"id": 120,
						"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/sprint/120",
						"state": "closed",
						"name": "Sprint Octomilka (Tomáš)",
						"startDate": "2022-05-19T14:41:23.702Z",
						"endDate": "2022-06-06T13:36:00.000Z",
						"completeDate": "2022-06-21T08:09:43.026Z",
						"originBoardId": 1,
						"goal": "Základní verze Watchita a webová verze Barkio/Bibino"
					},
					{
						"id": 121,
						"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/sprint/121",
						"state": "closed",
						"name": "Sprint Prase (Honza)",
						"startDate": "2022-06-22T11:31:35.477Z",
						"endDate": "2022-07-19T13:24:00.000Z",
						"completeDate": "2022-07-27T09:54:55.364Z",
						"originBoardId": 1,
						"goal": "Udělat release Android verze se všema opravama a novým backendem. Rozjed Camerito s novým backendem."
					},
					{
						"id": 122,
						"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/sprint/122",
						"state": "closed",
						"name": "Sprint Rákosníček (Jindra)",
						"startDate": "2022-08-01T13:02:50.729Z",
						"endDate": "2022-09-05T12:32:00.000Z",
						"completeDate": "2022-10-20T11:32:45.838Z",
						"originBoardId": 1,
						"goal": "Low light mode & Základní verze Camerito"
					},
					{
						"id": 123,
						"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/sprint/123",
						"state": "closed",
						"name": "Sprint Slimák (Lumáš)",
						"startDate": "2022-10-23T07:00:48.895Z",
						"endDate": "2022-11-17T08:00:00.000Z",
						"completeDate": "2022-11-28T09:14:40.582Z",
						"originBoardId": 1,
						"goal": "Dohnat vývoj na Androidu"
					}
				],
				"progress": {
					"progress": 0,
					"total": 0
				},
				"votes": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/TM-3410/votes",
					"votes": 0,
					"hasVoted": false
				},
				"comment": {
					"comments": [],
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/18259/comment",
					"maxResults": 0,
					"total": 0,
					"startAt": 0
				},
				"worklog": {
					"startAt": 0,
					"maxResults": 20,
					"total": 0,
					"worklogs": []
				}
			}
		},
		{
			"expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
			"id": "18343",
			"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/issue/18343",
			"key": "TM-3494",
			"fields": {
				"statuscategorychangedate": "2022-08-30T11:40:48.002+0200",
				"issuetype": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issuetype/10102",
					"id": "10102",
					"description": "A small piece of work that's part of a larger task.",
					"iconUrl": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10316?size=medium",
					"name": "Sub-task",
					"subtask": true,
					"avatarId": 10316,
					"hierarchyLevel": -1
				},
				"parent": {
					"id": "18259",
					"key": "TM-3410",
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/18259",
					"fields": {
						"summary": "Camerito - základní camera station (Android)",
						"status": {
							"self": "https://tappytaps2.atlassian.net/rest/api/2/status/10000",
							"description": "",
							"iconUrl": "https://tappytaps2.atlassian.net/",
							"name": "To Do",
							"id": "10000",
							"statusCategory": {
								"self": "https://tappytaps2.atlassian.net/rest/api/2/statuscategory/2",
								"id": 2,
								"key": "new",
								"colorName": "blue-gray",
								"name": "To Do"
							}
						},
						"priority": {
							"self": "https://tappytaps2.atlassian.net/rest/api/2/priority/3",
							"iconUrl": "https://tappytaps2.atlassian.net/images/icons/priorities/medium.svg",
							"name": "Medium",
							"id": "3"
						},
						"issuetype": {
							"self": "https://tappytaps2.atlassian.net/rest/api/2/issuetype/10100",
							"id": "10100",
							"description": "Functionality or a feature expressed as a user goal.",
							"iconUrl": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10315?size=medium",
							"name": "Story",
							"subtask": false,
							"avatarId": 10315,
							"hierarchyLevel": 0
						}
					}
				},
				"timespent": null,
				"sprint": {
					"id": 124,
					"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/sprint/124",
					"state": "active",
					"name": "Sprint Tučňák (Jindra)",
					"startDate": "2022-11-30T11:43:11.974Z",
					"endDate": "2022-12-19T13:38:00.000Z",
					"originBoardId": 1,
					"goal": "Dodělat základní Android verzi Camerita (ať synchronizujeme vývoj)"
				},
				"project": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/project/10000",
					"id": "10000",
					"key": "TM",
					"name": "TappyTaps development",
					"projectTypeKey": "software",
					"simplified": false,
					"avatarUrls": {
						"48x48": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324",
						"24x24": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=small",
						"16x16": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=xsmall",
						"32x32": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=medium"
					}
				},
				"fixVersions": [],
				"aggregatetimespent": null,
				"resolution": null,
				"customfield_10113": {
					"hasEpicLinkFieldDependency": false,
					"showField": false,
					"nonEditableReason": {
						"reason": "PLUGIN_LICENSE_ERROR",
						"message": "The Parent Link is only available to Jira Premium users."
					}
				},
				"customfield_10510": null,
				"customfield_10114": null,
				"customfield_10500": null,
				"customfield_10501": null,
				"customfield_10502": [],
				"customfield_10503": null,
				"customfield_10504": null,
				"customfield_10505": null,
				"customfield_10506": null,
				"resolutiondate": null,
				"customfield_10507": null,
				"customfield_10508": null,
				"workratio": -1,
				"customfield_10509": null,
				"issuerestriction": {
					"issuerestrictions": {},
					"shouldDisplay": false
				},
				"watches": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/TM-3494/watchers",
					"watchCount": 1,
					"isWatching": false
				},
				"lastViewed": null,
				"created": "2022-05-18T15:14:00.400+0200",
				"epic": null,
				"customfield_10100": null,
				"priority": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/priority/3",
					"iconUrl": "https://tappytaps2.atlassian.net/images/icons/priorities/medium.svg",
					"name": "Medium",
					"id": "3"
				},
				"customfield_10101": null,
				"customfield_10102": null,
				"customfield_10300": null,
				"labels": [],
				"timeestimate": null,
				"aggregatetimeoriginalestimate": null,
				"versions": [],
				"issuelinks": [],
				"assignee": null,
				"updated": "2022-08-30T11:40:48.002+0200",
				"status": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/status/3",
					"description": "This issue is being actively worked on at the moment by the assignee.",
					"iconUrl": "https://tappytaps2.atlassian.net/images/icons/statuses/inprogress.png",
					"name": "In Progress",
					"id": "3",
					"statusCategory": {
						"self": "https://tappytaps2.atlassian.net/rest/api/2/statuscategory/4",
						"id": 4,
						"key": "indeterminate",
						"colorName": "yellow",
						"name": "In Progress"
					}
				},
				"components": [],
				"timeoriginalestimate": null,
				"description": null,
				"timetracking": {},
				"customfield_10005": null,
				"security": null,
				"aggregatetimeestimate": null,
				"attachment": [],
				"flagged": false,
				"summary": "iOS",
				"creator": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/user?accountId=557058%3A4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"accountId": "557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"avatarUrls": {
						"48x48": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/48",
						"24x24": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/24",
						"16x16": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/16",
						"32x32": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/32"
					},
					"displayName": "Jan Sarson",
					"active": true,
					"timeZone": "Europe/Prague",
					"accountType": "atlassian"
				},
				"subtasks": [],
				"reporter": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/user?accountId=557058%3A4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"accountId": "557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"avatarUrls": {
						"48x48": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/48",
						"24x24": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/24",
						"16x16": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/16",
						"32x32": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/32"
					},
					"displayName": "Jan Sarson",
					"active": true,
					"timeZone": "Europe/Prague",
					"accountType": "atlassian"
				},
				"aggregateprogress": {
					"progress": 0,
					"total": 0
				},
				"customfield_10001": null,
				"customfield_10200": null,
				"customfield_10201": null,
				"customfield_10400": null,
				"customfield_10511": null,
				"customfield_10115": [
					{
						"id": 120,
						"name": "Sprint Octomilka (Tomáš)",
						"state": "closed",
						"boardId": 1,
						"goal": "Základní verze Watchita a webová verze Barkio/Bibino",
						"startDate": "2022-05-19T14:41:23.702Z",
						"endDate": "2022-06-06T13:36:00.000Z",
						"completeDate": "2022-06-21T08:09:43.026Z"
					},
					{
						"id": 121,
						"name": "Sprint Prase (Honza)",
						"state": "closed",
						"boardId": 1,
						"goal": "Udělat release Android verze se všema opravama a novým backendem. Rozjed Camerito s novým backendem.",
						"startDate": "2022-06-22T11:31:35.477Z",
						"endDate": "2022-07-19T13:24:00.000Z",
						"completeDate": "2022-07-27T09:54:55.364Z"
					},
					{
						"id": 122,
						"name": "Sprint Rákosníček (Jindra)",
						"state": "closed",
						"boardId": 1,
						"goal": "Low light mode & Základní verze Camerito",
						"startDate": "2022-08-01T13:02:50.729Z",
						"endDate": "2022-09-05T12:32:00.000Z",
						"completeDate": "2022-10-20T11:32:45.838Z"
					},
					{
						"id": 123,
						"name": "Sprint Slimák (Lumáš)",
						"state": "closed",
						"boardId": 1,
						"goal": "Dohnat vývoj na Androidu",
						"startDate": "2022-10-23T07:00:48.895Z",
						"endDate": "2022-11-17T08:00:00.000Z",
						"completeDate": "2022-11-28T09:14:40.582Z"
					},
					{
						"id": 124,
						"name": "Sprint Tučňák (Jindra)",
						"state": "active",
						"boardId": 1,
						"goal": "Dodělat základní Android verzi Camerita (ať synchronizujeme vývoj)",
						"startDate": "2022-11-30T11:43:11.974Z",
						"endDate": "2022-12-19T13:38:00.000Z"
					}
				],
				"customfield_10116": "0|i00wyt:",
				"customfield_10512": null,
				"environment": null,
				"customfield_10513": null,
				"duedate": null,
				"closedSprints": [
					{
						"id": 120,
						"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/sprint/120",
						"state": "closed",
						"name": "Sprint Octomilka (Tomáš)",
						"startDate": "2022-05-19T14:41:23.702Z",
						"endDate": "2022-06-06T13:36:00.000Z",
						"completeDate": "2022-06-21T08:09:43.026Z",
						"originBoardId": 1,
						"goal": "Základní verze Watchita a webová verze Barkio/Bibino"
					},
					{
						"id": 121,
						"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/sprint/121",
						"state": "closed",
						"name": "Sprint Prase (Honza)",
						"startDate": "2022-06-22T11:31:35.477Z",
						"endDate": "2022-07-19T13:24:00.000Z",
						"completeDate": "2022-07-27T09:54:55.364Z",
						"originBoardId": 1,
						"goal": "Udělat release Android verze se všema opravama a novým backendem. Rozjed Camerito s novým backendem."
					},
					{
						"id": 122,
						"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/sprint/122",
						"state": "closed",
						"name": "Sprint Rákosníček (Jindra)",
						"startDate": "2022-08-01T13:02:50.729Z",
						"endDate": "2022-09-05T12:32:00.000Z",
						"completeDate": "2022-10-20T11:32:45.838Z",
						"originBoardId": 1,
						"goal": "Low light mode & Základní verze Camerito"
					},
					{
						"id": 123,
						"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/sprint/123",
						"state": "closed",
						"name": "Sprint Slimák (Lumáš)",
						"startDate": "2022-10-23T07:00:48.895Z",
						"endDate": "2022-11-17T08:00:00.000Z",
						"completeDate": "2022-11-28T09:14:40.582Z",
						"originBoardId": 1,
						"goal": "Dohnat vývoj na Androidu"
					}
				],
				"progress": {
					"progress": 0,
					"total": 0
				},
				"comment": {
					"comments": [],
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/18343/comment",
					"maxResults": 0,
					"total": 0,
					"startAt": 0
				},
				"votes": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/TM-3494/votes",
					"votes": 0,
					"hasVoted": false
				},
				"worklog": {
					"startAt": 0,
					"maxResults": 20,
					"total": 0,
					"worklogs": []
				}
			}
		},
		{
			"expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
			"id": "18344",
			"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/issue/18344",
			"key": "TM-3495",
			"fields": {
				"statuscategorychangedate": "2022-11-15T14:57:44.691+0100",
				"issuetype": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issuetype/10102",
					"id": "10102",
					"description": "A small piece of work that's part of a larger task.",
					"iconUrl": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10316?size=medium",
					"name": "Sub-task",
					"subtask": true,
					"avatarId": 10316,
					"hierarchyLevel": -1
				},
				"parent": {
					"id": "18259",
					"key": "TM-3410",
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/18259",
					"fields": {
						"summary": "Camerito - základní camera station (Android)",
						"status": {
							"self": "https://tappytaps2.atlassian.net/rest/api/2/status/10000",
							"description": "",
							"iconUrl": "https://tappytaps2.atlassian.net/",
							"name": "To Do",
							"id": "10000",
							"statusCategory": {
								"self": "https://tappytaps2.atlassian.net/rest/api/2/statuscategory/2",
								"id": 2,
								"key": "new",
								"colorName": "blue-gray",
								"name": "To Do"
							}
						},
						"priority": {
							"self": "https://tappytaps2.atlassian.net/rest/api/2/priority/3",
							"iconUrl": "https://tappytaps2.atlassian.net/images/icons/priorities/medium.svg",
							"name": "Medium",
							"id": "3"
						},
						"issuetype": {
							"self": "https://tappytaps2.atlassian.net/rest/api/2/issuetype/10100",
							"id": "10100",
							"description": "Functionality or a feature expressed as a user goal.",
							"iconUrl": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10315?size=medium",
							"name": "Story",
							"subtask": false,
							"avatarId": 10315,
							"hierarchyLevel": 0
						}
					}
				},
				"timespent": null,
				"sprint": {
					"id": 124,
					"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/sprint/124",
					"state": "active",
					"name": "Sprint Tučňák (Jindra)",
					"startDate": "2022-11-30T11:43:11.974Z",
					"endDate": "2022-12-19T13:38:00.000Z",
					"originBoardId": 1,
					"goal": "Dodělat základní Android verzi Camerita (ať synchronizujeme vývoj)"
				},
				"project": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/project/10000",
					"id": "10000",
					"key": "TM",
					"name": "TappyTaps development",
					"projectTypeKey": "software",
					"simplified": false,
					"avatarUrls": {
						"48x48": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324",
						"24x24": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=small",
						"16x16": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=xsmall",
						"32x32": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=medium"
					}
				},
				"fixVersions": [],
				"aggregatetimespent": null,
				"resolution": null,
				"customfield_10113": {
					"hasEpicLinkFieldDependency": false,
					"showField": false,
					"nonEditableReason": {
						"reason": "PLUGIN_LICENSE_ERROR",
						"message": "The Parent Link is only available to Jira Premium users."
					}
				},
				"customfield_10114": null,
				"customfield_10510": null,
				"customfield_10500": null,
				"customfield_10501": null,
				"customfield_10502": [],
				"customfield_10503": null,
				"customfield_10504": null,
				"customfield_10505": null,
				"resolutiondate": null,
				"customfield_10506": null,
				"customfield_10507": null,
				"customfield_10508": null,
				"customfield_10509": null,
				"workratio": -1,
				"issuerestriction": {
					"issuerestrictions": {},
					"shouldDisplay": false
				},
				"lastViewed": null,
				"watches": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/TM-3495/watchers",
					"watchCount": 1,
					"isWatching": false
				},
				"created": "2022-05-18T15:14:02.192+0200",
				"epic": null,
				"customfield_10100": null,
				"priority": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/priority/3",
					"iconUrl": "https://tappytaps2.atlassian.net/images/icons/priorities/medium.svg",
					"name": "Medium",
					"id": "3"
				},
				"customfield_10101": null,
				"customfield_10300": null,
				"customfield_10102": null,
				"labels": [],
				"timeestimate": null,
				"aggregatetimeoriginalestimate": null,
				"versions": [],
				"issuelinks": [],
				"assignee": null,
				"updated": "2023-01-05T16:05:46.476+0100",
				"status": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/status/10002",
					"description": "",
					"iconUrl": "https://tappytaps2.atlassian.net/images/icons/statuses/generic.png",
					"name": "Testing",
					"id": "10002",
					"statusCategory": {
						"self": "https://tappytaps2.atlassian.net/rest/api/2/statuscategory/4",
						"id": 4,
						"key": "indeterminate",
						"colorName": "yellow",
						"name": "In Progress"
					}
				},
				"components": [],
				"timeoriginalestimate": null,
				"description": null,
				"timetracking": {},
				"customfield_10005": null,
				"security": null,
				"attachment": [],
				"aggregatetimeestimate": null,
				"flagged": false,
				"summary": "Android",
				"creator": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/user?accountId=557058%3A4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"accountId": "557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"avatarUrls": {
						"48x48": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/48",
						"24x24": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/24",
						"16x16": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/16",
						"32x32": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/32"
					},
					"displayName": "Jan Sarson",
					"active": true,
					"timeZone": "Europe/Prague",
					"accountType": "atlassian"
				},
				"subtasks": [],
				"reporter": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/user?accountId=557058%3A4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"accountId": "557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"avatarUrls": {
						"48x48": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/48",
						"24x24": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/24",
						"16x16": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/16",
						"32x32": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/32"
					},
					"displayName": "Jan Sarson",
					"active": true,
					"timeZone": "Europe/Prague",
					"accountType": "atlassian"
				},
				"aggregateprogress": {
					"progress": 0,
					"total": 0
				},
				"customfield_10001": null,
				"customfield_10200": null,
				"customfield_10201": null,
				"customfield_10400": null,
				"customfield_10511": null,
				"customfield_10115": [
					{
						"id": 120,
						"name": "Sprint Octomilka (Tomáš)",
						"state": "closed",
						"boardId": 1,
						"goal": "Základní verze Watchita a webová verze Barkio/Bibino",
						"startDate": "2022-05-19T14:41:23.702Z",
						"endDate": "2022-06-06T13:36:00.000Z",
						"completeDate": "2022-06-21T08:09:43.026Z"
					},
					{
						"id": 121,
						"name": "Sprint Prase (Honza)",
						"state": "closed",
						"boardId": 1,
						"goal": "Udělat release Android verze se všema opravama a novým backendem. Rozjed Camerito s novým backendem.",
						"startDate": "2022-06-22T11:31:35.477Z",
						"endDate": "2022-07-19T13:24:00.000Z",
						"completeDate": "2022-07-27T09:54:55.364Z"
					},
					{
						"id": 122,
						"name": "Sprint Rákosníček (Jindra)",
						"state": "closed",
						"boardId": 1,
						"goal": "Low light mode & Základní verze Camerito",
						"startDate": "2022-08-01T13:02:50.729Z",
						"endDate": "2022-09-05T12:32:00.000Z",
						"completeDate": "2022-10-20T11:32:45.838Z"
					},
					{
						"id": 123,
						"name": "Sprint Slimák (Lumáš)",
						"state": "closed",
						"boardId": 1,
						"goal": "Dohnat vývoj na Androidu",
						"startDate": "2022-10-23T07:00:48.895Z",
						"endDate": "2022-11-17T08:00:00.000Z",
						"completeDate": "2022-11-28T09:14:40.582Z"
					},
					{
						"id": 124,
						"name": "Sprint Tučňák (Jindra)",
						"state": "active",
						"boardId": 1,
						"goal": "Dodělat základní Android verzi Camerita (ať synchronizujeme vývoj)",
						"startDate": "2022-11-30T11:43:11.974Z",
						"endDate": "2022-12-19T13:38:00.000Z"
					}
				],
				"customfield_10512": null,
				"customfield_10116": "0|i00wz1:",
				"environment": null,
				"customfield_10513": null,
				"duedate": null,
				"closedSprints": [
					{
						"id": 120,
						"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/sprint/120",
						"state": "closed",
						"name": "Sprint Octomilka (Tomáš)",
						"startDate": "2022-05-19T14:41:23.702Z",
						"endDate": "2022-06-06T13:36:00.000Z",
						"completeDate": "2022-06-21T08:09:43.026Z",
						"originBoardId": 1,
						"goal": "Základní verze Watchita a webová verze Barkio/Bibino"
					},
					{
						"id": 121,
						"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/sprint/121",
						"state": "closed",
						"name": "Sprint Prase (Honza)",
						"startDate": "2022-06-22T11:31:35.477Z",
						"endDate": "2022-07-19T13:24:00.000Z",
						"completeDate": "2022-07-27T09:54:55.364Z",
						"originBoardId": 1,
						"goal": "Udělat release Android verze se všema opravama a novým backendem. Rozjed Camerito s novým backendem."
					},
					{
						"id": 122,
						"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/sprint/122",
						"state": "closed",
						"name": "Sprint Rákosníček (Jindra)",
						"startDate": "2022-08-01T13:02:50.729Z",
						"endDate": "2022-09-05T12:32:00.000Z",
						"completeDate": "2022-10-20T11:32:45.838Z",
						"originBoardId": 1,
						"goal": "Low light mode & Základní verze Camerito"
					},
					{
						"id": 123,
						"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/sprint/123",
						"state": "closed",
						"name": "Sprint Slimák (Lumáš)",
						"startDate": "2022-10-23T07:00:48.895Z",
						"endDate": "2022-11-17T08:00:00.000Z",
						"completeDate": "2022-11-28T09:14:40.582Z",
						"originBoardId": 1,
						"goal": "Dohnat vývoj na Androidu"
					}
				],
				"progress": {
					"progress": 0,
					"total": 0
				},
				"votes": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/TM-3495/votes",
					"votes": 0,
					"hasVoted": false
				},
				"comment": {
					"comments": [],
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/18344/comment",
					"maxResults": 0,
					"total": 0,
					"startAt": 0
				},
				"worklog": {
					"startAt": 0,
					"maxResults": 20,
					"total": 0,
					"worklogs": []
				}
			}
		},
		{
			"expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
			"id": "18345",
			"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/issue/18345",
			"key": "TM-3496",
			"fields": {
				"statuscategorychangedate": "2022-08-30T11:40:46.188+0200",
				"issuetype": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issuetype/10102",
					"id": "10102",
					"description": "A small piece of work that's part of a larger task.",
					"iconUrl": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10316?size=medium",
					"name": "Sub-task",
					"subtask": true,
					"avatarId": 10316,
					"hierarchyLevel": -1
				},
				"parent": {
					"id": "18259",
					"key": "TM-3410",
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/18259",
					"fields": {
						"summary": "Camerito - základní camera station (Android)",
						"status": {
							"self": "https://tappytaps2.atlassian.net/rest/api/2/status/10000",
							"description": "",
							"iconUrl": "https://tappytaps2.atlassian.net/",
							"name": "To Do",
							"id": "10000",
							"statusCategory": {
								"self": "https://tappytaps2.atlassian.net/rest/api/2/statuscategory/2",
								"id": 2,
								"key": "new",
								"colorName": "blue-gray",
								"name": "To Do"
							}
						},
						"priority": {
							"self": "https://tappytaps2.atlassian.net/rest/api/2/priority/3",
							"iconUrl": "https://tappytaps2.atlassian.net/images/icons/priorities/medium.svg",
							"name": "Medium",
							"id": "3"
						},
						"issuetype": {
							"self": "https://tappytaps2.atlassian.net/rest/api/2/issuetype/10100",
							"id": "10100",
							"description": "Functionality or a feature expressed as a user goal.",
							"iconUrl": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10315?size=medium",
							"name": "Story",
							"subtask": false,
							"avatarId": 10315,
							"hierarchyLevel": 0
						}
					}
				},
				"timespent": null,
				"sprint": {
					"id": 124,
					"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/sprint/124",
					"state": "active",
					"name": "Sprint Tučňák (Jindra)",
					"startDate": "2022-11-30T11:43:11.974Z",
					"endDate": "2022-12-19T13:38:00.000Z",
					"originBoardId": 1,
					"goal": "Dodělat základní Android verzi Camerita (ať synchronizujeme vývoj)"
				},
				"project": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/project/10000",
					"id": "10000",
					"key": "TM",
					"name": "TappyTaps development",
					"projectTypeKey": "software",
					"simplified": false,
					"avatarUrls": {
						"48x48": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324",
						"24x24": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=small",
						"16x16": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=xsmall",
						"32x32": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=medium"
					}
				},
				"fixVersions": [],
				"aggregatetimespent": null,
				"resolution": null,
				"customfield_10113": {
					"hasEpicLinkFieldDependency": false,
					"showField": false,
					"nonEditableReason": {
						"reason": "PLUGIN_LICENSE_ERROR",
						"message": "The Parent Link is only available to Jira Premium users."
					}
				},
				"customfield_10510": null,
				"customfield_10114": null,
				"customfield_10500": null,
				"customfield_10501": null,
				"customfield_10502": [],
				"customfield_10503": null,
				"customfield_10504": null,
				"customfield_10505": null,
				"resolutiondate": null,
				"customfield_10506": null,
				"customfield_10507": null,
				"customfield_10508": null,
				"customfield_10509": null,
				"workratio": -1,
				"watches": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/TM-3496/watchers",
					"watchCount": 1,
					"isWatching": false
				},
				"issuerestriction": {
					"issuerestrictions": {},
					"shouldDisplay": false
				},
				"lastViewed": null,
				"created": "2022-05-18T15:14:05.443+0200",
				"epic": null,
				"priority": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/priority/3",
					"iconUrl": "https://tappytaps2.atlassian.net/images/icons/priorities/medium.svg",
					"name": "Medium",
					"id": "3"
				},
				"customfield_10100": null,
				"customfield_10101": null,
				"customfield_10102": null,
				"customfield_10300": null,
				"labels": [],
				"aggregatetimeoriginalestimate": null,
				"timeestimate": null,
				"versions": [],
				"issuelinks": [],
				"assignee": null,
				"updated": "2022-08-30T11:40:46.187+0200",
				"status": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/status/3",
					"description": "This issue is being actively worked on at the moment by the assignee.",
					"iconUrl": "https://tappytaps2.atlassian.net/images/icons/statuses/inprogress.png",
					"name": "In Progress",
					"id": "3",
					"statusCategory": {
						"self": "https://tappytaps2.atlassian.net/rest/api/2/statuscategory/4",
						"id": 4,
						"key": "indeterminate",
						"colorName": "yellow",
						"name": "In Progress"
					}
				},
				"components": [],
				"timeoriginalestimate": null,
				"description": null,
				"timetracking": {},
				"customfield_10005": null,
				"security": null,
				"attachment": [],
				"aggregatetimeestimate": null,
				"flagged": false,
				"summary": "Mobilní backend",
				"creator": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/user?accountId=557058%3A4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"accountId": "557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"avatarUrls": {
						"48x48": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/48",
						"24x24": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/24",
						"16x16": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/16",
						"32x32": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/32"
					},
					"displayName": "Jan Sarson",
					"active": true,
					"timeZone": "Europe/Prague",
					"accountType": "atlassian"
				},
				"subtasks": [],
				"reporter": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/user?accountId=557058%3A4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"accountId": "557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"avatarUrls": {
						"48x48": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/48",
						"24x24": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/24",
						"16x16": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/16",
						"32x32": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/32"
					},
					"displayName": "Jan Sarson",
					"active": true,
					"timeZone": "Europe/Prague",
					"accountType": "atlassian"
				},
				"aggregateprogress": {
					"progress": 0,
					"total": 0
				},
				"customfield_10001": null,
				"customfield_10200": null,
				"customfield_10201": null,
				"customfield_10400": null,
				"customfield_10115": [
					{
						"id": 120,
						"name": "Sprint Octomilka (Tomáš)",
						"state": "closed",
						"boardId": 1,
						"goal": "Základní verze Watchita a webová verze Barkio/Bibino",
						"startDate": "2022-05-19T14:41:23.702Z",
						"endDate": "2022-06-06T13:36:00.000Z",
						"completeDate": "2022-06-21T08:09:43.026Z"
					},
					{
						"id": 121,
						"name": "Sprint Prase (Honza)",
						"state": "closed",
						"boardId": 1,
						"goal": "Udělat release Android verze se všema opravama a novým backendem. Rozjed Camerito s novým backendem.",
						"startDate": "2022-06-22T11:31:35.477Z",
						"endDate": "2022-07-19T13:24:00.000Z",
						"completeDate": "2022-07-27T09:54:55.364Z"
					},
					{
						"id": 122,
						"name": "Sprint Rákosníček (Jindra)",
						"state": "closed",
						"boardId": 1,
						"goal": "Low light mode & Základní verze Camerito",
						"startDate": "2022-08-01T13:02:50.729Z",
						"endDate": "2022-09-05T12:32:00.000Z",
						"completeDate": "2022-10-20T11:32:45.838Z"
					},
					{
						"id": 123,
						"name": "Sprint Slimák (Lumáš)",
						"state": "closed",
						"boardId": 1,
						"goal": "Dohnat vývoj na Androidu",
						"startDate": "2022-10-23T07:00:48.895Z",
						"endDate": "2022-11-17T08:00:00.000Z",
						"completeDate": "2022-11-28T09:14:40.582Z"
					},
					{
						"id": 124,
						"name": "Sprint Tučňák (Jindra)",
						"state": "active",
						"boardId": 1,
						"goal": "Dodělat základní Android verzi Camerita (ať synchronizujeme vývoj)",
						"startDate": "2022-11-30T11:43:11.974Z",
						"endDate": "2022-12-19T13:38:00.000Z"
					}
				],
				"customfield_10511": null,
				"customfield_10116": "0|i00wz9:",
				"customfield_10512": null,
				"customfield_10513": null,
				"environment": null,
				"duedate": null,
				"closedSprints": [
					{
						"id": 120,
						"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/sprint/120",
						"state": "closed",
						"name": "Sprint Octomilka (Tomáš)",
						"startDate": "2022-05-19T14:41:23.702Z",
						"endDate": "2022-06-06T13:36:00.000Z",
						"completeDate": "2022-06-21T08:09:43.026Z",
						"originBoardId": 1,
						"goal": "Základní verze Watchita a webová verze Barkio/Bibino"
					},
					{
						"id": 121,
						"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/sprint/121",
						"state": "closed",
						"name": "Sprint Prase (Honza)",
						"startDate": "2022-06-22T11:31:35.477Z",
						"endDate": "2022-07-19T13:24:00.000Z",
						"completeDate": "2022-07-27T09:54:55.364Z",
						"originBoardId": 1,
						"goal": "Udělat release Android verze se všema opravama a novým backendem. Rozjed Camerito s novým backendem."
					},
					{
						"id": 122,
						"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/sprint/122",
						"state": "closed",
						"name": "Sprint Rákosníček (Jindra)",
						"startDate": "2022-08-01T13:02:50.729Z",
						"endDate": "2022-09-05T12:32:00.000Z",
						"completeDate": "2022-10-20T11:32:45.838Z",
						"originBoardId": 1,
						"goal": "Low light mode & Základní verze Camerito"
					},
					{
						"id": 123,
						"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/sprint/123",
						"state": "closed",
						"name": "Sprint Slimák (Lumáš)",
						"startDate": "2022-10-23T07:00:48.895Z",
						"endDate": "2022-11-17T08:00:00.000Z",
						"completeDate": "2022-11-28T09:14:40.582Z",
						"originBoardId": 1,
						"goal": "Dohnat vývoj na Androidu"
					}
				],
				"progress": {
					"progress": 0,
					"total": 0
				},
				"votes": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/TM-3496/votes",
					"votes": 0,
					"hasVoted": false
				},
				"comment": {
					"comments": [],
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/18345/comment",
					"maxResults": 0,
					"total": 0,
					"startAt": 0
				},
				"worklog": {
					"startAt": 0,
					"maxResults": 20,
					"total": 0,
					"worklogs": []
				}
			}
		},
		{
			"expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
			"id": "18411",
			"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/issue/18411",
			"key": "TM-3562",
			"fields": {
				"statuscategorychangedate": "2022-07-27T12:09:07.860+0200",
				"issuetype": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issuetype/10100",
					"id": "10100",
					"description": "Functionality or a feature expressed as a user goal.",
					"iconUrl": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10315?size=medium",
					"name": "Story",
					"subtask": false,
					"avatarId": 10315,
					"hierarchyLevel": 0
				},
				"timespent": null,
				"sprint": {
					"id": 124,
					"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/sprint/124",
					"state": "active",
					"name": "Sprint Tučňák (Jindra)",
					"startDate": "2022-11-30T11:43:11.974Z",
					"endDate": "2022-12-19T13:38:00.000Z",
					"originBoardId": 1,
					"goal": "Dodělat základní Android verzi Camerita (ať synchronizujeme vývoj)"
				},
				"project": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/project/10000",
					"id": "10000",
					"key": "TM",
					"name": "TappyTaps development",
					"projectTypeKey": "software",
					"simplified": false,
					"avatarUrls": {
						"48x48": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324",
						"24x24": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=small",
						"16x16": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=xsmall",
						"32x32": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=medium"
					}
				},
				"fixVersions": [],
				"aggregatetimespent": null,
				"resolution": null,
				"customfield_10113": {
					"hasEpicLinkFieldDependency": false,
					"showField": false,
					"nonEditableReason": {
						"reason": "PLUGIN_LICENSE_ERROR",
						"message": "The Parent Link is only available to Jira Premium users."
					}
				},
				"customfield_10114": null,
				"customfield_10510": null,
				"customfield_10500": null,
				"customfield_10501": null,
				"customfield_10502": [],
				"customfield_10503": null,
				"customfield_10504": null,
				"customfield_10505": null,
				"customfield_10506": null,
				"resolutiondate": null,
				"customfield_10507": null,
				"customfield_10508": null,
				"customfield_10509": null,
				"workratio": -1,
				"issuerestriction": {
					"issuerestrictions": {},
					"shouldDisplay": false
				},
				"lastViewed": null,
				"watches": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/TM-3562/watchers",
					"watchCount": 1,
					"isWatching": false
				},
				"created": "2022-07-27T12:09:07.393+0200",
				"epic": null,
				"customfield_10100": null,
				"priority": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/priority/3",
					"iconUrl": "https://tappytaps2.atlassian.net/images/icons/priorities/medium.svg",
					"name": "Medium",
					"id": "3"
				},
				"customfield_10101": null,
				"customfield_10102": null,
				"customfield_10300": null,
				"labels": [],
				"timeestimate": null,
				"aggregatetimeoriginalestimate": null,
				"versions": [],
				"issuelinks": [],
				"assignee": null,
				"updated": "2022-11-28T13:43:26.604+0100",
				"status": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/status/10000",
					"description": "",
					"iconUrl": "https://tappytaps2.atlassian.net/",
					"name": "To Do",
					"id": "10000",
					"statusCategory": {
						"self": "https://tappytaps2.atlassian.net/rest/api/2/statuscategory/2",
						"id": 2,
						"key": "new",
						"colorName": "blue-gray",
						"name": "To Do"
					}
				},
				"components": [],
				"timeoriginalestimate": null,
				"description": "* základní připojení\n* spuštění videa\n** audio i video poběží přes WebRtc\n** video bude podporovat zoom (znovpouziti z Barkia)\n* naše audio chceme dostat do WebRtc\n* přidat menu komponenut s dummy daty\n* *jen Android*\n\nBackend\n\n* základní funkcionalita\n* neřešíme když půjdeme na pozadí apod\n* stačí, aby se spustilo video\n* úprava webrtc, aby podporovalo audio společně s videem",
				"timetracking": {},
				"customfield_10005": null,
				"security": null,
				"aggregatetimeestimate": null,
				"attachment": [],
				"flagged": false,
				"summary": "Camerito - připojená viewer station (Android)",
				"creator": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/user?accountId=557058%3A4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"accountId": "557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"avatarUrls": {
						"48x48": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/48",
						"24x24": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/24",
						"16x16": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/16",
						"32x32": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/32"
					},
					"displayName": "Jan Sarson",
					"active": true,
					"timeZone": "Europe/Prague",
					"accountType": "atlassian"
				},
				"subtasks": [
					{
						"id": "18421",
						"key": "TM-3572",
						"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/18421",
						"fields": {
							"summary": "Backend",
							"status": {
								"self": "https://tappytaps2.atlassian.net/rest/api/2/status/10000",
								"description": "",
								"iconUrl": "https://tappytaps2.atlassian.net/",
								"name": "To Do",
								"id": "10000",
								"statusCategory": {
									"self": "https://tappytaps2.atlassian.net/rest/api/2/statuscategory/2",
									"id": 2,
									"key": "new",
									"colorName": "blue-gray",
									"name": "To Do"
								}
							},
							"priority": {
								"self": "https://tappytaps2.atlassian.net/rest/api/2/priority/3",
								"iconUrl": "https://tappytaps2.atlassian.net/images/icons/priorities/medium.svg",
								"name": "Medium",
								"id": "3"
							},
							"issuetype": {
								"self": "https://tappytaps2.atlassian.net/rest/api/2/issuetype/10102",
								"id": "10102",
								"description": "A small piece of work that's part of a larger task.",
								"iconUrl": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10316?size=medium",
								"name": "Sub-task",
								"subtask": true,
								"avatarId": 10316,
								"hierarchyLevel": -1
							}
						}
					},
					{
						"id": "18422",
						"key": "TM-3573",
						"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/18422",
						"fields": {
							"summary": "Android implementace",
							"status": {
								"self": "https://tappytaps2.atlassian.net/rest/api/2/status/10002",
								"description": "",
								"iconUrl": "https://tappytaps2.atlassian.net/images/icons/statuses/generic.png",
								"name": "Testing",
								"id": "10002",
								"statusCategory": {
									"self": "https://tappytaps2.atlassian.net/rest/api/2/statuscategory/4",
									"id": 4,
									"key": "indeterminate",
									"colorName": "yellow",
									"name": "In Progress"
								}
							},
							"priority": {
								"self": "https://tappytaps2.atlassian.net/rest/api/2/priority/3",
								"iconUrl": "https://tappytaps2.atlassian.net/images/icons/priorities/medium.svg",
								"name": "Medium",
								"id": "3"
							},
							"issuetype": {
								"self": "https://tappytaps2.atlassian.net/rest/api/2/issuetype/10102",
								"id": "10102",
								"description": "A small piece of work that's part of a larger task.",
								"iconUrl": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10316?size=medium",
								"name": "Sub-task",
								"subtask": true,
								"avatarId": 10316,
								"hierarchyLevel": -1
							}
						}
					}
				],
				"reporter": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/user?accountId=557058%3A4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"accountId": "557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"avatarUrls": {
						"48x48": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/48",
						"24x24": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/24",
						"16x16": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/16",
						"32x32": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/32"
					},
					"displayName": "Jan Sarson",
					"active": true,
					"timeZone": "Europe/Prague",
					"accountType": "atlassian"
				},
				"aggregateprogress": {
					"progress": 0,
					"total": 0
				},
				"customfield_10001": null,
				"customfield_10200": null,
				"customfield_10201": null,
				"customfield_10400": null,
				"customfield_10115": [
					{
						"id": 122,
						"name": "Sprint Rákosníček (Jindra)",
						"state": "closed",
						"boardId": 1,
						"goal": "Low light mode & Základní verze Camerito",
						"startDate": "2022-08-01T13:02:50.729Z",
						"endDate": "2022-09-05T12:32:00.000Z",
						"completeDate": "2022-10-20T11:32:45.838Z"
					},
					{
						"id": 123,
						"name": "Sprint Slimák (Lumáš)",
						"state": "closed",
						"boardId": 1,
						"goal": "Dohnat vývoj na Androidu",
						"startDate": "2022-10-23T07:00:48.895Z",
						"endDate": "2022-11-17T08:00:00.000Z",
						"completeDate": "2022-11-28T09:14:40.582Z"
					},
					{
						"id": 124,
						"name": "Sprint Tučňák (Jindra)",
						"state": "active",
						"boardId": 1,
						"goal": "Dodělat základní Android verzi Camerita (ať synchronizujeme vývoj)",
						"startDate": "2022-11-30T11:43:11.974Z",
						"endDate": "2022-12-19T13:38:00.000Z"
					}
				],
				"customfield_10511": null,
				"customfield_10116": "0|i00x50:",
				"customfield_10512": null,
				"environment": null,
				"customfield_10117": 2.0,
				"customfield_10513": null,
				"duedate": null,
				"closedSprints": [
					{
						"id": 122,
						"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/sprint/122",
						"state": "closed",
						"name": "Sprint Rákosníček (Jindra)",
						"startDate": "2022-08-01T13:02:50.729Z",
						"endDate": "2022-09-05T12:32:00.000Z",
						"completeDate": "2022-10-20T11:32:45.838Z",
						"originBoardId": 1,
						"goal": "Low light mode & Základní verze Camerito"
					},
					{
						"id": 123,
						"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/sprint/123",
						"state": "closed",
						"name": "Sprint Slimák (Lumáš)",
						"startDate": "2022-10-23T07:00:48.895Z",
						"endDate": "2022-11-17T08:00:00.000Z",
						"completeDate": "2022-11-28T09:14:40.582Z",
						"originBoardId": 1,
						"goal": "Dohnat vývoj na Androidu"
					}
				],
				"progress": {
					"progress": 0,
					"total": 0
				},
				"comment": {
					"comments": [],
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/18411/comment",
					"maxResults": 0,
					"total": 0,
					"startAt": 0
				},
				"votes": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/TM-3562/votes",
					"votes": 0,
					"hasVoted": false
				},
				"worklog": {
					"startAt": 0,
					"maxResults": 20,
					"total": 0,
					"worklogs": []
				}
			}
		},
		{
			"expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
			"id": "18421",
			"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/issue/18421",
			"key": "TM-3572",
			"fields": {
				"statuscategorychangedate": "2022-07-28T14:42:58.587+0200",
				"issuetype": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issuetype/10102",
					"id": "10102",
					"description": "A small piece of work that's part of a larger task.",
					"iconUrl": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10316?size=medium",
					"name": "Sub-task",
					"subtask": true,
					"avatarId": 10316,
					"hierarchyLevel": -1
				},
				"parent": {
					"id": "18411",
					"key": "TM-3562",
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/18411",
					"fields": {
						"summary": "Camerito - připojená viewer station (Android)",
						"status": {
							"self": "https://tappytaps2.atlassian.net/rest/api/2/status/10000",
							"description": "",
							"iconUrl": "https://tappytaps2.atlassian.net/",
							"name": "To Do",
							"id": "10000",
							"statusCategory": {
								"self": "https://tappytaps2.atlassian.net/rest/api/2/statuscategory/2",
								"id": 2,
								"key": "new",
								"colorName": "blue-gray",
								"name": "To Do"
							}
						},
						"priority": {
							"self": "https://tappytaps2.atlassian.net/rest/api/2/priority/3",
							"iconUrl": "https://tappytaps2.atlassian.net/images/icons/priorities/medium.svg",
							"name": "Medium",
							"id": "3"
						},
						"issuetype": {
							"self": "https://tappytaps2.atlassian.net/rest/api/2/issuetype/10100",
							"id": "10100",
							"description": "Functionality or a feature expressed as a user goal.",
							"iconUrl": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10315?size=medium",
							"name": "Story",
							"subtask": false,
							"avatarId": 10315,
							"hierarchyLevel": 0
						}
					}
				},
				"timespent": null,
				"sprint": {
					"id": 124,
					"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/sprint/124",
					"state": "active",
					"name": "Sprint Tučňák (Jindra)",
					"startDate": "2022-11-30T11:43:11.974Z",
					"endDate": "2022-12-19T13:38:00.000Z",
					"originBoardId": 1,
					"goal": "Dodělat základní Android verzi Camerita (ať synchronizujeme vývoj)"
				},
				"project": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/project/10000",
					"id": "10000",
					"key": "TM",
					"name": "TappyTaps development",
					"projectTypeKey": "software",
					"simplified": false,
					"avatarUrls": {
						"48x48": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324",
						"24x24": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=small",
						"16x16": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=xsmall",
						"32x32": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=medium"
					}
				},
				"fixVersions": [],
				"aggregatetimespent": null,
				"resolution": null,
				"customfield_10113": {
					"hasEpicLinkFieldDependency": false,
					"showField": false,
					"nonEditableReason": {
						"reason": "PLUGIN_LICENSE_ERROR",
						"message": "The Parent Link is only available to Jira Premium users."
					}
				},
				"customfield_10114": null,
				"customfield_10510": null,
				"customfield_10500": null,
				"customfield_10501": null,
				"customfield_10502": [],
				"customfield_10503": null,
				"customfield_10504": null,
				"customfield_10505": null,
				"customfield_10506": null,
				"resolutiondate": null,
				"customfield_10507": null,
				"customfield_10508": null,
				"customfield_10509": null,
				"workratio": -1,
				"issuerestriction": {
					"issuerestrictions": {},
					"shouldDisplay": false
				},
				"lastViewed": null,
				"watches": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/TM-3572/watchers",
					"watchCount": 1,
					"isWatching": false
				},
				"created": "2022-07-28T14:42:58.357+0200",
				"epic": null,
				"priority": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/priority/3",
					"iconUrl": "https://tappytaps2.atlassian.net/images/icons/priorities/medium.svg",
					"name": "Medium",
					"id": "3"
				},
				"customfield_10100": null,
				"customfield_10101": null,
				"customfield_10300": null,
				"customfield_10102": null,
				"labels": [],
				"aggregatetimeoriginalestimate": null,
				"timeestimate": null,
				"versions": [],
				"issuelinks": [],
				"assignee": null,
				"updated": "2022-07-28T14:42:58.683+0200",
				"status": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/status/10000",
					"description": "",
					"iconUrl": "https://tappytaps2.atlassian.net/",
					"name": "To Do",
					"id": "10000",
					"statusCategory": {
						"self": "https://tappytaps2.atlassian.net/rest/api/2/statuscategory/2",
						"id": 2,
						"key": "new",
						"colorName": "blue-gray",
						"name": "To Do"
					}
				},
				"components": [],
				"timeoriginalestimate": null,
				"description": null,
				"timetracking": {},
				"customfield_10005": null,
				"security": null,
				"attachment": [],
				"aggregatetimeestimate": null,
				"flagged": false,
				"summary": "Backend",
				"creator": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/user?accountId=557058%3A4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"accountId": "557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"avatarUrls": {
						"48x48": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/48",
						"24x24": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/24",
						"16x16": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/16",
						"32x32": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/32"
					},
					"displayName": "Jan Sarson",
					"active": true,
					"timeZone": "Europe/Prague",
					"accountType": "atlassian"
				},
				"subtasks": [],
				"reporter": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/user?accountId=557058%3A4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"accountId": "557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"avatarUrls": {
						"48x48": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/48",
						"24x24": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/24",
						"16x16": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/16",
						"32x32": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/32"
					},
					"displayName": "Jan Sarson",
					"active": true,
					"timeZone": "Europe/Prague",
					"accountType": "atlassian"
				},
				"aggregateprogress": {
					"progress": 0,
					"total": 0
				},
				"customfield_10001": null,
				"customfield_10200": null,
				"customfield_10201": null,
				"customfield_10400": null,
				"customfield_10115": [
					{
						"id": 122,
						"name": "Sprint Rákosníček (Jindra)",
						"state": "closed",
						"boardId": 1,
						"goal": "Low light mode & Základní verze Camerito",
						"startDate": "2022-08-01T13:02:50.729Z",
						"endDate": "2022-09-05T12:32:00.000Z",
						"completeDate": "2022-10-20T11:32:45.838Z"
					},
					{
						"id": 123,
						"name": "Sprint Slimák (Lumáš)",
						"state": "closed",
						"boardId": 1,
						"goal": "Dohnat vývoj na Androidu",
						"startDate": "2022-10-23T07:00:48.895Z",
						"endDate": "2022-11-17T08:00:00.000Z",
						"completeDate": "2022-11-28T09:14:40.582Z"
					},
					{
						"id": 124,
						"name": "Sprint Tučňák (Jindra)",
						"state": "active",
						"boardId": 1,
						"goal": "Dodělat základní Android verzi Camerita (ať synchronizujeme vývoj)",
						"startDate": "2022-11-30T11:43:11.974Z",
						"endDate": "2022-12-19T13:38:00.000Z"
					}
				],
				"customfield_10511": null,
				"customfield_10512": null,
				"customfield_10116": "0|i00xfx:",
				"environment": null,
				"customfield_10513": null,
				"duedate": null,
				"closedSprints": [
					{
						"id": 122,
						"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/sprint/122",
						"state": "closed",
						"name": "Sprint Rákosníček (Jindra)",
						"startDate": "2022-08-01T13:02:50.729Z",
						"endDate": "2022-09-05T12:32:00.000Z",
						"completeDate": "2022-10-20T11:32:45.838Z",
						"originBoardId": 1,
						"goal": "Low light mode & Základní verze Camerito"
					},
					{
						"id": 123,
						"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/sprint/123",
						"state": "closed",
						"name": "Sprint Slimák (Lumáš)",
						"startDate": "2022-10-23T07:00:48.895Z",
						"endDate": "2022-11-17T08:00:00.000Z",
						"completeDate": "2022-11-28T09:14:40.582Z",
						"originBoardId": 1,
						"goal": "Dohnat vývoj na Androidu"
					}
				],
				"progress": {
					"progress": 0,
					"total": 0
				},
				"comment": {
					"comments": [],
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/18421/comment",
					"maxResults": 0,
					"total": 0,
					"startAt": 0
				},
				"votes": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/TM-3572/votes",
					"votes": 0,
					"hasVoted": false
				},
				"worklog": {
					"startAt": 0,
					"maxResults": 20,
					"total": 0,
					"worklogs": []
				}
			}
		},
		{
			"expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
			"id": "18422",
			"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/issue/18422",
			"key": "TM-3573",
			"fields": {
				"statuscategorychangedate": "2023-01-05T16:01:15.033+0100",
				"issuetype": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issuetype/10102",
					"id": "10102",
					"description": "A small piece of work that's part of a larger task.",
					"iconUrl": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10316?size=medium",
					"name": "Sub-task",
					"subtask": true,
					"avatarId": 10316,
					"hierarchyLevel": -1
				},
				"parent": {
					"id": "18411",
					"key": "TM-3562",
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/18411",
					"fields": {
						"summary": "Camerito - připojená viewer station (Android)",
						"status": {
							"self": "https://tappytaps2.atlassian.net/rest/api/2/status/10000",
							"description": "",
							"iconUrl": "https://tappytaps2.atlassian.net/",
							"name": "To Do",
							"id": "10000",
							"statusCategory": {
								"self": "https://tappytaps2.atlassian.net/rest/api/2/statuscategory/2",
								"id": 2,
								"key": "new",
								"colorName": "blue-gray",
								"name": "To Do"
							}
						},
						"priority": {
							"self": "https://tappytaps2.atlassian.net/rest/api/2/priority/3",
							"iconUrl": "https://tappytaps2.atlassian.net/images/icons/priorities/medium.svg",
							"name": "Medium",
							"id": "3"
						},
						"issuetype": {
							"self": "https://tappytaps2.atlassian.net/rest/api/2/issuetype/10100",
							"id": "10100",
							"description": "Functionality or a feature expressed as a user goal.",
							"iconUrl": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10315?size=medium",
							"name": "Story",
							"subtask": false,
							"avatarId": 10315,
							"hierarchyLevel": 0
						}
					}
				},
				"timespent": null,
				"sprint": {
					"id": 124,
					"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/sprint/124",
					"state": "active",
					"name": "Sprint Tučňák (Jindra)",
					"startDate": "2022-11-30T11:43:11.974Z",
					"endDate": "2022-12-19T13:38:00.000Z",
					"originBoardId": 1,
					"goal": "Dodělat základní Android verzi Camerita (ať synchronizujeme vývoj)"
				},
				"project": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/project/10000",
					"id": "10000",
					"key": "TM",
					"name": "TappyTaps development",
					"projectTypeKey": "software",
					"simplified": false,
					"avatarUrls": {
						"48x48": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324",
						"24x24": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=small",
						"16x16": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=xsmall",
						"32x32": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=medium"
					}
				},
				"fixVersions": [],
				"aggregatetimespent": null,
				"resolution": null,
				"customfield_10113": {
					"hasEpicLinkFieldDependency": false,
					"showField": false,
					"nonEditableReason": {
						"reason": "PLUGIN_LICENSE_ERROR",
						"message": "The Parent Link is only available to Jira Premium users."
					}
				},
				"customfield_10114": null,
				"customfield_10510": null,
				"customfield_10500": null,
				"customfield_10501": null,
				"customfield_10502": [],
				"customfield_10503": null,
				"customfield_10504": null,
				"customfield_10505": null,
				"customfield_10506": null,
				"resolutiondate": null,
				"customfield_10507": null,
				"customfield_10508": null,
				"workratio": -1,
				"customfield_10509": null,
				"lastViewed": null,
				"issuerestriction": {
					"issuerestrictions": {},
					"shouldDisplay": false
				},
				"watches": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/TM-3573/watchers",
					"watchCount": 1,
					"isWatching": false
				},
				"created": "2022-07-28T14:43:03.651+0200",
				"epic": null,
				"customfield_10100": null,
				"priority": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/priority/3",
					"iconUrl": "https://tappytaps2.atlassian.net/images/icons/priorities/medium.svg",
					"name": "Medium",
					"id": "3"
				},
				"customfield_10101": null,
				"customfield_10102": null,
				"customfield_10300": null,
				"labels": [],
				"timeestimate": null,
				"aggregatetimeoriginalestimate": null,
				"versions": [],
				"issuelinks": [],
				"assignee": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/user?accountId=557058%3A639f83e2-2814-4439-b805-3bc164b93999",
					"accountId": "557058:639f83e2-2814-4439-b805-3bc164b93999",
					"avatarUrls": {
						"48x48": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:639f83e2-2814-4439-b805-3bc164b93999/02863cb7-b09c-4894-ba6b-8ca717ea9055/48",
						"24x24": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:639f83e2-2814-4439-b805-3bc164b93999/02863cb7-b09c-4894-ba6b-8ca717ea9055/24",
						"16x16": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:639f83e2-2814-4439-b805-3bc164b93999/02863cb7-b09c-4894-ba6b-8ca717ea9055/16",
						"32x32": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:639f83e2-2814-4439-b805-3bc164b93999/02863cb7-b09c-4894-ba6b-8ca717ea9055/32"
					},
					"displayName": "Jiří Šimůnek",
					"active": true,
					"timeZone": "Europe/Prague",
					"accountType": "atlassian"
				},
				"updated": "2023-01-05T16:05:41.561+0100",
				"status": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/status/10002",
					"description": "",
					"iconUrl": "https://tappytaps2.atlassian.net/images/icons/statuses/generic.png",
					"name": "Testing",
					"id": "10002",
					"statusCategory": {
						"self": "https://tappytaps2.atlassian.net/rest/api/2/statuscategory/4",
						"id": 4,
						"key": "indeterminate",
						"colorName": "yellow",
						"name": "In Progress"
					}
				},
				"components": [],
				"timeoriginalestimate": null,
				"description": null,
				"timetracking": {},
				"customfield_10005": null,
				"security": null,
				"aggregatetimeestimate": null,
				"attachment": [],
				"flagged": false,
				"summary": "Android implementace",
				"creator": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/user?accountId=557058%3A4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"accountId": "557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"avatarUrls": {
						"48x48": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/48",
						"24x24": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/24",
						"16x16": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/16",
						"32x32": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/32"
					},
					"displayName": "Jan Sarson",
					"active": true,
					"timeZone": "Europe/Prague",
					"accountType": "atlassian"
				},
				"subtasks": [],
				"reporter": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/user?accountId=557058%3A4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"accountId": "557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"avatarUrls": {
						"48x48": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/48",
						"24x24": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/24",
						"16x16": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/16",
						"32x32": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/32"
					},
					"displayName": "Jan Sarson",
					"active": true,
					"timeZone": "Europe/Prague",
					"accountType": "atlassian"
				},
				"aggregateprogress": {
					"progress": 0,
					"total": 0
				},
				"customfield_10001": null,
				"customfield_10200": null,
				"customfield_10201": null,
				"customfield_10400": null,
				"customfield_10115": [
					{
						"id": 122,
						"name": "Sprint Rákosníček (Jindra)",
						"state": "closed",
						"boardId": 1,
						"goal": "Low light mode & Základní verze Camerito",
						"startDate": "2022-08-01T13:02:50.729Z",
						"endDate": "2022-09-05T12:32:00.000Z",
						"completeDate": "2022-10-20T11:32:45.838Z"
					},
					{
						"id": 123,
						"name": "Sprint Slimák (Lumáš)",
						"state": "closed",
						"boardId": 1,
						"goal": "Dohnat vývoj na Androidu",
						"startDate": "2022-10-23T07:00:48.895Z",
						"endDate": "2022-11-17T08:00:00.000Z",
						"completeDate": "2022-11-28T09:14:40.582Z"
					},
					{
						"id": 124,
						"name": "Sprint Tučňák (Jindra)",
						"state": "active",
						"boardId": 1,
						"goal": "Dodělat základní Android verzi Camerita (ať synchronizujeme vývoj)",
						"startDate": "2022-11-30T11:43:11.974Z",
						"endDate": "2022-12-19T13:38:00.000Z"
					}
				],
				"customfield_10511": null,
				"customfield_10512": null,
				"customfield_10116": "0|i00xg5:",
				"customfield_10513": null,
				"environment": null,
				"duedate": null,
				"closedSprints": [
					{
						"id": 122,
						"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/sprint/122",
						"state": "closed",
						"name": "Sprint Rákosníček (Jindra)",
						"startDate": "2022-08-01T13:02:50.729Z",
						"endDate": "2022-09-05T12:32:00.000Z",
						"completeDate": "2022-10-20T11:32:45.838Z",
						"originBoardId": 1,
						"goal": "Low light mode & Základní verze Camerito"
					},
					{
						"id": 123,
						"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/sprint/123",
						"state": "closed",
						"name": "Sprint Slimák (Lumáš)",
						"startDate": "2022-10-23T07:00:48.895Z",
						"endDate": "2022-11-17T08:00:00.000Z",
						"completeDate": "2022-11-28T09:14:40.582Z",
						"originBoardId": 1,
						"goal": "Dohnat vývoj na Androidu"
					}
				],
				"progress": {
					"progress": 0,
					"total": 0
				},
				"votes": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/TM-3573/votes",
					"votes": 0,
					"hasVoted": false
				},
				"comment": {
					"comments": [],
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/18422/comment",
					"maxResults": 0,
					"total": 0,
					"startAt": 0
				},
				"worklog": {
					"startAt": 0,
					"maxResults": 20,
					"total": 0,
					"worklogs": []
				}
			}
		},
		{
			"expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
			"id": "18187",
			"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/issue/18187",
			"key": "TM-3338",
			"fields": {
				"statuscategorychangedate": "2022-03-07T14:35:17.382+0100",
				"issuetype": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issuetype/10100",
					"id": "10100",
					"description": "Functionality or a feature expressed as a user goal.",
					"iconUrl": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10315?size=medium",
					"name": "Story",
					"subtask": false,
					"avatarId": 10315,
					"hierarchyLevel": 0
				},
				"timespent": null,
				"sprint": {
					"id": 124,
					"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/sprint/124",
					"state": "active",
					"name": "Sprint Tučňák (Jindra)",
					"startDate": "2022-11-30T11:43:11.974Z",
					"endDate": "2022-12-19T13:38:00.000Z",
					"originBoardId": 1,
					"goal": "Dodělat základní Android verzi Camerita (ať synchronizujeme vývoj)"
				},
				"project": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/project/10000",
					"id": "10000",
					"key": "TM",
					"name": "TappyTaps development",
					"projectTypeKey": "software",
					"simplified": false,
					"avatarUrls": {
						"48x48": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324",
						"24x24": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=small",
						"16x16": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=xsmall",
						"32x32": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=medium"
					}
				},
				"fixVersions": [],
				"aggregatetimespent": null,
				"resolution": null,
				"customfield_10113": {
					"hasEpicLinkFieldDependency": false,
					"showField": false,
					"nonEditableReason": {
						"reason": "PLUGIN_LICENSE_ERROR",
						"message": "The Parent Link is only available to Jira Premium users."
					}
				},
				"customfield_10510": null,
				"customfield_10114": null,
				"customfield_10500": null,
				"customfield_10501": null,
				"customfield_10502": [],
				"customfield_10503": null,
				"customfield_10504": null,
				"customfield_10505": null,
				"resolutiondate": null,
				"customfield_10506": null,
				"customfield_10507": null,
				"customfield_10508": null,
				"workratio": -1,
				"customfield_10509": null,
				"lastViewed": null,
				"issuerestriction": {
					"issuerestrictions": {},
					"shouldDisplay": false
				},
				"watches": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/TM-3338/watchers",
					"watchCount": 1,
					"isWatching": false
				},
				"created": "2022-03-07T14:35:17.045+0100",
				"epic": null,
				"priority": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/priority/3",
					"iconUrl": "https://tappytaps2.atlassian.net/images/icons/priorities/medium.svg",
					"name": "Medium",
					"id": "3"
				},
				"customfield_10100": null,
				"customfield_10101": null,
				"customfield_10102": null,
				"customfield_10300": null,
				"labels": [],
				"timeestimate": null,
				"aggregatetimeoriginalestimate": null,
				"versions": [],
				"issuelinks": [],
				"assignee": null,
				"updated": "2022-11-30T12:52:26.151+0100",
				"status": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/status/10000",
					"description": "",
					"iconUrl": "https://tappytaps2.atlassian.net/",
					"name": "To Do",
					"id": "10000",
					"statusCategory": {
						"self": "https://tappytaps2.atlassian.net/rest/api/2/statuscategory/2",
						"id": 2,
						"key": "new",
						"colorName": "blue-gray",
						"name": "To Do"
					}
				},
				"components": [],
				"timeoriginalestimate": null,
				"description": "_Jako uživatel chci mít přehled o monitorování, abych mohl používat telefon na jiné věci._\n\n* testovací implementace Camerito\n** zjistit zda můžeme jen video, nebo i něco jiného (naše GUI)\n* zobrazit základní GUI pro video/ne video mod v PIP modu\n* jako vedlejší efekt bude udržovat aplikaci stále zapnutou a nebude tak hrozit riziko ukončení aplikace systémem (minimálně to bude eliminováno).\n* povoleni a zakázání funkce bude v Video Settings, defaultně bude povoleno\n* při prvním použití a zavření videa dáme uživateli vědět že funkci může vypnout (notifikací nebo dialogem v aplikaci)\n\n\n\nAndroid - [https://developer.android.com/develop/ui/views/picture-in-picture|https://developer.android.com/develop/ui/views/picture-in-picture|smart-link]",
				"timetracking": {},
				"customfield_10005": null,
				"security": null,
				"aggregatetimeestimate": null,
				"attachment": [],
				"flagged": false,
				"summary": "PIP mode iOS",
				"creator": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/user?accountId=557058%3A4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"accountId": "557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"avatarUrls": {
						"48x48": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/48",
						"24x24": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/24",
						"16x16": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/16",
						"32x32": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/32"
					},
					"displayName": "Jan Sarson",
					"active": true,
					"timeZone": "Europe/Prague",
					"accountType": "atlassian"
				},
				"subtasks": [
					{
						"id": "18484",
						"key": "TM-3635",
						"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/18484",
						"fields": {
							"summary": "Programování iOS",
							"status": {
								"self": "https://tappytaps2.atlassian.net/rest/api/2/status/3",
								"description": "This issue is being actively worked on at the moment by the assignee.",
								"iconUrl": "https://tappytaps2.atlassian.net/images/icons/statuses/inprogress.png",
								"name": "In Progress",
								"id": "3",
								"statusCategory": {
									"self": "https://tappytaps2.atlassian.net/rest/api/2/statuscategory/4",
									"id": 4,
									"key": "indeterminate",
									"colorName": "yellow",
									"name": "In Progress"
								}
							},
							"priority": {
								"self": "https://tappytaps2.atlassian.net/rest/api/2/priority/3",
								"iconUrl": "https://tappytaps2.atlassian.net/images/icons/priorities/medium.svg",
								"name": "Medium",
								"id": "3"
							},
							"issuetype": {
								"self": "https://tappytaps2.atlassian.net/rest/api/2/issuetype/10102",
								"id": "10102",
								"description": "A small piece of work that's part of a larger task.",
								"iconUrl": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10316?size=medium",
								"name": "Sub-task",
								"subtask": true,
								"avatarId": 10316,
								"hierarchyLevel": -1
							}
						}
					}
				],
				"reporter": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/user?accountId=557058%3A4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"accountId": "557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"avatarUrls": {
						"48x48": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/48",
						"24x24": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/24",
						"16x16": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/16",
						"32x32": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/32"
					},
					"displayName": "Jan Sarson",
					"active": true,
					"timeZone": "Europe/Prague",
					"accountType": "atlassian"
				},
				"aggregateprogress": {
					"progress": 0,
					"total": 0
				},
				"customfield_10001": null,
				"customfield_10200": null,
				"customfield_10201": null,
				"customfield_10400": null,
				"customfield_10511": null,
				"customfield_10115": [
					{
						"id": 123,
						"name": "Sprint Slimák (Lumáš)",
						"state": "closed",
						"boardId": 1,
						"goal": "Dohnat vývoj na Androidu",
						"startDate": "2022-10-23T07:00:48.895Z",
						"endDate": "2022-11-17T08:00:00.000Z",
						"completeDate": "2022-11-28T09:14:40.582Z"
					},
					{
						"id": 124,
						"name": "Sprint Tučňák (Jindra)",
						"state": "active",
						"boardId": 1,
						"goal": "Dodělat základní Android verzi Camerita (ať synchronizujeme vývoj)",
						"startDate": "2022-11-30T11:43:11.974Z",
						"endDate": "2022-12-19T13:38:00.000Z"
					}
				],
				"customfield_10512": null,
				"customfield_10116": "0|i00x57:",
				"environment": null,
				"customfield_10117": 1.0,
				"customfield_10513": null,
				"duedate": null,
				"closedSprints": [
					{
						"id": 123,
						"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/sprint/123",
						"state": "closed",
						"name": "Sprint Slimák (Lumáš)",
						"startDate": "2022-10-23T07:00:48.895Z",
						"endDate": "2022-11-17T08:00:00.000Z",
						"completeDate": "2022-11-28T09:14:40.582Z",
						"originBoardId": 1,
						"goal": "Dohnat vývoj na Androidu"
					}
				],
				"progress": {
					"progress": 0,
					"total": 0
				},
				"votes": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/TM-3338/votes",
					"votes": 0,
					"hasVoted": false
				},
				"comment": {
					"comments": [],
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/18187/comment",
					"maxResults": 0,
					"total": 0,
					"startAt": 0
				},
				"worklog": {
					"startAt": 0,
					"maxResults": 20,
					"total": 0,
					"worklogs": []
				}
			}
		},
		{
			"expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
			"id": "18484",
			"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/issue/18484",
			"key": "TM-3635",
			"fields": {
				"statuscategorychangedate": "2022-11-28T10:14:22.046+0100",
				"issuetype": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issuetype/10102",
					"id": "10102",
					"description": "A small piece of work that's part of a larger task.",
					"iconUrl": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10316?size=medium",
					"name": "Sub-task",
					"subtask": true,
					"avatarId": 10316,
					"hierarchyLevel": -1
				},
				"parent": {
					"id": "18187",
					"key": "TM-3338",
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/18187",
					"fields": {
						"summary": "PIP mode iOS",
						"status": {
							"self": "https://tappytaps2.atlassian.net/rest/api/2/status/10000",
							"description": "",
							"iconUrl": "https://tappytaps2.atlassian.net/",
							"name": "To Do",
							"id": "10000",
							"statusCategory": {
								"self": "https://tappytaps2.atlassian.net/rest/api/2/statuscategory/2",
								"id": 2,
								"key": "new",
								"colorName": "blue-gray",
								"name": "To Do"
							}
						},
						"priority": {
							"self": "https://tappytaps2.atlassian.net/rest/api/2/priority/3",
							"iconUrl": "https://tappytaps2.atlassian.net/images/icons/priorities/medium.svg",
							"name": "Medium",
							"id": "3"
						},
						"issuetype": {
							"self": "https://tappytaps2.atlassian.net/rest/api/2/issuetype/10100",
							"id": "10100",
							"description": "Functionality or a feature expressed as a user goal.",
							"iconUrl": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10315?size=medium",
							"name": "Story",
							"subtask": false,
							"avatarId": 10315,
							"hierarchyLevel": 0
						}
					}
				},
				"timespent": null,
				"sprint": {
					"id": 124,
					"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/sprint/124",
					"state": "active",
					"name": "Sprint Tučňák (Jindra)",
					"startDate": "2022-11-30T11:43:11.974Z",
					"endDate": "2022-12-19T13:38:00.000Z",
					"originBoardId": 1,
					"goal": "Dodělat základní Android verzi Camerita (ať synchronizujeme vývoj)"
				},
				"project": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/project/10000",
					"id": "10000",
					"key": "TM",
					"name": "TappyTaps development",
					"projectTypeKey": "software",
					"simplified": false,
					"avatarUrls": {
						"48x48": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324",
						"24x24": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=small",
						"16x16": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=xsmall",
						"32x32": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=medium"
					}
				},
				"fixVersions": [],
				"aggregatetimespent": null,
				"resolution": null,
				"customfield_10113": {
					"hasEpicLinkFieldDependency": false,
					"showField": false,
					"nonEditableReason": {
						"reason": "PLUGIN_LICENSE_ERROR",
						"message": "The Parent Link is only available to Jira Premium users."
					}
				},
				"customfield_10114": null,
				"customfield_10510": null,
				"customfield_10500": null,
				"customfield_10501": null,
				"customfield_10502": [],
				"customfield_10503": null,
				"customfield_10504": null,
				"customfield_10505": null,
				"customfield_10506": null,
				"resolutiondate": null,
				"customfield_10507": null,
				"customfield_10508": null,
				"workratio": -1,
				"customfield_10509": null,
				"issuerestriction": {
					"issuerestrictions": {},
					"shouldDisplay": false
				},
				"lastViewed": null,
				"watches": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/TM-3635/watchers",
					"watchCount": 1,
					"isWatching": false
				},
				"created": "2022-10-31T13:26:38.146+0100",
				"epic": null,
				"customfield_10100": null,
				"priority": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/priority/3",
					"iconUrl": "https://tappytaps2.atlassian.net/images/icons/priorities/medium.svg",
					"name": "Medium",
					"id": "3"
				},
				"customfield_10101": null,
				"customfield_10300": null,
				"customfield_10102": null,
				"labels": [],
				"aggregatetimeoriginalestimate": null,
				"timeestimate": null,
				"versions": [],
				"issuelinks": [],
				"assignee": null,
				"updated": "2022-11-28T10:14:22.046+0100",
				"status": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/status/3",
					"description": "This issue is being actively worked on at the moment by the assignee.",
					"iconUrl": "https://tappytaps2.atlassian.net/images/icons/statuses/inprogress.png",
					"name": "In Progress",
					"id": "3",
					"statusCategory": {
						"self": "https://tappytaps2.atlassian.net/rest/api/2/statuscategory/4",
						"id": 4,
						"key": "indeterminate",
						"colorName": "yellow",
						"name": "In Progress"
					}
				},
				"components": [],
				"timeoriginalestimate": null,
				"description": null,
				"timetracking": {},
				"customfield_10005": null,
				"security": null,
				"attachment": [],
				"aggregatetimeestimate": null,
				"flagged": false,
				"summary": "Programování iOS",
				"creator": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/user?accountId=557058%3A02bd42e0-adb2-4778-89d7-f14637b35c04",
					"accountId": "557058:02bd42e0-adb2-4778-89d7-f14637b35c04",
					"avatarUrls": {
						"48x48": "https://secure.gravatar.com/avatar/c15828dfffe25cd2f5a0e02f6d18c13a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJS-2.png",
						"24x24": "https://secure.gravatar.com/avatar/c15828dfffe25cd2f5a0e02f6d18c13a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJS-2.png",
						"16x16": "https://secure.gravatar.com/avatar/c15828dfffe25cd2f5a0e02f6d18c13a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJS-2.png",
						"32x32": "https://secure.gravatar.com/avatar/c15828dfffe25cd2f5a0e02f6d18c13a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJS-2.png"
					},
					"displayName": "Jindrich Sarson",
					"active": true,
					"timeZone": "Europe/Prague",
					"accountType": "atlassian"
				},
				"subtasks": [],
				"reporter": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/user?accountId=557058%3A02bd42e0-adb2-4778-89d7-f14637b35c04",
					"accountId": "557058:02bd42e0-adb2-4778-89d7-f14637b35c04",
					"avatarUrls": {
						"48x48": "https://secure.gravatar.com/avatar/c15828dfffe25cd2f5a0e02f6d18c13a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJS-2.png",
						"24x24": "https://secure.gravatar.com/avatar/c15828dfffe25cd2f5a0e02f6d18c13a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJS-2.png",
						"16x16": "https://secure.gravatar.com/avatar/c15828dfffe25cd2f5a0e02f6d18c13a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJS-2.png",
						"32x32": "https://secure.gravatar.com/avatar/c15828dfffe25cd2f5a0e02f6d18c13a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJS-2.png"
					},
					"displayName": "Jindrich Sarson",
					"active": true,
					"timeZone": "Europe/Prague",
					"accountType": "atlassian"
				},
				"aggregateprogress": {
					"progress": 0,
					"total": 0
				},
				"customfield_10001": null,
				"customfield_10200": null,
				"customfield_10201": null,
				"customfield_10400": null,
				"customfield_10115": [
					{
						"id": 123,
						"name": "Sprint Slimák (Lumáš)",
						"state": "closed",
						"boardId": 1,
						"goal": "Dohnat vývoj na Androidu",
						"startDate": "2022-10-23T07:00:48.895Z",
						"endDate": "2022-11-17T08:00:00.000Z",
						"completeDate": "2022-11-28T09:14:40.582Z"
					},
					{
						"id": 124,
						"name": "Sprint Tučňák (Jindra)",
						"state": "active",
						"boardId": 1,
						"goal": "Dodělat základní Android verzi Camerita (ať synchronizujeme vývoj)",
						"startDate": "2022-11-30T11:43:11.974Z",
						"endDate": "2022-12-19T13:38:00.000Z"
					}
				],
				"customfield_10511": null,
				"customfield_10116": "0|i00xvh:",
				"customfield_10512": null,
				"environment": null,
				"customfield_10513": null,
				"duedate": null,
				"closedSprints": [
					{
						"id": 123,
						"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/sprint/123",
						"state": "closed",
						"name": "Sprint Slimák (Lumáš)",
						"startDate": "2022-10-23T07:00:48.895Z",
						"endDate": "2022-11-17T08:00:00.000Z",
						"completeDate": "2022-11-28T09:14:40.582Z",
						"originBoardId": 1,
						"goal": "Dohnat vývoj na Androidu"
					}
				],
				"progress": {
					"progress": 0,
					"total": 0
				},
				"votes": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/TM-3635/votes",
					"votes": 0,
					"hasVoted": false
				},
				"comment": {
					"comments": [],
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/18484/comment",
					"maxResults": 0,
					"total": 0,
					"startAt": 0
				},
				"worklog": {
					"startAt": 0,
					"maxResults": 20,
					"total": 0,
					"worklogs": []
				}
			}
		},
		{
			"expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
			"id": "18457",
			"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/issue/18457",
			"key": "TM-3608",
			"fields": {
				"statuscategorychangedate": "2023-01-05T12:45:49.243+0100",
				"issuetype": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issuetype/10100",
					"id": "10100",
					"description": "Functionality or a feature expressed as a user goal.",
					"iconUrl": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10315?size=medium",
					"name": "Story",
					"subtask": false,
					"avatarId": 10315,
					"hierarchyLevel": 0
				},
				"timespent": null,
				"sprint": {
					"id": 124,
					"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/sprint/124",
					"state": "active",
					"name": "Sprint Tučňák (Jindra)",
					"startDate": "2022-11-30T11:43:11.974Z",
					"endDate": "2022-12-19T13:38:00.000Z",
					"originBoardId": 1,
					"goal": "Dodělat základní Android verzi Camerita (ať synchronizujeme vývoj)"
				},
				"project": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/project/10000",
					"id": "10000",
					"key": "TM",
					"name": "TappyTaps development",
					"projectTypeKey": "software",
					"simplified": false,
					"avatarUrls": {
						"48x48": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324",
						"24x24": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=small",
						"16x16": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=xsmall",
						"32x32": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=medium"
					}
				},
				"fixVersions": [],
				"aggregatetimespent": null,
				"resolution": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/resolution/10000",
					"id": "10000",
					"description": "Work has been completed on this issue.",
					"name": "Done"
				},
				"customfield_10113": {
					"hasEpicLinkFieldDependency": false,
					"showField": false,
					"nonEditableReason": {
						"reason": "PLUGIN_LICENSE_ERROR",
						"message": "The Parent Link is only available to Jira Premium users."
					}
				},
				"customfield_10510": null,
				"customfield_10114": null,
				"customfield_10500": null,
				"customfield_10501": null,
				"customfield_10502": [],
				"customfield_10503": null,
				"customfield_10504": null,
				"customfield_10505": null,
				"customfield_10506": null,
				"resolutiondate": "2023-01-05T12:45:49.239+0100",
				"customfield_10507": null,
				"customfield_10508": null,
				"workratio": -1,
				"customfield_10509": null,
				"lastViewed": null,
				"issuerestriction": {
					"issuerestrictions": {},
					"shouldDisplay": false
				},
				"watches": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/TM-3608/watchers",
					"watchCount": 1,
					"isWatching": false
				},
				"created": "2022-10-17T13:30:50.031+0200",
				"epic": null,
				"customfield_10100": null,
				"priority": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/priority/3",
					"iconUrl": "https://tappytaps2.atlassian.net/images/icons/priorities/medium.svg",
					"name": "Medium",
					"id": "3"
				},
				"customfield_10101": "10000_*:*_1_*:*_6912899231_*|*_10001_*:*_1_*:*_0",
				"customfield_10300": null,
				"customfield_10102": null,
				"labels": [],
				"timeestimate": null,
				"aggregatetimeoriginalestimate": null,
				"versions": [],
				"issuelinks": [],
				"assignee": null,
				"updated": "2023-01-05T12:45:49.243+0100",
				"status": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/status/10001",
					"description": "",
					"iconUrl": "https://tappytaps2.atlassian.net/",
					"name": "Done",
					"id": "10001",
					"statusCategory": {
						"self": "https://tappytaps2.atlassian.net/rest/api/2/statuscategory/3",
						"id": 3,
						"key": "done",
						"colorName": "green",
						"name": "Done"
					}
				},
				"components": [],
				"timeoriginalestimate": null,
				"description": "_Jako uživatel chci snadno zjistit podrobnosti ohledně předplatného a mít možnost ho zrušit, abych nemusel psát na support._\n\n* přidat tlačítko manage subscription do obrazovky s accountem\n** nutné vyřešit různé stavy\n*** premium na Androidu\n*** premium na iOS\n*** premium přes Paddle\n*** premium jinak (hotel, promo kod)\n* na platformě která je stejná jako kde to koupil to otevře stránku předplatného na dané platformě, jinak zobrazit info na jaké platformě to má\n** zjistit jestli víme o jakého uživatele se jedná, abychom na androidu nebo iOS neukazovali subscription pro jiného uživatele\n*** hláška: “Předplatné bylo zakoupeno na Androidu/iOS pod jiným účtem”\n** pokud je to koupené přes Paddle, tak zobrazit rovnou tlačítko na cancel v dialogu po manage subscription\n** v případě předplatného z jiné platformy napíše “Předplatné bylo zakoupeno na platformě Android“\n* [https://www.figma.com/file/UVZWffQKSik48ONt9Y3Gw7/Manage-Subscription?node-id=0%3A1&t=btiYsseHVXI2871q-1|https://www.figma.com/file/UVZWffQKSik48ONt9Y3Gw7/Manage-Subscription?node-id=0%3A1&t=btiYsseHVXI2871q-1|smart-link]",
				"timetracking": {},
				"customfield_10005": null,
				"security": null,
				"aggregatetimeestimate": null,
				"attachment": [],
				"flagged": false,
				"summary": "Tlačítko manage subscription do account obazovky",
				"creator": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/user?accountId=557058%3A4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"accountId": "557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"avatarUrls": {
						"48x48": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/48",
						"24x24": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/24",
						"16x16": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/16",
						"32x32": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/32"
					},
					"displayName": "Jan Sarson",
					"active": true,
					"timeZone": "Europe/Prague",
					"accountType": "atlassian"
				},
				"subtasks": [
					{
						"id": "18471",
						"key": "TM-3622",
						"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/18471",
						"fields": {
							"summary": "Android",
							"status": {
								"self": "https://tappytaps2.atlassian.net/rest/api/2/status/10001",
								"description": "",
								"iconUrl": "https://tappytaps2.atlassian.net/",
								"name": "Done",
								"id": "10001",
								"statusCategory": {
									"self": "https://tappytaps2.atlassian.net/rest/api/2/statuscategory/3",
									"id": 3,
									"key": "done",
									"colorName": "green",
									"name": "Done"
								}
							},
							"priority": {
								"self": "https://tappytaps2.atlassian.net/rest/api/2/priority/3",
								"iconUrl": "https://tappytaps2.atlassian.net/images/icons/priorities/medium.svg",
								"name": "Medium",
								"id": "3"
							},
							"issuetype": {
								"self": "https://tappytaps2.atlassian.net/rest/api/2/issuetype/10102",
								"id": "10102",
								"description": "A small piece of work that's part of a larger task.",
								"iconUrl": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10316?size=medium",
								"name": "Sub-task",
								"subtask": true,
								"avatarId": 10316,
								"hierarchyLevel": -1
							}
						}
					},
					{
						"id": "18472",
						"key": "TM-3623",
						"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/18472",
						"fields": {
							"summary": "iOS",
							"status": {
								"self": "https://tappytaps2.atlassian.net/rest/api/2/status/10001",
								"description": "",
								"iconUrl": "https://tappytaps2.atlassian.net/",
								"name": "Done",
								"id": "10001",
								"statusCategory": {
									"self": "https://tappytaps2.atlassian.net/rest/api/2/statuscategory/3",
									"id": 3,
									"key": "done",
									"colorName": "green",
									"name": "Done"
								}
							},
							"priority": {
								"self": "https://tappytaps2.atlassian.net/rest/api/2/priority/3",
								"iconUrl": "https://tappytaps2.atlassian.net/images/icons/priorities/medium.svg",
								"name": "Medium",
								"id": "3"
							},
							"issuetype": {
								"self": "https://tappytaps2.atlassian.net/rest/api/2/issuetype/10102",
								"id": "10102",
								"description": "A small piece of work that's part of a larger task.",
								"iconUrl": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10316?size=medium",
								"name": "Sub-task",
								"subtask": true,
								"avatarId": 10316,
								"hierarchyLevel": -1
							}
						}
					},
					{
						"id": "18473",
						"key": "TM-3624",
						"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/18473",
						"fields": {
							"summary": "Desktop",
							"status": {
								"self": "https://tappytaps2.atlassian.net/rest/api/2/status/10001",
								"description": "",
								"iconUrl": "https://tappytaps2.atlassian.net/",
								"name": "Done",
								"id": "10001",
								"statusCategory": {
									"self": "https://tappytaps2.atlassian.net/rest/api/2/statuscategory/3",
									"id": 3,
									"key": "done",
									"colorName": "green",
									"name": "Done"
								}
							},
							"priority": {
								"self": "https://tappytaps2.atlassian.net/rest/api/2/priority/3",
								"iconUrl": "https://tappytaps2.atlassian.net/images/icons/priorities/medium.svg",
								"name": "Medium",
								"id": "3"
							},
							"issuetype": {
								"self": "https://tappytaps2.atlassian.net/rest/api/2/issuetype/10102",
								"id": "10102",
								"description": "A small piece of work that's part of a larger task.",
								"iconUrl": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10316?size=medium",
								"name": "Sub-task",
								"subtask": true,
								"avatarId": 10316,
								"hierarchyLevel": -1
							}
						}
					}
				],
				"reporter": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/user?accountId=557058%3A4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"accountId": "557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"avatarUrls": {
						"48x48": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/48",
						"24x24": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/24",
						"16x16": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/16",
						"32x32": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/32"
					},
					"displayName": "Jan Sarson",
					"active": true,
					"timeZone": "Europe/Prague",
					"accountType": "atlassian"
				},
				"aggregateprogress": {
					"progress": 0,
					"total": 0
				},
				"customfield_10001": null,
				"customfield_10200": null,
				"customfield_10201": null,
				"customfield_10400": null,
				"customfield_10511": null,
				"customfield_10115": [
					{
						"id": 124,
						"name": "Sprint Tučňák (Jindra)",
						"state": "active",
						"boardId": 1,
						"goal": "Dodělat základní Android verzi Camerita (ať synchronizujeme vývoj)",
						"startDate": "2022-11-30T11:43:11.974Z",
						"endDate": "2022-12-19T13:38:00.000Z"
					}
				],
				"customfield_10116": "0|i00xkg:",
				"customfield_10512": null,
				"customfield_10513": null,
				"environment": null,
				"customfield_10117": 3.0,
				"duedate": null,
				"progress": {
					"progress": 0,
					"total": 0
				},
				"votes": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/TM-3608/votes",
					"votes": 0,
					"hasVoted": false
				},
				"comment": {
					"comments": [],
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/18457/comment",
					"maxResults": 0,
					"total": 0,
					"startAt": 0
				},
				"worklog": {
					"startAt": 0,
					"maxResults": 20,
					"total": 0,
					"worklogs": []
				}
			}
		},
		{
			"expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
			"id": "18471",
			"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/issue/18471",
			"key": "TM-3622",
			"fields": {
				"statuscategorychangedate": "2022-12-15T14:58:43.975+0100",
				"issuetype": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issuetype/10102",
					"id": "10102",
					"description": "A small piece of work that's part of a larger task.",
					"iconUrl": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10316?size=medium",
					"name": "Sub-task",
					"subtask": true,
					"avatarId": 10316,
					"hierarchyLevel": -1
				},
				"parent": {
					"id": "18457",
					"key": "TM-3608",
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/18457",
					"fields": {
						"summary": "Tlačítko manage subscription do account obazovky",
						"status": {
							"self": "https://tappytaps2.atlassian.net/rest/api/2/status/10001",
							"description": "",
							"iconUrl": "https://tappytaps2.atlassian.net/",
							"name": "Done",
							"id": "10001",
							"statusCategory": {
								"self": "https://tappytaps2.atlassian.net/rest/api/2/statuscategory/3",
								"id": 3,
								"key": "done",
								"colorName": "green",
								"name": "Done"
							}
						},
						"priority": {
							"self": "https://tappytaps2.atlassian.net/rest/api/2/priority/3",
							"iconUrl": "https://tappytaps2.atlassian.net/images/icons/priorities/medium.svg",
							"name": "Medium",
							"id": "3"
						},
						"issuetype": {
							"self": "https://tappytaps2.atlassian.net/rest/api/2/issuetype/10100",
							"id": "10100",
							"description": "Functionality or a feature expressed as a user goal.",
							"iconUrl": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10315?size=medium",
							"name": "Story",
							"subtask": false,
							"avatarId": 10315,
							"hierarchyLevel": 0
						}
					}
				},
				"timespent": null,
				"sprint": {
					"id": 124,
					"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/sprint/124",
					"state": "active",
					"name": "Sprint Tučňák (Jindra)",
					"startDate": "2022-11-30T11:43:11.974Z",
					"endDate": "2022-12-19T13:38:00.000Z",
					"originBoardId": 1,
					"goal": "Dodělat základní Android verzi Camerita (ať synchronizujeme vývoj)"
				},
				"project": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/project/10000",
					"id": "10000",
					"key": "TM",
					"name": "TappyTaps development",
					"projectTypeKey": "software",
					"simplified": false,
					"avatarUrls": {
						"48x48": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324",
						"24x24": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=small",
						"16x16": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=xsmall",
						"32x32": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=medium"
					}
				},
				"fixVersions": [],
				"aggregatetimespent": null,
				"resolution": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/resolution/10000",
					"id": "10000",
					"description": "Work has been completed on this issue.",
					"name": "Done"
				},
				"customfield_10113": {
					"hasEpicLinkFieldDependency": false,
					"showField": false,
					"nonEditableReason": {
						"reason": "PLUGIN_LICENSE_ERROR",
						"message": "The Parent Link is only available to Jira Premium users."
					}
				},
				"customfield_10510": null,
				"customfield_10114": null,
				"customfield_10500": null,
				"customfield_10501": null,
				"customfield_10502": [],
				"customfield_10503": null,
				"customfield_10504": null,
				"customfield_10505": null,
				"resolutiondate": "2022-12-15T14:58:43.970+0100",
				"customfield_10506": null,
				"customfield_10507": null,
				"customfield_10508": null,
				"workratio": -1,
				"customfield_10509": null,
				"lastViewed": null,
				"issuerestriction": {
					"issuerestrictions": {},
					"shouldDisplay": false
				},
				"watches": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/TM-3622/watchers",
					"watchCount": 1,
					"isWatching": false
				},
				"created": "2022-10-20T14:32:34.721+0200",
				"epic": null,
				"customfield_10100": null,
				"priority": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/priority/3",
					"iconUrl": "https://tappytaps2.atlassian.net/images/icons/priorities/medium.svg",
					"name": "Medium",
					"id": "3"
				},
				"customfield_10101": "10000_*:*_1_*:*_4561500826_*|*_10002_*:*_1_*:*_282068495_*|*_10001_*:*_1_*:*_0",
				"customfield_10300": null,
				"customfield_10102": null,
				"labels": [],
				"timeestimate": null,
				"aggregatetimeoriginalestimate": null,
				"versions": [],
				"issuelinks": [],
				"assignee": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/user?accountId=557058%3A639f83e2-2814-4439-b805-3bc164b93999",
					"accountId": "557058:639f83e2-2814-4439-b805-3bc164b93999",
					"avatarUrls": {
						"48x48": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:639f83e2-2814-4439-b805-3bc164b93999/02863cb7-b09c-4894-ba6b-8ca717ea9055/48",
						"24x24": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:639f83e2-2814-4439-b805-3bc164b93999/02863cb7-b09c-4894-ba6b-8ca717ea9055/24",
						"16x16": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:639f83e2-2814-4439-b805-3bc164b93999/02863cb7-b09c-4894-ba6b-8ca717ea9055/16",
						"32x32": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:639f83e2-2814-4439-b805-3bc164b93999/02863cb7-b09c-4894-ba6b-8ca717ea9055/32"
					},
					"displayName": "Jiří Šimůnek",
					"active": true,
					"timeZone": "Europe/Prague",
					"accountType": "atlassian"
				},
				"updated": "2022-12-15T14:58:43.975+0100",
				"status": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/status/10001",
					"description": "",
					"iconUrl": "https://tappytaps2.atlassian.net/",
					"name": "Done",
					"id": "10001",
					"statusCategory": {
						"self": "https://tappytaps2.atlassian.net/rest/api/2/statuscategory/3",
						"id": 3,
						"key": "done",
						"colorName": "green",
						"name": "Done"
					}
				},
				"components": [],
				"timeoriginalestimate": null,
				"description": null,
				"timetracking": {},
				"customfield_10005": null,
				"security": null,
				"attachment": [],
				"aggregatetimeestimate": null,
				"flagged": false,
				"summary": "Android",
				"creator": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/user?accountId=557058%3A4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"accountId": "557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"avatarUrls": {
						"48x48": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/48",
						"24x24": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/24",
						"16x16": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/16",
						"32x32": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/32"
					},
					"displayName": "Jan Sarson",
					"active": true,
					"timeZone": "Europe/Prague",
					"accountType": "atlassian"
				},
				"subtasks": [],
				"reporter": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/user?accountId=557058%3A4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"accountId": "557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"avatarUrls": {
						"48x48": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/48",
						"24x24": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/24",
						"16x16": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/16",
						"32x32": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/32"
					},
					"displayName": "Jan Sarson",
					"active": true,
					"timeZone": "Europe/Prague",
					"accountType": "atlassian"
				},
				"aggregateprogress": {
					"progress": 0,
					"total": 0
				},
				"customfield_10001": null,
				"customfield_10200": null,
				"customfield_10201": null,
				"customfield_10400": null,
				"customfield_10511": null,
				"customfield_10115": [
					{
						"id": 124,
						"name": "Sprint Tučňák (Jindra)",
						"state": "active",
						"boardId": 1,
						"goal": "Dodělat základní Android verzi Camerita (ať synchronizujeme vývoj)",
						"startDate": "2022-11-30T11:43:11.974Z",
						"endDate": "2022-12-19T13:38:00.000Z"
					}
				],
				"customfield_10116": "0|i00xs5:",
				"customfield_10512": null,
				"customfield_10513": null,
				"environment": null,
				"duedate": null,
				"progress": {
					"progress": 0,
					"total": 0
				},
				"votes": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/TM-3622/votes",
					"votes": 0,
					"hasVoted": false
				},
				"comment": {
					"comments": [],
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/18471/comment",
					"maxResults": 0,
					"total": 0,
					"startAt": 0
				},
				"worklog": {
					"startAt": 0,
					"maxResults": 20,
					"total": 0,
					"worklogs": []
				}
			}
		},
		{
			"expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
			"id": "18472",
			"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/issue/18472",
			"key": "TM-3623",
			"fields": {
				"statuscategorychangedate": "2023-01-05T12:45:46.966+0100",
				"issuetype": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issuetype/10102",
					"id": "10102",
					"description": "A small piece of work that's part of a larger task.",
					"iconUrl": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10316?size=medium",
					"name": "Sub-task",
					"subtask": true,
					"avatarId": 10316,
					"hierarchyLevel": -1
				},
				"parent": {
					"id": "18457",
					"key": "TM-3608",
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/18457",
					"fields": {
						"summary": "Tlačítko manage subscription do account obazovky",
						"status": {
							"self": "https://tappytaps2.atlassian.net/rest/api/2/status/10001",
							"description": "",
							"iconUrl": "https://tappytaps2.atlassian.net/",
							"name": "Done",
							"id": "10001",
							"statusCategory": {
								"self": "https://tappytaps2.atlassian.net/rest/api/2/statuscategory/3",
								"id": 3,
								"key": "done",
								"colorName": "green",
								"name": "Done"
							}
						},
						"priority": {
							"self": "https://tappytaps2.atlassian.net/rest/api/2/priority/3",
							"iconUrl": "https://tappytaps2.atlassian.net/images/icons/priorities/medium.svg",
							"name": "Medium",
							"id": "3"
						},
						"issuetype": {
							"self": "https://tappytaps2.atlassian.net/rest/api/2/issuetype/10100",
							"id": "10100",
							"description": "Functionality or a feature expressed as a user goal.",
							"iconUrl": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10315?size=medium",
							"name": "Story",
							"subtask": false,
							"avatarId": 10315,
							"hierarchyLevel": 0
						}
					}
				},
				"timespent": null,
				"sprint": {
					"id": 124,
					"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/sprint/124",
					"state": "active",
					"name": "Sprint Tučňák (Jindra)",
					"startDate": "2022-11-30T11:43:11.974Z",
					"endDate": "2022-12-19T13:38:00.000Z",
					"originBoardId": 1,
					"goal": "Dodělat základní Android verzi Camerita (ať synchronizujeme vývoj)"
				},
				"project": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/project/10000",
					"id": "10000",
					"key": "TM",
					"name": "TappyTaps development",
					"projectTypeKey": "software",
					"simplified": false,
					"avatarUrls": {
						"48x48": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324",
						"24x24": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=small",
						"16x16": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=xsmall",
						"32x32": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=medium"
					}
				},
				"fixVersions": [],
				"aggregatetimespent": null,
				"resolution": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/resolution/10000",
					"id": "10000",
					"description": "Work has been completed on this issue.",
					"name": "Done"
				},
				"customfield_10113": {
					"hasEpicLinkFieldDependency": false,
					"showField": false,
					"nonEditableReason": {
						"reason": "PLUGIN_LICENSE_ERROR",
						"message": "The Parent Link is only available to Jira Premium users."
					}
				},
				"customfield_10114": null,
				"customfield_10510": null,
				"customfield_10500": null,
				"customfield_10501": null,
				"customfield_10502": [],
				"customfield_10503": null,
				"customfield_10504": null,
				"customfield_10505": null,
				"customfield_10506": null,
				"resolutiondate": "2023-01-05T12:45:46.961+0100",
				"customfield_10507": null,
				"customfield_10508": null,
				"workratio": -1,
				"customfield_10509": null,
				"lastViewed": null,
				"issuerestriction": {
					"issuerestrictions": {},
					"shouldDisplay": false
				},
				"watches": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/TM-3623/watchers",
					"watchCount": 1,
					"isWatching": false
				},
				"created": "2022-10-20T14:32:36.545+0200",
				"epic": null,
				"customfield_10100": null,
				"priority": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/priority/3",
					"iconUrl": "https://tappytaps2.atlassian.net/images/icons/priorities/medium.svg",
					"name": "Medium",
					"id": "3"
				},
				"customfield_10101": "10000_*:*_1_*:*_4578847472_*|*_10002_*:*_1_*:*_2071142976_*|*_10001_*:*_1_*:*_0",
				"customfield_10300": null,
				"customfield_10102": null,
				"labels": [],
				"aggregatetimeoriginalestimate": null,
				"timeestimate": null,
				"versions": [],
				"issuelinks": [],
				"assignee": null,
				"updated": "2023-01-05T12:45:46.966+0100",
				"status": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/status/10001",
					"description": "",
					"iconUrl": "https://tappytaps2.atlassian.net/",
					"name": "Done",
					"id": "10001",
					"statusCategory": {
						"self": "https://tappytaps2.atlassian.net/rest/api/2/statuscategory/3",
						"id": 3,
						"key": "done",
						"colorName": "green",
						"name": "Done"
					}
				},
				"components": [],
				"timeoriginalestimate": null,
				"description": null,
				"timetracking": {},
				"customfield_10005": null,
				"security": null,
				"attachment": [],
				"aggregatetimeestimate": null,
				"flagged": false,
				"summary": "iOS",
				"creator": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/user?accountId=557058%3A4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"accountId": "557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"avatarUrls": {
						"48x48": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/48",
						"24x24": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/24",
						"16x16": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/16",
						"32x32": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/32"
					},
					"displayName": "Jan Sarson",
					"active": true,
					"timeZone": "Europe/Prague",
					"accountType": "atlassian"
				},
				"subtasks": [],
				"reporter": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/user?accountId=557058%3A4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"accountId": "557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"avatarUrls": {
						"48x48": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/48",
						"24x24": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/24",
						"16x16": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/16",
						"32x32": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/32"
					},
					"displayName": "Jan Sarson",
					"active": true,
					"timeZone": "Europe/Prague",
					"accountType": "atlassian"
				},
				"aggregateprogress": {
					"progress": 0,
					"total": 0
				},
				"customfield_10001": null,
				"customfield_10200": null,
				"customfield_10201": null,
				"customfield_10400": null,
				"customfield_10511": null,
				"customfield_10115": [
					{
						"id": 124,
						"name": "Sprint Tučňák (Jindra)",
						"state": "active",
						"boardId": 1,
						"goal": "Dodělat základní Android verzi Camerita (ať synchronizujeme vývoj)",
						"startDate": "2022-11-30T11:43:11.974Z",
						"endDate": "2022-12-19T13:38:00.000Z"
					}
				],
				"customfield_10512": null,
				"customfield_10116": "0|i00xsd:",
				"environment": null,
				"customfield_10513": null,
				"duedate": null,
				"progress": {
					"progress": 0,
					"total": 0
				},
				"votes": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/TM-3623/votes",
					"votes": 0,
					"hasVoted": false
				},
				"comment": {
					"comments": [],
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/18472/comment",
					"maxResults": 0,
					"total": 0,
					"startAt": 0
				},
				"worklog": {
					"startAt": 0,
					"maxResults": 20,
					"total": 0,
					"worklogs": []
				}
			}
		},
		{
			"expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
			"id": "18473",
			"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/issue/18473",
			"key": "TM-3624",
			"fields": {
				"statuscategorychangedate": "2022-12-19T07:45:40.723+0100",
				"issuetype": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issuetype/10102",
					"id": "10102",
					"description": "A small piece of work that's part of a larger task.",
					"iconUrl": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10316?size=medium",
					"name": "Sub-task",
					"subtask": true,
					"avatarId": 10316,
					"hierarchyLevel": -1
				},
				"parent": {
					"id": "18457",
					"key": "TM-3608",
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/18457",
					"fields": {
						"summary": "Tlačítko manage subscription do account obazovky",
						"status": {
							"self": "https://tappytaps2.atlassian.net/rest/api/2/status/10001",
							"description": "",
							"iconUrl": "https://tappytaps2.atlassian.net/",
							"name": "Done",
							"id": "10001",
							"statusCategory": {
								"self": "https://tappytaps2.atlassian.net/rest/api/2/statuscategory/3",
								"id": 3,
								"key": "done",
								"colorName": "green",
								"name": "Done"
							}
						},
						"priority": {
							"self": "https://tappytaps2.atlassian.net/rest/api/2/priority/3",
							"iconUrl": "https://tappytaps2.atlassian.net/images/icons/priorities/medium.svg",
							"name": "Medium",
							"id": "3"
						},
						"issuetype": {
							"self": "https://tappytaps2.atlassian.net/rest/api/2/issuetype/10100",
							"id": "10100",
							"description": "Functionality or a feature expressed as a user goal.",
							"iconUrl": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10315?size=medium",
							"name": "Story",
							"subtask": false,
							"avatarId": 10315,
							"hierarchyLevel": 0
						}
					}
				},
				"timespent": null,
				"sprint": {
					"id": 124,
					"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/sprint/124",
					"state": "active",
					"name": "Sprint Tučňák (Jindra)",
					"startDate": "2022-11-30T11:43:11.974Z",
					"endDate": "2022-12-19T13:38:00.000Z",
					"originBoardId": 1,
					"goal": "Dodělat základní Android verzi Camerita (ať synchronizujeme vývoj)"
				},
				"project": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/project/10000",
					"id": "10000",
					"key": "TM",
					"name": "TappyTaps development",
					"projectTypeKey": "software",
					"simplified": false,
					"avatarUrls": {
						"48x48": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324",
						"24x24": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=small",
						"16x16": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=xsmall",
						"32x32": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=medium"
					}
				},
				"fixVersions": [],
				"aggregatetimespent": null,
				"resolution": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/resolution/10000",
					"id": "10000",
					"description": "Work has been completed on this issue.",
					"name": "Done"
				},
				"customfield_10113": {
					"hasEpicLinkFieldDependency": false,
					"showField": false,
					"nonEditableReason": {
						"reason": "PLUGIN_LICENSE_ERROR",
						"message": "The Parent Link is only available to Jira Premium users."
					}
				},
				"customfield_10114": null,
				"customfield_10510": null,
				"customfield_10500": null,
				"customfield_10501": null,
				"customfield_10502": [],
				"customfield_10503": null,
				"customfield_10504": null,
				"customfield_10505": null,
				"customfield_10506": null,
				"resolutiondate": "2022-12-19T07:45:40.717+0100",
				"customfield_10507": null,
				"customfield_10508": null,
				"customfield_10509": null,
				"workratio": -1,
				"watches": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/TM-3624/watchers",
					"watchCount": 1,
					"isWatching": false
				},
				"issuerestriction": {
					"issuerestrictions": {},
					"shouldDisplay": false
				},
				"lastViewed": null,
				"created": "2022-10-20T14:32:37.776+0200",
				"epic": null,
				"priority": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/priority/3",
					"iconUrl": "https://tappytaps2.atlassian.net/images/icons/priorities/medium.svg",
					"name": "Medium",
					"id": "3"
				},
				"customfield_10100": null,
				"customfield_10101": "10000_*:*_1_*:*_4841084868_*|*_10002_*:*_1_*:*_322098132_*|*_10001_*:*_1_*:*_0",
				"customfield_10300": null,
				"customfield_10102": null,
				"labels": [],
				"aggregatetimeoriginalestimate": null,
				"timeestimate": null,
				"versions": [],
				"issuelinks": [],
				"assignee": null,
				"updated": "2022-12-19T07:45:40.723+0100",
				"status": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/status/10001",
					"description": "",
					"iconUrl": "https://tappytaps2.atlassian.net/",
					"name": "Done",
					"id": "10001",
					"statusCategory": {
						"self": "https://tappytaps2.atlassian.net/rest/api/2/statuscategory/3",
						"id": 3,
						"key": "done",
						"colorName": "green",
						"name": "Done"
					}
				},
				"components": [],
				"timeoriginalestimate": null,
				"description": null,
				"timetracking": {},
				"customfield_10005": null,
				"security": null,
				"attachment": [],
				"aggregatetimeestimate": null,
				"flagged": false,
				"summary": "Desktop",
				"creator": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/user?accountId=557058%3A4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"accountId": "557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"avatarUrls": {
						"48x48": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/48",
						"24x24": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/24",
						"16x16": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/16",
						"32x32": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/32"
					},
					"displayName": "Jan Sarson",
					"active": true,
					"timeZone": "Europe/Prague",
					"accountType": "atlassian"
				},
				"subtasks": [],
				"reporter": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/user?accountId=557058%3A4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"accountId": "557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"avatarUrls": {
						"48x48": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/48",
						"24x24": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/24",
						"16x16": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/16",
						"32x32": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/32"
					},
					"displayName": "Jan Sarson",
					"active": true,
					"timeZone": "Europe/Prague",
					"accountType": "atlassian"
				},
				"aggregateprogress": {
					"progress": 0,
					"total": 0
				},
				"customfield_10001": null,
				"customfield_10200": null,
				"customfield_10201": null,
				"customfield_10400": null,
				"customfield_10115": [
					{
						"id": 124,
						"name": "Sprint Tučňák (Jindra)",
						"state": "active",
						"boardId": 1,
						"goal": "Dodělat základní Android verzi Camerita (ať synchronizujeme vývoj)",
						"startDate": "2022-11-30T11:43:11.974Z",
						"endDate": "2022-12-19T13:38:00.000Z"
					}
				],
				"customfield_10511": null,
				"customfield_10116": "0|i00xsl:",
				"customfield_10512": null,
				"customfield_10513": null,
				"environment": null,
				"duedate": null,
				"progress": {
					"progress": 0,
					"total": 0
				},
				"votes": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/TM-3624/votes",
					"votes": 0,
					"hasVoted": false
				},
				"comment": {
					"comments": [],
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/18473/comment",
					"maxResults": 0,
					"total": 0,
					"startAt": 0
				},
				"worklog": {
					"startAt": 0,
					"maxResults": 20,
					"total": 0,
					"worklogs": []
				}
			}
		},
		{
			"expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
			"id": "18461",
			"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/issue/18461",
			"key": "TM-3612",
			"fields": {
				"statuscategorychangedate": "2023-01-05T12:44:56.298+0100",
				"issuetype": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issuetype/10100",
					"id": "10100",
					"description": "Functionality or a feature expressed as a user goal.",
					"iconUrl": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10315?size=medium",
					"name": "Story",
					"subtask": false,
					"avatarId": 10315,
					"hierarchyLevel": 0
				},
				"timespent": null,
				"sprint": {
					"id": 124,
					"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/sprint/124",
					"state": "active",
					"name": "Sprint Tučňák (Jindra)",
					"startDate": "2022-11-30T11:43:11.974Z",
					"endDate": "2022-12-19T13:38:00.000Z",
					"originBoardId": 1,
					"goal": "Dodělat základní Android verzi Camerita (ať synchronizujeme vývoj)"
				},
				"project": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/project/10000",
					"id": "10000",
					"key": "TM",
					"name": "TappyTaps development",
					"projectTypeKey": "software",
					"simplified": false,
					"avatarUrls": {
						"48x48": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324",
						"24x24": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=small",
						"16x16": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=xsmall",
						"32x32": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=medium"
					}
				},
				"fixVersions": [],
				"aggregatetimespent": null,
				"resolution": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/resolution/10000",
					"id": "10000",
					"description": "Work has been completed on this issue.",
					"name": "Done"
				},
				"customfield_10113": {
					"hasEpicLinkFieldDependency": false,
					"showField": false,
					"nonEditableReason": {
						"reason": "PLUGIN_LICENSE_ERROR",
						"message": "The Parent Link is only available to Jira Premium users."
					}
				},
				"customfield_10114": null,
				"customfield_10510": null,
				"customfield_10500": null,
				"customfield_10501": null,
				"customfield_10502": [],
				"customfield_10503": null,
				"customfield_10504": null,
				"customfield_10505": null,
				"resolutiondate": "2023-01-05T12:44:56.294+0100",
				"customfield_10506": null,
				"customfield_10507": null,
				"customfield_10508": null,
				"workratio": -1,
				"customfield_10509": null,
				"lastViewed": null,
				"watches": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/TM-3612/watchers",
					"watchCount": 1,
					"isWatching": false
				},
				"issuerestriction": {
					"issuerestrictions": {},
					"shouldDisplay": false
				},
				"created": "2022-10-19T16:25:01.251+0200",
				"epic": null,
				"customfield_10100": null,
				"priority": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/priority/3",
					"iconUrl": "https://tappytaps2.atlassian.net/images/icons/priorities/medium.svg",
					"name": "Medium",
					"id": "3"
				},
				"customfield_10101": "3_*:*_1_*:*_176766835_*|*_10000_*:*_1_*:*_4658672735_*|*_10002_*:*_1_*:*_1894155495_*|*_10001_*:*_1_*:*_0",
				"customfield_10102": null,
				"customfield_10300": null,
				"labels": [],
				"timeestimate": null,
				"aggregatetimeoriginalestimate": null,
				"versions": [],
				"issuelinks": [],
				"assignee": null,
				"updated": "2023-01-05T12:44:56.298+0100",
				"status": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/status/10001",
					"description": "",
					"iconUrl": "https://tappytaps2.atlassian.net/",
					"name": "Done",
					"id": "10001",
					"statusCategory": {
						"self": "https://tappytaps2.atlassian.net/rest/api/2/statuscategory/3",
						"id": 3,
						"key": "done",
						"colorName": "green",
						"name": "Done"
					}
				},
				"components": [],
				"timeoriginalestimate": null,
				"description": "_Jako uživatel chci vidět video preview jako animovaný obrázek, aniž bych musel dané video rozklikávat, či pouštět._\n\n* testovací implementace pouze na iOS\n* upravit upload server (generování animovaného videa)\n** budeme generovat rovnou jako jpg, tak “trhané video“\n** ffmpeg -i test.mp4 -vf \"fps=6,setpts=0.1*PTS,scale=320:-1\" -loop 0 test-video.webp\n*** lepší dopočítat abychom měli vždy video, které bude obsahovat třeba 12 framů (a rozloží se to v čase celého video)\n** iOS: [https://github.com/SDWebImage|https://github.com/SDWebImage|smart-link] a [https://github.com/SDWebImage/SDWebImageWebPCoder|https://github.com/SDWebImage/SDWebImageWebPCoder|smart-link] (podpora pro starší verze iOS)\nSDWebImage\nSDWebImage has 40 repositories available. Follow their code on GitHub.\n* v GUI v activity logu zobrazovat animovaný soubor, pokud je k dispozici\n* vyzkoušet, zda dokážeme použít v notifikaci\n** cílem je mít animaci v notifikaci",
				"timetracking": {},
				"customfield_10005": null,
				"security": null,
				"attachment": [],
				"aggregatetimeestimate": null,
				"flagged": false,
				"summary": "Activity log s pohyblivým obrázkem iOS",
				"creator": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/user?accountId=557058%3A4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"accountId": "557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"avatarUrls": {
						"48x48": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/48",
						"24x24": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/24",
						"16x16": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/16",
						"32x32": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/32"
					},
					"displayName": "Jan Sarson",
					"active": true,
					"timeZone": "Europe/Prague",
					"accountType": "atlassian"
				},
				"subtasks": [],
				"reporter": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/user?accountId=557058%3A4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"accountId": "557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"avatarUrls": {
						"48x48": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/48",
						"24x24": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/24",
						"16x16": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/16",
						"32x32": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/32"
					},
					"displayName": "Jan Sarson",
					"active": true,
					"timeZone": "Europe/Prague",
					"accountType": "atlassian"
				},
				"aggregateprogress": {
					"progress": 0,
					"total": 0
				},
				"customfield_10001": null,
				"customfield_10200": null,
				"customfield_10201": null,
				"customfield_10400": null,
				"customfield_10511": null,
				"customfield_10115": [
					{
						"id": 124,
						"name": "Sprint Tučňák (Jindra)",
						"state": "active",
						"boardId": 1,
						"goal": "Dodělat základní Android verzi Camerita (ať synchronizujeme vývoj)",
						"startDate": "2022-11-30T11:43:11.974Z",
						"endDate": "2022-12-19T13:38:00.000Z"
					}
				],
				"customfield_10512": null,
				"customfield_10116": "0|i00xkh:",
				"environment": null,
				"customfield_10513": null,
				"customfield_10117": 2.0,
				"duedate": null,
				"progress": {
					"progress": 0,
					"total": 0
				},
				"votes": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/TM-3612/votes",
					"votes": 0,
					"hasVoted": false
				},
				"comment": {
					"comments": [],
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/18461/comment",
					"maxResults": 0,
					"total": 0,
					"startAt": 0
				},
				"worklog": {
					"startAt": 0,
					"maxResults": 20,
					"total": 0,
					"worklogs": []
				}
			}
		},
		{
			"expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
			"id": "18399",
			"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/issue/18399",
			"key": "TM-3550",
			"fields": {
				"statuscategorychangedate": "2022-12-15T14:58:59.939+0100",
				"issuetype": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issuetype/10100",
					"id": "10100",
					"description": "Functionality or a feature expressed as a user goal.",
					"iconUrl": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10315?size=medium",
					"name": "Story",
					"subtask": false,
					"avatarId": 10315,
					"hierarchyLevel": 0
				},
				"timespent": null,
				"sprint": {
					"id": 124,
					"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/sprint/124",
					"state": "active",
					"name": "Sprint Tučňák (Jindra)",
					"startDate": "2022-11-30T11:43:11.974Z",
					"endDate": "2022-12-19T13:38:00.000Z",
					"originBoardId": 1,
					"goal": "Dodělat základní Android verzi Camerita (ať synchronizujeme vývoj)"
				},
				"project": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/project/10000",
					"id": "10000",
					"key": "TM",
					"name": "TappyTaps development",
					"projectTypeKey": "software",
					"simplified": false,
					"avatarUrls": {
						"48x48": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324",
						"24x24": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=small",
						"16x16": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=xsmall",
						"32x32": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=medium"
					}
				},
				"fixVersions": [],
				"aggregatetimespent": null,
				"resolution": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/resolution/10000",
					"id": "10000",
					"description": "Work has been completed on this issue.",
					"name": "Done"
				},
				"customfield_10113": {
					"hasEpicLinkFieldDependency": false,
					"showField": false,
					"nonEditableReason": {
						"reason": "PLUGIN_LICENSE_ERROR",
						"message": "The Parent Link is only available to Jira Premium users."
					}
				},
				"customfield_10114": null,
				"customfield_10510": null,
				"customfield_10500": null,
				"customfield_10501": null,
				"customfield_10502": [],
				"customfield_10503": null,
				"customfield_10504": null,
				"customfield_10505": null,
				"resolutiondate": "2022-12-15T14:58:59.936+0100",
				"customfield_10506": null,
				"customfield_10507": null,
				"customfield_10508": null,
				"workratio": -1,
				"customfield_10509": null,
				"issuerestriction": {
					"issuerestrictions": {},
					"shouldDisplay": false
				},
				"watches": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/TM-3550/watchers",
					"watchCount": 1,
					"isWatching": false
				},
				"lastViewed": null,
				"created": "2022-06-29T13:11:45.648+0200",
				"epic": null,
				"priority": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/priority/3",
					"iconUrl": "https://tappytaps2.atlassian.net/images/icons/priorities/medium.svg",
					"name": "Medium",
					"id": "3"
				},
				"customfield_10100": null,
				"customfield_10101": "10000_*:*_1_*:*_14611634309_*|*_10001_*:*_1_*:*_0",
				"customfield_10102": null,
				"customfield_10300": null,
				"labels": [],
				"timeestimate": null,
				"aggregatetimeoriginalestimate": null,
				"versions": [],
				"issuelinks": [],
				"assignee": null,
				"updated": "2022-12-15T14:58:59.939+0100",
				"status": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/status/10001",
					"description": "",
					"iconUrl": "https://tappytaps2.atlassian.net/",
					"name": "Done",
					"id": "10001",
					"statusCategory": {
						"self": "https://tappytaps2.atlassian.net/rest/api/2/statuscategory/3",
						"id": 3,
						"key": "done",
						"colorName": "green",
						"name": "Done"
					}
				},
				"components": [],
				"timeoriginalestimate": null,
				"description": "* pro všechny aplikace Camerito, Barkio, Bibino\n** asi bude potřeba vyřešit na naši cloudcode funkci pro login\n\n* historie přihlášení (aplikace, web, desktop) \n** uživatel, ip adresa, lokace, zařízení (přip. webový prohlížeč), čas, prostě maximum co známe\n* mělo by se zapojit do cloudcode funkce na přihlášení (jsou 2 webová a normální)\n* nelogujeme anonymní account a párování\n\n\n\n* zobrazení i v kukátku\n** zobrazit kompletní historii",
				"timetracking": {},
				"customfield_10005": null,
				"security": null,
				"aggregatetimeestimate": null,
				"attachment": [],
				"flagged": false,
				"summary": "Logování přihlášení uživatelů včetně historie",
				"creator": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/user?accountId=557058%3A4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"accountId": "557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"avatarUrls": {
						"48x48": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/48",
						"24x24": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/24",
						"16x16": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/16",
						"32x32": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/32"
					},
					"displayName": "Jan Sarson",
					"active": true,
					"timeZone": "Europe/Prague",
					"accountType": "atlassian"
				},
				"subtasks": [
					{
						"id": "18426",
						"key": "TM-3577",
						"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/18426",
						"fields": {
							"summary": "Backend",
							"status": {
								"self": "https://tappytaps2.atlassian.net/rest/api/2/status/10001",
								"description": "",
								"iconUrl": "https://tappytaps2.atlassian.net/",
								"name": "Done",
								"id": "10001",
								"statusCategory": {
									"self": "https://tappytaps2.atlassian.net/rest/api/2/statuscategory/3",
									"id": 3,
									"key": "done",
									"colorName": "green",
									"name": "Done"
								}
							},
							"priority": {
								"self": "https://tappytaps2.atlassian.net/rest/api/2/priority/3",
								"iconUrl": "https://tappytaps2.atlassian.net/images/icons/priorities/medium.svg",
								"name": "Medium",
								"id": "3"
							},
							"issuetype": {
								"self": "https://tappytaps2.atlassian.net/rest/api/2/issuetype/10102",
								"id": "10102",
								"description": "A small piece of work that's part of a larger task.",
								"iconUrl": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10316?size=medium",
								"name": "Sub-task",
								"subtask": true,
								"avatarId": 10316,
								"hierarchyLevel": -1
							}
						}
					},
					{
						"id": "18427",
						"key": "TM-3578",
						"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/18427",
						"fields": {
							"summary": "Kukátko",
							"status": {
								"self": "https://tappytaps2.atlassian.net/rest/api/2/status/10001",
								"description": "",
								"iconUrl": "https://tappytaps2.atlassian.net/",
								"name": "Done",
								"id": "10001",
								"statusCategory": {
									"self": "https://tappytaps2.atlassian.net/rest/api/2/statuscategory/3",
									"id": 3,
									"key": "done",
									"colorName": "green",
									"name": "Done"
								}
							},
							"priority": {
								"self": "https://tappytaps2.atlassian.net/rest/api/2/priority/3",
								"iconUrl": "https://tappytaps2.atlassian.net/images/icons/priorities/medium.svg",
								"name": "Medium",
								"id": "3"
							},
							"issuetype": {
								"self": "https://tappytaps2.atlassian.net/rest/api/2/issuetype/10102",
								"id": "10102",
								"description": "A small piece of work that's part of a larger task.",
								"iconUrl": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10316?size=medium",
								"name": "Sub-task",
								"subtask": true,
								"avatarId": 10316,
								"hierarchyLevel": -1
							}
						}
					}
				],
				"reporter": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/user?accountId=557058%3A4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"accountId": "557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"avatarUrls": {
						"48x48": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/48",
						"24x24": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/24",
						"16x16": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/16",
						"32x32": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/32"
					},
					"displayName": "Jan Sarson",
					"active": true,
					"timeZone": "Europe/Prague",
					"accountType": "atlassian"
				},
				"aggregateprogress": {
					"progress": 0,
					"total": 0
				},
				"customfield_10001": null,
				"customfield_10200": null,
				"customfield_10201": null,
				"customfield_10400": null,
				"customfield_10511": null,
				"customfield_10115": [
					{
						"id": 122,
						"name": "Sprint Rákosníček (Jindra)",
						"state": "closed",
						"boardId": 1,
						"goal": "Low light mode & Základní verze Camerito",
						"startDate": "2022-08-01T13:02:50.729Z",
						"endDate": "2022-09-05T12:32:00.000Z",
						"completeDate": "2022-10-20T11:32:45.838Z"
					},
					{
						"id": 124,
						"name": "Sprint Tučňák (Jindra)",
						"state": "active",
						"boardId": 1,
						"goal": "Dodělat základní Android verzi Camerita (ať synchronizujeme vývoj)",
						"startDate": "2022-11-30T11:43:11.974Z",
						"endDate": "2022-12-19T13:38:00.000Z"
					}
				],
				"customfield_10116": "0|i00xki:",
				"customfield_10512": null,
				"environment": null,
				"customfield_10513": null,
				"customfield_10117": 1.0,
				"duedate": null,
				"closedSprints": [
					{
						"id": 122,
						"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/sprint/122",
						"state": "closed",
						"name": "Sprint Rákosníček (Jindra)",
						"startDate": "2022-08-01T13:02:50.729Z",
						"endDate": "2022-09-05T12:32:00.000Z",
						"completeDate": "2022-10-20T11:32:45.838Z",
						"originBoardId": 1,
						"goal": "Low light mode & Základní verze Camerito"
					}
				],
				"progress": {
					"progress": 0,
					"total": 0
				},
				"votes": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/TM-3550/votes",
					"votes": 0,
					"hasVoted": false
				},
				"comment": {
					"comments": [],
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/18399/comment",
					"maxResults": 0,
					"total": 0,
					"startAt": 0
				},
				"worklog": {
					"startAt": 0,
					"maxResults": 20,
					"total": 0,
					"worklogs": []
				}
			}
		},
		{
			"expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
			"id": "18426",
			"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/issue/18426",
			"key": "TM-3577",
			"fields": {
				"statuscategorychangedate": "2022-12-15T14:58:53.548+0100",
				"issuetype": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issuetype/10102",
					"id": "10102",
					"description": "A small piece of work that's part of a larger task.",
					"iconUrl": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10316?size=medium",
					"name": "Sub-task",
					"subtask": true,
					"avatarId": 10316,
					"hierarchyLevel": -1
				},
				"parent": {
					"id": "18399",
					"key": "TM-3550",
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/18399",
					"fields": {
						"summary": "Logování přihlášení uživatelů včetně historie",
						"status": {
							"self": "https://tappytaps2.atlassian.net/rest/api/2/status/10001",
							"description": "",
							"iconUrl": "https://tappytaps2.atlassian.net/",
							"name": "Done",
							"id": "10001",
							"statusCategory": {
								"self": "https://tappytaps2.atlassian.net/rest/api/2/statuscategory/3",
								"id": 3,
								"key": "done",
								"colorName": "green",
								"name": "Done"
							}
						},
						"priority": {
							"self": "https://tappytaps2.atlassian.net/rest/api/2/priority/3",
							"iconUrl": "https://tappytaps2.atlassian.net/images/icons/priorities/medium.svg",
							"name": "Medium",
							"id": "3"
						},
						"issuetype": {
							"self": "https://tappytaps2.atlassian.net/rest/api/2/issuetype/10100",
							"id": "10100",
							"description": "Functionality or a feature expressed as a user goal.",
							"iconUrl": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10315?size=medium",
							"name": "Story",
							"subtask": false,
							"avatarId": 10315,
							"hierarchyLevel": 0
						}
					}
				},
				"timespent": null,
				"sprint": {
					"id": 124,
					"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/sprint/124",
					"state": "active",
					"name": "Sprint Tučňák (Jindra)",
					"startDate": "2022-11-30T11:43:11.974Z",
					"endDate": "2022-12-19T13:38:00.000Z",
					"originBoardId": 1,
					"goal": "Dodělat základní Android verzi Camerita (ať synchronizujeme vývoj)"
				},
				"project": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/project/10000",
					"id": "10000",
					"key": "TM",
					"name": "TappyTaps development",
					"projectTypeKey": "software",
					"simplified": false,
					"avatarUrls": {
						"48x48": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324",
						"24x24": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=small",
						"16x16": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=xsmall",
						"32x32": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=medium"
					}
				},
				"fixVersions": [],
				"aggregatetimespent": null,
				"resolution": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/resolution/10000",
					"id": "10000",
					"description": "Work has been completed on this issue.",
					"name": "Done"
				},
				"customfield_10113": {
					"hasEpicLinkFieldDependency": false,
					"showField": false,
					"nonEditableReason": {
						"reason": "PLUGIN_LICENSE_ERROR",
						"message": "The Parent Link is only available to Jira Premium users."
					}
				},
				"customfield_10510": null,
				"customfield_10114": null,
				"customfield_10500": null,
				"customfield_10501": null,
				"customfield_10502": [],
				"customfield_10503": null,
				"customfield_10504": null,
				"customfield_10505": null,
				"resolutiondate": "2022-12-15T14:58:53.545+0100",
				"customfield_10506": null,
				"customfield_10507": null,
				"customfield_10508": null,
				"workratio": -1,
				"customfield_10509": null,
				"watches": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/TM-3577/watchers",
					"watchCount": 1,
					"isWatching": false
				},
				"lastViewed": null,
				"issuerestriction": {
					"issuerestrictions": {},
					"shouldDisplay": false
				},
				"created": "2022-07-28T15:17:49.471+0200",
				"epic": null,
				"customfield_10100": null,
				"priority": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/priority/3",
					"iconUrl": "https://tappytaps2.atlassian.net/images/icons/priorities/medium.svg",
					"name": "Medium",
					"id": "3"
				},
				"customfield_10101": "3_*:*_1_*:*_25049524_*|*_10000_*:*_1_*:*_11388694703_*|*_10002_*:*_1_*:*_684719868_*|*_10001_*:*_1_*:*_0",
				"customfield_10102": null,
				"customfield_10300": null,
				"labels": [],
				"timeestimate": null,
				"aggregatetimeoriginalestimate": null,
				"versions": [],
				"issuelinks": [],
				"assignee": null,
				"updated": "2022-12-15T14:58:53.548+0100",
				"status": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/status/10001",
					"description": "",
					"iconUrl": "https://tappytaps2.atlassian.net/",
					"name": "Done",
					"id": "10001",
					"statusCategory": {
						"self": "https://tappytaps2.atlassian.net/rest/api/2/statuscategory/3",
						"id": 3,
						"key": "done",
						"colorName": "green",
						"name": "Done"
					}
				},
				"components": [],
				"timeoriginalestimate": null,
				"description": null,
				"timetracking": {},
				"customfield_10005": null,
				"security": null,
				"attachment": [],
				"aggregatetimeestimate": null,
				"flagged": false,
				"summary": "Backend",
				"creator": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/user?accountId=557058%3A4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"accountId": "557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"avatarUrls": {
						"48x48": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/48",
						"24x24": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/24",
						"16x16": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/16",
						"32x32": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/32"
					},
					"displayName": "Jan Sarson",
					"active": true,
					"timeZone": "Europe/Prague",
					"accountType": "atlassian"
				},
				"subtasks": [],
				"reporter": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/user?accountId=557058%3A4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"accountId": "557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"avatarUrls": {
						"48x48": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/48",
						"24x24": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/24",
						"16x16": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/16",
						"32x32": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/32"
					},
					"displayName": "Jan Sarson",
					"active": true,
					"timeZone": "Europe/Prague",
					"accountType": "atlassian"
				},
				"aggregateprogress": {
					"progress": 0,
					"total": 0
				},
				"customfield_10001": null,
				"customfield_10200": null,
				"customfield_10201": null,
				"customfield_10400": null,
				"customfield_10511": null,
				"customfield_10115": [
					{
						"id": 122,
						"name": "Sprint Rákosníček (Jindra)",
						"state": "closed",
						"boardId": 1,
						"goal": "Low light mode & Základní verze Camerito",
						"startDate": "2022-08-01T13:02:50.729Z",
						"endDate": "2022-09-05T12:32:00.000Z",
						"completeDate": "2022-10-20T11:32:45.838Z"
					},
					{
						"id": 124,
						"name": "Sprint Tučňák (Jindra)",
						"state": "active",
						"boardId": 1,
						"goal": "Dodělat základní Android verzi Camerita (ať synchronizujeme vývoj)",
						"startDate": "2022-11-30T11:43:11.974Z",
						"endDate": "2022-12-19T13:38:00.000Z"
					}
				],
				"customfield_10116": "0|i00xh1:",
				"customfield_10512": null,
				"customfield_10513": null,
				"environment": null,
				"duedate": null,
				"closedSprints": [
					{
						"id": 122,
						"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/sprint/122",
						"state": "closed",
						"name": "Sprint Rákosníček (Jindra)",
						"startDate": "2022-08-01T13:02:50.729Z",
						"endDate": "2022-09-05T12:32:00.000Z",
						"completeDate": "2022-10-20T11:32:45.838Z",
						"originBoardId": 1,
						"goal": "Low light mode & Základní verze Camerito"
					}
				],
				"progress": {
					"progress": 0,
					"total": 0
				},
				"votes": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/TM-3577/votes",
					"votes": 0,
					"hasVoted": false
				},
				"comment": {
					"comments": [],
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/18426/comment",
					"maxResults": 0,
					"total": 0,
					"startAt": 0
				},
				"worklog": {
					"startAt": 0,
					"maxResults": 20,
					"total": 0,
					"worklogs": []
				}
			}
		},
		{
			"expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
			"id": "18427",
			"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/issue/18427",
			"key": "TM-3578",
			"fields": {
				"statuscategorychangedate": "2022-12-15T14:58:57.728+0100",
				"issuetype": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issuetype/10102",
					"id": "10102",
					"description": "A small piece of work that's part of a larger task.",
					"iconUrl": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10316?size=medium",
					"name": "Sub-task",
					"subtask": true,
					"avatarId": 10316,
					"hierarchyLevel": -1
				},
				"parent": {
					"id": "18399",
					"key": "TM-3550",
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/18399",
					"fields": {
						"summary": "Logování přihlášení uživatelů včetně historie",
						"status": {
							"self": "https://tappytaps2.atlassian.net/rest/api/2/status/10001",
							"description": "",
							"iconUrl": "https://tappytaps2.atlassian.net/",
							"name": "Done",
							"id": "10001",
							"statusCategory": {
								"self": "https://tappytaps2.atlassian.net/rest/api/2/statuscategory/3",
								"id": 3,
								"key": "done",
								"colorName": "green",
								"name": "Done"
							}
						},
						"priority": {
							"self": "https://tappytaps2.atlassian.net/rest/api/2/priority/3",
							"iconUrl": "https://tappytaps2.atlassian.net/images/icons/priorities/medium.svg",
							"name": "Medium",
							"id": "3"
						},
						"issuetype": {
							"self": "https://tappytaps2.atlassian.net/rest/api/2/issuetype/10100",
							"id": "10100",
							"description": "Functionality or a feature expressed as a user goal.",
							"iconUrl": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10315?size=medium",
							"name": "Story",
							"subtask": false,
							"avatarId": 10315,
							"hierarchyLevel": 0
						}
					}
				},
				"timespent": null,
				"sprint": {
					"id": 124,
					"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/sprint/124",
					"state": "active",
					"name": "Sprint Tučňák (Jindra)",
					"startDate": "2022-11-30T11:43:11.974Z",
					"endDate": "2022-12-19T13:38:00.000Z",
					"originBoardId": 1,
					"goal": "Dodělat základní Android verzi Camerita (ať synchronizujeme vývoj)"
				},
				"project": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/project/10000",
					"id": "10000",
					"key": "TM",
					"name": "TappyTaps development",
					"projectTypeKey": "software",
					"simplified": false,
					"avatarUrls": {
						"48x48": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324",
						"24x24": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=small",
						"16x16": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=xsmall",
						"32x32": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=medium"
					}
				},
				"fixVersions": [],
				"aggregatetimespent": null,
				"resolution": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/resolution/10000",
					"id": "10000",
					"description": "Work has been completed on this issue.",
					"name": "Done"
				},
				"customfield_10113": {
					"hasEpicLinkFieldDependency": false,
					"showField": false,
					"nonEditableReason": {
						"reason": "PLUGIN_LICENSE_ERROR",
						"message": "The Parent Link is only available to Jira Premium users."
					}
				},
				"customfield_10114": null,
				"customfield_10510": null,
				"customfield_10500": null,
				"customfield_10501": null,
				"customfield_10502": [],
				"customfield_10503": null,
				"customfield_10504": null,
				"customfield_10505": null,
				"customfield_10506": null,
				"resolutiondate": "2022-12-15T14:58:57.725+0100",
				"customfield_10507": null,
				"customfield_10508": null,
				"workratio": -1,
				"customfield_10509": null,
				"issuerestriction": {
					"issuerestrictions": {},
					"shouldDisplay": false
				},
				"watches": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/TM-3578/watchers",
					"watchCount": 1,
					"isWatching": false
				},
				"lastViewed": null,
				"created": "2022-07-28T15:17:53.063+0200",
				"epic": null,
				"customfield_10100": null,
				"priority": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/priority/3",
					"iconUrl": "https://tappytaps2.atlassian.net/images/icons/priorities/medium.svg",
					"name": "Medium",
					"id": "3"
				},
				"customfield_10101": "3_*:*_1_*:*_10934177_*|*_10000_*:*_1_*:*_11989980884_*|*_10002_*:*_1_*:*_97549621_*|*_10001_*:*_1_*:*_0",
				"customfield_10300": null,
				"customfield_10102": null,
				"labels": [],
				"aggregatetimeoriginalestimate": null,
				"timeestimate": null,
				"versions": [],
				"issuelinks": [],
				"assignee": null,
				"updated": "2022-12-15T14:58:57.728+0100",
				"status": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/status/10001",
					"description": "",
					"iconUrl": "https://tappytaps2.atlassian.net/",
					"name": "Done",
					"id": "10001",
					"statusCategory": {
						"self": "https://tappytaps2.atlassian.net/rest/api/2/statuscategory/3",
						"id": 3,
						"key": "done",
						"colorName": "green",
						"name": "Done"
					}
				},
				"components": [],
				"timeoriginalestimate": null,
				"description": null,
				"timetracking": {},
				"customfield_10005": null,
				"security": null,
				"attachment": [],
				"aggregatetimeestimate": null,
				"flagged": false,
				"summary": "Kukátko",
				"creator": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/user?accountId=557058%3A4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"accountId": "557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"avatarUrls": {
						"48x48": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/48",
						"24x24": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/24",
						"16x16": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/16",
						"32x32": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/32"
					},
					"displayName": "Jan Sarson",
					"active": true,
					"timeZone": "Europe/Prague",
					"accountType": "atlassian"
				},
				"subtasks": [],
				"reporter": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/user?accountId=557058%3A4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"accountId": "557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"avatarUrls": {
						"48x48": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/48",
						"24x24": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/24",
						"16x16": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/16",
						"32x32": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/32"
					},
					"displayName": "Jan Sarson",
					"active": true,
					"timeZone": "Europe/Prague",
					"accountType": "atlassian"
				},
				"aggregateprogress": {
					"progress": 0,
					"total": 0
				},
				"customfield_10001": null,
				"customfield_10200": null,
				"customfield_10201": null,
				"customfield_10400": null,
				"customfield_10115": [
					{
						"id": 122,
						"name": "Sprint Rákosníček (Jindra)",
						"state": "closed",
						"boardId": 1,
						"goal": "Low light mode & Základní verze Camerito",
						"startDate": "2022-08-01T13:02:50.729Z",
						"endDate": "2022-09-05T12:32:00.000Z",
						"completeDate": "2022-10-20T11:32:45.838Z"
					},
					{
						"id": 124,
						"name": "Sprint Tučňák (Jindra)",
						"state": "active",
						"boardId": 1,
						"goal": "Dodělat základní Android verzi Camerita (ať synchronizujeme vývoj)",
						"startDate": "2022-11-30T11:43:11.974Z",
						"endDate": "2022-12-19T13:38:00.000Z"
					}
				],
				"customfield_10511": null,
				"customfield_10116": "0|i00xh9:",
				"customfield_10512": null,
				"customfield_10513": null,
				"environment": null,
				"duedate": null,
				"closedSprints": [
					{
						"id": 122,
						"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/sprint/122",
						"state": "closed",
						"name": "Sprint Rákosníček (Jindra)",
						"startDate": "2022-08-01T13:02:50.729Z",
						"endDate": "2022-09-05T12:32:00.000Z",
						"completeDate": "2022-10-20T11:32:45.838Z",
						"originBoardId": 1,
						"goal": "Low light mode & Základní verze Camerito"
					}
				],
				"progress": {
					"progress": 0,
					"total": 0
				},
				"votes": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/TM-3578/votes",
					"votes": 0,
					"hasVoted": false
				},
				"comment": {
					"comments": [],
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/18427/comment",
					"maxResults": 0,
					"total": 0,
					"startAt": 0
				},
				"worklog": {
					"startAt": 0,
					"maxResults": 20,
					"total": 0,
					"worklogs": []
				}
			}
		},
		{
			"expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
			"id": "18446",
			"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/issue/18446",
			"key": "TM-3597",
			"fields": {
				"statuscategorychangedate": "2022-12-19T07:45:56.866+0100",
				"issuetype": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issuetype/10100",
					"id": "10100",
					"description": "Functionality or a feature expressed as a user goal.",
					"iconUrl": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10315?size=medium",
					"name": "Story",
					"subtask": false,
					"avatarId": 10315,
					"hierarchyLevel": 0
				},
				"timespent": null,
				"sprint": {
					"id": 124,
					"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/sprint/124",
					"state": "active",
					"name": "Sprint Tučňák (Jindra)",
					"startDate": "2022-11-30T11:43:11.974Z",
					"endDate": "2022-12-19T13:38:00.000Z",
					"originBoardId": 1,
					"goal": "Dodělat základní Android verzi Camerita (ať synchronizujeme vývoj)"
				},
				"project": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/project/10000",
					"id": "10000",
					"key": "TM",
					"name": "TappyTaps development",
					"projectTypeKey": "software",
					"simplified": false,
					"avatarUrls": {
						"48x48": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324",
						"24x24": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=small",
						"16x16": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=xsmall",
						"32x32": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=medium"
					}
				},
				"fixVersions": [],
				"aggregatetimespent": null,
				"resolution": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/resolution/10000",
					"id": "10000",
					"description": "Work has been completed on this issue.",
					"name": "Done"
				},
				"customfield_10113": {
					"hasEpicLinkFieldDependency": false,
					"showField": false,
					"nonEditableReason": {
						"reason": "PLUGIN_LICENSE_ERROR",
						"message": "The Parent Link is only available to Jira Premium users."
					}
				},
				"customfield_10114": null,
				"customfield_10510": null,
				"customfield_10500": null,
				"customfield_10501": null,
				"customfield_10502": [],
				"customfield_10503": null,
				"customfield_10504": null,
				"customfield_10505": null,
				"customfield_10506": null,
				"resolutiondate": "2022-12-19T07:45:56.863+0100",
				"customfield_10507": null,
				"customfield_10508": null,
				"workratio": -1,
				"customfield_10509": null,
				"issuerestriction": {
					"issuerestrictions": {},
					"shouldDisplay": false
				},
				"watches": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/TM-3597/watchers",
					"watchCount": 1,
					"isWatching": false
				},
				"lastViewed": null,
				"created": "2022-09-15T12:11:44.557+0200",
				"epic": null,
				"customfield_10100": null,
				"priority": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/priority/3",
					"iconUrl": "https://tappytaps2.atlassian.net/images/icons/priorities/medium.svg",
					"name": "Medium",
					"id": "3"
				},
				"customfield_10101": "10000_*:*_1_*:*_8195652330_*|*_10001_*:*_1_*:*_0",
				"customfield_10300": null,
				"customfield_10102": null,
				"labels": [],
				"aggregatetimeoriginalestimate": null,
				"timeestimate": null,
				"versions": [],
				"issuelinks": [],
				"assignee": null,
				"updated": "2022-12-19T07:45:56.866+0100",
				"status": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/status/10001",
					"description": "",
					"iconUrl": "https://tappytaps2.atlassian.net/",
					"name": "Done",
					"id": "10001",
					"statusCategory": {
						"self": "https://tappytaps2.atlassian.net/rest/api/2/statuscategory/3",
						"id": 3,
						"key": "done",
						"colorName": "green",
						"name": "Done"
					}
				},
				"components": [],
				"timeoriginalestimate": null,
				"description": "_Jako supporťák chci mít přehlednější kukátko, abych mohl snadněji poskytovat support._\n\n[https://docs.google.com/spreadsheets/d/19ggcV7-Bq--AV44XIrHLv-m9pGHfptYvF8MPUnJCVZo/edit?usp=sharing|https://docs.google.com/spreadsheets/d/19ggcV7-Bq--AV44XIrHLv-m9pGHfptYvF8MPUnJCVZo/edit?usp=sharing|smart-link] ",
				"timetracking": {},
				"customfield_10005": null,
				"security": null,
				"aggregatetimeestimate": null,
				"attachment": [],
				"flagged": false,
				"summary": "Úprava kukátka",
				"creator": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/user?accountId=557058%3A4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"accountId": "557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"avatarUrls": {
						"48x48": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/48",
						"24x24": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/24",
						"16x16": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/16",
						"32x32": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/32"
					},
					"displayName": "Jan Sarson",
					"active": true,
					"timeZone": "Europe/Prague",
					"accountType": "atlassian"
				},
				"subtasks": [
					{
						"id": "18470",
						"key": "TM-3621",
						"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/18470",
						"fields": {
							"summary": "Programování",
							"status": {
								"self": "https://tappytaps2.atlassian.net/rest/api/2/status/10001",
								"description": "",
								"iconUrl": "https://tappytaps2.atlassian.net/",
								"name": "Done",
								"id": "10001",
								"statusCategory": {
									"self": "https://tappytaps2.atlassian.net/rest/api/2/statuscategory/3",
									"id": 3,
									"key": "done",
									"colorName": "green",
									"name": "Done"
								}
							},
							"priority": {
								"self": "https://tappytaps2.atlassian.net/rest/api/2/priority/3",
								"iconUrl": "https://tappytaps2.atlassian.net/images/icons/priorities/medium.svg",
								"name": "Medium",
								"id": "3"
							},
							"issuetype": {
								"self": "https://tappytaps2.atlassian.net/rest/api/2/issuetype/10102",
								"id": "10102",
								"description": "A small piece of work that's part of a larger task.",
								"iconUrl": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10316?size=medium",
								"name": "Sub-task",
								"subtask": true,
								"avatarId": 10316,
								"hierarchyLevel": -1
							}
						}
					}
				],
				"reporter": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/user?accountId=557058%3A4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"accountId": "557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"avatarUrls": {
						"48x48": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/48",
						"24x24": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/24",
						"16x16": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/16",
						"32x32": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/32"
					},
					"displayName": "Jan Sarson",
					"active": true,
					"timeZone": "Europe/Prague",
					"accountType": "atlassian"
				},
				"aggregateprogress": {
					"progress": 0,
					"total": 0
				},
				"customfield_10001": null,
				"customfield_10200": null,
				"customfield_10201": null,
				"customfield_10400": null,
				"customfield_10115": [
					{
						"id": 124,
						"name": "Sprint Tučňák (Jindra)",
						"state": "active",
						"boardId": 1,
						"goal": "Dodělat základní Android verzi Camerita (ať synchronizujeme vývoj)",
						"startDate": "2022-11-30T11:43:11.974Z",
						"endDate": "2022-12-19T13:38:00.000Z"
					}
				],
				"customfield_10511": null,
				"customfield_10512": null,
				"customfield_10116": "0|i00xki:i",
				"customfield_10513": null,
				"environment": null,
				"customfield_10117": 3.0,
				"duedate": null,
				"progress": {
					"progress": 0,
					"total": 0
				},
				"comment": {
					"comments": [],
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/18446/comment",
					"maxResults": 0,
					"total": 0,
					"startAt": 0
				},
				"votes": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/TM-3597/votes",
					"votes": 0,
					"hasVoted": false
				},
				"worklog": {
					"startAt": 0,
					"maxResults": 20,
					"total": 0,
					"worklogs": []
				}
			}
		},
		{
			"expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
			"id": "18470",
			"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/issue/18470",
			"key": "TM-3621",
			"fields": {
				"statuscategorychangedate": "2022-12-19T07:45:53.818+0100",
				"issuetype": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issuetype/10102",
					"id": "10102",
					"description": "A small piece of work that's part of a larger task.",
					"iconUrl": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10316?size=medium",
					"name": "Sub-task",
					"subtask": true,
					"avatarId": 10316,
					"hierarchyLevel": -1
				},
				"parent": {
					"id": "18446",
					"key": "TM-3597",
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/18446",
					"fields": {
						"summary": "Úprava kukátka",
						"status": {
							"self": "https://tappytaps2.atlassian.net/rest/api/2/status/10001",
							"description": "",
							"iconUrl": "https://tappytaps2.atlassian.net/",
							"name": "Done",
							"id": "10001",
							"statusCategory": {
								"self": "https://tappytaps2.atlassian.net/rest/api/2/statuscategory/3",
								"id": 3,
								"key": "done",
								"colorName": "green",
								"name": "Done"
							}
						},
						"priority": {
							"self": "https://tappytaps2.atlassian.net/rest/api/2/priority/3",
							"iconUrl": "https://tappytaps2.atlassian.net/images/icons/priorities/medium.svg",
							"name": "Medium",
							"id": "3"
						},
						"issuetype": {
							"self": "https://tappytaps2.atlassian.net/rest/api/2/issuetype/10100",
							"id": "10100",
							"description": "Functionality or a feature expressed as a user goal.",
							"iconUrl": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10315?size=medium",
							"name": "Story",
							"subtask": false,
							"avatarId": 10315,
							"hierarchyLevel": 0
						}
					}
				},
				"timespent": null,
				"sprint": {
					"id": 124,
					"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/sprint/124",
					"state": "active",
					"name": "Sprint Tučňák (Jindra)",
					"startDate": "2022-11-30T11:43:11.974Z",
					"endDate": "2022-12-19T13:38:00.000Z",
					"originBoardId": 1,
					"goal": "Dodělat základní Android verzi Camerita (ať synchronizujeme vývoj)"
				},
				"project": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/project/10000",
					"id": "10000",
					"key": "TM",
					"name": "TappyTaps development",
					"projectTypeKey": "software",
					"simplified": false,
					"avatarUrls": {
						"48x48": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324",
						"24x24": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=small",
						"16x16": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=xsmall",
						"32x32": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=medium"
					}
				},
				"fixVersions": [],
				"aggregatetimespent": null,
				"resolution": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/resolution/10000",
					"id": "10000",
					"description": "Work has been completed on this issue.",
					"name": "Done"
				},
				"customfield_10113": {
					"hasEpicLinkFieldDependency": false,
					"showField": false,
					"nonEditableReason": {
						"reason": "PLUGIN_LICENSE_ERROR",
						"message": "The Parent Link is only available to Jira Premium users."
					}
				},
				"customfield_10510": null,
				"customfield_10114": null,
				"customfield_10500": null,
				"customfield_10501": null,
				"customfield_10502": [],
				"customfield_10503": null,
				"customfield_10504": null,
				"customfield_10505": null,
				"customfield_10506": null,
				"resolutiondate": "2022-12-19T07:45:53.814+0100",
				"customfield_10507": null,
				"customfield_10508": null,
				"workratio": -1,
				"customfield_10509": null,
				"issuerestriction": {
					"issuerestrictions": {},
					"shouldDisplay": false
				},
				"watches": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/TM-3621/watchers",
					"watchCount": 1,
					"isWatching": false
				},
				"lastViewed": null,
				"created": "2022-10-20T14:06:42.138+0200",
				"epic": null,
				"customfield_10100": null,
				"priority": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/priority/3",
					"iconUrl": "https://tappytaps2.atlassian.net/images/icons/priorities/medium.svg",
					"name": "Medium",
					"id": "3"
				},
				"customfield_10101": "3_*:*_1_*:*_10950129_*|*_10000_*:*_1_*:*_4736657190_*|*_10002_*:*_1_*:*_417144384_*|*_10001_*:*_1_*:*_0",
				"customfield_10300": null,
				"customfield_10102": null,
				"labels": [],
				"timeestimate": null,
				"aggregatetimeoriginalestimate": null,
				"versions": [],
				"issuelinks": [],
				"assignee": null,
				"updated": "2022-12-19T07:45:53.818+0100",
				"status": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/status/10001",
					"description": "",
					"iconUrl": "https://tappytaps2.atlassian.net/",
					"name": "Done",
					"id": "10001",
					"statusCategory": {
						"self": "https://tappytaps2.atlassian.net/rest/api/2/statuscategory/3",
						"id": 3,
						"key": "done",
						"colorName": "green",
						"name": "Done"
					}
				},
				"components": [],
				"timeoriginalestimate": null,
				"description": null,
				"timetracking": {},
				"customfield_10005": null,
				"security": null,
				"attachment": [],
				"aggregatetimeestimate": null,
				"flagged": false,
				"summary": "Programování",
				"creator": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/user?accountId=557058%3A4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"accountId": "557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"avatarUrls": {
						"48x48": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/48",
						"24x24": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/24",
						"16x16": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/16",
						"32x32": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/32"
					},
					"displayName": "Jan Sarson",
					"active": true,
					"timeZone": "Europe/Prague",
					"accountType": "atlassian"
				},
				"subtasks": [],
				"reporter": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/user?accountId=557058%3A4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"accountId": "557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"avatarUrls": {
						"48x48": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/48",
						"24x24": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/24",
						"16x16": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/16",
						"32x32": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/32"
					},
					"displayName": "Jan Sarson",
					"active": true,
					"timeZone": "Europe/Prague",
					"accountType": "atlassian"
				},
				"aggregateprogress": {
					"progress": 0,
					"total": 0
				},
				"customfield_10001": null,
				"customfield_10200": null,
				"customfield_10201": null,
				"customfield_10400": null,
				"customfield_10115": [
					{
						"id": 124,
						"name": "Sprint Tučňák (Jindra)",
						"state": "active",
						"boardId": 1,
						"goal": "Dodělat základní Android verzi Camerita (ať synchronizujeme vývoj)",
						"startDate": "2022-11-30T11:43:11.974Z",
						"endDate": "2022-12-19T13:38:00.000Z"
					}
				],
				"customfield_10511": null,
				"customfield_10512": null,
				"customfield_10116": "0|i00xrx:",
				"customfield_10513": null,
				"environment": null,
				"duedate": null,
				"progress": {
					"progress": 0,
					"total": 0
				},
				"votes": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/TM-3621/votes",
					"votes": 0,
					"hasVoted": false
				},
				"comment": {
					"comments": [],
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/18470/comment",
					"maxResults": 0,
					"total": 0,
					"startAt": 0
				},
				"worklog": {
					"startAt": 0,
					"maxResults": 20,
					"total": 0,
					"worklogs": []
				}
			}
		},
		{
			"expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
			"id": "18463",
			"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/issue/18463",
			"key": "TM-3614",
			"fields": {
				"statuscategorychangedate": "2023-01-05T12:42:43.801+0100",
				"issuetype": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issuetype/10100",
					"id": "10100",
					"description": "Functionality or a feature expressed as a user goal.",
					"iconUrl": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10315?size=medium",
					"name": "Story",
					"subtask": false,
					"avatarId": 10315,
					"hierarchyLevel": 0
				},
				"timespent": null,
				"sprint": {
					"id": 124,
					"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/sprint/124",
					"state": "active",
					"name": "Sprint Tučňák (Jindra)",
					"startDate": "2022-11-30T11:43:11.974Z",
					"endDate": "2022-12-19T13:38:00.000Z",
					"originBoardId": 1,
					"goal": "Dodělat základní Android verzi Camerita (ať synchronizujeme vývoj)"
				},
				"project": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/project/10000",
					"id": "10000",
					"key": "TM",
					"name": "TappyTaps development",
					"projectTypeKey": "software",
					"simplified": false,
					"avatarUrls": {
						"48x48": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324",
						"24x24": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=small",
						"16x16": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=xsmall",
						"32x32": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=medium"
					}
				},
				"fixVersions": [],
				"aggregatetimespent": null,
				"resolution": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/resolution/10000",
					"id": "10000",
					"description": "Work has been completed on this issue.",
					"name": "Done"
				},
				"customfield_10113": {
					"hasEpicLinkFieldDependency": false,
					"showField": false,
					"nonEditableReason": {
						"reason": "PLUGIN_LICENSE_ERROR",
						"message": "The Parent Link is only available to Jira Premium users."
					}
				},
				"customfield_10114": null,
				"customfield_10510": null,
				"customfield_10500": null,
				"customfield_10501": null,
				"customfield_10502": [],
				"customfield_10503": null,
				"customfield_10504": null,
				"customfield_10505": null,
				"resolutiondate": "2023-01-05T12:42:43.798+0100",
				"customfield_10506": null,
				"customfield_10507": null,
				"customfield_10508": null,
				"customfield_10509": null,
				"workratio": -1,
				"watches": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/TM-3614/watchers",
					"watchCount": 1,
					"isWatching": false
				},
				"issuerestriction": {
					"issuerestrictions": {},
					"shouldDisplay": false
				},
				"lastViewed": null,
				"created": "2022-10-19T16:38:31.038+0200",
				"epic": null,
				"priority": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/priority/3",
					"iconUrl": "https://tappytaps2.atlassian.net/images/icons/priorities/medium.svg",
					"name": "Medium",
					"id": "3"
				},
				"customfield_10100": null,
				"customfield_10101": "10000_*:*_1_*:*_6728652782_*|*_10001_*:*_1_*:*_0",
				"customfield_10102": null,
				"customfield_10300": null,
				"labels": [],
				"aggregatetimeoriginalestimate": null,
				"timeestimate": null,
				"versions": [],
				"issuelinks": [],
				"assignee": null,
				"updated": "2023-01-05T12:42:43.801+0100",
				"status": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/status/10001",
					"description": "",
					"iconUrl": "https://tappytaps2.atlassian.net/",
					"name": "Done",
					"id": "10001",
					"statusCategory": {
						"self": "https://tappytaps2.atlassian.net/rest/api/2/statuscategory/3",
						"id": 3,
						"key": "done",
						"colorName": "green",
						"name": "Done"
					}
				},
				"components": [],
				"timeoriginalestimate": null,
				"description": "_Jako uživatel chci, aby se mi správně zaostřil obraz a ten pak už tak zůstal, dokud ho nepotřebuju přeostřit na jiné místo._\n\n* jen iOS\n* *vyzkoušet*, zda dokážeme manuálně nastavovat focus (pomocí slideru, či nějak chytřeji)\n* šlo by poslat “žádost“ o refocus z PS, či udělat refocus když se pohne zařízení\n* nebo naopak ukládat si fokus a když se zhorší světelné podmínky tak použít ten poslední, který dával smysl",
				"timetracking": {},
				"customfield_10005": null,
				"security": null,
				"attachment": [],
				"aggregatetimeestimate": null,
				"flagged": false,
				"summary": "Manual focus (test iOS)",
				"creator": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/user?accountId=557058%3A4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"accountId": "557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"avatarUrls": {
						"48x48": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/48",
						"24x24": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/24",
						"16x16": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/16",
						"32x32": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/32"
					},
					"displayName": "Jan Sarson",
					"active": true,
					"timeZone": "Europe/Prague",
					"accountType": "atlassian"
				},
				"subtasks": [],
				"reporter": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/user?accountId=557058%3A4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"accountId": "557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"avatarUrls": {
						"48x48": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/48",
						"24x24": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/24",
						"16x16": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/16",
						"32x32": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/32"
					},
					"displayName": "Jan Sarson",
					"active": true,
					"timeZone": "Europe/Prague",
					"accountType": "atlassian"
				},
				"aggregateprogress": {
					"progress": 0,
					"total": 0
				},
				"customfield_10001": null,
				"customfield_10200": null,
				"customfield_10201": null,
				"customfield_10400": null,
				"customfield_10511": null,
				"customfield_10115": [
					{
						"id": 124,
						"name": "Sprint Tučňák (Jindra)",
						"state": "active",
						"boardId": 1,
						"goal": "Dodělat základní Android verzi Camerita (ať synchronizujeme vývoj)",
						"startDate": "2022-11-30T11:43:11.974Z",
						"endDate": "2022-12-19T13:38:00.000Z"
					}
				],
				"customfield_10116": "0|i00xki:m",
				"customfield_10512": null,
				"customfield_10117": 2.0,
				"environment": null,
				"customfield_10513": null,
				"duedate": null,
				"progress": {
					"progress": 0,
					"total": 0
				},
				"comment": {
					"comments": [],
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/18463/comment",
					"maxResults": 0,
					"total": 0,
					"startAt": 0
				},
				"votes": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/TM-3614/votes",
					"votes": 0,
					"hasVoted": false
				},
				"worklog": {
					"startAt": 0,
					"maxResults": 20,
					"total": 0,
					"worklogs": []
				}
			}
		},
		{
			"expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
			"id": "18377",
			"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/issue/18377",
			"key": "TM-3528",
			"fields": {
				"statuscategorychangedate": "2023-01-04T09:57:55.737+0100",
				"issuetype": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issuetype/10100",
					"id": "10100",
					"description": "Functionality or a feature expressed as a user goal.",
					"iconUrl": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10315?size=medium",
					"name": "Story",
					"subtask": false,
					"avatarId": 10315,
					"hierarchyLevel": 0
				},
				"timespent": null,
				"sprint": {
					"id": 124,
					"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/sprint/124",
					"state": "active",
					"name": "Sprint Tučňák (Jindra)",
					"startDate": "2022-11-30T11:43:11.974Z",
					"endDate": "2022-12-19T13:38:00.000Z",
					"originBoardId": 1,
					"goal": "Dodělat základní Android verzi Camerita (ať synchronizujeme vývoj)"
				},
				"project": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/project/10000",
					"id": "10000",
					"key": "TM",
					"name": "TappyTaps development",
					"projectTypeKey": "software",
					"simplified": false,
					"avatarUrls": {
						"48x48": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324",
						"24x24": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=small",
						"16x16": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=xsmall",
						"32x32": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=medium"
					}
				},
				"fixVersions": [],
				"aggregatetimespent": null,
				"resolution": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/resolution/10000",
					"id": "10000",
					"description": "Work has been completed on this issue.",
					"name": "Done"
				},
				"customfield_10113": {
					"hasEpicLinkFieldDependency": false,
					"showField": false,
					"nonEditableReason": {
						"reason": "PLUGIN_LICENSE_ERROR",
						"message": "The Parent Link is only available to Jira Premium users."
					}
				},
				"customfield_10114": null,
				"customfield_10510": null,
				"customfield_10500": null,
				"customfield_10501": null,
				"customfield_10502": [],
				"customfield_10503": null,
				"customfield_10504": null,
				"customfield_10505": null,
				"resolutiondate": "2023-01-04T09:57:55.735+0100",
				"customfield_10506": null,
				"customfield_10507": null,
				"customfield_10508": null,
				"workratio": -1,
				"customfield_10509": null,
				"issuerestriction": {
					"issuerestrictions": {},
					"shouldDisplay": false
				},
				"lastViewed": null,
				"watches": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/TM-3528/watchers",
					"watchCount": 1,
					"isWatching": false
				},
				"created": "2022-06-21T14:14:24.956+0200",
				"epic": null,
				"customfield_10100": null,
				"priority": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/priority/3",
					"iconUrl": "https://tappytaps2.atlassian.net/images/icons/priorities/medium.svg",
					"name": "Medium",
					"id": "3"
				},
				"customfield_10101": "10000_*:*_1_*:*_17009010804_*|*_10001_*:*_1_*:*_0",
				"customfield_10300": null,
				"customfield_10102": null,
				"labels": [],
				"aggregatetimeoriginalestimate": null,
				"timeestimate": null,
				"versions": [],
				"issuelinks": [],
				"assignee": null,
				"updated": "2023-01-04T09:57:55.737+0100",
				"status": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/status/10001",
					"description": "",
					"iconUrl": "https://tappytaps2.atlassian.net/",
					"name": "Done",
					"id": "10001",
					"statusCategory": {
						"self": "https://tappytaps2.atlassian.net/rest/api/2/statuscategory/3",
						"id": 3,
						"key": "done",
						"colorName": "green",
						"name": "Done"
					}
				},
				"components": [],
				"timeoriginalestimate": null,
				"description": "Prozkoumat, zda nedokážeme zoomovat obraz přímo na BS a tím výrazně zvýšit kvalitu obrazu.\n\n* vyzkoušet podporu plynulého zoomu *a posunu obrazu* na úrovni kamery (tj. Camera Station)\n* cílem vyzkoumat možnosti, performance, …",
				"timetracking": {},
				"customfield_10005": null,
				"security": null,
				"attachment": [],
				"aggregatetimeestimate": null,
				"flagged": false,
				"summary": "Camera Zoom na iOS",
				"creator": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/user?accountId=557058%3A4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"accountId": "557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"avatarUrls": {
						"48x48": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/48",
						"24x24": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/24",
						"16x16": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/16",
						"32x32": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/32"
					},
					"displayName": "Jan Sarson",
					"active": true,
					"timeZone": "Europe/Prague",
					"accountType": "atlassian"
				},
				"subtasks": [
					{
						"id": "18513",
						"key": "TM-3664",
						"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/18513",
						"fields": {
							"summary": "Programování iOS",
							"status": {
								"self": "https://tappytaps2.atlassian.net/rest/api/2/status/10001",
								"description": "",
								"iconUrl": "https://tappytaps2.atlassian.net/",
								"name": "Done",
								"id": "10001",
								"statusCategory": {
									"self": "https://tappytaps2.atlassian.net/rest/api/2/statuscategory/3",
									"id": 3,
									"key": "done",
									"colorName": "green",
									"name": "Done"
								}
							},
							"priority": {
								"self": "https://tappytaps2.atlassian.net/rest/api/2/priority/3",
								"iconUrl": "https://tappytaps2.atlassian.net/images/icons/priorities/medium.svg",
								"name": "Medium",
								"id": "3"
							},
							"issuetype": {
								"self": "https://tappytaps2.atlassian.net/rest/api/2/issuetype/10102",
								"id": "10102",
								"description": "A small piece of work that's part of a larger task.",
								"iconUrl": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10316?size=medium",
								"name": "Sub-task",
								"subtask": true,
								"avatarId": 10316,
								"hierarchyLevel": -1
							}
						}
					}
				],
				"reporter": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/user?accountId=557058%3A4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"accountId": "557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"avatarUrls": {
						"48x48": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/48",
						"24x24": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/24",
						"16x16": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/16",
						"32x32": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/32"
					},
					"displayName": "Jan Sarson",
					"active": true,
					"timeZone": "Europe/Prague",
					"accountType": "atlassian"
				},
				"aggregateprogress": {
					"progress": 0,
					"total": 0
				},
				"customfield_10001": null,
				"customfield_10200": null,
				"customfield_10201": null,
				"customfield_10400": null,
				"customfield_10511": null,
				"customfield_10115": [
					{
						"id": 124,
						"name": "Sprint Tučňák (Jindra)",
						"state": "active",
						"boardId": 1,
						"goal": "Dodělat základní Android verzi Camerita (ať synchronizujeme vývoj)",
						"startDate": "2022-11-30T11:43:11.974Z",
						"endDate": "2022-12-19T13:38:00.000Z"
					}
				],
				"customfield_10116": "0|i00xki:o",
				"customfield_10512": null,
				"customfield_10513": null,
				"environment": null,
				"customfield_10117": 2.0,
				"duedate": null,
				"progress": {
					"progress": 0,
					"total": 0
				},
				"votes": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/TM-3528/votes",
					"votes": 0,
					"hasVoted": false
				},
				"comment": {
					"comments": [],
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/18377/comment",
					"maxResults": 0,
					"total": 0,
					"startAt": 0
				},
				"worklog": {
					"startAt": 0,
					"maxResults": 20,
					"total": 0,
					"worklogs": []
				}
			}
		},
		{
			"expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
			"id": "18513",
			"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/issue/18513",
			"key": "TM-3664",
			"fields": {
				"statuscategorychangedate": "2023-01-04T09:57:53.210+0100",
				"issuetype": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issuetype/10102",
					"id": "10102",
					"description": "A small piece of work that's part of a larger task.",
					"iconUrl": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10316?size=medium",
					"name": "Sub-task",
					"subtask": true,
					"avatarId": 10316,
					"hierarchyLevel": -1
				},
				"parent": {
					"id": "18377",
					"key": "TM-3528",
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/18377",
					"fields": {
						"summary": "Camera Zoom na iOS",
						"status": {
							"self": "https://tappytaps2.atlassian.net/rest/api/2/status/10001",
							"description": "",
							"iconUrl": "https://tappytaps2.atlassian.net/",
							"name": "Done",
							"id": "10001",
							"statusCategory": {
								"self": "https://tappytaps2.atlassian.net/rest/api/2/statuscategory/3",
								"id": 3,
								"key": "done",
								"colorName": "green",
								"name": "Done"
							}
						},
						"priority": {
							"self": "https://tappytaps2.atlassian.net/rest/api/2/priority/3",
							"iconUrl": "https://tappytaps2.atlassian.net/images/icons/priorities/medium.svg",
							"name": "Medium",
							"id": "3"
						},
						"issuetype": {
							"self": "https://tappytaps2.atlassian.net/rest/api/2/issuetype/10100",
							"id": "10100",
							"description": "Functionality or a feature expressed as a user goal.",
							"iconUrl": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10315?size=medium",
							"name": "Story",
							"subtask": false,
							"avatarId": 10315,
							"hierarchyLevel": 0
						}
					}
				},
				"timespent": null,
				"sprint": {
					"id": 124,
					"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/sprint/124",
					"state": "active",
					"name": "Sprint Tučňák (Jindra)",
					"startDate": "2022-11-30T11:43:11.974Z",
					"endDate": "2022-12-19T13:38:00.000Z",
					"originBoardId": 1,
					"goal": "Dodělat základní Android verzi Camerita (ať synchronizujeme vývoj)"
				},
				"project": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/project/10000",
					"id": "10000",
					"key": "TM",
					"name": "TappyTaps development",
					"projectTypeKey": "software",
					"simplified": false,
					"avatarUrls": {
						"48x48": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324",
						"24x24": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=small",
						"16x16": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=xsmall",
						"32x32": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=medium"
					}
				},
				"fixVersions": [],
				"aggregatetimespent": null,
				"resolution": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/resolution/10000",
					"id": "10000",
					"description": "Work has been completed on this issue.",
					"name": "Done"
				},
				"customfield_10113": {
					"hasEpicLinkFieldDependency": false,
					"showField": false,
					"nonEditableReason": {
						"reason": "PLUGIN_LICENSE_ERROR",
						"message": "The Parent Link is only available to Jira Premium users."
					}
				},
				"customfield_10114": null,
				"customfield_10510": null,
				"customfield_10500": null,
				"customfield_10501": null,
				"customfield_10502": [],
				"customfield_10503": null,
				"customfield_10504": null,
				"customfield_10505": null,
				"resolutiondate": "2023-01-04T09:57:53.205+0100",
				"customfield_10506": null,
				"customfield_10507": null,
				"customfield_10508": null,
				"workratio": -1,
				"customfield_10509": null,
				"issuerestriction": {
					"issuerestrictions": {},
					"shouldDisplay": false
				},
				"lastViewed": null,
				"watches": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/TM-3664/watchers",
					"watchCount": 1,
					"isWatching": false
				},
				"created": "2022-11-28T13:54:53.987+0100",
				"epic": null,
				"customfield_10100": null,
				"priority": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/priority/3",
					"iconUrl": "https://tappytaps2.atlassian.net/images/icons/priorities/medium.svg",
					"name": "Medium",
					"id": "3"
				},
				"customfield_10101": "10000_*:*_1_*:*_3182579255_*|*_10001_*:*_1_*:*_0",
				"customfield_10102": null,
				"customfield_10300": null,
				"labels": [],
				"timeestimate": null,
				"aggregatetimeoriginalestimate": null,
				"versions": [],
				"issuelinks": [],
				"assignee": null,
				"updated": "2023-01-04T09:57:53.210+0100",
				"status": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/status/10001",
					"description": "",
					"iconUrl": "https://tappytaps2.atlassian.net/",
					"name": "Done",
					"id": "10001",
					"statusCategory": {
						"self": "https://tappytaps2.atlassian.net/rest/api/2/statuscategory/3",
						"id": 3,
						"key": "done",
						"colorName": "green",
						"name": "Done"
					}
				},
				"components": [],
				"timeoriginalestimate": null,
				"description": null,
				"timetracking": {},
				"customfield_10005": null,
				"security": null,
				"attachment": [],
				"aggregatetimeestimate": null,
				"flagged": false,
				"summary": "Programování iOS",
				"creator": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/user?accountId=557058%3A4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"accountId": "557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"avatarUrls": {
						"48x48": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/48",
						"24x24": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/24",
						"16x16": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/16",
						"32x32": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/32"
					},
					"displayName": "Jan Sarson",
					"active": true,
					"timeZone": "Europe/Prague",
					"accountType": "atlassian"
				},
				"subtasks": [],
				"reporter": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/user?accountId=557058%3A4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"accountId": "557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"avatarUrls": {
						"48x48": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/48",
						"24x24": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/24",
						"16x16": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/16",
						"32x32": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/32"
					},
					"displayName": "Jan Sarson",
					"active": true,
					"timeZone": "Europe/Prague",
					"accountType": "atlassian"
				},
				"aggregateprogress": {
					"progress": 0,
					"total": 0
				},
				"customfield_10001": null,
				"customfield_10200": null,
				"customfield_10201": null,
				"customfield_10400": null,
				"customfield_10511": null,
				"customfield_10115": [
					{
						"id": 124,
						"name": "Sprint Tučňák (Jindra)",
						"state": "active",
						"boardId": 1,
						"goal": "Dodělat základní Android verzi Camerita (ať synchronizujeme vývoj)",
						"startDate": "2022-11-30T11:43:11.974Z",
						"endDate": "2022-12-19T13:38:00.000Z"
					}
				],
				"customfield_10116": "0|i00y25:",
				"customfield_10512": null,
				"environment": null,
				"customfield_10513": null,
				"duedate": null,
				"progress": {
					"progress": 0,
					"total": 0
				},
				"comment": {
					"comments": [],
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/18513/comment",
					"maxResults": 0,
					"total": 0,
					"startAt": 0
				},
				"votes": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/TM-3664/votes",
					"votes": 0,
					"hasVoted": false
				},
				"worklog": {
					"startAt": 0,
					"maxResults": 20,
					"total": 0,
					"worklogs": []
				}
			}
		},
		{
			"expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
			"id": "18177",
			"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/issue/18177",
			"key": "TM-3328",
			"fields": {
				"statuscategorychangedate": "2022-02-08T08:36:55.316+0100",
				"issuetype": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issuetype/10100",
					"id": "10100",
					"description": "Functionality or a feature expressed as a user goal.",
					"iconUrl": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10315?size=medium",
					"name": "Story",
					"subtask": false,
					"avatarId": 10315,
					"hierarchyLevel": 0
				},
				"timespent": null,
				"sprint": {
					"id": 124,
					"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/sprint/124",
					"state": "active",
					"name": "Sprint Tučňák (Jindra)",
					"startDate": "2022-11-30T11:43:11.974Z",
					"endDate": "2022-12-19T13:38:00.000Z",
					"originBoardId": 1,
					"goal": "Dodělat základní Android verzi Camerita (ať synchronizujeme vývoj)"
				},
				"project": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/project/10000",
					"id": "10000",
					"key": "TM",
					"name": "TappyTaps development",
					"projectTypeKey": "software",
					"simplified": false,
					"avatarUrls": {
						"48x48": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324",
						"24x24": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=small",
						"16x16": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=xsmall",
						"32x32": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=medium"
					}
				},
				"fixVersions": [],
				"aggregatetimespent": null,
				"resolution": null,
				"customfield_10113": {
					"hasEpicLinkFieldDependency": false,
					"showField": false,
					"nonEditableReason": {
						"reason": "PLUGIN_LICENSE_ERROR",
						"message": "The Parent Link is only available to Jira Premium users."
					}
				},
				"customfield_10114": null,
				"customfield_10510": null,
				"customfield_10500": null,
				"customfield_10501": null,
				"customfield_10502": [],
				"customfield_10503": null,
				"customfield_10504": null,
				"customfield_10505": null,
				"customfield_10506": null,
				"resolutiondate": null,
				"customfield_10507": null,
				"customfield_10508": null,
				"workratio": -1,
				"customfield_10509": null,
				"watches": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/TM-3328/watchers",
					"watchCount": 1,
					"isWatching": false
				},
				"issuerestriction": {
					"issuerestrictions": {},
					"shouldDisplay": false
				},
				"lastViewed": null,
				"created": "2022-02-08T08:36:55.035+0100",
				"epic": null,
				"customfield_10100": null,
				"priority": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/priority/3",
					"iconUrl": "https://tappytaps2.atlassian.net/images/icons/priorities/medium.svg",
					"name": "Medium",
					"id": "3"
				},
				"customfield_10101": null,
				"customfield_10300": null,
				"customfield_10102": null,
				"labels": [],
				"timeestimate": null,
				"aggregatetimeoriginalestimate": null,
				"versions": [],
				"issuelinks": [],
				"assignee": null,
				"updated": "2022-10-25T16:51:51.907+0200",
				"status": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/status/10000",
					"description": "",
					"iconUrl": "https://tappytaps2.atlassian.net/",
					"name": "To Do",
					"id": "10000",
					"statusCategory": {
						"self": "https://tappytaps2.atlassian.net/rest/api/2/statuscategory/2",
						"id": 2,
						"key": "new",
						"colorName": "blue-gray",
						"name": "To Do"
					}
				},
				"components": [],
				"timeoriginalestimate": null,
				"description": "Jako PO chci mít společné místo na všechny přehledy, kontakty, apod….\n\nSekce:\n\n* marketing\n* přehledy - kukátka, statistiky, reporty apod.\n* kontakty - kontakty na ostatní\n* grafika\n** napojení na Notion Tomáše\n** info, kde je co k nalezení\n* TappyTaps (interní H+J)\n** schůzky, kvartální pohovory, …\n** certifikáty, správa serverů\n* Roadmaps a další?",
				"timetracking": {},
				"customfield_10005": null,
				"security": null,
				"aggregatetimeestimate": null,
				"attachment": [],
				"flagged": false,
				"summary": "Založit firemní Notion a základní strukturu",
				"creator": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/user?accountId=557058%3A4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"accountId": "557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"avatarUrls": {
						"48x48": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/48",
						"24x24": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/24",
						"16x16": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/16",
						"32x32": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/32"
					},
					"displayName": "Jan Sarson",
					"active": true,
					"timeZone": "Europe/Prague",
					"accountType": "atlassian"
				},
				"subtasks": [
					{
						"id": "18209",
						"key": "TM-3360",
						"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/18209",
						"fields": {
							"summary": "Notion",
							"status": {
								"self": "https://tappytaps2.atlassian.net/rest/api/2/status/3",
								"description": "This issue is being actively worked on at the moment by the assignee.",
								"iconUrl": "https://tappytaps2.atlassian.net/images/icons/statuses/inprogress.png",
								"name": "In Progress",
								"id": "3",
								"statusCategory": {
									"self": "https://tappytaps2.atlassian.net/rest/api/2/statuscategory/4",
									"id": 4,
									"key": "indeterminate",
									"colorName": "yellow",
									"name": "In Progress"
								}
							},
							"priority": {
								"self": "https://tappytaps2.atlassian.net/rest/api/2/priority/3",
								"iconUrl": "https://tappytaps2.atlassian.net/images/icons/priorities/medium.svg",
								"name": "Medium",
								"id": "3"
							},
							"issuetype": {
								"self": "https://tappytaps2.atlassian.net/rest/api/2/issuetype/10102",
								"id": "10102",
								"description": "A small piece of work that's part of a larger task.",
								"iconUrl": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10316?size=medium",
								"name": "Sub-task",
								"subtask": true,
								"avatarId": 10316,
								"hierarchyLevel": -1
							}
						}
					}
				],
				"reporter": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/user?accountId=557058%3A4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"accountId": "557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"avatarUrls": {
						"48x48": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/48",
						"24x24": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/24",
						"16x16": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/16",
						"32x32": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/32"
					},
					"displayName": "Jan Sarson",
					"active": true,
					"timeZone": "Europe/Prague",
					"accountType": "atlassian"
				},
				"aggregateprogress": {
					"progress": 0,
					"total": 0
				},
				"customfield_10001": null,
				"customfield_10200": null,
				"customfield_10201": null,
				"customfield_10400": null,
				"customfield_10511": null,
				"customfield_10115": [
					{
						"id": 118,
						"name": "Sprint Moucha [Jindra]",
						"state": "closed",
						"boardId": 1,
						"goal": "Podpořit stahování aplikace díky proma hotelů a darování premium.",
						"startDate": "2022-03-09T11:18:05.358Z",
						"endDate": "2022-03-29T07:41:00.000Z",
						"completeDate": "2022-04-13T06:58:04.215Z"
					},
					{
						"id": 119,
						"name": "Sprint Netopýr (Lukáš)",
						"state": "closed",
						"boardId": 1,
						"goal": "Dokončit verzi pro Betterspace a začít vývoj Watchita.",
						"startDate": "2022-04-19T13:24:40.236Z",
						"endDate": "2022-05-10T13:24:00.000Z",
						"completeDate": "2022-05-23T06:59:27.919Z"
					},
					{
						"id": 124,
						"name": "Sprint Tučňák (Jindra)",
						"state": "active",
						"boardId": 1,
						"goal": "Dodělat základní Android verzi Camerita (ať synchronizujeme vývoj)",
						"startDate": "2022-11-30T11:43:11.974Z",
						"endDate": "2022-12-19T13:38:00.000Z"
					}
				],
				"customfield_10116": "0|i00xki:r",
				"customfield_10512": null,
				"customfield_10513": null,
				"environment": null,
				"customfield_10117": 1.0,
				"duedate": null,
				"closedSprints": [
					{
						"id": 118,
						"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/sprint/118",
						"state": "closed",
						"name": "Sprint Moucha [Jindra]",
						"startDate": "2022-03-09T11:18:05.358Z",
						"endDate": "2022-03-29T07:41:00.000Z",
						"completeDate": "2022-04-13T06:58:04.215Z",
						"originBoardId": 1,
						"goal": "Podpořit stahování aplikace díky proma hotelů a darování premium."
					},
					{
						"id": 119,
						"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/sprint/119",
						"state": "closed",
						"name": "Sprint Netopýr (Lukáš)",
						"startDate": "2022-04-19T13:24:40.236Z",
						"endDate": "2022-05-10T13:24:00.000Z",
						"completeDate": "2022-05-23T06:59:27.919Z",
						"originBoardId": 1,
						"goal": "Dokončit verzi pro Betterspace a začít vývoj Watchita."
					}
				],
				"progress": {
					"progress": 0,
					"total": 0
				},
				"votes": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/TM-3328/votes",
					"votes": 0,
					"hasVoted": false
				},
				"comment": {
					"comments": [],
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/18177/comment",
					"maxResults": 0,
					"total": 0,
					"startAt": 0
				},
				"worklog": {
					"startAt": 0,
					"maxResults": 20,
					"total": 0,
					"worklogs": []
				}
			}
		},
		{
			"expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
			"id": "18209",
			"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/issue/18209",
			"key": "TM-3360",
			"fields": {
				"statuscategorychangedate": "2022-03-28T14:11:49.231+0200",
				"issuetype": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issuetype/10102",
					"id": "10102",
					"description": "A small piece of work that's part of a larger task.",
					"iconUrl": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10316?size=medium",
					"name": "Sub-task",
					"subtask": true,
					"avatarId": 10316,
					"hierarchyLevel": -1
				},
				"parent": {
					"id": "18177",
					"key": "TM-3328",
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/18177",
					"fields": {
						"summary": "Založit firemní Notion a základní strukturu",
						"status": {
							"self": "https://tappytaps2.atlassian.net/rest/api/2/status/10000",
							"description": "",
							"iconUrl": "https://tappytaps2.atlassian.net/",
							"name": "To Do",
							"id": "10000",
							"statusCategory": {
								"self": "https://tappytaps2.atlassian.net/rest/api/2/statuscategory/2",
								"id": 2,
								"key": "new",
								"colorName": "blue-gray",
								"name": "To Do"
							}
						},
						"priority": {
							"self": "https://tappytaps2.atlassian.net/rest/api/2/priority/3",
							"iconUrl": "https://tappytaps2.atlassian.net/images/icons/priorities/medium.svg",
							"name": "Medium",
							"id": "3"
						},
						"issuetype": {
							"self": "https://tappytaps2.atlassian.net/rest/api/2/issuetype/10100",
							"id": "10100",
							"description": "Functionality or a feature expressed as a user goal.",
							"iconUrl": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10315?size=medium",
							"name": "Story",
							"subtask": false,
							"avatarId": 10315,
							"hierarchyLevel": 0
						}
					}
				},
				"timespent": null,
				"sprint": {
					"id": 124,
					"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/sprint/124",
					"state": "active",
					"name": "Sprint Tučňák (Jindra)",
					"startDate": "2022-11-30T11:43:11.974Z",
					"endDate": "2022-12-19T13:38:00.000Z",
					"originBoardId": 1,
					"goal": "Dodělat základní Android verzi Camerita (ať synchronizujeme vývoj)"
				},
				"project": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/project/10000",
					"id": "10000",
					"key": "TM",
					"name": "TappyTaps development",
					"projectTypeKey": "software",
					"simplified": false,
					"avatarUrls": {
						"48x48": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324",
						"24x24": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=small",
						"16x16": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=xsmall",
						"32x32": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=medium"
					}
				},
				"fixVersions": [],
				"aggregatetimespent": null,
				"resolution": null,
				"customfield_10113": {
					"hasEpicLinkFieldDependency": false,
					"showField": false,
					"nonEditableReason": {
						"reason": "PLUGIN_LICENSE_ERROR",
						"message": "The Parent Link is only available to Jira Premium users."
					}
				},
				"customfield_10114": null,
				"customfield_10510": null,
				"customfield_10500": null,
				"customfield_10501": null,
				"customfield_10502": [],
				"customfield_10503": null,
				"customfield_10504": null,
				"customfield_10505": null,
				"resolutiondate": null,
				"customfield_10506": null,
				"customfield_10507": null,
				"customfield_10508": null,
				"customfield_10509": null,
				"workratio": -1,
				"issuerestriction": {
					"issuerestrictions": {},
					"shouldDisplay": false
				},
				"lastViewed": null,
				"watches": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/TM-3360/watchers",
					"watchCount": 1,
					"isWatching": false
				},
				"created": "2022-03-08T15:05:56.999+0100",
				"epic": null,
				"customfield_10100": null,
				"priority": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/priority/3",
					"iconUrl": "https://tappytaps2.atlassian.net/images/icons/priorities/medium.svg",
					"name": "Medium",
					"id": "3"
				},
				"customfield_10101": null,
				"customfield_10102": null,
				"customfield_10300": null,
				"labels": [],
				"aggregatetimeoriginalestimate": null,
				"timeestimate": null,
				"versions": [],
				"issuelinks": [],
				"assignee": null,
				"updated": "2022-03-28T14:11:49.231+0200",
				"status": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/status/3",
					"description": "This issue is being actively worked on at the moment by the assignee.",
					"iconUrl": "https://tappytaps2.atlassian.net/images/icons/statuses/inprogress.png",
					"name": "In Progress",
					"id": "3",
					"statusCategory": {
						"self": "https://tappytaps2.atlassian.net/rest/api/2/statuscategory/4",
						"id": 4,
						"key": "indeterminate",
						"colorName": "yellow",
						"name": "In Progress"
					}
				},
				"components": [],
				"timeoriginalestimate": null,
				"description": null,
				"timetracking": {},
				"customfield_10005": null,
				"security": null,
				"attachment": [],
				"aggregatetimeestimate": null,
				"flagged": false,
				"summary": "Notion",
				"creator": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/user?accountId=557058%3A4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"accountId": "557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"avatarUrls": {
						"48x48": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/48",
						"24x24": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/24",
						"16x16": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/16",
						"32x32": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/32"
					},
					"displayName": "Jan Sarson",
					"active": true,
					"timeZone": "Europe/Prague",
					"accountType": "atlassian"
				},
				"subtasks": [],
				"reporter": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/user?accountId=557058%3A4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"accountId": "557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"avatarUrls": {
						"48x48": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/48",
						"24x24": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/24",
						"16x16": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/16",
						"32x32": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/32"
					},
					"displayName": "Jan Sarson",
					"active": true,
					"timeZone": "Europe/Prague",
					"accountType": "atlassian"
				},
				"aggregateprogress": {
					"progress": 0,
					"total": 0
				},
				"customfield_10001": null,
				"customfield_10200": null,
				"customfield_10201": null,
				"customfield_10400": null,
				"customfield_10511": null,
				"customfield_10115": [
					{
						"id": 118,
						"name": "Sprint Moucha [Jindra]",
						"state": "closed",
						"boardId": 1,
						"goal": "Podpořit stahování aplikace díky proma hotelů a darování premium.",
						"startDate": "2022-03-09T11:18:05.358Z",
						"endDate": "2022-03-29T07:41:00.000Z",
						"completeDate": "2022-04-13T06:58:04.215Z"
					},
					{
						"id": 119,
						"name": "Sprint Netopýr (Lukáš)",
						"state": "closed",
						"boardId": 1,
						"goal": "Dokončit verzi pro Betterspace a začít vývoj Watchita.",
						"startDate": "2022-04-19T13:24:40.236Z",
						"endDate": "2022-05-10T13:24:00.000Z",
						"completeDate": "2022-05-23T06:59:27.919Z"
					},
					{
						"id": 124,
						"name": "Sprint Tučňák (Jindra)",
						"state": "active",
						"boardId": 1,
						"goal": "Dodělat základní Android verzi Camerita (ať synchronizujeme vývoj)",
						"startDate": "2022-11-30T11:43:11.974Z",
						"endDate": "2022-12-19T13:38:00.000Z"
					}
				],
				"customfield_10116": "0|i00w9p:",
				"customfield_10512": null,
				"environment": null,
				"customfield_10513": null,
				"duedate": null,
				"closedSprints": [
					{
						"id": 118,
						"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/sprint/118",
						"state": "closed",
						"name": "Sprint Moucha [Jindra]",
						"startDate": "2022-03-09T11:18:05.358Z",
						"endDate": "2022-03-29T07:41:00.000Z",
						"completeDate": "2022-04-13T06:58:04.215Z",
						"originBoardId": 1,
						"goal": "Podpořit stahování aplikace díky proma hotelů a darování premium."
					},
					{
						"id": 119,
						"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/sprint/119",
						"state": "closed",
						"name": "Sprint Netopýr (Lukáš)",
						"startDate": "2022-04-19T13:24:40.236Z",
						"endDate": "2022-05-10T13:24:00.000Z",
						"completeDate": "2022-05-23T06:59:27.919Z",
						"originBoardId": 1,
						"goal": "Dokončit verzi pro Betterspace a začít vývoj Watchita."
					}
				],
				"progress": {
					"progress": 0,
					"total": 0
				},
				"comment": {
					"comments": [],
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/18209/comment",
					"maxResults": 0,
					"total": 0,
					"startAt": 0
				},
				"votes": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/TM-3360/votes",
					"votes": 0,
					"hasVoted": false
				},
				"worklog": {
					"startAt": 0,
					"maxResults": 20,
					"total": 0,
					"worklogs": []
				}
			}
		},
		{
			"expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
			"id": "18454",
			"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/issue/18454",
			"key": "TM-3605",
			"fields": {
				"statuscategorychangedate": "2022-10-25T16:54:13.553+0200",
				"issuetype": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issuetype/10100",
					"id": "10100",
					"description": "Functionality or a feature expressed as a user goal.",
					"iconUrl": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10315?size=medium",
					"name": "Story",
					"subtask": false,
					"avatarId": 10315,
					"hierarchyLevel": 0
				},
				"timespent": null,
				"sprint": {
					"id": 124,
					"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/sprint/124",
					"state": "active",
					"name": "Sprint Tučňák (Jindra)",
					"startDate": "2022-11-30T11:43:11.974Z",
					"endDate": "2022-12-19T13:38:00.000Z",
					"originBoardId": 1,
					"goal": "Dodělat základní Android verzi Camerita (ať synchronizujeme vývoj)"
				},
				"project": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/project/10000",
					"id": "10000",
					"key": "TM",
					"name": "TappyTaps development",
					"projectTypeKey": "software",
					"simplified": false,
					"avatarUrls": {
						"48x48": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324",
						"24x24": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=small",
						"16x16": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=xsmall",
						"32x32": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=medium"
					}
				},
				"fixVersions": [],
				"aggregatetimespent": null,
				"resolution": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/resolution/10000",
					"id": "10000",
					"description": "Work has been completed on this issue.",
					"name": "Done"
				},
				"customfield_10113": {
					"hasEpicLinkFieldDependency": false,
					"showField": false,
					"nonEditableReason": {
						"reason": "PLUGIN_LICENSE_ERROR",
						"message": "The Parent Link is only available to Jira Premium users."
					}
				},
				"customfield_10510": null,
				"customfield_10114": null,
				"customfield_10500": null,
				"customfield_10501": null,
				"customfield_10502": [],
				"customfield_10503": null,
				"customfield_10504": null,
				"customfield_10505": null,
				"customfield_10506": null,
				"resolutiondate": "2022-10-25T16:54:13.548+0200",
				"customfield_10507": null,
				"customfield_10508": null,
				"workratio": -1,
				"customfield_10509": null,
				"watches": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/TM-3605/watchers",
					"watchCount": 1,
					"isWatching": false
				},
				"lastViewed": null,
				"issuerestriction": {
					"issuerestrictions": {},
					"shouldDisplay": false
				},
				"created": "2022-10-06T15:25:05.825+0200",
				"epic": null,
				"priority": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/priority/3",
					"iconUrl": "https://tappytaps2.atlassian.net/images/icons/priorities/medium.svg",
					"name": "Medium",
					"id": "3"
				},
				"customfield_10100": null,
				"customfield_10101": "10000_*:*_1_*:*_1646947744_*|*_10001_*:*_1_*:*_0",
				"customfield_10102": null,
				"customfield_10300": null,
				"labels": [],
				"aggregatetimeoriginalestimate": null,
				"timeestimate": null,
				"versions": [],
				"issuelinks": [],
				"assignee": null,
				"updated": "2022-10-25T16:54:13.553+0200",
				"status": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/status/10001",
					"description": "",
					"iconUrl": "https://tappytaps2.atlassian.net/",
					"name": "Done",
					"id": "10001",
					"statusCategory": {
						"self": "https://tappytaps2.atlassian.net/rest/api/2/statuscategory/3",
						"id": 3,
						"key": "done",
						"colorName": "green",
						"name": "Done"
					}
				},
				"components": [],
				"timeoriginalestimate": null,
				"description": "* vyzkoušet zda nám funguje lokální párování na novějším androidu viz. komentář na [https://github.com/andriydruk/RxDNSSD|https://github.com/andriydruk/RxDNSSD|smart-link]",
				"timetracking": {},
				"customfield_10005": null,
				"security": null,
				"aggregatetimeestimate": null,
				"attachment": [],
				"flagged": false,
				"summary": "Otestovat https://github.com/andriydruk/RxDNSSD na Androidu 12 a 13",
				"creator": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/user?accountId=557058%3A4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"accountId": "557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"avatarUrls": {
						"48x48": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/48",
						"24x24": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/24",
						"16x16": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/16",
						"32x32": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/32"
					},
					"displayName": "Jan Sarson",
					"active": true,
					"timeZone": "Europe/Prague",
					"accountType": "atlassian"
				},
				"subtasks": [],
				"reporter": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/user?accountId=557058%3A4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"accountId": "557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"avatarUrls": {
						"48x48": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/48",
						"24x24": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/24",
						"16x16": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/16",
						"32x32": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/32"
					},
					"displayName": "Jan Sarson",
					"active": true,
					"timeZone": "Europe/Prague",
					"accountType": "atlassian"
				},
				"aggregateprogress": {
					"progress": 0,
					"total": 0
				},
				"customfield_10001": null,
				"customfield_10200": null,
				"customfield_10201": null,
				"customfield_10400": null,
				"customfield_10115": [
					{
						"id": 124,
						"name": "Sprint Tučňák (Jindra)",
						"state": "active",
						"boardId": 1,
						"goal": "Dodělat základní Android verzi Camerita (ať synchronizujeme vývoj)",
						"startDate": "2022-11-30T11:43:11.974Z",
						"endDate": "2022-12-19T13:38:00.000Z"
					}
				],
				"customfield_10511": null,
				"customfield_10116": "0|i00xks:i",
				"customfield_10512": null,
				"customfield_10513": null,
				"customfield_10117": null,
				"environment": null,
				"duedate": null,
				"progress": {
					"progress": 0,
					"total": 0
				},
				"comment": {
					"comments": [],
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/18454/comment",
					"maxResults": 0,
					"total": 0,
					"startAt": 0
				},
				"votes": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/TM-3605/votes",
					"votes": 0,
					"hasVoted": false
				},
				"worklog": {
					"startAt": 0,
					"maxResults": 20,
					"total": 0,
					"worklogs": []
				}
			}
		},
		{
			"expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
			"id": "18445",
			"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/issue/18445",
			"key": "TM-3596",
			"fields": {
				"statuscategorychangedate": "2022-10-25T16:53:51.746+0200",
				"issuetype": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issuetype/10100",
					"id": "10100",
					"description": "Functionality or a feature expressed as a user goal.",
					"iconUrl": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10315?size=medium",
					"name": "Story",
					"subtask": false,
					"avatarId": 10315,
					"hierarchyLevel": 0
				},
				"timespent": null,
				"sprint": {
					"id": 124,
					"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/sprint/124",
					"state": "active",
					"name": "Sprint Tučňák (Jindra)",
					"startDate": "2022-11-30T11:43:11.974Z",
					"endDate": "2022-12-19T13:38:00.000Z",
					"originBoardId": 1,
					"goal": "Dodělat základní Android verzi Camerita (ať synchronizujeme vývoj)"
				},
				"project": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/project/10000",
					"id": "10000",
					"key": "TM",
					"name": "TappyTaps development",
					"projectTypeKey": "software",
					"simplified": false,
					"avatarUrls": {
						"48x48": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324",
						"24x24": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=small",
						"16x16": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=xsmall",
						"32x32": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=medium"
					}
				},
				"fixVersions": [],
				"aggregatetimespent": null,
				"resolution": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/resolution/10000",
					"id": "10000",
					"description": "Work has been completed on this issue.",
					"name": "Done"
				},
				"customfield_10113": {
					"hasEpicLinkFieldDependency": false,
					"showField": false,
					"nonEditableReason": {
						"reason": "PLUGIN_LICENSE_ERROR",
						"message": "The Parent Link is only available to Jira Premium users."
					}
				},
				"customfield_10114": null,
				"customfield_10510": null,
				"customfield_10500": null,
				"customfield_10501": null,
				"customfield_10502": [],
				"customfield_10503": null,
				"customfield_10504": null,
				"customfield_10505": null,
				"resolutiondate": "2022-10-25T16:53:51.742+0200",
				"customfield_10506": null,
				"customfield_10507": null,
				"customfield_10508": null,
				"workratio": -1,
				"customfield_10509": null,
				"issuerestriction": {
					"issuerestrictions": {},
					"shouldDisplay": false
				},
				"watches": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/TM-3596/watchers",
					"watchCount": 1,
					"isWatching": false
				},
				"lastViewed": null,
				"created": "2022-09-14T12:40:07.138+0200",
				"epic": null,
				"priority": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/priority/3",
					"iconUrl": "https://tappytaps2.atlassian.net/images/icons/priorities/medium.svg",
					"name": "Medium",
					"id": "3"
				},
				"customfield_10100": null,
				"customfield_10101": "10000_*:*_1_*:*_3557624632_*|*_10001_*:*_1_*:*_0",
				"customfield_10102": null,
				"customfield_10300": null,
				"labels": [],
				"aggregatetimeoriginalestimate": null,
				"timeestimate": null,
				"versions": [],
				"issuelinks": [],
				"assignee": null,
				"updated": "2022-10-25T16:53:51.746+0200",
				"status": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/status/10001",
					"description": "",
					"iconUrl": "https://tappytaps2.atlassian.net/",
					"name": "Done",
					"id": "10001",
					"statusCategory": {
						"self": "https://tappytaps2.atlassian.net/rest/api/2/statuscategory/3",
						"id": 3,
						"key": "done",
						"colorName": "green",
						"name": "Done"
					}
				},
				"components": [],
				"timeoriginalestimate": null,
				"description": "* u deeplinku je require, ci neni\n* DeepLinkHandler.handleUrl - pri vytvareni deeplinku se predava, zda je acquire (match time je unique) - potreba zkontrolovat\n* deep link ma hasToBeA… deeplink",
				"timetracking": {},
				"customfield_10005": null,
				"security": null,
				"attachment": [],
				"aggregatetimeestimate": null,
				"flagged": false,
				"summary": "Zkontrolovat implementaci deeplinku na Androidu",
				"creator": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/user?accountId=557058%3A4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"accountId": "557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"avatarUrls": {
						"48x48": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/48",
						"24x24": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/24",
						"16x16": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/16",
						"32x32": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/32"
					},
					"displayName": "Jan Sarson",
					"active": true,
					"timeZone": "Europe/Prague",
					"accountType": "atlassian"
				},
				"subtasks": [],
				"reporter": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/user?accountId=557058%3A4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"accountId": "557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"avatarUrls": {
						"48x48": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/48",
						"24x24": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/24",
						"16x16": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/16",
						"32x32": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/32"
					},
					"displayName": "Jan Sarson",
					"active": true,
					"timeZone": "Europe/Prague",
					"accountType": "atlassian"
				},
				"aggregateprogress": {
					"progress": 0,
					"total": 0
				},
				"customfield_10001": null,
				"customfield_10200": null,
				"customfield_10201": null,
				"customfield_10400": null,
				"customfield_10511": null,
				"customfield_10115": [
					{
						"id": 124,
						"name": "Sprint Tučňák (Jindra)",
						"state": "active",
						"boardId": 1,
						"goal": "Dodělat základní Android verzi Camerita (ať synchronizujeme vývoj)",
						"startDate": "2022-11-30T11:43:11.974Z",
						"endDate": "2022-12-19T13:38:00.000Z"
					}
				],
				"customfield_10512": null,
				"customfield_10116": "0|i00xks:v",
				"environment": null,
				"customfield_10513": null,
				"customfield_10117": null,
				"duedate": null,
				"progress": {
					"progress": 0,
					"total": 0
				},
				"comment": {
					"comments": [],
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/18445/comment",
					"maxResults": 0,
					"total": 0,
					"startAt": 0
				},
				"votes": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/TM-3596/votes",
					"votes": 0,
					"hasVoted": false
				},
				"worklog": {
					"startAt": 0,
					"maxResults": 20,
					"total": 0,
					"worklogs": []
				}
			}
		},
		{
			"expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
			"id": "18462",
			"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/issue/18462",
			"key": "TM-3613",
			"fields": {
				"statuscategorychangedate": "2022-10-19T16:34:48.893+0200",
				"issuetype": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issuetype/10100",
					"id": "10100",
					"description": "Functionality or a feature expressed as a user goal.",
					"iconUrl": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10315?size=medium",
					"name": "Story",
					"subtask": false,
					"avatarId": 10315,
					"hierarchyLevel": 0
				},
				"timespent": null,
				"sprint": {
					"id": 124,
					"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/sprint/124",
					"state": "active",
					"name": "Sprint Tučňák (Jindra)",
					"startDate": "2022-11-30T11:43:11.974Z",
					"endDate": "2022-12-19T13:38:00.000Z",
					"originBoardId": 1,
					"goal": "Dodělat základní Android verzi Camerita (ať synchronizujeme vývoj)"
				},
				"project": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/project/10000",
					"id": "10000",
					"key": "TM",
					"name": "TappyTaps development",
					"projectTypeKey": "software",
					"simplified": false,
					"avatarUrls": {
						"48x48": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324",
						"24x24": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=small",
						"16x16": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=xsmall",
						"32x32": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=medium"
					}
				},
				"fixVersions": [],
				"aggregatetimespent": null,
				"resolution": null,
				"customfield_10113": {
					"hasEpicLinkFieldDependency": false,
					"showField": false,
					"nonEditableReason": {
						"reason": "PLUGIN_LICENSE_ERROR",
						"message": "The Parent Link is only available to Jira Premium users."
					}
				},
				"customfield_10114": null,
				"customfield_10510": null,
				"customfield_10500": null,
				"customfield_10501": null,
				"customfield_10502": [],
				"customfield_10503": null,
				"customfield_10504": null,
				"customfield_10505": null,
				"resolutiondate": null,
				"customfield_10506": null,
				"customfield_10507": null,
				"customfield_10508": null,
				"customfield_10509": null,
				"workratio": -1,
				"watches": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/TM-3613/watchers",
					"watchCount": 1,
					"isWatching": false
				},
				"issuerestriction": {
					"issuerestrictions": {},
					"shouldDisplay": false
				},
				"lastViewed": null,
				"created": "2022-10-19T16:34:48.467+0200",
				"epic": null,
				"customfield_10100": null,
				"priority": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/priority/3",
					"iconUrl": "https://tappytaps2.atlassian.net/images/icons/priorities/medium.svg",
					"name": "Medium",
					"id": "3"
				},
				"customfield_10101": null,
				"customfield_10300": null,
				"customfield_10102": null,
				"labels": [],
				"timeestimate": null,
				"aggregatetimeoriginalestimate": null,
				"versions": [],
				"issuelinks": [],
				"assignee": null,
				"updated": "2022-11-28T14:00:55.254+0100",
				"status": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/status/10000",
					"description": "",
					"iconUrl": "https://tappytaps2.atlassian.net/",
					"name": "To Do",
					"id": "10000",
					"statusCategory": {
						"self": "https://tappytaps2.atlassian.net/rest/api/2/statuscategory/2",
						"id": 2,
						"key": "new",
						"colorName": "blue-gray",
						"name": "To Do"
					}
				},
				"components": [],
				"timeoriginalestimate": null,
				"description": "* rozmýšlení\n* návrh\n* implementace backend\n\n* na dashboardu chceme popis co se děje:\n** do 15 minut - poslední hluk před X min.\n** několik eventů za posledních 60 min, 4 eventy\n** několik eventů za den, 8 eventů za posledních 24 hodin\n** event. během noci se nic nedělo, přes den nebyla žádná aktivita",
				"timetracking": {},
				"customfield_10005": null,
				"security": null,
				"aggregatetimeestimate": null,
				"attachment": [],
				"flagged": false,
				"summary": "Camerito - Activity log",
				"creator": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/user?accountId=557058%3A4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"accountId": "557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"avatarUrls": {
						"48x48": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/48",
						"24x24": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/24",
						"16x16": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/16",
						"32x32": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/32"
					},
					"displayName": "Jan Sarson",
					"active": true,
					"timeZone": "Europe/Prague",
					"accountType": "atlassian"
				},
				"subtasks": [
					{
						"id": "18488",
						"key": "TM-3639",
						"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/18488",
						"fields": {
							"summary": "programování backend",
							"status": {
								"self": "https://tappytaps2.atlassian.net/rest/api/2/status/10000",
								"description": "",
								"iconUrl": "https://tappytaps2.atlassian.net/",
								"name": "To Do",
								"id": "10000",
								"statusCategory": {
									"self": "https://tappytaps2.atlassian.net/rest/api/2/statuscategory/2",
									"id": 2,
									"key": "new",
									"colorName": "blue-gray",
									"name": "To Do"
								}
							},
							"priority": {
								"self": "https://tappytaps2.atlassian.net/rest/api/2/priority/3",
								"iconUrl": "https://tappytaps2.atlassian.net/images/icons/priorities/medium.svg",
								"name": "Medium",
								"id": "3"
							},
							"issuetype": {
								"self": "https://tappytaps2.atlassian.net/rest/api/2/issuetype/10102",
								"id": "10102",
								"description": "A small piece of work that's part of a larger task.",
								"iconUrl": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10316?size=medium",
								"name": "Sub-task",
								"subtask": true,
								"avatarId": 10316,
								"hierarchyLevel": -1
							}
						}
					},
					{
						"id": "18489",
						"key": "TM-3640",
						"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/18489",
						"fields": {
							"summary": "rozmýšlení",
							"status": {
								"self": "https://tappytaps2.atlassian.net/rest/api/2/status/10000",
								"description": "",
								"iconUrl": "https://tappytaps2.atlassian.net/",
								"name": "To Do",
								"id": "10000",
								"statusCategory": {
									"self": "https://tappytaps2.atlassian.net/rest/api/2/statuscategory/2",
									"id": 2,
									"key": "new",
									"colorName": "blue-gray",
									"name": "To Do"
								}
							},
							"priority": {
								"self": "https://tappytaps2.atlassian.net/rest/api/2/priority/3",
								"iconUrl": "https://tappytaps2.atlassian.net/images/icons/priorities/medium.svg",
								"name": "Medium",
								"id": "3"
							},
							"issuetype": {
								"self": "https://tappytaps2.atlassian.net/rest/api/2/issuetype/10102",
								"id": "10102",
								"description": "A small piece of work that's part of a larger task.",
								"iconUrl": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10316?size=medium",
								"name": "Sub-task",
								"subtask": true,
								"avatarId": 10316,
								"hierarchyLevel": -1
							}
						}
					}
				],
				"reporter": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/user?accountId=557058%3A4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"accountId": "557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"avatarUrls": {
						"48x48": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/48",
						"24x24": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/24",
						"16x16": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/16",
						"32x32": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/32"
					},
					"displayName": "Jan Sarson",
					"active": true,
					"timeZone": "Europe/Prague",
					"accountType": "atlassian"
				},
				"aggregateprogress": {
					"progress": 0,
					"total": 0
				},
				"customfield_10001": null,
				"customfield_10200": null,
				"customfield_10201": null,
				"customfield_10400": null,
				"customfield_10511": null,
				"customfield_10115": [
					{
						"id": 123,
						"name": "Sprint Slimák (Lumáš)",
						"state": "closed",
						"boardId": 1,
						"goal": "Dohnat vývoj na Androidu",
						"startDate": "2022-10-23T07:00:48.895Z",
						"endDate": "2022-11-17T08:00:00.000Z",
						"completeDate": "2022-11-28T09:14:40.582Z"
					},
					{
						"id": 124,
						"name": "Sprint Tučňák (Jindra)",
						"state": "active",
						"boardId": 1,
						"goal": "Dodělat základní Android verzi Camerita (ať synchronizujeme vývoj)",
						"startDate": "2022-11-30T11:43:11.974Z",
						"endDate": "2022-12-19T13:38:00.000Z"
					}
				],
				"customfield_10512": null,
				"customfield_10116": "0|i00xq5:",
				"customfield_10117": 3.0,
				"environment": null,
				"customfield_10513": null,
				"duedate": null,
				"closedSprints": [
					{
						"id": 123,
						"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/sprint/123",
						"state": "closed",
						"name": "Sprint Slimák (Lumáš)",
						"startDate": "2022-10-23T07:00:48.895Z",
						"endDate": "2022-11-17T08:00:00.000Z",
						"completeDate": "2022-11-28T09:14:40.582Z",
						"originBoardId": 1,
						"goal": "Dohnat vývoj na Androidu"
					}
				],
				"progress": {
					"progress": 0,
					"total": 0
				},
				"comment": {
					"comments": [],
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/18462/comment",
					"maxResults": 0,
					"total": 0,
					"startAt": 0
				},
				"votes": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/TM-3613/votes",
					"votes": 0,
					"hasVoted": false
				},
				"worklog": {
					"startAt": 0,
					"maxResults": 20,
					"total": 0,
					"worklogs": []
				}
			}
		},
		{
			"expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
			"id": "18488",
			"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/issue/18488",
			"key": "TM-3639",
			"fields": {
				"statuscategorychangedate": "2022-10-31T13:28:00.942+0100",
				"issuetype": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issuetype/10102",
					"id": "10102",
					"description": "A small piece of work that's part of a larger task.",
					"iconUrl": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10316?size=medium",
					"name": "Sub-task",
					"subtask": true,
					"avatarId": 10316,
					"hierarchyLevel": -1
				},
				"parent": {
					"id": "18462",
					"key": "TM-3613",
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/18462",
					"fields": {
						"summary": "Camerito - Activity log",
						"status": {
							"self": "https://tappytaps2.atlassian.net/rest/api/2/status/10000",
							"description": "",
							"iconUrl": "https://tappytaps2.atlassian.net/",
							"name": "To Do",
							"id": "10000",
							"statusCategory": {
								"self": "https://tappytaps2.atlassian.net/rest/api/2/statuscategory/2",
								"id": 2,
								"key": "new",
								"colorName": "blue-gray",
								"name": "To Do"
							}
						},
						"priority": {
							"self": "https://tappytaps2.atlassian.net/rest/api/2/priority/3",
							"iconUrl": "https://tappytaps2.atlassian.net/images/icons/priorities/medium.svg",
							"name": "Medium",
							"id": "3"
						},
						"issuetype": {
							"self": "https://tappytaps2.atlassian.net/rest/api/2/issuetype/10100",
							"id": "10100",
							"description": "Functionality or a feature expressed as a user goal.",
							"iconUrl": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10315?size=medium",
							"name": "Story",
							"subtask": false,
							"avatarId": 10315,
							"hierarchyLevel": 0
						}
					}
				},
				"timespent": null,
				"sprint": {
					"id": 124,
					"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/sprint/124",
					"state": "active",
					"name": "Sprint Tučňák (Jindra)",
					"startDate": "2022-11-30T11:43:11.974Z",
					"endDate": "2022-12-19T13:38:00.000Z",
					"originBoardId": 1,
					"goal": "Dodělat základní Android verzi Camerita (ať synchronizujeme vývoj)"
				},
				"project": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/project/10000",
					"id": "10000",
					"key": "TM",
					"name": "TappyTaps development",
					"projectTypeKey": "software",
					"simplified": false,
					"avatarUrls": {
						"48x48": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324",
						"24x24": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=small",
						"16x16": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=xsmall",
						"32x32": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=medium"
					}
				},
				"fixVersions": [],
				"aggregatetimespent": null,
				"resolution": null,
				"customfield_10113": {
					"hasEpicLinkFieldDependency": false,
					"showField": false,
					"nonEditableReason": {
						"reason": "PLUGIN_LICENSE_ERROR",
						"message": "The Parent Link is only available to Jira Premium users."
					}
				},
				"customfield_10114": null,
				"customfield_10510": null,
				"customfield_10500": null,
				"customfield_10501": null,
				"customfield_10502": [],
				"customfield_10503": null,
				"customfield_10504": null,
				"customfield_10505": null,
				"customfield_10506": null,
				"resolutiondate": null,
				"customfield_10507": null,
				"customfield_10508": null,
				"workratio": -1,
				"customfield_10509": null,
				"watches": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/TM-3639/watchers",
					"watchCount": 1,
					"isWatching": false
				},
				"issuerestriction": {
					"issuerestrictions": {},
					"shouldDisplay": false
				},
				"lastViewed": null,
				"created": "2022-10-31T13:28:00.617+0100",
				"epic": null,
				"customfield_10100": null,
				"priority": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/priority/3",
					"iconUrl": "https://tappytaps2.atlassian.net/images/icons/priorities/medium.svg",
					"name": "Medium",
					"id": "3"
				},
				"customfield_10101": null,
				"customfield_10300": null,
				"customfield_10102": null,
				"labels": [],
				"aggregatetimeoriginalestimate": null,
				"timeestimate": null,
				"versions": [],
				"issuelinks": [],
				"assignee": null,
				"updated": "2022-10-31T13:28:01.174+0100",
				"status": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/status/10000",
					"description": "",
					"iconUrl": "https://tappytaps2.atlassian.net/",
					"name": "To Do",
					"id": "10000",
					"statusCategory": {
						"self": "https://tappytaps2.atlassian.net/rest/api/2/statuscategory/2",
						"id": 2,
						"key": "new",
						"colorName": "blue-gray",
						"name": "To Do"
					}
				},
				"components": [],
				"timeoriginalestimate": null,
				"description": null,
				"timetracking": {},
				"customfield_10005": null,
				"security": null,
				"attachment": [],
				"aggregatetimeestimate": null,
				"flagged": false,
				"summary": "programování backend",
				"creator": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/user?accountId=557058%3A02bd42e0-adb2-4778-89d7-f14637b35c04",
					"accountId": "557058:02bd42e0-adb2-4778-89d7-f14637b35c04",
					"avatarUrls": {
						"48x48": "https://secure.gravatar.com/avatar/c15828dfffe25cd2f5a0e02f6d18c13a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJS-2.png",
						"24x24": "https://secure.gravatar.com/avatar/c15828dfffe25cd2f5a0e02f6d18c13a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJS-2.png",
						"16x16": "https://secure.gravatar.com/avatar/c15828dfffe25cd2f5a0e02f6d18c13a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJS-2.png",
						"32x32": "https://secure.gravatar.com/avatar/c15828dfffe25cd2f5a0e02f6d18c13a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJS-2.png"
					},
					"displayName": "Jindrich Sarson",
					"active": true,
					"timeZone": "Europe/Prague",
					"accountType": "atlassian"
				},
				"subtasks": [],
				"reporter": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/user?accountId=557058%3A02bd42e0-adb2-4778-89d7-f14637b35c04",
					"accountId": "557058:02bd42e0-adb2-4778-89d7-f14637b35c04",
					"avatarUrls": {
						"48x48": "https://secure.gravatar.com/avatar/c15828dfffe25cd2f5a0e02f6d18c13a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJS-2.png",
						"24x24": "https://secure.gravatar.com/avatar/c15828dfffe25cd2f5a0e02f6d18c13a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJS-2.png",
						"16x16": "https://secure.gravatar.com/avatar/c15828dfffe25cd2f5a0e02f6d18c13a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJS-2.png",
						"32x32": "https://secure.gravatar.com/avatar/c15828dfffe25cd2f5a0e02f6d18c13a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJS-2.png"
					},
					"displayName": "Jindrich Sarson",
					"active": true,
					"timeZone": "Europe/Prague",
					"accountType": "atlassian"
				},
				"aggregateprogress": {
					"progress": 0,
					"total": 0
				},
				"customfield_10001": null,
				"customfield_10200": null,
				"customfield_10201": null,
				"customfield_10400": null,
				"customfield_10115": [
					{
						"id": 123,
						"name": "Sprint Slimák (Lumáš)",
						"state": "closed",
						"boardId": 1,
						"goal": "Dohnat vývoj na Androidu",
						"startDate": "2022-10-23T07:00:48.895Z",
						"endDate": "2022-11-17T08:00:00.000Z",
						"completeDate": "2022-11-28T09:14:40.582Z"
					},
					{
						"id": 124,
						"name": "Sprint Tučňák (Jindra)",
						"state": "active",
						"boardId": 1,
						"goal": "Dodělat základní Android verzi Camerita (ať synchronizujeme vývoj)",
						"startDate": "2022-11-30T11:43:11.974Z",
						"endDate": "2022-12-19T13:38:00.000Z"
					}
				],
				"customfield_10511": null,
				"customfield_10512": null,
				"customfield_10116": "0|i00xwd:",
				"customfield_10513": null,
				"environment": null,
				"duedate": null,
				"closedSprints": [
					{
						"id": 123,
						"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/sprint/123",
						"state": "closed",
						"name": "Sprint Slimák (Lumáš)",
						"startDate": "2022-10-23T07:00:48.895Z",
						"endDate": "2022-11-17T08:00:00.000Z",
						"completeDate": "2022-11-28T09:14:40.582Z",
						"originBoardId": 1,
						"goal": "Dohnat vývoj na Androidu"
					}
				],
				"progress": {
					"progress": 0,
					"total": 0
				},
				"votes": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/TM-3639/votes",
					"votes": 0,
					"hasVoted": false
				},
				"comment": {
					"comments": [],
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/18488/comment",
					"maxResults": 0,
					"total": 0,
					"startAt": 0
				},
				"worklog": {
					"startAt": 0,
					"maxResults": 20,
					"total": 0,
					"worklogs": []
				}
			}
		},
		{
			"expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
			"id": "18489",
			"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/issue/18489",
			"key": "TM-3640",
			"fields": {
				"statuscategorychangedate": "2022-10-31T13:28:47.696+0100",
				"issuetype": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issuetype/10102",
					"id": "10102",
					"description": "A small piece of work that's part of a larger task.",
					"iconUrl": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10316?size=medium",
					"name": "Sub-task",
					"subtask": true,
					"avatarId": 10316,
					"hierarchyLevel": -1
				},
				"parent": {
					"id": "18462",
					"key": "TM-3613",
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/18462",
					"fields": {
						"summary": "Camerito - Activity log",
						"status": {
							"self": "https://tappytaps2.atlassian.net/rest/api/2/status/10000",
							"description": "",
							"iconUrl": "https://tappytaps2.atlassian.net/",
							"name": "To Do",
							"id": "10000",
							"statusCategory": {
								"self": "https://tappytaps2.atlassian.net/rest/api/2/statuscategory/2",
								"id": 2,
								"key": "new",
								"colorName": "blue-gray",
								"name": "To Do"
							}
						},
						"priority": {
							"self": "https://tappytaps2.atlassian.net/rest/api/2/priority/3",
							"iconUrl": "https://tappytaps2.atlassian.net/images/icons/priorities/medium.svg",
							"name": "Medium",
							"id": "3"
						},
						"issuetype": {
							"self": "https://tappytaps2.atlassian.net/rest/api/2/issuetype/10100",
							"id": "10100",
							"description": "Functionality or a feature expressed as a user goal.",
							"iconUrl": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10315?size=medium",
							"name": "Story",
							"subtask": false,
							"avatarId": 10315,
							"hierarchyLevel": 0
						}
					}
				},
				"timespent": null,
				"sprint": {
					"id": 124,
					"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/sprint/124",
					"state": "active",
					"name": "Sprint Tučňák (Jindra)",
					"startDate": "2022-11-30T11:43:11.974Z",
					"endDate": "2022-12-19T13:38:00.000Z",
					"originBoardId": 1,
					"goal": "Dodělat základní Android verzi Camerita (ať synchronizujeme vývoj)"
				},
				"project": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/project/10000",
					"id": "10000",
					"key": "TM",
					"name": "TappyTaps development",
					"projectTypeKey": "software",
					"simplified": false,
					"avatarUrls": {
						"48x48": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324",
						"24x24": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=small",
						"16x16": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=xsmall",
						"32x32": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=medium"
					}
				},
				"fixVersions": [],
				"aggregatetimespent": null,
				"resolution": null,
				"customfield_10113": {
					"hasEpicLinkFieldDependency": false,
					"showField": false,
					"nonEditableReason": {
						"reason": "PLUGIN_LICENSE_ERROR",
						"message": "The Parent Link is only available to Jira Premium users."
					}
				},
				"customfield_10114": null,
				"customfield_10510": null,
				"customfield_10500": null,
				"customfield_10501": null,
				"customfield_10502": [],
				"customfield_10503": null,
				"customfield_10504": null,
				"customfield_10505": null,
				"customfield_10506": null,
				"resolutiondate": null,
				"customfield_10507": null,
				"customfield_10508": null,
				"workratio": -1,
				"customfield_10509": null,
				"lastViewed": null,
				"issuerestriction": {
					"issuerestrictions": {},
					"shouldDisplay": false
				},
				"watches": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/TM-3640/watchers",
					"watchCount": 1,
					"isWatching": false
				},
				"created": "2022-10-31T13:28:47.385+0100",
				"epic": null,
				"customfield_10100": null,
				"priority": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/priority/3",
					"iconUrl": "https://tappytaps2.atlassian.net/images/icons/priorities/medium.svg",
					"name": "Medium",
					"id": "3"
				},
				"customfield_10101": null,
				"customfield_10102": null,
				"customfield_10300": null,
				"labels": [],
				"timeestimate": null,
				"aggregatetimeoriginalestimate": null,
				"versions": [],
				"issuelinks": [],
				"assignee": null,
				"updated": "2022-10-31T13:28:47.981+0100",
				"status": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/status/10000",
					"description": "",
					"iconUrl": "https://tappytaps2.atlassian.net/",
					"name": "To Do",
					"id": "10000",
					"statusCategory": {
						"self": "https://tappytaps2.atlassian.net/rest/api/2/statuscategory/2",
						"id": 2,
						"key": "new",
						"colorName": "blue-gray",
						"name": "To Do"
					}
				},
				"components": [],
				"timeoriginalestimate": null,
				"description": null,
				"timetracking": {},
				"customfield_10005": null,
				"security": null,
				"attachment": [],
				"aggregatetimeestimate": null,
				"flagged": false,
				"summary": "rozmýšlení",
				"creator": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/user?accountId=557058%3A02bd42e0-adb2-4778-89d7-f14637b35c04",
					"accountId": "557058:02bd42e0-adb2-4778-89d7-f14637b35c04",
					"avatarUrls": {
						"48x48": "https://secure.gravatar.com/avatar/c15828dfffe25cd2f5a0e02f6d18c13a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJS-2.png",
						"24x24": "https://secure.gravatar.com/avatar/c15828dfffe25cd2f5a0e02f6d18c13a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJS-2.png",
						"16x16": "https://secure.gravatar.com/avatar/c15828dfffe25cd2f5a0e02f6d18c13a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJS-2.png",
						"32x32": "https://secure.gravatar.com/avatar/c15828dfffe25cd2f5a0e02f6d18c13a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJS-2.png"
					},
					"displayName": "Jindrich Sarson",
					"active": true,
					"timeZone": "Europe/Prague",
					"accountType": "atlassian"
				},
				"subtasks": [],
				"reporter": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/user?accountId=557058%3A02bd42e0-adb2-4778-89d7-f14637b35c04",
					"accountId": "557058:02bd42e0-adb2-4778-89d7-f14637b35c04",
					"avatarUrls": {
						"48x48": "https://secure.gravatar.com/avatar/c15828dfffe25cd2f5a0e02f6d18c13a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJS-2.png",
						"24x24": "https://secure.gravatar.com/avatar/c15828dfffe25cd2f5a0e02f6d18c13a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJS-2.png",
						"16x16": "https://secure.gravatar.com/avatar/c15828dfffe25cd2f5a0e02f6d18c13a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJS-2.png",
						"32x32": "https://secure.gravatar.com/avatar/c15828dfffe25cd2f5a0e02f6d18c13a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJS-2.png"
					},
					"displayName": "Jindrich Sarson",
					"active": true,
					"timeZone": "Europe/Prague",
					"accountType": "atlassian"
				},
				"aggregateprogress": {
					"progress": 0,
					"total": 0
				},
				"customfield_10001": null,
				"customfield_10200": null,
				"customfield_10201": null,
				"customfield_10400": null,
				"customfield_10511": null,
				"customfield_10115": [
					{
						"id": 123,
						"name": "Sprint Slimák (Lumáš)",
						"state": "closed",
						"boardId": 1,
						"goal": "Dohnat vývoj na Androidu",
						"startDate": "2022-10-23T07:00:48.895Z",
						"endDate": "2022-11-17T08:00:00.000Z",
						"completeDate": "2022-11-28T09:14:40.582Z"
					},
					{
						"id": 124,
						"name": "Sprint Tučňák (Jindra)",
						"state": "active",
						"boardId": 1,
						"goal": "Dodělat základní Android verzi Camerita (ať synchronizujeme vývoj)",
						"startDate": "2022-11-30T11:43:11.974Z",
						"endDate": "2022-12-19T13:38:00.000Z"
					}
				],
				"customfield_10512": null,
				"customfield_10116": "0|i00xwl:",
				"customfield_10513": null,
				"environment": null,
				"duedate": null,
				"closedSprints": [
					{
						"id": 123,
						"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/sprint/123",
						"state": "closed",
						"name": "Sprint Slimák (Lumáš)",
						"startDate": "2022-10-23T07:00:48.895Z",
						"endDate": "2022-11-17T08:00:00.000Z",
						"completeDate": "2022-11-28T09:14:40.582Z",
						"originBoardId": 1,
						"goal": "Dohnat vývoj na Androidu"
					}
				],
				"progress": {
					"progress": 0,
					"total": 0
				},
				"votes": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/TM-3640/votes",
					"votes": 0,
					"hasVoted": false
				},
				"comment": {
					"comments": [],
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/18489/comment",
					"maxResults": 0,
					"total": 0,
					"startAt": 0
				},
				"worklog": {
					"startAt": 0,
					"maxResults": 20,
					"total": 0,
					"worklogs": []
				}
			}
		},
		{
			"expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
			"id": "18464",
			"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/issue/18464",
			"key": "TM-3615",
			"fields": {
				"statuscategorychangedate": "2023-01-05T12:45:25.919+0100",
				"issuetype": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issuetype/10100",
					"id": "10100",
					"description": "Functionality or a feature expressed as a user goal.",
					"iconUrl": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10315?size=medium",
					"name": "Story",
					"subtask": false,
					"avatarId": 10315,
					"hierarchyLevel": 0
				},
				"timespent": null,
				"sprint": {
					"id": 124,
					"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/sprint/124",
					"state": "active",
					"name": "Sprint Tučňák (Jindra)",
					"startDate": "2022-11-30T11:43:11.974Z",
					"endDate": "2022-12-19T13:38:00.000Z",
					"originBoardId": 1,
					"goal": "Dodělat základní Android verzi Camerita (ať synchronizujeme vývoj)"
				},
				"project": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/project/10000",
					"id": "10000",
					"key": "TM",
					"name": "TappyTaps development",
					"projectTypeKey": "software",
					"simplified": false,
					"avatarUrls": {
						"48x48": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324",
						"24x24": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=small",
						"16x16": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=xsmall",
						"32x32": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=medium"
					}
				},
				"fixVersions": [],
				"aggregatetimespent": null,
				"resolution": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/resolution/10000",
					"id": "10000",
					"description": "Work has been completed on this issue.",
					"name": "Done"
				},
				"customfield_10113": {
					"hasEpicLinkFieldDependency": false,
					"showField": false,
					"nonEditableReason": {
						"reason": "PLUGIN_LICENSE_ERROR",
						"message": "The Parent Link is only available to Jira Premium users."
					}
				},
				"customfield_10510": null,
				"customfield_10114": null,
				"customfield_10500": null,
				"customfield_10501": null,
				"customfield_10502": [],
				"customfield_10503": null,
				"customfield_10504": null,
				"customfield_10505": null,
				"customfield_10506": null,
				"resolutiondate": "2023-01-05T12:45:25.914+0100",
				"customfield_10507": null,
				"customfield_10508": null,
				"workratio": -1,
				"customfield_10509": null,
				"lastViewed": null,
				"watches": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/TM-3615/watchers",
					"watchCount": 1,
					"isWatching": false
				},
				"issuerestriction": {
					"issuerestrictions": {},
					"shouldDisplay": false
				},
				"created": "2022-10-19T21:19:18.543+0200",
				"epic": null,
				"customfield_10100": null,
				"priority": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/priority/3",
					"iconUrl": "https://tappytaps2.atlassian.net/images/icons/priorities/medium.svg",
					"name": "Medium",
					"id": "3"
				},
				"customfield_10101": "10000_*:*_1_*:*_6711967392_*|*_10001_*:*_1_*:*_0",
				"customfield_10300": null,
				"customfield_10102": null,
				"labels": [],
				"aggregatetimeoriginalestimate": null,
				"timeestimate": null,
				"versions": [],
				"issuelinks": [],
				"assignee": null,
				"updated": "2023-01-05T12:45:25.918+0100",
				"status": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/status/10001",
					"description": "",
					"iconUrl": "https://tappytaps2.atlassian.net/",
					"name": "Done",
					"id": "10001",
					"statusCategory": {
						"self": "https://tappytaps2.atlassian.net/rest/api/2/statuscategory/3",
						"id": 3,
						"key": "done",
						"colorName": "green",
						"name": "Done"
					}
				},
				"components": [],
				"timeoriginalestimate": null,
				"description": "* celé menu PS uložené v backendu (nebude se teďka implementovat synchronizace)\n** uložené lokálně (DB, JSON, apod.)\n** ukládat asi klíče tlačítek *(pořádně se zamyslet)*\n* bude to jako vlastnost kamerky\n* zamyslet se \n** nad kompatibilitou se starší verzi\n** defaultní pořadí jednotlivých itemů",
				"timetracking": {},
				"customfield_10005": null,
				"security": null,
				"attachment": [],
				"aggregatetimeestimate": null,
				"flagged": false,
				"summary": "Menu uložené v backendu / per camera (iOS)",
				"creator": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/user?accountId=557058%3A4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"accountId": "557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"avatarUrls": {
						"48x48": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/48",
						"24x24": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/24",
						"16x16": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/16",
						"32x32": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/32"
					},
					"displayName": "Jan Sarson",
					"active": true,
					"timeZone": "Europe/Prague",
					"accountType": "atlassian"
				},
				"subtasks": [
					{
						"id": "18475",
						"key": "TM-3626",
						"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/18475",
						"fields": {
							"summary": "Zamyšlení a konzultace",
							"status": {
								"self": "https://tappytaps2.atlassian.net/rest/api/2/status/10001",
								"description": "",
								"iconUrl": "https://tappytaps2.atlassian.net/",
								"name": "Done",
								"id": "10001",
								"statusCategory": {
									"self": "https://tappytaps2.atlassian.net/rest/api/2/statuscategory/3",
									"id": 3,
									"key": "done",
									"colorName": "green",
									"name": "Done"
								}
							},
							"priority": {
								"self": "https://tappytaps2.atlassian.net/rest/api/2/priority/3",
								"iconUrl": "https://tappytaps2.atlassian.net/images/icons/priorities/medium.svg",
								"name": "Medium",
								"id": "3"
							},
							"issuetype": {
								"self": "https://tappytaps2.atlassian.net/rest/api/2/issuetype/10102",
								"id": "10102",
								"description": "A small piece of work that's part of a larger task.",
								"iconUrl": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10316?size=medium",
								"name": "Sub-task",
								"subtask": true,
								"avatarId": 10316,
								"hierarchyLevel": -1
							}
						}
					},
					{
						"id": "18476",
						"key": "TM-3627",
						"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/18476",
						"fields": {
							"summary": "Programování backend",
							"status": {
								"self": "https://tappytaps2.atlassian.net/rest/api/2/status/10001",
								"description": "",
								"iconUrl": "https://tappytaps2.atlassian.net/",
								"name": "Done",
								"id": "10001",
								"statusCategory": {
									"self": "https://tappytaps2.atlassian.net/rest/api/2/statuscategory/3",
									"id": 3,
									"key": "done",
									"colorName": "green",
									"name": "Done"
								}
							},
							"priority": {
								"self": "https://tappytaps2.atlassian.net/rest/api/2/priority/3",
								"iconUrl": "https://tappytaps2.atlassian.net/images/icons/priorities/medium.svg",
								"name": "Medium",
								"id": "3"
							},
							"issuetype": {
								"self": "https://tappytaps2.atlassian.net/rest/api/2/issuetype/10102",
								"id": "10102",
								"description": "A small piece of work that's part of a larger task.",
								"iconUrl": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10316?size=medium",
								"name": "Sub-task",
								"subtask": true,
								"avatarId": 10316,
								"hierarchyLevel": -1
							}
						}
					},
					{
						"id": "18477",
						"key": "TM-3628",
						"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/18477",
						"fields": {
							"summary": "Programování iOS",
							"status": {
								"self": "https://tappytaps2.atlassian.net/rest/api/2/status/10001",
								"description": "",
								"iconUrl": "https://tappytaps2.atlassian.net/",
								"name": "Done",
								"id": "10001",
								"statusCategory": {
									"self": "https://tappytaps2.atlassian.net/rest/api/2/statuscategory/3",
									"id": 3,
									"key": "done",
									"colorName": "green",
									"name": "Done"
								}
							},
							"priority": {
								"self": "https://tappytaps2.atlassian.net/rest/api/2/priority/3",
								"iconUrl": "https://tappytaps2.atlassian.net/images/icons/priorities/medium.svg",
								"name": "Medium",
								"id": "3"
							},
							"issuetype": {
								"self": "https://tappytaps2.atlassian.net/rest/api/2/issuetype/10102",
								"id": "10102",
								"description": "A small piece of work that's part of a larger task.",
								"iconUrl": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10316?size=medium",
								"name": "Sub-task",
								"subtask": true,
								"avatarId": 10316,
								"hierarchyLevel": -1
							}
						}
					},
					{
						"id": "18478",
						"key": "TM-3629",
						"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/18478",
						"fields": {
							"summary": "Programování Android",
							"status": {
								"self": "https://tappytaps2.atlassian.net/rest/api/2/status/10001",
								"description": "",
								"iconUrl": "https://tappytaps2.atlassian.net/",
								"name": "Done",
								"id": "10001",
								"statusCategory": {
									"self": "https://tappytaps2.atlassian.net/rest/api/2/statuscategory/3",
									"id": 3,
									"key": "done",
									"colorName": "green",
									"name": "Done"
								}
							},
							"priority": {
								"self": "https://tappytaps2.atlassian.net/rest/api/2/priority/3",
								"iconUrl": "https://tappytaps2.atlassian.net/images/icons/priorities/medium.svg",
								"name": "Medium",
								"id": "3"
							},
							"issuetype": {
								"self": "https://tappytaps2.atlassian.net/rest/api/2/issuetype/10102",
								"id": "10102",
								"description": "A small piece of work that's part of a larger task.",
								"iconUrl": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10316?size=medium",
								"name": "Sub-task",
								"subtask": true,
								"avatarId": 10316,
								"hierarchyLevel": -1
							}
						}
					}
				],
				"reporter": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/user?accountId=557058%3A4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"accountId": "557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"avatarUrls": {
						"48x48": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/48",
						"24x24": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/24",
						"16x16": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/16",
						"32x32": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/32"
					},
					"displayName": "Jan Sarson",
					"active": true,
					"timeZone": "Europe/Prague",
					"accountType": "atlassian"
				},
				"aggregateprogress": {
					"progress": 0,
					"total": 0
				},
				"customfield_10001": null,
				"customfield_10200": null,
				"customfield_10201": null,
				"customfield_10400": null,
				"customfield_10115": [
					{
						"id": 123,
						"name": "Sprint Slimák (Lumáš)",
						"state": "closed",
						"boardId": 1,
						"goal": "Dohnat vývoj na Androidu",
						"startDate": "2022-10-23T07:00:48.895Z",
						"endDate": "2022-11-17T08:00:00.000Z",
						"completeDate": "2022-11-28T09:14:40.582Z"
					},
					{
						"id": 124,
						"name": "Sprint Tučňák (Jindra)",
						"state": "active",
						"boardId": 1,
						"goal": "Dodělat základní Android verzi Camerita (ať synchronizujeme vývoj)",
						"startDate": "2022-11-30T11:43:11.974Z",
						"endDate": "2022-12-19T13:38:00.000Z"
					}
				],
				"customfield_10511": null,
				"customfield_10116": "0|i00xqt:",
				"customfield_10512": null,
				"environment": null,
				"customfield_10513": null,
				"customfield_10117": 1.0,
				"duedate": null,
				"closedSprints": [
					{
						"id": 123,
						"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/sprint/123",
						"state": "closed",
						"name": "Sprint Slimák (Lumáš)",
						"startDate": "2022-10-23T07:00:48.895Z",
						"endDate": "2022-11-17T08:00:00.000Z",
						"completeDate": "2022-11-28T09:14:40.582Z",
						"originBoardId": 1,
						"goal": "Dohnat vývoj na Androidu"
					}
				],
				"progress": {
					"progress": 0,
					"total": 0
				},
				"comment": {
					"comments": [],
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/18464/comment",
					"maxResults": 0,
					"total": 0,
					"startAt": 0
				},
				"votes": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/TM-3615/votes",
					"votes": 0,
					"hasVoted": false
				},
				"worklog": {
					"startAt": 0,
					"maxResults": 20,
					"total": 0,
					"worklogs": []
				}
			}
		},
		{
			"expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
			"id": "18475",
			"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/issue/18475",
			"key": "TM-3626",
			"fields": {
				"statuscategorychangedate": "2023-01-05T12:45:20.395+0100",
				"issuetype": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issuetype/10102",
					"id": "10102",
					"description": "A small piece of work that's part of a larger task.",
					"iconUrl": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10316?size=medium",
					"name": "Sub-task",
					"subtask": true,
					"avatarId": 10316,
					"hierarchyLevel": -1
				},
				"parent": {
					"id": "18464",
					"key": "TM-3615",
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/18464",
					"fields": {
						"summary": "Menu uložené v backendu / per camera (iOS)",
						"status": {
							"self": "https://tappytaps2.atlassian.net/rest/api/2/status/10001",
							"description": "",
							"iconUrl": "https://tappytaps2.atlassian.net/",
							"name": "Done",
							"id": "10001",
							"statusCategory": {
								"self": "https://tappytaps2.atlassian.net/rest/api/2/statuscategory/3",
								"id": 3,
								"key": "done",
								"colorName": "green",
								"name": "Done"
							}
						},
						"priority": {
							"self": "https://tappytaps2.atlassian.net/rest/api/2/priority/3",
							"iconUrl": "https://tappytaps2.atlassian.net/images/icons/priorities/medium.svg",
							"name": "Medium",
							"id": "3"
						},
						"issuetype": {
							"self": "https://tappytaps2.atlassian.net/rest/api/2/issuetype/10100",
							"id": "10100",
							"description": "Functionality or a feature expressed as a user goal.",
							"iconUrl": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10315?size=medium",
							"name": "Story",
							"subtask": false,
							"avatarId": 10315,
							"hierarchyLevel": 0
						}
					}
				},
				"timespent": null,
				"sprint": {
					"id": 124,
					"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/sprint/124",
					"state": "active",
					"name": "Sprint Tučňák (Jindra)",
					"startDate": "2022-11-30T11:43:11.974Z",
					"endDate": "2022-12-19T13:38:00.000Z",
					"originBoardId": 1,
					"goal": "Dodělat základní Android verzi Camerita (ať synchronizujeme vývoj)"
				},
				"project": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/project/10000",
					"id": "10000",
					"key": "TM",
					"name": "TappyTaps development",
					"projectTypeKey": "software",
					"simplified": false,
					"avatarUrls": {
						"48x48": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324",
						"24x24": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=small",
						"16x16": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=xsmall",
						"32x32": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=medium"
					}
				},
				"fixVersions": [],
				"aggregatetimespent": null,
				"resolution": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/resolution/10000",
					"id": "10000",
					"description": "Work has been completed on this issue.",
					"name": "Done"
				},
				"customfield_10113": {
					"hasEpicLinkFieldDependency": false,
					"showField": false,
					"nonEditableReason": {
						"reason": "PLUGIN_LICENSE_ERROR",
						"message": "The Parent Link is only available to Jira Premium users."
					}
				},
				"customfield_10114": null,
				"customfield_10510": null,
				"customfield_10500": null,
				"customfield_10501": null,
				"customfield_10502": [],
				"customfield_10503": null,
				"customfield_10504": null,
				"customfield_10505": null,
				"resolutiondate": "2023-01-05T12:45:20.392+0100",
				"customfield_10506": null,
				"customfield_10507": null,
				"customfield_10508": null,
				"customfield_10509": null,
				"workratio": -1,
				"watches": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/TM-3626/watchers",
					"watchCount": 1,
					"isWatching": false
				},
				"lastViewed": null,
				"issuerestriction": {
					"issuerestrictions": {},
					"shouldDisplay": false
				},
				"created": "2022-10-20T15:40:57.968+0200",
				"epic": null,
				"customfield_10100": null,
				"priority": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/priority/3",
					"iconUrl": "https://tappytaps2.atlassian.net/images/icons/priorities/medium.svg",
					"name": "Medium",
					"id": "3"
				},
				"customfield_10101": "3_*:*_1_*:*_337462551_*|*_10000_*:*_1_*:*_1210601774_*|*_10002_*:*_1_*:*_5097798126_*|*_10001_*:*_1_*:*_0",
				"customfield_10300": null,
				"customfield_10102": null,
				"labels": [],
				"timeestimate": null,
				"aggregatetimeoriginalestimate": null,
				"versions": [],
				"issuelinks": [],
				"assignee": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/user?accountId=557058%3A639f83e2-2814-4439-b805-3bc164b93999",
					"accountId": "557058:639f83e2-2814-4439-b805-3bc164b93999",
					"avatarUrls": {
						"48x48": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:639f83e2-2814-4439-b805-3bc164b93999/02863cb7-b09c-4894-ba6b-8ca717ea9055/48",
						"24x24": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:639f83e2-2814-4439-b805-3bc164b93999/02863cb7-b09c-4894-ba6b-8ca717ea9055/24",
						"16x16": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:639f83e2-2814-4439-b805-3bc164b93999/02863cb7-b09c-4894-ba6b-8ca717ea9055/16",
						"32x32": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:639f83e2-2814-4439-b805-3bc164b93999/02863cb7-b09c-4894-ba6b-8ca717ea9055/32"
					},
					"displayName": "Jiří Šimůnek",
					"active": true,
					"timeZone": "Europe/Prague",
					"accountType": "atlassian"
				},
				"updated": "2023-01-05T12:45:20.395+0100",
				"status": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/status/10001",
					"description": "",
					"iconUrl": "https://tappytaps2.atlassian.net/",
					"name": "Done",
					"id": "10001",
					"statusCategory": {
						"self": "https://tappytaps2.atlassian.net/rest/api/2/statuscategory/3",
						"id": 3,
						"key": "done",
						"colorName": "green",
						"name": "Done"
					}
				},
				"components": [],
				"timeoriginalestimate": null,
				"description": null,
				"timetracking": {},
				"customfield_10005": null,
				"security": null,
				"attachment": [],
				"aggregatetimeestimate": null,
				"flagged": false,
				"summary": "Zamyšlení a konzultace",
				"creator": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/user?accountId=557058%3A4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"accountId": "557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"avatarUrls": {
						"48x48": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/48",
						"24x24": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/24",
						"16x16": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/16",
						"32x32": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/32"
					},
					"displayName": "Jan Sarson",
					"active": true,
					"timeZone": "Europe/Prague",
					"accountType": "atlassian"
				},
				"subtasks": [],
				"reporter": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/user?accountId=557058%3A4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"accountId": "557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"avatarUrls": {
						"48x48": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/48",
						"24x24": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/24",
						"16x16": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/16",
						"32x32": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/32"
					},
					"displayName": "Jan Sarson",
					"active": true,
					"timeZone": "Europe/Prague",
					"accountType": "atlassian"
				},
				"aggregateprogress": {
					"progress": 0,
					"total": 0
				},
				"customfield_10001": null,
				"customfield_10200": null,
				"customfield_10201": null,
				"customfield_10400": null,
				"customfield_10511": null,
				"customfield_10115": [
					{
						"id": 123,
						"name": "Sprint Slimák (Lumáš)",
						"state": "closed",
						"boardId": 1,
						"goal": "Dohnat vývoj na Androidu",
						"startDate": "2022-10-23T07:00:48.895Z",
						"endDate": "2022-11-17T08:00:00.000Z",
						"completeDate": "2022-11-28T09:14:40.582Z"
					},
					{
						"id": 124,
						"name": "Sprint Tučňák (Jindra)",
						"state": "active",
						"boardId": 1,
						"goal": "Dodělat základní Android verzi Camerita (ať synchronizujeme vývoj)",
						"startDate": "2022-11-30T11:43:11.974Z",
						"endDate": "2022-12-19T13:38:00.000Z"
					}
				],
				"customfield_10512": null,
				"customfield_10116": "0|i00xst:",
				"customfield_10513": null,
				"environment": null,
				"duedate": null,
				"closedSprints": [
					{
						"id": 123,
						"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/sprint/123",
						"state": "closed",
						"name": "Sprint Slimák (Lumáš)",
						"startDate": "2022-10-23T07:00:48.895Z",
						"endDate": "2022-11-17T08:00:00.000Z",
						"completeDate": "2022-11-28T09:14:40.582Z",
						"originBoardId": 1,
						"goal": "Dohnat vývoj na Androidu"
					}
				],
				"progress": {
					"progress": 0,
					"total": 0
				},
				"comment": {
					"comments": [],
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/18475/comment",
					"maxResults": 0,
					"total": 0,
					"startAt": 0
				},
				"votes": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/TM-3626/votes",
					"votes": 0,
					"hasVoted": false
				},
				"worklog": {
					"startAt": 0,
					"maxResults": 20,
					"total": 0,
					"worklogs": []
				}
			}
		},
		{
			"expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
			"id": "18476",
			"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/issue/18476",
			"key": "TM-3627",
			"fields": {
				"statuscategorychangedate": "2023-01-05T12:45:21.479+0100",
				"issuetype": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issuetype/10102",
					"id": "10102",
					"description": "A small piece of work that's part of a larger task.",
					"iconUrl": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10316?size=medium",
					"name": "Sub-task",
					"subtask": true,
					"avatarId": 10316,
					"hierarchyLevel": -1
				},
				"parent": {
					"id": "18464",
					"key": "TM-3615",
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/18464",
					"fields": {
						"summary": "Menu uložené v backendu / per camera (iOS)",
						"status": {
							"self": "https://tappytaps2.atlassian.net/rest/api/2/status/10001",
							"description": "",
							"iconUrl": "https://tappytaps2.atlassian.net/",
							"name": "Done",
							"id": "10001",
							"statusCategory": {
								"self": "https://tappytaps2.atlassian.net/rest/api/2/statuscategory/3",
								"id": 3,
								"key": "done",
								"colorName": "green",
								"name": "Done"
							}
						},
						"priority": {
							"self": "https://tappytaps2.atlassian.net/rest/api/2/priority/3",
							"iconUrl": "https://tappytaps2.atlassian.net/images/icons/priorities/medium.svg",
							"name": "Medium",
							"id": "3"
						},
						"issuetype": {
							"self": "https://tappytaps2.atlassian.net/rest/api/2/issuetype/10100",
							"id": "10100",
							"description": "Functionality or a feature expressed as a user goal.",
							"iconUrl": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10315?size=medium",
							"name": "Story",
							"subtask": false,
							"avatarId": 10315,
							"hierarchyLevel": 0
						}
					}
				},
				"timespent": null,
				"sprint": {
					"id": 124,
					"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/sprint/124",
					"state": "active",
					"name": "Sprint Tučňák (Jindra)",
					"startDate": "2022-11-30T11:43:11.974Z",
					"endDate": "2022-12-19T13:38:00.000Z",
					"originBoardId": 1,
					"goal": "Dodělat základní Android verzi Camerita (ať synchronizujeme vývoj)"
				},
				"project": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/project/10000",
					"id": "10000",
					"key": "TM",
					"name": "TappyTaps development",
					"projectTypeKey": "software",
					"simplified": false,
					"avatarUrls": {
						"48x48": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324",
						"24x24": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=small",
						"16x16": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=xsmall",
						"32x32": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=medium"
					}
				},
				"fixVersions": [],
				"aggregatetimespent": null,
				"resolution": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/resolution/10000",
					"id": "10000",
					"description": "Work has been completed on this issue.",
					"name": "Done"
				},
				"customfield_10113": {
					"hasEpicLinkFieldDependency": false,
					"showField": false,
					"nonEditableReason": {
						"reason": "PLUGIN_LICENSE_ERROR",
						"message": "The Parent Link is only available to Jira Premium users."
					}
				},
				"customfield_10510": null,
				"customfield_10114": null,
				"customfield_10500": null,
				"customfield_10501": null,
				"customfield_10502": [],
				"customfield_10503": null,
				"customfield_10504": null,
				"customfield_10505": null,
				"customfield_10506": null,
				"resolutiondate": "2023-01-05T12:45:21.477+0100",
				"customfield_10507": null,
				"customfield_10508": null,
				"workratio": -1,
				"customfield_10509": null,
				"watches": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/TM-3627/watchers",
					"watchCount": 1,
					"isWatching": false
				},
				"lastViewed": null,
				"issuerestriction": {
					"issuerestrictions": {},
					"shouldDisplay": false
				},
				"created": "2022-10-20T15:41:01.489+0200",
				"epic": null,
				"customfield_10100": null,
				"priority": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/priority/3",
					"iconUrl": "https://tappytaps2.atlassian.net/images/icons/priorities/medium.svg",
					"name": "Medium",
					"id": "3"
				},
				"customfield_10101": "3_*:*_1_*:*_952097496_*|*_10000_*:*_1_*:*_1210607190_*|*_10002_*:*_1_*:*_4483155317_*|*_10001_*:*_1_*:*_0",
				"customfield_10102": null,
				"customfield_10300": null,
				"labels": [],
				"timeestimate": null,
				"aggregatetimeoriginalestimate": null,
				"versions": [],
				"issuelinks": [],
				"assignee": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/user?accountId=557058%3A639f83e2-2814-4439-b805-3bc164b93999",
					"accountId": "557058:639f83e2-2814-4439-b805-3bc164b93999",
					"avatarUrls": {
						"48x48": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:639f83e2-2814-4439-b805-3bc164b93999/02863cb7-b09c-4894-ba6b-8ca717ea9055/48",
						"24x24": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:639f83e2-2814-4439-b805-3bc164b93999/02863cb7-b09c-4894-ba6b-8ca717ea9055/24",
						"16x16": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:639f83e2-2814-4439-b805-3bc164b93999/02863cb7-b09c-4894-ba6b-8ca717ea9055/16",
						"32x32": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:639f83e2-2814-4439-b805-3bc164b93999/02863cb7-b09c-4894-ba6b-8ca717ea9055/32"
					},
					"displayName": "Jiří Šimůnek",
					"active": true,
					"timeZone": "Europe/Prague",
					"accountType": "atlassian"
				},
				"updated": "2023-01-05T12:45:21.479+0100",
				"status": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/status/10001",
					"description": "",
					"iconUrl": "https://tappytaps2.atlassian.net/",
					"name": "Done",
					"id": "10001",
					"statusCategory": {
						"self": "https://tappytaps2.atlassian.net/rest/api/2/statuscategory/3",
						"id": 3,
						"key": "done",
						"colorName": "green",
						"name": "Done"
					}
				},
				"components": [],
				"timeoriginalestimate": null,
				"description": null,
				"timetracking": {},
				"customfield_10005": null,
				"security": null,
				"attachment": [],
				"aggregatetimeestimate": null,
				"flagged": false,
				"summary": "Programování backend",
				"creator": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/user?accountId=557058%3A4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"accountId": "557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"avatarUrls": {
						"48x48": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/48",
						"24x24": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/24",
						"16x16": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/16",
						"32x32": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/32"
					},
					"displayName": "Jan Sarson",
					"active": true,
					"timeZone": "Europe/Prague",
					"accountType": "atlassian"
				},
				"subtasks": [],
				"reporter": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/user?accountId=557058%3A4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"accountId": "557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"avatarUrls": {
						"48x48": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/48",
						"24x24": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/24",
						"16x16": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/16",
						"32x32": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/32"
					},
					"displayName": "Jan Sarson",
					"active": true,
					"timeZone": "Europe/Prague",
					"accountType": "atlassian"
				},
				"aggregateprogress": {
					"progress": 0,
					"total": 0
				},
				"customfield_10001": null,
				"customfield_10200": null,
				"customfield_10201": null,
				"customfield_10400": null,
				"customfield_10511": null,
				"customfield_10115": [
					{
						"id": 123,
						"name": "Sprint Slimák (Lumáš)",
						"state": "closed",
						"boardId": 1,
						"goal": "Dohnat vývoj na Androidu",
						"startDate": "2022-10-23T07:00:48.895Z",
						"endDate": "2022-11-17T08:00:00.000Z",
						"completeDate": "2022-11-28T09:14:40.582Z"
					},
					{
						"id": 124,
						"name": "Sprint Tučňák (Jindra)",
						"state": "active",
						"boardId": 1,
						"goal": "Dodělat základní Android verzi Camerita (ať synchronizujeme vývoj)",
						"startDate": "2022-11-30T11:43:11.974Z",
						"endDate": "2022-12-19T13:38:00.000Z"
					}
				],
				"customfield_10512": null,
				"customfield_10116": "0|i00xt1:",
				"environment": null,
				"customfield_10513": null,
				"duedate": null,
				"closedSprints": [
					{
						"id": 123,
						"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/sprint/123",
						"state": "closed",
						"name": "Sprint Slimák (Lumáš)",
						"startDate": "2022-10-23T07:00:48.895Z",
						"endDate": "2022-11-17T08:00:00.000Z",
						"completeDate": "2022-11-28T09:14:40.582Z",
						"originBoardId": 1,
						"goal": "Dohnat vývoj na Androidu"
					}
				],
				"progress": {
					"progress": 0,
					"total": 0
				},
				"votes": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/TM-3627/votes",
					"votes": 0,
					"hasVoted": false
				},
				"comment": {
					"comments": [],
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/18476/comment",
					"maxResults": 0,
					"total": 0,
					"startAt": 0
				},
				"worklog": {
					"startAt": 0,
					"maxResults": 20,
					"total": 0,
					"worklogs": []
				}
			}
		},
		{
			"expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
			"id": "18477",
			"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/issue/18477",
			"key": "TM-3628",
			"fields": {
				"statuscategorychangedate": "2023-01-05T12:45:22.555+0100",
				"issuetype": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issuetype/10102",
					"id": "10102",
					"description": "A small piece of work that's part of a larger task.",
					"iconUrl": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10316?size=medium",
					"name": "Sub-task",
					"subtask": true,
					"avatarId": 10316,
					"hierarchyLevel": -1
				},
				"parent": {
					"id": "18464",
					"key": "TM-3615",
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/18464",
					"fields": {
						"summary": "Menu uložené v backendu / per camera (iOS)",
						"status": {
							"self": "https://tappytaps2.atlassian.net/rest/api/2/status/10001",
							"description": "",
							"iconUrl": "https://tappytaps2.atlassian.net/",
							"name": "Done",
							"id": "10001",
							"statusCategory": {
								"self": "https://tappytaps2.atlassian.net/rest/api/2/statuscategory/3",
								"id": 3,
								"key": "done",
								"colorName": "green",
								"name": "Done"
							}
						},
						"priority": {
							"self": "https://tappytaps2.atlassian.net/rest/api/2/priority/3",
							"iconUrl": "https://tappytaps2.atlassian.net/images/icons/priorities/medium.svg",
							"name": "Medium",
							"id": "3"
						},
						"issuetype": {
							"self": "https://tappytaps2.atlassian.net/rest/api/2/issuetype/10100",
							"id": "10100",
							"description": "Functionality or a feature expressed as a user goal.",
							"iconUrl": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10315?size=medium",
							"name": "Story",
							"subtask": false,
							"avatarId": 10315,
							"hierarchyLevel": 0
						}
					}
				},
				"timespent": null,
				"sprint": {
					"id": 124,
					"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/sprint/124",
					"state": "active",
					"name": "Sprint Tučňák (Jindra)",
					"startDate": "2022-11-30T11:43:11.974Z",
					"endDate": "2022-12-19T13:38:00.000Z",
					"originBoardId": 1,
					"goal": "Dodělat základní Android verzi Camerita (ať synchronizujeme vývoj)"
				},
				"project": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/project/10000",
					"id": "10000",
					"key": "TM",
					"name": "TappyTaps development",
					"projectTypeKey": "software",
					"simplified": false,
					"avatarUrls": {
						"48x48": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324",
						"24x24": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=small",
						"16x16": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=xsmall",
						"32x32": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=medium"
					}
				},
				"fixVersions": [],
				"aggregatetimespent": null,
				"resolution": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/resolution/10000",
					"id": "10000",
					"description": "Work has been completed on this issue.",
					"name": "Done"
				},
				"customfield_10113": {
					"hasEpicLinkFieldDependency": false,
					"showField": false,
					"nonEditableReason": {
						"reason": "PLUGIN_LICENSE_ERROR",
						"message": "The Parent Link is only available to Jira Premium users."
					}
				},
				"customfield_10510": null,
				"customfield_10114": null,
				"customfield_10500": null,
				"customfield_10501": null,
				"customfield_10502": [],
				"customfield_10503": null,
				"customfield_10504": null,
				"customfield_10505": null,
				"resolutiondate": "2023-01-05T12:45:22.550+0100",
				"customfield_10506": null,
				"customfield_10507": null,
				"customfield_10508": null,
				"customfield_10509": null,
				"workratio": -1,
				"watches": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/TM-3628/watchers",
					"watchCount": 1,
					"isWatching": false
				},
				"lastViewed": null,
				"issuerestriction": {
					"issuerestrictions": {},
					"shouldDisplay": false
				},
				"created": "2022-10-20T15:41:15.668+0200",
				"epic": null,
				"priority": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/priority/3",
					"iconUrl": "https://tappytaps2.atlassian.net/images/icons/priorities/medium.svg",
					"name": "Medium",
					"id": "3"
				},
				"customfield_10100": null,
				"customfield_10101": "10000_*:*_1_*:*_4129676207_*|*_10002_*:*_1_*:*_2516170699_*|*_10001_*:*_1_*:*_0",
				"customfield_10102": null,
				"customfield_10300": null,
				"labels": [],
				"aggregatetimeoriginalestimate": null,
				"timeestimate": null,
				"versions": [],
				"issuelinks": [],
				"assignee": null,
				"updated": "2023-01-05T12:45:22.555+0100",
				"status": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/status/10001",
					"description": "",
					"iconUrl": "https://tappytaps2.atlassian.net/",
					"name": "Done",
					"id": "10001",
					"statusCategory": {
						"self": "https://tappytaps2.atlassian.net/rest/api/2/statuscategory/3",
						"id": 3,
						"key": "done",
						"colorName": "green",
						"name": "Done"
					}
				},
				"components": [],
				"timeoriginalestimate": null,
				"description": null,
				"timetracking": {},
				"customfield_10005": null,
				"security": null,
				"attachment": [],
				"aggregatetimeestimate": null,
				"flagged": false,
				"summary": "Programování iOS",
				"creator": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/user?accountId=557058%3A4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"accountId": "557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"avatarUrls": {
						"48x48": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/48",
						"24x24": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/24",
						"16x16": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/16",
						"32x32": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/32"
					},
					"displayName": "Jan Sarson",
					"active": true,
					"timeZone": "Europe/Prague",
					"accountType": "atlassian"
				},
				"subtasks": [],
				"reporter": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/user?accountId=557058%3A4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"accountId": "557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"avatarUrls": {
						"48x48": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/48",
						"24x24": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/24",
						"16x16": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/16",
						"32x32": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/32"
					},
					"displayName": "Jan Sarson",
					"active": true,
					"timeZone": "Europe/Prague",
					"accountType": "atlassian"
				},
				"aggregateprogress": {
					"progress": 0,
					"total": 0
				},
				"customfield_10001": null,
				"customfield_10200": null,
				"customfield_10201": null,
				"customfield_10400": null,
				"customfield_10511": null,
				"customfield_10115": [
					{
						"id": 123,
						"name": "Sprint Slimák (Lumáš)",
						"state": "closed",
						"boardId": 1,
						"goal": "Dohnat vývoj na Androidu",
						"startDate": "2022-10-23T07:00:48.895Z",
						"endDate": "2022-11-17T08:00:00.000Z",
						"completeDate": "2022-11-28T09:14:40.582Z"
					},
					{
						"id": 124,
						"name": "Sprint Tučňák (Jindra)",
						"state": "active",
						"boardId": 1,
						"goal": "Dodělat základní Android verzi Camerita (ať synchronizujeme vývoj)",
						"startDate": "2022-11-30T11:43:11.974Z",
						"endDate": "2022-12-19T13:38:00.000Z"
					}
				],
				"customfield_10512": null,
				"customfield_10116": "0|i00xt9:",
				"customfield_10513": null,
				"environment": null,
				"duedate": null,
				"closedSprints": [
					{
						"id": 123,
						"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/sprint/123",
						"state": "closed",
						"name": "Sprint Slimák (Lumáš)",
						"startDate": "2022-10-23T07:00:48.895Z",
						"endDate": "2022-11-17T08:00:00.000Z",
						"completeDate": "2022-11-28T09:14:40.582Z",
						"originBoardId": 1,
						"goal": "Dohnat vývoj na Androidu"
					}
				],
				"progress": {
					"progress": 0,
					"total": 0
				},
				"votes": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/TM-3628/votes",
					"votes": 0,
					"hasVoted": false
				},
				"comment": {
					"comments": [],
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/18477/comment",
					"maxResults": 0,
					"total": 0,
					"startAt": 0
				},
				"worklog": {
					"startAt": 0,
					"maxResults": 20,
					"total": 0,
					"worklogs": []
				}
			}
		},
		{
			"expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
			"id": "18478",
			"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/issue/18478",
			"key": "TM-3629",
			"fields": {
				"statuscategorychangedate": "2023-01-05T12:45:23.557+0100",
				"issuetype": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issuetype/10102",
					"id": "10102",
					"description": "A small piece of work that's part of a larger task.",
					"iconUrl": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10316?size=medium",
					"name": "Sub-task",
					"subtask": true,
					"avatarId": 10316,
					"hierarchyLevel": -1
				},
				"parent": {
					"id": "18464",
					"key": "TM-3615",
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/18464",
					"fields": {
						"summary": "Menu uložené v backendu / per camera (iOS)",
						"status": {
							"self": "https://tappytaps2.atlassian.net/rest/api/2/status/10001",
							"description": "",
							"iconUrl": "https://tappytaps2.atlassian.net/",
							"name": "Done",
							"id": "10001",
							"statusCategory": {
								"self": "https://tappytaps2.atlassian.net/rest/api/2/statuscategory/3",
								"id": 3,
								"key": "done",
								"colorName": "green",
								"name": "Done"
							}
						},
						"priority": {
							"self": "https://tappytaps2.atlassian.net/rest/api/2/priority/3",
							"iconUrl": "https://tappytaps2.atlassian.net/images/icons/priorities/medium.svg",
							"name": "Medium",
							"id": "3"
						},
						"issuetype": {
							"self": "https://tappytaps2.atlassian.net/rest/api/2/issuetype/10100",
							"id": "10100",
							"description": "Functionality or a feature expressed as a user goal.",
							"iconUrl": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10315?size=medium",
							"name": "Story",
							"subtask": false,
							"avatarId": 10315,
							"hierarchyLevel": 0
						}
					}
				},
				"timespent": null,
				"sprint": {
					"id": 124,
					"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/sprint/124",
					"state": "active",
					"name": "Sprint Tučňák (Jindra)",
					"startDate": "2022-11-30T11:43:11.974Z",
					"endDate": "2022-12-19T13:38:00.000Z",
					"originBoardId": 1,
					"goal": "Dodělat základní Android verzi Camerita (ať synchronizujeme vývoj)"
				},
				"project": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/project/10000",
					"id": "10000",
					"key": "TM",
					"name": "TappyTaps development",
					"projectTypeKey": "software",
					"simplified": false,
					"avatarUrls": {
						"48x48": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324",
						"24x24": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=small",
						"16x16": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=xsmall",
						"32x32": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=medium"
					}
				},
				"fixVersions": [],
				"aggregatetimespent": null,
				"resolution": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/resolution/10000",
					"id": "10000",
					"description": "Work has been completed on this issue.",
					"name": "Done"
				},
				"customfield_10113": {
					"hasEpicLinkFieldDependency": false,
					"showField": false,
					"nonEditableReason": {
						"reason": "PLUGIN_LICENSE_ERROR",
						"message": "The Parent Link is only available to Jira Premium users."
					}
				},
				"customfield_10510": null,
				"customfield_10114": null,
				"customfield_10500": null,
				"customfield_10501": null,
				"customfield_10502": [],
				"customfield_10503": null,
				"customfield_10504": null,
				"customfield_10505": null,
				"resolutiondate": "2023-01-05T12:45:23.554+0100",
				"customfield_10506": null,
				"customfield_10507": null,
				"customfield_10508": null,
				"customfield_10509": null,
				"workratio": -1,
				"lastViewed": null,
				"watches": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/TM-3629/watchers",
					"watchCount": 1,
					"isWatching": false
				},
				"issuerestriction": {
					"issuerestrictions": {},
					"shouldDisplay": false
				},
				"created": "2022-10-20T15:41:27.156+0200",
				"epic": null,
				"priority": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/priority/3",
					"iconUrl": "https://tappytaps2.atlassian.net/images/icons/priorities/medium.svg",
					"name": "Medium",
					"id": "3"
				},
				"customfield_10100": null,
				"customfield_10101": "3_*:*_1_*:*_107058485_*|*_10000_*:*_1_*:*_2137786752_*|*_10002_*:*_1_*:*_4400991191_*|*_10001_*:*_1_*:*_0",
				"customfield_10102": null,
				"customfield_10300": null,
				"labels": [],
				"aggregatetimeoriginalestimate": null,
				"timeestimate": null,
				"versions": [],
				"issuelinks": [],
				"assignee": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/user?accountId=557058%3A639f83e2-2814-4439-b805-3bc164b93999",
					"accountId": "557058:639f83e2-2814-4439-b805-3bc164b93999",
					"avatarUrls": {
						"48x48": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:639f83e2-2814-4439-b805-3bc164b93999/02863cb7-b09c-4894-ba6b-8ca717ea9055/48",
						"24x24": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:639f83e2-2814-4439-b805-3bc164b93999/02863cb7-b09c-4894-ba6b-8ca717ea9055/24",
						"16x16": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:639f83e2-2814-4439-b805-3bc164b93999/02863cb7-b09c-4894-ba6b-8ca717ea9055/16",
						"32x32": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:639f83e2-2814-4439-b805-3bc164b93999/02863cb7-b09c-4894-ba6b-8ca717ea9055/32"
					},
					"displayName": "Jiří Šimůnek",
					"active": true,
					"timeZone": "Europe/Prague",
					"accountType": "atlassian"
				},
				"updated": "2023-01-05T12:45:23.557+0100",
				"status": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/status/10001",
					"description": "",
					"iconUrl": "https://tappytaps2.atlassian.net/",
					"name": "Done",
					"id": "10001",
					"statusCategory": {
						"self": "https://tappytaps2.atlassian.net/rest/api/2/statuscategory/3",
						"id": 3,
						"key": "done",
						"colorName": "green",
						"name": "Done"
					}
				},
				"components": [],
				"timeoriginalestimate": null,
				"description": null,
				"timetracking": {},
				"customfield_10005": null,
				"security": null,
				"aggregatetimeestimate": null,
				"attachment": [],
				"flagged": false,
				"summary": "Programování Android",
				"creator": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/user?accountId=557058%3A4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"accountId": "557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"avatarUrls": {
						"48x48": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/48",
						"24x24": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/24",
						"16x16": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/16",
						"32x32": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/32"
					},
					"displayName": "Jan Sarson",
					"active": true,
					"timeZone": "Europe/Prague",
					"accountType": "atlassian"
				},
				"subtasks": [],
				"reporter": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/user?accountId=557058%3A4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"accountId": "557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"avatarUrls": {
						"48x48": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/48",
						"24x24": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/24",
						"16x16": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/16",
						"32x32": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/32"
					},
					"displayName": "Jan Sarson",
					"active": true,
					"timeZone": "Europe/Prague",
					"accountType": "atlassian"
				},
				"aggregateprogress": {
					"progress": 0,
					"total": 0
				},
				"customfield_10001": null,
				"customfield_10200": null,
				"customfield_10201": null,
				"customfield_10400": null,
				"customfield_10115": [
					{
						"id": 123,
						"name": "Sprint Slimák (Lumáš)",
						"state": "closed",
						"boardId": 1,
						"goal": "Dohnat vývoj na Androidu",
						"startDate": "2022-10-23T07:00:48.895Z",
						"endDate": "2022-11-17T08:00:00.000Z",
						"completeDate": "2022-11-28T09:14:40.582Z"
					},
					{
						"id": 124,
						"name": "Sprint Tučňák (Jindra)",
						"state": "active",
						"boardId": 1,
						"goal": "Dodělat základní Android verzi Camerita (ať synchronizujeme vývoj)",
						"startDate": "2022-11-30T11:43:11.974Z",
						"endDate": "2022-12-19T13:38:00.000Z"
					}
				],
				"customfield_10511": null,
				"customfield_10512": null,
				"customfield_10116": "0|i00xth:",
				"customfield_10513": null,
				"environment": null,
				"duedate": null,
				"closedSprints": [
					{
						"id": 123,
						"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/sprint/123",
						"state": "closed",
						"name": "Sprint Slimák (Lumáš)",
						"startDate": "2022-10-23T07:00:48.895Z",
						"endDate": "2022-11-17T08:00:00.000Z",
						"completeDate": "2022-11-28T09:14:40.582Z",
						"originBoardId": 1,
						"goal": "Dohnat vývoj na Androidu"
					}
				],
				"progress": {
					"progress": 0,
					"total": 0
				},
				"comment": {
					"comments": [],
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/18478/comment",
					"maxResults": 0,
					"total": 0,
					"startAt": 0
				},
				"votes": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/TM-3629/votes",
					"votes": 0,
					"hasVoted": false
				},
				"worklog": {
					"startAt": 0,
					"maxResults": 20,
					"total": 0,
					"worklogs": []
				}
			}
		},
		{
			"expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
			"id": "18465",
			"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/issue/18465",
			"key": "TM-3616",
			"fields": {
				"statuscategorychangedate": "2022-11-28T14:00:34.781+0100",
				"issuetype": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issuetype/10100",
					"id": "10100",
					"description": "Functionality or a feature expressed as a user goal.",
					"iconUrl": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10315?size=medium",
					"name": "Story",
					"subtask": false,
					"avatarId": 10315,
					"hierarchyLevel": 0
				},
				"timespent": null,
				"sprint": {
					"id": 124,
					"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/sprint/124",
					"state": "active",
					"name": "Sprint Tučňák (Jindra)",
					"startDate": "2022-11-30T11:43:11.974Z",
					"endDate": "2022-12-19T13:38:00.000Z",
					"originBoardId": 1,
					"goal": "Dodělat základní Android verzi Camerita (ať synchronizujeme vývoj)"
				},
				"project": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/project/10000",
					"id": "10000",
					"key": "TM",
					"name": "TappyTaps development",
					"projectTypeKey": "software",
					"simplified": false,
					"avatarUrls": {
						"48x48": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324",
						"24x24": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=small",
						"16x16": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=xsmall",
						"32x32": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=medium"
					}
				},
				"fixVersions": [],
				"aggregatetimespent": null,
				"resolution": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/resolution/10000",
					"id": "10000",
					"description": "Work has been completed on this issue.",
					"name": "Done"
				},
				"customfield_10113": {
					"hasEpicLinkFieldDependency": false,
					"showField": false,
					"nonEditableReason": {
						"reason": "PLUGIN_LICENSE_ERROR",
						"message": "The Parent Link is only available to Jira Premium users."
					}
				},
				"customfield_10510": null,
				"customfield_10114": null,
				"customfield_10500": null,
				"customfield_10501": null,
				"customfield_10502": [],
				"customfield_10503": null,
				"customfield_10504": null,
				"customfield_10505": null,
				"resolutiondate": "2022-11-28T14:00:34.776+0100",
				"customfield_10506": null,
				"customfield_10507": null,
				"customfield_10508": null,
				"customfield_10509": null,
				"workratio": -1,
				"lastViewed": null,
				"watches": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/TM-3616/watchers",
					"watchCount": 1,
					"isWatching": false
				},
				"issuerestriction": {
					"issuerestrictions": {},
					"shouldDisplay": false
				},
				"created": "2022-10-20T13:25:50.071+0200",
				"epic": null,
				"priority": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/priority/3",
					"iconUrl": "https://tappytaps2.atlassian.net/images/icons/priorities/medium.svg",
					"name": "Medium",
					"id": "3"
				},
				"customfield_10100": null,
				"customfield_10101": "10000_*:*_1_*:*_3375284727_*|*_10001_*:*_1_*:*_0",
				"customfield_10102": null,
				"customfield_10300": null,
				"labels": [],
				"aggregatetimeoriginalestimate": null,
				"timeestimate": null,
				"versions": [],
				"issuelinks": [],
				"assignee": null,
				"updated": "2022-11-28T14:00:34.781+0100",
				"status": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/status/10001",
					"description": "",
					"iconUrl": "https://tappytaps2.atlassian.net/",
					"name": "Done",
					"id": "10001",
					"statusCategory": {
						"self": "https://tappytaps2.atlassian.net/rest/api/2/statuscategory/3",
						"id": 3,
						"key": "done",
						"colorName": "green",
						"name": "Done"
					}
				},
				"components": [],
				"timeoriginalestimate": null,
				"description": "* grafika dle designu\n\n* indikátor baterie ",
				"timetracking": {},
				"customfield_10005": null,
				"security": null,
				"aggregatetimeestimate": null,
				"attachment": [],
				"flagged": false,
				"summary": "Camerito desktop - dashboard",
				"creator": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/user?accountId=557058%3A4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"accountId": "557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"avatarUrls": {
						"48x48": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/48",
						"24x24": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/24",
						"16x16": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/16",
						"32x32": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/32"
					},
					"displayName": "Jan Sarson",
					"active": true,
					"timeZone": "Europe/Prague",
					"accountType": "atlassian"
				},
				"subtasks": [
					{
						"id": "18492",
						"key": "TM-3643",
						"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/18492",
						"fields": {
							"summary": "programování desktop",
							"status": {
								"self": "https://tappytaps2.atlassian.net/rest/api/2/status/10002",
								"description": "",
								"iconUrl": "https://tappytaps2.atlassian.net/images/icons/statuses/generic.png",
								"name": "Testing",
								"id": "10002",
								"statusCategory": {
									"self": "https://tappytaps2.atlassian.net/rest/api/2/statuscategory/4",
									"id": 4,
									"key": "indeterminate",
									"colorName": "yellow",
									"name": "In Progress"
								}
							},
							"priority": {
								"self": "https://tappytaps2.atlassian.net/rest/api/2/priority/3",
								"iconUrl": "https://tappytaps2.atlassian.net/images/icons/priorities/medium.svg",
								"name": "Medium",
								"id": "3"
							},
							"issuetype": {
								"self": "https://tappytaps2.atlassian.net/rest/api/2/issuetype/10102",
								"id": "10102",
								"description": "A small piece of work that's part of a larger task.",
								"iconUrl": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10316?size=medium",
								"name": "Sub-task",
								"subtask": true,
								"avatarId": 10316,
								"hierarchyLevel": -1
							}
						}
					}
				],
				"reporter": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/user?accountId=557058%3A4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"accountId": "557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"avatarUrls": {
						"48x48": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/48",
						"24x24": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/24",
						"16x16": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/16",
						"32x32": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/32"
					},
					"displayName": "Jan Sarson",
					"active": true,
					"timeZone": "Europe/Prague",
					"accountType": "atlassian"
				},
				"aggregateprogress": {
					"progress": 0,
					"total": 0
				},
				"customfield_10001": null,
				"customfield_10200": null,
				"customfield_10201": null,
				"customfield_10400": null,
				"customfield_10115": [
					{
						"id": 123,
						"name": "Sprint Slimák (Lumáš)",
						"state": "closed",
						"boardId": 1,
						"goal": "Dohnat vývoj na Androidu",
						"startDate": "2022-10-23T07:00:48.895Z",
						"endDate": "2022-11-17T08:00:00.000Z",
						"completeDate": "2022-11-28T09:14:40.582Z"
					},
					{
						"id": 124,
						"name": "Sprint Tučňák (Jindra)",
						"state": "active",
						"boardId": 1,
						"goal": "Dodělat základní Android verzi Camerita (ať synchronizujeme vývoj)",
						"startDate": "2022-11-30T11:43:11.974Z",
						"endDate": "2022-12-19T13:38:00.000Z"
					}
				],
				"customfield_10511": null,
				"customfield_10512": null,
				"customfield_10116": "0|i00xr1:",
				"environment": null,
				"customfield_10513": null,
				"customfield_10117": 3.0,
				"duedate": null,
				"closedSprints": [
					{
						"id": 123,
						"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/sprint/123",
						"state": "closed",
						"name": "Sprint Slimák (Lumáš)",
						"startDate": "2022-10-23T07:00:48.895Z",
						"endDate": "2022-11-17T08:00:00.000Z",
						"completeDate": "2022-11-28T09:14:40.582Z",
						"originBoardId": 1,
						"goal": "Dohnat vývoj na Androidu"
					}
				],
				"progress": {
					"progress": 0,
					"total": 0
				},
				"comment": {
					"comments": [],
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/18465/comment",
					"maxResults": 0,
					"total": 0,
					"startAt": 0
				},
				"votes": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/TM-3616/votes",
					"votes": 0,
					"hasVoted": false
				},
				"worklog": {
					"startAt": 0,
					"maxResults": 20,
					"total": 0,
					"worklogs": []
				}
			}
		},
		{
			"expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
			"id": "18492",
			"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/issue/18492",
			"key": "TM-3643",
			"fields": {
				"statuscategorychangedate": "2023-01-05T14:59:24.573+0100",
				"issuetype": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issuetype/10102",
					"id": "10102",
					"description": "A small piece of work that's part of a larger task.",
					"iconUrl": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10316?size=medium",
					"name": "Sub-task",
					"subtask": true,
					"avatarId": 10316,
					"hierarchyLevel": -1
				},
				"parent": {
					"id": "18465",
					"key": "TM-3616",
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/18465",
					"fields": {
						"summary": "Camerito desktop - dashboard",
						"status": {
							"self": "https://tappytaps2.atlassian.net/rest/api/2/status/10001",
							"description": "",
							"iconUrl": "https://tappytaps2.atlassian.net/",
							"name": "Done",
							"id": "10001",
							"statusCategory": {
								"self": "https://tappytaps2.atlassian.net/rest/api/2/statuscategory/3",
								"id": 3,
								"key": "done",
								"colorName": "green",
								"name": "Done"
							}
						},
						"priority": {
							"self": "https://tappytaps2.atlassian.net/rest/api/2/priority/3",
							"iconUrl": "https://tappytaps2.atlassian.net/images/icons/priorities/medium.svg",
							"name": "Medium",
							"id": "3"
						},
						"issuetype": {
							"self": "https://tappytaps2.atlassian.net/rest/api/2/issuetype/10100",
							"id": "10100",
							"description": "Functionality or a feature expressed as a user goal.",
							"iconUrl": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10315?size=medium",
							"name": "Story",
							"subtask": false,
							"avatarId": 10315,
							"hierarchyLevel": 0
						}
					}
				},
				"timespent": null,
				"sprint": {
					"id": 124,
					"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/sprint/124",
					"state": "active",
					"name": "Sprint Tučňák (Jindra)",
					"startDate": "2022-11-30T11:43:11.974Z",
					"endDate": "2022-12-19T13:38:00.000Z",
					"originBoardId": 1,
					"goal": "Dodělat základní Android verzi Camerita (ať synchronizujeme vývoj)"
				},
				"project": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/project/10000",
					"id": "10000",
					"key": "TM",
					"name": "TappyTaps development",
					"projectTypeKey": "software",
					"simplified": false,
					"avatarUrls": {
						"48x48": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324",
						"24x24": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=small",
						"16x16": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=xsmall",
						"32x32": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=medium"
					}
				},
				"fixVersions": [],
				"aggregatetimespent": null,
				"resolution": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/resolution/10000",
					"id": "10000",
					"description": "Work has been completed on this issue.",
					"name": "Done"
				},
				"customfield_10113": {
					"hasEpicLinkFieldDependency": false,
					"showField": false,
					"nonEditableReason": {
						"reason": "PLUGIN_LICENSE_ERROR",
						"message": "The Parent Link is only available to Jira Premium users."
					}
				},
				"customfield_10510": null,
				"customfield_10114": null,
				"customfield_10500": null,
				"customfield_10501": null,
				"customfield_10502": [],
				"customfield_10503": null,
				"customfield_10504": null,
				"customfield_10505": null,
				"resolutiondate": "2022-11-28T14:00:29.776+0100",
				"customfield_10506": null,
				"customfield_10507": null,
				"customfield_10508": null,
				"customfield_10509": null,
				"workratio": -1,
				"lastViewed": null,
				"issuerestriction": {
					"issuerestrictions": {},
					"shouldDisplay": false
				},
				"watches": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/TM-3643/watchers",
					"watchCount": 1,
					"isWatching": false
				},
				"created": "2022-10-31T13:29:25.055+0100",
				"epic": null,
				"priority": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/priority/3",
					"iconUrl": "https://tappytaps2.atlassian.net/images/icons/priorities/medium.svg",
					"name": "Medium",
					"id": "3"
				},
				"customfield_10100": null,
				"customfield_10101": "3_*:*_1_*:*_1127892995_*|*_10000_*:*_1_*:*_1293171765_*|*_10001_*:*_1_*:*_0",
				"customfield_10300": null,
				"customfield_10102": null,
				"labels": [],
				"timeestimate": null,
				"aggregatetimeoriginalestimate": null,
				"versions": [],
				"issuelinks": [],
				"assignee": null,
				"updated": "2023-01-05T14:59:24.573+0100",
				"status": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/status/10002",
					"description": "",
					"iconUrl": "https://tappytaps2.atlassian.net/images/icons/statuses/generic.png",
					"name": "Testing",
					"id": "10002",
					"statusCategory": {
						"self": "https://tappytaps2.atlassian.net/rest/api/2/statuscategory/4",
						"id": 4,
						"key": "indeterminate",
						"colorName": "yellow",
						"name": "In Progress"
					}
				},
				"components": [],
				"timeoriginalestimate": null,
				"description": null,
				"timetracking": {},
				"customfield_10005": null,
				"security": null,
				"attachment": [],
				"aggregatetimeestimate": null,
				"flagged": false,
				"summary": "programování desktop",
				"creator": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/user?accountId=557058%3A02bd42e0-adb2-4778-89d7-f14637b35c04",
					"accountId": "557058:02bd42e0-adb2-4778-89d7-f14637b35c04",
					"avatarUrls": {
						"48x48": "https://secure.gravatar.com/avatar/c15828dfffe25cd2f5a0e02f6d18c13a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJS-2.png",
						"24x24": "https://secure.gravatar.com/avatar/c15828dfffe25cd2f5a0e02f6d18c13a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJS-2.png",
						"16x16": "https://secure.gravatar.com/avatar/c15828dfffe25cd2f5a0e02f6d18c13a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJS-2.png",
						"32x32": "https://secure.gravatar.com/avatar/c15828dfffe25cd2f5a0e02f6d18c13a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJS-2.png"
					},
					"displayName": "Jindrich Sarson",
					"active": true,
					"timeZone": "Europe/Prague",
					"accountType": "atlassian"
				},
				"subtasks": [],
				"reporter": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/user?accountId=557058%3A02bd42e0-adb2-4778-89d7-f14637b35c04",
					"accountId": "557058:02bd42e0-adb2-4778-89d7-f14637b35c04",
					"avatarUrls": {
						"48x48": "https://secure.gravatar.com/avatar/c15828dfffe25cd2f5a0e02f6d18c13a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJS-2.png",
						"24x24": "https://secure.gravatar.com/avatar/c15828dfffe25cd2f5a0e02f6d18c13a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJS-2.png",
						"16x16": "https://secure.gravatar.com/avatar/c15828dfffe25cd2f5a0e02f6d18c13a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJS-2.png",
						"32x32": "https://secure.gravatar.com/avatar/c15828dfffe25cd2f5a0e02f6d18c13a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJS-2.png"
					},
					"displayName": "Jindrich Sarson",
					"active": true,
					"timeZone": "Europe/Prague",
					"accountType": "atlassian"
				},
				"aggregateprogress": {
					"progress": 0,
					"total": 0
				},
				"customfield_10001": null,
				"customfield_10200": null,
				"customfield_10201": null,
				"customfield_10400": null,
				"customfield_10115": [
					{
						"id": 123,
						"name": "Sprint Slimák (Lumáš)",
						"state": "closed",
						"boardId": 1,
						"goal": "Dohnat vývoj na Androidu",
						"startDate": "2022-10-23T07:00:48.895Z",
						"endDate": "2022-11-17T08:00:00.000Z",
						"completeDate": "2022-11-28T09:14:40.582Z"
					},
					{
						"id": 124,
						"name": "Sprint Tučňák (Jindra)",
						"state": "active",
						"boardId": 1,
						"goal": "Dodělat základní Android verzi Camerita (ať synchronizujeme vývoj)",
						"startDate": "2022-11-30T11:43:11.974Z",
						"endDate": "2022-12-19T13:38:00.000Z"
					}
				],
				"customfield_10511": null,
				"customfield_10512": null,
				"customfield_10116": "0|i00xx9:",
				"customfield_10513": null,
				"environment": null,
				"duedate": null,
				"closedSprints": [
					{
						"id": 123,
						"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/sprint/123",
						"state": "closed",
						"name": "Sprint Slimák (Lumáš)",
						"startDate": "2022-10-23T07:00:48.895Z",
						"endDate": "2022-11-17T08:00:00.000Z",
						"completeDate": "2022-11-28T09:14:40.582Z",
						"originBoardId": 1,
						"goal": "Dohnat vývoj na Androidu"
					}
				],
				"progress": {
					"progress": 0,
					"total": 0
				},
				"comment": {
					"comments": [],
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/18492/comment",
					"maxResults": 0,
					"total": 0,
					"startAt": 0
				},
				"votes": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/TM-3643/votes",
					"votes": 0,
					"hasVoted": false
				},
				"worklog": {
					"startAt": 0,
					"maxResults": 20,
					"total": 0,
					"worklogs": []
				}
			}
		},
		{
			"expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
			"id": "18466",
			"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/issue/18466",
			"key": "TM-3617",
			"fields": {
				"statuscategorychangedate": "2022-10-20T13:26:34.912+0200",
				"issuetype": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issuetype/10100",
					"id": "10100",
					"description": "Functionality or a feature expressed as a user goal.",
					"iconUrl": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10315?size=medium",
					"name": "Story",
					"subtask": false,
					"avatarId": 10315,
					"hierarchyLevel": 0
				},
				"timespent": null,
				"sprint": {
					"id": 124,
					"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/sprint/124",
					"state": "active",
					"name": "Sprint Tučňák (Jindra)",
					"startDate": "2022-11-30T11:43:11.974Z",
					"endDate": "2022-12-19T13:38:00.000Z",
					"originBoardId": 1,
					"goal": "Dodělat základní Android verzi Camerita (ať synchronizujeme vývoj)"
				},
				"project": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/project/10000",
					"id": "10000",
					"key": "TM",
					"name": "TappyTaps development",
					"projectTypeKey": "software",
					"simplified": false,
					"avatarUrls": {
						"48x48": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324",
						"24x24": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=small",
						"16x16": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=xsmall",
						"32x32": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=medium"
					}
				},
				"fixVersions": [],
				"aggregatetimespent": null,
				"resolution": null,
				"customfield_10113": {
					"hasEpicLinkFieldDependency": false,
					"showField": false,
					"nonEditableReason": {
						"reason": "PLUGIN_LICENSE_ERROR",
						"message": "The Parent Link is only available to Jira Premium users."
					}
				},
				"customfield_10114": null,
				"customfield_10510": null,
				"customfield_10500": null,
				"customfield_10501": null,
				"customfield_10502": [],
				"customfield_10503": null,
				"customfield_10504": null,
				"customfield_10505": null,
				"resolutiondate": null,
				"customfield_10506": null,
				"customfield_10507": null,
				"customfield_10508": null,
				"workratio": -1,
				"customfield_10509": null,
				"watches": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/TM-3617/watchers",
					"watchCount": 1,
					"isWatching": false
				},
				"issuerestriction": {
					"issuerestrictions": {},
					"shouldDisplay": false
				},
				"lastViewed": null,
				"created": "2022-10-20T13:26:34.678+0200",
				"epic": null,
				"customfield_10100": null,
				"priority": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/priority/3",
					"iconUrl": "https://tappytaps2.atlassian.net/images/icons/priorities/medium.svg",
					"name": "Medium",
					"id": "3"
				},
				"customfield_10101": null,
				"customfield_10300": null,
				"customfield_10102": null,
				"labels": [],
				"aggregatetimeoriginalestimate": null,
				"timeestimate": null,
				"versions": [],
				"issuelinks": [],
				"assignee": null,
				"updated": "2022-11-28T14:04:14.521+0100",
				"status": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/status/10000",
					"description": "",
					"iconUrl": "https://tappytaps2.atlassian.net/",
					"name": "To Do",
					"id": "10000",
					"statusCategory": {
						"self": "https://tappytaps2.atlassian.net/rest/api/2/statuscategory/2",
						"id": 2,
						"key": "new",
						"colorName": "blue-gray",
						"name": "To Do"
					}
				},
				"components": [],
				"timeoriginalestimate": null,
				"description": "* grafika dle designu\n* motion detection - vizuální debug zobrazení\n* otočení kamerky\n\n* Čtení data z mikrofonu a jejich zobrazeni na kamera station",
				"timetracking": {},
				"customfield_10005": null,
				"security": null,
				"aggregatetimeestimate": null,
				"attachment": [],
				"flagged": false,
				"summary": "Camerito desktop - camera station",
				"creator": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/user?accountId=557058%3A4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"accountId": "557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"avatarUrls": {
						"48x48": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/48",
						"24x24": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/24",
						"16x16": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/16",
						"32x32": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/32"
					},
					"displayName": "Jan Sarson",
					"active": true,
					"timeZone": "Europe/Prague",
					"accountType": "atlassian"
				},
				"subtasks": [
					{
						"id": "18493",
						"key": "TM-3644",
						"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/18493",
						"fields": {
							"summary": "programování desktop",
							"status": {
								"self": "https://tappytaps2.atlassian.net/rest/api/2/status/3",
								"description": "This issue is being actively worked on at the moment by the assignee.",
								"iconUrl": "https://tappytaps2.atlassian.net/images/icons/statuses/inprogress.png",
								"name": "In Progress",
								"id": "3",
								"statusCategory": {
									"self": "https://tappytaps2.atlassian.net/rest/api/2/statuscategory/4",
									"id": 4,
									"key": "indeterminate",
									"colorName": "yellow",
									"name": "In Progress"
								}
							},
							"priority": {
								"self": "https://tappytaps2.atlassian.net/rest/api/2/priority/3",
								"iconUrl": "https://tappytaps2.atlassian.net/images/icons/priorities/medium.svg",
								"name": "Medium",
								"id": "3"
							},
							"issuetype": {
								"self": "https://tappytaps2.atlassian.net/rest/api/2/issuetype/10102",
								"id": "10102",
								"description": "A small piece of work that's part of a larger task.",
								"iconUrl": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10316?size=medium",
								"name": "Sub-task",
								"subtask": true,
								"avatarId": 10316,
								"hierarchyLevel": -1
							}
						}
					}
				],
				"reporter": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/user?accountId=557058%3A4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"accountId": "557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"avatarUrls": {
						"48x48": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/48",
						"24x24": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/24",
						"16x16": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/16",
						"32x32": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/32"
					},
					"displayName": "Jan Sarson",
					"active": true,
					"timeZone": "Europe/Prague",
					"accountType": "atlassian"
				},
				"aggregateprogress": {
					"progress": 0,
					"total": 0
				},
				"customfield_10001": null,
				"customfield_10200": null,
				"customfield_10201": null,
				"customfield_10400": null,
				"customfield_10511": null,
				"customfield_10115": [
					{
						"id": 123,
						"name": "Sprint Slimák (Lumáš)",
						"state": "closed",
						"boardId": 1,
						"goal": "Dohnat vývoj na Androidu",
						"startDate": "2022-10-23T07:00:48.895Z",
						"endDate": "2022-11-17T08:00:00.000Z",
						"completeDate": "2022-11-28T09:14:40.582Z"
					},
					{
						"id": 124,
						"name": "Sprint Tučňák (Jindra)",
						"state": "active",
						"boardId": 1,
						"goal": "Dodělat základní Android verzi Camerita (ať synchronizujeme vývoj)",
						"startDate": "2022-11-30T11:43:11.974Z",
						"endDate": "2022-12-19T13:38:00.000Z"
					}
				],
				"customfield_10116": "0|i00xr9:",
				"customfield_10512": null,
				"environment": null,
				"customfield_10513": null,
				"customfield_10117": 3.0,
				"duedate": null,
				"closedSprints": [
					{
						"id": 123,
						"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/sprint/123",
						"state": "closed",
						"name": "Sprint Slimák (Lumáš)",
						"startDate": "2022-10-23T07:00:48.895Z",
						"endDate": "2022-11-17T08:00:00.000Z",
						"completeDate": "2022-11-28T09:14:40.582Z",
						"originBoardId": 1,
						"goal": "Dohnat vývoj na Androidu"
					}
				],
				"progress": {
					"progress": 0,
					"total": 0
				},
				"votes": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/TM-3617/votes",
					"votes": 0,
					"hasVoted": false
				},
				"comment": {
					"comments": [],
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/18466/comment",
					"maxResults": 0,
					"total": 0,
					"startAt": 0
				},
				"worklog": {
					"startAt": 0,
					"maxResults": 20,
					"total": 0,
					"worklogs": []
				}
			}
		},
		{
			"expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
			"id": "18493",
			"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/issue/18493",
			"key": "TM-3644",
			"fields": {
				"statuscategorychangedate": "2022-11-28T10:01:42.959+0100",
				"issuetype": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issuetype/10102",
					"id": "10102",
					"description": "A small piece of work that's part of a larger task.",
					"iconUrl": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10316?size=medium",
					"name": "Sub-task",
					"subtask": true,
					"avatarId": 10316,
					"hierarchyLevel": -1
				},
				"parent": {
					"id": "18466",
					"key": "TM-3617",
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/18466",
					"fields": {
						"summary": "Camerito desktop - camera station",
						"status": {
							"self": "https://tappytaps2.atlassian.net/rest/api/2/status/10000",
							"description": "",
							"iconUrl": "https://tappytaps2.atlassian.net/",
							"name": "To Do",
							"id": "10000",
							"statusCategory": {
								"self": "https://tappytaps2.atlassian.net/rest/api/2/statuscategory/2",
								"id": 2,
								"key": "new",
								"colorName": "blue-gray",
								"name": "To Do"
							}
						},
						"priority": {
							"self": "https://tappytaps2.atlassian.net/rest/api/2/priority/3",
							"iconUrl": "https://tappytaps2.atlassian.net/images/icons/priorities/medium.svg",
							"name": "Medium",
							"id": "3"
						},
						"issuetype": {
							"self": "https://tappytaps2.atlassian.net/rest/api/2/issuetype/10100",
							"id": "10100",
							"description": "Functionality or a feature expressed as a user goal.",
							"iconUrl": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10315?size=medium",
							"name": "Story",
							"subtask": false,
							"avatarId": 10315,
							"hierarchyLevel": 0
						}
					}
				},
				"timespent": null,
				"sprint": {
					"id": 124,
					"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/sprint/124",
					"state": "active",
					"name": "Sprint Tučňák (Jindra)",
					"startDate": "2022-11-30T11:43:11.974Z",
					"endDate": "2022-12-19T13:38:00.000Z",
					"originBoardId": 1,
					"goal": "Dodělat základní Android verzi Camerita (ať synchronizujeme vývoj)"
				},
				"project": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/project/10000",
					"id": "10000",
					"key": "TM",
					"name": "TappyTaps development",
					"projectTypeKey": "software",
					"simplified": false,
					"avatarUrls": {
						"48x48": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324",
						"24x24": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=small",
						"16x16": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=xsmall",
						"32x32": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=medium"
					}
				},
				"fixVersions": [],
				"aggregatetimespent": null,
				"resolution": null,
				"customfield_10113": {
					"hasEpicLinkFieldDependency": false,
					"showField": false,
					"nonEditableReason": {
						"reason": "PLUGIN_LICENSE_ERROR",
						"message": "The Parent Link is only available to Jira Premium users."
					}
				},
				"customfield_10510": null,
				"customfield_10114": null,
				"customfield_10500": null,
				"customfield_10501": null,
				"customfield_10502": [],
				"customfield_10503": null,
				"customfield_10504": null,
				"customfield_10505": null,
				"customfield_10506": null,
				"resolutiondate": null,
				"customfield_10507": null,
				"customfield_10508": null,
				"customfield_10509": null,
				"workratio": -1,
				"watches": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/TM-3644/watchers",
					"watchCount": 1,
					"isWatching": false
				},
				"lastViewed": null,
				"issuerestriction": {
					"issuerestrictions": {},
					"shouldDisplay": false
				},
				"created": "2022-10-31T13:29:31.590+0100",
				"epic": null,
				"customfield_10100": null,
				"priority": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/priority/3",
					"iconUrl": "https://tappytaps2.atlassian.net/images/icons/priorities/medium.svg",
					"name": "Medium",
					"id": "3"
				},
				"customfield_10101": null,
				"customfield_10300": null,
				"customfield_10102": null,
				"labels": [],
				"timeestimate": null,
				"aggregatetimeoriginalestimate": null,
				"versions": [],
				"issuelinks": [],
				"assignee": null,
				"updated": "2022-11-28T10:01:42.959+0100",
				"status": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/status/3",
					"description": "This issue is being actively worked on at the moment by the assignee.",
					"iconUrl": "https://tappytaps2.atlassian.net/images/icons/statuses/inprogress.png",
					"name": "In Progress",
					"id": "3",
					"statusCategory": {
						"self": "https://tappytaps2.atlassian.net/rest/api/2/statuscategory/4",
						"id": 4,
						"key": "indeterminate",
						"colorName": "yellow",
						"name": "In Progress"
					}
				},
				"components": [],
				"timeoriginalestimate": null,
				"description": null,
				"timetracking": {},
				"customfield_10005": null,
				"security": null,
				"attachment": [],
				"aggregatetimeestimate": null,
				"flagged": false,
				"summary": "programování desktop",
				"creator": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/user?accountId=557058%3A02bd42e0-adb2-4778-89d7-f14637b35c04",
					"accountId": "557058:02bd42e0-adb2-4778-89d7-f14637b35c04",
					"avatarUrls": {
						"48x48": "https://secure.gravatar.com/avatar/c15828dfffe25cd2f5a0e02f6d18c13a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJS-2.png",
						"24x24": "https://secure.gravatar.com/avatar/c15828dfffe25cd2f5a0e02f6d18c13a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJS-2.png",
						"16x16": "https://secure.gravatar.com/avatar/c15828dfffe25cd2f5a0e02f6d18c13a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJS-2.png",
						"32x32": "https://secure.gravatar.com/avatar/c15828dfffe25cd2f5a0e02f6d18c13a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJS-2.png"
					},
					"displayName": "Jindrich Sarson",
					"active": true,
					"timeZone": "Europe/Prague",
					"accountType": "atlassian"
				},
				"subtasks": [],
				"reporter": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/user?accountId=557058%3A02bd42e0-adb2-4778-89d7-f14637b35c04",
					"accountId": "557058:02bd42e0-adb2-4778-89d7-f14637b35c04",
					"avatarUrls": {
						"48x48": "https://secure.gravatar.com/avatar/c15828dfffe25cd2f5a0e02f6d18c13a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJS-2.png",
						"24x24": "https://secure.gravatar.com/avatar/c15828dfffe25cd2f5a0e02f6d18c13a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJS-2.png",
						"16x16": "https://secure.gravatar.com/avatar/c15828dfffe25cd2f5a0e02f6d18c13a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJS-2.png",
						"32x32": "https://secure.gravatar.com/avatar/c15828dfffe25cd2f5a0e02f6d18c13a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJS-2.png"
					},
					"displayName": "Jindrich Sarson",
					"active": true,
					"timeZone": "Europe/Prague",
					"accountType": "atlassian"
				},
				"aggregateprogress": {
					"progress": 0,
					"total": 0
				},
				"customfield_10001": null,
				"customfield_10200": null,
				"customfield_10201": null,
				"customfield_10400": null,
				"customfield_10511": null,
				"customfield_10115": [
					{
						"id": 123,
						"name": "Sprint Slimák (Lumáš)",
						"state": "closed",
						"boardId": 1,
						"goal": "Dohnat vývoj na Androidu",
						"startDate": "2022-10-23T07:00:48.895Z",
						"endDate": "2022-11-17T08:00:00.000Z",
						"completeDate": "2022-11-28T09:14:40.582Z"
					},
					{
						"id": 124,
						"name": "Sprint Tučňák (Jindra)",
						"state": "active",
						"boardId": 1,
						"goal": "Dodělat základní Android verzi Camerita (ať synchronizujeme vývoj)",
						"startDate": "2022-11-30T11:43:11.974Z",
						"endDate": "2022-12-19T13:38:00.000Z"
					}
				],
				"customfield_10512": null,
				"customfield_10116": "0|i00xxh:",
				"customfield_10513": null,
				"environment": null,
				"duedate": null,
				"closedSprints": [
					{
						"id": 123,
						"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/sprint/123",
						"state": "closed",
						"name": "Sprint Slimák (Lumáš)",
						"startDate": "2022-10-23T07:00:48.895Z",
						"endDate": "2022-11-17T08:00:00.000Z",
						"completeDate": "2022-11-28T09:14:40.582Z",
						"originBoardId": 1,
						"goal": "Dohnat vývoj na Androidu"
					}
				],
				"progress": {
					"progress": 0,
					"total": 0
				},
				"votes": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/TM-3644/votes",
					"votes": 0,
					"hasVoted": false
				},
				"comment": {
					"comments": [],
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/18493/comment",
					"maxResults": 0,
					"total": 0,
					"startAt": 0
				},
				"worklog": {
					"startAt": 0,
					"maxResults": 20,
					"total": 0,
					"worklogs": []
				}
			}
		},
		{
			"expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
			"id": "18467",
			"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/issue/18467",
			"key": "TM-3618",
			"fields": {
				"statuscategorychangedate": "2022-10-20T13:27:34.204+0200",
				"issuetype": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issuetype/10100",
					"id": "10100",
					"description": "Functionality or a feature expressed as a user goal.",
					"iconUrl": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10315?size=medium",
					"name": "Story",
					"subtask": false,
					"avatarId": 10315,
					"hierarchyLevel": 0
				},
				"timespent": null,
				"sprint": {
					"id": 124,
					"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/sprint/124",
					"state": "active",
					"name": "Sprint Tučňák (Jindra)",
					"startDate": "2022-11-30T11:43:11.974Z",
					"endDate": "2022-12-19T13:38:00.000Z",
					"originBoardId": 1,
					"goal": "Dodělat základní Android verzi Camerita (ať synchronizujeme vývoj)"
				},
				"project": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/project/10000",
					"id": "10000",
					"key": "TM",
					"name": "TappyTaps development",
					"projectTypeKey": "software",
					"simplified": false,
					"avatarUrls": {
						"48x48": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324",
						"24x24": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=small",
						"16x16": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=xsmall",
						"32x32": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=medium"
					}
				},
				"fixVersions": [],
				"aggregatetimespent": null,
				"resolution": null,
				"customfield_10113": {
					"hasEpicLinkFieldDependency": false,
					"showField": false,
					"nonEditableReason": {
						"reason": "PLUGIN_LICENSE_ERROR",
						"message": "The Parent Link is only available to Jira Premium users."
					}
				},
				"customfield_10510": null,
				"customfield_10114": null,
				"customfield_10500": null,
				"customfield_10501": null,
				"customfield_10502": [],
				"customfield_10503": null,
				"customfield_10504": null,
				"customfield_10505": null,
				"customfield_10506": null,
				"resolutiondate": null,
				"customfield_10507": null,
				"customfield_10508": null,
				"workratio": -1,
				"customfield_10509": null,
				"issuerestriction": {
					"issuerestrictions": {},
					"shouldDisplay": false
				},
				"lastViewed": null,
				"watches": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/TM-3618/watchers",
					"watchCount": 1,
					"isWatching": false
				},
				"created": "2022-10-20T13:27:33.912+0200",
				"epic": null,
				"priority": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/priority/3",
					"iconUrl": "https://tappytaps2.atlassian.net/images/icons/priorities/medium.svg",
					"name": "Medium",
					"id": "3"
				},
				"customfield_10100": null,
				"customfield_10101": null,
				"customfield_10102": null,
				"customfield_10300": null,
				"labels": [],
				"timeestimate": null,
				"aggregatetimeoriginalestimate": null,
				"versions": [],
				"issuelinks": [],
				"assignee": null,
				"updated": "2022-11-28T13:22:30.111+0100",
				"status": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/status/10000",
					"description": "",
					"iconUrl": "https://tappytaps2.atlassian.net/",
					"name": "To Do",
					"id": "10000",
					"statusCategory": {
						"self": "https://tappytaps2.atlassian.net/rest/api/2/statuscategory/2",
						"id": 2,
						"key": "new",
						"colorName": "blue-gray",
						"name": "To Do"
					}
				},
				"components": [],
				"timeoriginalestimate": null,
				"description": "* design dle grafiky\n* zapojení menu, včetně ukládání stavu a synchronizace\n* napojení funkčnosti",
				"timetracking": {},
				"customfield_10005": null,
				"security": null,
				"attachment": [],
				"aggregatetimeestimate": null,
				"flagged": false,
				"summary": "Camerito desktop - connected viewer",
				"creator": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/user?accountId=557058%3A4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"accountId": "557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"avatarUrls": {
						"48x48": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/48",
						"24x24": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/24",
						"16x16": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/16",
						"32x32": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/32"
					},
					"displayName": "Jan Sarson",
					"active": true,
					"timeZone": "Europe/Prague",
					"accountType": "atlassian"
				},
				"subtasks": [
					{
						"id": "18494",
						"key": "TM-3645",
						"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/18494",
						"fields": {
							"summary": "programování desktop",
							"status": {
								"self": "https://tappytaps2.atlassian.net/rest/api/2/status/3",
								"description": "This issue is being actively worked on at the moment by the assignee.",
								"iconUrl": "https://tappytaps2.atlassian.net/images/icons/statuses/inprogress.png",
								"name": "In Progress",
								"id": "3",
								"statusCategory": {
									"self": "https://tappytaps2.atlassian.net/rest/api/2/statuscategory/4",
									"id": 4,
									"key": "indeterminate",
									"colorName": "yellow",
									"name": "In Progress"
								}
							},
							"priority": {
								"self": "https://tappytaps2.atlassian.net/rest/api/2/priority/3",
								"iconUrl": "https://tappytaps2.atlassian.net/images/icons/priorities/medium.svg",
								"name": "Medium",
								"id": "3"
							},
							"issuetype": {
								"self": "https://tappytaps2.atlassian.net/rest/api/2/issuetype/10102",
								"id": "10102",
								"description": "A small piece of work that's part of a larger task.",
								"iconUrl": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10316?size=medium",
								"name": "Sub-task",
								"subtask": true,
								"avatarId": 10316,
								"hierarchyLevel": -1
							}
						}
					}
				],
				"reporter": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/user?accountId=557058%3A4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"accountId": "557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"avatarUrls": {
						"48x48": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/48",
						"24x24": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/24",
						"16x16": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/16",
						"32x32": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/32"
					},
					"displayName": "Jan Sarson",
					"active": true,
					"timeZone": "Europe/Prague",
					"accountType": "atlassian"
				},
				"aggregateprogress": {
					"progress": 0,
					"total": 0
				},
				"customfield_10001": null,
				"customfield_10200": null,
				"customfield_10201": null,
				"customfield_10400": null,
				"customfield_10511": null,
				"customfield_10115": [
					{
						"id": 123,
						"name": "Sprint Slimák (Lumáš)",
						"state": "closed",
						"boardId": 1,
						"goal": "Dohnat vývoj na Androidu",
						"startDate": "2022-10-23T07:00:48.895Z",
						"endDate": "2022-11-17T08:00:00.000Z",
						"completeDate": "2022-11-28T09:14:40.582Z"
					},
					{
						"id": 124,
						"name": "Sprint Tučňák (Jindra)",
						"state": "active",
						"boardId": 1,
						"goal": "Dodělat základní Android verzi Camerita (ať synchronizujeme vývoj)",
						"startDate": "2022-11-30T11:43:11.974Z",
						"endDate": "2022-12-19T13:38:00.000Z"
					}
				],
				"customfield_10512": null,
				"customfield_10116": "0|i00xrh:",
				"environment": null,
				"customfield_10513": null,
				"customfield_10117": 5.0,
				"duedate": null,
				"closedSprints": [
					{
						"id": 123,
						"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/sprint/123",
						"state": "closed",
						"name": "Sprint Slimák (Lumáš)",
						"startDate": "2022-10-23T07:00:48.895Z",
						"endDate": "2022-11-17T08:00:00.000Z",
						"completeDate": "2022-11-28T09:14:40.582Z",
						"originBoardId": 1,
						"goal": "Dohnat vývoj na Androidu"
					}
				],
				"progress": {
					"progress": 0,
					"total": 0
				},
				"votes": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/TM-3618/votes",
					"votes": 0,
					"hasVoted": false
				},
				"comment": {
					"comments": [],
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/18467/comment",
					"maxResults": 0,
					"total": 0,
					"startAt": 0
				},
				"worklog": {
					"startAt": 0,
					"maxResults": 20,
					"total": 0,
					"worklogs": []
				}
			}
		},
		{
			"expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
			"id": "18494",
			"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/issue/18494",
			"key": "TM-3645",
			"fields": {
				"statuscategorychangedate": "2022-12-13T11:55:31.349+0100",
				"issuetype": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issuetype/10102",
					"id": "10102",
					"description": "A small piece of work that's part of a larger task.",
					"iconUrl": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10316?size=medium",
					"name": "Sub-task",
					"subtask": true,
					"avatarId": 10316,
					"hierarchyLevel": -1
				},
				"parent": {
					"id": "18467",
					"key": "TM-3618",
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/18467",
					"fields": {
						"summary": "Camerito desktop - connected viewer",
						"status": {
							"self": "https://tappytaps2.atlassian.net/rest/api/2/status/10000",
							"description": "",
							"iconUrl": "https://tappytaps2.atlassian.net/",
							"name": "To Do",
							"id": "10000",
							"statusCategory": {
								"self": "https://tappytaps2.atlassian.net/rest/api/2/statuscategory/2",
								"id": 2,
								"key": "new",
								"colorName": "blue-gray",
								"name": "To Do"
							}
						},
						"priority": {
							"self": "https://tappytaps2.atlassian.net/rest/api/2/priority/3",
							"iconUrl": "https://tappytaps2.atlassian.net/images/icons/priorities/medium.svg",
							"name": "Medium",
							"id": "3"
						},
						"issuetype": {
							"self": "https://tappytaps2.atlassian.net/rest/api/2/issuetype/10100",
							"id": "10100",
							"description": "Functionality or a feature expressed as a user goal.",
							"iconUrl": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10315?size=medium",
							"name": "Story",
							"subtask": false,
							"avatarId": 10315,
							"hierarchyLevel": 0
						}
					}
				},
				"timespent": null,
				"sprint": {
					"id": 124,
					"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/sprint/124",
					"state": "active",
					"name": "Sprint Tučňák (Jindra)",
					"startDate": "2022-11-30T11:43:11.974Z",
					"endDate": "2022-12-19T13:38:00.000Z",
					"originBoardId": 1,
					"goal": "Dodělat základní Android verzi Camerita (ať synchronizujeme vývoj)"
				},
				"project": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/project/10000",
					"id": "10000",
					"key": "TM",
					"name": "TappyTaps development",
					"projectTypeKey": "software",
					"simplified": false,
					"avatarUrls": {
						"48x48": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324",
						"24x24": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=small",
						"16x16": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=xsmall",
						"32x32": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=medium"
					}
				},
				"fixVersions": [],
				"aggregatetimespent": null,
				"resolution": null,
				"customfield_10113": {
					"hasEpicLinkFieldDependency": false,
					"showField": false,
					"nonEditableReason": {
						"reason": "PLUGIN_LICENSE_ERROR",
						"message": "The Parent Link is only available to Jira Premium users."
					}
				},
				"customfield_10114": null,
				"customfield_10510": null,
				"customfield_10500": null,
				"customfield_10501": null,
				"customfield_10502": [],
				"customfield_10503": null,
				"customfield_10504": null,
				"customfield_10505": null,
				"resolutiondate": null,
				"customfield_10506": null,
				"customfield_10507": null,
				"customfield_10508": null,
				"customfield_10509": null,
				"workratio": -1,
				"watches": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/TM-3645/watchers",
					"watchCount": 1,
					"isWatching": false
				},
				"issuerestriction": {
					"issuerestrictions": {},
					"shouldDisplay": false
				},
				"lastViewed": null,
				"created": "2022-10-31T13:29:38.264+0100",
				"epic": null,
				"priority": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/priority/3",
					"iconUrl": "https://tappytaps2.atlassian.net/images/icons/priorities/medium.svg",
					"name": "Medium",
					"id": "3"
				},
				"customfield_10100": null,
				"customfield_10101": null,
				"customfield_10300": null,
				"customfield_10102": null,
				"labels": [],
				"timeestimate": null,
				"aggregatetimeoriginalestimate": null,
				"versions": [],
				"issuelinks": [],
				"assignee": null,
				"updated": "2022-12-13T11:55:31.348+0100",
				"status": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/status/3",
					"description": "This issue is being actively worked on at the moment by the assignee.",
					"iconUrl": "https://tappytaps2.atlassian.net/images/icons/statuses/inprogress.png",
					"name": "In Progress",
					"id": "3",
					"statusCategory": {
						"self": "https://tappytaps2.atlassian.net/rest/api/2/statuscategory/4",
						"id": 4,
						"key": "indeterminate",
						"colorName": "yellow",
						"name": "In Progress"
					}
				},
				"components": [],
				"timeoriginalestimate": null,
				"description": null,
				"timetracking": {},
				"customfield_10005": null,
				"security": null,
				"attachment": [],
				"aggregatetimeestimate": null,
				"flagged": false,
				"summary": "programování desktop",
				"creator": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/user?accountId=557058%3A02bd42e0-adb2-4778-89d7-f14637b35c04",
					"accountId": "557058:02bd42e0-adb2-4778-89d7-f14637b35c04",
					"avatarUrls": {
						"48x48": "https://secure.gravatar.com/avatar/c15828dfffe25cd2f5a0e02f6d18c13a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJS-2.png",
						"24x24": "https://secure.gravatar.com/avatar/c15828dfffe25cd2f5a0e02f6d18c13a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJS-2.png",
						"16x16": "https://secure.gravatar.com/avatar/c15828dfffe25cd2f5a0e02f6d18c13a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJS-2.png",
						"32x32": "https://secure.gravatar.com/avatar/c15828dfffe25cd2f5a0e02f6d18c13a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJS-2.png"
					},
					"displayName": "Jindrich Sarson",
					"active": true,
					"timeZone": "Europe/Prague",
					"accountType": "atlassian"
				},
				"subtasks": [],
				"reporter": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/user?accountId=557058%3A02bd42e0-adb2-4778-89d7-f14637b35c04",
					"accountId": "557058:02bd42e0-adb2-4778-89d7-f14637b35c04",
					"avatarUrls": {
						"48x48": "https://secure.gravatar.com/avatar/c15828dfffe25cd2f5a0e02f6d18c13a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJS-2.png",
						"24x24": "https://secure.gravatar.com/avatar/c15828dfffe25cd2f5a0e02f6d18c13a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJS-2.png",
						"16x16": "https://secure.gravatar.com/avatar/c15828dfffe25cd2f5a0e02f6d18c13a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJS-2.png",
						"32x32": "https://secure.gravatar.com/avatar/c15828dfffe25cd2f5a0e02f6d18c13a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJS-2.png"
					},
					"displayName": "Jindrich Sarson",
					"active": true,
					"timeZone": "Europe/Prague",
					"accountType": "atlassian"
				},
				"aggregateprogress": {
					"progress": 0,
					"total": 0
				},
				"customfield_10001": null,
				"customfield_10200": null,
				"customfield_10201": null,
				"customfield_10400": null,
				"customfield_10511": null,
				"customfield_10115": [
					{
						"id": 123,
						"name": "Sprint Slimák (Lumáš)",
						"state": "closed",
						"boardId": 1,
						"goal": "Dohnat vývoj na Androidu",
						"startDate": "2022-10-23T07:00:48.895Z",
						"endDate": "2022-11-17T08:00:00.000Z",
						"completeDate": "2022-11-28T09:14:40.582Z"
					},
					{
						"id": 124,
						"name": "Sprint Tučňák (Jindra)",
						"state": "active",
						"boardId": 1,
						"goal": "Dodělat základní Android verzi Camerita (ať synchronizujeme vývoj)",
						"startDate": "2022-11-30T11:43:11.974Z",
						"endDate": "2022-12-19T13:38:00.000Z"
					}
				],
				"customfield_10512": null,
				"customfield_10116": "0|i00xxp:",
				"environment": null,
				"customfield_10513": null,
				"duedate": null,
				"closedSprints": [
					{
						"id": 123,
						"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/sprint/123",
						"state": "closed",
						"name": "Sprint Slimák (Lumáš)",
						"startDate": "2022-10-23T07:00:48.895Z",
						"endDate": "2022-11-17T08:00:00.000Z",
						"completeDate": "2022-11-28T09:14:40.582Z",
						"originBoardId": 1,
						"goal": "Dohnat vývoj na Androidu"
					}
				],
				"progress": {
					"progress": 0,
					"total": 0
				},
				"comment": {
					"comments": [],
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/18494/comment",
					"maxResults": 0,
					"total": 0,
					"startAt": 0
				},
				"votes": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/TM-3645/votes",
					"votes": 0,
					"hasVoted": false
				},
				"worklog": {
					"startAt": 0,
					"maxResults": 20,
					"total": 0,
					"worklogs": []
				}
			}
		},
		{
			"expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
			"id": "18468",
			"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/issue/18468",
			"key": "TM-3619",
			"fields": {
				"statuscategorychangedate": "2022-10-20T13:29:11.747+0200",
				"issuetype": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issuetype/10100",
					"id": "10100",
					"description": "Functionality or a feature expressed as a user goal.",
					"iconUrl": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10315?size=medium",
					"name": "Story",
					"subtask": false,
					"avatarId": 10315,
					"hierarchyLevel": 0
				},
				"timespent": null,
				"sprint": {
					"id": 124,
					"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/sprint/124",
					"state": "active",
					"name": "Sprint Tučňák (Jindra)",
					"startDate": "2022-11-30T11:43:11.974Z",
					"endDate": "2022-12-19T13:38:00.000Z",
					"originBoardId": 1,
					"goal": "Dodělat základní Android verzi Camerita (ať synchronizujeme vývoj)"
				},
				"project": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/project/10000",
					"id": "10000",
					"key": "TM",
					"name": "TappyTaps development",
					"projectTypeKey": "software",
					"simplified": false,
					"avatarUrls": {
						"48x48": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324",
						"24x24": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=small",
						"16x16": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=xsmall",
						"32x32": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=medium"
					}
				},
				"fixVersions": [],
				"aggregatetimespent": null,
				"resolution": null,
				"customfield_10113": {
					"hasEpicLinkFieldDependency": false,
					"showField": false,
					"nonEditableReason": {
						"reason": "PLUGIN_LICENSE_ERROR",
						"message": "The Parent Link is only available to Jira Premium users."
					}
				},
				"customfield_10510": null,
				"customfield_10114": null,
				"customfield_10500": null,
				"customfield_10501": null,
				"customfield_10502": [],
				"customfield_10503": null,
				"customfield_10504": null,
				"customfield_10505": null,
				"customfield_10506": null,
				"resolutiondate": null,
				"customfield_10507": null,
				"customfield_10508": null,
				"workratio": -1,
				"customfield_10509": null,
				"lastViewed": null,
				"watches": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/TM-3619/watchers",
					"watchCount": 1,
					"isWatching": false
				},
				"issuerestriction": {
					"issuerestrictions": {},
					"shouldDisplay": false
				},
				"created": "2022-10-20T13:29:11.481+0200",
				"epic": null,
				"customfield_10100": null,
				"priority": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/priority/3",
					"iconUrl": "https://tappytaps2.atlassian.net/images/icons/priorities/medium.svg",
					"name": "Medium",
					"id": "3"
				},
				"customfield_10101": null,
				"customfield_10300": null,
				"customfield_10102": null,
				"labels": [],
				"timeestimate": null,
				"aggregatetimeoriginalestimate": null,
				"versions": [],
				"issuelinks": [],
				"assignee": null,
				"updated": "2022-11-28T14:07:10.456+0100",
				"status": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/status/10000",
					"description": "",
					"iconUrl": "https://tappytaps2.atlassian.net/",
					"name": "To Do",
					"id": "10000",
					"statusCategory": {
						"self": "https://tappytaps2.atlassian.net/rest/api/2/statuscategory/2",
						"id": 2,
						"key": "new",
						"colorName": "blue-gray",
						"name": "To Do"
					}
				},
				"components": [],
				"timeoriginalestimate": null,
				"description": "* webrtc audio\n* platformní třída na video",
				"timetracking": {},
				"customfield_10005": null,
				"security": null,
				"attachment": [],
				"aggregatetimeestimate": null,
				"flagged": false,
				"summary": "Camerito Android - platformní backend",
				"creator": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/user?accountId=557058%3A4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"accountId": "557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"avatarUrls": {
						"48x48": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/48",
						"24x24": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/24",
						"16x16": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/16",
						"32x32": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/32"
					},
					"displayName": "Jan Sarson",
					"active": true,
					"timeZone": "Europe/Prague",
					"accountType": "atlassian"
				},
				"subtasks": [
					{
						"id": "18495",
						"key": "TM-3646",
						"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/18495",
						"fields": {
							"summary": "Programování Android",
							"status": {
								"self": "https://tappytaps2.atlassian.net/rest/api/2/status/3",
								"description": "This issue is being actively worked on at the moment by the assignee.",
								"iconUrl": "https://tappytaps2.atlassian.net/images/icons/statuses/inprogress.png",
								"name": "In Progress",
								"id": "3",
								"statusCategory": {
									"self": "https://tappytaps2.atlassian.net/rest/api/2/statuscategory/4",
									"id": 4,
									"key": "indeterminate",
									"colorName": "yellow",
									"name": "In Progress"
								}
							},
							"priority": {
								"self": "https://tappytaps2.atlassian.net/rest/api/2/priority/3",
								"iconUrl": "https://tappytaps2.atlassian.net/images/icons/priorities/medium.svg",
								"name": "Medium",
								"id": "3"
							},
							"issuetype": {
								"self": "https://tappytaps2.atlassian.net/rest/api/2/issuetype/10102",
								"id": "10102",
								"description": "A small piece of work that's part of a larger task.",
								"iconUrl": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10316?size=medium",
								"name": "Sub-task",
								"subtask": true,
								"avatarId": 10316,
								"hierarchyLevel": -1
							}
						}
					}
				],
				"reporter": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/user?accountId=557058%3A4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"accountId": "557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"avatarUrls": {
						"48x48": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/48",
						"24x24": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/24",
						"16x16": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/16",
						"32x32": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/32"
					},
					"displayName": "Jan Sarson",
					"active": true,
					"timeZone": "Europe/Prague",
					"accountType": "atlassian"
				},
				"aggregateprogress": {
					"progress": 0,
					"total": 0
				},
				"customfield_10001": null,
				"customfield_10200": null,
				"customfield_10201": null,
				"customfield_10400": null,
				"customfield_10115": [
					{
						"id": 123,
						"name": "Sprint Slimák (Lumáš)",
						"state": "closed",
						"boardId": 1,
						"goal": "Dohnat vývoj na Androidu",
						"startDate": "2022-10-23T07:00:48.895Z",
						"endDate": "2022-11-17T08:00:00.000Z",
						"completeDate": "2022-11-28T09:14:40.582Z"
					},
					{
						"id": 124,
						"name": "Sprint Tučňák (Jindra)",
						"state": "active",
						"boardId": 1,
						"goal": "Dodělat základní Android verzi Camerita (ať synchronizujeme vývoj)",
						"startDate": "2022-11-30T11:43:11.974Z",
						"endDate": "2022-12-19T13:38:00.000Z"
					}
				],
				"customfield_10511": null,
				"customfield_10116": "0|i00xrp:",
				"customfield_10512": null,
				"environment": null,
				"customfield_10117": 2.0,
				"customfield_10513": null,
				"duedate": null,
				"closedSprints": [
					{
						"id": 123,
						"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/sprint/123",
						"state": "closed",
						"name": "Sprint Slimák (Lumáš)",
						"startDate": "2022-10-23T07:00:48.895Z",
						"endDate": "2022-11-17T08:00:00.000Z",
						"completeDate": "2022-11-28T09:14:40.582Z",
						"originBoardId": 1,
						"goal": "Dohnat vývoj na Androidu"
					}
				],
				"progress": {
					"progress": 0,
					"total": 0
				},
				"comment": {
					"comments": [],
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/18468/comment",
					"maxResults": 0,
					"total": 0,
					"startAt": 0
				},
				"votes": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/TM-3619/votes",
					"votes": 0,
					"hasVoted": false
				},
				"worklog": {
					"startAt": 0,
					"maxResults": 20,
					"total": 0,
					"worklogs": []
				}
			}
		},
		{
			"expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
			"id": "18495",
			"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/issue/18495",
			"key": "TM-3646",
			"fields": {
				"statuscategorychangedate": "2022-11-08T08:47:04.241+0100",
				"issuetype": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issuetype/10102",
					"id": "10102",
					"description": "A small piece of work that's part of a larger task.",
					"iconUrl": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10316?size=medium",
					"name": "Sub-task",
					"subtask": true,
					"avatarId": 10316,
					"hierarchyLevel": -1
				},
				"parent": {
					"id": "18468",
					"key": "TM-3619",
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/18468",
					"fields": {
						"summary": "Camerito Android - platformní backend",
						"status": {
							"self": "https://tappytaps2.atlassian.net/rest/api/2/status/10000",
							"description": "",
							"iconUrl": "https://tappytaps2.atlassian.net/",
							"name": "To Do",
							"id": "10000",
							"statusCategory": {
								"self": "https://tappytaps2.atlassian.net/rest/api/2/statuscategory/2",
								"id": 2,
								"key": "new",
								"colorName": "blue-gray",
								"name": "To Do"
							}
						},
						"priority": {
							"self": "https://tappytaps2.atlassian.net/rest/api/2/priority/3",
							"iconUrl": "https://tappytaps2.atlassian.net/images/icons/priorities/medium.svg",
							"name": "Medium",
							"id": "3"
						},
						"issuetype": {
							"self": "https://tappytaps2.atlassian.net/rest/api/2/issuetype/10100",
							"id": "10100",
							"description": "Functionality or a feature expressed as a user goal.",
							"iconUrl": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10315?size=medium",
							"name": "Story",
							"subtask": false,
							"avatarId": 10315,
							"hierarchyLevel": 0
						}
					}
				},
				"timespent": null,
				"sprint": {
					"id": 124,
					"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/sprint/124",
					"state": "active",
					"name": "Sprint Tučňák (Jindra)",
					"startDate": "2022-11-30T11:43:11.974Z",
					"endDate": "2022-12-19T13:38:00.000Z",
					"originBoardId": 1,
					"goal": "Dodělat základní Android verzi Camerita (ať synchronizujeme vývoj)"
				},
				"project": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/project/10000",
					"id": "10000",
					"key": "TM",
					"name": "TappyTaps development",
					"projectTypeKey": "software",
					"simplified": false,
					"avatarUrls": {
						"48x48": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324",
						"24x24": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=small",
						"16x16": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=xsmall",
						"32x32": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=medium"
					}
				},
				"fixVersions": [],
				"aggregatetimespent": null,
				"resolution": null,
				"customfield_10113": {
					"hasEpicLinkFieldDependency": false,
					"showField": false,
					"nonEditableReason": {
						"reason": "PLUGIN_LICENSE_ERROR",
						"message": "The Parent Link is only available to Jira Premium users."
					}
				},
				"customfield_10510": null,
				"customfield_10114": null,
				"customfield_10500": null,
				"customfield_10501": null,
				"customfield_10502": [],
				"customfield_10503": null,
				"customfield_10504": null,
				"customfield_10505": null,
				"resolutiondate": null,
				"customfield_10506": null,
				"customfield_10507": null,
				"customfield_10508": null,
				"workratio": -1,
				"customfield_10509": null,
				"watches": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/TM-3646/watchers",
					"watchCount": 1,
					"isWatching": false
				},
				"lastViewed": null,
				"issuerestriction": {
					"issuerestrictions": {},
					"shouldDisplay": false
				},
				"created": "2022-10-31T13:29:51.987+0100",
				"epic": null,
				"priority": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/priority/3",
					"iconUrl": "https://tappytaps2.atlassian.net/images/icons/priorities/medium.svg",
					"name": "Medium",
					"id": "3"
				},
				"customfield_10100": null,
				"customfield_10101": null,
				"customfield_10102": null,
				"customfield_10300": null,
				"labels": [],
				"timeestimate": null,
				"aggregatetimeoriginalestimate": null,
				"versions": [],
				"issuelinks": [],
				"assignee": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/user?accountId=557058%3A4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"accountId": "557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"avatarUrls": {
						"48x48": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/48",
						"24x24": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/24",
						"16x16": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/16",
						"32x32": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/32"
					},
					"displayName": "Jan Sarson",
					"active": true,
					"timeZone": "Europe/Prague",
					"accountType": "atlassian"
				},
				"updated": "2022-11-08T08:47:15.724+0100",
				"status": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/status/3",
					"description": "This issue is being actively worked on at the moment by the assignee.",
					"iconUrl": "https://tappytaps2.atlassian.net/images/icons/statuses/inprogress.png",
					"name": "In Progress",
					"id": "3",
					"statusCategory": {
						"self": "https://tappytaps2.atlassian.net/rest/api/2/statuscategory/4",
						"id": 4,
						"key": "indeterminate",
						"colorName": "yellow",
						"name": "In Progress"
					}
				},
				"components": [],
				"timeoriginalestimate": null,
				"description": null,
				"timetracking": {},
				"customfield_10005": null,
				"security": null,
				"aggregatetimeestimate": null,
				"attachment": [],
				"flagged": false,
				"summary": "Programování Android",
				"creator": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/user?accountId=557058%3A02bd42e0-adb2-4778-89d7-f14637b35c04",
					"accountId": "557058:02bd42e0-adb2-4778-89d7-f14637b35c04",
					"avatarUrls": {
						"48x48": "https://secure.gravatar.com/avatar/c15828dfffe25cd2f5a0e02f6d18c13a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJS-2.png",
						"24x24": "https://secure.gravatar.com/avatar/c15828dfffe25cd2f5a0e02f6d18c13a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJS-2.png",
						"16x16": "https://secure.gravatar.com/avatar/c15828dfffe25cd2f5a0e02f6d18c13a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJS-2.png",
						"32x32": "https://secure.gravatar.com/avatar/c15828dfffe25cd2f5a0e02f6d18c13a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJS-2.png"
					},
					"displayName": "Jindrich Sarson",
					"active": true,
					"timeZone": "Europe/Prague",
					"accountType": "atlassian"
				},
				"subtasks": [],
				"reporter": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/user?accountId=557058%3A02bd42e0-adb2-4778-89d7-f14637b35c04",
					"accountId": "557058:02bd42e0-adb2-4778-89d7-f14637b35c04",
					"avatarUrls": {
						"48x48": "https://secure.gravatar.com/avatar/c15828dfffe25cd2f5a0e02f6d18c13a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJS-2.png",
						"24x24": "https://secure.gravatar.com/avatar/c15828dfffe25cd2f5a0e02f6d18c13a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJS-2.png",
						"16x16": "https://secure.gravatar.com/avatar/c15828dfffe25cd2f5a0e02f6d18c13a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJS-2.png",
						"32x32": "https://secure.gravatar.com/avatar/c15828dfffe25cd2f5a0e02f6d18c13a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJS-2.png"
					},
					"displayName": "Jindrich Sarson",
					"active": true,
					"timeZone": "Europe/Prague",
					"accountType": "atlassian"
				},
				"aggregateprogress": {
					"progress": 0,
					"total": 0
				},
				"customfield_10001": null,
				"customfield_10200": null,
				"customfield_10201": null,
				"customfield_10400": null,
				"customfield_10115": [
					{
						"id": 123,
						"name": "Sprint Slimák (Lumáš)",
						"state": "closed",
						"boardId": 1,
						"goal": "Dohnat vývoj na Androidu",
						"startDate": "2022-10-23T07:00:48.895Z",
						"endDate": "2022-11-17T08:00:00.000Z",
						"completeDate": "2022-11-28T09:14:40.582Z"
					},
					{
						"id": 124,
						"name": "Sprint Tučňák (Jindra)",
						"state": "active",
						"boardId": 1,
						"goal": "Dodělat základní Android verzi Camerita (ať synchronizujeme vývoj)",
						"startDate": "2022-11-30T11:43:11.974Z",
						"endDate": "2022-12-19T13:38:00.000Z"
					}
				],
				"customfield_10511": null,
				"customfield_10512": null,
				"customfield_10116": "0|i00xxx:",
				"customfield_10513": null,
				"environment": null,
				"duedate": null,
				"closedSprints": [
					{
						"id": 123,
						"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/sprint/123",
						"state": "closed",
						"name": "Sprint Slimák (Lumáš)",
						"startDate": "2022-10-23T07:00:48.895Z",
						"endDate": "2022-11-17T08:00:00.000Z",
						"completeDate": "2022-11-28T09:14:40.582Z",
						"originBoardId": 1,
						"goal": "Dohnat vývoj na Androidu"
					}
				],
				"progress": {
					"progress": 0,
					"total": 0
				},
				"comment": {
					"comments": [],
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/18495/comment",
					"maxResults": 0,
					"total": 0,
					"startAt": 0
				},
				"votes": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/TM-3646/votes",
					"votes": 0,
					"hasVoted": false
				},
				"worklog": {
					"startAt": 0,
					"maxResults": 20,
					"total": 0,
					"worklogs": []
				}
			}
		},
		{
			"expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
			"id": "18502",
			"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/issue/18502",
			"key": "TM-3653",
			"fields": {
				"statuscategorychangedate": "2022-12-15T14:59:32.103+0100",
				"issuetype": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issuetype/10100",
					"id": "10100",
					"description": "Functionality or a feature expressed as a user goal.",
					"iconUrl": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10315?size=medium",
					"name": "Story",
					"subtask": false,
					"avatarId": 10315,
					"hierarchyLevel": 0
				},
				"timespent": null,
				"sprint": {
					"id": 124,
					"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/sprint/124",
					"state": "active",
					"name": "Sprint Tučňák (Jindra)",
					"startDate": "2022-11-30T11:43:11.974Z",
					"endDate": "2022-12-19T13:38:00.000Z",
					"originBoardId": 1,
					"goal": "Dodělat základní Android verzi Camerita (ať synchronizujeme vývoj)"
				},
				"project": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/project/10000",
					"id": "10000",
					"key": "TM",
					"name": "TappyTaps development",
					"projectTypeKey": "software",
					"simplified": false,
					"avatarUrls": {
						"48x48": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324",
						"24x24": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=small",
						"16x16": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=xsmall",
						"32x32": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=medium"
					}
				},
				"fixVersions": [],
				"aggregatetimespent": null,
				"resolution": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/resolution/10000",
					"id": "10000",
					"description": "Work has been completed on this issue.",
					"name": "Done"
				},
				"customfield_10113": {
					"hasEpicLinkFieldDependency": false,
					"showField": false,
					"nonEditableReason": {
						"reason": "PLUGIN_LICENSE_ERROR",
						"message": "The Parent Link is only available to Jira Premium users."
					}
				},
				"customfield_10510": null,
				"customfield_10114": null,
				"customfield_10500": null,
				"customfield_10501": null,
				"customfield_10502": [],
				"customfield_10503": null,
				"customfield_10504": null,
				"customfield_10505": null,
				"resolutiondate": "2022-12-15T14:59:32.099+0100",
				"customfield_10506": null,
				"customfield_10507": null,
				"customfield_10508": null,
				"customfield_10509": null,
				"workratio": -1,
				"issuerestriction": {
					"issuerestrictions": {},
					"shouldDisplay": false
				},
				"lastViewed": null,
				"watches": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/TM-3653/watchers",
					"watchCount": 1,
					"isWatching": false
				},
				"created": "2022-11-24T20:39:47.994+0100",
				"epic": null,
				"customfield_10100": null,
				"priority": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/priority/3",
					"iconUrl": "https://tappytaps2.atlassian.net/images/icons/priorities/medium.svg",
					"name": "Medium",
					"id": "3"
				},
				"customfield_10101": "10000_*:*_1_*:*_1793984125_*|*_10001_*:*_1_*:*_0",
				"customfield_10102": null,
				"customfield_10300": null,
				"labels": [],
				"timeestimate": null,
				"aggregatetimeoriginalestimate": null,
				"versions": [],
				"issuelinks": [],
				"assignee": null,
				"updated": "2022-12-15T14:59:32.102+0100",
				"status": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/status/10001",
					"description": "",
					"iconUrl": "https://tappytaps2.atlassian.net/",
					"name": "Done",
					"id": "10001",
					"statusCategory": {
						"self": "https://tappytaps2.atlassian.net/rest/api/2/statuscategory/3",
						"id": 3,
						"key": "done",
						"colorName": "green",
						"name": "Done"
					}
				},
				"components": [],
				"timeoriginalestimate": null,
				"description": "* vylepšené trackování nákupů na Androidu\n** billing 5.1\n** update na serveru, abychom poznali o jaké předplatné se vždy jedná\n*** odstranit starý kód který řešil rozpoznávání konkrétního premium",
				"timetracking": {},
				"customfield_10005": null,
				"security": null,
				"attachment": [],
				"aggregatetimeestimate": null,
				"flagged": false,
				"summary": "Vylepšené nákupy Billing 5.1 (+server)",
				"creator": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/user?accountId=557058%3A4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"accountId": "557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"avatarUrls": {
						"48x48": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/48",
						"24x24": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/24",
						"16x16": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/16",
						"32x32": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/32"
					},
					"displayName": "Jan Sarson",
					"active": true,
					"timeZone": "Europe/Prague",
					"accountType": "atlassian"
				},
				"subtasks": [
					{
						"id": "18514",
						"key": "TM-3665",
						"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/18514",
						"fields": {
							"summary": "Programování Android",
							"status": {
								"self": "https://tappytaps2.atlassian.net/rest/api/2/status/10001",
								"description": "",
								"iconUrl": "https://tappytaps2.atlassian.net/",
								"name": "Done",
								"id": "10001",
								"statusCategory": {
									"self": "https://tappytaps2.atlassian.net/rest/api/2/statuscategory/3",
									"id": 3,
									"key": "done",
									"colorName": "green",
									"name": "Done"
								}
							},
							"priority": {
								"self": "https://tappytaps2.atlassian.net/rest/api/2/priority/3",
								"iconUrl": "https://tappytaps2.atlassian.net/images/icons/priorities/medium.svg",
								"name": "Medium",
								"id": "3"
							},
							"issuetype": {
								"self": "https://tappytaps2.atlassian.net/rest/api/2/issuetype/10102",
								"id": "10102",
								"description": "A small piece of work that's part of a larger task.",
								"iconUrl": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10316?size=medium",
								"name": "Sub-task",
								"subtask": true,
								"avatarId": 10316,
								"hierarchyLevel": -1
							}
						}
					},
					{
						"id": "18515",
						"key": "TM-3666",
						"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/18515",
						"fields": {
							"summary": "Programování server",
							"status": {
								"self": "https://tappytaps2.atlassian.net/rest/api/2/status/10001",
								"description": "",
								"iconUrl": "https://tappytaps2.atlassian.net/",
								"name": "Done",
								"id": "10001",
								"statusCategory": {
									"self": "https://tappytaps2.atlassian.net/rest/api/2/statuscategory/3",
									"id": 3,
									"key": "done",
									"colorName": "green",
									"name": "Done"
								}
							},
							"priority": {
								"self": "https://tappytaps2.atlassian.net/rest/api/2/priority/3",
								"iconUrl": "https://tappytaps2.atlassian.net/images/icons/priorities/medium.svg",
								"name": "Medium",
								"id": "3"
							},
							"issuetype": {
								"self": "https://tappytaps2.atlassian.net/rest/api/2/issuetype/10102",
								"id": "10102",
								"description": "A small piece of work that's part of a larger task.",
								"iconUrl": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10316?size=medium",
								"name": "Sub-task",
								"subtask": true,
								"avatarId": 10316,
								"hierarchyLevel": -1
							}
						}
					}
				],
				"reporter": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/user?accountId=557058%3A4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"accountId": "557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"avatarUrls": {
						"48x48": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/48",
						"24x24": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/24",
						"16x16": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/16",
						"32x32": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/32"
					},
					"displayName": "Jan Sarson",
					"active": true,
					"timeZone": "Europe/Prague",
					"accountType": "atlassian"
				},
				"aggregateprogress": {
					"progress": 0,
					"total": 0
				},
				"customfield_10001": null,
				"customfield_10200": null,
				"customfield_10201": null,
				"customfield_10400": null,
				"customfield_10511": null,
				"customfield_10115": [
					{
						"id": 124,
						"name": "Sprint Tučňák (Jindra)",
						"state": "active",
						"boardId": 1,
						"goal": "Dodělat základní Android verzi Camerita (ať synchronizujeme vývoj)",
						"startDate": "2022-11-30T11:43:11.974Z",
						"endDate": "2022-12-19T13:38:00.000Z"
					}
				],
				"customfield_10116": "0|i00xzh:",
				"customfield_10512": null,
				"customfield_10513": null,
				"customfield_10117": 2.0,
				"environment": null,
				"duedate": null,
				"progress": {
					"progress": 0,
					"total": 0
				},
				"votes": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/TM-3653/votes",
					"votes": 0,
					"hasVoted": false
				},
				"comment": {
					"comments": [],
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/18502/comment",
					"maxResults": 0,
					"total": 0,
					"startAt": 0
				},
				"worklog": {
					"startAt": 0,
					"maxResults": 20,
					"total": 0,
					"worklogs": []
				}
			}
		},
		{
			"expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
			"id": "18514",
			"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/issue/18514",
			"key": "TM-3665",
			"fields": {
				"statuscategorychangedate": "2022-12-15T14:59:28.514+0100",
				"issuetype": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issuetype/10102",
					"id": "10102",
					"description": "A small piece of work that's part of a larger task.",
					"iconUrl": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10316?size=medium",
					"name": "Sub-task",
					"subtask": true,
					"avatarId": 10316,
					"hierarchyLevel": -1
				},
				"parent": {
					"id": "18502",
					"key": "TM-3653",
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/18502",
					"fields": {
						"summary": "Vylepšené nákupy Billing 5.1 (+server)",
						"status": {
							"self": "https://tappytaps2.atlassian.net/rest/api/2/status/10001",
							"description": "",
							"iconUrl": "https://tappytaps2.atlassian.net/",
							"name": "Done",
							"id": "10001",
							"statusCategory": {
								"self": "https://tappytaps2.atlassian.net/rest/api/2/statuscategory/3",
								"id": 3,
								"key": "done",
								"colorName": "green",
								"name": "Done"
							}
						},
						"priority": {
							"self": "https://tappytaps2.atlassian.net/rest/api/2/priority/3",
							"iconUrl": "https://tappytaps2.atlassian.net/images/icons/priorities/medium.svg",
							"name": "Medium",
							"id": "3"
						},
						"issuetype": {
							"self": "https://tappytaps2.atlassian.net/rest/api/2/issuetype/10100",
							"id": "10100",
							"description": "Functionality or a feature expressed as a user goal.",
							"iconUrl": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10315?size=medium",
							"name": "Story",
							"subtask": false,
							"avatarId": 10315,
							"hierarchyLevel": 0
						}
					}
				},
				"timespent": null,
				"sprint": {
					"id": 124,
					"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/sprint/124",
					"state": "active",
					"name": "Sprint Tučňák (Jindra)",
					"startDate": "2022-11-30T11:43:11.974Z",
					"endDate": "2022-12-19T13:38:00.000Z",
					"originBoardId": 1,
					"goal": "Dodělat základní Android verzi Camerita (ať synchronizujeme vývoj)"
				},
				"project": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/project/10000",
					"id": "10000",
					"key": "TM",
					"name": "TappyTaps development",
					"projectTypeKey": "software",
					"simplified": false,
					"avatarUrls": {
						"48x48": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324",
						"24x24": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=small",
						"16x16": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=xsmall",
						"32x32": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=medium"
					}
				},
				"fixVersions": [],
				"aggregatetimespent": null,
				"resolution": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/resolution/10000",
					"id": "10000",
					"description": "Work has been completed on this issue.",
					"name": "Done"
				},
				"customfield_10113": {
					"hasEpicLinkFieldDependency": false,
					"showField": false,
					"nonEditableReason": {
						"reason": "PLUGIN_LICENSE_ERROR",
						"message": "The Parent Link is only available to Jira Premium users."
					}
				},
				"customfield_10510": null,
				"customfield_10114": null,
				"customfield_10500": null,
				"customfield_10501": null,
				"customfield_10502": [],
				"customfield_10503": null,
				"customfield_10504": null,
				"customfield_10505": null,
				"customfield_10506": null,
				"resolutiondate": "2022-12-15T14:59:28.511+0100",
				"customfield_10507": null,
				"customfield_10508": null,
				"workratio": -1,
				"customfield_10509": null,
				"lastViewed": null,
				"watches": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/TM-3665/watchers",
					"watchCount": 1,
					"isWatching": false
				},
				"issuerestriction": {
					"issuerestrictions": {},
					"shouldDisplay": false
				},
				"created": "2022-11-28T14:10:36.821+0100",
				"epic": null,
				"customfield_10100": null,
				"priority": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/priority/3",
					"iconUrl": "https://tappytaps2.atlassian.net/images/icons/priorities/medium.svg",
					"name": "Medium",
					"id": "3"
				},
				"customfield_10101": "3_*:*_1_*:*_941097234_*|*_10000_*:*_1_*:*_248550054_*|*_10002_*:*_1_*:*_282084423_*|*_10001_*:*_1_*:*_0",
				"customfield_10102": null,
				"customfield_10300": null,
				"labels": [],
				"timeestimate": null,
				"aggregatetimeoriginalestimate": null,
				"versions": [],
				"issuelinks": [],
				"assignee": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/user?accountId=557058%3A639f83e2-2814-4439-b805-3bc164b93999",
					"accountId": "557058:639f83e2-2814-4439-b805-3bc164b93999",
					"avatarUrls": {
						"48x48": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:639f83e2-2814-4439-b805-3bc164b93999/02863cb7-b09c-4894-ba6b-8ca717ea9055/48",
						"24x24": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:639f83e2-2814-4439-b805-3bc164b93999/02863cb7-b09c-4894-ba6b-8ca717ea9055/24",
						"16x16": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:639f83e2-2814-4439-b805-3bc164b93999/02863cb7-b09c-4894-ba6b-8ca717ea9055/16",
						"32x32": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:639f83e2-2814-4439-b805-3bc164b93999/02863cb7-b09c-4894-ba6b-8ca717ea9055/32"
					},
					"displayName": "Jiří Šimůnek",
					"active": true,
					"timeZone": "Europe/Prague",
					"accountType": "atlassian"
				},
				"updated": "2022-12-15T14:59:28.514+0100",
				"status": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/status/10001",
					"description": "",
					"iconUrl": "https://tappytaps2.atlassian.net/",
					"name": "Done",
					"id": "10001",
					"statusCategory": {
						"self": "https://tappytaps2.atlassian.net/rest/api/2/statuscategory/3",
						"id": 3,
						"key": "done",
						"colorName": "green",
						"name": "Done"
					}
				},
				"components": [],
				"timeoriginalestimate": null,
				"description": null,
				"timetracking": {},
				"customfield_10005": null,
				"security": null,
				"aggregatetimeestimate": null,
				"attachment": [],
				"flagged": false,
				"summary": "Programování Android",
				"creator": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/user?accountId=557058%3A4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"accountId": "557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"avatarUrls": {
						"48x48": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/48",
						"24x24": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/24",
						"16x16": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/16",
						"32x32": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/32"
					},
					"displayName": "Jan Sarson",
					"active": true,
					"timeZone": "Europe/Prague",
					"accountType": "atlassian"
				},
				"subtasks": [],
				"reporter": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/user?accountId=557058%3A4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"accountId": "557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"avatarUrls": {
						"48x48": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/48",
						"24x24": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/24",
						"16x16": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/16",
						"32x32": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/32"
					},
					"displayName": "Jan Sarson",
					"active": true,
					"timeZone": "Europe/Prague",
					"accountType": "atlassian"
				},
				"aggregateprogress": {
					"progress": 0,
					"total": 0
				},
				"customfield_10001": null,
				"customfield_10200": null,
				"customfield_10201": null,
				"customfield_10400": null,
				"customfield_10115": [
					{
						"id": 124,
						"name": "Sprint Tučňák (Jindra)",
						"state": "active",
						"boardId": 1,
						"goal": "Dodělat základní Android verzi Camerita (ať synchronizujeme vývoj)",
						"startDate": "2022-11-30T11:43:11.974Z",
						"endDate": "2022-12-19T13:38:00.000Z"
					}
				],
				"customfield_10511": null,
				"customfield_10116": "0|i00y2d:",
				"customfield_10512": null,
				"environment": null,
				"customfield_10513": null,
				"duedate": null,
				"progress": {
					"progress": 0,
					"total": 0
				},
				"votes": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/TM-3665/votes",
					"votes": 0,
					"hasVoted": false
				},
				"comment": {
					"comments": [],
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/18514/comment",
					"maxResults": 0,
					"total": 0,
					"startAt": 0
				},
				"worklog": {
					"startAt": 0,
					"maxResults": 20,
					"total": 0,
					"worklogs": []
				}
			}
		},
		{
			"expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
			"id": "18515",
			"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/issue/18515",
			"key": "TM-3666",
			"fields": {
				"statuscategorychangedate": "2022-12-15T14:59:29.707+0100",
				"issuetype": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issuetype/10102",
					"id": "10102",
					"description": "A small piece of work that's part of a larger task.",
					"iconUrl": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10316?size=medium",
					"name": "Sub-task",
					"subtask": true,
					"avatarId": 10316,
					"hierarchyLevel": -1
				},
				"parent": {
					"id": "18502",
					"key": "TM-3653",
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/18502",
					"fields": {
						"summary": "Vylepšené nákupy Billing 5.1 (+server)",
						"status": {
							"self": "https://tappytaps2.atlassian.net/rest/api/2/status/10001",
							"description": "",
							"iconUrl": "https://tappytaps2.atlassian.net/",
							"name": "Done",
							"id": "10001",
							"statusCategory": {
								"self": "https://tappytaps2.atlassian.net/rest/api/2/statuscategory/3",
								"id": 3,
								"key": "done",
								"colorName": "green",
								"name": "Done"
							}
						},
						"priority": {
							"self": "https://tappytaps2.atlassian.net/rest/api/2/priority/3",
							"iconUrl": "https://tappytaps2.atlassian.net/images/icons/priorities/medium.svg",
							"name": "Medium",
							"id": "3"
						},
						"issuetype": {
							"self": "https://tappytaps2.atlassian.net/rest/api/2/issuetype/10100",
							"id": "10100",
							"description": "Functionality or a feature expressed as a user goal.",
							"iconUrl": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10315?size=medium",
							"name": "Story",
							"subtask": false,
							"avatarId": 10315,
							"hierarchyLevel": 0
						}
					}
				},
				"timespent": null,
				"sprint": {
					"id": 124,
					"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/sprint/124",
					"state": "active",
					"name": "Sprint Tučňák (Jindra)",
					"startDate": "2022-11-30T11:43:11.974Z",
					"endDate": "2022-12-19T13:38:00.000Z",
					"originBoardId": 1,
					"goal": "Dodělat základní Android verzi Camerita (ať synchronizujeme vývoj)"
				},
				"project": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/project/10000",
					"id": "10000",
					"key": "TM",
					"name": "TappyTaps development",
					"projectTypeKey": "software",
					"simplified": false,
					"avatarUrls": {
						"48x48": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324",
						"24x24": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=small",
						"16x16": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=xsmall",
						"32x32": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=medium"
					}
				},
				"fixVersions": [],
				"aggregatetimespent": null,
				"resolution": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/resolution/10000",
					"id": "10000",
					"description": "Work has been completed on this issue.",
					"name": "Done"
				},
				"customfield_10113": {
					"hasEpicLinkFieldDependency": false,
					"showField": false,
					"nonEditableReason": {
						"reason": "PLUGIN_LICENSE_ERROR",
						"message": "The Parent Link is only available to Jira Premium users."
					}
				},
				"customfield_10114": null,
				"customfield_10510": null,
				"customfield_10500": null,
				"customfield_10501": null,
				"customfield_10502": [],
				"customfield_10503": null,
				"customfield_10504": null,
				"customfield_10505": null,
				"customfield_10506": null,
				"resolutiondate": "2022-12-15T14:59:29.703+0100",
				"customfield_10507": null,
				"customfield_10508": null,
				"customfield_10509": null,
				"workratio": -1,
				"watches": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/TM-3666/watchers",
					"watchCount": 1,
					"isWatching": false
				},
				"issuerestriction": {
					"issuerestrictions": {},
					"shouldDisplay": false
				},
				"lastViewed": null,
				"created": "2022-11-28T14:10:39.562+0100",
				"epic": null,
				"customfield_10100": null,
				"priority": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/priority/3",
					"iconUrl": "https://tappytaps2.atlassian.net/images/icons/priorities/medium.svg",
					"name": "Medium",
					"id": "3"
				},
				"customfield_10101": "3_*:*_1_*:*_941097758_*|*_10000_*:*_1_*:*_248548694_*|*_10002_*:*_1_*:*_282083729_*|*_10001_*:*_1_*:*_0",
				"customfield_10300": null,
				"customfield_10102": null,
				"labels": [],
				"aggregatetimeoriginalestimate": null,
				"timeestimate": null,
				"versions": [],
				"issuelinks": [],
				"assignee": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/user?accountId=557058%3A639f83e2-2814-4439-b805-3bc164b93999",
					"accountId": "557058:639f83e2-2814-4439-b805-3bc164b93999",
					"avatarUrls": {
						"48x48": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:639f83e2-2814-4439-b805-3bc164b93999/02863cb7-b09c-4894-ba6b-8ca717ea9055/48",
						"24x24": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:639f83e2-2814-4439-b805-3bc164b93999/02863cb7-b09c-4894-ba6b-8ca717ea9055/24",
						"16x16": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:639f83e2-2814-4439-b805-3bc164b93999/02863cb7-b09c-4894-ba6b-8ca717ea9055/16",
						"32x32": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:639f83e2-2814-4439-b805-3bc164b93999/02863cb7-b09c-4894-ba6b-8ca717ea9055/32"
					},
					"displayName": "Jiří Šimůnek",
					"active": true,
					"timeZone": "Europe/Prague",
					"accountType": "atlassian"
				},
				"updated": "2022-12-15T14:59:29.707+0100",
				"status": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/status/10001",
					"description": "",
					"iconUrl": "https://tappytaps2.atlassian.net/",
					"name": "Done",
					"id": "10001",
					"statusCategory": {
						"self": "https://tappytaps2.atlassian.net/rest/api/2/statuscategory/3",
						"id": 3,
						"key": "done",
						"colorName": "green",
						"name": "Done"
					}
				},
				"components": [],
				"timeoriginalestimate": null,
				"description": null,
				"timetracking": {},
				"customfield_10005": null,
				"security": null,
				"aggregatetimeestimate": null,
				"attachment": [],
				"flagged": false,
				"summary": "Programování server",
				"creator": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/user?accountId=557058%3A4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"accountId": "557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"avatarUrls": {
						"48x48": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/48",
						"24x24": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/24",
						"16x16": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/16",
						"32x32": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/32"
					},
					"displayName": "Jan Sarson",
					"active": true,
					"timeZone": "Europe/Prague",
					"accountType": "atlassian"
				},
				"subtasks": [],
				"reporter": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/user?accountId=557058%3A4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"accountId": "557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"avatarUrls": {
						"48x48": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/48",
						"24x24": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/24",
						"16x16": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/16",
						"32x32": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/32"
					},
					"displayName": "Jan Sarson",
					"active": true,
					"timeZone": "Europe/Prague",
					"accountType": "atlassian"
				},
				"aggregateprogress": {
					"progress": 0,
					"total": 0
				},
				"customfield_10001": null,
				"customfield_10200": null,
				"customfield_10201": null,
				"customfield_10400": null,
				"customfield_10115": [
					{
						"id": 124,
						"name": "Sprint Tučňák (Jindra)",
						"state": "active",
						"boardId": 1,
						"goal": "Dodělat základní Android verzi Camerita (ať synchronizujeme vývoj)",
						"startDate": "2022-11-30T11:43:11.974Z",
						"endDate": "2022-12-19T13:38:00.000Z"
					}
				],
				"customfield_10511": null,
				"customfield_10116": "0|i00y2l:",
				"customfield_10512": null,
				"environment": null,
				"customfield_10513": null,
				"duedate": null,
				"progress": {
					"progress": 0,
					"total": 0
				},
				"votes": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/TM-3666/votes",
					"votes": 0,
					"hasVoted": false
				},
				"comment": {
					"comments": [],
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/18515/comment",
					"maxResults": 0,
					"total": 0,
					"startAt": 0
				},
				"worklog": {
					"startAt": 0,
					"maxResults": 20,
					"total": 0,
					"worklogs": []
				}
			}
		},
		{
			"expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
			"id": "18365",
			"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/issue/18365",
			"key": "TM-3516",
			"fields": {
				"statuscategorychangedate": "2022-11-28T10:31:50.208+0100",
				"issuetype": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issuetype/10100",
					"id": "10100",
					"description": "Functionality or a feature expressed as a user goal.",
					"iconUrl": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10315?size=medium",
					"name": "Story",
					"subtask": false,
					"avatarId": 10315,
					"hierarchyLevel": 0
				},
				"timespent": null,
				"sprint": {
					"id": 124,
					"self": "https://tappytaps2.atlassian.net/rest/agile/1.0/sprint/124",
					"state": "active",
					"name": "Sprint Tučňák (Jindra)",
					"startDate": "2022-11-30T11:43:11.974Z",
					"endDate": "2022-12-19T13:38:00.000Z",
					"originBoardId": 1,
					"goal": "Dodělat základní Android verzi Camerita (ať synchronizujeme vývoj)"
				},
				"project": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/project/10000",
					"id": "10000",
					"key": "TM",
					"name": "TappyTaps development",
					"projectTypeKey": "software",
					"simplified": false,
					"avatarUrls": {
						"48x48": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324",
						"24x24": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=small",
						"16x16": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=xsmall",
						"32x32": "https://tappytaps2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10324?size=medium"
					}
				},
				"fixVersions": [],
				"aggregatetimespent": null,
				"resolution": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/resolution/10000",
					"id": "10000",
					"description": "Work has been completed on this issue.",
					"name": "Done"
				},
				"customfield_10113": {
					"hasEpicLinkFieldDependency": false,
					"showField": false,
					"nonEditableReason": {
						"reason": "PLUGIN_LICENSE_ERROR",
						"message": "The Parent Link is only available to Jira Premium users."
					}
				},
				"customfield_10510": null,
				"customfield_10114": null,
				"customfield_10500": null,
				"customfield_10501": null,
				"customfield_10502": [],
				"customfield_10503": null,
				"customfield_10504": null,
				"customfield_10505": null,
				"customfield_10506": null,
				"resolutiondate": "2022-11-28T10:31:50.202+0100",
				"customfield_10507": null,
				"customfield_10508": null,
				"customfield_10509": null,
				"workratio": -1,
				"issuerestriction": {
					"issuerestrictions": {},
					"shouldDisplay": false
				},
				"watches": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/TM-3516/watchers",
					"watchCount": 1,
					"isWatching": false
				},
				"lastViewed": null,
				"created": "2022-06-20T13:52:36.203+0200",
				"epic": null,
				"priority": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/priority/3",
					"iconUrl": "https://tappytaps2.atlassian.net/images/icons/priorities/medium.svg",
					"name": "Medium",
					"id": "3"
				},
				"customfield_10100": null,
				"customfield_10101": "10000_*:*_1_*:*_13901954024_*|*_10001_*:*_1_*:*_0",
				"customfield_10102": null,
				"customfield_10300": null,
				"labels": [],
				"aggregatetimeoriginalestimate": null,
				"timeestimate": null,
				"versions": [],
				"issuelinks": [],
				"assignee": null,
				"updated": "2022-11-28T10:31:50.208+0100",
				"status": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/status/10001",
					"description": "",
					"iconUrl": "https://tappytaps2.atlassian.net/",
					"name": "Done",
					"id": "10001",
					"statusCategory": {
						"self": "https://tappytaps2.atlassian.net/rest/api/2/statuscategory/3",
						"id": 3,
						"key": "done",
						"colorName": "green",
						"name": "Done"
					}
				},
				"components": [],
				"timeoriginalestimate": null,
				"description": "* přidat fullscreen reklamu po 3. spuštění videa\n* nacpat nějakou další reklamu\n* co bychom mohli omezit?\n** low light\n** světýlko\n** ",
				"timetracking": {},
				"customfield_10005": null,
				"security": null,
				"aggregatetimeestimate": null,
				"attachment": [],
				"flagged": false,
				"summary": "Úprava premium + reklamy",
				"creator": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/user?accountId=557058%3A4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"accountId": "557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"avatarUrls": {
						"48x48": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/48",
						"24x24": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/24",
						"16x16": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/16",
						"32x32": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/32"
					},
					"displayName": "Jan Sarson",
					"active": true,
					"timeZone": "Europe/Prague",
					"accountType": "atlassian"
				},
				"subtasks": [],
				"reporter": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/user?accountId=557058%3A4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"accountId": "557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509",
					"avatarUrls": {
						"48x48": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/48",
						"24x24": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/24",
						"16x16": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/16",
						"32x32": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:4048ac0d-4b8e-40dd-8bff-d312c6c99509/598ff103-ea18-45b2-a615-f038abd5330a/32"
					},
					"displayName": "Jan Sarson",
					"active": true,
					"timeZone": "Europe/Prague",
					"accountType": "atlassian"
				},
				"aggregateprogress": {
					"progress": 0,
					"total": 0
				},
				"customfield_10001": null,
				"customfield_10200": null,
				"customfield_10201": null,
				"customfield_10400": null,
				"customfield_10511": null,
				"customfield_10115": [
					{
						"id": 124,
						"name": "Sprint Tučňák (Jindra)",
						"state": "active",
						"boardId": 1,
						"goal": "Dodělat základní Android verzi Camerita (ať synchronizujeme vývoj)",
						"startDate": "2022-11-30T11:43:11.974Z",
						"endDate": "2022-12-19T13:38:00.000Z"
					}
				],
				"customfield_10512": null,
				"customfield_10116": "0|i00xzp:",
				"customfield_10117": null,
				"customfield_10513": null,
				"environment": null,
				"duedate": null,
				"progress": {
					"progress": 0,
					"total": 0
				},
				"comment": {
					"comments": [],
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/18365/comment",
					"maxResults": 0,
					"total": 0,
					"startAt": 0
				},
				"votes": {
					"self": "https://tappytaps2.atlassian.net/rest/api/2/issue/TM-3516/votes",
					"votes": 0,
					"hasVoted": false
				},
				"worklog": {
					"startAt": 0,
					"maxResults": 20,
					"total": 0,
					"worklogs": []
				}
			}
		}
	]
};

export default issue124;