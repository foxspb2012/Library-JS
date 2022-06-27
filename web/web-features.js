// Обертка для вызова асинхронной функции
const asyncHandler = (cb) => {
  return async function (req, res, next) {
    try {
      return await cb(req, res);
    } catch (err) {
      return next(err);
    }
  };
};
