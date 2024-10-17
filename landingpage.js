function LandingPage() {
  const [username, setUsername] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !title || !content) {
      setError('All fields are required.');
      return;
    }

    const newPost = { username, title, content };
    const savedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    localStorage.setItem('posts', JSON.stringify([...savedPosts, newPost]));

    history.push('/posts');
  };

  return (
    <div>
      <h1>Create a Blog Post</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Content:</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
