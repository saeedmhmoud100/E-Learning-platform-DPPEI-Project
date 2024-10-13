import Footer from "../../Footer";
import {ArchivedCourseCard} from "../Cards/ArchivedCourseCard";
import {useSelector} from "react-redux";
import GeneralLoading from "../../Loading/GeneralLoading/GeneralLoading";

export const Archived = () => {
    const { userData:{wishlist:courses},loading } = useSelector((state) => state.user);

    return (
        <>
            <div className="container mt-3 ">
                <div className="row my-4 g-2">
                    {   loading ? <GeneralLoading/>:
                        courses?.length> 0 ? courses?.map(({course}, index) => (
                            <ArchivedCourseCard key={index} course={course} progress={Math.trunc(Math.random()*101)}/>
                        )) : <div className="text-center">No Archived Courses</div>
                    }
                </div>


            </div>
        </>
    );
}
