import './ProjectImage.scss'
import { useRef, useEffect } from 'react';

const ProjectImage = ({ src, alt }) => {
  const imgRef = useRef(null);
  const imgContainerRef = useRef(null);

  useEffect(() => {
    const handleImageLoad = () => {
      const imgHeight = imgRef.current.offsetHeight;
      const containerHeight = imgContainerRef.current.offsetHeight;
      const scrollDistance = imgHeight - containerHeight;

      // SCSS variables can't be dynamically updated.
      imgContainerRef.current.style.setProperty('--scroll-distance', `-${scrollDistance}px`);
    };

    const imgElement = imgRef.current;

    if (imgElement.complete) {
      handleImageLoad();
    } else {
      imgElement.addEventListener('load', handleImageLoad);
    }

    return () => {
      imgElement.removeEventListener('load', handleImageLoad);
    };
  }, []);

  return (
    <div className="project-img" ref={imgContainerRef}>
      <img src={src} alt={alt + ' project image'} ref={imgRef} />
    </div>
  );
};

export default ProjectImage;
