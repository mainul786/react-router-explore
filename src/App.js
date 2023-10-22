import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './layout/Main';
import Home from './componets/Home/Home';
import About from './componets/About/About';
import Products from './componets/Products/Products';
import Friends from './componets/Friends/Friends';
import FriendDetails from './componets/FriendDetails/FriendDetails';
import Posts from './componets/Posts/Posts';
import PostDetails from './componets/PostDetails/PostDetails';

function App() {
 const router = createBrowserRouter([
  {path:'/',
element:<Main></Main>,
children:[
  {path:'home', element:<Home></Home>},
  {path:'about', element:<About></About>},
  {path:'products', element:<Products></Products>},
  {path:'friends',
  loader: async () =>{
    return fetch('https://jsonplaceholder.typicode.com/users')
  },
  element:<Friends></Friends>},
  {path:'/friend/:friendId',
  loader: async ({params}) =>{
    return fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
  },
   element:<FriendDetails></FriendDetails>},
   {
    path:'posts',
    loader: async ()=>{
      return fetch('https://jsonplaceholder.typicode.com/posts')
    },
    element:<Posts></Posts>
   },
   {
    path:'/post/:postId',
    loader: async({params})=>{
      return fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    } ,
    element:<PostDetails></PostDetails>
   },
  {path:'*', element:<div><h2>Page Not Found</h2></div>}
]}
 ])
  return (
    <div className="App">
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
