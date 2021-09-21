import React from 'react';
import { useQuery, gql } from '@apollo/client';

const ReviewerForm = () => {
    return (
        <form >
            <label>
                Name:
                <input type="text" name="name"></input>
            </label>
            <label>
                Email
                <input type="email"></input>
            </label>
            <input type="submit" value="Submit" />
        </form>
    );
}

export default ReviewerForm;