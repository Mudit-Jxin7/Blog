const Post = () => {
  return (
    <div className="post">
      <div className="image">
        <img
          src="https://techcrunch.com/wp-content/uploads/2022/05/Serve-customer.jpg?w=1390&crop=1"
          alt="nil"
        />
      </div>
      <div className="texts">
        <h2>
          Serve Robotics to deploy up to 2,000 sidewalk delivery bots on Uber
          Eats
        </h2>
        <p className="info">
          <a href="/" className="author">
            Rebecca Bellan
          </a>
          <time>2023-05-30</time>
        </p>
        <p className="summary">
          Serve Robotics, the Uber spinout that builds autonomous sidewalk
          delivery robots, is expanding its partnership with Uber Eats. The
          Nvidia-backed startup will now deploy up to 2,000 of its cute little
          bots via Uber’s platform in multiple markets across the U.S.
        </p>
      </div>
    </div>
  );
};

export default Post;
