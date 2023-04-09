## The reason
I created this little app because:
- I wanted to try Svelte
- I wanted to solve a scheduling problem I had for my Instagram posts

This project is just for fun and will only be updated when I feel the need to add features to it :)

## The problem
I have multiple posts that I need to organize. I want to visualize how they would look in the 3 column Instagram grid and be able to drag and drop them to my liking. A picture is not even needed, a simple description of it will do. Up to here it could've been solved with a Notion gallery, but I wasn't satisfied. I also want a suggestion on when to post each post, starting from an initial date and then spacing them a few days between each one automatically. But if one of the dates is set manually then the date is saved and a post will land on that date no matter the spacing.

## What's done
As of April 2023:
- A 3 column grid where posts can be added by providing a title.
- Each post is assigned a date based on an initial date and the number of days between posts (both hardcoded).
- Posts can be dragged and dropped in the grid, causing the dates to switch accordingly.

## What I used
The whole project is based on this tutorial https://youtu.be/sFX525V3dMs which uses
- Skeleton UI toolkit: https://www.skeleton.dev/
- Svelte dnd action: https://www.npmjs.com/package/svelte-dnd-action
