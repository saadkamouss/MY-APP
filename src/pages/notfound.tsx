import React from 'react';
import { Link } from 'react-router-dom';
import { buttonVariants } from '../components/ui/button';

export default function NotFound() {
  return (
    <div className='flex flex-col gab-2'>
      <div>404 NOT FOUND</div>
      <Link className={buttonVariants({ variant: 'outline' })} to='/'>
        Click here to go back to the HomePage
      </Link>
    </div>
  );
}
