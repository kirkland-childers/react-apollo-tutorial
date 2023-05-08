import { useEffect, useState } from 'react';
import Link from './Link';
import { gql, useQuery } from '@apollo/client';

const LinkList = () => {
  const [links, setLinks] = useState([]);
  
  const FEED_QUERY = gql`
  {
    feed {
      id
      links {
        id
        createdAt
        url
        description
      }
    }
  }
  `;

  const { data, refetch } = useQuery(FEED_QUERY);

useEffect(() => {
  refetch();
  setLinks(data);
}, [data, refetch]);



  return (
    <div>
      {links?.feed?.links.map((link) => (
        <Link key={link.id} link={link} />
      ))}
    </div>
  );
};

export default LinkList;