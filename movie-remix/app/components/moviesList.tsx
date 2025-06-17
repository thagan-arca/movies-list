// import { useLoaderData } from "react-router-dom";

// import Post from "./Post";
// import classes from "./PostsList.module.css";

// function PostsList() {
//   const posts = useLoaderData(); // New fetch method

//   return (
//     <>
//     {posts.length > 0 && (
//       <ul className={classes.posts}>
//         {/* <Post author={enteredAuthor} body={enteredBody} /> */}
//         {posts.map((post) => <Post key={post.id} id={post.id} author={post.author} body={post.body}/>)}
//         {/* <Post author="Jane Smith" body="Here's another post for you." /> */}
//       </ul>
//     )}
//     {posts.length === 0 && (
//       <div style={{ textAlign: 'center', color: 'white'}}>
//         <h2>There are no posts yet.</h2>
//         <p>Start adding some!</p>
//       </div>
//     )}
//     </>
//   );
// }

// export default PostsList;
