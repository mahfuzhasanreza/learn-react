import PropTypes from "prop-types";
import { IoCheckmarkCircleSharp } from "react-icons/io5";

const Feature = ({ feature }) => {
    return (
        <div>
            <p className="flex items-center"> <IoCheckmarkCircleSharp className="text-blue-300 mr-2"></IoCheckmarkCircleSharp> {feature}</p>
        </div>
    );
};

Feature.propTypes = {
    feature: PropTypes.string
}

export default Feature;