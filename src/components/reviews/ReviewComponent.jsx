import { useState } from "react";
import { Star } from "lucide-react";

const ReviewComponent = () => {
  const [selectedRating, setSelectedRating] = useState(0);
  const [feedback, setFeedback] = useState("");

  const handleRating = (rating) => {
    setSelectedRating(rating);
    console.log(`Selected Rating: ${rating}`);
  };

  const handleSubmit = () => {
    console.log(`Rating: ${selectedRating}, Feedback: ${feedback}`);
    alert("Thank you for your feedback!");
    setSelectedRating(0);
    setFeedback("");
  };

  const ratings = [
    { stars: 5, percentage: 56 },
    { stars: 4, percentage: 29 },
    { stars: 3, percentage: 5 },
    { stars: 2, percentage: 3 },
    { stars: 1, percentage: 7 },
  ];

  return (
    <div className="w-11/12 md:w-8/12 lg:w-3/4 mx-auto mt-10 bg-white rounded-lg shadow-lg p-6">
      <div className="md:flex justify-between gap-4">
        {/* Ratings Summary Section */}
        <div className="text-center mb-6 w-full md:w-1/2">
          <h3 className="text-lg font-bold text-gray-800">Patient Reviews</h3>
          <div className="flex items-center justify-center mt-2">
            <span className="text-4xl font-bold text-gray-800">4.6</span>
            <div className="flex ml-2">
              {Array(5)
                .fill(0)
                .map((_, index) => (
                  <Star
                    key={index}
                    className={`h-6 w-6 ${
                      index < 4 ? "text-violet-500" : "text-gray-300"
                    }`}
                  />
                ))}
            </div>
          </div>
          <p className="text-gray-500 mt-1">1,640 reviews</p>

          <div className="space-y-3 mt-6">
            {ratings.map((rating) => (
              <div key={rating.stars} className="flex items-center">
                <span className="text-sm text-gray-600 w-12">
                  {rating.stars} star
                </span>
                <div className="flex-1 mx-2 bg-gray-200 rounded-full h-2 relative">
                  <div
                    className="bg-violet-500 h-2 rounded-full"
                    style={{ width: `${rating.percentage}%` }}
                  ></div>
                </div>
                <span className="text-sm text-gray-600">
                  {rating.percentage}%
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Feedback Section */}
        <div className="w-full md:w-1/2">
          <h3 className="text-lg font-bold text-gray-800 mb-4">
            Give Your Feedback
          </h3>
          <p className="text-sm text-gray-500 mb-3">Rate your experience:</p>
          <div className="flex items-center">
            {Array(5)
              .fill(0)
              .map((_, index) => (
                <Star
                  key={index}
                  className={`h-8 w-8 cursor-pointer ${
                    index < selectedRating
                      ? "text-yellow-500"
                      : "text-gray-300"
                  }`}
                  onClick={() => handleRating(index + 1)}
                />
              ))}
          </div>

          <textarea
            className="w-full mt-4 p-2 border rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-violet-500"
            placeholder="Write your feedback..."
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          ></textarea>

          <button
            className="bg-gray-800 text-white px-6 py-2 rounded-lg text-sm font-semibold hover:bg-gray-900 transition mt-4 w-full"
            onClick={handleSubmit}
            disabled={!selectedRating || !feedback}
          >
            Submit Review
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewComponent;
