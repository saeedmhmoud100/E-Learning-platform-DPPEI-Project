import Footer from "../../Footer";
import {ArchivedCourseCard} from "../Cards/ArchivedCourseCard";

export const Archived = () => {
    return (
        <>
            <div className="container mt-3 ">
                <div className="row my-4 g-2">
                    <ArchivedCourseCard />
                    <ArchivedCourseCard />
                    <ArchivedCourseCard />
                </div>


            </div>
            <Footer/>

        </>
    );
}
