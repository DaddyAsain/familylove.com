document.addEventListener('DOMContentLoaded', () => {
    const postsContainer = document.getElementById('posts');

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

    // Function to display posts
    const displayPosts = (posts) => {
        postsContainer.innerHTML = '';
        posts.forEach(post => {
            const postElement = document.createElement('article');
            postElement.innerHTML = `
                <h2>${post.title}</h2>
                <p>${post.content}</p>
                <small>Posted on ${post.date}</small>
                <a href="post.html?id=${post.id}">Read more</a>
            `;
            postsContainer.appendChild(postElement);
        });
    };

    // Initially display sample posts
    displayPosts(posts);
});
