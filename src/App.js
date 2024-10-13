import '@popperjs/core';
import 'jquery';
import 'react-multi-carousel/lib/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import {Navigate, Route, Routes, useNavigate} from "react-router-dom";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home";
import {Navbar} from "./components/Navbar/Navbar";
import Courses from './Pages/Courses/index';
import {AdminPage} from "./Pages/Admin/AdminPage";
import CourseDetails from './Pages/CourseDetails/index';
import Checkout from './Pages/Checkout/index';
import Cart from './Pages/Cart/index';
import NotFound from './Pages/NotFound/NotFound';
import VedioPage from './components/VedioPage'
import {Children, useEffect, useState} from "react";
import InstProfile from "./components/InstProfile";
import AddCourseForm from "./components/AddCourseForm";
import Footer from "./components/Footer";
import {MyCourses} from "./Pages/MyCourses";
import UserProfile from "./Pages/UserProfile/UserProfile";
import EditUserProfile from "./Pages/EditUserProfile/EditUserProfile";
import UserCourses from "./components/MyCourses/UserCourses/UserCourses";
import PurchaseHistory from "./Pages/PurchaseHistory/PurchaseHistory";
import HelpSupport from "./Pages/HelpSupport/HelpSupport";
import InsCourses from "./Pages/InsCourses";
import axios from "axios";
import {getAllCourses, getCourseDetails, getWishlist} from "./store/actions/coursesAction";
import {useDispatch,useSelector} from "react-redux";
import CourseCardsLoading from './components/Loading/CourseCardsLoading/CourseCardsLoading';
import { getToken, setToken } from './hooks/myToken';
import useGetData from './ApiHooks/useGetData';
import { getLoggedUserData } from './store/actions/userActions';
import GeneralLoading from './components/Loading/GeneralLoading/GeneralLoading';

function App() {
    const {userData, logged_in} = useSelector(state=>state.user);
    const {courses, loading} = useSelector(state=>state.allCourses);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [pageLoading, setPageLoading] = useState(false);
    const [coursesWithDetails,setCoursesWithDetails] = useState([]);
    const [categoryInput,setCategoryInput] = useState('');

    //FUNCTION TO SET CATEGORY USER INPUT FROM NAVBAR TO BE PASSED ON TO COURSES PAGE
    const updateCategory = (category)=>{
        setCategoryInput(category);
        navigate('/courses');
    }

    // FUNCTION THAT FETCHES COURSE DETAILS FOR EACH COURSE TO BE USED IN COURSES PAGE
    const fetchCourseDetails = async () => {
        if (courses?.length > 0) {
            try {
                const promises = courses.map(item => dispatch(getCourseDetails(item.id)));
                const updatedCourses = await Promise.all(promises);
                setCoursesWithDetails(updatedCourses);
              } catch (error) {
                console.error('Error fetching course details:', error);
              }
        }
    };

    // WHEN COMPONENT FIRST RENDERS, CHECK FOR TOKEN AND GET USER DATA AND COURSES
    useEffect(() => {
        if(getToken()){
            dispatch(getLoggedUserData(getToken()));
            dispatch(getAllCourses());
            dispatch(getWishlist())
        }else{
            navigate('/login');
        }
    },[]);

    // WHEN ALL COURSES FETCHED AND USER DATA, GET DETAILS FOR EACH COURSE AND SET LOADING FALSE
    useEffect(()=>{
        if(!loading && courses?.length > 0){
            fetchCourseDetails();
        }
    },[loading])

    // SETTING LOADING AFTER ALL NEEDED DATA HAS BEEN FETCHED
    useEffect(()=>{
        if(courses?.length>0 && userData){
            setPageLoading(false);
        }
    },[courses,userData])

    // PROTECTED-ROUTE FOR AUTHORIZATION
    function ProtectedRoute ({children}){
        return getToken() ? children : <Navigate to={'/login'}/>
    }

    return (<div className="App">
        <Navbar updateCategory={updateCategory}/>
        {
            pageLoading ? (
                <GeneralLoading takeHeight={'vh-100'}/>
            ):(
                <Routes>
                <Route path="/" element={
                    <ProtectedRoute>
                        <Home/>
                    </ProtectedRoute>
                }/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path='/admin/*' element={
                    <ProtectedRoute>
                        <AdminPage/>
                    </ProtectedRoute>
                }/>
                <Route path="/inst-profile" element={
                    <ProtectedRoute>
                        <InstProfile/>
                    </ProtectedRoute>
                }/>
                <Route path="/inst-profile/all-courses" element={
                    <ProtectedRoute>
                        <InsCourses/>
                    </ProtectedRoute>
                }/>
                <Route path='add-course' element={
                    <ProtectedRoute>
                        <AddCourseForm/>
                    </ProtectedRoute>
                }/>
                <Route path='/course-details/:id' element={
                    <ProtectedRoute>
                        <CourseDetails/>
                    </ProtectedRoute>
                }/>
                <Route path='/cart' element={
                    <ProtectedRoute>
                        <Cart/>
                    </ProtectedRoute>
                }/>
                <Route path='/checkout' element={
                    <ProtectedRoute>
                        <Checkout/>
                    </ProtectedRoute>
                }/>
                <Route path='/my-courses/*' element={
                    <ProtectedRoute>
                        <MyCourses />
                    </ProtectedRoute>
                }/>
                <Route path="/profile" element={
                    <ProtectedRoute>
                        <UserProfile/>
                    </ProtectedRoute>
                } />
                <Route path="videopage/:id" element={
                    <ProtectedRoute>
                        <VedioPage/>
                    </ProtectedRoute>
                } />
                <Route path="/profile/edit" element={
                    <ProtectedRoute>
                        <EditUserProfile/>
                    </ProtectedRoute>
                }/>
                <Route path="/profile/purchase-history" element={
                    <ProtectedRoute>
                        <PurchaseHistory/>
                    </ProtectedRoute>
                }/>
                <Route path="/help-and-support" element={
                    <ProtectedRoute>
                        <HelpSupport/>
                    </ProtectedRoute>
                }/>
                <Route path='/courses' element={
                    <ProtectedRoute>
                        <Courses coursesWithDetails={coursesWithDetails} categoryInput={categoryInput} updateCategory={updateCategory}/>
                    </ProtectedRoute>
                }/>
             
                <Route path='/*' element={<NotFound/>}/>
            </Routes>
            )
        }
        <Footer />

        <ToastContainer/>
    </div>);
}

export default App;
