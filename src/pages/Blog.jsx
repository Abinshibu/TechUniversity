import { useMemo, useState } from 'react';
import PostCard from '../components/PostCard';
import posts, { getAllTags } from '../data/posts';

const ALL_TAGS = 'All';

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTag, setActiveTag] = useState(ALL_TAGS);

  const tags = useMemo(() => getAllTags(posts), []);

  const filteredPosts = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return posts.filter((post) => {
      const matchesTag = activeTag === ALL_TAGS || post.tags.includes(activeTag);
      if (!matchesTag) return false;
      if (!query) return true;

      const searchable = [post.title, post.excerpt, post.author, ...post.tags].join(' ').toLowerCase();
      return searchable.includes(query);
    });
  }, [searchQuery, activeTag]);

  return (
    <div className="container my-5">
    <div className="blog-page">
      {/* Hero */}
      <section className="mb-5 pb-2">
        <div className="row align-items-end">
          <div className="col-lg-8">
            <span className="text-primary text-uppercase fw-bold small tracking-wider">University Blog</span>
            <h1 className="display-5 fw-extrabold text-dark mt-2 mb-3">News, Insights & Campus Stories</h1>
            <p className="lead text-muted mb-0" style={{ lineHeight: '1.7', maxWidth: '640px' }}>
              Stay updated on research breakthroughs, student achievements, admissions guidance, and events from across Tech University.
            </p>
          </div>
          <div className="col-lg-4 mt-4 mt-lg-0">
            <div className="blog-stats-pill rounded-4 p-3 p-md-4 text-center text-lg-end">
              <span className="d-block fw-bold text-primary fs-4">{posts.length}</span>
              <span className="text-muted small">Articles published this year</span>
            </div>
          </div>
        </div>
      </section>

      {/* Search & Filters */}
      <section className="mb-4">
        <div className="blog-toolbar rounded-4 p-3 p-md-4 shadow-sm bg-white border">
          <div className="row g-3 align-items-center">
            <div className="col-lg-5">
              <label htmlFor="blog-search" className="form-label small fw-semibold text-muted mb-2">
                Search articles
              </label>
              <div className="input-group blog-search-group">
                <span className="input-group-text bg-white border-end-0">
                  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </span>
                <input
                  id="blog-search"
                  type="search"
                  className="form-control border-start-0 ps-0"
                  placeholder="Search by title, author, or topic..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  aria-describedby="search-results-count"
                />
                {searchQuery && (
                  <button
                    type="button"
                    className="btn btn-outline-secondary border-start-0"
                    onClick={() => setSearchQuery('')}
                    aria-label="Clear search"
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>
            <div className="col-lg-7">
              <span className="form-label small fw-semibold text-muted mb-2 d-block">Filter by topic</span>
              <div className="d-flex flex-wrap gap-2" role="group" aria-label="Filter posts by tag">
                <button
                  type="button"
                  className={`btn btn-sm blog-tag-filter ${activeTag === ALL_TAGS ? 'active' : ''}`}
                  onClick={() => setActiveTag(ALL_TAGS)}
                  aria-pressed={activeTag === ALL_TAGS}
                >
                  {ALL_TAGS}
                </button>
                {tags.map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    className={`btn btn-sm blog-tag-filter ${activeTag === tag ? 'active' : ''}`}
                    onClick={() => setActiveTag(tag)}
                    aria-pressed={activeTag === tag}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        <p id="search-results-count" className="text-muted small mt-3 mb-0">
          Showing {filteredPosts.length} of {posts.length} {filteredPosts.length === 1 ? 'article' : 'articles'}
          {activeTag !== ALL_TAGS && (
            <>
              {' '}
              in <strong className="text-dark">{activeTag}</strong>
            </>
          )}
          {searchQuery.trim() && (
            <>
              {' '}
              matching &ldquo;{searchQuery.trim()}&rdquo;
            </>
          )}
        </p>
      </section>

      {/* Post Grid */}
      <section className="mb-5">
        {filteredPosts.length > 0 ? (
          <div className="row g-4">
            {filteredPosts.map((post) => (
              <div key={post.id} className="col-md-6 col-lg-4">
                <PostCard post={post} />
              </div>
            ))}
          </div>
        ) : (
          <div className="blog-empty-state text-center rounded-4 p-5 bg-white border shadow-sm">
            <div className="blog-empty-icon mx-auto mb-3">
              <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
            </div>
            <h2 className="h5 fw-bold text-dark mb-2">No articles found</h2>
            <p className="text-muted small mb-4 mx-auto" style={{ maxWidth: '420px' }}>
              Try adjusting your search or selecting a different topic to discover more campus stories.
            </p>
            <button
              type="button"
              className="btn btn-outline-primary btn-sm"
              onClick={() => {
                setSearchQuery('');
                setActiveTag(ALL_TAGS);
              }}
            >
              Reset filters
            </button>
          </div>
        )}
      </section>

      {/* Newsletter */}
      <section className="mb-2">
        <div className="blog-newsletter rounded-4 overflow-hidden shadow-sm">
          <div className="row g-0 align-items-stretch">
            <div className="col-lg-5 blog-newsletter-accent d-flex align-items-center justify-content-center p-4 p-lg-5">
              <div className="text-white text-center text-lg-start">
                <div className="blog-newsletter-icon mb-3 mx-auto mx-lg-0">
                  <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h2 className="h4 fw-bold text-white mb-2">Stay in the loop</h2>
                <p className="mb-0 small opacity-90" style={{ lineHeight: '1.65' }}>
                  Get the latest university news, event invites, and research highlights delivered to your inbox each month.
                </p>
              </div>
            </div>
            <div className="col-lg-7 bg-white p-4 p-md-5">
              <form
                className="blog-newsletter-form"
                onSubmit={(e) => e.preventDefault()}
                aria-label="Newsletter signup form"
              >
                <label htmlFor="newsletter-email" className="form-label fw-semibold text-dark">
                  Email address
                </label>
                <div className="input-group mb-3">
                  <input
                    id="newsletter-email"
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="you@example.com"
                    autoComplete="email"
                  />
                  <button type="submit" className="btn btn-primary btn-lg px-4">
                    Subscribe
                  </button>
                </div>
                <p className="text-muted small mb-0" style={{ lineHeight: '1.6' }}>
                  We respect your privacy. Your email will only be used for university updates and you can unsubscribe at any time. We never share your information with third parties.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
    </div>
  );
}

