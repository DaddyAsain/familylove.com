document.addEventListener('DOMContentLoaded', () => {
    const postContainer = document.getElementById('post');

    // Sample posts data
    const posts = [
        {
            id: 1,
            title: 'First Blog Post',
            content: 'This is the content of the first blog post. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            date: '2024-07-10'
        },
        {
            id: 2,
            title: 'Second Blog Post',
            content: 'This is the content of the second blog post. Curabitur blandit tempus porttitor.',
            date: '2024-07-09'
        }
    ];

    // Function to get query parameter by name
    const getQueryParam = (name) => {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(name);
    };

    // Get the post ID from query parameter
    const postId = parseInt(getQueryParam('id'), 10);

    // Find the post by ID
    const post = posts.find(p => p.id === postId);

    if (post) {
        postContainer.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.content}</p>
            <small>Posted on ${post.date}</small>
        `;
    } else {
        postContainer.innerHTML = '<p>Post not found.</p>';
    }
});

