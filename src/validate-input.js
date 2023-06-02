const core = require('@actions/core');

try {
  const issueTitle = process.env.GITHUB_EVENT_ISSUE_TITLE;
  const issueBody = process.env.GITHUB_EVENT_ISSUE_BODY;
  const issueNumber = process.env.GITHUB_EVENT_ISSUE_NUMBER;
//  const issueAssignee = process.env.GITHUB_EVENT_ISSUE_ASSIGNEE;

//   // Validate inputs
// //   if (!issueTitle || issueTitle.trim() === '') {
// //     throw new Error('Issue title is required.');
// //   }

//   if (!issueBody || issueBody.trim() === '') {
//     throw new Error('Issue description is required.');
//   }

// //   if (issueLabels.length === 0) {
// //     throw new Error('At least one label must be assigned to the issue.');
// //   }


  // Print validated inputs
  console.log(`Issue Title: ${issueTitle}`);
  console.log(`Issue Description: ${issueBody}`);
  console.log(`Issue Description: ${issueNumber}`);
 // console.log(`Issue Labels: ${issueLabels.join(', ')}`);
  //console.log(`Issue Assignees: ${issueAssignees.join(', ')}`);

  // Additional validation or processing logic can be added here

//   // Set outputs for use in subsequent steps
//   //core.setOutput('validatedTitle', issueTitle);
//   core.setOutput('validatedDescription', issueBody);
//   //core.setOutput('validatedLabels', issueLabels.join(','));
//  // core.setOutput('validatedAssignees', issueAssignees.join(','));

} catch (error) {
  core.setFailed(error.message);
}
