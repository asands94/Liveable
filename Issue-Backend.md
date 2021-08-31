# PROJECT ISSUE TICKET

> Copy and paste the raw MD code of this template **into an issue ticket in your project repo**, then replace the quote blocks with your detailed, clear descriptions.

## Unexpected Behavior

> Describe your issue, question, or bug with a clear and concise description.

## Expected Behavior

Trying to push categories into posts. A post should have my categories and a category should have many posts. However I am only able to get all categories into a post and not able to pick specific ones. 

## Reproduce the Error

> Describe the steps we can take to reproduce the error, i.e.:

```md
1. Clone this repo.
2. Run `npm start`.
3. Navigate to the home page.
4. submit a form and click on one or two of the checkbox options
(it will create the post hoever in the backend I can see that the category was not appropriate)
```

## Documentation

> Include the exact error message, and if helpful, any supplemental documentation, such as screen captures.

```md
No error message, just checking my backend routes and I see the data is not beingpushed into the posts table correctly
```

## Attempted Resolution

> I've been trying to google how to set up a many to many using HABTM for the controllers but am unclear on what to do. I know my create is wrong for the posts as when I push categories, I have to hard code in the number of the category ID in order to get a correct response.

```md
1. https://www.reddit.com/r/rails/comments/923lzb/habtm_association_question_adding_models_to/
2. https://stackoverflow.com/questions/49847418/rails-habtm-setup-model-object-join-table-insertion-controller-setup
3. https://www.learnhowtoprogram.com/ruby-and-rails/rails-with-active-record/making-many-to-many-associations-in-controllers
```
