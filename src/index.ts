import inquirer from "inquirer";

inquirer
  .prompt([
    /* Pass your questions in here */
    {
      type: "confirm",
      name: "test",
      message: "Is it works?"
    },
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    console.log("ok", answers);
  });
