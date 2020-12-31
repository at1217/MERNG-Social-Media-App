import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { Grid } from 'semantic-ui-react';
import PostCard from '../components/PostCard';

export const Home = () => {

    const { loading, error, data: { getPosts: posts } } = useQuery(FETCH_POSTS_QUERY);
    if (error) return `Error! ${error.message}`;
    if (posts) {
        console.log(posts);
    }

    return (
    <Grid columns={3}>
        <Grid.Row className="page-title">
            <h1>Recent Posts</h1>
        </Grid.Row>
        <Grid.Row>
            { loading ? (
                <h1>Loading posts...</h1>
            ) : (
                posts && posts.map(post => (
                    <Grid.Column key={post.id} style={{ marginBottom: 20 }}>
                        <PostCard post={post} />
                    </Grid.Column>
                ))
            )}
        </Grid.Row>
    </Grid>
    )
}

const FETCH_POSTS_QUERY = gql`
    {
        getPosts {
            id
            body
            username
            createdAt
            likeCount
            likes {
                username
            }
            commentCount
            comments {
                id
                body
                createdAt
                username
            }
        }
    }
`

export default Home;