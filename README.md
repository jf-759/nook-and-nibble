# Web Development Final Project- Nook & Nibble

Submitted by: **Jane Fernandez**

This web app: **A social media platform where users can create, share, and interact with posts. Users can upload images, write posts with titles and content, upvote posts, leave comments, search for posts by title, sort posts by creation time or popularity, and edit or delete their own posts.**

Time spent: **96** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **The site has a dashboard displaying a list of data fetched using an API call**
  - The dashboard displays all user-created posts with title, creation time, and upvote count
  - Each post card includes multiple features: title, creation timestamp, upvote count, and image thumbnail
- [x] **`useEffect` React hook and `async`/`await` are used**
  - Used in App.jsx to fetch posts from Supabase on component mount
  - Used in PostForm.jsx to handle async image uploads to Supabase storage
  - Used in Navbar.jsx to fetch user authentication state
- [x] **The app dashboard includes at least three summary statistics about the data**
  - Total number of posts displayed
  - Average upvotes across all posts
  - Most recently created post timestamp
- [x] **A search bar allows the user to search for an item in the fetched data**
  - The search bar filters posts by title in real-time
  - The list of results dynamically updates as the user types into the search bar
  - Search is case-insensitive
- [x] **An additional filter allows the user to restrict displayed items by specified categories**
  - Users can sort posts by creation time (newest first or oldest first)
  - Users can sort posts by upvote count (most upvoted first)
  - The dashboard list dynamically updates as the user adjusts the sort filter

The following **optional** features are implemented:

- [x] Multiple filters can be applied simultaneously
  - Users can search by title AND sort by creation time or upvotes at the same time
- [x] Filters use different input types
  - Search uses a text input
  - Sort uses dropdown/select menu
- [ ] The user can enter specific bounds for filter values

The following **additional** features are implemented:

* [x] **User Authentication** - Sign up and login with Supabase Auth
* [x] **Image Upload** - Users can upload images when creating posts, stored in Supabase Storage
* [x] **Post Details Page** - Click on any post to view full content, image, and comments
* [x] **Comments System** - Users can leave comments on posts that persist in the database
* [x] **Edit Posts** - Users can edit their own previously created posts
* [x] **Delete Posts** - Users can delete their own posts from the post detail page
* [x] **Upvote System** - Users can upvote posts multiple times; upvote counts persist
* [x] **Protected Routes** - Only authenticated users can access the home feed and create posts
* [x] **User Logout** - Users can logout and are redirected to the login page
* [x] **Responsive Design** - App is mobile-friendly and works on different screen sizes

## Video Walkthrough

Here's a walkthrough of implemented user stories:

[Video Walkthrough](https://imgur.com/a/ie3Ij58)


## Notes

**Challenges encountered:**
- Setting up Supabase storage policies and RLS (Row Level Security) policies correctly took debugging to ensure authenticated users could upload images and create posts
- Managing state between Supabase database and React state required careful handling to prevent data inconsistencies, especially when deleting or editing posts
- Implementing proper authentication flow to protect routes and prevent logged-out users from accessing protected pages
- Handling async operations with image uploads and ensuring the image URL was properly saved to the database before creating the post

**Solutions implemented:**
- Created proper RLS policies in Supabase for posts table to allow authenticated users to perform CRUD operations on their own posts
- Added auth state checking in App.jsx to control which routes are accessible based on login status
- Used async/await with proper error handling for all Supabase operations
- Implemented loading state during authentication checks to prevent UI flickering

## License

    Copyright 2024 [name of copyright owner]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.