import { useScrollPosition } from '../../hooks/useScrollPosition';
import { scrollToTop } from '../../utils/helpers';

export default function BackToTop() {
  const scrollY = useScrollPosition();
  const isVisible = scrollY > 500;

  return (
    <button
      className={`back-to-top ${isVisible ? 'show' : ''}`}
      aria-label="Back to top"
      onClick={scrollToTop}
    >
      <i className="bi bi-arrow-up"></i>
    </button>
  );
}
