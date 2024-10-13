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
import {getAllCourses, getCourseDetails} from "./store/actions/coursesAction";
import {useDispatch,useSelector} from "react-redux";
import CourseCardsLoading from './components/Loading/CourseCardsLoading/CourseCardsLoading';
import { getToken, setToken } from './hooks/myToken';
import useGetData from './ApiHooks/useGetData';
import { getLoggedUserData } from './store/actions/userActions';
import GeneralLoading from './components/Loading/GeneralLoading/GeneralLoading';

function App() {
    const {userData, logged_in} = useSelector(state=>state.user);
    const {courses} = useSelector(state=>state.allCourses);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [coursesWithDetails,setCoursesWithDetails] = useState([]);


    const fetchCourseDetails = async () => {
        if (courses?.length > 0) {
          const promises = courses.map(async (item) => {
            const courseDetails = await dispatch(getCourseDetails(item.id));
            return courseDetails;
          });
          const updatedCourses = await Promise.all(promises);
          setCoursesWithDetails(updatedCourses);
        }
    };
    
    useEffect(() => {
        if(getToken()){
            dispatch(getLoggedUserData(getToken()))
            dispatch(getAllCourses());
        }else{
            navigate('/login');
        }
    },[]);

    useEffect(()=>{
        if(courses?.length > 0 && userData){
            setLoading(false);
            fetchCourseDetails()
        }
    },[courses, userData])

    function ProtectedRoute ({children}){
        return getToken() ? children : <Navigate to={'/login'}/>
    }

    return (<div className="App">
        <Navbar/>
        {
            loading ? (
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
                <Route path="videopage" element={
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
                        <Courses coursesWithDetails={coursesWithDetails}/>
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
