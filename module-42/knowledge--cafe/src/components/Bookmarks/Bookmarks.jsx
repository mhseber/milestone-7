// rsc
import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";
const Bookmarks = ({ bookmarks, readingTime }) => {
    return (
        <div className="md:w-2/3 bg-gray-300 ml-4 mt-2 pt-4">
            <div>
                <h3 className="text-4xl"> Reading Time:{readingTime}</h3>
            </div>
            <p className="text-3xl text-center">Bookmarked Blogs : {bookmarks.length}</p>
            {
                bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}

export default Bookmarks;