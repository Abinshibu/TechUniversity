function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function PostCard({ post }) {
  return (
    <article className="card h-100 border-0 shadow-sm bg-white blog-post-card hover-card overflow-hidden">
      <div
        className="blog-post-image d-flex align-items-center justify-content-center text-white fw-semibold"
        style={{ background: post.image.gradient }}
        aria-hidden="true"
      >
        <span className="blog-post-image-label">{post.image.label}</span>
      </div>
      <div className="card-body p-4 d-flex flex-column">
        <div className="d-flex flex-wrap align-items-center gap-2 mb-3">
          <time className="text-muted small" dateTime={post.date}>
            {formatDate(post.date)}
          </time>
          <span className="text-muted small" aria-hidden="true">
            ·
          </span>
          <span className="text-muted small">{post.readingTime}</span>
        </div>
        <h2 className="h5 fw-bold text-dark mb-2">{post.title}</h2>
        <div className="d-flex flex-wrap gap-2 mb-3">
          {post.tags.map((tag) => (
            <span key={tag} className="badge blog-tag">
              {tag}
            </span>
          ))}
        </div>
        <p className="text-muted small flex-grow-1 mb-4" style={{ lineHeight: '1.65' }}>
          {post.excerpt}
        </p>
        <div className="d-flex align-items-center justify-content-between mt-auto pt-2 border-top">
          <span className="text-muted small">By {post.author}</span>
          <button type="button" className="btn btn-link link-primary fw-semibold text-decoration-none p-0 blog-read-more">
            Read more
            <svg className="ms-1" width="14" height="14" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
              />
            </svg>
          </button>
        </div>
      </div>
    </article>
  );
}
