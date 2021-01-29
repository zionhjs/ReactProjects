# MScience Front-End Challenge — Cat Viewer

![Test Image 1](https://github.com/MScienceLLC/front-end-challenge/blob/master/demo-cover.png?raw=true)

## Objective

Using React, Vue or Angular, we'd like you to build a navigable cat viewer using the [thecatapi](https://thecatapi.com/). When the page first loads, the cat viewer should have one random API image in it. Alongside the image, *if available within the `breeds` array*, should be the `name` and `description` of the cat. If these fields are unavailable, reflect that they are unavailable in the UI (as in the screenshot).

Somewhere beneath the image, create three buttons—`Previous`, `Next` and `Random`. The `Previous` and `Next` buttons should be initially disabled, since only one image has been returned from the API. When `Random` is clicked, you must fetch a new image from the API. The viewer should show the newly fetched image immediately. Now that two images are in the viewer and you are looking at the second (last image), the `Previous` button should no longer be disabled. Follow the same logic for the `Next` button, enabling and disabing it as necessary.

## Aesthetic

Your demo should be functional. Only spend time making it look pretty if you have time at the end.

## Bonus Points

We like to see semantic, accessible `HTML`. You know what to do.

## Submission

Create a feature branch with the pattern `applicant/firstname-lastname`, and push it to this repository.
