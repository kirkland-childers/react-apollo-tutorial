import { gql, useMutation } from '@apollo/client';
import { useState } from 'react';

const CreateLink = () => {
  const [formState, setFormState] = useState({
    description: '',
    url: ''
  });
  
  const CREATE_LINK_MUTATION = gql`
    mutation PostMutation(
      $description: String!
      $url: String!
    ) {
      post(description: $description, url: $url) {
        id
        createdAt
        url
        description
      }
    }
  `;

  const [createLink] = useMutation(CREATE_LINK_MUTATION, {
    variables: formState
  });

  const submitLink = (e) => {
    e.preventDefault();
    createLink();
    setFormState({
      description: '',
      url: ''
    });
  }

  return (
    <div>
      <form
        onSubmit={(e) => submitLink(e)}
      >
        <div className="flex flex-column mt3">
          <input
            className="mb2"
            value={formState.description}
            onChange={(e) =>
              setFormState({
                ...formState,
                description: e.target.value
              })
            }
            type="text"
            placeholder="A description for the link"
          />
          <input
            className="mb2"
            value={formState.url}
            onChange={(e) =>
              setFormState({
                ...formState,
                url: e.target.value
              })
            }
            type="text"
            placeholder="The URL for the link"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateLink;