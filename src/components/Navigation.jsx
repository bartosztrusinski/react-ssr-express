export default function Navigation({
  isCounterVisible,
  showCounter,
  showPosts,
}) {
  return (
    <nav>
      <button
        className={isCounterVisible ? 'active' : ''}
        onClick={() => showCounter()}>
        Counter
      </button>
      <button
        className={isCounterVisible ? '' : 'active'}
        onClick={() => showPosts()}>
        Posts
      </button>
    </nav>
  );
}
