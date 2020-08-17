import React from 'react';
import FeaturePostLayout from '../components/FeaturePostLayout';
import { Payload } from '../utils';
import MainFeaturePostLayout from '../components/MainFeaturePostLayout';

const mainFeaturedPost = {
  title: 'Title of a longer featured blog post',
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: 'https://source.unsplash.com/random',
  imageTitle: 'main image description',
  linkText: 'Continue reading…',
  date: 'Nov 12s',
};
const mainFeaturedPostData = {
  title: 'Title of a longer featured blog post',
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: 'https://source.unsplash.com/random',
  imageTitle: 'main image description',
  linkText: 'Continue reading…',
  date: 'Nov 12s',
};
interface Props {}
const FeaturePost: React.FC<Props> = (props) => {
  const [data, setData] = React.useState<Payload | undefined>();
  const [mainData, setmainData] = React.useState<Payload | undefined>();

  React.useEffect(() => {
    setData(mainFeaturedPost);
    setmainData(mainFeaturedPostData);
  }, []);

  return (
    <>
      <div style={{ display: 'flex' }}>
        <div style={{ maxWidth: '50%', marginRight: 30, maxHeight: '100%' }}>
          <MainFeaturePostLayout data={mainData} />
        </div>
        <div>
          <FeaturePostLayout data={data} />
          <FeaturePostLayout data={data} />
          <FeaturePostLayout data={data} />
        </div>
      </div>
    </>
  );
};
export default FeaturePost;
