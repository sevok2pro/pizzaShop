import React, { lazy, Suspense } from 'react';

const AsyncRoot = lazy(() => import(/* webpackChunkName: "cart" */'./module'));

const Root = (
  <Suspense fallback={null}>
    <AsyncRoot />
  </Suspense>
);

export default Root;
