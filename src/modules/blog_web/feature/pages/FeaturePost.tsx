import React from 'react';
import { Grid } from '@material-ui/core';
import FeaturePostLayout from '../components/FeaturePostLayout';
import { Payload, mainPayload } from '../utils';
import MainFeaturePostLayout from '../components/MainFeaturePostLayout';

const featuredPost = {
  total: 2,
  items: [
    {
      id: 1,
      title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      description:
        "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
      image: 'https://source.unsplash.com/random',
      imageTitle: 'main image description',
      linkText: 'Continue reading…',
      date: 'Nov 12s',
    },
    {
      id: 2,
      title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
      description:
        "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
      image: 'https://source.unsplash.com/random',
      imageTitle: 'main image description',
      linkText: 'Continue reading…',
      date: 'Nov 12s',
    },
    {
      id: 3,
      title: 'Title of a longer featured blog post',
      description:
        "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
      image: 'https://source.unsplash.com/random',
      imageTitle: 'main image description',
      linkText: 'Continue reading…',
      date: 'Nov 12s',
    },
  ],
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
  const [data, setData] = React.useState<mainPayload | undefined>();
  const [mainData, setmainData] = React.useState<Payload | undefined>();

  React.useEffect(() => {
    setData(featuredPost);
    setmainData(mainFeaturedPostData);
  }, []);

  return (
    <>
      <Grid container spacing={4}>
        <Grid item xs={6} md={6}>
          <MainFeaturePostLayout data={mainData} />
        </Grid>
        <Grid item xs={6} md={6}>
          <FeaturePostLayout data={data} />
        </Grid>
      </Grid>
    </>
  );
};
export default FeaturePost;
