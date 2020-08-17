import React from 'react';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { Button, Link, Toolbar } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import PaginationItem from '@material-ui/lab/PaginationItem';

const sections = [
  { title: 'Technology', url: '#' },
  { title: 'Design', url: '#' },
  { title: 'Culture', url: '#' },
  { title: 'Business', url: '#' },
  { title: 'Politics', url: '#' },
  { title: 'Opinion', url: '#' },
  { title: 'Science', url: '#' },
  { title: 'Health', url: '#' },
  { title: 'Style', url: '#' },
  { title: 'Travel', url: '#' },
];
export default function DenseAppBar() {
  return (
    <>
      <Toolbar
        style={{ justifyContent: 'space-between', borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}
      >
        <Button size="small">
          <Typography variant="h6">Blog</Typography>
        </Button>
        <div>
          <IconButton>
            <SearchIcon />
          </IconButton>
          <Button variant="outlined" size="small">
            Sign up
          </Button>
        </div>
      </Toolbar>
      <Toolbar
        variant="dense"
        component="nav"
        style={{
          justifyContent: 'space-between',
          overflow: 'hidden!important',
          margin: 'auto',
          maxWidth: 1000,
        }}
      >
        {sections.map((section) => {
          return (
            <Link
              color="inherit"
              noWrap
              key={section.title}
              variant="body2"
              href={section.url}
              style={{ textDecoration: 'none' }}
            >
              {section.title}
            </Link>
          );
        })}
      </Toolbar>
    </>
  );
}
