import { Fragment } from 'react';

const ComingSoonPage = () => {
  return (
    <Fragment>
      <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4 text-center">
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            این صفحه ها به زودی اضافه می‌شوند
          </h1>
          <p className="text-gray-600 mb-6">
            ما در حال کار بر روی این بخش هستیم و به زودی آن را راه‌اندازی خواهیم کرد.
          </p>
          <div className="animate-pulse">
            <div className="h-3 w-full bg-gray-200 rounded-full mb-2"></div>
            <div className="h-3 w-3/4 bg-gray-200 rounded-full mx-auto"></div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ComingSoonPage;