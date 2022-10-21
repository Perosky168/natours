const Review = require('../models/reviewModel');
const Booking = require('../models/bookingModel');
const factory = require('./handlerFactory');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.setTourUserIds = (req, res, next) => {
  // Allow nested routes
  if (!req.body.tour) req.body.tour = req.params.tourId;
  if (!req.body.user) req.body.user = req.user.id;
  next();
};

exports.checkBooking = catchAsync(async (req, res, next) => {
  const tourID = req.params.tourId;
  const userID = req.user.id
  const booking = await Booking.findOne({ user: userID, tour: tourID });

  if (!booking) {
    return next(new AppError('cant review tour that has not been booked', 404))
  } else {
    return next()
  }
});

exports.getAllReviews = factory.getAll(Review);
exports.getReview = factory.getOne(Review);
exports.createReview = factory.createOne(Review);
exports.updateReview = factory.updateOne(Review);
exports.deleteReview = factory.deleteOne(Review);
