function PostsPage() {
  const [posts, setPosts] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    setPosts(savedPosts);
  }, []);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <header>
        <h1>Blog Posts</h1>
        <button onClick={toggleMode}>
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
        <button onClick={() => history.push('/')}>Back</button>
      </header>
      <main>
        {posts.length === 0 ? (
          <p>No blog posts yet!</p>
        ) : (
          <ul>
            {posts.map((post, index) => (
              <li key={index}>
                <h2>{post.title}</h2>
                <p>{post.content}</p>
                <p><strong>By:</strong> {post.username}</p>
              </li>
            ))}
          </ul>
        )}
      </main>
      <footer>
        <a href="https://developer-portfolio.com" target="_blank" rel="noopener noreferrer">
          Developer's Portfolio
        </a>
      </footer>
    </div>
  );
}

export default PostsPage;
