import React from 'react';
import DefaultFooter from './DefaultFooter';
import DefaultHeader from './DefaultHeader';
import FeaturePost from '../../modules/blog_web/feature/pages/FeaturePost';

const DefautLayout: React.FC = () => (
  <>
    <DefaultHeader />
    <FeaturePost />
    {/* <DefaultFooter /> */}
  </>
);
export default DefautLayout;
